import { blogIndex } from '@/data/blogIndex'
import type { BlogIndexEntry } from '@/types/blog'
import { resolveImageSrc } from '@/lib/resolve-image-src'

export function parseBlogSlug(href: string | undefined): string | null {
  if (!href) return null
  try {
    const url = href.startsWith('http') ? new URL(href) : new URL(href, 'https://ethirajsrinivasan.com')
    const match = url.pathname.match(/\/blogs\/([^/]+)\/?$/)
    return match?.[1] ?? null
  } catch {
    const match = href.match(/^\/?blogs\/([^/]+)\/?$/)
    return match?.[1] ?? null
  }
}

export function getBlogBySlug(slug: string): BlogIndexEntry | undefined {
  return blogIndex.find((post) => post.slug === slug)
}

export function isMediumHost(href: string): boolean {
  try {
    const host = new URL(href).hostname
    return host.includes('medium.com') || host === 'building.theatlantic.com'
  } catch {
    return false
  }
}

/** Medium publication embeds (Bootcamp, etc.) use the same vertical preview cards. */
export function isBootcampHost(href: string): boolean {
  try {
    return new URL(href).hostname === 'bootcamp.uxdesign.cc'
  } catch {
    return href.includes('bootcamp.uxdesign.cc')
  }
}

export function isVerticalLinkCardHost(href: string): boolean {
  return isMediumHost(href) || isBootcampHost(href)
}

const OWN_SITE_HOSTS = new Set(['ethirajsrinivasan.com', 'ethigeek.com'])

function isOwnSiteHost(host: string): boolean {
  return OWN_SITE_HOSTS.has(host.replace(/^www\./, ''))
}

/** Homepage links on this site (current or legacy domain). */
export function isOwnSiteHomepage(href: string): boolean {
  try {
    const url = new URL(href)
    const host = url.hostname.replace(/^www\./, '')
    if (!isOwnSiteHost(host)) return false
    const path = url.pathname.replace(/\/$/, '')
    return path === '' || path === '/'
  } catch {
    return /^https?:\/\/(www\.)?(ethirajsrinivasan|ethigeek)\.com\/?$/i.test(href)
  }
}

/** @deprecated Use isOwnSiteHomepage */
export const isEthigeekHomepage = isOwnSiteHomepage

export function isPreviewCardHost(href: string): boolean {
  if (isVerticalLinkCardHost(href)) return true
  // Own blog cross-links stay inline; cards are for Medium/Bootcamp and external embeds.
  if (parseBlogSlug(href)) return false
  if (isOwnSiteHomepage(href)) return false
  try {
    const host = new URL(href).hostname.replace(/^www\./, '')
    return isOwnSiteHost(host)
  } catch {
    return /ethirajsrinivasan\.com|ethigeek\.com/i.test(href)
  }
}

export function linkCardSource(href: string): string {
  if (parseBlogSlug(href)) return 'ethirajsrinivasan.com'
  try {
    const host = new URL(href, 'https://ethirajsrinivasan.com').hostname.replace(/^www\./, '')
    if (host.includes('medium.com') || host === 'building.theatlantic.com') return 'Medium'
    return host
  } catch {
    return 'Link'
  }
}

/** Image links that should stay a plain figure, not an ArticleLinkCard preview. */
export function isPlainImageLink(href: string, imgSrc: string): boolean {
  const resolvedHref = resolveImageSrc(href)
  const resolvedImg = resolveImageSrc(imgSrc)
  if (resolvedHref === resolvedImg) return true
  if (resolvedHref.startsWith('/assets/')) return true
  if (/user-images\.githubusercontent\.com|raw\.githubusercontent\.com/i.test(resolvedHref)) {
    return true
  }
  return false
}

const EMBED_CARD_HOSTS = [
  'youtube.com',
  'youtu.be',
  'wise.com',
  'tourmountbromo.com',
  'instagram.com',
]

/** Only true article/embed URLs become preview cards; not self-linked screenshots. */
export function isEmbedImageLinkCard(href: string, imgSrc: string): boolean {
  if (isPlainImageLink(href, imgSrc)) return false
  if (parseBlogSlug(href)) return true
  if (isOwnSiteHomepage(href)) return true
  if (isPreviewCardHost(href) || isVerticalLinkCardHost(href)) return true
  try {
    const host = new URL(href, 'https://ethirajsrinivasan.com').hostname.replace(/^www\./, '')
    return EMBED_CARD_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))
  } catch {
    return false
  }
}
