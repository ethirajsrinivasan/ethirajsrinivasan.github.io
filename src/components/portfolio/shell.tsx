import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostNav from '@/components/PostNav'
import SEO from '@/components/SEO'
import { Github, ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { getPortfolioIndexEntry, visiblePortfolioIndex } from '@/data/portfolioIndex'
import { getContentNeighbors } from '@/lib/contentNeighbors'
import { slugFromPath } from '@/lib/slugFromPath'
import { pl, externalLink, bannerImageClass, heroClass } from './classes'

export type ProjectLink = {
  href: string
  label: string
}

export type PortfolioShellProps = {
  /** Optional override; defaults to `portfolioIndex` title for `slug`. */
  title?: string
  category: string
  description: string
  image: string
  imageFit?: 'cover' | 'contain'
  date: string
  technologies: string[]
  links?: ProjectLink[]
  /** Page slug (e.g. medical-image-diagnostics). Required for prev/next nav. */
  slug?: string
  children: ReactNode
}

/** Shared portfolio page chrome — editorial ink palette. */
export default function PortfolioShell({
  title,
  category,
  description,
  image,
  imageFit,
  date,
  technologies,
  links = [],
  slug: slugProp,
  children,
}: PortfolioShellProps) {
  const router = useRouter()
  const slug =
    slugProp ||
    (router.isReady ? slugFromPath(router.asPath, '/portfolio') : '')
  const { previous, next } = slug ? getContentNeighbors(slug, visiblePortfolioIndex) : {}
  const indexEntry = slug ? getPortfolioIndexEntry(slug) : undefined
  const displayTitle = indexEntry?.title ?? title ?? 'Project'

  const projectPath = slug ? `/portfolio/${slug}/` : '/portfolio/'
  const projectUrl = `https://ethirajsrinivasan.com${projectPath}`
  const ogImage = image.startsWith('http') ? image : `https://ethirajsrinivasan.com${image}`

  return (
    <>
      <SEO
        title={displayTitle}
        description={description}
        path={projectPath}
        image={image}
        imageAlt={indexEntry?.imageAlt ?? displayTitle}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: displayTitle,
          description,
          image: ogImage,
          url: projectUrl,
          dateCreated: date,
          author: {
            '@type': 'Person',
            name: 'Ethiraj Srinivasan',
            url: 'https://ethirajsrinivasan.com',
          },
          keywords: technologies.join(', '),
          about: category,
        }}
      />

      <Navbar />

      <main id="main" className={pl.main}>
        {/* ─── Cinematic banner hero ─── */}
        <header className={heroClass(image, imageFit)}>
          <img
            src={image}
            alt={indexEntry?.imageAlt ?? displayTitle}
            className={bannerImageClass(image, imageFit)}
          />
          <div className={pl.heroOverlay} aria-hidden="true" />
          <div className={pl.heroNoise} aria-hidden="true" />

          {/* Back link rail */}
          <div className={pl.backRail}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <Link href="/#work" className={pl.backLink}>
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 ease-smooth group-hover:-translate-x-0.5"
                />
                <span className="link-underline">All projects</span>
              </Link>
            </div>
          </div>

          {/* Title block */}
          <div className={pl.heroInner}>
            <div className={pl.heroContainer}>
              <span className={pl.category}>
                {category}
                <span aria-hidden="true" className="mx-2 text-paper/35">
                  /
                </span>
                <span className="text-paper/60">{date}</span>
              </span>
              <h1 className={pl.title}>{displayTitle}</h1>
            </div>
          </div>
        </header>

        {/* ─── Article body ─── */}
        <article className={pl.article}>
          <div className={pl.grid}>
            <div className={pl.content}>{children}</div>

            <aside className={pl.aside}>
              <div className={pl.sidebar}>
                <h2 className={pl.sidebarTitle}>Project Details</h2>

                <div className={pl.sidebarStack}>
                  <div>
                    <div className={pl.labelRow}>
                      <span className={pl.label}>Year</span>
                    </div>
                    <p className={pl.value}>{date}</p>
                  </div>

                  <div>
                    <h3 className={pl.techTitle}>Technologies</h3>
                    <div className={pl.techList}>
                      {technologies.map((tech) => (
                        <span key={tech} className={pl.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {links.length > 0 && (
                    <div className={pl.links}>
                      <h3 className={pl.linkTitle}>Links</h3>
                      <div className={pl.linksStack}>
                        {links.map((link) => {
                          const isGitHub = link.href.includes('github.com')
                          return (
                            <a
                              key={link.href}
                              href={link.href}
                              className={pl.extLink}
                              {...externalLink}
                            >
                              <span className="flex items-center gap-2.5 min-w-0">
                                {isGitHub ? (
                                  <Github
                                    size={15}
                                    className="shrink-0 text-ink-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ExternalLink
                                    size={15}
                                    className="shrink-0 text-ink-500"
                                    aria-hidden="true"
                                  />
                                )}
                                <span className={pl.extLinkLabel}>
                                  {link.label}
                                </span>
                              </span>
                              <ArrowUpRight
                                size={14}
                                className={pl.extLinkIcon}
                                aria-hidden="true"
                              />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            <div className={pl.navRow}>
              <PostNav
                basePath="/portfolio"
                previous={previous}
                next={next}
                previousLabel="Previous project"
                nextLabel="Next project"
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
