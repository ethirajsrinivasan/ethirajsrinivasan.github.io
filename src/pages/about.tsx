import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SEO from '@/components/SEO'
import { trackCta } from '@/lib/analytics'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  MapPin,
  ArrowUpRight,
  BookOpen,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
  Award,
  Mic,
  GraduationCap,
} from 'lucide-react'

type Experience = {
  period: string
  role: string
  company: string
  location: string
  stack: string[]
  highlights: string[]
}

const experience: Experience[] = [
  {
    period: 'Mar 2026 — May 2026',
    role: 'Entrepreneur in Residence',
    company: 'Antler',
    location: 'Singapore',
    stack: ['Founder', 'Venture'],
    highlights: [
      'Completed the Entrepreneur in Residence program at the world\u2019s day-zero investor — shaping ventures from first principles.',
    ],
  },
  {
    period: 'Nov 2025 — Present',
    role: 'Co-Founder & CTO',
    company: 'InfiniTraq (Griffin AI Tech)',
    location: 'Chennai, India',
    stack: ['Edge AI', 'NVIDIA Jetson', 'Computer Vision', 'Radar', 'Python', 'TypeScript', 'React Native'],
    highlights: [
      'Co-founded Griffin AI Tech and lead product engineering for InfiniTraq — a 24/7 AI guardian for senior living that monitors falls, inactivity, and daily activities using non-visual sensors plus Edge AI on existing CCTV.',
      'Designed a two-product system: InfiniPulse (privacy-first radar sensor for bedrooms and bathrooms — zero video, zero images) and InfiniHub (NVIDIA-powered Edge module that plugs into existing CCTV).',
      'Architecting on-prem processing, sub-5-second alerting, and a family / facility dashboard for caregivers.',
    ],
  },
  {
    period: 'Aug 2025 — Present',
    role: 'Consultant, Head of Data Engineering',
    company: 'Zgrow Solutions',
    location: 'Chennai, India',
    stack: ['Spark', 'AWS EMR', 'S3', 'Athena'],
    highlights: [
      'Lead Data Engineering, mentoring a high-performing team and implementing governance, best practices, and process optimizations to deliver scalable, reliable, and high-quality data platforms.',
      'Architected an end-to-end Spark-based ML pipeline on AWS EMR for logistics anomaly and weight prediction — integrated a distributed ML model and automated feature engineering, achieving 99.9% uptime.',
    ],
  },
  {
    period: 'Jan 2023 — Feb 2025',
    role: 'Expert Engineer',
    company: 'Shopee',
    location: 'Singapore',
    stack: ['Spark', 'Hadoop', 'Hudi', 'Hive', 'Kafka', 'HBase', 'Python', 'Redis', 'Docker', 'Spring Boot', 'Rails'],
    highlights: [
      'Led the batch ingestion team managing 23k MySQL\u2192Hive, 6k Hive\u2192Hive, and 2k Hive\u2194HBase pipelines at daily and hourly frequency on a 14 PB data lake — 99.95% job success across 31k pipelines.',
      'Held 80% memory utilization processing 1,059,221 GB/hour and 245,414 vCore/hour, with 97% of jobs completing within 30 minutes.',
      'Saved ~94,325 GB/hour, 13,487 vCore/hour, and 500 TB storage by optimizing cross-IDC Hive\u2192Hive pipelines.',
      'Upgraded the ingestion platform to Spark 3 — 9% reduction in processing time and 14% reduction in resource usage.',
      'Built and maintained Core Engine, AutoAdaptation Framework, Operations Platform, Data Quality Module, Configuration Service, and Notification Service.',
    ],
  },
  {
    period: 'Jun 2020 — Jan 2023',
    role: 'Senior Engineer',
    company: 'Shopee',
    location: 'Singapore',
    stack: ['Spark', 'Hudi', 'Kafka', 'Spring Boot', 'Python'],
    highlights: [
      'Designed metrics for job performance and resource utilization, and managed ingestion pipelines across MySQL, CSV, Kafka sources and HDFS, Hive, Hudi, Kafka sinks using Spark, DeltaStreamer, Spring Boot, and Maxwell.',
    ],
  },
  {
    period: 'May 2019 — May 2020',
    role: 'Data Engineer',
    company: 'Lomotif',
    location: 'Singapore',
    stack: ['Spark', 'Kinesis', 'Lambda', 'EMR', 'Athena', 'QuickSight', 'S3', 'Python', 'Redis', 'Elasticsearch', 'Postgres', 'Flask'],
    highlights: [
      'Designed a scalable data infrastructure (data lake on S3 + Kinesis + Lambda + EMR/Spark) and an automated recommendation engine to boost feed and follower engagement.',
      'Built PySpark jobs on EMR for diverse business use cases; developed video-ranking metrics and graph analysis to surface communities and influencers.',
      'Created interactive QuickSight dashboards on top of Athena, giving stakeholders real-time, actionable insight.',
    ],
  },
  {
    period: 'May 2018 — Jan 2019',
    role: 'Big Data & Analytics Engineer',
    company: 'Knorex',
    location: 'Sunnyvale, CA',
    stack: ['Spark', 'Kinesis', 'Lambda', 'S3', 'Scala', 'Vert.x'],
    highlights: [
      'Migrated an ad-events tracker to Vert.x 3, achieving 50K QPS with a Kinesis + Lambda architecture; built a knowledge graph for customer segmentation.',
      'Created a reporting tool with Spark (Scala) for attributions and designed QuickSight dashboards via Athena for visualization and advanced metrics.',
    ],
  },
  {
    period: 'Dec 2017 — Mar 2018',
    role: 'Computer Vision Research Scientist Assistant',
    company: 'Trakomatic',
    location: 'Singapore',
    stack: ['Computer Vision', 'Python', 'Facial Recognition'],
    highlights: [
      'Built data management and annotation features for a smart digital signage prototype with facial-recognition capabilities.',
    ],
  },
  {
    period: 'Aug 2015 — Dec 2016',
    role: 'Senior Software Engineer',
    company: 'Pramati Technologies',
    location: 'Hyderabad, India',
    stack: ['Ruby on Rails', 'Memcached', 'Redis', 'Solr', 'Postgres'],
    highlights: [
      'Developed features for an Intellectual Property portal with robust role-based access and content workflow; followed TDD and code-review discipline.',
      'Organized weekly Open Source meetups to foster community engagement and collaboration.',
    ],
  },
  {
    period: 'Jan 2014 — Jul 2015',
    role: 'Assistant System Engineer',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    stack: ['Ruby on Rails', 'Memcached', 'Redis', 'Solr', 'Postgres'],
    highlights: [
      'Built core modules for a Tata-group social network platform, led a 2-person team, performed peer reviews, and handled various Tata-group clients.',
    ],
  },
]

