import type { Heading, Root } from 'mdast'
import { isImageCaptionText } from './remark-image-captions'

const IMAGE_CAPTION_CLASS = 'blog-image-caption'
const NUMBERED_SECTION = /^\d+\.\s/

const STOP_WORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'that',
  'this',
  'from',
  'your',
  'have',
  'are',
  'can',
  'will',
  'into',
  'how',
  'our',
  'not',
  'but',
  'its',
  'was',
  'has',
  'had',
  'been',
  'about',
  'when',
  'what',
  'they',
  'you',
  'all',
])

function normalizeTitle(text: string): string {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function contentWords(text: string): string[] {
  return normalizeTitle(text)
    .split(' ')
    .filter((w) => w.length > 3 && !STOP_WORDS.has(w))
}

function headingText(node: Heading): string {
  if (!node.children?.length) return ''
  return node.children.map((c) => ('value' in c ? String(c.value) : '')).join('').trim()
}

function titlesMatch(a: string, b: string): boolean {
  const x = normalizeTitle(a)
  const y = normalizeTitle(b)
  if (!x || !y) return false
  return x === y || x.includes(y) || y.includes(x)
}

function normalizeParagraph(text: string): string {
  return normalizeTitle(
    text.replace(/\.\.\./g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  )
}

function paragraphsMatch(a: string, b: string): boolean {
  const x = normalizeParagraph(a)
  const y = normalizeParagraph(b)
  if (!x || !y) return false
  if (x === y) return true
  const probe = y.slice(0, Math.min(140, y.length))
  return probe.length >= 40 && (x.includes(probe) || y.includes(x.slice(0, 140)))
}

function wordOverlapRatio(lead: string, reference: string): number {
  const ref = contentWords(reference)
  const leadW = contentWords(lead)
  if (!ref.length || !leadW.length) return 0
  const hits = leadW.filter((w) => ref.includes(w)).length
  return hits / Math.min(ref.length, leadW.length)
}

function titlePhraseInLead(lead: string, title: string): boolean {
  const titleWords = contentWords(title)
  if (titleWords.length < 2) return titlesMatch(lead.slice(0, 100), title)
  const probe = titleWords.slice(0, Math.min(5, titleWords.length)).join(' ')
  const leadNorm = normalizeTitle(lead)
  if (!leadNorm.startsWith(probe)) return false
  return leadNorm.length < 220
}

function headingMatchesTitle(heading: string, title: string): boolean {
  if (!titlesMatch(heading, title)) return false
  const h = normalizeTitle(heading)
  const t = normalizeTitle(title)
  if (h === t) return true
  // Do not strip real section headings (e.g. "## RSpec") that only appear inside the title.
  if (h.length < t.length * 0.45) return false
  return true
}

/** First h3/h4 that only rephrases the post title (e.g. "The Penny Wise Mentality"). */
function headingIsTitleSubtitle(heading: string, title: string): boolean {
  const hw = contentWords(heading)
  const tw = contentWords(title)
  if (hw.length < 2 || hw.length > 5 || !tw.length) return false
  const shared = hw.filter((w) => tw.includes(w))
  return shared.length >= 2
}

function firstSentence(text: string): string {
  const match = text.match(/^(.+?[.!?])(?:\s+|$)/)
  return (match?.[1] ?? text).trim()
}

function looksLikeNonProseLead(line: string): boolean {
  const t = line.trim()
  return /^!\[[^\]]*\]\([^)]+\)/.test(t) || /^#{1,6}\s/.test(t) || /^>\s/.test(t)
}

function leadIntroMatchesMeta(lead: string, title: string, excerpt: string): boolean {
  const trimmed = lead.trim()
  if (!trimmed || looksLikeNonProseLead(trimmed)) return false

  const sentenceCount = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 8).length
  const substantiveIntro = sentenceCount >= 3

  if (excerpt && paragraphsMatch(trimmed, excerpt)) {
    if (!substantiveIntro || trimmed.length <= excerpt.length * 1.35) return true
  }
  if (title && titlesMatch(trimmed, title)) return true
  if (title && titlePhraseInLead(trimmed, title)) return true

  if (excerpt) {
    const opening = firstSentence(trimmed)
    if (paragraphsMatch(opening, excerpt) && !substantiveIntro) return true
    if (
      opening.length >= 40 &&
      wordOverlapRatio(opening, excerpt) >= 0.62 &&
      !substantiveIntro
    ) {
      return true
    }
  }

  if (substantiveIntro) return false

  if (excerpt && wordOverlapRatio(trimmed, excerpt) >= 0.55) {
    return sentenceCount <= 1 || paragraphsMatch(trimmed, excerpt)
  }
  if (title && wordOverlapRatio(trimmed, title) >= 0.78) {
    return titlePhraseInLead(trimmed, title)
  }
  return false
}

function isSectionDivider(text: string): boolean {
  const compact = text.replace(/\s+/g, '')
  return compact === '•••' || /^•{3}$/.test(compact)
}

type MdNode = {
  type?: string
  depth?: number
  children?: MdNode[]
  data?: { hProperties?: { className?: string | string[] } }
}

type MdParent = { children?: MdNode[] }

/** Demote subsection h2 → h3; tag image captions. Pair with stripLeadHeadings() for title dedup. */
export function remarkBlogStructure() {
  return function remarkBlogStructurePlugin(tree: Root) {
    demoteSubsectionHeadings(tree)
    tagImageCaptions(tree)
  }
}

