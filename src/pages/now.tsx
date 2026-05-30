import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { ArrowUpRight, Hammer, BookOpen, Brain, MapPin } from 'lucide-react'

/**
 * /now — a "what I'm doing now" page in the Derek Sivers tradition.
 *
 *   https://nownownow.com/about
 *
 * Update the dated sections below whenever the picture changes. The intent is
 * "current, not curated" — so it's fine if this drifts behind by a few weeks.
 */

const LAST_UPDATED = 'May 2026'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const sections = [
  {
    icon: Hammer,
    label: 'Building',
    items: [
      {
        title: 'InfiniTraq',
        body: 'Co-Founder & CTO of Griffin AI Tech. Shipping InfiniPulse (privacy-first radar) and InfiniHub (Edge AI on existing CCTV) for senior living. The current focus: sub-5-second alerting on fall and inactivity events without ever sending video to the cloud.',
      },
      {
        title: 'Data platform at Zgrow Solutions',
        body: 'Leading data engineering, mentoring the team, and tightening the Spark-on-EMR pipeline for logistics anomaly + weight prediction.',
      },
      {
        title: 'Select consulting engagements',
        body: 'Taking on a small number of part-time projects alongside InfiniTraq — data platforms, applied AI, and fractional CTO work.',
      },
    ],
  },
  {
    icon: Brain,
    label: 'Thinking about',
    items: [
      {
        title: 'Edge AI economics',
        body: 'How far you can push inference quality on a $200 NVIDIA Jetson before having to phone home — and what the right hand-off model looks like for safety-critical alerts.',
      },
      {
        title: 'Founder-led consulting as a business model',
        body: 'What does "premium independent" look like when the alternative is a full team and a six-month engagement? Where to draw lines so the side work compounds InfiniTraq instead of diluting it.',
      },
      {
        title: 'Writing more, in fewer words',
        body: 'The next batch of essays is going to be longer and rarer — one signature piece a quarter rather than a flurry of shorter posts.',
      },
    ],
  },
  {
    icon: BookOpen,
    label: 'Reading',
    items: [
      {
        title: 'Currently on the desk',
        body: 'A mix of operating-manual books and founder essays — leaning toward execution-focused material rather than vision-y reads. (I keep a longer list of all-time favourites on the About page.)',
      },
    ],
  },
]

export default function NowPage() {
  return (
    <>
      <SEO
        title="Now"
        description="A current snapshot of what I'm building, thinking about, and reading. Updated as the picture changes."
        path="/now/"
        image="/og-default.png"
        imageAlt="What Ethiraj is doing right now"
      />

      <Navbar />

      <main id="main" className="min-h-screen overflow-x-hidden">
        {/* ─── Hero ─── */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
          <div
            className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-grid-ink bg-grid-lg opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="container-wide relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h2 className="eyebrow mb-6">Now</h2>
              <h1 className="h-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance mb-6">
                A <span className="italic">snapshot</span> of where my head&apos;s at.
              </h1>
              <p className="text-lg md:text-xl text-ink-600 max-w-2xl leading-relaxed text-pretty">
                Inspired by{' '}
                <a
                  href="https://nownownow.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink-900 font-medium"
                >
                  Derek Sivers&apos; /now
                </a>{' '}
                — current, not curated. If anything here looks stale, that just means I&apos;ve been
                shipping instead of writing.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Last updated · {LAST_UPDATED}
                <span aria-hidden="true" className="text-ink-300">/</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={11} /> Chennai
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Sections ─── */}
        <section className="relative pb-20 md:pb-28">
          <div className="container-wide">
            <div className="grid md:grid-cols-12 gap-10">
              {sections.map((section, sIdx) => (
                <motion.div
                  key={section.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: sIdx * 0.08 }}
                  className="md:col-span-12 grid md:grid-cols-12 gap-8 md:gap-10 pb-12 md:pb-16 border-b border-ink-100 last:border-b-0 last:pb-0"
                >
                  <div className="md:col-span-4 md:sticky md:top-24 self-start space-y-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ink-900 text-paper">
                      <section.icon size={18} strokeWidth={1.75} />
                    </div>
                    <h2 className="eyebrow">{section.label}</h2>
                    <h3 className="h-display text-3xl md:text-4xl leading-[1.05] text-balance">
                      {section.label === 'Building'
                        ? 'Where the time is going.'
                        : section.label === 'Thinking about'
                          ? 'Open loops.'
                          : 'On the desk.'}
                    </h3>
                  </div>

                  <div className="md:col-span-8 space-y-8">
                    {section.items.map((item) => (
                      <article key={item.title}>
                        <h4 className="font-display text-xl md:text-2xl leading-snug text-ink-900 mb-2 text-balance">
                          {item.title}
                        </h4>
                        <p className="text-[15px] md:text-base text-ink-700 leading-relaxed text-pretty">
                          {item.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative section-y-sm border-t border-ink-100 bg-paper-warm">
          <div className="container-wide">
            <motion.div {...fadeUp} className="max-w-3xl">
              <h3 className="h-display text-3xl md:text-4xl leading-[1.05] text-balance mb-6">
                Want the <span className="italic">longer view?</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  About
                  <ArrowUpRight
                    size={14}
                    className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/work-with-me"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  Work with me
                  <ArrowUpRight
                    size={14}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
