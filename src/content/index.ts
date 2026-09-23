/**
 * Central content registry.
 *
 * Edit these modules to add, reorder, or remove work. Each file exports an
 * array of groups; groups and items render in array order. Set `heading` on a
 * group for a section label, or omit it for an unlabeled block.
 *
 *   site.ts      — name, banner, photo, links, summary
 *   projects.ts  — project cards
 *   articles.ts  — local article cards
 *   medium.ts    — Medium profile URL to fetch as JSON
 *   blog.ts      — dated posts
 */

export { site } from './site'
export { projects } from './projects'
export { articles } from './articles'
export { medium } from './medium'
export { blog } from './blog'
export { navigation } from './types'
export type {
  BlogPost,
  ContentGroup,
  MediaPost,
  NavSection,
  SiteLinks,
  SiteProfile,
} from './types'
