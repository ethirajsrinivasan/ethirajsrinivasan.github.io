import { optimizeUnsplashUrl } from '@/lib/optimize-image-url'

/** Banner URLs from ethigeek_development.blogs.picture */
export function normalizeBlogBannerUrl(url: string): string {
  if (!url) return url
  return optimizeUnsplashUrl(url)
}
