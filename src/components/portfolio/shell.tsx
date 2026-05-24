import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostNav from '@/components/PostNav'
import { Github, ExternalLink, Calendar } from 'lucide-react'
import type { ReactNode } from 'react'
import { portfolioIndex } from '@/data/portfolioIndex'
import { getContentNeighbors } from '@/lib/contentNeighbors'
import { slugFromPath } from '@/lib/slugFromPath'
import { pl, externalLink, bannerImageClass, heroClass } from './classes'

export type ProjectLink = {
  href: string
  label: string
}

export type PortfolioShellProps = {
  title: string
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

/** Shared portfolio page chrome — plain HTML + pl/pl.* classes only. */
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
  const { previous, next } = slug ? getContentNeighbors(slug, portfolioIndex) : {}

  return (
    <>
      <Head>
        <title>{title} - Ethiraj Srinivasan</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
      </Head>

      <Navbar />

      <main className={pl.main}>
        <header className={heroClass(image, imageFit)}>
          <img src={image} alt={title} className={bannerImageClass(image, imageFit)} />
          <div className={pl.heroOverlay} aria-hidden="true" />
          <div className={pl.heroInner}>
            <div className={pl.heroContainer}>
              <span className={pl.category}>{category}</span>
              <h1 className={pl.title}>{title}</h1>
            </div>
          </div>
        </header>

        <article className={pl.article}>
          <div className={pl.grid}>
            <div className={pl.content}>{children}</div>

            <aside className={pl.aside}>
              <div className={pl.sidebar}>
                <h2 className={pl.sidebarTitle}>Project Details</h2>

                <div className={pl.sidebarStack}>
                  <div>
                    <div className={pl.labelRow}>
                      <Calendar size={18} aria-hidden="true" />
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
                              {isGitHub ? (
                                <Github size={20} className={pl.extLinkIcon} aria-hidden="true" />
                              ) : (
                                <ExternalLink size={20} className={pl.extLinkIcon} aria-hidden="true" />
                              )}
                              <span className={pl.extLinkLabel}>{link.label}</span>
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
