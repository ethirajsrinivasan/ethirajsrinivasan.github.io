import Head from 'next/head'

const SITE_URL = 'https://ethirajsrinivasan.com'
const SITE_NAME = 'Ethiraj Srinivasan'
const TWITTER_HANDLE = '@iamethi'
const DEFAULT_OG_IMAGE = '/og-default.png'

export type OgType = 'website' | 'article' | 'profile'

export type ArticleMeta = {
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export type JsonLd = Record<string, unknown> | Record<string, unknown>[]

export type SEOProps = {
  /** Page-specific title fragment. Final tag becomes `${title} — Ethiraj Srinivasan` unless `titleAsIs` is true. */
  title: string
  /** Skip the " — Ethiraj Srinivasan" suffix. Useful for the homepage. */
  titleAsIs?: boolean
  description: string
  /** Path on this site (e.g. `/about`) OR an absolute URL. */
  path?: string
  /** Path-relative or absolute image URL. */
  image?: string
  /** Image alt for accessible share previews. */
  imageAlt?: string
  type?: OgType
  article?: ArticleMeta
  /** Optional JSON-LD blocks. Pass one or more structured data objects. */
  jsonLd?: JsonLd
  /** Hide from search engines. */
  noindex?: boolean
}

function toAbsolute(url: string | undefined, fallback: string): string {
  if (!url) return fallback
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`
}

export default function SEO({
  title,
  titleAsIs,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  article,
  jsonLd,
  noindex,
}: SEOProps) {
  const fullTitle = titleAsIs ? title : `${title} — ${SITE_NAME}`
  const url = toAbsolute(path, SITE_URL)
  const imageUrl = toAbsolute(image, `${SITE_URL}${DEFAULT_OG_IMAGE}`)
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG */}
      {type === 'article' && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === 'article' && article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {type === 'article' &&
        article?.authors?.map((author) => (
          <meta key={author} property="article:author" content={author} />
        ))}
      {type === 'article' &&
        article?.tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* JSON-LD structured data */}
      {jsonLdArray.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </Head>
  )
}

export const SITE_META = {
  url: SITE_URL,
  name: SITE_NAME,
  twitter: TWITTER_HANDLE,
  defaultOgImage: DEFAULT_OG_IMAGE,
}
