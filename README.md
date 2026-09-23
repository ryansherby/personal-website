# Ryan Sherby

Personal site built with React and Vite.

## Add content

All copy lives in TypeScript modules under `src/content/`. Groups and items render in array order. Omit `heading` on a group if you do not want a section label.

- `src/content/site.ts` — name, banner, photo, email/LinkedIn/GitHub links, markdown summary
- `src/content/projects.ts` — project cards (`image` may be a photo path or a YouTube URL; `description` is markdown)
- `src/content/articles.ts` — local article cards (`image` may also be a YouTube URL; `description` is markdown)
- `src/content/medium.ts` — Medium profile URL (`https://medium.com/@ryansherby`); fetched as JSON and shown as article cards
- `src/content/blog.ts` — dated posts (`body` is markdown, including GitHub-flavored markdown)
- `src/styles/tokens.css` — colors, named by role rather than hue

Replace `public/profile.svg` with a photo, or change `site.photo` to point at a `.jpg`. Replace `public/banner.svg` (or set `site.banner`) for the top banner. Leave `banner` empty to keep the reserved space without an image.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

This is a static Vite app. `vercel.json` sets the Vite framework, `npm run build`, and `dist/` as the output.

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Leave the Vite defaults (build `npm run build`, output `dist`).
4. Deploy. Later pushes to the production branch publish automatically; pull requests get preview URLs.

Custom domains are added under the Vercel project’s **Domains** settings.
