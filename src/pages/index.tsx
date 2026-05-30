import SEO from '@/components/SEO'
import { trackCta } from '@/lib/analytics'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import { ArrowUpRight, ArrowRight, MapPin, ShieldCheck, Eye, Activity, Cpu, Database, Sparkles, Compass, MessageCircle } from 'lucide-react'
import { visibleBlogIndex } from '@/data/blogIndex'
import { visiblePortfolioIndex } from '@/data/portfolioIndex'
import { featuredTestimonials } from '@/data/testimonials'
import { plainTextMarkdown } from '@/lib/plain-text-markdown'
import { resolveImageSrc } from '@/lib/resolve-image-src'

const skills = [
  'Apache Spark', 'Hadoop', 'Hudi', 'Hive', 'HBase', 'Kafka',
  'AWS EMR', 'S3', 'Athena', 'Lambda', 'Kinesis',
  'Python', 'Scala', 'Java', 'Ruby', 'TypeScript',
  'Spring Boot', 'Ruby on Rails', 'Vert.x',
  'TensorFlow', 'PyTorch', 'Scikit-learn',
  'LangChain', 'OpenAI', 'n8n', 'Supabase',
  'PostgreSQL', 'Redis', 'Elasticsearch', 'Solr',
  'Docker', 'Maxwell', 'DeltaStreamer',
]

type Stat = {
  value: string
  label: string
  href?: string
  external?: boolean
}

