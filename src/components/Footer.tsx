import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram, Youtube, BookOpen, MessageCircle, ArrowUpRight } from 'lucide-react'
import { trackCta } from '@/lib/analytics'

const socialLinks = [
  { icon: Github, href: 'https://github.com/ethirajsrinivasan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ethirajsrinivasan', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://topmate.io/ethirajsrinivasan', label: 'Topmate' },
  { icon: BookOpen, href: 'https://medium.com/@ethi', label: 'Medium' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1', label: 'YouTube' },
  { icon: Instagram, href: 'https://www.instagram.com/ethirajchandru/', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/iamethi', label: 'X / Twitter' },
]

type SiteLink = { href: string; label: string; external?: boolean }
const siteLinks: SiteLink[] = [
  { href: '/#work', label: 'Projects' },
  { href: '/work-with-me', label: 'Work with me' },
  { href: '/blogs', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-ink-100 bg-paper-warm noise-overlay">
      <div className="container-wide py-16 md:py-20 relative z-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ink-900 text-paper font-display text-lg font-medium tracking-tightest"
              >
                ES
              </span>
              <span className="font-display text-lg leading-none tracking-tight text-ink-900">
                Ethiraj Srinivasan
              </span>
            </Link>
            <p className="max-w-md text-sm text-ink-600 leading-relaxed">
              Software engineer and data leader. Co-Founder &amp; CTO at{' '}
              <a
                href="https://griffinai.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink-900 font-medium"
              >
                InfiniTraq
              </a>
              , and Consultant, Head of Data Engineering at{' '}
              <span className="text-ink-900 font-medium">Zgrow Solutions, Chennai</span>.
            </p>
            <a
              href="mailto:ethirajsrinivasan@gmail.com"
              onClick={trackCta('cta_email', 'footer')}
              className="group inline-flex items-center gap-2 font-display text-2xl md:text-3xl tracking-tightest text-ink-900"
            >
              <span className="link-underline">ethirajsrinivasan@gmail.com</span>
              <ArrowUpRight
                size={20}
                className="text-ink-400 transition-all duration-500 ease-smooth group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow mb-5">Navigate</h3>
            <ul className="space-y-3">
              {siteLinks.map((link) => {
                const inner = (
                  <span className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-ink-900 transition-colors">
                    <span className="link-underline">{link.label}</span>
                    {link.external && <ArrowUpRight size={13} className="text-ink-400" />}
                  </span>
                )
                const onClick =
                  link.href === '/resume'
                    ? trackCta('cta_resume_download', 'footer')
                    : link.href === '/work-with-me'
                      ? trackCta('cta_work_with_me', 'footer')
                      : undefined
                return (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={link.href} onClick={onClick}>
                        {inner}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow mb-5">Elsewhere</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={
                      link.label === 'Topmate'
                        ? trackCta('cta_topmate', 'footer')
                        : undefined
                    }
                    className="group inline-flex items-center gap-2 text-sm text-ink-700 hover:text-ink-900 transition-colors"
                  >
                    <link.icon size={15} className="text-ink-500 group-hover:text-ink-900 transition-colors" />
                    <span className="link-underline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-500 font-mono">
            © {year} Ethiraj Srinivasan. Crafted with care.
          </p>
          <Link
            href="/work-with-me"
            onClick={trackCta('cta_work_with_me', 'footer_status_pill')}
            className="group text-xs text-ink-500 font-mono inline-flex items-center gap-2 hover:text-ink-900 transition-colors"
          >
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500">
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
            </span>
            <span className="link-underline">Open for select engagements</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
