import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Home } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export default function Custom404() {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noindex
      />

      <Navbar />

      <main id="main" className="min-h-screen overflow-x-hidden">
        <section className="relative pt-32 md:pt-40 pb-24 md:pb-32">
          <div
            className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-grid-ink bg-grid-lg opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="container-wide relative">
            <motion.div {...fadeUp} className="max-w-3xl">
              <h2 className="eyebrow mb-6">Lost in the stacks</h2>

              <p
                className="font-display font-light tracking-tightest text-ink-900 leading-[0.92] text-[7rem] sm:text-[10rem] md:text-[14rem] mb-6"
                aria-hidden="true"
              >
                404
              </p>

              <h1 className="h-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 text-balance">
                This page <span className="italic">isn&apos;t here.</span>
              </h1>

              <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl text-pretty mb-10">
                The link you followed may be broken, the page may have moved, or it might never
                have existed. From here you can head home, browse the work, or keep reading.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-paper text-sm font-medium transition-all duration-500 ease-smooth hover:bg-ink-800 hover:shadow-elev hover:-translate-y-0.5"
                >
                  <Home size={15} />
                  Home
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  Projects
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 bg-paper text-ink-900 text-sm font-medium transition-all duration-500 ease-smooth hover:border-ink-400 hover:-translate-y-0.5"
                >
                  Writing
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') window.history.back()
                  }}
                  className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  <ArrowLeft
                    size={14}
                    className="text-ink-400 transition-transform duration-300 ease-smooth group-hover:-translate-x-0.5 group-hover:text-ink-900"
                  />
                  <span className="link-underline">Go back</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
