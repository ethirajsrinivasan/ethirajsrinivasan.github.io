import SEO from '@/components/SEO'
import { trackCta } from '@/lib/analytics'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import { testimonials } from '@/data/testimonials'
import {
  ArrowUpRight,
  ArrowRight,
  Database,
  Sparkles,
  Compass,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Mail,
} from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

const services = [
  {
    icon: Database,
    title: 'Data Platform & Lakehouse',
    summary: 'Architect, audit, or scale your data stack.',
    details: [
      'Green-field lakehouse design (Iceberg / Hudi / Delta)',
      'Spark / Trino / Hive / HBase tuning at PB scale',
      'Airflow / Kafka / Maxwell / DeltaStreamer pipelines',
      'AWS EMR, S3, Athena, Lambda, Kinesis cost & perf reviews',
      'Migration from legacy warehouses to open table formats',
    ],
  },
  {
    icon: Sparkles,
    title: 'Applied AI & Automation',
    summary: 'Vision, language, and the glue between them.',
    details: [
      'Computer vision pipelines — detection, tracking, classification',
      'LLM & RAG document intelligence (LangChain + OpenAI + vector stores)',
      'Workflow automation with n8n, Supabase, and custom APIs',
      'Edge AI on NVIDIA Jetson / Orin for real-time inference',
      'MLOps: training, eval, registry, monitoring',
      'Domain background: medical imaging, video safety, document intelligence',
    ],
  },
  {
    icon: Compass,
    title: 'Fractional CTO & Advisory',
    summary: 'For seed and Series-A teams that need senior leverage.',
    details: [
      'Architecture review & technical due diligence',
      'Hiring help — JD design, interviewing, calibrating bar',
      'Engineering coaching for first-time founders & tech leads',
      'Sprint cadence, on-call & incident reviews',
      'Investor / board technical narrative support',
    ],
  },
]

const process = [
  {
    n: '01',
    title: 'Intro call',
    body:
      'A short async exchange or a 30-min call to understand the problem, the stakes, and whether I am the right fit. No commitment.',
  },
  {
    n: '02',
    title: 'Scope brief',
    body:
      'I write up a one-page brief — outcomes, scope, timeline, working rhythm. You decide if it lands before anything else moves.',
  },
  {
    n: '03',
    title: 'Engagement',
    body:
      'Fixed-price project, weekly retainer, or advisory hours. Async-first, with one weekly working session and shared docs / Linear / Notion.',
  },
  {
    n: '04',
    title: 'Handover',
    body:
      'Documented, with a checklist your team can run from. I stay reachable for follow-ups for a fixed window after wrap-up.',
  },
]

const fits = [
  'Founders / CTOs needing a senior pair of eyes on data or AI architecture',
  'Teams scaling past their first PB or first real production ML system',
  'Companies inheriting a legacy data stack and weighing a rebuild',
  'Seed / Series-A teams that want a fractional engineering partner, not a contractor',
]

const notFits = [
  'Full-time roles or anything resembling a long-tenure operator job',
  'Generic feature-factory dev work with no architectural problem to solve',
  'Equity-only or contingent-pay engagements',
  'Anything that materially conflicts with my work at InfiniTraq',
]

const outcomes = [
  {
    metric: '14 PB',
    label: 'Data lake at Shopee SG',
    body:
      'Architected and operated a 14 PB lakehouse serving thousands of internal users across analytics and ML.',
  },
  {
    metric: '30K+',
    label: 'Pipelines at 99.95% reliability',
    body:
      'Led ingestion for over 30,000 data pipelines at Shopee, holding 99.95%+ job-success SLOs through self-healing, reconciliation, and disciplined on-call.',
  },
  {
    metric: '<5 s',
    label: 'Edge AI alerting',
    body:
      'Designed the InfiniTraq Edge AI pipeline that detects falls and inactivity on-device with sub-5-second response.',
  },
  {
    metric: '8',
    label: 'OSS libraries shipped',
    body:
      'Maintained 8 Ruby gems and other OSS used in production by Rails teams.',
  },
]

