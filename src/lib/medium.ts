import type { MediaPost } from '../content/types'
import { assetUrl } from './assetUrl'

const FALLBACK_IMAGE = assetUrl('/media/article-notebook.svg')
const DESCRIPTION_LIMIT = 220

type RssJsonItem = {
  title?: unknown
  link?: unknown
  thumbnail?: unknown
  description?: unknown
  content?: unknown
}

type RssJsonResponse = {
  status?: unknown
  items?: unknown
}

export function mediumRssUrl(profileUrl: string): string {
  const url = new URL(profileUrl.trim())

  if (url.pathname.includes('/feed')) {
    return `${url.origin}${url.pathname.replace(/\/$/, '')}`
  }

  if (url.hostname === 'medium.com') {
    const [first] = url.pathname.split('/').filter(Boolean)
    if (first) {
      return `https://medium.com/feed/${first}`
    }
  }

  if (url.hostname.endsWith('.medium.com')) {
    return `${url.origin}/feed`
  }

  throw new Error('Not a Medium profile or publication URL')
}

export async function fetchMediumArticles(profileUrl: string): Promise<MediaPost[]> {
  const rssUrl = mediumRssUrl(profileUrl)
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Medium request failed (${response.status})`)
  }

  const data = JSON.parse(await response.text()) as RssJsonResponse
  if (data.status !== 'ok' || !Array.isArray(data.items)) {
    throw new Error('Medium JSON did not contain articles')
  }

  return data.items
    .map((item) => toMediaPost(item))
    .filter((post): post is MediaPost => post !== null)
}

function toMediaPost(value: unknown): MediaPost | null {
  if (!isRssItem(value)) {
    return null
  }

  const title = asText(value.title)
  const href = cleanMediumLink(asText(value.link))
  if (!title || !href) {
    return null
  }

  const html = asText(value.content) || asText(value.description)
  const image =
    imageUrl(asText(value.thumbnail)) || firstImage(html) || FALLBACK_IMAGE
  const description = excerpt(html)

  return { title, image, description, href }
}

function isRssItem(value: unknown): value is RssJsonItem {
  return typeof value === 'object' && value !== null
}

function asText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

function firstImage(html: string): string | undefined {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i)
  return match ? imageUrl(match[1]) : undefined
}

function imageUrl(value: string): string | undefined {
  if (!value) {
    return undefined
  }
  if (/\/stat\?|\/flag\.png|medium\.com\/1\*placeholder/i.test(value)) {
    return undefined
  }
  return value
}

function cleanMediumLink(href: string): string {
  try {
    const url = new URL(href)
    url.search = ''
    url.hash = ''
    return url.toString()
  } catch {
    return href
  }
}

function excerpt(html: string): string {
  const subtitle = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)
  if (subtitle) {
    return truncate(stripHtml(subtitle[1]))
  }

  const paragraph = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i)
  if (paragraph) {
    return truncate(stripHtml(paragraph[1]))
  }

  return truncate(
    stripHtml(html).replace(/Photo by .*? on Unsplash/gi, '').trim(),
  )
}

function truncate(text: string): string {
  if (text.length <= DESCRIPTION_LIMIT) {
    return text
  }
  return `${text.slice(0, DESCRIPTION_LIMIT).replace(/\s+\S*$/, '')}…`
}
