import ReactMarkdown from 'react-markdown'
import { parseBlogSlug } from '@/lib/blog-links'
import { bl, externalLink } from './classes'

type BlogExcerptProps = {
  markdown: string
}

/** Renders the post subtitle/excerpt with inline markdown (links, emphasis). */
export default function BlogExcerpt({ markdown }: BlogExcerptProps) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className={bl.subtitle}>{children}</p>,
        a: ({ href, children, ...props }) => {
          if (!href) return <a {...props}>{children}</a>
          const internalSlug = parseBlogSlug(href)
          const resolvedHref = internalSlug ? `/blogs/${internalSlug}/` : href
          const external = resolvedHref.startsWith('http')
          return (
            <a
              {...props}
              href={resolvedHref}
              className="text-ink-900 font-medium underline decoration-ink-300 underline-offset-4 decoration-1 hover:decoration-ink-900 transition-colors"
              {...(external ? { target: '_blank', rel: externalLink.rel } : {})}
            >
              {children}
            </a>
          )
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}
