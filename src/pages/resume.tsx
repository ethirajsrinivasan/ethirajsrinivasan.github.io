/**
 * /resume — HTML resume that mirrors the original PDF design
 * (two-column sidebar + main, classic CV format).
 *
 * The data here is intentionally self-contained and verbatim from the
 * original PDF so the page can serve as the single canonical source.
 * On-screen it uses the site's editorial palette + fonts; in print it
 * collapses to a clean black-and-white CV with no nav/footer.
 */
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { trackCta } from '@/lib/analytics'
import { Mail, Phone, Globe, Github, Linkedin, Download } from 'lucide-react'

// ───────────────────────── data ─────────────────────────

const objective =
  'Aspire to lead data-driven innovation by architecting scalable platforms, fostering engineering excellence, and aligning technology strategy with organizational growth and long-term vision.'

const summary: string[] = [
  'Strategic Data Engineering Leader with a decade of experience driving enterprise-scale data platforms, architecture, and analytics modernization across diverse industries. Possesses deep expertise in data pipeline design, distributed processing, ETL, and real-time and batch frameworks, with a proven ability to deliver scalable, high-performance, and reliable data ecosystems.',
  'Leads and mentors cross-functional teams in building and managing data ingestion, ETL, and analytics platforms, ensuring strong data governance, data quality, observability, and operational excellence. Skilled in designing and maintaining data lakes, data warehouses, ML-ready datasets, and real-time analytics pipelines to support enterprise decision-making.',
  'Expert in implementing data quality frameworks, monitoring systems, and cost-optimized solutions to improve reliability, reduce latency, and enhance efficiency. Proficient in Spark, Hadoop, Kafka, Hudi, Hive, HBase, AWS (EMR, S3, Athena), Python, Spring Boot, Redis, and other modern data technologies. Recognized for combining technical depth with strategic vision to drive data-driven innovation and organizational growth.',
]

const competencies: string[] = [
  'Strategic Data Platform Planning',
  'Big Data Analytics & Processing',
  'Data Pipeline & ETL Architecture',
  'Real-Time & Batch Processing',
  'Data Quality & Governance',
  'Cloud Data Solutions',
  'Performance Optimization & Resource Management',
  'Analytics & Reporting',
  'Team Leadership & Mentoring',
  'Cross-Functional Collaboration',
  'Ingestion Application Development',
  'Technical Innovation & Strategy',
]

const awards: string[] = [
  'Shopee, Singapore — Value Star Award',
  'DNA Capitals, Singapore — Winner, Hackathon',
  'Tata Consultancy Services — Star of the Learners Group · On-the-Spot Award',
]

const education = [
  {
    year: '2018',
    school: 'National University of Singapore, Singapore',
    degree: 'M.Tech, Software Engineering',
    grade: 'CGPA 4.36 / 5',
  },
  {
    year: '2013',
    school: 'Anna University, India',
    degree: 'B.E, Electronics and Communication',
    grade: 'CGPA 8.56 / 10',
  },
]

const talks: string[] = [
  "Jury — HackElite '25, SRM Institute of Science and Technology",
  'Guest of Honor — International Conference on Computer Communication & Power Systems, ICCCPS 2020',
  'Guest of Honor — Outcome Based Industry 4.0 at Sri Venkateswaraa College of Technology',
  'Resource Person — Faculty Development Program on Artificial Intelligence for Robotics (AICTE Training and Learning (ATAL) Academy) at Sai Ram Engineering College',
]

const openSource: string[] = [
  'Ruby Gems — Collaborator: Sunspot (Apache Solr) gem',
  'Ruby Gems — Owner: collection2csv, devise-foundation-views, rails-fort, rails-protip',
]

const personal = [
  { label: 'Date of Birth', value: '3rd October 1991' },
  { label: 'Languages', value: 'English, Telugu, Tamil' },
  { label: 'Address', value: 'Chennai, India' },
]

type ExperienceBlock = {
  /** Optional sub-heading (only Shopee uses these). */
  heading?: string
  bullets: string[]
}

type Experience = {
  period: string
  company: string
  location: string
  role: string
  stack: string[]
  blocks: ExperienceBlock[]
}

