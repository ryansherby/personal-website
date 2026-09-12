import type { ContentGroup, MediaPost } from './types'

export const articles: ContentGroup<MediaPost>[] = [
  {
    heading: 'Longform',
    items: [
      {
        title: 'On keeping a working notebook',
        image: '/media/article-notebook.svg',
        description:
          'Sample article card. Same layout as a project: title, then image left and synopsis right. Click through to the external piece.',
        href: 'https://example.com',
      },
    ],
  },
  {
    items: [
      {
        title: 'A short note on tools',
        image: '/media/article-tools.svg',
        description:
          'This second article sits in a group with no heading, which is how you mix labeled and unlabeled sections.',
        href: 'https://example.com',
      },
    ],
  },
]
