#!/usr/bin/env node
/**
 * Prebuild step. Three outputs:
 *
 *   1. public/sitemap.xml           — derived from visible blog + portfolio + static pages
 *   2. src/data/readingTimes.json   — { slug: 'N min read' } map computed from each
 *                                     blog post's `content` template literal.
 *   3. public/og-default.png        — rasterized from public/og-default.svg when
 *                                     `rsvg-convert` is on PATH. Best-effort:
 *                                     skipped silently if the binary is missing.
 *
 * Kept dependency-free so it works on GitHub Actions with no extra installs.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const SITE_URL = 'https://ethirajsrinivasan.com'

/* ──────────────────────────────────────────────────────────────────────────────
 * 1. Reading times
 * Each blog post lives at src/pages/blogs/<slug>.tsx and contains:
 *   content: `…markdown body…`
 * We extract the backtick-delimited content string and count words.
 * ────────────────────────────────────────────────────────────────────────── */

const WORDS_PER_MIN = 220

function computeReadingTime(text) {
  const stripped = text
    .replace(/```[\s\S]*?```/g, ' ')         // fenced code
    .replace(/`[^`]*`/g, ' ')                // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')   // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // markdown links → text
    .replace(/[#*_>~|\-]/g, ' ')             // markdown punctuation
    .replace(/\s+/g, ' ')
    .trim()
  const words = stripped ? stripped.split(' ').length : 0
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MIN))
  return `${minutes} min read`
}

function extractContentString(source) {
  // Look for `content: \`…\`` at template-literal boundary. Greedy backtick match.
  const match = source.match(/content:\s*`([\s\S]*?)`,\s*\n/m)
  return match ? match[1] : ''
}

const blogsDir = join(ROOT, 'src/pages/blogs')
const blogFiles = readdirSync(blogsDir).filter(
  (f) => f.endsWith('.tsx') && f !== 'index.tsx'
)

const readingTimes = {}
for (const file of blogFiles) {
  const slug = file.replace(/\.tsx$/, '')
  const source = readFileSync(join(blogsDir, file), 'utf8')
  const content = extractContentString(source)
  readingTimes[slug] = computeReadingTime(content)
}

writeFileSync(
  join(ROOT, 'src/data/readingTimes.json'),
  JSON.stringify(readingTimes, null, 2) + '\n'
)

/* ──────────────────────────────────────────────────────────────────────────────
 * 2. Sitemap
 * Sources of truth:
 *   - src/data/blogIndex.ts (visibleBlogIndex – slugs only)
 *   - src/data/portfolioIndex.ts (visiblePortfolioIndex – slugs + hidden flag)
 *   - static routes hardcoded below
 * Hidden entries are intentionally omitted (still reachable via direct URL but
 * not promoted to crawlers).
 * ────────────────────────────────────────────────────────────────────────── */

function extractSlugsFromIndex(filePath, visibleArrayName) {
  const source = readFileSync(filePath, 'utf8')
  // Grab the source array (`blogDbRows` or `portfolioIndex`) — slugs of entries
  // without a `hidden: true` flag.
  const slugMatches = [...source.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?(?=\},)/g)]
  const visible = []
  for (const m of slugMatches) {
    const block = m[0]
    const slug = m[1]
    if (/hidden:\s*true/.test(block)) continue
    visible.push(slug)
  }
  return visible
}

const blogSlugs = extractSlugsFromIndex(
  join(ROOT, 'src/data/blogIndex.ts'),
  'visibleBlogIndex'
)
const portfolioSlugs = extractSlugsFromIndex(
  join(ROOT, 'src/data/portfolioIndex.ts'),
  'visiblePortfolioIndex'
)

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about/', changefreq: 'monthly', priority: '0.8' },
  { path: '/work-with-me/', changefreq: 'monthly', priority: '0.9' },
  { path: '/blogs/', changefreq: 'weekly', priority: '0.8' },
  { path: '/resume/', changefreq: 'monthly', priority: '0.7' },
  { path: '/now/', changefreq: 'weekly', priority: '0.6' },
]

const today = new Date().toISOString().slice(0, 10)

const urls = [
  ...staticRoutes.map((r) => ({
    loc: `${SITE_URL}${r.path}`,
    lastmod: today,
    changefreq: r.changefreq,
    priority: r.priority,
  })),
  ...blogSlugs.map((slug) => ({
    loc: `${SITE_URL}/blogs/${slug}/`,
    lastmod: today,
    changefreq: 'yearly',
    priority: '0.6',
  })),
  ...portfolioSlugs.map((slug) => ({
    loc: `${SITE_URL}/portfolio/${slug}/`,
    lastmod: today,
    changefreq: 'yearly',
    priority: '0.6',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(ROOT, 'public/sitemap.xml'), xml)

/* ──────────────────────────────────────────────────────────────────────────────
 * 3. OG image rasterization (best-effort)
 * The SVG is the source of truth (easy to edit); the PNG is what crawlers eat.
 * X/Twitter rejects SVG OG images, so we keep a PNG copy in lockstep.
 * ────────────────────────────────────────────────────────────────────────── */

const svgPath = join(ROOT, 'public/og-default.svg')
const pngPath = join(ROOT, 'public/og-default.png')
let ogStatus = 'skipped (rsvg-convert not found)'
if (existsSync(svgPath)) {
  const probe = spawnSync('rsvg-convert', ['--version'], { stdio: 'ignore' })
  if (probe.status === 0) {
    const result = spawnSync(
      'rsvg-convert',
      ['-w', '1200', '-h', '630', svgPath, '-o', pngPath],
      { stdio: 'inherit' }
    )
    ogStatus = result.status === 0 ? 'regenerated og-default.png' : 'rsvg-convert failed'
  }
}

console.log(
  `[build-site-meta] reading times: ${
    Object.keys(readingTimes).length
  } posts · sitemap: ${urls.length} urls · og: ${ogStatus}`
)
