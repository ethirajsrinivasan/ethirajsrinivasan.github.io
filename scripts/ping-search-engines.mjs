#!/usr/bin/env node
/**
 * Notify search engines after deploy.
 *
 * - IndexNow (Bing, Yandex, and partners): POST all URLs from public/sitemap.xml
 * - Google: legacy ping is retired (404). Submit sitemap once in Search Console:
 *   https://search.google.com/search-console → Sitemaps → add sitemap.xml
 */
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const SITEMAP_PATH = join(ROOT, 'public/sitemap.xml')
const SITE_HOST = 'ethirajsrinivasan.com'
const SITE_URL = `https://${SITE_HOST}`
const INDEXNOW_KEY = 'f7c3a9e2b1d0486c9f5e2a1b4d8c7e3f'
const INDEXNOW_KEY_URL = `${SITE_URL}/${INDEXNOW_KEY}.txt`

function parseSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

async function pingIndexNow(urlList) {
  const body = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_URL,
    urlList,
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  return { status: res.status, ok: res.ok, text: await res.text().catch(() => '') }
}

async function main() {
  if (!existsSync(SITEMAP_PATH)) {
    console.warn('[ping-search-engines] skip — public/sitemap.xml not found')
    process.exit(0)
  }

  const xml = readFileSync(SITEMAP_PATH, 'utf8')
  const urlList = parseSitemapUrls(xml)

  if (urlList.length === 0) {
    console.warn('[ping-search-engines] skip — no URLs in sitemap')
    process.exit(0)
  }

  console.log(`[ping-search-engines] sitemap: ${urlList.length} urls → ${SITE_URL}/sitemap.xml`)

  try {
    const result = await pingIndexNow(urlList)
    if (result.ok || result.status === 202) {
      console.log(`[ping-search-engines] IndexNow OK (${result.status}) — ${urlList.length} urls submitted`)
    } else {
      console.warn(`[ping-search-engines] IndexNow HTTP ${result.status}${result.text ? `: ${result.text}` : ''}`)
    }
  } catch (err) {
    console.warn('[ping-search-engines] IndexNow failed:', err.message)
  }

  console.log(
    '[ping-search-engines] Google: submit once in Search Console → Sitemaps → https://ethirajsrinivasan.com/sitemap.xml'
  )
}

main()
