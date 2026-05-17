import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/blogs')

const patterns = [
  /\n\s+\[&larr; Previous Blog\]\([^)]+\)/g,
  /\n\s+\[Next Blog &rarr; \]\([^)]+\)/g,
  // Title line immediately before prev/next when it is a standalone related-post title
  /\n\s+[^\n]+\n\s+\[&larr; Previous Blog\]\([^)]+\)/g,
  /\n\s+[^\n]+\n\s+\[Next Blog &rarr; \]\([^)]+\)/g,
]

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx') || f === 'index.tsx') continue
  const p = path.join(dir, f)
  let s = fs.readFileSync(p, 'utf8')
  const before = s
  for (const re of patterns) s = s.replace(re, '')
  if (s !== before) {
    fs.writeFileSync(p, s)
    console.log('stripped:', f)
  }
}
