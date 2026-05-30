import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostNav from '@/components/PostNav'
import SEO from '@/components/SEO'
import type { ReactNode } from 'react'
import { ArrowLeft, ArrowUpRight, Linkedin, Twitter } from 'lucide-react'
import { visibleBlogIndex, getBlogIndexEntry } from '@/data/blogIndex'
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
  const { previous, next } = getContentNeighbors(slug, visibleBlogIndex)
  const indexEntry = getBlogIndexEntry(slug)
  const heroSrc = resolveImageSrc(indexEntry?.image ?? image) || DEFAULT_HERO
  const heroAlt = imageAlt ?? indexEntry?.imageAlt ?? title
  const date = indexEntry?.date

  const shareUrl = `https://ethirajsrinivasan.com/blogs/${slug}/`
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(shareUrl)}&via=iamethi`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`

  const description = plainTextMarkdown(excerpt)
  const articleUrl = `https://ethirajsrinivasan.com/blogs/${slug}/`
  const ogImage = heroSrc.startsWith('http') ? heroSrc : `https://ethirajsrinivasan.com${heroSrc}`

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={`/blogs/${slug}/`}
        image={heroSrc}
        imageAlt={heroAlt}
        type="article"
        article={{
          publishedTime: indexEntry?.publishedAt,
          authors: ['Ethiraj Srinivasan'],
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description,
          image: ogImage,
          datePublished: indexEntry?.publishedAt,
          url: articleUrl,
          mainEntityOfPage: articleUrl,
          author: {
            '@type': 'Person',
            name: 'Ethiraj Srinivasan',
            url: 'https://ethirajsrinivasan.com',
          },
          publisher: {
            '@type': 'Person',
            name: 'Ethiraj Srinivasan',
            url: 'https://ethirajsrinivasan.com',
          },
        }}
      />

      <Navbar />

      <main id="main" className={bl.main}>
        {/* ─── Back link rail ─── */}
        <div className={bl.backRail}>
          <div className={bl.containerWide}>
            <Link href="/blogs" className={bl.backLink}>
              <ArrowLeft size={14} className="transition-transform duration-300 ease-smooth group-hover:-translate-x-0.5" />
              <span className="link-underline">All writing</span>
            </Link>
          </div>
        </div>

        {/* ─── Hero image figure (first) ─── */}
        <div className={bl.heroFigureWrap}>
          <div className={bl.heroFigure}>
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
          </div>
        </div>

        {/* ─── Editorial header ─── */}
        <header className={bl.headerSection}>
          <div className={bl.container}>
            <div className={bl.headerMeta}>
              <h2 className="eyebrow">Article</h2>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                {date && <span>{date}</span>}
                {date && indexEntry?.readTime && (
                  <span aria-hidden="true" className="text-ink-300">/</span>
                )}
                {indexEntry?.readTime && <span>{indexEntry.readTime}</span>}
              </div>
            </div>

            <h1 className={bl.title}>{title}</h1>

            {excerpt ? <BlogExcerpt markdown={excerpt} /> : null}

            <div className={bl.authorByline}>
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-ink-100">
                <Image src="/assets/my_photo.jpeg" alt="Ethiraj Srinivasan" fill className="object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium text-ink-900">Ethiraj Srinivasan</span>
                <span className="text-xs text-ink-500">Writing</span>
              </div>
            </div>
          </div>
        </header>

        {/* ─── Article body ─── */}
        <article className={bl.article}>
          <BlogArticleProvider title={title} excerpt={excerpt}>
            {children}
          </BlogArticleProvider>
        </article>

        {/* ─── Share + author rail ─── */}
        <section className={bl.footRail}>
          <div className={bl.container}>
            <div className={bl.footRailInner}>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-ink-100">
                  <Image src="/assets/my_photo.jpeg" alt="Ethiraj Srinivasan" fill className="object-cover" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm text-ink-500">Written by</p>
                  <p className="font-display text-lg text-ink-900">Ethiraj Srinivasan</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 mr-1 hidden sm:inline">
                  Share
                </span>
                <a
                  href={tweetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-200 text-ink-600 hover:text-ink-900 hover:border-ink-400 transition-all duration-300 ease-smooth hover:-translate-y-0.5"
                  aria-label="Share on X / Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-200 text-ink-600 hover:text-ink-900 hover:border-ink-400 transition-all duration-300 ease-smooth hover:-translate-y-0.5"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Continue reading ─── */}
        {(previous || next) && (
          <section className={bl.continueSection}>
            <div className={bl.container}>
              <div className="flex items-end justify-between gap-4 mb-8">
                <h2 className="eyebrow">Continue Reading</h2>
                <Link
                  href="/blogs"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-900"
                >
                  <span className="link-underline">All writing</span>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <PostNav
                basePath="/blogs"
                previous={previous}
                next={next}
                previousLabel="Previous article"
                nextLabel="Next article"
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
