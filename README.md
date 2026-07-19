# Zubair Zafar Portfolio

The source for [zubair480.github.io](https://zubair480.github.io/).

This portfolio presents Zubair Zafar's software engineering experience, applied AI work, education, community involvement and complete project catalog.

## Stack

- Next.js 16 and React 19
- TypeScript
- Vinext and Vite for the local development build
- Static export for GitHub Pages
- CSS motion with progressive WebGL enhancement

## Run locally

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

The local site opens at `http://localhost:3000`.

## Validate

```bash
npm run lint
npm test
npm run build:pages
```

The GitHub Pages build is written to `out/`.

## Repository branches

- `portfolio-source` contains the editable portfolio source
- `gh-pages` contains the generated production website
- `master` preserves the previous archived Jekyll portfolio

