const DEFAULT_MAX_WIDTH = 800

/** Cap Unsplash banner width and normalize format params for faster loads. */
export function optimizeUnsplashUrl(url: string, maxWidth = DEFAULT_MAX_WIDTH): string {
  if (!url || !url.includes('images.unsplash.com')) return url
  try {
    const parsed = new URL(url)
    const current = Number.parseInt(parsed.searchParams.get('w') ?? '0', 10)
    const width = current > 0 ? Math.min(current, maxWidth) : maxWidth
    parsed.searchParams.set('w', String(width))
    if (!parsed.searchParams.has('q')) parsed.searchParams.set('q', '80')
    if (!parsed.searchParams.has('auto')) parsed.searchParams.set('auto', 'format')
    if (!parsed.searchParams.has('fit')) parsed.searchParams.set('fit', 'crop')
    return parsed.toString()
  } catch {
    return url
  }
}
