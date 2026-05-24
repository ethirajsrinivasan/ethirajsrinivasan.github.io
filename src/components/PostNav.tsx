import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
          : 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'
      }
      aria-label="Post navigation"
    >
      {previous ? (
        <Link
          href={`${basePath}/${previous.slug}`}
          className="group relative flex flex-col gap-2 p-6 sm:p-7 rounded-2xl border border-ink-100 bg-paper transition-all duration-500 ease-smooth hover:border-ink-300 hover:-translate-y-0.5 hover:shadow-soft"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 group-hover:text-ink-700 transition-colors">
            <ArrowLeft
              size={13}
              className="transition-transform duration-500 ease-smooth group-hover:-translate-x-0.5"
            />
            {previousLabel}
          </span>
          <span className="font-display text-lg md:text-xl leading-snug text-ink-900 line-clamp-2 text-balance">
            {previous.title}
          </span>
        </Link>
      ) : (
        !isSidebar && <div aria-hidden="true" className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`${basePath}/${next.slug}`}
          className={`group relative flex flex-col gap-2 p-6 sm:p-7 rounded-2xl border border-ink-100 bg-paper transition-all duration-500 ease-smooth hover:border-ink-300 hover:-translate-y-0.5 hover:shadow-soft${
            isSidebar ? '' : ' sm:items-end sm:text-right'
          }`}
        >
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 group-hover:text-ink-700 transition-colors${
              isSidebar ? '' : ' sm:flex-row-reverse'
            }`}
          >
            <ArrowRight
              size={13}
              className="transition-transform duration-500 ease-smooth group-hover:translate-x-0.5"
            />
            {nextLabel}
          </span>
          <span className="font-display text-lg md:text-xl leading-snug text-ink-900 line-clamp-2 text-balance">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}
