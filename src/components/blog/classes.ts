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
    prose-code:text-primary-600 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
    prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto
    prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
    prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
    prose-li:text-slate-700 prose-li:mb-2
    prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic
    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8`,
  img: 'w-full h-auto rounded-xl shadow-lg my-8',
  link: 'text-primary-600 hover:text-primary-700 transition-colors',
  inlineCode: 'text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm',
} as const

/** Blog post page chrome */
export const bl = {
  main: 'min-h-screen pt-16 pb-12',
  hero: 'relative h-80 md:h-96 mb-12',
  heroImg: 'w-full h-full object-cover',
  heroOverlay: 'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none',
  article: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  back: 'mb-8',
  backLink: 'inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors',
  header: 'mb-12',
  title: 'text-4xl md:text-5xl font-bold text-slate-900 mb-6',
  meta: 'flex flex-wrap items-center gap-6 text-slate-600',
  metaItem: 'flex items-center gap-2',
  footer: 'mt-16 pt-8 border-t border-slate-200',
  footerLink: 'text-primary-600 hover:text-primary-700 transition-colors',
} as const

export { externalLink } from '@/components/portfolio/classes'
