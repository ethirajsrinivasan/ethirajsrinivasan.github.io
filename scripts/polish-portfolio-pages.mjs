/**
 * Polish auto-converted portfolio pages: unwrap string literals, fix links, prune imports.
 * Run: node scripts/polish-portfolio-pages.mjs && npx prettier --write "src/pages/portfolio/*.tsx"
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/portfolio')
const SKIP = new Set(['spatio-temporal-analysis.tsx'])

const COMPONENTS = [
  'PortfolioSection',
  'PortfolioProse',
  'PortfolioCenter',
  'PortfolioLink',
  'PortfolioImage',
  'PortfolioCaption',
  'PortfolioFigure',
]

function unwrapJsxStrings(content) {
  return content.replace(/\{"((?:\\.|[^"\\])*)"\}/g, (match, inner) => {
    try {
      const text = JSON.parse(`"${inner}"`)
      if (/[<>{}]/.test(text)) return match
      return text
    } catch {
      return match
    }
  })
}

function pruneImports(content) {
  const used = COMPONENTS.filter((c) => content.includes(`<${c}`) || content.includes(`<${c} `))
  const importBlock = `import {\n  ${used.join(',\n  ')},\n} from '@/components/portfolio'`
  return content.replace(
    /import \{\n[\s\S]*?\} from '@\/components\/portfolio'/,
    importBlock
  )
}

function normalizeTechnologies(content) {
  return content.replace(/technologies=\{\[([^\]]+)\]\}/g, (_, inner) => {
    const items = [...inner.matchAll(/"([^"]+)"/g)].map((m) => `'${m[1].replace(/'/g, "\\'")}'`)
    return `technologies={[${items.join(', ')}]}`
  })
}

function applyFixes(content, filename) {
  let s = content
  s = unwrapJsxStrings(s)
  s = s.replace(
    /href="\.\.\/blogs\/mutually-exclusive-alias-method-and-prepend\.html"/,
    'href="/blogs/mutually-exclusive-alias-method-and-prepend"'
  )
  s = s.replace(
    /href="https:\/\/github\.com\/ GraphProcessor\/CommunityDetectionCodes#algorithms"/,
    'href="https://github.com/GraphProcessor/CommunityDetectionCodes#algorithms"'
  )
  s = s.replace(/<div className="row[^"]*">/g, '<PortfolioProse>')
  s = s.replace(/<div className="row">/g, '<PortfolioProse>')
  s = s.replace(/<\/motion.div>/g, '</PortfolioProse>') // typo guard
  s = s.replace(/<\/div>\s*(?=\s*<\/PortfolioProse>)/g, '') // over-replace guard - skip
  // row closing: replace standalone </motion.div> after row content - use targeted
  s = s.replace(
    /(<PortfolioProse>\s*<PortfolioCenter>[\s\S]*?<\/PortfolioCenter>\s*)<\/div>/g,
    '$1</PortfolioProse>'
  )
  // empty nested ol
  s = s.replace(/\s*<ol>\s*<\/ol>/g, '')
  // empty li blocks
  s = s.replace(/\s*<li>\s*<\/li>/g, '')
  // trim whitespace-only lines in p that became lone spaces
  s = s.replace(/<p className="text-justify">\s*<\/p>\n?/g, '')
  s = normalizeTechnologies(s)
  s = pruneImports(s)

  if (filename === 'smart-interactive-wall.tsx') {
    s = s.replace(
      /<PortfolioSection title="Project Links">[\s\S]*?<\/PortfolioSection>/,
      `<PortfolioSection title="Project Links">
        <PortfolioProse>
          <PortfolioCenter>
            <ul>
              <li>
                <PortfolioLink href="https://www.youtube.com/watch?v=lv5bLhFmaWs">Demo video</PortfolioLink>
              </li>
            </ul>
          </PortfolioCenter>
        </PortfolioProse>
      </PortfolioSection>`
    )
    s = s.replace(
      /<iframe className="w-full h-full min-h-\[280px\]">\s*<\/iframe>/,
      `<iframe
              className="w-full h-full min-h-[280px]"
              src="https://www.youtube.com/embed/lv5bLhFmaWs"
              title="Smart Interactive Wall demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />`
    )
  }

  if (filename === 'u-ask.tsx') {
    s = s.replace(
      /<iframe className="w-full h-full min-h-\[280px\]">\s*<\/iframe>/,
      `<iframe
              className="w-full h-full min-h-[280px]"
              src="https://www.youtube.com/embed/poZ0JIMNDbY"
              title="uAsk demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />`
    )
  }

  return s
}

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx') || SKIP.has(f)) continue
  const p = path.join(dir, f)
  const out = applyFixes(fs.readFileSync(p, 'utf8'), f)
  fs.writeFileSync(p, out)
  console.log('polished:', f)
}
