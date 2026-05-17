import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/blogs')

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx') || f === 'index.tsx') continue
  const p = path.join(dir, f)
  let s = fs.readFileSync(p, 'utf8')
  if (s.includes('slug={post.slug}')) continue
  s = s.replace(
    /<BlogShell\n      title=\{post\.title\}/,
    '<BlogShell\n      slug={post.slug}\n      title={post.title}'
  )
  fs.writeFileSync(p, s)
  console.log('updated:', f)
}
