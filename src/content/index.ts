/**
 * Central content registry.
 *
 * Edit these modules to add, reorder, or remove work. Each file exports an
 * array of groups; groups and items render in array order. Set `heading` on a
 * group for a section label, or omit it for an unlabeled block.
 *
 *   site.ts      — name, photo, summary
 *   projects.ts  — project cards
 *   articles.ts  — article cards
 *   blog.ts      — dated posts
 */

export { site } from './site'
export { projects } from './projects'
export { articles } from './articles'
export { blog } from './blog'
export { navigation } from './types'
export type {
  BlogPost,
  ContentGroup,
  MediaPost,
  NavSection,
  SiteProfile,
} from './types'
