import type { BlogPost, ContentGroup } from './types'

export const blog: ContentGroup<BlogPost>[] = [
  {
    heading: '2026',
    items: [
      {
        title: 'Opening the notebook',
        date: '2026-09-07',
        body: 'A sample blog post. Title and date sit above a **markdown** body.\n\nYou can use *emphasis*, [links](https://github.com), lists, and `inline code`. Separate paragraphs with a blank line.',
      },
    ],
  },
  {
    heading: '2025',
    items: [
      {
        title: 'What this page is for',
        date: '2025-11-18',
        body: 'Blog posts are listed in the order they appear in src/content/blog.ts. Group headings are optional — use them for years, seasons, or leave them off.',
      },
    ],
  },
]
