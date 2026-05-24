import { resolveImageSrc } from '@/lib/resolve-image-src'
import { BLOCK_EMBED_ATTR } from './block-embed'
import { bc } from './classes'

export type SiteEmbedFigureProps = {
  image: string
  title: string
  description?: string
}

/** Static site preview — block-level; must not be nested inside `<p>`. */
function SiteEmbedFigure({ image, title, description }: SiteEmbedFigureProps) {
  const imgSrc = resolveImageSrc(image)

  return (
    <div className={bc.embedCard} {...{ [BLOCK_EMBED_ATTR]: '' }}>
      <img
        src={imgSrc}
        alt=""
        className={bc.embedImg}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = resolveImageSrc('/assets/images/blogs.jpg')
        }}
      />
      <div className={bc.embedBody}>
        <div className={bc.embedTitle}>{title}</div>
        {description ? <div className={bc.embedDesc}>{description}</div> : null}
      </div>
    </div>
  )
}

SiteEmbedFigure.displayName = 'SiteEmbedFigure'

export default SiteEmbedFigure
