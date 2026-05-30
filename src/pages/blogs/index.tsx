import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { ArrowUpRight } from 'lucide-react'
import { visibleBlogIndex } from '@/data/blogIndex'
import { plainTextMarkdown } from '@/lib/plain-text-markdown'
import { resolveImageSrc } from '@/lib/resolve-image-src'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export default function Blogs() {
  const [featured, ...rest] = visibleBlogIndex

  return (
    <>
      <SEO
        title="Writing"
        description="Technical articles and notes on software engineering, machine learning, data engineering, and travel."
        path="/blogs/"
        image="/og-default.png"
        imageAlt="Writing by Ethiraj Srinivasan"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Ethiraj Srinivasan — Writing',
          url: 'https://ethirajsrinivasan.com/blogs/',
          author: {
            '@type': 'Person',
            name: 'Ethiraj Srinivasan',
            url: 'https://ethirajsrinivasan.com',
          },
          blogPost: visibleBlogIndex.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `https://ethirajsrinivasan.com/blogs/${post.slug}/`,
            datePublished: post.publishedAt,
          })),
        }}
      />

      <Navbar />

      <main id="main" className="min-h-screen overflow-x-hidden">
        {/* ───────────── Hero ───────────── */}
        <section className="relative pt-28 md:pt-36 pb-14 md:pb-20">
          <div
            className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-grid-ink bg-grid-lg opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none"
            aria-hidden="true"
          />
          <div className="container-wide relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h2 className="eyebrow mb-6">Writing</h2>
              <h1 className="h-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance mb-6">
                Articles from the <span className="italic">edges</span> of code, data &amp; travel.
              </h1>
              <p className="text-lg md:text-xl text-ink-600 max-w-2xl leading-relaxed text-pretty">
                Long-form thinking on software engineering, machine learning, and the occasional
                postcard from the road.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ───────────── Featured ───────────── */}
        {featured && (
          <section className="relative pb-16 md:pb-20">
            <div className="container-wide">
              <motion.div {...fadeUp}>
                <Link href={`/blogs/${featured.slug}`} className="group block">
                  <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-ink-100 shadow-soft">
                      <img
                        src={resolveImageSrc(featured.image)}
                        alt={featured.imageAlt || featured.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="status-pill bg-paper">
                          <span className="status-dot bg-accent-500" />
                          Latest
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-5 space-y-4">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-500 flex items-center gap-2">
                        <span>{featured.date}</span>
                        <span aria-hidden="true" className="text-ink-300">/</span>
                        <span>{featured.readTime}</span>
                      </p>
                      <h2 className="h-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance group-hover:text-accent-700 transition-colors duration-300">
                        {featured.title}
                      </h2>
                      <p className="text-base text-ink-600 leading-relaxed line-clamp-4 text-pretty">
                        {plainTextMarkdown(featured.excerpt)}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-ink-900 pt-2">
                        <span className="link-underline">Read article</span>
                        <ArrowUpRight
                          size={14}
                          className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* ───────────── Grid ───────────── */}
        <section className="relative pb-24 md:pb-32 border-t border-ink-100 pt-16 md:pt-20 bg-paper-warm">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-10">
              <h3 className="eyebrow">All articles</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                {visibleBlogIndex.length} articles
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (index % 6) * 0.05 }}
                >
                  <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                    <article className="card-soft h-full flex flex-col overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={resolveImageSrc(blog.image)}
                          alt={blog.imageAlt || blog.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 mb-3 flex items-center gap-2">
                          <span>{blog.date}</span>
                          <span aria-hidden="true" className="text-ink-300">/</span>
                          <span>{blog.readTime}</span>
                        </p>
                        <h4 className="font-display text-xl md:text-2xl leading-tight text-ink-900 group-hover:text-accent-700 transition-colors duration-300 line-clamp-2 mb-3 text-balance">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-ink-600 line-clamp-3 leading-relaxed flex-1">
                          {plainTextMarkdown(blog.excerpt)}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
                          <span className="link-underline">Read</span>
                          <ArrowUpRight
                            size={13}
                            className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