/**
 * Remove duplicate title/subtitle/intro from markdown (shell already renders h1 + excerpt).
 * Migrated posts repeat up to two leading ## headings plus an excerpt paragraph.
 */
export function stripLeadHeadings(
  content: string,
  title: string,
  excerpt: string
): string {
  const lines = content.split('\n')
  let i = 0

  while (i < lines.length && lines[i].trim() === '') i++

  while (i < lines.length && /^#\s+/.test(lines[i])) {
    const text = lines[i].replace(/^#\s+/, '').trim()
    if (!headingMatchesTitle(text, title)) break
    i++
    while (i < lines.length && lines[i].trim() === '') i++
  }

  let leadHeadingsStripped = 0
  while (i < lines.length && /^#{2,4}\s+/.test(lines[i]) && leadHeadingsStripped < 2) {
    const text = lines[i].replace(/^#{1,6}\s+/, '').trim()
    if (isSectionDivider(text) || NUMBERED_SECTION.test(text)) break
    const stripHeading =
      headingMatchesTitle(text, title) ||
      (leadHeadingsStripped === 0 && headingIsTitleSubtitle(text, title))
    if (!stripHeading) break
    i++
    leadHeadingsStripped++
    while (i < lines.length && lines[i].trim() === '') i++
  }

  while (i < lines.length && lines[i].trim() === '') i++

  if (i < lines.length && !lines[i].startsWith('#')) {
    let j = i
    const parts: string[] = []
    while (j < lines.length && lines[j].trim() !== '' && !lines[j].startsWith('#')) {
      parts.push(lines[j].trim())
      j++
    }
    const para = parts.join(' ')
    if (para && leadIntroMatchesMeta(para, title, excerpt)) {
      i = j
      while (i < lines.length && lines[i].trim() === '') i++
    }
  }

  return lines.slice(i).join('\n')
}

function demoteSubsectionHeadings(tree: Root) {
  if (!tree.children?.length) return
  let inNumberedSection = false
  for (const node of tree.children) {
    if (!node || node.type !== 'heading' || node.depth !== 2) continue
    const text = headingText(node as Heading)
    if (isSectionDivider(text)) continue
    if (NUMBERED_SECTION.test(text)) {
      inNumberedSection = true
      continue
    }
    if (inNumberedSection) {
      node.depth = 3
    }
  }
}

function tagImageCaptions(tree: Root) {
  walkImageCaptions(tree as MdParent)
}

function walkImageCaptions(parent: MdParent) {
  const children = parent.children
  if (!children) return
  for (let i = 0; i < children.length; i++) {
    const node = children[i]
    if (i > 0) {
      const prev = children[i - 1]
      if (prev?.type === 'paragraph' && isImageParagraph(prev)) {
        const alt = getImageAlt(prev)
        const caption = captionTextFromNode(node)
        if (caption && isImageCaptionText(caption, alt)) {
          if (node.type === 'blockquote') {
            children[i] = captionParagraph(caption)
          } else if (node.type === 'paragraph') {
            const data = (node.data ??= {})
            data.hProperties = {
              ...data.hProperties,
              className: [IMAGE_CAPTION_CLASS],
            }
          }
        }
      }
    }
    if (node.children) walkImageCaptions(node)
  }
}

function captionTextFromNode(node: MdNode): string {
  if (node.type === 'paragraph') return getParagraphText(node)
  if (node.type === 'blockquote') return getBlockquoteText(node)
  return ''
}

function getBlockquoteText(node: MdNode): string {
  const paragraphs = (node.children ?? []).filter((c) => c.type === 'paragraph')
  if (paragraphs.length !== 1) return ''
  return getParagraphText(paragraphs[0])
}

function captionParagraph(text: string): MdNode {
  return {
    type: 'paragraph',
    children: [{ type: 'text', value: text } as MdNode],
    data: {
      hProperties: { className: [IMAGE_CAPTION_CLASS] },
    },
  }
}

function isImageParagraph(node: MdNode): boolean {
  if (node.type !== 'paragraph' || !node.children?.length) return false
  const meaningful = node.children.filter(
    (c) => c.type !== 'text' || (c as { value?: string }).value?.trim()
  )
  if (meaningful.length !== 1) return false
  const child = meaningful[0]
  if (child.type === 'image') return true
  if (child.type === 'link') {
    const link = child as { children?: MdNode[] }
    return link.children?.length === 1 && link.children[0].type === 'image'
  }
  return false
}

function getImageAlt(node: MdNode): string {
  if (!node.children?.length) return ''
  const meaningful = node.children.filter(
    (c) => c.type !== 'text' || (c as { value?: string }).value?.trim()
  )
  const child = meaningful[0]
  if (child?.type === 'image') return (child as { alt?: string }).alt ?? ''
  if (child?.type === 'link') {
    const img = (child as { children?: MdNode[] }).children?.[0]
    if (img?.type === 'image') return (img as { alt?: string }).alt ?? ''
  }
  return ''
}

function getParagraphText(node: MdNode): string {
  return (node.children ?? [])
    .map((c) => ('value' in c ? String((c as { value: string }).value) : ''))
    .join('')
    .trim()
}

export { IMAGE_CAPTION_CLASS }
