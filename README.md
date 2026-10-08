# Bolaji Ilori — Personal Site (Nuxt 3)

A real, runnable Nuxt 3 implementation of the mockups, built from Bolaji's CV/Lebenslauf content.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
`npm run generate` produces a static build in `.output/public`. Target is **Cloudflare Pages**.

### Cloudflare Pages settings
Connect the GitHub repo, then set:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run generate` |
| Build output directory | `.output/public` |
| Node version | 20 or later (`NODE_VERSION` env var) |

Two environment variables, both under **Settings → Environment variables**:

- `NUXT_PUBLIC_SITE_URL` — the public origin, no trailing slash (e.g. `https://bolajiilori.com`).
  Set it on **Production only**. `scripts/postbuild.mjs` uses it to write `sitemap.xml` and
  `robots.txt`; leaving it unset on Preview means preview deploys don't publish a sitemap
  pointing at the live domain.
- `NUXT_PUBLIC_FORMSPREE_ID` — needed on both environments or the contact form silently no-ops.

### Custom domain
If the domain is registered with Cloudflare, **Pages → Custom domains → Set up a domain** does the
DNS itself and issues the certificate; there are no nameservers to point. Add both the apex and
`www`, then set one to redirect to the other so a single canonical host is indexed. Certificates
take a few minutes to go live.

`public/_headers` is read by Pages at the site root and sets the cache and security headers —
it needs no dashboard configuration.

## Structure
- `layouts/default.vue` — shared nav
- `pages/index.vue` — home/landing
- `pages/work.vue` — projects gallery
- `pages/blog/index.vue` — writing list, generated from markdown (see *Blog* below)
- `pages/blog/[slug].vue` — individual post page
- `content/blog/*.md` — the posts themselves
- `pages/hobbies.vue` — hobbies grid (`composables/useHobbies.ts` holds the data)
- `pages/resume.vue` — CV with a working EN/DE toggle (`composables/useCvData.ts` holds both languages, sourced from the CV and Lebenslauf PDFs)
- `pages/contact.vue` — contact form, posts to Formspree (see *Contact form* below)
- `assets/css/main.css` — shared design tokens (colors, fonts) matching the terminal-inspired mockups

## Blog
Posts are markdown files in `content/blog/`, read by [@nuxt/content](https://content.nuxt.com).
To publish a new one, add a file — no code change, no rebuild of the page components:

```markdown
---
title: Your post title
description: One-line summary, shown on the list page.
date: '2026-08-06'      # quoted — keeps YAML from parsing it as a Date
read: 5 min read
---

Body in markdown.
```

The filename becomes the URL (`my-post.md` → `/blog/my-post`). The list at `/blog` sorts by
`date`, newest first, and each title links to the full post. Add `draft: true` to the
frontmatter to keep a post off the list.

The four existing posts carry over the titles and dates from the old hardcoded list, but
their **bodies are placeholder scaffolding I wrote, not your writing** — each one renders a
visible "Draft placeholder" banner via the `::draft-notice` block at the top. Replace the
body and delete that block before shipping.

## Responsive layout
The site is mobile-first from 320px up. Two things carry it:

- `--gutter` in `assets/css/main.css` — a `clamp(20px, 5vw, 80px)` horizontal page gutter used
  by every section instead of a hard-coded `80px`. Change it in one place.
- `.grid-auto` — one column on phones, two from 760px up (the original desktop layout).
  `/hobbies` uses its own 1 / 2 / 3-column grid because it has five cards.

Headings use `clamp()` rather than fixed pixel sizes, and rows that sit side by side on desktop
(nav links, resume job title + dates, the home footer) are `flex-wrap: wrap`.

## Contact form
`/contact` posts to [Formspree](https://formspree.io). To make it deliver mail:

1. Create a free account, add a form, and point it at `bolajidaniels.ilori@gmail.com`.
2. Copy the form ID — the part after `/f/` in the endpoint URL (e.g. `xdorwqzy`).
3. Set it as an env var wherever the site runs:
   ```
   NUXT_PUBLIC_FORMSPREE_ID=xdorwqzy
   ```
   Locally, put that line in a `.env` file. On Vercel/Netlify/Cloudflare, add it in the project's
   environment-variable settings and redeploy.
4. Confirm the address in the email Formspree sends, then submit the live form once to verify.

The ID is public by design (it ships in the client bundle) — it is not a secret. Until it is set,
the form refuses to submit and shows a mailto fallback rather than falsely claiming success.
A hidden `_gotcha` honeypot field handles basic spam bots.

## Still needed before shipping
- Real project screenshots (currently striped placeholders)
- Personalised hobby blurbs in `composables/useHobbies.ts` (mine are generic placeholders)
- Real URLs for the `href="#"` GitHub/X links in `pages/index.vue` and `pages/contact.vue`
- An OG share image (`public/`) — the logo in `components/LogoMark.vue` is a good starting point
- Real blog post bodies (`content/blog/*.md` — remove each `::draft-notice` block once rewritten)
