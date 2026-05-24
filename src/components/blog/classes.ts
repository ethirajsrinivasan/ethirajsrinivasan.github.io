/** Blog article body (markdown wrapper + prose) */
export const bc = {
  prose: `prose prose-lg max-w-none
    prose-headings:font-display prose-headings:font-light prose-headings:tracking-tightest prose-headings:text-ink-900 prose-headings:text-balance
    prose-h1:text-4xl prose-h1:mt-14 prose-h1:mb-6
    prose-h2:text-3xl md:prose-h2:text-[2rem] prose-h2:mt-14 prose-h2:mb-5 prose-h2:leading-[1.15]
    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:leading-[1.2]
    prose-p:text-ink-700 prose-p:leading-[1.75] prose-p:mb-5 prose-p:text-pretty
    prose-a:text-ink-900 prose-a:font-medium prose-a:underline prose-a:decoration-ink-300 prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:decoration-ink-900 prose-a:transition-colors
    prose-strong:text-ink-900 prose-strong:font-semibold
    prose-em:text-ink-800
    prose-code:text-accent-700 prose-code:bg-accent-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-medium prose-code:font-mono prose-code:text-[0.92em]
    prose-code:before:content-none prose-code:after:content-none
    prose-pre:p-0 prose-pre:bg-transparent prose-pre:my-7
    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
    prose-li:text-ink-700 prose-li:leading-[1.7] prose-li:marker:text-ink-400
    [&_li:has(.blog-link-card)]:list-none [&_li:has(.blog-link-card)]:ml-0 [&_li:has(.blog-link-card)]:pl-0
    prose-blockquote:not-italic prose-blockquote:font-display prose-blockquote:font-light prose-blockquote:text-2xl prose-blockquote:leading-[1.4] prose-blockquote:text-ink-900 prose-blockquote:border-l-2 prose-blockquote:border-accent-500 prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-8
    prose-img:rounded-2xl prose-img:shadow-soft prose-img:my-10
    prose-hr:my-12 prose-hr:border-ink-100`,
  img: 'w-full h-auto rounded-2xl shadow-soft mt-10 mb-2',
  imageCaption: 'text-center text-sm font-mono text-ink-500 mt-3 mb-10 not-prose',
  blockquote:
    'not-prose font-display font-light text-2xl leading-[1.4] text-ink-900 border-l-2 border-accent-500 pl-6 py-1 my-8',
  link:
    'text-ink-900 font-medium underline decoration-ink-300 underline-offset-4 decoration-1 hover:decoration-ink-900 transition-colors',
  inlineCode:
    'text-accent-700 bg-accent-50 px-1.5 py-0.5 rounded-md text-[0.92em] font-medium font-mono border border-accent-100',
  sectionDivider: 'my-14 flex justify-center not-prose',
  sectionDividerDots: 'inline-flex items-center gap-3',
  sectionDividerDot: 'block h-1 w-1 rounded-full bg-ink-300',
  linkCard:
    'blog-link-card not-prose my-7 flex no-underline rounded-2xl border border-ink-100 bg-paper shadow-soft transition-all duration-300 ease-smooth hover:border-ink-200 hover:shadow-elev hover:-translate-y-0.5',
  linkCardInner: 'flex w-full overflow-hidden rounded-2xl',
  linkCardMedia: 'w-28 shrink-0 bg-paper-warm sm:w-36 md:w-44',
  linkCardImg: 'h-full min-h-[6.5rem] w-full object-cover',
  linkCardBody: 'flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-5 text-left',
  linkCardTitle: 'font-display text-base md:text-lg font-normal leading-snug text-ink-900 line-clamp-2',
  linkCardDesc: 'text-sm leading-relaxed text-ink-600 line-clamp-3',
  linkCardSource: 'font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400',
  linkCardMedium:
    'blog-link-card not-prose my-7 block w-full overflow-hidden rounded-2xl border border-ink-100 bg-paper no-underline shadow-soft transition-all duration-300 ease-smooth hover:border-ink-200 hover:shadow-elev hover:-translate-y-0.5',
  linkCardMediumInner: 'flex w-full flex-col',
  linkCardMediumMedia: 'block w-full bg-paper-warm',
  linkCardMediumImg: 'block w-full max-h-80 object-cover object-center',
  linkCardMediumBody: 'flex flex-col gap-2 border-t border-ink-100 p-5 text-left',
  linkCardMediumTitle: 'font-display text-lg leading-snug text-ink-900',
  linkCardMediumDesc: 'text-sm leading-relaxed text-ink-600 line-clamp-3',
  embedCard:
    'not-prose mx-auto my-3 max-w-2xl overflow-hidden rounded-2xl border border-ink-100 bg-paper shadow-soft',
  embedImg: 'block w-full max-h-80 object-cover',
  embedBody: 'px-5 py-4 text-left',
  embedTitle: 'font-display text-lg text-ink-900',
  embedDesc: 'mt-1 text-sm leading-relaxed text-ink-600',
} as const

/** Blog post page chrome */
export const bl = {
  main: 'min-h-screen pt-16 pb-0 overflow-x-hidden',
  container: 'max-w-3xl mx-auto px-5 sm:px-6 lg:px-8',
  containerWide: 'max-w-6xl mx-auto px-5 sm:px-6 lg:px-8',
  /** Top back-link rail (small, sits above hero) */
  backRail: 'pt-8 md:pt-10 pb-6',
  backLink:
    'group inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors',
  /** Editorial header section (now below hero) */
  headerSection: 'relative pt-2 md:pt-4 pb-12 md:pb-16',
  headerMeta: 'flex items-center gap-4 mb-6',
  /** Display title — editorial Fraunces serif */
  title:
    'font-display font-light tracking-tightest text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.04] text-ink-900 mb-6 text-balance',
  /** Subtitle / lede styling used by BlogExcerpt */
  subtitle: 'text-lg md:text-xl text-ink-600 leading-[1.55] mb-8 text-pretty',
  /** Author byline below subtitle */
  authorByline: 'flex items-center gap-3 pt-2 border-t border-ink-100 mt-2 pt-5',
  /** Hero figure wrapper (image-first banner) */
  heroFigureWrap: 'mb-10 md:mb-14',
  heroFigure:
    'relative max-w-6xl mx-auto aspect-[16/9] sm:aspect-[16/8] md:aspect-[21/9] overflow-hidden rounded-none md:rounded-3xl border-y md:border border-ink-100 bg-paper-warm shadow-soft',
  heroImg: 'absolute inset-0 h-full w-full object-cover object-center',
  /** Article body container — narrow for readability */
  article: 'max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-16',
  /** Footer rail (share + author) */
  footRail: 'border-t border-ink-100 bg-paper py-10',
  footRailInner: 'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6',
  /** Continue-reading section */
  continueSection: 'border-t border-ink-100 bg-paper-warm py-16 md:py-20',
  /** Legacy classnames (kept for backward compat with old usages) */
  hero: 'relative mb-12 h-56 w-full overflow-hidden bg-ink-900 sm:h-72 md:h-96',
  heroOverlay:
    'absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none',
  back: 'mb-8',
  header: 'mb-12',
  meta: 'flex flex-wrap items-center gap-6 text-ink-600',
  metaItem: 'flex items-center gap-2',
} as const

export { externalLink } from '@/components/portfolio/classes'
