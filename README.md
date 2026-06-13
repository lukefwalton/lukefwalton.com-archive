# Durable archive

This is a **self-contained, dependency-free archive** of the canonical content
on [lukefwalton.com](https://lukefwalton.com). It exists so the information
survives independently of Astro, Vercel, npm, or any build tooling.

It is **published automatically by CI** from the private source repository on
every content change. **Do not edit files here by hand** — they are regenerated
and overwritten. The canonical source is the markdown under `src/content/` in
the source repo.

## What's here

For every published record:

- `<collection>/<slug>.md` — the raw markdown, copied verbatim. The true
  source of truth; readable with `cat` forever.
- `<collection>/<slug>.html` — plain semantic HTML, no CSS or JavaScript,
  with embedded JSON-LD. Readable in any browser with zero tooling, and a clean
  capture target for the Wayback Machine.
- `catalog.json` / `catalog.jsonl` — a machine-legible index of every record
  with full metadata. The "museum catalog."
- `index.html` — a flat directory of everything.

## Contents

- **songs**: 380
- **albums**: 28
- **writing**: 4
- **letters**: 3
- **publications**: 2
- **lmm-episodes**: 210

## Durability contract

The build step uses one small library (`js-yaml`) to parse frontmatter. That
dependency lives only in the generator. The **artifacts above have no
dependencies** — if the generator ever breaks, the committed archive still
stands. Drafts are never archived.
