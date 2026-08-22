# zubair480.github.io

My personal site, live at [zubair480.github.io](https://zubair480.github.io).

## How this repository is arranged

The site is a Next.js app that is exported to static files and served from
GitHub Pages. Three branches each do a different job:

| Branch | Contents |
| --- | --- |
| `portfolio-source` | The Next.js source for the site that is currently live |
| `gh-pages` | The built static export that GitHub Pages serves |
| `master` | An earlier version of the site built on the al-folio Jekyll theme, kept for reference |

`master` is the default branch, so it is what you land on here, but it is no
longer what is deployed. The live site is built from `portfolio-source`.

## Deploying

The static export is copied onto `gh-pages` by hand rather than by an action.
`gh-pages` carries a `.nojekyll` file so GitHub Pages serves the exported
`_next` assets untouched instead of running Jekyll over them.

## Credit

The `master` branch is based on
[al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat, MIT
licensed.
