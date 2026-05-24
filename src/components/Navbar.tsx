import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/blogs', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/resume.pdf', label: 'Resume', external: true },
]

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return router.pathname === '/'
    if (href === '/blogs') return router.pathname.startsWith('/blogs')
    if (href === '/about') return router.pathname === '/about'
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-xl border-b border-ink-100 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="Ethiraj Srinivasan — Home">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-ink-900 text-paper font-display text-base font-medium tracking-tightest shadow-soft transition-transform duration-500 ease-smooth group-hover:rotate-6"
            >
              ES
            </span>
            <span className="hidden sm:block font-display text-[15px] leading-none tracking-tight text-ink-900">
              Ethiraj Srinivasan
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href)
              const linkClass = `relative inline-flex items-center px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${
                active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
              }`
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <span className="link-underline">{item.label}</span>
                  </a>
                )
              }
              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-lg bg-ink-100"
                    />
                  )}
                  <span className="link-underline">{item.label}</span>
                </Link>
              )
            })}

            <a
              href="mailto:ethirajsrinivasan@gmail.com"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-900 text-paper text-[13px] font-medium transition-all duration-300 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-px"
            >
              Get in touch
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-ink-100 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-1 border-t border-ink-100 mt-1">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2.5 text-sm text-ink-700 hover:bg-ink-100 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm text-ink-700 hover:bg-ink-100 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="mailto:ethirajsrinivasan@gmail.com"
              className="block mt-2 px-3 py-2.5 text-sm text-paper bg-ink-900 rounded-lg text-center font-medium"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
