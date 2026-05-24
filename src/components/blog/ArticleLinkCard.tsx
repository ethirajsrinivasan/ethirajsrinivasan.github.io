import Link from 'next/link'
import { resolveImageSrc } from '@/lib/resolve-image-src'
import { BLOCK_EMBED_ATTR } from './block-embed'
import { bc } from './classes'

export type ArticleLinkCardProps = {
  href: string
  title: string
  description?: string
  image?: string
  source?: string
  /** Medium / external article embeds: image on top, title + excerpt below (live site style). */
  variant?: 'medium' | 'horizontal'
}

function ArticleLinkCard({
  href,
  title,
  description,
  image,
  source,
  variant = 'horizontal',
}: ArticleLinkCardProps) {
  const isInternal = href.startsWith('/')
  const imgSrc = image ? resolveImageSrc(image) : undefined
  const isMedium = variant === 'medium'

  const body = isMedium ? (
    <span className={bc.linkCardMediumInner}>
      {imgSrc ? (
        <span className={bc.linkCardMediumMedia}>
          <img
            src={imgSrc}
            alt=""
            className={bc.linkCardMediumImg}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = resolveImageSrc('/assets/images/blogs.jpg')
            }}
          />
        </span>
      ) : null}
      <span className={bc.linkCardMediumBody}>
        <span className={bc.linkCardMediumTitle}>{title}</span>
        {description ? <span className={bc.linkCardMediumDesc}>{description}</span> : null}
      </span>
    </span>
  ) : (
    <span className={bc.linkCardInner}>
      {imgSrc ? (
        <span className={bc.linkCardMedia}>
          <img
            src={imgSrc}
            alt=""
            className={bc.linkCardImg}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = resolveImageSrc('/assets/images/blogs.jpg')
            }}
          />
        </span>
      ) : null}
      <span className={bc.linkCardBody}>
        <span className={bc.linkCardTitle}>{title}</span>
        {description ? <span className={bc.linkCardDesc}>{description}</span> : null}
        {source ? <span className={bc.linkCardSource}>{source}</span> : null}
      </span>
    </span>
  )

  const className = isMedium ? bc.linkCardMedium : bc.linkCard

  const embedProps = { [BLOCK_EMBED_ATTR]: '' }

  if (isInternal) {
    return (
      <Link href={href} className={className} {...embedProps}>
        {body}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...embedProps}
    >
      {body}
    </a>
  )
}

ArticleLinkCard.displayName = 'ArticleLinkCard'

export default ArticleLinkCard
