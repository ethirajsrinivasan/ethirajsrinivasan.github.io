/**
 * One-time: convert portfolio pages from dangerouslySetInnerHTML to React sections.
 * Run: node scripts/convert-portfolio-sections.mjs
 */
import fs from 'fs'
import path from 'path'
import { load } from 'cheerio'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const portfolioDir = path.join(__dirname, '../src/pages/portfolio')

function escapeJsxText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\{/g, '{`{`}')
    .replace(/\}/g, '{`}`}')
    .trim()
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function attrsToJsx($el) {
  const parts = []
  const cls = $el.attr('class')
  if (cls) {
    const keep = cls
      .split(/\s+/)
      .filter((c) => !['portfolio-section-body', 'text-slate-700', 'leading-relaxed', 'space-y-4'].includes(c))
    if (keep.length) parts.push(`className="${keep.join(' ')}"`)
  }
  return parts.length ? ' ' + parts.join(' ') : ''
}

function childrenJsx($, el, depth) {
  const out = []
  $(el)
    .contents()
    .each((_, node) => {
      const bit = nodeToJsx($, node, depth)
      if (bit) out.push(bit)
    })
  return out.join('\n')
}

function nodeToJsx($, node, depth) {
  const pad = '      '.repeat(depth)
  if (node.type === 'text') {
    const t = decodeEntities($(node).text())
    if (!t.trim()) return ''
    return `${pad}{${JSON.stringify(t)}}`
  }
  if (node.type !== 'tag') return ''

  const $el = $(node)
  const tag = node.tagName.toLowerCase()

  if (tag === 'section') return ''
  if (tag === 'h2') return ''

  if (tag === 'div') {
    const cls = $el.attr('class') || ''
    if (cls.includes('grid grid-cols')) {
      return `${pad}<PortfolioProse>\n${childrenJsx($, node, depth + 1)}\n${pad}</PortfolioProse>`
    }
    if (cls.includes('text-center')) {
      const imgs = $el.find('> img')
      if (imgs.length === 1 && $el.children().length === 1) {
        const img = imgs.first()
        return `${pad}<PortfolioFigure src=${JSON.stringify(img.attr('src'))} alt=${JSON.stringify(img.attr('alt') || '')} />`
      }
      return `${pad}<PortfolioCenter>\n${childrenJsx($, node, depth + 1)}\n${pad}</PortfolioCenter>`
    }
    if (cls.includes('portfolio-section-body')) {
      return childrenJsx($, node, depth)
    }
    return `${pad}<div${attrsToJsx($el)}>\n${childrenJsx($, node, depth + 1)}\n${pad}</div>`
  }

  if (tag === 'a') {
    const href = $el.attr('href') || '#'
    const inner = childrenJsx($, node, depth).trim()
    const text = inner || JSON.stringify(decodeEntities($el.text().trim()))
    const child = inner && !inner.startsWith('{') ? `{${JSON.stringify(decodeEntities($el.text().trim()))}}` : text
    return `${pad}<PortfolioLink href=${JSON.stringify(href)}>${child}</PortfolioLink>`
  }

  if (tag === 'img') {
    return `${pad}<PortfolioImage src=${JSON.stringify($el.attr('src'))} alt=${JSON.stringify($el.attr('alt') || '')} />`
  }

  if (tag === 'p') {
    const cls = $el.attr('class') || ''
    if (cls.includes('text-center text-sm font-medium')) {
      const text = decodeEntities($el.text().trim())
      return `${pad}<PortfolioCaption>{${JSON.stringify(text)}}</PortfolioCaption>`
    }
    const text = decodeEntities($el.text())
    if ($el.children().length === 0) {
      if (cls.includes('text-justify')) {
        return `${pad}<p className="text-justify">{${JSON.stringify(text)}}</p>`
      }
      return `${pad}<p>{${JSON.stringify(text)}}</p>`
    }
    return `${pad}<p${attrsToJsx($el)}>\n${childrenJsx($, node, depth + 1)}\n${pad}</p>`
  }

  if (tag === 'ul' || tag === 'ol') {
    return `${pad}<${tag}>\n${childrenJsx($, node, depth + 1)}\n${pad}</${tag}>`
  }

  if (tag === 'li') {
    return `${pad}<li>\n${childrenJsx($, node, depth + 1)}\n${pad}</li>`
  }

  if (['strong', 'em', 'br', 'span'].includes(tag)) {
    const inner = childrenJsx($, node, depth + 1)
    if (tag === 'br') return `${pad}<br />`
    return `${pad}<${tag}${attrsToJsx($el)}>\n${inner}\n${pad}</${tag}>`
  }

  const inner = childrenJsx($, node, depth + 1)
  return `${pad}<${tag}${attrsToJsx($el)}>\n${inner}\n${pad}</${tag}>`
}

