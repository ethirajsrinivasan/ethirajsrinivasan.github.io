import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/portfolio')

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx')) continue
  const slug = f.replace(/\.tsx$/, '')
  const p = path.join(dir, f)
  let s = fs.readFileSync(p, 'utf8')
  if (s.includes(`slug="${slug}"`) || s.includes(`slug='${slug}'`)) continue
  s = s.replace(/<PortfolioShell\n/, `<PortfolioShell\n      slug="${slug}"\n`)
  fs.writeFileSync(p, s)
  console.log('updated:', f)
}
