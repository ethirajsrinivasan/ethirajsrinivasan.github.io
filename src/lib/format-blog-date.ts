const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

/** `2023-08-28` → `Aug 28, 2023` (matches ethirajsrinivasan.com listing). */
export function formatBlogDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number)
  const month = MONTHS[m - 1]
  const day = String(d).padStart(2, '0')
  return `${month} ${day}, ${y}`
}
