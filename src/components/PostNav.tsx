import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ContentNavItem } from '@/lib/contentNeighbors'

type PostNavProps = {
  basePath: '/portfolio' | '/blogs'
  previous?: ContentNavItem
  next?: ContentNavItem
  previousLabel?: string
  nextLabel?: string
  /** Sidebar layout: stacked links for narrow column (portfolio). */
  variant?: 'default' | 'sidebar'
}

export default function PostNav({
  basePath,
  previous,
  next,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  variant = 'default',
}: PostNavProps) {
  if (!previous && !next) return null

  const isSidebar = variant === 'sidebar'

  return (
    <nav
      className={
        isSidebar
          ? 'grid grid-cols-1 gap-3'
          : 'mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4'
      }
      aria-label="Post navigation"
    >
      {previous ? (
        <Link
          href={`${basePath}/${previous.slug}`}
          className="group flex flex-col gap-1 p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50/50 transition-colors"
        >
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
            <ChevronLeft size={18} aria-hidden="true" />
            {previousLabel}
          </span>
          <span className="text-slate-900 font-semibold group-hover:text-primary-700 line-clamp-2">
            {previous.title}
          </span>
        </Link>
      ) : (
        !isSidebar && <div aria-hidden="true" className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`${basePath}/${next.slug}`}
          className={`group flex flex-col gap-1 p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50/50 transition-colors${isSidebar ? '' : ' sm:text-right sm:items-end'}`}
        >
          <span
            className={`inline-flex items-center gap-1 text-sm font-medium text-primary-600${isSidebar ? '' : ' sm:flex-row-reverse'}`}
          >
            {nextLabel}
            <ChevronRight size={18} aria-hidden="true" />
          </span>
          <span className="text-slate-900 font-semibold group-hover:text-primary-700 line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}
