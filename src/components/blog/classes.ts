/** Blog article body (markdown wrapper + prose) */
export const bc = {
  prose: `prose prose-lg prose-slate max-w-none
    prose-headings:font-bold prose-headings:text-slate-900
    prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6
    prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5
    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
    prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
    prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700
    prose-strong:text-slate-900 prose-strong:font-semibold
    prose-code:text-violet-700 prose-code:bg-violet-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium
    prose-code:before:content-none prose-code:after:content-none
    prose-pre:p-0 prose-pre:bg-transparent prose-pre:my-0
    prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
    prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
    prose-li:text-slate-700 prose-li:mb-2
    [&_li:has(.blog-link-card)]:list-none [&_li:has(.blog-link-card)]:ml-0 [&_li:has(.blog-link-card)]:pl-0
    prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic
    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8`,
  img: 'w-full h-auto rounded-xl shadow-lg mt-8 mb-2',
  imageCaption: 'text-center text-sm text-slate-500 mt-2 mb-8 not-prose',
  blockquote: 'border-l-4 border-primary-500 pl-4 my-6 text-slate-700 italic not-prose',
  link: 'text-primary-600 hover:text-primary-700 transition-colors',
  inlineCode:
    'text-violet-700 bg-violet-50 px-1.5 py-0.5 rounded text-[0.9em] font-medium border border-violet-100',
  sectionDivider: 'my-14 flex justify-center not-prose',
  sectionDividerDots: 'inline-flex items-center gap-5',
  sectionDividerDot: 'block h-1 w-1 rounded-full bg-slate-800',
  linkCard:
    'blog-link-card not-prose my-6 flex no-underline rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-slate-300 hover:shadow-md',
  linkCardInner: 'flex w-full overflow-hidden rounded-xl',
  linkCardMedia: 'w-28 shrink-0 bg-slate-100 sm:w-36 md:w-44',
  linkCardImg: 'h-full min-h-[6.5rem] w-full object-cover',
  linkCardBody: 'flex min-w-0 flex-1 flex-col justify-center gap-1 p-4 text-left',
  linkCardTitle: 'text-base font-semibold leading-snug text-slate-900 line-clamp-2',
  linkCardDesc: 'text-sm leading-relaxed text-slate-600 line-clamp-3',
  linkCardSource: 'text-xs font-medium uppercase tracking-wide text-slate-400',
  linkCardMedium:
    'blog-link-card not-prose my-6 block w-full overflow-hidden rounded-lg border border-slate-300 bg-white no-underline shadow-sm transition-shadow hover:border-slate-400 hover:shadow',
  linkCardMediumInner: 'flex w-full flex-col',
  linkCardMediumMedia: 'block w-full bg-slate-100',
  linkCardMediumImg: 'block w-full max-h-80 object-cover object-center',
  linkCardMediumBody: 'flex flex-col gap-2 border-t border-slate-200 p-4 text-left',
  linkCardMediumTitle: 'text-[15px] font-bold leading-snug text-slate-900',
  linkCardMediumDesc: 'text-sm leading-relaxed text-slate-700 line-clamp-3',
  embedCard:
    'not-prose mx-auto my-2 max-w-2xl overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm',
  embedImg: 'block w-full max-h-80 object-cover',
  embedBody: 'px-4 py-3 text-left',
  embedTitle: 'text-base font-bold text-slate-900',
  embedDesc: 'mt-1 text-sm font-light leading-relaxed text-slate-600',
} as const

/** Blog post page chrome */
export const bl = {
  main: 'min-h-screen pt-16 pb-12',
  hero: 'relative mb-12 h-56 w-full overflow-hidden bg-slate-900 sm:h-72 md:h-96',
  heroImg: 'absolute inset-0 h-full w-full object-cover object-center',
  heroOverlay:
    'absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none',
  article: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  back: 'mb-8',
  backLink: 'inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors',
  header: 'mb-12',
  title: 'text-4xl md:text-5xl font-bold text-slate-900 mb-4',
  subtitle: 'text-xl text-slate-600 mb-6 leading-relaxed',
  meta: 'flex flex-wrap items-center gap-6 text-slate-600',
  metaItem: 'flex items-center gap-2',
} as const

export { externalLink } from '@/components/portfolio/classes'
