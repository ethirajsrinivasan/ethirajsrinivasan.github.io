/** Portfolio article body */
export const pc = {
  section: 'mb-12',
  heading: 'text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2',
  body: 'text-slate-700 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6',
  /** Single-column block spacing (paragraphs, lists) */
  stack: 'space-y-4 my-6',
  /** @deprecated Use stack (1 col) or grid2 (2 col). Kept so old pages compile. */
  grid: 'space-y-4 my-6',
  /** Two columns on md+ — use only when you have two figures/columns */
  grid2: 'grid grid-cols-1 md:grid-cols-2 gap-6 my-6',
  center: 'text-center',
  justify: 'text-justify',
  link: 'text-primary-600 hover:text-primary-700 underline',
  figure: 'text-center my-4',
  img: 'rounded-lg shadow-md w-full h-auto mx-auto',
  /** Bordered card for gallery figures — keeps mixed image sizes aligned */
  figureBox:
    'rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-sm flex flex-col h-full',
  figureMedia: 'flex flex-1 items-center justify-center w-full min-h-[12rem] sm:min-h-[14rem]',
  caption: 'text-center text-sm font-medium text-slate-600 mt-3 shrink-0',
  /** 2-col gallery; use figureWide on a figure for full-width row */
  /** 2 cols when content area is wide enough (sidebar layout is narrower than viewport) */
  gallery: 'grid grid-cols-2 max-[520px]:grid-cols-1 gap-6 my-6 items-stretch',
  figureWide: 'sm:col-span-2 max-w-4xl mx-auto w-full',
  /** Large network / graph screenshots */
  imgGraph: 'w-full max-h-64 sm:max-h-72 md:max-h-80 object-contain mx-auto rounded-md',
  /** Gephi panels, stats, modularity charts */
  imgPanel: 'w-full max-h-52 sm:max-h-56 object-contain mx-auto rounded-md',
  /** Wide expansion / timeline images */
  imgWide: 'w-full max-h-44 sm:max-h-52 object-contain mx-auto rounded-md',
  /** Portrait mobile app screenshots (1080×1920, etc.) */
  imgScreenshot:
    'w-auto max-w-full max-h-[min(28rem,65vh)] object-contain mx-auto rounded-md shadow-sm',
  /** Full-width LEMON / seed expansion diagrams (wide panoramas) */
  imgExpansion: 'w-full h-auto object-contain rounded-md',
  galleryStack: 'flex flex-col gap-6 my-6',
  figureMediaExpansion: 'w-full',
  /** Stacked analysis subsections (no bullets — avoids body [&_ul] list-disc override) */
  topicStack: 'space-y-10',
  topicTitle: 'text-lg font-semibold text-slate-900 mb-2 text-left',
  /** @deprecated Use topicStack — list-none was overridden by body [&_ul]:list-disc */
  topicList: 'space-y-8 text-left list-none pl-0',
  video: 'aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg my-6',
  iframe: 'w-full h-full min-h-[280px]',
} as const

/** Portfolio page chrome (hero, sidebar, grid) */
export const pl = {
  main: 'min-h-screen pt-16 pb-12',
  hero: 'relative h-80 md:h-96 mb-12 bg-slate-900',
  heroContain: 'relative h-80 md:h-96 mb-12 bg-gradient-to-br from-slate-800 to-slate-900',
  bannerImgCover: 'w-full h-full object-cover object-center',
  bannerImgContain: 'w-full h-full object-contain object-center p-10 md:p-14',
  heroOverlay: 'absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none',
  heroInner: 'absolute bottom-0 left-0 right-0 p-8',
  heroContainer: 'max-w-7xl mx-auto',
  category: 'inline-block px-4 py-1 bg-primary-600 text-white rounded-full text-sm mb-4',
  title: 'text-4xl md:text-5xl font-bold text-white',
  article: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid lg:grid-cols-3 gap-12',
  content: 'lg:col-span-2',
  aside: 'lg:col-span-1',
  sidebar: 'glass-effect rounded-2xl p-6 sticky top-20',
  sidebarTitle: 'text-xl font-bold text-slate-900 mb-6',
  sidebarStack: 'space-y-6',
  labelRow: 'flex items-center gap-2 text-slate-600 mb-2',
  label: 'font-semibold',
  value: 'text-slate-900',
  techTitle: 'font-semibold text-slate-900 mb-3',
  techList: 'flex flex-wrap gap-2',
  techTag: 'px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm',
  links: 'pt-6 border-t border-slate-200',
  linkTitle: 'font-semibold text-slate-900 mb-3',
  linksStack: 'space-y-3',
  extLink:
    'flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors group',
  extLinkLabel: 'font-medium',
  extLinkIcon: 'shrink-0 text-primary-600 group-hover:text-primary-700',
} as const

export const externalLink = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

export function bannerImageClass(image: string, imageFit?: 'cover' | 'contain') {
  const fit = imageFit ?? (image.endsWith('.svg') ? 'contain' : 'cover')
  return fit === 'contain' ? pl.bannerImgContain : pl.bannerImgCover
}

export function heroClass(image: string, imageFit?: 'cover' | 'contain') {
  const fit = imageFit ?? (image.endsWith('.svg') ? 'contain' : 'cover')
  return fit === 'contain' ? pl.heroContain : pl.hero
}
