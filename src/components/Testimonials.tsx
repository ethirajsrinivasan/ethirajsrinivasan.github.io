import { motion } from 'framer-motion'
import { Quote, Linkedin, ExternalLink } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Testimonial } from '@/data/testimonials'

type Variant = 'grid' | 'featured'

type TestimonialsProps = {
  items: Testimonial[]
  variant?: Variant
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const sourceLabel: Record<Testimonial['source'], string> = {
  linkedin: 'via LinkedIn',
  upwork: 'via Upwork',
}

function TestimonialCard({ t, variant }: { t: Testimonial; variant: Variant }) {
  const featured = variant === 'featured'

  return (
    <figure className="relative h-full flex flex-col rounded-3xl border border-ink-100 bg-paper p-7 sm:p-8 transition-all duration-300 ease-smooth hover:border-ink-200 hover:shadow-soft hover:-translate-y-0.5">
      <Quote
        size={28}
        strokeWidth={1.25}
        aria-hidden="true"
        className="text-ink-200 mb-5 shrink-0"
      />
      <blockquote
        className={`font-display font-light text-ink-900 text-pretty leading-[1.35] ${
          featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
        }`}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex-grow" aria-hidden="true" />
      <figcaption className="mt-7 pt-5 border-t border-ink-100 flex flex-col gap-3">
        <div className="min-w-0 space-y-1">
          {t.authorProfileUrl ? (
            <a
              href={t.authorProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-display text-lg text-ink-900 hover:text-accent-700 transition-colors"
            >
              {t.author}
              <ExternalLink
                size={12}
                className="text-ink-400 transition-colors group-hover:text-accent-700"
                aria-hidden="true"
              />
            </a>
          ) : (
            <p className="font-display text-lg text-ink-900">{t.author}</p>
          )}
          <p className="text-sm text-ink-600 leading-snug">
            {t.authorTitle} &middot; {t.authorCompany}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
          {t.source === 'linkedin' && (
            <Linkedin size={11} strokeWidth={1.75} aria-hidden="true" />
          )}
          {sourceLabel[t.source]}
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials({
  items,
  variant = 'grid',
  eyebrow = 'In their words',
  title,
  description,
}: TestimonialsProps) {
  if (items.length === 0) return null

  const featured = variant === 'featured'
  const gridCols =
    !featured && items.length === 4
      ? 'md:grid-cols-2'
      : featured
        ? 'md:grid-cols-2'
        : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className="container-wide">
      <motion.div
        {...fadeUp}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
      >
        <div className="max-w-2xl space-y-4">
          <h2 className="eyebrow">{eyebrow}</h2>
          {title && (
            <h3 className="h-display text-4xl md:text-5xl leading-[1.05] text-balance">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-base text-ink-600 leading-relaxed text-pretty">
              {description}
            </p>
          )}
        </div>
      </motion.div>

      <div className={`grid auto-rows-fr gap-5 md:gap-6 ${gridCols}`}>
        {items.map((t, idx) => (
          <motion.div
            key={t.id}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
            className="h-full"
          >
            <TestimonialCard t={t} variant={variant} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
