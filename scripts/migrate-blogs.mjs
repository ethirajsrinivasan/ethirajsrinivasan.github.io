/**
 * Migrate blog pages from BlogPostPage to BlogShell + MarkdownBody.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/blogs')

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.tsx') || f === 'index.tsx') continue
  const p = path.join(dir, f)
  let s = fs.readFileSync(p, 'utf8')
  if (!s.includes('BlogPostPage')) continue

  const fnMatch = s.match(/export default function (\w+)/)
  const fnName = fnMatch?.[1] ?? 'BlogPostPage'

  s = s.replace(
    /import type \{ BlogPost \} from '@\/types\/blog'\nimport BlogPostPage from '@\/components\/BlogPostPage'/,
    `import type { BlogPost } from '@/types/blog'\nimport BlogShell from '@/components/blog/shell'\nimport MarkdownBody from '@/components/blog/MarkdownBody'`
  )
  s = s.replace(
    /import type \{ BlogPost \} from "@\/types\/blog"\nimport BlogPostPage from "@\/components\/BlogPostPage"/,
    `import type { BlogPost } from '@/types/blog'\nimport BlogShell from '@/components/blog/shell'\nimport MarkdownBody from '@/components/blog/MarkdownBody'`
  )

  s = s.replace(
    /export default function \w+\(\) \{\n  return <BlogPostPage post=\{post\} \/>\n\}/,
    `export default function ${fnName}() {
  return (
    <BlogShell
      title={post.title}
      excerpt={post.excerpt}
      image={post.image}
      date={post.date}
      readTime={post.readTime}
    >
      <MarkdownBody content={post.content} />
    </BlogShell>
  )
}`
  )

  fs.writeFileSync(p, s)
  console.log('migrated:', f)
}
