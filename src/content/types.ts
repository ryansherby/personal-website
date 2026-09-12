export type MediaPost = {
  title: string
  image: string
  description: string
  href: string
}

export type BlogPost = {
  title: string
  date: string
  body: string
}

export type ContentGroup<T> = {
  heading?: string
  items: T[]
}

export type SiteProfile = {
  name: string
  photo: string
  photoAlt: string
  summary: string[]
}

export const navigation = [
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'blog', label: 'Blog' },
] as const

export type NavSection = (typeof navigation)[number]['id']
