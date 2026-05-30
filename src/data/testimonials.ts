/**
 * Source of truth for testimonials shown on /work-with-me, the homepage, and
 * anywhere else we surface social proof.
 *
 * Each entry is paraphrased verbatim from the original platform (LinkedIn
 * Recommendation, Upwork review, etc.) — please don't edit the `quote` field
 * without checking the source.
 */
export type TestimonialSource = 'linkedin' | 'upwork'

export type Testimonial = {
  id: string
  /** Verbatim quote text. Quotes wrapped in “…” by the component. */
  quote: string
  /** Recommender's name as it appears on the source platform. */
  author: string
  /** Recommender's current job title (what gives credibility today). */
  authorTitle: string
  /** Recommender's current company. */
  authorCompany: string
  /** Optional link to recommender's public profile, for transparency. */
  authorProfileUrl?: string
  /** Source platform — surfaced as a small "via …" tag. */
  source: TestimonialSource
  /** When true, eligible for the condensed homepage strip. */
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'sunil-prakash',
    quote:
      'Ethiraj is great when learning new stuffs and implementing it in short span of time, he is keen to technology and surely a good assets that any team can have. It was nice working with Ethiraj on couple of projects together. All the best for future endeavours.',
    author: 'Sunil Prakash',
    authorTitle: 'Enterprise AI & Platform Architecture Leader',
    authorCompany: 'VP, Regulated Finance · Author, Agentic AI for Serious Engineers',
    authorProfileUrl: 'https://www.linkedin.com/in/sunilprakash',
    source: 'linkedin',
    featured: true,
  },
  {
    id: 'zhaoqun-deng',
    quote:
      'Good learn ability and think fast. Work hard with good ownership. Good team mindset. It is my luck to work with you.',
    author: 'Zhaoqun Deng',
    authorTitle: 'Expert Engineer',
    authorCompany: 'Shopee',
    authorProfileUrl: 'https://www.linkedin.com/in/dengzhaoqun',
    source: 'linkedin',
  },
  {
    id: 'manish-m',
    quote:
      'Ethiraj is an excellent communicator and gave us ideas on improving the data pipelines. Strong data engineering knowledge. Highly recommended.',
    author: 'Manish M.',
    authorTitle: 'Data Engineering Client',
    authorCompany: 'Upwork',
    source: 'upwork',
    featured: true,
  },
  {
    id: 'martin-devapitchai',
    quote:
      'Ethiraj is really a cool person to have in team. His passion towards technologies is really astonishing. He has got the right mix of knowledge, passion, adaptability and ownership. He has always followed high coding standards and contributes for open source as well.',
    author: 'Martin Devapitchai',
    authorTitle: 'Director & Co-Founder',
    authorCompany: 'Hash Agile Technologies',
    authorProfileUrl: 'https://www.linkedin.com/in/martin-devapitchai-87804946',
    source: 'linkedin',
  },
]

/** Homepage uses just the two featured quotes. */
export const featuredTestimonials = testimonials.filter((t) => t.featured)
