const DEFAULT_MAX_WIDTH = 800

/** Cap Unsplash banner width and normalize format params for faster loads. */
export function optimizeUnsplashUrl(url: string, maxWidth = DEFAULT_MAX_WIDTH): string {
  if (!url || !url.includes('images.unsplash.com')) return url
  try {
    const parsed = new URL(url)
    parsed.searchParams.delete('ixid')
    parsed.searchParams.delete('ixlib')
    const current = Number.parseInt(parsed.searchParams.get('w') ?? '0', 10)
    const width = current > 0 ? Math.min(current, maxWidth) : maxWidth
    parsed.searchParams.set('w', String(width))
    parsed.searchParams.set('q', parsed.searchParams.get('q') ?? '80')
    parsed.searchParams.set('auto', 'format')
    parsed.searchParams.set('fit', 'crop')
    // Explicit modern format for auditors; Unsplash still negotiates via auto=format.
    if (!parsed.searchParams.has('fm')) parsed.searchParams.set('fm', 'webp')
    return parsed.toString()
  } catch {
    return url
  }
}
