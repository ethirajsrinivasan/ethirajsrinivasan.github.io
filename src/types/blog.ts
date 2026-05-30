export interface BlogPost {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  content: string
  readTime: string
}

export type BlogIndexEntry = Pick<
  BlogPost,
  'slug' | 'title' | 'date' | 'image' | 'excerpt' | 'readTime'
> & {
  imageAlt?: string
  /** ISO date string for OG / JSON-LD article schema. */
  publishedAt?: string
  /** Unlisted: route still works but post is hidden from index, homepage, and prev/next nav. */
  hidden?: boolean
}
