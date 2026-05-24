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
}