const stats: Stat[] = [
  { value: '12+', label: 'Years engineering' },
  { value: '7', label: 'Companies built at' },
  { value: '10', label: 'Articles published', href: '/blogs' },
  {
    value: '6',
    label: 'Open-source gems',
    href: 'https://rubygems.org/profiles/ethi',
    external: true,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export default function Home() {
  const recentBlogs = visibleBlogIndex.slice(0, 4)
  const featuredBlog = recentBlogs[0]
  const sideBlogs = recentBlogs.slice(1, 4)

  return (
    <>
      <SEO
        title="Ethiraj Srinivasan — Co-Founder & CTO · Open for select engagements"
        titleAsIs
        description="Software engineer and data leader. Co-Founder & CTO at InfiniTraq (Griffin AI). Open for select freelance and advisory engagements — data platforms, AI / computer vision, and fractional CTO work."
        path="/"
        image="/og-default.png"
        imageAlt="Ethiraj Srinivasan — Engineer by craft. Founder by choice."
        type="profile"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ethiraj Srinivasan',
          alternateName: 'Ethi',
          url: 'https://ethirajsrinivasan.com',
          image: 'https://ethirajsrinivasan.com/assets/my_photo.jpeg',
          jobTitle: 'Co-Founder & CTO',
          worksFor: [
            {
              '@type': 'Organization',
              name: 'InfiniTraq (Griffin AI Tech)',
              url: 'https://griffinai.sh',
            },
            {
              '@type': 'Organization',
              name: 'Zgrow Solutions',
              url: 'https://zgrow.solutions',
            },
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chennai',
            addressCountry: 'IN',
          },
          alumniOf: [
            { '@type': 'CollegeOrUniversity', name: 'National University of Singapore' },
            { '@type': 'CollegeOrUniversity', name: 'Anna University' },
          ],
          knowsAbout: [
            'Data Engineering',
            'Applied AI',
            'Computer Vision',
            'Edge AI',
            'Ruby on Rails',
            'Apache Spark',
            'Distributed Systems',
          ],
          sameAs: [
            'https://www.linkedin.com/in/ethirajsrinivasan',
            'https://github.com/ethirajsrinivasan',
            'https://topmate.io/ethirajsrinivasan',
            'https://medium.com/@ethi',
            'https://twitter.com/iamethi',
            'https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA',
          ],
        }}
      />

      <Navbar />

      <main id="main" className="min-h-screen overflow-x-hidden">
        {/* ───────────── HERO ───────────── */}
        <section className="relative pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="absolute inset-0 bg-mesh-warm opacity-90 pointer-events-none" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-grid-ink bg-grid-lg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="container-wide relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  href="/work-with-me"
                  onClick={trackCta('cta_work_with_me', 'hero_status_pill')}
                  className="status-pill group hover:border-ink-400 transition-colors"
                >
                  <span className="status-dot" />
                  <span>Open for select engagements</span>
                  <ArrowUpRight
                    size={12}
                    className="text-ink-400 transition-all duration-300 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <span className="inline-flex items-center gap-1.5 text-xs text-ink-500 font-mono">
                  <MapPin size={12} /> Chennai
                </span>
              </div>

              <h1 className="h-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-8 text-balance">
                Ethiraj Srinivasan
                <br />
                <span className="italic font-normal text-accent-700">
                  Engineer by craft. Founder by choice.
                </span>
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-ink-600 leading-relaxed text-pretty">
                I'm <span className="text-ink-900 font-medium">Ethiraj Srinivasan</span> —
                Co-Founder &amp; CTO at{' '}
                <a
                  href="https://griffinai.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink-900 font-medium"
                >
                  InfiniTraq
                </a>
                , and Consultant, Head of Data Engineering at{' '}
                <a
                  href="https://zgrow.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink-900 font-medium"
                >
                  Zgrow Solutions
                </a>
                . Over a decade building software, data platforms, and products — and taking on a
                small number of engagements outside InfiniTraq.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/work-with-me"
                  onClick={trackCta('cta_work_with_me', 'hero_primary')}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  Work with me
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <a
                  href="https://griffinai.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  See InfiniTraq
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <Link
                  href="/#work"
                  className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  <span className="link-underline">Past work</span>
                  <ArrowRight
                    size={16}
                    className="text-ink-400 transition-transform duration-500 ease-smooth group-hover:translate-x-1 group-hover:text-ink-900"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-100 border border-ink-100 rounded-2xl overflow-hidden"
            >
              {stats.map((stat) => {
                const inner = (
                  <>
                    <div className="stat-num mb-2 inline-flex items-baseline gap-1.5">
                      {stat.value}
                      {stat.href && (
                        <ArrowUpRight
                          size={14}
                          className="text-ink-400 transition-all duration-300 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </>
                )
                if (stat.href) {
                  return (
                    <a
                      key={stat.label}
                      href={stat.href}
                      target={stat.external ? '_blank' : undefined}
                      rel={stat.external ? 'noopener noreferrer' : undefined}
                      className="group bg-paper px-6 py-7 sm:p-8 transition-colors hover:bg-paper-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    >
                      {inner}
                    </a>
                  )
                }
                return (
                  <div key={stat.label} className="bg-paper px-6 py-7 sm:p-8">
                    {inner}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ───────────── ABOUT / INTRO ───────────── */}
        <section className="relative section-y-sm">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <div className="md:col-span-4 md:sticky md:top-24 space-y-5">
                <h2 className="eyebrow">About</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  From <span className="italic">Rails apps</span> to data at scale — and founding.
                </h3>
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden ring-1 ring-ink-100 shadow-soft">
                  <Image
                    src="/assets/my_photo.jpeg"
                    alt="Ethiraj Srinivasan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-ink-700">
                <p className="text-pretty">
                  I'm currently building{' '}
                  <a
                    href="https://griffinai.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink-900 font-medium"
                  >
                    InfiniTraq
                  </a>
                  , a privacy-first AI guardian for senior care, as Co-Founder &amp; CTO of Griffin
                  AI Tech, and Consultant, Head of Data Engineering at{' '}
                  <a
                    href="https://zgrow.solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink-900 font-medium"
                  >
                    Zgrow Solutions
                  </a>{' '}
                  in Chennai.
                </p>
                <p className="text-pretty">
                  I started as a software engineer at{' '}
                  <span className="text-ink-900 font-medium">TCS</span> and{' '}
                  <span className="text-ink-900 font-medium">Pramati</span> (Ruby on Rails, web
                  apps), then moved into big data and analytics at Knorex, Lomotif, and five years
                  at <span className="text-ink-900 font-medium">Shopee, Singapore</span>.
                </p>
                <p className="text-pretty">
                  M.Tech in Software Engineering from{' '}
                  <a
                    href="https://www.nus.edu.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink-900 font-medium"
                  >
                    NUS
                  </a>
                  . My toolkit spans Spark, Hadoop, Kafka, Hudi, Hive, HBase, AWS (EMR, S3,
                  Athena), Python, Spring Boot, Ruby on Rails, and increasingly — Edge AI for video
                  intelligence.
                </p>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 mt-4 text-sm font-medium text-ink-900"
                >
                  <span className="link-underline">More about me</span>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── CURRENTLY BUILDING — INFINITRAQ ───────────── */}
        <section className="relative section-y border-t border-ink-100 bg-ink-900 text-paper overflow-hidden">
          <div
            className="absolute inset-0 bg-mesh-ink opacity-90 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-grid-ink bg-grid-lg opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="container-wide relative">
            <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="eyebrow text-paper/60 before:bg-paper/30">Currently Building</h2>

                <h3 className="h-display text-paper text-4xl sm:text-5xl md:text-6xl leading-[1.02] text-balance">
                  <span className="italic">InfiniTraq</span> — a 24/7 caretaker that never sleeps.
                </h3>

                <p className="text-base md:text-lg text-paper/70 leading-relaxed max-w-xl text-pretty">
                  An AI guardian for senior living. InfiniTraq continuously monitors for falls,
                  inactivity, and daily activities using non-visual sensors and Edge AI — no
                  cameras in private rooms, no cloud streaming, response in under 5 seconds.
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                  {[
                    { icon: ShieldCheck, text: 'Privacy-first by design' },
                    { icon: Eye, text: 'No cameras in private rooms' },
                    { icon: Activity, text: 'Sub-5-second alerts' },
                    { icon: Cpu, text: 'NVIDIA-powered Edge AI' },
                  ].map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm text-paper/80">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-paper/10 text-accent-300 ring-1 ring-paper/10">
                        <f.icon size={13} strokeWidth={1.75} />
                      </span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href="https://griffinai.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:bg-paper-warm hover:shadow-elev hover:-translate-y-0.5"
                  >
                    Visit griffinai.sh
                    <ArrowUpRight
                      size={16}
                      className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/40">
                    Co-Founder &amp; CTO · Griffin AI Tech
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent-500/10 rounded-[2.5rem] blur-2xl pointer-events-none" aria-hidden="true" />
                  <a
                    href="https://griffinai.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-3xl overflow-hidden ring-1 ring-paper/10 shadow-elev transition-transform duration-700 ease-smooth hover:-translate-y-1"
                  >
                    <img
                      src="/assets/images/infinitraq-dashboard.svg"
                      alt="InfiniTraq dashboard — live status, vitals, and InfiniPulse / InfiniHub sensor modules"
                      className="block w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── SKILLS MARQUEE ───────────── */}
        <section className="relative py-12 md:py-16 border-y border-ink-100 bg-paper-warm overflow-hidden">
          <div className="container-wide mb-6">
            <h2 className="eyebrow">Stack</h2>
          </div>
          <div className="marquee-mask">
            <div className="flex w-max animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div
                  key={`${skill}-${i}`}
                  className="px-6 py-2 mx-1.5 font-display text-2xl md:text-3xl lg:text-4xl text-ink-300 hover:text-ink-900 transition-colors duration-500 whitespace-nowrap select-none tracking-tightest"
                >
                  {skill}
                  <span className="ml-6 text-ink-200">·</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── SELECTED WORK ───────────── */}
        <section id="work" className="relative section-y">
          <div className="container-wide">
            <motion.div
              {...fadeUp}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
            >
              <div className="max-w-xl space-y-4">
                <h2 className="eyebrow">Projects</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Case studies across <span className="italic">Applied AI</span> and open source.
                </h3>
              </div>
              <p className="max-w-sm text-sm text-ink-500 leading-relaxed">
                A curated cross-section — from deep-learning systems and computer vision research
                to widely-used Ruby gems. Click any card to read the full write-up.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
              {visiblePortfolioIndex.map((project, idx) => (
                <motion.article
                  key={project.slug}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (idx % 6) * 0.06 }}
                  className="group"
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="card-soft h-full flex flex-col overflow-hidden"
                  >
                    {/* Banner */}
                    <div
                      className={`relative aspect-[16/10] overflow-hidden ${
                        project.imageFit === 'contain' ? 'bg-ink-950' : 'bg-paper-warm'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-smooth group-hover:scale-[1.04] ${
                          project.imageFit === 'contain'
                            ? 'object-contain p-10'
                            : 'object-cover object-center'
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Subtle gradient for legibility of meta row */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="badge-quiet">{project.category}</span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                          {project.year}
                        </span>
                      </div>

                      <h4 className="font-display text-xl md:text-[1.45rem] leading-[1.2] text-ink-900 mb-3 text-balance group-hover:text-accent-700 transition-colors duration-300">
                        {project.title}
                      </h4>

                      <p className="text-sm text-ink-600 leading-relaxed line-clamp-3 text-pretty flex-1">
                        {project.tagline}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
                        <span className="link-underline">Read case study</span>
                        <ArrowUpRight
                          size={13}
                          className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── WORK WITH ME ───────────── */}
        <section className="relative section-y border-t border-ink-100 bg-paper-warm overflow-hidden">
          <div className="container-wide">
            <motion.div
              {...fadeUp}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
            >
              <div className="max-w-xl space-y-4">
                <h2 className="eyebrow">Work with me</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Building <span className="italic">InfiniTraq.</span> Open to a few engagements
                  alongside.
                </h3>
              </div>
              <p className="max-w-sm text-sm text-ink-500 leading-relaxed">
                Founder-led consulting. I take on a small number of part-time projects each year
                where I can add the kind of leverage a senior team usually can't hire for.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  icon: Database,
                  title: 'Data Platform & Lakehouse',
                  desc:
                    'Architect, audit, or scale your Spark / Iceberg / Hudi / Airflow / Trino stack. From green-field designs to PB-scale tuning.',
                  tags: ['Spark', 'Iceberg', 'Hudi', 'Airflow', 'AWS EMR'],
                },
                {
                  icon: Sparkles,
                  title: 'Applied AI & Automation',
                  desc:
                    'Vision, language, and the glue between them. Edge AI for InfiniTraq, LangChain document intelligence, n8n + Supabase workflow automation.',
                  tags: ['LangChain', 'n8n', 'OpenAI', 'NVIDIA Edge', 'PyTorch'],
                },
                {
                  icon: Compass,
                  title: 'Fractional CTO & Advisory',
                  desc:
                    'Architecture review, hiring help, technical due diligence, and engineering coaching for seed and Series-A teams.',
                  tags: ['Strategy', 'Hiring', 'Architecture', 'Diligence'],
                },
              ].map((s, idx) => (
                <motion.div
                  key={s.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
                  className="bento-card flex flex-col"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-900 text-paper mb-5">
                      <s.icon size={18} strokeWidth={1.75} />
                    </div>
                    <h4 className="h-display text-2xl md:text-[1.65rem] leading-[1.15] mb-3 text-balance">
                      {s.title}
                    </h4>
                    <p className="text-sm text-ink-600 leading-relaxed text-pretty mb-6">
                      {s.desc}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="badge-quiet">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mentorship + Topmate lane */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.24 }}
              className="mt-6 md:mt-7 card-soft p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:!translate-y-0"
            >
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-paper-warm border border-ink-100 text-ink-700">
                  <MessageCircle size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-1.5">
                    Quick chat or mentorship
                  </p>
                  <p className="font-display text-xl md:text-2xl text-ink-900 leading-snug text-balance">
                    Not a project? Book a 15–30 minute call.
                  </p>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    Career guidance, mock interviews, architecture sanity-checks, and 1:1
                    mentorship — all on Topmate.
                  </p>
                </div>
              </div>
              <a
                href="https://topmate.io/ethirajsrinivasan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCta('cta_topmate', 'homepage_mentorship_callout')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-300 ease-smooth hover:border-ink-400 hover:-translate-y-0.5 hover:shadow-soft self-start md:self-center shrink-0"
              >
                Book on Topmate
                <ArrowUpRight
                  size={16}
                  className="transition-all duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.32 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/work-with-me"
                onClick={trackCta('cta_work_with_me', 'homepage_work_with_me_section')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
              >
                Engagement details
                <ArrowUpRight
                  size={16}
                  className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="mailto:ethirajsrinivasan@gmail.com?subject=Project%20inquiry"
                onClick={trackCta('cta_email', 'homepage_work_with_me_section')}
                className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
              >
                <span className="link-underline">Send a brief</span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ───────────── TESTIMONIALS ───────────── */}
        <section className="relative section-y-sm border-t border-ink-100">
          <Testimonials
            items={featuredTestimonials}
            variant="featured"
            eyebrow="In their words"
            title={
              <>
                People I&rsquo;ve <span className="italic">shipped with.</span>
              </>
            }
            description="Recommendations from managers, ex-colleagues, and clients — paraphrased verbatim from LinkedIn and Upwork."
          />
          <div className="container-wide mt-10 md:mt-12">
            <Link
              href="/work-with-me#testimonials"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900"
            >
              <span className="link-underline">More on the work-with-me page</span>
              <ArrowUpRight
                size={14}
                className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        {/* ───────────── BLOG ───────────── */}
        {featuredBlog && (
          <section className="relative section-y bg-paper-warm border-t border-ink-100">
            <div className="container-wide">
              <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div className="max-w-xl space-y-4">
                  <h2 className="eyebrow">Writing</h2>
                  <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                    Notes from <span className="italic">the field.</span>
                  </h3>
                </div>
                <Link
                  href="/blogs"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900"
                >
                  <span className="link-underline">All writing</span>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>

              <div className="grid md:grid-cols-12 gap-8">
                <motion.div {...fadeUp} className="md:col-span-7">
                  <Link href={`/blogs/${featuredBlog.slug}`} className="group block">
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-ink-100 shadow-soft mb-6">
                      <img
                        src={resolveImageSrc(featuredBlog.image)}
                        alt={featuredBlog.imageAlt || featuredBlog.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="status-pill bg-paper">
                          <span className="status-dot bg-accent-500" />
                          Featured
                        </span>
                      </div>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-500 mb-3">
                      {featuredBlog.date}
                    </p>
                    <h4 className="h-display text-3xl md:text-4xl leading-[1.1] mb-3 text-balance group-hover:text-accent-700 transition-colors duration-300">
                      {featuredBlog.title}
                    </h4>
                    <p className="text-base text-ink-600 leading-relaxed line-clamp-3 text-pretty">
                      {plainTextMarkdown(featuredBlog.excerpt)}
                    </p>
                  </Link>
                </motion.div>

                <div className="md:col-span-5 space-y-6">
                  {sideBlogs.map((blog, i) => (
                    <motion.div
                      key={blog.slug}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: 0.08 * (i + 1) }}
                    >
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="group block py-5 border-b border-ink-100 last:border-b-0"
                      >
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                            {blog.date}
                          </span>
                        </div>
                        <h5 className="font-display text-xl md:text-2xl leading-tight text-ink-900 group-hover:text-accent-700 transition-colors duration-300 text-balance">
                          {blog.title}
                        </h5>
                        <p className="mt-2 text-sm text-ink-600 line-clamp-2 leading-relaxed">
                          {plainTextMarkdown(blog.excerpt)}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ───────────── CONTACT ───────────── */}
        <section className="relative section-y border-t border-ink-100 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none" aria-hidden="true" />
          <div className="container-wide relative">
            <motion.div {...fadeUp} className="max-w-4xl">
              <h2 className="eyebrow mb-6">Let's connect</h2>
              <p className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance mb-10">
                Got an idea worth building?{' '}
                <span className="italic">Say hello.</span>
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:ethirajsrinivasan@gmail.com"
                  onClick={trackCta('cta_email', 'homepage_contact')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  ethirajsrinivasan@gmail.com
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://topmate.io/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackCta('cta_topmate', 'homepage_contact')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  Book on Topmate
                  <ArrowUpRight
                    size={16}
                    className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  <span className="link-underline">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
