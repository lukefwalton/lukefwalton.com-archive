# Durable archive

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20683155.svg)](https://doi.org/10.5281/zenodo.20683155)

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
- `writing/<slug>.pdf` — the academic papers' PDFs, mirrored alongside the
  markdown so the most load-bearing records survive on their own.
- `catalog.json` / `catalog.jsonl` — a machine-legible index of every record
  with full metadata. The "museum catalog."
- `manifest.json` — provenance header (canonical site, source commit, counts).
- `index.html` — a flat directory of everything.
- `llms.txt` — a machine-readable pointer for answer engines.

## Canonical direction

This archive is a **mirror**, not the source. Every HTML page (and `index.html`)
declares `rel=canonical` back to its page on [lukefwalton.com](https://lukefwalton.com),
so search engines and answer engines consolidate authority on the canonical
domain while this copy stays a durable, citable fallback.

## Contents

- **songs**: 380
- **albums**: 28
- **writing**: 5
- **letters**: 3
- **publications**: 1
- **interviews**: 1
- **lmm-episodes**: 210

## Citation

Archived on [Zenodo](https://doi.org/10.5281/zenodo.20683155). The DOI badge above is the
**concept DOI** — it always resolves to the latest version; each release also gets
its own version DOI. Citation metadata is in `CITATION.cff`; rights terms are in
`RIGHTS.md`.

## Durability contract

The build step uses one small library (`js-yaml`) to parse frontmatter. That
dependency lives only in the generator. The **artifacts above have no
dependencies** — if the generator ever breaks, the committed archive still
stands. Drafts are never archived.
