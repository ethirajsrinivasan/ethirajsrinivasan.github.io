import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/portfolio')
const re = /<PortfolioCaption>\{"\{\\"([\s\S]*?)\\"\}"\}<\/PortfolioCaption>/g

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx')) continue
  const p = path.join(dir, f)
  let s = fs.readFileSync(p, 'utf8')
  const next = s.replace(re, (_, label) => `<PortfolioCaption>{${JSON.stringify(label)}}</PortfolioCaption>`)
  if (next !== s) {
    fs.writeFileSync(p, next)
    console.log('fixed:', f)
  }
}
