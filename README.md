# Ethiraj Srinivasan — Portfolio

Next.js static site for [ethirajsrinivasan.com](https://ethirajsrinivasan.com).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static export is written to `out/` for GitHub Pages.

## Content

- Homepage: `src/pages/index.tsx`
- Portfolio pages: `src/pages/portfolio/<slug>.tsx` (each page defines its own layout props and body content)
- Blog posts: `src/pages/blogs/<slug>.tsx` (listing metadata in `src/data/blogIndex.ts`)
