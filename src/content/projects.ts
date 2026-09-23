import type { ContentGroup, MediaPost } from './types'

export const projects: ContentGroup<MediaPost>[] = [
  {
    heading: 'Selected Work',
    items: [
      {
        title: 'Field Notes Atlas',
        image: '/media/project-atlas.svg',
        description:
          'A sample project card. Title above; image on the left, short description on the right. The whole card opens the link in a new tab.',
        href: 'https://github.com',
      },
      {
        title: 'Hearth Catalog',
        image: '/media/project-hearth.svg',
        description:
          'Another sample project. Add, reorder, or remove entries in src/content/projects.ts — they render in array order.',
        href: 'https://github.com',
      },
    ],
  },
  {
    heading: 'In Progress',
    items: [
      {
        title: 'Trail Log',
        image: '/media/project-trail.svg',
        description:
          'Optional group headings (like this one) are just a heading field on a group. Omit the heading to show an unlabeled block of posts.',
        href: 'https://github.com',
      },
    ],
  },
  {
    heading: 'All Projects',
    items: [
      {
        title: 'Project Walkthrough',
        image: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
        description:
          'The image field also accepts a YouTube URL. The left-hand slot becomes an embedded video instead of a still.',
        href: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
      },
    ],
  },
]
