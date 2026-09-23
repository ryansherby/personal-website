const YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtu.be',
  'www.youtu.be',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
])

export function youtubeEmbedSrc(value: string): string | null {
  try {
    const url = new URL(value.trim())
    if (!YOUTUBE_HOSTS.has(url.hostname)) {
      return null
    }

    const id = youtubeId(url)
    if (!id) {
      return null
    }

    const src = new URL(`https://www.youtube-nocookie.com/embed/${id}`)
    const start = startSeconds(url)
    if (start) {
      src.searchParams.set('start', start)
    }
    src.searchParams.set('rel', '0')
    return src.toString()
  } catch {
    return null
  }
}

function youtubeId(url: URL): string | null {
  if (url.hostname === 'youtu.be' || url.hostname === 'www.youtu.be') {
    return token(url.pathname.split('/').filter(Boolean)[0])
  }

  const fromQuery = token(url.searchParams.get('v'))
  if (fromQuery) {
    return fromQuery
  }

  const parts = url.pathname.split('/').filter(Boolean)
  const kind = parts[0]
  if (kind === 'embed' || kind === 'shorts' || kind === 'live' || kind === 'v') {
    return token(parts[1])
  }

  return null
}

function token(value: string | null | undefined): string | null {
  if (!value) {
    return null
  }
  const id = value.replace(/[^A-Za-z0-9_-]/g, '')
  return id.length >= 11 ? id.slice(0, 11) : null
}

function startSeconds(url: URL): string | null {
  const raw = url.searchParams.get('start') || url.searchParams.get('t')
  if (!raw) {
    return null
  }

  if (/^\d+$/.test(raw)) {
    return raw
  }

  const match = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/)
  if (!match) {
    return null
  }

  const hours = Number(match[1] || 0)
  const minutes = Number(match[2] || 0)
  const seconds = Number(match[3] || 0)
  const total = hours * 3600 + minutes * 60 + seconds
  return total > 0 ? String(total) : null
}
