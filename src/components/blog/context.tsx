import { createContext, useContext } from 'react'

export type BlogArticleMeta = {
  title: string
  excerpt: string
}

const BlogArticleContext = createContext<BlogArticleMeta>({ title: '', excerpt: '' })

export function BlogArticleProvider({
  title,
  excerpt,
  children,
}: BlogArticleMeta & { children: React.ReactNode }) {
  return (
    <BlogArticleContext.Provider value={{ title, excerpt }}>{children}</BlogArticleContext.Provider>
  )
}

export function useBlogArticle() {
  return useContext(BlogArticleContext)
}
