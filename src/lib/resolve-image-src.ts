function decodeHexUrl(hex: string): string {
  const pairs = hex.match(/.{1,2}/g)
  if (!pairs?.length) return ''
  const bytes = Uint8Array.from(pairs, (pair) => parseInt(pair, 16))
  return new TextDecoder().decode(bytes)
}

/** Decode github.com/camo proxy URLs to the original image URL. */
function decodeCamoUrl(src: string): string {
  const match = src.match(
    /^https:\/\/camo\.githubusercontent\.com\/[a-f0-9]+\/([a-f0-9]+)$/i
  )
  if (!match) return src
  try {
    const decoded = decodeHexUrl(match[1])
    if (decoded.startsWith('http://') || decoded.startsWith('https://')) {
      return decoded
    }
  } catch {
    // keep original src
  }
  return src
}

/** Normalize image paths for static export (local /assets/ and external URLs). */
export function resolveImageSrc(src: string | undefined): string {
  if (!src) return ''
  let resolved = src
  if (resolved.includes('camo.githubusercontent.com')) {
    resolved = decodeCamoUrl(resolved)
  }
  if (resolved.startsWith('http://') || resolved.startsWith('https://')) return resolved
  if (resolved.startsWith('/')) return resolved
  if (resolved.startsWith('assets/')) return `/${resolved}`
  return `/${resolved.replace(/^\//, '')}`
}
