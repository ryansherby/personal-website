export type MediaPost = {
  title: string
  /** Photo path, or a YouTube watch / youtu.be / embed URL */
  image: string
  /** Markdown */
  description: string
  href: string
}

export type BlogPost = {
  title: string
  date: string
  /** Markdown */
  body: string
}

export type ContentGroup<T> = {
  heading?: string
  items: T[]
}

export type SiteLinks = {
  email?: string
  linkedin?: string
  github?: string
}

export type SiteProfile = {
  name: string
  banner?: string
  bannerAlt?: string
  photo: string
  photoAlt: string
  /** Markdown paragraphs */
  summary: string[]
  links?: SiteLinks
}

export const navigation = [
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'blog', label: 'Blog' },
] as const

export type NavSection = (typeof navigation)[number]['id']
