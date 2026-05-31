import { Children, isValidElement, type ReactElement, type ReactNode } from 'react'
import {
  isEmbedImageLinkCard,
  isOwnSiteHomepage,
  isPreviewCardHost,
  isVerticalLinkCardHost,
} from '@/lib/blog-links'

export const BLOCK_EMBED_ATTR = 'data-block-embed'

function hasImageChild(children: ReactNode): boolean {
  const items = Children.toArray(children)
  for (const item of items) {
    if (!isValidElement(item)) continue
    const el = item as ReactElement<{ src?: string; children?: ReactNode }>
    if (typeof el.props.src === 'string') return true
    if (hasImageChild(el.props.children)) return true
  }
  return false
}

/** Paragraph that is only a link we replace with a block embed (still an `<a>` at parse time). */
export function isEmbeddableLinkParagraph(children: ReactNode): boolean {
  const items = Children.toArray(children)
  if (items.length !== 1 || !isValidElement(items[0])) return false
  const el = items[0] as ReactElement<{ href?: string; children?: ReactNode }>
  const href = el.props.href
  if (typeof href !== 'string') return false
  if (isOwnSiteHomepage(href) && hasImageChild(el.props.children)) return true
  if (isVerticalLinkCardHost(href) && hasImageChild(el.props.children)) return true
  if (isPreviewCardHost(href) && hasImageChild(el.props.children)) return true
  if (hasImageChild(el.props.children) && isEmbedImageLinkCard(href, findImageSrc(el.props.children) ?? '')) {
    return true
  }
  return false
}

function findImageSrc(children: ReactNode): string | undefined {
  const items = Children.toArray(children)
  for (const item of items) {
    if (!isValidElement(item)) continue
    const el = item as ReactElement<{ src?: string; children?: ReactNode }>
    if (typeof el.props.src === 'string') return el.props.src
    const nested = findImageSrc(el.props.children)
    if (nested) return nested
  }
  return undefined
}

export function isBlockEmbedElement(node: ReactNode): boolean {
  if (!isValidElement(node)) return false
  const props = node.props as Record<string, unknown> | null
  if (props && BLOCK_EMBED_ATTR in props) return true
  const type = node.type as { displayName?: string; name?: string }
  const name = type?.displayName ?? type?.name
  return name === 'SiteEmbedFigure' || name === 'ArticleLinkCard'
}

/** Markdown wraps block embeds in `<p>`; unwrap so DOM matches React tree. */
export function unwrapParagraphBlockContent(children: ReactNode): ReactNode {
  const items = Children.toArray(children)
  if (items.length === 1 && isBlockEmbedElement(items[0])) {
    return items[0]
  }
  if (isEmbeddableLinkParagraph(children)) {
    return children
  }
  return children
}

export function unwrapBlockquoteContent(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child
    if (child.type !== 'p') return child
    const el = child as ReactElement<{ children?: ReactNode }>
    const inner = Children.toArray(el.props.children)
    if (inner.length === 1 && isBlockEmbedElement(inner[0])) {
      return inner[0]
    }
    if (isEmbeddableLinkParagraph(el.props.children)) {
      return el.props.children
    }
    return child
  })
}
