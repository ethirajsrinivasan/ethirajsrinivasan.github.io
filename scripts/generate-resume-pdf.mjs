#!/usr/bin/env node
/**
 * Post-build: render /resume/ to a print-quality PDF via headless Chrome.
 *
 * Output: out/resume.pdf (deployed with the static site)
 *         public/resume.pdf (available in dev after a build)
 *
 * Requires: npm run build first (needs out/resume/index.html)
 */
import { createServer } from 'node:http'
import { readFileSync, existsSync, copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const OUT = join(ROOT, 'out')
const RESUME_HTML = join(OUT, 'resume', 'index.html')
const PDF_OUT = join(OUT, 'resume.pdf')
const PDF_PUBLIC = join(ROOT, 'public', 'resume.pdf')
const PORT = 8765

if (!existsSync(RESUME_HTML)) {
  console.warn('[generate-resume-pdf] skip — out/resume/index.html not found (run npm run build first)')
  process.exit(0)
}

function mime(path) {
  if (path.endsWith('.css')) return 'text/css'
  if (path.endsWith('.js')) return 'application/javascript'
  if (path.endsWith('.json')) return 'application/json'
  if (path.endsWith('.svg')) return 'image/svg+xml'
  if (path.endsWith('.png')) return 'image/png'
  if (path.endsWith('.woff2')) return 'font/woff2'
  return 'text/html'
}

/** Minimal static file server rooted at `out/`. */
function startServer() {
  return new Promise((resolveServer) => {
    const server = createServer((req, res) => {
      let urlPath = req.url?.split('?')[0] ?? '/'
      if (urlPath.endsWith('/')) urlPath += 'index.html'
      const filePath = join(OUT, urlPath)
      if (!filePath.startsWith(OUT) || !existsSync(filePath)) {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      res.writeHead(200, { 'Content-Type': mime(filePath) })
      res.end(readFileSync(filePath))
    })
    server.listen(PORT, () => resolveServer(server))
  })
}

const server = await startServer()

try {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  })
  const page = await browser.newPage()
  await page.goto(`http://127.0.0.1:${PORT}/resume/`, {
    waitUntil: 'networkidle0',
    timeout: 60_000,
  })
  await page.evaluate(() => document.fonts.ready)
  await page.emulateMediaType('print')

  await page.pdf({
    path: PDF_OUT,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
  })

  await browser.close()
  copyFileSync(PDF_OUT, PDF_PUBLIC)
  console.log('[generate-resume-pdf] wrote out/resume.pdf + public/resume.pdf')
} finally {
  server.close()
}
