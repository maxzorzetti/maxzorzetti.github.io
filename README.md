# max zorzetti — personal site

Static site built with [Eleventy](https://www.11ty.dev/). The whole design — drifting-squares background, mono-and-serif chrome — lives in one layout file; content is markdown and JSON. The generated site is plain HTML with a single inline script (the background animation).

## Run it

Requires Node 18+. From this directory:

```bash
npm install
npm start        # serve http://localhost:8080, rebuild + reload on save
```

`npm run build` writes the static site to `docs/`.

## Editing

| What | Where |
| --- | --- |
| Design: CSS, header/nav, background animation (`CONFIG` knobs) | `src/_includes/base.njk` |
| Post page wrapper (date · title · deck) | `src/_includes/post.njk` |
| Section page wrapper (meta line · title · deck) | `src/_includes/page.njk` |
| Blog posts | `src/posts/*.md` |
| Post images | `src/images/` — `![alt](/images/f.jpg "caption"){width=320}`; quoted title becomes the caption, both optional |
| Games / dev lists | `src/_data/games.json`, `src/_data/dev.json` |
| About page | `src/about.md` |
| Blog index | `src/index.njk` |

A new post is one markdown file in `src/posts/`:

```markdown
---
title: A fine title
deck: One-line subtitle shown under the title.
date: 2026-06-10
---

Words go here.
```

It picks up the post layout and lands on the blog index automatically (newest first). Adding a game or tool is appending one object to the matching JSON file.

## Publishing on GitHub Pages (no Actions)

This folder is designed to sit at the root of your Pages repository:

1. `npm run build` — regenerates `docs/`
2. Commit (including `docs/`) and push
3. On GitHub: Settings → Pages → "Deploy from a branch" → `main`, folder `/docs`

Links assume the site is served at the domain root, which is true for a `username.github.io` repository. For a project page served from `https://username.github.io/repo-name/`, build with:

```bash
npx @11ty/eleventy --pathprefix=/repo-name/
```

(the HTML base plugin is already wired up to honor it).
