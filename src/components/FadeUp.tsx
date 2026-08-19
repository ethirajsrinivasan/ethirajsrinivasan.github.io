import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type FadeUpProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in milliseconds */
  delay?: number
  as?: ElementType
}

export default function FadeUp({ children, className = '', delay = 0, as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-80px 0px', threshold: 0.01 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-smooth motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
