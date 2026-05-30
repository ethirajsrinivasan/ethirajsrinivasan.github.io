export type PortfolioCategory = 'Applied AI' | 'Open Source' | 'Mobile'

export type PortfolioIndexEntry = {
  slug: string
  /** Display title used on portfolio cards and prev/next nav. */
  title: string
  category: PortfolioCategory
  year: string
  /** Short editorial one-liner used on the homepage Projects grid. */
  tagline: string
  image: string
  imageFit?: 'cover' | 'contain'
  imageAlt?: string
  /** Unlist from /portfolio listings and prev/next nav. Individual URL still resolves. */
  hidden?: boolean
}

/**
 * Single source of truth for the portfolio. Order is the canonical display order
 * for the homepage Projects grid and for prev/next nav.
 */
export const portfolioIndex: PortfolioIndexEntry[] = [
  {
    slug: 'medical-image-diagnostics',
    title: 'Medical Image Diagnostics',
    category: 'Applied AI',
    year: '2018',
    tagline:
      'Deep learning for mammogram classification — CNNs, transfer learning, multi-class diagnostics.',
    image: '/assets/images/medical-image-diagnostics.svg',
    imageFit: 'contain',
  },
  {
    slug: 'facial-recognition-system',
    title: 'Facial Recognition Relay',
    category: 'Applied AI',
    year: '2018',
    tagline:
      'Real-time facial recognition triggering hardware actuation — vision-to-IO pipeline.',
    image:
      'https://images.unsplash.com/photo-1517055729445-fa7d27394b48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageFit: 'cover',
  },
  {
    slug: 'social-community-expansion',
    title: 'Social Community Expansion',
    category: 'Applied AI',
    year: '2018',
    tagline:
      'Graph-based community detection on Lost Circles data using the LEMON algorithm.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85&auto=format&fit=crop',
    imageFit: 'cover',
  },
  {
    slug: 'smart-interactive-wall',
    title: 'Smart Interactive Wall',
    category: 'Applied AI',
    year: '2017',
    tagline:
      'Gesture-driven interactive surface combining Kinect input with computer-vision processing.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageFit: 'cover',
  },
  {
    slug: 'spatio-temporal-analysis',
    title: 'Spatio-Temporal Travel Analysis',
    category: 'Applied AI',
    year: '2017',
    tagline:
      'Visualising student mobility patterns with spatio-temporal data analysis and clustering.',
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=85&auto=format&fit=crop',
    imageFit: 'cover',
  },
  {
    slug: 'dna-capitals-hackathon',
    title: 'DNA Capitals Hackathon',
    category: 'Applied AI',
    year: '2018',
    tagline:
      'Hackathon prototype for genomic visualisation and on-the-fly sequence analysis.',
    image:
      'https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageFit: 'cover',
  },
  {
    slug: 'sunspot',
    title: 'Sunspot',
    category: 'Open Source',
    year: '2016',
    tagline:
      'Solr-powered full-text search for Ruby on Rails. Contributions to a widely-used Ruby gem.',
    image:
      'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=2070&auto=format&fit=crop',
    imageFit: 'cover',
    imageAlt: 'The sun with a corona mass ejection — a play on the Sunspot name',
  },
  {
    slug: 'supercache',
    title: 'Supercache',
    category: 'Open Source',
    year: '2016',
    tagline:
      'Configurable view-fragment caching gem for Rails — declarative cache keys with TTL control.',
    image:
      'https://images.unsplash.com/photo-1776801475781-b0797398b145?q=80&w=2070&auto=format&fit=crop',
    imageFit: 'cover',
    imageAlt: 'Abstract streaks of light in motion — speed and caching',
  },
  {
    slug: 'rails-fort',
    title: 'Rails Fort',
    category: 'Open Source',
    year: '2015',
    tagline:
      'Security hardening primitives for Rails applications — headers, sanitisation, audit hooks.',
    image:
      'https://images.unsplash.com/photo-1756225802434-69951a36d99b?q=80&w=2070&auto=format&fit=crop',
    imageFit: 'cover',
    imageAlt: 'Ancient stone castle towers with crenellated battlements',
  },
  {
    slug: 'medtracker',
    title: 'Medtracker',
    category: 'Mobile',
    year: '2017',
    tagline:
      'Android app for medication reminders and adherence tracking — local notifications + history.',
    image:
      'https://images.unsplash.com/photo-1573883429746-084be9b5cfca?q=80&w=2070&auto=format&fit=crop',
    imageFit: 'cover',
    imageAlt: 'Medication pills laid out on a clean surface',
  },

  // ───── Unlisted (URL still works; not shown in listings or prev/next) ─────
  {
    slug: 'u-ask',
    title: 'U Ask',
    category: 'Mobile',
    year: '2017',
    tagline: 'Android Q&A application.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=85&auto=format&fit=crop',
    imageFit: 'cover',
    hidden: true,
  },
  {
    slug: 'tablizer',
    title: 'Tablizer',
    category: 'Open Source',
    year: '2016',
    tagline: 'Lightweight HTML table generation utility.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&auto=format&fit=crop',
    imageFit: 'cover',
    hidden: true,
  },
  {
    slug: 'css-to-inliner',
    title: 'CSS to Inliner',
    category: 'Open Source',
    year: '2016',
    tagline: 'Convert external CSS to inline styles for email templates.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'contain',
    hidden: true,
  },
  {
    slug: 'url-shortener',
    title: 'URL Shortener',
    category: 'Open Source',
    year: '2017',
    tagline: 'A Bitly-style URL shortener.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'cover',
    hidden: true,
  },
  {
    slug: 'table2-csv',
    title: 'Table2 CSV',
    category: 'Open Source',
    year: '2015',
    tagline: 'Convert HTML tables to CSV from the browser.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'cover',
    hidden: true,
  },
  {
    slug: 'rails-protip',
    title: 'Rails Protip',
    category: 'Open Source',
    year: '2015',
    tagline: 'Collection of Rails performance and convention helpers.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'contain',
    hidden: true,
  },
  {
    slug: 'technology-icons',
    title: 'Technology Icons',
    category: 'Open Source',
    year: '2015',
    tagline: 'Icon pack for common technology stacks.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'contain',
    hidden: true,
  },
  {
    slug: 'devise-foundation-views',
    title: 'Devise Foundation Views',
    category: 'Open Source',
    year: '2015',
    tagline: 'Foundation-styled Devise auth views for Rails.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'contain',
    hidden: true,
  },
  {
    slug: 'collection2-csv',
    title: 'Collection2 CSV',
    category: 'Open Source',
    year: '2015',
    tagline: 'Convert Ruby collections to CSV.',
    image: '/assets/images/code-banner.svg',
    imageFit: 'contain',
    hidden: true,
  },
]

/**
 * Visible-only index for display surfaces (homepage Projects grid, prev/next).
 * Hidden entries keep their individual /portfolio/<slug> URLs working.
 */
export const visiblePortfolioIndex: PortfolioIndexEntry[] = portfolioIndex.filter(
  (entry) => !entry.hidden
)

export function getPortfolioIndexEntry(slug: string): PortfolioIndexEntry | undefined {
  return portfolioIndex.find((entry) => entry.slug === slug)
}
