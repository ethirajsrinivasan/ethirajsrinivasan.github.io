import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostNav from '@/components/PostNav'
import type { ReactNode } from 'react'
import { blogIndex, getBlogIndexEntry } from '@/data/blogIndex'
import { getContentNeighbors } from '@/lib/contentNeighbors'
import { resolveImageSrc } from '@/lib/resolve-image-src'
import { BlogArticleProvider } from './context'
import BlogExcerpt from './BlogExcerpt'
import { plainTextMarkdown } from '@/lib/plain-text-markdown'
import { bl } from './classes'

const DEFAULT_HERO = '/assets/images/blogs.jpg'

export type BlogShellProps = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt?: string
  children: ReactNode
}

export default function BlogShell({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  children,
}: BlogShellProps) {
  const { previous, next } = getContentNeighbors(slug, blogIndex)
  const indexEntry = getBlogIndexEntry(slug)
  const heroSrc = resolveImageSrc(indexEntry?.image ?? image) || DEFAULT_HERO
  const heroAlt = imageAlt ?? indexEntry?.imageAlt ?? title

  return (
    <>
      <Head>
        <title>{title} - Ethiraj Srinivasan</title>
        <meta name="description" content={plainTextMarkdown(excerpt)} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={heroSrc} />
      </Head>

      <Navbar />

      <main className={bl.main}>
        <header className={bl.hero}>
          <img
            src={heroSrc}
            alt={heroAlt}
            className={bl.heroImg}
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_HERO
            }}
          />
          <div className={bl.heroOverlay} aria-hidden="true" />
        </header>

        <article className={bl.article}>
          <header className={bl.header}>
            <h1 className={bl.title}>{title}</h1>
            {excerpt ? <BlogExcerpt markdown={excerpt} /> : null}
          </header>

          <BlogArticleProvider title={title} excerpt={excerpt}>
            {children}
          </BlogArticleProvider>

          <PostNav
            basePath="/blogs"
            previous={previous}
            next={next}
            previousLabel="Previous article"
            nextLabel="Next article"
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