const education = [
  {
    year: '2018',
    degree: 'M.Tech, Software Engineering',
    school: 'National University of Singapore',
    detail: 'CGPA 4.36 / 5',
  },
  {
    year: '2013',
    degree: 'B.E, Electronics & Communication',
    school: 'Anna University, India',
    detail: 'CGPA 8.56 / 10',
  },
]

const awards = [
  { title: 'Value Star Award', org: 'Shopee, Singapore' },
  { title: 'Winner — Hackathon', org: 'DNA Capitals, Singapore' },
  { title: 'Star of the Learners group · On-the-Spot Award', org: 'Tata Consultancy Services' },
]

const talks = [
  {
    title: 'Jury, HackElite ’25',
    org: 'SRM Institute of Science and Technology',
  },
  {
    title: 'Guest of Honor, ICCCPS 2020',
    org: 'International Conference on Computer Communication & Power Systems',
  },
  {
    title: 'Guest of Honor — Outcome Based Industry 4.0',
    org: 'Sri Venkateswaraa College of Technology',
  },
  {
    title: 'Resource Person — Faculty Development Program on AI for Robotics',
    org: 'AICTE ATAL Academy, Sai Ram Engineering College',
  },
]

const gadgets = [
  { name: 'MacBook Pro M2', link: 'https://amzn.to/3Mo79sP', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B3B5BWCT&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
  { name: 'iPad Pro', link: 'https://amzn.to/41bpqxL', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BJLFBYV1&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
  { name: 'iPhone 12', link: 'https://amzn.to/3nRxZzs', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08L5VJYV7&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
  { name: 'GoPro Hero 11', link: 'https://amzn.to/3GpmAwS', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BVFKWNRK&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
  { name: 'Kindle', link: 'https://amzn.to/3Kg7aMU', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N3RQZ51&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
  { name: 'Garmin Hybrid Watch', link: 'https://amzn.to/3UfuJK4', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07VVLQPZL&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
]

const books = [
  { name: 'Peak: Secrets from the New Science of Expertise', link: 'https://amzn.to/3nV4pck' },
  { name: 'How to Become a Straight-A Student', link: 'https://amzn.to/3ZP3CGX' },
  { name: 'The Power of Your Subconscious Mind', link: 'https://amzn.to/3zDSbHx' },
  { name: 'Metaprogramming Ruby 2', link: 'https://amzn.to/3UkWgd9' },
  { name: 'Data Driven', link: 'https://amzn.to/43ewJq1' },
  { name: 'Warren Buffett: The Business and Life Lessons', link: 'https://amzn.to/3nVa2Y5' },
]

const socials = [
  { icon: BookOpen, platform: 'Medium', username: '@ethi', link: 'https://medium.com/@ethi' },
  { icon: Youtube, platform: 'YouTube', username: 'ethirajsrinivasan', link: 'https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1' },
  { icon: Instagram, platform: 'Instagram', username: 'ethirajchandru', link: 'https://www.instagram.com/ethirajchandru/' },
  { icon: Linkedin, platform: 'LinkedIn', username: 'ethirajsrinivasan', link: 'https://www.linkedin.com/in/ethirajsrinivasan' },
  { icon: Github, platform: 'GitHub', username: 'ethirajsrinivasan', link: 'https://github.com/ethirajsrinivasan/' },
  { icon: Twitter, platform: 'X / Twitter', username: 'iamethi', link: 'https://twitter.com/iamethi' },
  { icon: MessageCircle, platform: 'Reddit', username: 'ethirajsrinivasan', link: 'https://www.reddit.com/user/ethirajsrinivasan' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Software engineer and data leader with a decade of experience — from Rails at TCS and Pramati to big data at Shopee, and now Co-Founder & CTO at InfiniTraq. Open for select freelance and advisory engagements."
        path="/about/"
        image="/assets/my_photo.jpeg"
        imageAlt="Ethiraj Srinivasan"
        type="profile"
      />

      <Navbar />

      <main id="main" className="min-h-screen overflow-x-hidden">
        {/* ───────────── Hero ───────────── */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none" aria-hidden="true" />
          <div className="container-wide relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-12 gap-12 items-end"
            >
              <div className="md:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="eyebrow">About</h2>
                  <Link
                    href="/work-with-me"
                    onClick={trackCta('cta_work_with_me', 'about_status_pill')}
                    className="status-pill group hover:border-ink-400 transition-colors"
                  >
                    <span className="status-dot" />
                    <span>Open for select engagements</span>
                    <ArrowUpRight
                      size={12}
                      className="text-ink-400 transition-all duration-300 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
                <h1 className="h-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance">
                  Hey, <span className="italic">reader.</span>
                </h1>
                <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl text-pretty">
                  I'm Ethiraj — a software engineer by training, data leader by craft, and founder
                  today. I'm currently
                  Co-Founder &amp; CTO of{' '}
                  <a
                    href="https://griffinai.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink-900 font-medium"
                  >
                    InfiniTraq
                  </a>{' '}
                  (Griffin AI Tech), and Consultant, Head of Data Engineering at{' '}
                  <a
                    href="https://zgrow.solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink-900 font-medium"
                  >
                    Zgrow
                  </a>
                  . Based in{' '}
                  <a
                    href="https://maps.app.goo.gl/JKqj1k4mFjCcfBVz5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 link-underline text-ink-900 font-medium"
                  >
                    Chennai <MapPin size={14} />
                  </a>
                  , after five years at Shopee, Singapore.
                </p>
                <p className="text-base md:text-lg text-ink-600 leading-relaxed max-w-2xl text-pretty">
                  A decade across software engineering, data platforms, and open-source Ruby gems
                  — now building privacy-first senior care with InfiniTraq. Outside work, I'm an amateur
                  cook, avid traveler, and bibliophile.
                </p>
              </div>

              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-ink-100 shadow-elev">
                  <Image
                    src="/assets/my_photo.jpeg"
                    alt="Ethiraj Srinivasan"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/80">
                      Chennai · Now
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── Experience timeline ───────────── */}
        <section className="relative section-y border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 mb-14">
              <div className="md:col-span-4 md:sticky md:top-24 space-y-4 self-start">
                <h2 className="eyebrow">Experience</h2>
                <h3 className="h-display text-3xl md:text-4xl text-balance">
                  A decade of <span className="italic">building</span> software and data systems.
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed max-w-sm">
                  From software engineering at TCS and Pramati (Rails) in India, through analytics
                  and data roles in Singapore, to founding InfiniTraq and consulting at Zgrow in
                  Chennai.
                </p>
              </div>

              <ol className="md:col-span-8 relative border-l border-ink-200/70 pl-7 space-y-12">
                {experience.map((job, i) => (
                  <motion.li
                    key={`${job.company}-${job.period}`}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                    className="relative"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[33px] top-1.5 inline-flex h-3 w-3 rounded-full border-2 border-paper bg-ink-900 ring-2 ring-ink-200"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                        {job.period}
                      </p>
                      <p className="text-xs text-ink-400">{job.location}</p>
                    </div>
                    <h4
                      className="font-display text-2xl md:text-3xl leading-tight text-ink-900 text-balance"
                      dangerouslySetInnerHTML={{ __html: job.role }}
                    />
                    <p className="text-base font-medium text-accent-700 mt-1 mb-4">
                      {job.company}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {job.stack.map((s) => (
                        <span key={s} className="badge-quiet">
                          {s}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2.5 text-[15px] text-ink-700 leading-relaxed list-disc pl-5 marker:text-ink-300">
                      {job.highlights.map((h, idx) => (
                        <li key={idx} className="text-pretty">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        {/* ───────────── Education + Awards + Talks ───────────── */}
        <section className="relative section-y border-t border-ink-100 bg-paper-warm">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div {...fadeUp} className="bento-card">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ink-900 text-paper mb-5">
                    <GraduationCap size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="eyebrow mb-3">Education</h3>
                  <h4 className="h-display text-2xl mb-6 text-balance">
                    From <span className="italic">Anna University</span> to{' '}
                    <span className="italic">NUS.</span>
                  </h4>
                  <ul className="space-y-5">
                    {education.map((ed) => (
                      <li key={ed.school}>
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 mb-1">
                          {ed.year}
                        </p>
                        <p className="font-display text-lg leading-snug text-ink-900">{ed.degree}</p>
                        <p className="text-sm text-ink-600">{ed.school}</p>
                        <p className="text-xs text-ink-500 mt-0.5">{ed.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="bento-card">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ink-900 text-paper mb-5">
                    <Award size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="eyebrow mb-3">Awards</h3>
                  <h4 className="h-display text-2xl mb-6 text-balance">
                    Recognition for <span className="italic">delivery.</span>
                  </h4>
                  <ul className="space-y-5">
                    {awards.map((a) => (
                      <li key={a.title}>
                        <p className="font-display text-lg leading-snug text-ink-900 text-balance">
                          {a.title}
                        </p>
                        <p className="text-sm text-ink-600 mt-0.5">{a.org}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.16 }} className="bento-card">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ink-900 text-paper mb-5">
                    <Mic size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="eyebrow mb-3">Talks &amp; Engagements</h3>
                  <h4 className="h-display text-2xl mb-6 text-balance">
                    Sharing <span className="italic">what I learn.</span>
                  </h4>
                  <ul className="space-y-5">
                    {talks.map((t) => (
                      <li key={t.title}>
                        <p className="font-display text-base leading-snug text-ink-900 text-balance">
                          {t.title}
                        </p>
                        <p className="text-sm text-ink-600 mt-0.5">{t.org}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── Social ───────────── */}
        <section className="relative section-y-sm border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4 space-y-3">
                <h2 className="eyebrow">Social</h2>
                <h3 className="h-display text-3xl md:text-4xl text-balance">
                  Find me <span className="italic">around the web.</span>
                </h3>
              </div>

              <div className="md:col-span-8">
                <ul className="grid sm:grid-cols-2 gap-px bg-ink-100 border border-ink-100 rounded-2xl overflow-hidden">
                  {socials.map((s) => (
                    <li key={s.platform}>
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 bg-paper px-5 py-4 hover:bg-paper-warm transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-ink-100 text-ink-700 group-hover:bg-ink-900 group-hover:text-paper transition-colors">
                            <s.icon size={15} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-ink-900">{s.platform}</p>
                            <p className="text-xs text-ink-500 truncate font-mono">{s.username}</p>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={14}
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

        {/* ───────────── Gadgets ───────────── */}
        <section className="relative section-y-sm border-t border-ink-100 bg-paper-warm">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 mb-12">
              <div className="md:col-span-4 space-y-3">
                <h2 className="eyebrow">Daily Carry</h2>
                <h3 className="h-display text-3xl md:text-4xl text-balance">
                  Gadgets I <span className="italic">use</span>.
                </h3>
              </div>
              <p className="md:col-span-8 text-sm text-ink-500 self-end max-w-lg">
                Tools that earn a place in my bag. Affiliate links — buying through them helps
                support this site.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {gadgets.map((g, i) => (
                <motion.a
                  key={g.name}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                  href={g.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square bg-paper rounded-2xl border border-ink-100 p-4 flex flex-col items-center justify-between transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-ink-200 hover:shadow-elev"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img
                      src={g.image}
                      alt={g.name}
                      className="max-h-24 w-auto object-contain transition-transform duration-500 ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs font-medium text-ink-700 text-center mt-2 group-hover:text-ink-900 transition-colors">
                    {g.name}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Books ───────────── */}
        <section className="relative section-y-sm border-t border-ink-100">
          <div className="container-wide">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4 space-y-3">
                <h2 className="eyebrow">Bookshelf</h2>
                <h3 className="h-display text-3xl md:text-4xl text-balance">
                  Books that <span className="italic">stuck</span> with me.
                </h3>
              </div>

              <div className="md:col-span-8">
                <ul className="divide-y divide-ink-100 border-y border-ink-100">
                  {books.map((book) => (
                    <li key={book.name}>
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-4 text-ink-700 hover:text-ink-900 transition-colors"
                      >
                        <span className="font-display text-lg md:text-xl leading-snug text-balance">
                          {book.name}
                        </span>
                        <ArrowUpRight
                          size={16}
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

        {/* ───────────── CTA ───────────── */}
        <section className="relative section-y border-t border-ink-100 bg-paper-warm overflow-hidden">
          <div className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none" aria-hidden="true" />
          <div className="container-wide relative">
            <motion.div {...fadeUp} className="max-w-4xl">
              <h2 className="eyebrow mb-6">Let's connect</h2>
              <p className="h-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] text-balance mb-10">
                Have something <span className="italic">interesting</span> to share?
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:ethirajsrinivasan@gmail.com"
                  onClick={trackCta('cta_email', 'about_cta')}
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
                  onClick={trackCta('cta_topmate', 'about_cta')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} />
                  Book on Topmate
                  <ArrowUpRight
                    size={16}
                    className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <Link
                  href="/work-with-me"
                  onClick={trackCta('cta_work_with_me', 'about_cta')}
                  className="group inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  <span className="link-underline">Work with me</span>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