function fixPortfolioCaption(line) {
  return line.replace(
    /<PortfolioCaption>([^<]*)<\/PortfolioCaption>/g,
    (_, t) => `<PortfolioCaption>{${JSON.stringify(t.trim())}}</PortfolioCaption>`
  )
}

function fixPortfolioLink(line) {
  return line.replace(/<PortfolioLink href="([^"]*)">([^<{][^<]*)<\/PortfolioLink>/g, (_, href, text) => {
    return `<PortfolioLink href=${JSON.stringify(href)}>${JSON.stringify(text.trim())}</PortfolioLink>`
  })
}

function sectionToJsx($, section, depth = 3) {
  const $sec = $(section)
  const title = decodeEntities($sec.find('> h2').first().text().trim())
  const body = $sec.find('.portfolio-section-body').first()
  if (!body.length) {
    const inner = childrenJsx($, $sec.get(0), depth)
    return `${'  '.repeat(2)}<PortfolioSection title=${JSON.stringify(title)}>\n${inner}\n${'  '.repeat(2)}</PortfolioSection>`
  }
  const bodyEl = body.get(0)
  const inner = childrenJsx($, bodyEl, depth)
  return `${'  '.repeat(2)}<PortfolioSection title=${JSON.stringify(title)}>\n${inner}\n${'  '.repeat(2)}</PortfolioSection>`
}

function convertFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8')
  const htmlMatch = src.match(/dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}/)
  if (!htmlMatch) {
    console.log('skip (no html):', path.basename(filePath))
    return
  }

  const html = htmlMatch[1]
  const $ = load(html, null, false)
  const sections = $('section.mb-12')
    .toArray()
    .map((sec) => sectionToJsx($, sec))
    .join('\n')

  let body = sections
    .split('\n')
    .map((l) => fixPortfolioCaption(l))
    .map((l) => fixPortfolioLink(l))
    .join('\n')
    // fix accidental motion.div from converter
    .replace(/<motion\.div/g, '<div')
    .replace(/<\/motion\.motion.div>/g, '</div>')
    .replace(/<\/motion\.motion.div>/g, '</div>')
    .replace(/tag === 'motion\.div'/g, '') // noop
    .replace(/<\/motion\.div>/g, '</div>')

  // Fix PortfolioLink with string children
  body = body.replace(
    /<PortfolioLink href=(\{[^}]+\}|"[^"]*")>(\{[^}]+\}|[^{][^<]*)<\/PortfolioLink>/g,
    (m, href, child) => {
      if (child.startsWith('{')) return `<PortfolioLink href=${href}>${child}</PortfolioLink>`
      return `<PortfolioLink href=${href}>{${JSON.stringify(child)}}</PortfolioLink>`
    }
  )

  // Fix caption without braces
  body = body.replace(/<PortfolioCaption>([^<{]+)<\/PortfolioCaption>/g, (_, t) => {
    return `<PortfolioCaption>{${JSON.stringify(t.trim())}}</PortfolioCaption>`
  })

  const componentMatch = src.match(/export default function (\w+)/)
  const fnName = componentMatch?.[1] || 'Page'

  const newChildren = `      ${body.split('\n').join('\n      ').trim()}`

  src = src.replace(
    /import PortfolioLayout, \{ portfolioContentClassName \} from '@\/components\/PortfolioLayout'/,
    `import PortfolioLayout from '@/components/PortfolioLayout'\nimport {\n  PortfolioSection,\n  PortfolioProse,\n  PortfolioCenter,\n  PortfolioLink,\n  PortfolioImage,\n  PortfolioCaption,\n  PortfolioFigure,\n} from '@/components/portfolio'`
  )

  src = src.replace(
    /\s*<div\s*\n\s*className=\{portfolioContentClassName\}\s*\n\s*dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}\s*\n\s*suppressHydrationWarning\s*\n\s*\/>\s*/,
    `\n${newChildren}\n`
  )

  fs.writeFileSync(filePath, src)
  console.log('converted:', path.basename(filePath))
}

for (const name of fs.readdirSync(portfolioDir)) {
  if (name.endsWith('.tsx')) {
    convertFile(path.join(portfolioDir, name))
  }
}
