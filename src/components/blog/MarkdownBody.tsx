import { Children, isValidElement, useMemo, type ReactElement, type ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {
  IMAGE_CAPTION_CLASS,
  remarkBlogStructure,
  stripLeadHeadings,
} from '@/lib/remark-blog-structure'
import {
  getBlogBySlug,
  isEmbedImageLinkCard,
  isOwnSiteHomepage,
  isPlainImageLink,
  isPreviewCardHost,
  isVerticalLinkCardHost,
  linkCardSource,
  parseBlogSlug,
} from '@/lib/blog-links'
import { lookupLinkCardMeta } from '@/lib/link-card-meta'
import { plainTextMarkdown } from '@/lib/plain-text-markdown'
import { resolveImageSrc } from '@/lib/resolve-image-src'
import ArticleLinkCard from './ArticleLinkCard'
import {
  isEmbeddableLinkParagraph,
  unwrapBlockquoteContent,
  unwrapParagraphBlockContent,
} from './block-embed'
import SiteEmbedFigure from './SiteEmbedFigure'
import CodeBlock from './CodeBlock'
import { useBlogArticle } from './context'
import { bc, externalLink } from './classes'

function fencedCodeText(children: ReactNode): string {
  return String(children).replace(/\n$/, '')
}

type MarkdownBodyProps = {
  content: string
}

function markdownText(children: ReactNode): string {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(markdownText).join('')
  if (children && typeof children === 'object' && 'props' in children) {
    return markdownText((children as { props: { children?: ReactNode } }).props.children)
  }
  return ''
}

function findImgProps(children: ReactNode): { src?: string; alt?: string } | null {
  let found: { src?: string; alt?: string } | null = null
  Children.forEach(children, (child) => {
    if (found) return
    if (!isValidElement(child)) return
    const el = child as ReactElement<{ src?: string; alt?: string; children?: ReactNode }>
    if (typeof el.props.src === 'string') {
      found = { src: el.props.src, alt: el.props.alt }
      return
    }
    if (el.props.children) {
      found = findImgProps(el.props.children)
    }
  })
  return found
}

function isMediumSectionDivider(children: ReactNode): boolean {
  const text = markdownText(children).replace(/\u00a0/g, ' ').trim()
  if (!text) return false
  const compact = text.replace(/\s+/g, '')
  return compact === '•••' || /^•{3}$/.test(compact)
}

function hasCaptionClass(node: unknown): boolean {
  if (!node || typeof node !== 'object' || !('properties' in node)) return false
  const props = (node as { properties?: Record<string, unknown> }).properties
  const cls = props?.className ?? props?.class
  if (Array.isArray(cls)) return cls.includes(IMAGE_CAPTION_CLASS)
  if (typeof cls === 'string') return cls.split(/\s+/).includes(IMAGE_CAPTION_CLASS)
  return false
}

function MediumSectionDivider() {
  return (
    <div className={bc.sectionDivider} role="presentation" aria-hidden="true">
      <span className={bc.sectionDividerDots}>
        <span className={bc.sectionDividerDot} />
        <span className={bc.sectionDividerDot} />
        <span className={bc.sectionDividerDot} />
      </span>
    </div>
  )
}

function MarkdownLink({
  href,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  if (!href) {
    return <a {...props}>{children}</a>
  }

  const imgEarly = findImgProps(children)
  const internalBlogSlug = parseBlogSlug(href)
  if (internalBlogSlug) {
    const target = getBlogBySlug(internalBlogSlug)
    if (imgEarly?.src && target) {
      return (
        <ArticleLinkCard
          href={`/blogs/${internalBlogSlug}/`}
          title={target.title}
          description={plainTextMarkdown(target.excerpt)}
          image={imgEarly.src}
          variant="medium"
        />
      )
    }
    return (
      <a {...props} href={`/blogs/${internalBlogSlug}/`} className={bc.link}>
        {children}
      </a>
    )
  }

  if (imgEarly?.src && isOwnSiteHomepage(href)) {
    const meta = lookupLinkCardMeta(href)
    return (
      <SiteEmbedFigure
        image={imgEarly.src}
        title={meta?.title ?? imgEarly.alt ?? 'Ethiraj Srinivasan'}
        description={meta?.description}
      />
    )
  }

  const img = findImgProps(children)
  const text = markdownText(children).replace(/\u00a0/g, ' ').trim()
  const meta = lookupLinkCardMeta(href)
  const verticalCard = isVerticalLinkCardHost(href)

  if (img?.src && isPlainImageLink(href, img.src)) {
    const resolvedHref = resolveImageSrc(href)
    const resolvedImg = resolveImageSrc(img.src)
    if (resolvedHref === resolvedImg) {
      return (
        <img
          src={resolvedImg}
          className={bc.img}
          loading="lazy"
          alt={img.alt ?? ''}
        />
      )
    }
    return (
      <a
        {...props}
        href={resolvedHref}
        className={bc.link}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? externalLink.rel : undefined}
      >
        {children}
      </a>
    )
  }

  if (img?.src && isEmbedImageLinkCard(href, img.src)) {
    const cardTitle = meta?.title ?? img.alt ?? text ?? 'Read article'
    const cardDesc =
      meta?.description ?? (text && text !== cardTitle ? text : undefined)
    return (
      <ArticleLinkCard
        href={href}
        title={cardTitle}
        description={cardDesc}
        image={img.src}
        source={verticalCard ? undefined : linkCardSource(href)}
        variant={verticalCard ? 'medium' : 'horizontal'}
      />
    )
  }

  if (img?.src) {
    return (
      <a
        {...props}
        href={href}
        className={bc.link}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? externalLink.rel : undefined}
      >
        {children}
      </a>
    )
  }

  if (!isPreviewCardHost(href)) {
    return (
      <a
        {...props}
        href={href}
        className={bc.link}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? externalLink.rel : undefined}
      >
        {children}
      </a>
    )
  }

  const showTextCard = text.length > 24 && verticalCard

  if (showTextCard) {
    return (
      <ArticleLinkCard
        href={href}
        title={meta?.title ?? text}
        description={meta?.description}
        source={verticalCard ? undefined : linkCardSource(href)}
        variant={verticalCard ? 'medium' : 'horizontal'}
      />
    )
  }

  return (
    <a
      {...props}
      href={href}
      className={bc.link}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? externalLink.rel : undefined}
    >
      {children}
    </a>
  )
}

