/**
 * Lightweight wrapper around Google Analytics 4 `gtag('event', …)`.
 * No-ops if gtag isn't available (SSR, ad blockers, dev with NEXT_PUBLIC_GA_DISABLED).
 *
 * Keep the event surface SMALL: only track the events that matter for lead-gen.
 * Resist the temptation to track every link — long-tail events become noise.
 */

type GtagFn = (
  command: 'event' | 'config' | 'set' | 'consent',
  eventNameOrTarget: string,
  params?: Record<string, unknown>
) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

export type LeadEvent =
  | 'cta_email'
  | 'cta_topmate'
  | 'cta_work_with_me'
  | 'cta_resume_download'

export type EventParams = {
  /** Where on the page the click happened (e.g. 'hero', 'footer', 'about_cta'). */
  location?: string
  /** Outbound URL or mailto target, if applicable. */
  destination?: string
  /** Any additional metadata. Keep keys short and snake_case. */
  [key: string]: unknown
}

export function trackEvent(name: LeadEvent | string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return
  const gtag = window.gtag
  if (typeof gtag !== 'function') return
  try {
    gtag('event', name, params)
  } catch {
    // GA can throw if not yet initialized — fail silently.
  }
}

/**
 * Convenience builder for the most common CTA tracking.
 * Use as an inline `onClick` handler.
 */
export function trackCta(name: LeadEvent, location: string, destination?: string) {
  return () => trackEvent(name, { location, ...(destination ? { destination } : {}) })
}
