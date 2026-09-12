# Ryan Sherby

Personal site built with React and Vite.

## Add content

All copy lives in TypeScript modules under `src/content/`. Groups and items render in array order. Omit `heading` on a group if you do not want a section label.

- `src/content/site.ts` — name, photo, summary
- `src/content/projects.ts` — project cards
- `src/content/articles.ts` — article cards
- `src/content/blog.ts` — dated posts
- `src/styles/tokens.css` — colors, named by role rather than hue

Replace `public/profile.svg` with a photo, or change `site.photo` to point at a `.jpg`.

## Run locally

```bash
npm install
npm run dev
```