export default function MarkdownBody({ content }: MarkdownBodyProps) {
  const { title, excerpt } = useBlogArticle()
  const prepared = useMemo(
    () => stripLeadHeadings(content, title, excerpt),
    [content, title, excerpt]
  )

  return (
    <div className={bc.prose}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBlogStructure]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: ({ children, ...props }) =>
            isMediumSectionDivider(children) ? (
              <MediumSectionDivider />
            ) : (
              <h2 {...props}>{children}</h2>
            ),
          p: ({ node, children, ...props }) => {
            const unwrapped = unwrapParagraphBlockContent(children)
            if (unwrapped !== children || isEmbeddableLinkParagraph(children)) {
              return <>{unwrapped}</>
            }
            if (hasCaptionClass(node)) {
              return (
                <p {...props} className={bc.imageCaption}>
                  {children}
                </p>
              )
            }
            return <p {...props}>{children}</p>
          },
          blockquote: ({ children, ...props }) => (
            <blockquote {...props} className={bc.blockquote}>
              {unwrapBlockquoteContent(children)}
            </blockquote>
          ),
          img: ({ src, alt, ...props }) => (
            <img
              {...props}
              src={resolveImageSrc(typeof src === 'string' ? src : undefined)}
              className={bc.img}
              loading="lazy"
              alt={alt ?? ''}
            />
          ),
          a: MarkdownLink,
          pre: ({ children }) => <>{children}</>,
          code: ({
            className,
            children,
            ...props
          }: React.ComponentProps<'code'> & { className?: string }) => {
            const match = /language-([\w-]+)/.exec(className ?? '')
            const raw = String(children)
            // Fenced blocks from mdast always end with a newline; inline code does not.
            const isBlock = Boolean(match) || raw.endsWith('\n')
            const text = fencedCodeText(children)

            if (isBlock) {
              return <CodeBlock language={match?.[1] ?? 'text'} code={text} />
            }

            return (
              <code className={bc.inlineCode} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {prepared}
      </ReactMarkdown>
    </div>
  )
}