const experience: Experience[] = [
  {
    period: "Aug '25 — Present",
    company: 'Zgrow Solutions',
    location: 'Chennai, India',
    role: 'Head of Data Engineering',
    stack: ['Spark', 'S3', 'Athena', 'EMR'],
    blocks: [
      {
        bullets: [
          'Led Data Engineering, mentoring a high-performing team and implementing governance, best practices, and process optimizations to deliver scalable, reliable, and high-quality data platforms.',
          'Architected an end-to-end Spark-based ML pipeline on AWS EMR for logistics anomaly and weight prediction, integrating a distributed ML model and automated feature engineering, achieving 99.9% uptime.',
        ],
      },
    ],
  },
  {
    period: "Jun '20 — Feb '25",
    company: 'Shopee',
    location: 'Singapore',
    role: 'Expert Data Engineer',
    stack: ['Spark', 'Hadoop', 'Hudi', 'Hive', 'Kafka', 'HBase', 'Python', 'Redis', 'Docker', 'Spring Boot', 'Ruby on Rails'],
    blocks: [
      {
        heading: 'Batch Ingestion Team Leadership',
        bullets: [
          'Led the batch ingestion team managing 23k MySQL-to-Hive pipelines, 6k Hive-to-Hive pipelines, and 2k Hive-to-HBase and HBase-to-Hive pipelines with daily and hourly frequencies.',
          'Ensured seamless operations on a 14 PB data lake, achieving an outstanding 99.95% job success rate for 31k ingestion pipelines.',
        ],
      },
      {
        heading: 'Performance Optimization & Resource Utilization',
        bullets: [
          'Maintained 80% memory utilization, processing 1,059,221 GB/hour and 245,414 vCore/hour, with 97% of jobs completing within 30 minutes.',
          'Optimized cross-IDC Hive-to-Hive pipelines, saving approximately 94,325 GB/hour, 13,487 vCore/hour, and 500 TB of storage.',
        ],
      },
      {
        heading: 'Platform Upgrade & Cost Optimization',
        bullets: [
          'Upgraded the ingestion platform to Spark 3, resulting in a 9% reduction in processing time and a 14% reduction in resource usage.',
        ],
      },
      {
        heading: 'Pipeline Development & Monitoring',
        bullets: [
          'Designed and monitored batch, real-time, and cross-country ingestion pipelines, including hourly Hive-to-Hive jobs with filters, incremental dumps, and Data Quality Checks (DQC).',
        ],
      },
      {
        heading: 'Data Pipeline & Metrics Management',
        bullets: [
          'Designed metrics for job performance and resource utilization, and managed ingestion pipelines handling diverse sources (MySQL, CSV, Kafka) and sinks (HDFS, Hive, Hudi, Kafka) using Spark, DeltaStreamer, Spring Boot, and Maxwell.',
        ],
      },
      {
        heading: 'Ingestion Applications Development',
        bullets: [
          'Built and maintained key applications: Core Engine (job automation), AutoAdaptation Framework (dynamic optimization), Operations Platform, Data Quality Module, Configuration Service, and Notification Service.',
        ],
      },
    ],
  },
  {
    period: "Feb '19 — May '20",
    company: 'Lomotif',
    location: 'Singapore',
    role: 'Data Engineer',
    stack: ['Spark', 'Kinesis', 'Lambda', 'EMR', 'Athena', 'QuickSight', 'S3', 'Python', 'Redis', 'Elasticsearch', 'Postgres', 'Flask'],
    blocks: [
      {
        bullets: [
          'Data Infrastructure Development — Led the design of a scalable data infrastructure platform, including a data lake using S3, Kinesis, Lambda, and EMR (Spark), and implemented an automated recommendation engine to enhance feeds and follower engagement.',
          'Big Data Processing & Analytics — Built and monitored PySpark jobs on EMR for diverse business use cases, developed advanced metrics for ranking videos, and conducted graph analysis to identify communities and influencers.',
          'Real-Time Visualization — Created interactive QuickSight dashboards with Athena as the query engine, providing actionable insights for stakeholders and enabling data-driven decisions.',
        ],
      },
    ],
  },
  {
    period: "May '18 — Jan '19",
    company: 'Knorex',
    location: 'Singapore',
    role: 'Big Data and Analytics Engineer',
    stack: ['Spark', 'Kinesis', 'Lambda', 'S3', 'Scala', 'Vert.x'],
    blocks: [
      {
        bullets: [
          'Migrated an ad events tracker to Vert.x 3, achieving 50K QPS with optimized throughput using Kinesis and Lambda architecture; built a data lake on S3 integrated with real-time sources, developed PySpark jobs on EMR for analytics.',
          'Created a reporting tool with Spark (Scala) for attributions, and designed QuickSight dashboards using Athena to deliver actionable insights through visualization and advanced metrics.',
        ],
      },
    ],
  },
  {
    period: "Aug '15 — Dec '16",
    company: 'Pramati Technologies',
    location: 'Hyderabad, India',
    role: 'Senior Software Engineer',
    stack: ['Ruby on Rails', 'Memcached', 'Redis', 'Solr', 'Postgres'],
    blocks: [
      {
        bullets: [
          'Developed a web application for managing patents with a robust role-based content management system for content manipulation, authorization, and access; additionally, organized and facilitated Open Source meetups to foster community engagement and collaboration.',
        ],
      },
    ],
  },
  {
    period: "Jan '14 — Jul '15",
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    role: 'Assistant System Engineer',
    stack: ['Ruby on Rails', 'Memcached', 'Redis', 'Solr', 'Postgres'],
    blocks: [
      {
        bullets: [
          'Headed a team of two members to develop a collaborative platform for sharing content, ideas, and processes across the Tata group of companies.',
        ],
      },
    ],
  },
]

// ───────────────────────── ui primitives ─────────────────────────

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-side-section">
      <h3 className="resume-side-title">{title}</h3>
      <div className="resume-side-body">{children}</div>
    </section>
  )
}

function MainSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-main-section">
      <h2 className="resume-main-title">{title}</h2>
      <div className="resume-main-body">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="resume-bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// ───────────────────────── page ─────────────────────────