const topmateOfferings = [
  {
    name: 'Discovery Call',
    detail: '15 min · best to scope a project quickly',
  },
  {
    name: '1:1 Mentorship',
    detail: '30 min · long-term career & technical guidance',
  },
  {
    name: 'Career Guidance',
    detail: '30 min · direction, role fit, and growth path',
  },
  {
    name: 'Mock Interview',
    detail: '60 min · system design / data engineering',
  },
  {
    name: 'Interview Prep',
    detail: '30 min · tactics, frameworks, common traps',
  },
  {
    name: 'Priority DM',
    detail: '2-day reply window · async written answers',
  },
]

const faqs = [
  {
    q: 'Where are you based and what hours do you work?',
    a: 'Chennai, IST (UTC+5:30). I work async-first with one weekly working session in the client time-zone. I have worked extensively with teams in SG, EU, and US.',
  },
  {
    q: 'How do you price engagements?',
    a: 'I price based on the scope and shape of the work — fixed price for clearly defined projects, weekly retainer for ongoing engineering or advisory work. We discuss it on the intro call once I understand the problem.',
  },
  {
    q: 'Can you sign NDAs and DPAs?',
    a: 'Yes. I am happy to sign reasonable mutual NDAs before the scope brief, and DPAs as required by your jurisdiction.',
  },
  {
    q: 'Will my work conflict with InfiniTraq?',
    a: 'No. I only take engagements that are non-competing and that I can do well alongside InfiniTraq. If there is any conflict, I will name it on the intro call and walk away.',
  },
  {
    q: 'What does a typical engagement look like?',
    a: 'Common shapes: a 2–4 week architecture review, a 6–12 week build / migration project, or a multi-month advisory retainer of a few hours per week. We will pick whichever shape actually fits the problem.',
  },
]

