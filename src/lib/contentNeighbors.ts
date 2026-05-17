export type ContentNavItem = {
  slug: string
  title: string
}

export function getContentNeighbors(slug: string, items: readonly ContentNavItem[]) {
  const index = items.findIndex((item) => item.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: index > 0 ? items[index - 1] : undefined,
    next: index < items.length - 1 ? items[index + 1] : undefined,
  }
}
