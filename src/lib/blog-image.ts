/** Banner URLs from ethigeek_development.blogs.picture */
export function normalizeBlogBannerUrl(url: string): string {
  if (!url) return url
  if (!url.includes('images.unsplash.com')) return url
  try {
    const parsed = new URL(url)
    if (!parsed.searchParams.has('w')) {
      parsed.searchParams.set('w', '1600')
    }
    if (!parsed.searchParams.has('q')) {
      parsed.searchParams.set('q', '80')
    }
    if (!parsed.searchParams.has('auto')) {
      parsed.searchParams.set('auto', 'format')
    }
    if (!parsed.searchParams.has('fit')) {
      parsed.searchParams.set('fit', 'crop')
    }
    return parsed.toString()
  } catch {
    return url
  }
}
