import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostNav from '@/components/PostNav'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import type { ReactNode } from 'react'
import { blogIndex } from '@/data/blogIndex'
import { getContentNeighbors } from '@/lib/contentNeighbors'
import { bl } from './classes'

export type BlogShellProps = {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  children: ReactNode
}

export default function BlogShell({
  slug,
  title,
  excerpt,
  image,
  date,
  readTime,
  children,
}: BlogShellProps) {
  const { previous, next } = getContentNeighbors(slug, blogIndex)

  return (
    <>
      <Head>
        <title>{title} - Ethiraj Srinivasan</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
      </Head>

      <Navbar />

      <main className={bl.main}>
        <header className={bl.hero}>
          <img src={image} alt={title} className={bl.heroImg} />
          <div className={bl.heroOverlay} aria-hidden="true" />
        </header>

        <article className={bl.article}>
          <div className={bl.back}>
            <Link href="/blogs" className={bl.backLink}>
              <ArrowLeft size={20} aria-hidden="true" />
              Back to Blog
            </Link>
          </div>

          <header className={bl.header}>
            <h1 className={bl.title}>{title}</h1>
            <div className={bl.meta}>
              <div className={bl.metaItem}>
                <Calendar size={18} aria-hidden="true" />
                <span>{date}</span>
              </div>
              <div className={bl.metaItem}>
                <Clock size={18} aria-hidden="true" />
                <span>{readTime}</span>
              </div>
            </div>
          </header>

          {children}

          <PostNav
            basePath="/blogs"
            previous={previous}
            next={next}
            previousLabel="Previous article"
            nextLabel="Next article"
          />

          <div className={bl.footer}>
            <Link href="/blogs" className={bl.footerLink}>
              ← More Articles
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
