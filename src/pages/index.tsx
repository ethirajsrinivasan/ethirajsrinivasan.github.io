import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowUpRight, ArrowRight, Brain, Smartphone, Globe, Package, MapPin, ShieldCheck, Eye, Activity, Cpu } from 'lucide-react'
import { blogIndex } from '@/data/blogIndex'
import { plainTextMarkdown } from '@/lib/plain-text-markdown'
import { resolveImageSrc } from '@/lib/resolve-image-src'

const skills = [
  'Apache Spark', 'Hadoop', 'Hudi', 'Hive', 'HBase', 'Kafka',
  'AWS EMR', 'S3', 'Athena', 'Lambda', 'Kinesis',
  'Python', 'Scala', 'Java', 'Ruby', 'TypeScript',
  'Spring Boot', 'Ruby on Rails', 'Vert.x',
  'TensorFlow', 'PyTorch', 'Scikit-learn',
  'PostgreSQL', 'Redis', 'Elasticsearch', 'Solr',
  'Docker', 'Maxwell', 'DeltaStreamer',
]

const stats = [
  { value: '10+', label: 'Years engineering' },
  { value: '8', label: 'Companies built at' },
  { value: '23', label: 'Articles published' },
  { value: '8', label: 'Open-source gems' },
]

const portfolioCategories = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Deep learning models for medical diagnostics, facial recognition, and social network analysis.',
    projects: [
      { name: 'Medical Image Diagnostics', slug: 'medical-image-diagnostics' },
      { name: 'Facial Recognition System', slug: 'facial-recognition-system' },
      { name: 'Social Community Expansion', slug: 'social-community-expansion' },
      { name: 'Smart Interactive Wall', slug: 'smart-interactive-wall' },
      { name: 'Spatio Temporal Analysis Of Students’ Travel', slug: 'spatio-temporal-analysis' },
      { name: 'DNA Capitals Hackathon', slug: 'dna-capitals-hackathon' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Android',
    description: 'Utility applications for personal productivity and health tracking.',
    projects: [
      { name: 'Medtracker', slug: 'medtracker' },
      { name: 'U Ask', slug: 'u-ask' },
    ],
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern web applications with state-of-the-art technologies.',
    projects: [
      { name: 'Tablizer', slug: 'tablizer' },
      { name: 'CSS to Inliner', slug: 'css-to-inliner' },
      { name: 'URL Shortener', slug: 'url-shortener' },
    ],
  },
  {
    icon: Package,
    title: 'Ruby Gems',
    description: 'Open-source contributions and library development.',
    projects: [
      { name: 'Table2 CSV', slug: 'table2-csv' },
      { name: 'Rails Protip', slug: 'rails-protip' },
      { name: 'Rails Fort', slug: 'rails-fort' },
      { name: 'Technology Icons', slug: 'technology-icons' },
      { name: 'Supercache', slug: 'supercache' },
      { name: 'Sunspot', slug: 'sunspot' },
      { name: 'Devise Foundation Views', slug: 'devise-foundation-views' },
      { name: 'Collection2 CSV', slug: 'collection2-csv' },
    ],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export default function Home() {
  const recentBlogs = blogIndex.slice(0, 4)
  const featuredBlog = recentBlogs[0]
  const sideBlogs = recentBlogs.slice(1, 4)

  return (
    <>
      <Head>
        <title>Ethiraj Srinivasan — Co-Founder &amp; CTO, InfiniTraq</title>
        <meta
          name="description"
          content="Software engineer and data leader. Co-Founder &amp; CTO at InfiniTraq (Griffin AI) and Consultant, Head of Data Engineering at Zgrow Solutions."
        />
        <meta property="og:image" content="/assets/ai-6782a7d586827e3fe87b3b5907209c7f3bbf9c809841f139aa0bae2b9c5c0dd8.jpg" />
      </Head>

      <Navbar />

      <main className="min-h-screen overflow-x-hidden">
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
                <span className="status-pill">
                  <span className="status-dot" />
                  Co-Founder &amp; CTO @ InfiniTraq
                </span>
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
                . Over a decade building software, data platforms, and products.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://griffinai.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  See InfiniTraq
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  Past work
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
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
              {stats.map((stat) => (
                <div key={stat.label} className="bg-paper px-6 py-7 sm:p-8">
                  <div className="stat-num mb-2">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
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

        {/* ───────────── WORK ───────────── */}
        <section id="work" className="relative section-y">
          <div className="container-wide">
            <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-xl space-y-4">
                <h2 className="eyebrow">Selected Work</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Projects across <span className="italic">ML, mobile, web</span>, and open source.
                </h3>
              </div>
              <p className="max-w-sm text-sm text-ink-500 leading-relaxed">
                A curated cross-section of work — from production data pipelines to side-project
                Ruby gems. Click any project to read the full case study.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6 auto-rows-fr">
              {portfolioCategories.map((category, idx) => {
                const isWide = idx === 0 || idx === 3
                return (
                  <motion.div
                    key={category.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
                    className={`bento-card flex flex-col ${isWide ? 'md:col-span-4' : 'md:col-span-2'}`}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-5">
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-900 text-paper">
                          <category.icon size={18} strokeWidth={1.75} />
                        </div>
                        <span className="badge-quiet">{category.projects.length} projects</span>
                      </div>

                      <h4 className="h-display text-2xl md:text-3xl mb-2 text-balance">
                        {category.title}
                      </h4>
                      <p className="text-sm text-ink-600 leading-relaxed mb-6 text-pretty">
                        {category.description}
                      </p>

                      <ul className="mt-auto space-y-1.5 divide-y divide-ink-100/70 border-t border-ink-100/70">
                        {category.projects.slice(0, isWide ? 6 : 4).map((project) => (
                          <li key={project.slug}>
                            <Link
                              href={`/portfolio/${project.slug}`}
                              className="group flex items-center justify-between gap-3 py-2 text-sm text-ink-700 hover:text-ink-900 transition-colors"
                            >
                              <span className="link-underline truncate">{project.name}</span>
                              <ArrowUpRight
                                size={14}
                                className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
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
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  ethirajsrinivasan@gmail.com
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://in.linkedin.com/in/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  LinkedIn
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
