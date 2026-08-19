#!/usr/bin/env node
/**
 * Prebuild route-scoped CSS bundles (resume + blog typography).
 * Loaded via <link> on only the routes that need them — avoids bloating the global bundle.
 */
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

function runTailwind(config, input, output) {
  const result = spawnSync(
    'npx',
    ['tailwindcss', '-c', config, '-i', input, '-o', output, '--minify'],
    { cwd: ROOT, stdio: 'inherit', shell: process.platform === 'win32' }
  )
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

runTailwind(
  'tailwind.config.js',
  'src/styles/resume.css',
  'public/resume.css'
)
runTailwind(
  'tailwind.blog.config.js',
  'src/styles/blog-prose.css',
  'public/blog-prose.css'
)

console.log('[build-route-css] wrote public/resume.css + public/blog-prose.css')
