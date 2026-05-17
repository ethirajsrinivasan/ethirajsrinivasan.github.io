import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { bc, externalLink } from './classes'

type MarkdownBodyProps = {
  content: string
}

export default function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className={bc.prose}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ ...props }) => (
            <img {...props} className={bc.img} loading="lazy" alt={props.alt ?? ''} />
          ),
          a: ({ ...props }) => (
            <a
              {...props}
              className={bc.link}
              target={props.href?.startsWith('http') ? '_blank' : undefined}
              rel={props.href?.startsWith('http') ? externalLink.rel : undefined}
            />
          ),
          code: ({
            className,
            children,
            ...props
          }: React.ComponentProps<'code'> & { className?: string }) => {
            const isInline = !className?.includes('language-')
            return isInline ? (
              <code className={bc.inlineCode} {...props}>
                {children}
              </code>
            ) : (
              <code className="block" {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
