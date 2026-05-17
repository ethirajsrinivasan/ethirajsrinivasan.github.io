/**
 * Move portfolio links to Project Details sidebar with validated labels.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages/portfolio')

/** @type {Record<string, { href: string, label: string }[]>} */
const linksByFile = {
  'collection2-csv.tsx': [
    { href: 'https://rubygems.org/gems/collection2csv', label: 'RubyGems package' },
    { href: 'https://github.com/ethirajsrinivasan/collection2csv', label: 'Source code on GitHub' },
  ],
  'css-to-inliner.tsx': [
    { href: 'http://css2inliner.ethigeek.com/', label: 'CSS2Inliner application' },
    { href: 'https://github.com/ethirajsrinivasan/css-to-inliner', label: 'Source code on GitHub' },
  ],
  'devise-foundation-views.tsx': [
    { href: 'https://rubygems.org/gems/devise-foundation-views', label: 'RubyGems package' },
    { href: 'https://github.com/ethirajsrinivasan/devise-foundation-views', label: 'Source code on GitHub' },
  ],
  'dna-capitals-hackathon.tsx': [
    { href: 'https://github.com/ethirajsrinivasan/DNA-capitals-hackathon', label: 'Source code on GitHub' },
  ],
  'facial-recognition-system.tsx': [
    {
      href: 'https://github.com/ethirajsrinivasan/relay_activation_face_recognition_system',
      label: 'Source code on GitHub',
    },
  ],
  'medical-image-diagnostics.tsx': [
    { href: 'https://github.com/ethirajsrinivasan/mammogram_deep_learning', label: 'Source code on GitHub' },
  ],
  'medtracker.tsx': [
    {
      href: 'https://play.google.com/store/apps/details?id=com.ethigeek.medtracker',
      label: 'MedTracker on Google Play',
    },
    { href: 'https://github.com/ethirajnus/Medtracker', label: 'Source code on GitHub' },
  ],
  'rails-fort.tsx': [
    { href: 'https://rubygems.org/gems/rails-fort', label: 'RubyGems package' },
    { href: 'https://github.com/ethirajsrinivasan/rails-fort', label: 'Source code on GitHub' },
  ],
  'rails-protip.tsx': [
    { href: 'https://rubygems.org/gems/rails-protip', label: 'RubyGems package' },
    { href: 'https://github.com/ethirajsrinivasan/rails-protip', label: 'Source code on GitHub' },
  ],
  'smart-interactive-wall.tsx': [
    { href: 'https://www.youtube.com/watch?v=lv5bLhFmaWs', label: 'Demo video on YouTube' },
  ],
  'social-community-expansion.tsx': [
    { href: 'https://prezi.com/view/sT1tLt2YNfpOTrr6F7cd/', label: 'Project presentation (Prezi)' },
    { href: 'https://github.com/YixuanLi/LEMON', label: 'LEMON algorithm on GitHub' },
  ],
  'spatio-temporal-analysis.tsx': [
    { href: 'https://sunilp.shinyapps.io/geospatialapp/', label: 'Interactive Shiny application' },
    {
      href: 'https://analyticsandintelligentsystems.wordpress.com/2017/05/05/spatio-temporal-analysis-of-students-travelling-behaviours/',
      label: 'Project overview (blog post)',
    },
  ],
  'sunspot.tsx': [
    { href: 'http://sunspot.github.io/', label: 'Sunspot documentation' },
    { href: 'https://github.com/sunspot/sunspot', label: 'Sunspot on GitHub' },
  ],
  'supercache.tsx': [
    { href: 'https://rubygems.org/gems/supercache', label: 'RubyGems package' },
    { href: 'https://github.com/bragboy/supercache', label: 'Supercache on GitHub' },
  ],
  'table2-csv.tsx': [
    { href: 'https://rubygems.org/gems/table2csv', label: 'RubyGems package' },
    { href: 'https://github.com/ethirajsrinivasan/table2csv', label: 'Source code on GitHub' },
  ],
  'tablizer.tsx': [
    { href: 'http://delabs-tablizer.herokuapp.com/', label: 'Tablizer live application' },
    { href: 'https://github.com/ethirajsrinivasan/tablizer', label: 'Source code on GitHub' },
  ],
  'technology-icons.tsx': [
    { href: 'https://rubygems.org/gems/technology-icons', label: 'RubyGems package' },
    { href: 'https://github.com/ethirajsrinivasan/technology-icons', label: 'Source code on GitHub' },
  ],
  'u-ask.tsx': [
    { href: 'https://github.com/Navi-nk/uAsk', label: 'uAsk on GitHub' },
    { href: 'https://www.youtube.com/watch?v=poZ0JIMNDbY', label: 'Demo video on YouTube' },
  ],
  'url-shortener.tsx': [
    { href: 'http://urlshortner-ethigeek.herokuapp.com/', label: 'URL shortener live application' },
    { href: 'https://github.com/ethirajsrinivasan/UrlShortner', label: 'Source code on GitHub' },
  ],
}

const projectLinksSection =
  /\n\s*<section className=\{pc\.section\}>\s*\n\s*<h2 className=\{pc\.heading\}>Project Links<\/h2>[\s\S]*?\n\s*<\/section>/

function formatLinks(links) {
  const lines = links.map(
    (l) => `        { href: '${l.href}', label: '${l.label}' },`
  )
  return `      links={[\n${lines.join('\n')}\n      ]}`
}

for (const [file, links] of Object.entries(linksByFile)) {
  const p = path.join(dir, file)
  let s = fs.readFileSync(p, 'utf8')

  s = s.replace(/\s*github="[^"]*"/g, '')
  s = s.replace(/\s*demo="[^"]*"/g, '')
  s = s.replace(/(technologies=\{[^}]+\})/, `$1\n${formatLinks(links)}`)

  s = s.replace(projectLinksSection, '')

  // spatio-temporal: de-link duplicate inline shiny reference
  s = s.replace(
    /Visit the\{' '\}\n\s*<a href="https:\/\/sunilp\.shinyapps\.io\/geospatialapp\/" className=\{pc\.link\} \{\.\.\.externalLink\}>\n\s*project\n\s*<\/a>\{' '\}\n\s*page to view/,
    'Visit the interactive Shiny application (see Links in Project Details) to view'
  )

  fs.writeFileSync(p, s)
  console.log('updated:', file)
}
