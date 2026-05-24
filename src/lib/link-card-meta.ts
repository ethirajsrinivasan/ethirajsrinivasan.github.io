export type LinkCardMeta = {
  title: string
  description: string
}

/** Extra copy for embed cards when alt text alone is not enough (live Medium previews). */
export const linkCardMeta: Record<string, LinkCardMeta> = {
  'medium.com/illumination/is-coffee-can-investing-your-cup-of-coffee-b38d4e14686c': {
    title:
      'Is Coffee Can Investing Your Cup of Coffee? | by Ethiraj Srinivasan | ILLUMINATION | Medium',
    description:
      'We often begin our day with a cup of coffee, giving us a much-needed boost and satisfaction. As such, coffee can investing applies the same patience to building wealth…',
  },
  'medium.com/illumination/looking-back-at-2022-38f95c52ba4a': {
    title:
      'Looking Back at 2022. My Review of 2022 Goals | by Ethiraj Srinivasan | ILLUMINATION | Medium',
    description:
      "21 days since the new year 2023 began and I am going to review my goals for 2022. I know it's late but better late than never. In 2022 I set goals across health, career, and personal growth…",
  },
  'bootcamp.uxdesign.cc/fault-tolerance-design-patterns-in-distributed-systems-49853ad237b4': {
    title:
      'Fault Tolerance Design Patterns in Distributed Systems | by Ethiraj Srinivasan | Bootcamp',
    description:
      'Distributed systems are made up of multiple interconnected components that work together to provide a service. Exploring patterns that keep them resilient when parts fail.',
  },
  'bootcamp.uxdesign.cc/the-world-of-rate-limit-algorithms-54fb9078e90a': {
    title: 'The world of Rate Limit Algorithms | by Ethiraj Srinivasan | Bootcamp',
    description:
      'Rate limit algorithm is a mechanism used to control the rate of requests or messages being sent or received by a system or service.',
  },
  'ethigeek.com': {
    title: 'Ethiraj Srinivasan',
    description:
      "Hi, this is Ethiraj, I'm a software developer, amateur cook, avid traveler and bibliophile hailing from Singapore.",
  },
  'youtube.com/watch?v=hchtg-IPiJY': {
    title: 'The Madakaripura Waterfall | East Java | Indonesia - YouTube',
    description:
      'Madakaripura Waterfall, nestled amidst the enchanting Bromo Tengger Semeru National Park in East Java, Indonesia, stands tall as a natural wonder...',
  },
  'youtube.com/watch?v=LOWsc6gO1zs': {
    title: 'Golden Touch on the Volcanic Horizon - YouTube',
    description:
      '#ethisri #sunrise #travel #clouds #photography #mountains #activevolcano #couplegoals #destination #adventure',
  },
  'medium.com/illumination/unexpected-turn-the-blue-fire-of-mount-ijen': {
    title: 'Unexpected Turn: The Blue Fire of Mount Ijen',
    description:
      'My childhood dream of visiting a volcano became a reality when I visited Mount Bromo in Bromo Tengger Semeru National Park.',
  },
  'tourmountbromo.com/mountbromoijentour': {
    title: 'Surabaya | Mount Bromo & Ijen Private Tour - Fr. $149/pax',
    description:
      'Explore Mount Bromo, Mount Ijen and Surabaya. Enjoy Up to 10% Off. Price from SGD149 per pax. STB Licensed Travel Agency.',
  },
  'wise.com/invite/dic/ethirajs7': {
    title: 'Wise: Online Money Transfers | International Banking Features',
    description:
      "Banks charge a lot for overseas transfers. We don't. Transfer money abroad easily and quickly with our low-cost transfers.",
  },
}

export function lookupLinkCardMeta(href: string): LinkCardMeta | undefined {
  try {
    const url = new URL(href)
    const key = `${url.hostname.replace(/^www\./, '')}${url.pathname}`.replace(/\/$/, '')
    if (linkCardMeta[key]) return linkCardMeta[key]
    for (const [pattern, meta] of Object.entries(linkCardMeta)) {
      if (key.includes(pattern) || href.includes(pattern)) return meta
    }
  } catch {
    for (const [pattern, meta] of Object.entries(linkCardMeta)) {
      if (href.includes(pattern)) return meta
    }
  }
  return undefined
}
