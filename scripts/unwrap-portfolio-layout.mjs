/**
 * Remove redundant pc.grid + pc.center wrappers; use pc.grid2 for multi-figure rows.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/portfolio')
const SKIP = new Set(['spatio-temporal-analysis.tsx', 'smart-interactive-wall.tsx'])

function unwrap(content) {
  let s = content

  const openTriple =
    /<div className=\{pc\.body\}>\s*<div className=\{pc\.grid\}>\s*<div className=\{pc\.center\}>/g
  while (openTriple.test(s)) {
    s = s.replace(openTriple, '<div className={pc.body}>')
    openTriple.lastIndex = 0
  }
  s = s.replace(
    /<div className=\{pc\.body\}>\s*<div className=\{pc\.grid\}>\s*<div className=\{pc\.center\}>/g,
    '<div className={pc.body}>'
  )

  s = s.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n        </div>\n      </section>')
  s = s.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n        </div>\n      </section>')
  s = s.replace(/\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n        </div>\n      </section>')

  s = s.replace(
    /<div className=\{pc\.grid\}>((?:\s*<div className=\{pc\.figure\}>[\s\S]*?<\/div>\s*)+)<\/div>/g,
    (match, inner) => {
      const n = (inner.match(/className=\{pc\.figure\}/g) || []).length
      if (n >= 2) return `<div className={pc.grid2}>${inner}</div>`
      return inner
    }
  )

  return s
}

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx') || SKIP.has(f)) continue
  fs.writeFileSync(path.join(dir, f), unwrap(fs.readFileSync(path.join(dir, f), 'utf8')))
  console.log('unwrapped:', f)
}