export default function ResumePage() {
  return (
    <>
      <SEO
        title="Resume — Ethiraj Srinivasan"
        titleAsIs
        description="Resume of Ethiraj Srinivasan — Data Engineering Leader, Co-Founder & CTO. Decade of experience scaling data platforms across Shopee, Lomotif, Knorex, Pramati, and TCS."
        path="/resume/"
      />

      {/* Screen-only nav */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main id="main" className="bg-paper-warm min-h-screen pt-24 pb-20 print:pt-0 print:pb-0 print:bg-white">
        <div className="container-wide">
          <div className="mb-4 flex justify-end print:hidden">
            <a
              href="/resume.pdf"
              download="Ethiraj-Srinivasan-Resume.pdf"
              onClick={trackCta('cta_resume_download', 'resume_page')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-900 text-paper text-[13px] font-medium transition-all duration-300 hover:bg-ink-800 hover:shadow-elev hover:-translate-y-px"
            >
              <Download size={15} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        <article className="resume-paper">
          {/* Header */}
          <header className="resume-header">
            <div>
              <p className="resume-eyebrow">Curriculum Vitae</p>
              <h1 className="resume-name">Ethiraj Srinivasan</h1>
              <p className="resume-role">Data Engineering Leader · Co-Founder &amp; CTO</p>
            </div>
            <ul className="resume-contact">
              <li>
                <Mail size={11} className="resume-contact-icon" aria-hidden="true" />
                <a href="mailto:ethirajsrinivasan@gmail.com">ethirajsrinivasan@gmail.com</a>
              </li>
              <li>
                <Phone size={11} className="resume-contact-icon" aria-hidden="true" />
                <a href="tel:+919841153360">+91 98411 53360</a>
              </li>
              <li>
                <Globe size={11} className="resume-contact-icon" aria-hidden="true" />
                <a href="https://ethirajsrinivasan.com" target="_blank" rel="noopener noreferrer">
                  ethirajsrinivasan.com
                </a>
              </li>
              <li>
                <Linkedin size={11} className="resume-contact-icon" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/ethirajsrinivasan
                </a>
              </li>
              <li>
                <Github size={11} className="resume-contact-icon" aria-hidden="true" />
                <a
                  href="https://github.com/ethirajsrinivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ethirajsrinivasan
                </a>
              </li>
            </ul>
          </header>

          {/* Two-column body */}
          <div className="resume-grid">
            {/* SIDEBAR */}
            <aside className="resume-sidebar">
              <SidebarSection title="Job Objective">
                <p>{objective}</p>
              </SidebarSection>

              <SidebarSection title="Core Competencies">
                <BulletList items={competencies} />
              </SidebarSection>

              <SidebarSection title="Awards">
                <BulletList items={awards} />
              </SidebarSection>

              <SidebarSection title="Education">
                <ul className="resume-edu">
                  {education.map((e) => (
                    <li key={e.year}>
                      <span className="resume-edu-year">{e.year}</span>
                      <span className="resume-edu-school">{e.school}</span>
                      <span className="resume-edu-degree">{e.degree}</span>
                      <span className="resume-edu-grade">{e.grade}</span>
                    </li>
                  ))}
                </ul>
              </SidebarSection>

              <SidebarSection title="Talks & Engagements">
                <BulletList items={talks} />
              </SidebarSection>

              <SidebarSection title="Open Source Contributions">
                <BulletList items={openSource} />
              </SidebarSection>

              <SidebarSection title="Personal Details">
                <ul className="resume-personal">
                  {personal.map((p) => (
                    <li key={p.label}>
                      <span className="resume-personal-label">{p.label}</span>
                      <span className="resume-personal-value">{p.value}</span>
                    </li>
                  ))}
                </ul>
              </SidebarSection>
            </aside>

            {/* MAIN */}
            <div className="resume-main">
              <MainSection title="Profile Summary">
                <ul className="resume-summary">
                  {summary.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </MainSection>

              <MainSection title="Work Experience">
                <div className="resume-jobs">
                  {experience.map((job) => (
                    <article key={`${job.company}-${job.period}`} className="resume-job">
                      <header className="resume-job-head">
                        <div>
                          <h3 className="resume-job-company">{job.company}</h3>
                          <p className="resume-job-role">
                            {job.role}
                            <span className="resume-job-sep" aria-hidden="true">
                              ·
                            </span>
                            <span className="resume-job-location">{job.location}</span>
                          </p>
                        </div>
                        <span className="resume-job-period">{job.period}</span>
                      </header>

                      <p className="resume-job-stack">
                        <span className="resume-job-stack-label">Stack</span>
                        {job.stack.join(' · ')}
                      </p>

                      {job.blocks.map((block, bi) => (
                        <div key={bi} className="resume-job-block">
                          {block.heading && (
                            <h4 className="resume-job-block-heading">{block.heading}</h4>
                          )}
                          <BulletList items={block.bullets} />
                        </div>
                      ))}
                    </article>
                  ))}
                </div>
              </MainSection>
            </div>
          </div>
        </article>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  )
}