export default function WorkWithMe() {
  return (
    <>
      <SEO
        title="Work with me"
        description="Founder-led consulting. I take on a small number of part-time engagements alongside InfiniTraq — data platforms, AI / computer vision systems, and fractional CTO / advisory work."
        path="/work-with-me/"
        image="/og-default.png"
        imageAlt="Work with Ethiraj Srinivasan — Data platforms · Applied AI · Fractional CTO"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Ethiraj Srinivasan — Consulting',
          provider: {
            '@type': 'Person',
            name: 'Ethiraj Srinivasan',
            url: 'https://ethirajsrinivasan.com',
          },
          areaServed: 'Worldwide (remote)',
          description:
            'Founder-led consulting in data platforms, applied AI, and fractional CTO / advisory work.',
          serviceType: [
            'Data Platform Engineering',
            'Applied AI & Automation',
            'Fractional CTO Advisory',
          ],
          url: 'https://ethirajsrinivasan.com/work-with-me/',
        }}
      />

      <Navbar />

      <main id="main" className="min-h-screen overflow-x-hidden">
        {/* ───────────── HERO ───────────── */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
          <div
            className="absolute inset-0 bg-mesh-warm opacity-90 pointer-events-none"
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
              className="max-w-4xl"
            >
              <div className="mb-8">
                <span className="status-pill">
                  <span className="status-dot" />
                  Open for select engagements
                </span>
              </div>

              <h1 className="h-display text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.02] mb-8 text-balance">
                Work <span className="italic font-normal text-accent-700">with me.</span>
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-ink-600 leading-relaxed text-pretty">
                I am building{' '}
                <a
                  href="https://griffinai.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink-900 font-medium"
                >
                  InfiniTraq
                </a>{' '}
                as Co-Founder &amp; CTO of Griffin AI Tech. Alongside, I take on a small number of
                part-time engagements each year — the kind where a decade of data and AI systems
                experience compounds quickly into your team.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:ethirajsrinivasan@gmail.com?subject=Project%20inquiry&body=Hi%20Ethiraj%2C%0A%0AAbout%20us%3A%20%0AThe%20problem%3A%20%0ARough%20timeline%3A%20%0A"
                  onClick={trackCta('cta_email', 'work_with_me_hero')}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  <Mail size={15} />
                  Send a brief
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://topmate.io/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackCta('cta_topmate', 'work_with_me_hero')}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} />
                  Book a call on Topmate
                  <ArrowUpRight
                    size={16}
                    className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── SERVICES ───────────── */}
        <section className="relative section-y-sm border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
              <div className="md:col-span-4 space-y-4">
                <h2 className="eyebrow">What I take on</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Three lanes where I&apos;m most useful.
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-ink-600 leading-relaxed text-pretty">
                  The work I do best sits at the intersection of data systems, applied AI, and
                  early-stage engineering leadership. The lanes below are the ones where I can
                  move the needle fastest and where I genuinely enjoy the problem.
                </p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
              {services.map((s, idx) => (
                <motion.article
                  key={s.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
                  className="bento-card flex flex-col"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-900 text-paper mb-5">
                      <s.icon size={18} strokeWidth={1.75} />
                    </div>
                    <h4 className="h-display text-2xl md:text-[1.65rem] leading-[1.15] mb-2 text-balance">
                      {s.title}
                    </h4>
                    <p className="text-sm font-medium text-ink-700 mb-5">{s.summary}</p>
                    <ul className="mt-auto space-y-2 text-sm text-ink-600 leading-relaxed border-t border-ink-100 pt-5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-block w-1 h-1 rounded-full bg-ink-400 shrink-0"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── PROCESS ───────────── */}
        <section className="relative section-y bg-paper-warm border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
              <div className="md:col-span-4 space-y-4">
                <h2 className="eyebrow">How I work</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Quiet, async, written.
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-ink-600 leading-relaxed text-pretty">
                  Async-first, decisions written down, one weekly working session. I optimise for
                  your team&apos;s focus, not for billable hours. Each engagement starts with a
                  one-page scope brief so we both know what success looks like before anything
                  meaningful changes in your code.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {process.map((p, idx) => (
                <motion.div
                  key={p.n}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
                  className="card-soft p-6 sm:p-7 hover:!translate-y-0"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-3">
                    {p.n}
                  </p>
                  <h4 className="font-display text-xl md:text-2xl text-ink-900 mb-3 text-balance">
                    {p.title}
                  </h4>
                  <p className="text-sm text-ink-600 leading-relaxed text-pretty">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── FIT / NOT FIT ───────────── */}
        <section className="relative section-y border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mb-14 max-w-2xl space-y-4">
              <h2 className="eyebrow">Fit</h2>
              <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                A short list. <span className="italic">Both ways.</span>
              </h3>
              <p className="text-base text-ink-600 leading-relaxed text-pretty">
                The honest filter — what tends to go well, and what I steer clear of. If you are
                unsure which side you fall on, write to me anyway; I will tell you straight.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <motion.div {...fadeUp} className="card-soft p-7 sm:p-8 hover:!translate-y-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-700 mb-4">
                  Good fit
                </p>
                <ul className="space-y-3.5">
                  {fits.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-700 leading-relaxed">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-600 mt-0.5 shrink-0"
                        strokeWidth={1.75}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
                className="card-soft p-7 sm:p-8 hover:!translate-y-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-4">
                  Not a fit
                </p>
                <ul className="space-y-3.5">
                  {notFits.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-700 leading-relaxed">
                      <XCircle size={16} className="text-ink-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── OUTCOMES / RECEIPTS ───────────── */}
        <section className="relative section-y bg-ink-900 text-paper overflow-hidden border-t border-ink-100">
          <div
            className="absolute inset-0 bg-mesh-ink opacity-90 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-grid-ink bg-grid-lg opacity-[0.1] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="container-wide relative">
            <motion.div {...fadeUp} className="mb-14 max-w-2xl space-y-4">
              <h2 className="eyebrow text-paper/60 before:bg-paper/30">Receipts</h2>
              <h3 className="h-display text-paper text-4xl md:text-5xl leading-[1.05] text-balance">
                Outcomes from past <span className="italic">decade.</span>
              </h3>
              <p className="text-base text-paper/70 leading-relaxed text-pretty">
                A few concrete results from the work behind the resume. Full case studies under{' '}
                <Link href="/#work" className="link-underline text-paper">
                  Projects
                </Link>
                .
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {outcomes.map((o, idx) => (
                <motion.div
                  key={o.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
                  className="relative rounded-2xl border border-paper/10 bg-paper/[0.03] p-7 backdrop-blur-sm"
                >
                  <p className="font-display text-5xl md:text-6xl font-light tracking-tightest text-paper mb-2">
                    {o.metric}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 mb-4">
                    {o.label}
                  </p>
                  <p className="text-sm text-paper/75 leading-relaxed text-pretty">{o.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── TESTIMONIALS ───────────── */}
        <section id="testimonials" className="relative section-y-sm border-t border-ink-100 scroll-mt-24">
          <Testimonials
            items={testimonials}
            variant="grid"
            eyebrow="In their words"
            title={
              <>
                A decade of <span className="italic">working alongside</span> good people.
              </>
            }
            description="From the founders, managers, and clients I've shipped with — paraphrased verbatim from LinkedIn and Upwork."
          />
        </section>

        {/* ───────────── TOPMATE ───────────── */}
        <section className="relative section-y-sm border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4 space-y-4 md:sticky md:top-24 self-start">
                <h2 className="eyebrow">Mentorship</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Not a project? <span className="italic">Book a call.</span>
                </h3>
                <p className="text-base text-ink-600 leading-relaxed text-pretty">
                  For shorter, individual conversations — career guidance, mock interviews,
                  architecture sanity-checks — I use Topmate. Pick a slot, pay, show up.
                </p>
                <a
                  href="https://topmate.io/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackCta('cta_topmate', 'work_with_me_mentorship')}
                  className="group inline-flex items-center gap-2 mt-2 text-sm font-medium text-ink-900"
                >
                  <span className="link-underline">All offerings on Topmate</span>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-500 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="md:col-span-8">
                <ul className="divide-y divide-ink-100 border-y border-ink-100">
                  {topmateOfferings.map((t) => (
                    <li key={t.name}>
                      <a
                        href="https://topmate.io/ethirajsrinivasan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-5"
                      >
                        <div>
                          <p className="font-display text-lg md:text-xl text-ink-900 group-hover:text-accent-700 transition-colors duration-300">
                            {t.name}
                          </p>
                          <p className="mt-1 text-sm text-ink-500">{t.detail}</p>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section className="relative section-y bg-paper-warm border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4 space-y-4 md:sticky md:top-24 self-start">
                <h2 className="eyebrow">FAQ</h2>
                <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Common <span className="italic">questions.</span>
                </h3>
              </div>

              <div className="md:col-span-8 divide-y divide-ink-100 border-y border-ink-100">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-6">
                    <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                      <span className="font-display text-xl md:text-2xl leading-snug text-ink-900 text-balance">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink-200 text-ink-700 transition-all duration-300 group-open:rotate-45 group-open:bg-ink-900 group-open:text-paper group-open:border-ink-900"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-base text-ink-700 leading-relaxed text-pretty pr-12">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── FINAL CTA ───────────── */}
        <section className="relative section-y border-t border-ink-100 overflow-hidden">
          <div
            className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none"
            aria-hidden="true"
          />
          <div className="container-wide relative">
            <motion.div {...fadeUp} className="max-w-4xl">
              <h2 className="eyebrow mb-6">Start a conversation</h2>
              <p className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance mb-10">
                A short note is enough. <span className="italic">Tell me what you&apos;re building.</span>
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:ethirajsrinivasan@gmail.com?subject=Project%20inquiry&body=Hi%20Ethiraj%2C%0A%0AAbout%20us%3A%20%0AThe%20problem%3A%20%0ARough%20timeline%3A%20%0A"
                  onClick={trackCta('cta_email', 'work_with_me_final_cta')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  <Mail size={15} />
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
                  onClick={trackCta('cta_topmate', 'work_with_me_final_cta')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} />
                  Book on Topmate
                </a>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  <span className="link-underline">More about me</span>
                  <ArrowRight
                    size={16}
                    className="text-ink-400 transition-transform duration-500 ease-smooth group-hover:translate-x-1 group-hover:text-ink-900"
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
