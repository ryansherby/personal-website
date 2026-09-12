import type { SiteProfile } from './types'

export const site: SiteProfile = {
  name: 'Ryan Sherby',
  photo: '/profile.svg',
  photoAlt: 'Portrait placeholder for Ryan Sherby',
  summary: [
    'Placeholder introduction. I work on projects at the intersection of systems, writing, and design — this site is a quiet place to keep that work together.',
    'Replace this copy in src/content/site.ts and drop a photo at public/profile.svg (or point photo to a .jpg). The layout stays the same; only the words and image need to change.',
  ],
}
