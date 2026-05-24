import type { Paragraph, PhrasingContent, Root } from 'mdast'

const BODY_PARAGRAPH_START =
  /^(We |I |In my |In this |Check out |Developing |Recently |Over the |Do try |Lets |To unlock |World is |After securing|Though we |All these |Health is |Thanks to |The actuator |Actuator )/i

function normalizeCaption(text: string): string {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/\.+$/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function getParagraphText(node: Paragraph): string {
  if (!node.children?.length) return ''
  return node.children
    .map((child) => ('value' in child ? String(child.value) : ''))
    .join('')
    .trim()
}

function isImageParagraph(node: Paragraph): boolean {
  if (!node.children?.length) return false
  const meaningful = node.children.filter(
    (child) => child.type !== 'text' || child.value.trim() !== ''
  )
  if (meaningful.length !== 1) return false
  const child = meaningful[0]
  if (child.type === 'image') return true
  if (child.type === 'link') {
    const link = child as { children?: PhrasingContent[] }
    return link.children?.length === 1 && link.children[0].type === 'image'
  }
  return false
}

function getImageAlt(node: Paragraph): string {
  if (!node.children?.length) return ''
  const meaningful = node.children.filter(
    (child) => child.type !== 'text' || child.value.trim() !== ''
  )
  const child = meaningful[0]
  if (child?.type === 'image') return child.alt ?? ''
  if (child?.type === 'link') {
    const img = (child as { children?: PhrasingContent[] }).children?.[0]
    if (img?.type === 'image') return img.alt ?? ''
  }
  return ''
}

/** Caption text for a paragraph that immediately follows an image block. */
export function isImageCaptionText(text: string, imageAlt: string): boolean {
  const t = text.replace(/\u00a0/g, ' ').trim()
  if (!t) return false

  if (/^Photo by .+ on Unsplash$/i.test(t)) return true
  if (/\(Photo [Bb]y [^)]+\)/.test(t)) return true

  const normT = normalizeCaption(t)
  const normAlt = normalizeCaption(imageAlt)
  if (normAlt && (normT === normAlt || normT.includes(normAlt) || normAlt.includes(normT))) {
    return true
  }

  if (t.length > 150 || t.split(/\s+/).length > 20) return false
  if (BODY_PARAGRAPH_START.test(t)) return false
  if (/(?:\s[-–—]\s).+(?:\s[-–—]\s)/.test(t)) return false

  const sentences = t.split(/(?<=[.!?])\s+/).filter((s) => s.trim())
  if (sentences.length > 1) return false

  return t.length <= 120
}

type MdNode = { type?: string; children?: MdNode[]; data?: { isImageCaption?: boolean } }

type MdParent = { children?: MdNode[] }

export function remarkImageCaptions() {
  return function (tree: Root) {
    walk(tree as MdParent)
  }
}

function walk(parent: MdParent) {
  const children = parent.children
  if (!children) return
  for (let i = 0; i < children.length; i++) {
    const node = children[i]
    if (node.type === 'paragraph' && i > 0) {
      const prev = children[i - 1]
      if (prev?.type === 'paragraph' && isImageParagraph(prev as Paragraph)) {
        const alt = getImageAlt(prev as Paragraph)
        const text = getParagraphText(node as Paragraph)
        if (isImageCaptionText(text, alt)) {
          const data = (node.data ??= {}) as { hProperties?: { className?: string } }
          data.hProperties = { ...data.hProperties, className: 'blog-image-caption' }
        }
      }
      continue
    }
    if (node.children) walk(node)
  }
}
