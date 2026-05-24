/** Portfolio article body — editorial ink palette + Fraunces headings */
export const pc = {
  /** Section wrapper between body blocks */
  section: 'mb-14 md:mb-16 first:mt-0',
  /** H2-level section heading (Fraunces display, no harsh underline) */
  heading:
    'font-display font-light tracking-tightest text-3xl md:text-[2.25rem] leading-[1.1] text-ink-900 mb-5 mt-14 first:mt-0',
  /** Eyebrow used above section headings (rare; pair with eyebrow utility on the parent) */
  eyebrow: 'eyebrow mb-3',
  /** Body copy */
  body:
    'text-ink-700 text-[1.0625rem] leading-[1.7] space-y-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-ink-900 [&_strong]:font-semibold',
  /** Single-column block spacing (paragraphs, lists) */
  stack: 'space-y-5 my-6',
  /** @deprecated Use stack (1 col) or grid2 (2 col). Kept so old pages compile. */
  grid: 'space-y-5 my-6',
  /** Two columns on md+ — use only when you have two figures/columns */
  grid2: 'grid grid-cols-1 md:grid-cols-2 gap-6 my-8',
  center: 'text-center',
  justify: 'text-justify',
  /** Inline ink underline link */
  link:
    'text-ink-900 underline decoration-ink-300 decoration-1 underline-offset-[3px] hover:decoration-ink-900 hover:decoration-2 transition-colors',
  /** Standalone figure */
  figure: 'my-8',
  /** Image inside a standalone figure */
  img: 'rounded-2xl border border-ink-100 shadow-soft w-full h-auto mx-auto bg-paper-warm',
  /** Bordered card for gallery figures — keeps mixed image sizes aligned */
  figureBox:
    'rounded-2xl border border-ink-100 bg-paper-warm p-4 shadow-soft flex flex-col h-full transition-shadow duration-300 ease-smooth hover:shadow-elev',
  figureMedia: 'flex flex-1 items-center justify-center w-full min-h-[12rem] sm:min-h-[14rem]',
  caption:
    'text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 mt-3 shrink-0',
  /** 2 cols when content area is wide enough (sidebar layout is narrower than viewport) */
  gallery: 'grid grid-cols-2 max-[520px]:grid-cols-1 gap-5 my-8 items-stretch',
  figureWide: 'sm:col-span-2 max-w-4xl mx-auto w-full',
  /** Large network / graph screenshots */
  imgGraph:
    'w-full max-h-64 sm:max-h-72 md:max-h-80 object-contain mx-auto rounded-md',
  /** Gephi panels, stats, modularity charts */
  imgPanel: 'w-full max-h-52 sm:max-h-56 object-contain mx-auto rounded-md',
  /** Wide expansion / timeline images */
  imgWide: 'w-full max-h-44 sm:max-h-52 object-contain mx-auto rounded-md',
  /** Portrait mobile app screenshots (1080×1920, etc.) */
  imgScreenshot:
    'w-auto max-w-full max-h-[min(28rem,65vh)] object-contain mx-auto rounded-md shadow-sm',
  /** Full-width LEMON / seed expansion diagrams (wide panoramas) */
  imgExpansion: 'w-full h-auto object-contain rounded-md',
  galleryStack: 'flex flex-col gap-6 my-8',
  figureMediaExpansion: 'w-full',
  /** Stacked analysis subsections (no bullets) */
  topicStack: 'space-y-10',
  /** Subsection heading inside a section */
  topicTitle:
    'font-display font-normal text-xl md:text-2xl tracking-tighter2 text-ink-900 mb-3 text-left',
  /** @deprecated Use topicStack — list-none was overridden by body [&_ul]:list-disc */
  topicList: 'space-y-8 text-left list-none pl-0',
  video:
    'aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-elev my-8 border border-ink-100',
  iframe: 'w-full h-full min-h-[280px]',
} as const

/** Portfolio page chrome (hero, sidebar, grid) — editorial ink palette */
export const pl = {
  main: 'min-h-screen pt-16 pb-0 bg-paper',
  /** Cinematic banner hero (cover image variant) */
  hero:
    'relative h-[58vh] md:h-[68vh] min-h-[420px] mb-16 md:mb-20 bg-ink-950 overflow-hidden',
  /** SVG/contain variant — gradient backdrop, no photo overlay needed */
  heroContain:
    'relative h-[52vh] md:h-[60vh] min-h-[380px] mb-16 md:mb-20 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 overflow-hidden',
  bannerImgCover: 'w-full h-full object-cover object-center',
  bannerImgContain: 'w-full h-full object-contain object-center p-10 md:p-16',
  /** Stronger gradient for legibility of overlaid title */
  heroOverlay:
    'absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent pointer-events-none',
  /** Subtle noise texture over hero */
  heroNoise: 'absolute inset-0 noise-overlay pointer-events-none',
  heroInner: 'absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14',
  heroContainer: 'max-w-7xl mx-auto',
  /** Category eyebrow (light on dark) */
  category:
    'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70 mb-5 before:inline-block before:w-6 before:h-px before:bg-paper/40',
  /** Hero title — Fraunces display, white over banner */
  title:
    'font-display font-light tracking-tightest text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.04] text-paper text-balance max-w-4xl',
  /** Article shell */
  article: 'max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-24 md:pb-28',
  grid: 'grid lg:grid-cols-3 lg:grid-rows-[auto_auto] gap-12 lg:gap-16',
  content: 'lg:col-span-2 lg:row-start-1',
  aside: 'lg:col-span-1 lg:col-start-3 lg:row-start-1',
  navRow: 'lg:col-span-3 lg:col-start-1 lg:row-start-2 mt-4 md:mt-6',
  /** Editorial sidebar card */
  sidebar:
    'card-soft p-7 sm:p-8 sticky top-24 hover:!translate-y-0 hover:!shadow-soft',
  sidebarTitle: 'eyebrow mb-6',
  sidebarStack: 'space-y-7',
  /** Year row */
  labelRow:
    'flex items-center gap-2 text-ink-500 mb-1.5 font-mono text-[11px] uppercase tracking-[0.16em]',
  label: 'font-medium',
  value: 'font-display text-2xl font-light tracking-tighter2 text-ink-900',
  /** Tech section */
  techTitle:
    'font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-3',
  techList: 'flex flex-wrap gap-1.5',
  techTag: 'badge-quiet',
  /** Links section */
  links: 'pt-6 border-t border-ink-100',
  linkTitle:
    'font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-3',
  linksStack: 'space-y-1',
  /** Single external link row */
  extLink:
    'group flex items-center justify-between gap-3 py-2.5 px-3 -mx-3 rounded-lg text-ink-700 hover:text-ink-900 hover:bg-paper-warm transition-all duration-300 ease-smooth',
  extLinkLabel: 'text-sm font-medium link-underline',
  extLinkIcon:
    'shrink-0 text-ink-400 group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 ease-smooth',
  /** Back-link rail above hero */
  backRail: 'absolute inset-x-0 top-0 z-10 pt-6 md:pt-8',
  backLink:
    'group inline-flex items-center gap-1.5 text-sm font-medium text-paper/75 hover:text-paper transition-colors',
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
