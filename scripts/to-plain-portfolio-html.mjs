/**
 * Replace Portfolio* components with plain HTML + pc classes.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/portfolio')

function convertFigureBlock(match) {
  const src = match.match(/src="([^"]+)"/)?.[1]
  const alt = match.match(/alt="([^"]+)"/)?.[1]
  const caption = match.match(/caption="([^"]+)"/)?.[1]
  if (!src || !alt) return match
  const capLine = caption ? `\n          <p className={pc.caption}>${caption}</p>` : ''
  return `<div className={pc.figure}>
          <img src="${src}" alt="${alt}" className={pc.img} />${capLine}
        </div>`
}

function convert(content) {
  let s = content

  s = s.replace(
    /import \{\n[\s\S]*?\} from ['"]@\/components\/portfolio['"];?\n/,
    "import { pc, externalLink } from '@/components/portfolio/classes'\n"
  )

  s = s.replace(/<PortfolioFigure[\s\S]*?\/>/g, convertFigureBlock)

  s = s.replace(
    /<PortfolioSection title="([^"]+)">/g,
    '<section className={pc.section}>\n        <h2 className={pc.heading}>$1</h2>\n        <div className={pc.body}>'
  )
  s = s.replace(/<\/PortfolioSection>/g, '</div>\n      </section>')

  s = s.replace(/<PortfolioProse>/g, '<div className={pc.grid}>')
  s = s.replace(/<\/PortfolioProse>/g, '</div>')

  s = s.replace(/<PortfolioCenter>/g, '<div className={pc.center}>')
  s = s.replace(/<\/PortfolioCenter>/g, '</div>')

  s = s.replace(/<PortfolioCaption>/g, '<p className={pc.caption}>')
  s = s.replace(/<\/PortfolioCaption>/g, '</p>')

  s = s.replace(
    /<PortfolioLink href="([^"]+)">([\s\S]*?)<\/PortfolioLink>/g,
    '<a href="$1" className={pc.link} {...externalLink}>$2</a>'
  )

  s = s.replace(/className="text-justify"/g, 'className={pc.justify}')
  s = s.replace(/className="space-y-8 text-left list-none pl-0"/g, 'className={pc.topicList}')
  s = s.replace(
    /className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg my-6"/g,
    'className={pc.video}'
  )
  s = s.replace(/className="w-full h-full min-h-\[280px\]"/g, 'className={pc.iframe}')

  return s
}

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx')) continue
  const p = path.join(dir, f)
  const src = fs.readFileSync(p, 'utf8')
  if (!src.includes('PortfolioSection')) continue
  fs.writeFileSync(p, convert(src))
  console.log('converted:', f)
}
