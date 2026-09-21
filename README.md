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

## Hobby photos

The `/hobbies` page is driven by `app/hobby-data.ts`. Each entry starts with
`image: null` and renders a styled placeholder. To add a real photo:

1. Put the file in `public/hobbies/`, for example `public/hobbies/hiking.jpg`.
2. Set that hobby's `image` to `/hobbies/hiking.jpg` and update `imageAlt`.

Landscape crops around 1200px wide work best. The card crops the image to a
190px tall band, so keep the subject near the center. Two optional fields help
when a photo needs it:

- `imagePosition` sets the CSS `object-position` for the crop, for example
  `"center 12%"` to hold the top of the frame.
- `insetImage` adds a second photo as a small thumbnail on the card media.

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

