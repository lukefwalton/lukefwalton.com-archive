# Durable archive

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20683155.svg)](https://doi.org/10.5281/zenodo.20683155)

This is a **self-contained, dependency-free archive** of the canonical content
on [lukefwalton.com](https://lukefwalton.com). It exists so the information
survives independently of Astro, Vercel, npm, or any build tooling.

It is **published automatically by CI** from the private source repository on
every content change. **Do not edit files here by hand** — they are regenerated
and overwritten. The canonical source is the markdown under `src/content/` and
the data modules under `src/lib/` in the source repo.

## What's here

- `<collection>/<slug>.md` — raw markdown, copied verbatim (record kind `collection`; the true source of truth).
- `<collection>/<slug>.html` — plain semantic HTML with embedded JSON-LD, no CSS/JS.
- `interviews/<slug>.md|html` with record kind `publisher-stub` — citation stubs for publisher-hosted interviews indexed on /interviews/; their canonical is the publisher's URL.
- `pages/<path>.html|md` — record kind `surface`: archival copies of the site's identity pages (static prose extracted from the page source plus the structured fact-list record).
- `entity-network.json|jsonld|html` — the public entity registry and its JSON-LD graph.
- `writing/<slug>.pdf` — mirrored PDFs for the academic papers.
- `a-new-word-every-day/`, `audio/`, `brand/`, `evidence/`, `photos/`, `private-workout-logger/`, `stop-political-spam-texts/`, `video/` — media copied byte-identical at the same paths they have on https://lukefwalton.com.
- `assets.json` / `assets.html` — one row per public media file: rights status, archive policy and its reason, size, SHA-256, media type, canonical URL, and the records that reference it.
- `catalog.json` / `catalog.jsonl` — machine-legible index of every record (`recordKind`: collection / publisher-stub / surface).
- `manifest.json` — provenance (canonical site, source commit, record and asset counts, link policy).
- `index.html` — a flat directory of everything.
- `llms.txt` — a machine-readable pointer for answer engines.

## Canonical direction

This archive is a **mirror**, not the source. Every HTML page (and `index.html`)
declares `rel=canonical` back to its page on [lukefwalton.com](https://lukefwalton.com),
so search engines and answer engines consolidate authority on the canonical
domain while this copy stays a durable, citable fallback.

## Links

Links to archived records and copied assets are relative; links to anything not in this archive point at the canonical site. The archive therefore reads the same from GitHub Pages, from a
Zenodo download, or from a local checkout.

## Media and rights

Media binaries are copied only when their recorded archive policy allows it:
Luke F. Walton's own and controlled material, FEiN material (jointly controlled
with Brandon Woodward), artwork commissioned as work-for-hire, and public-internet
evidentiary captures (screenshots of posts, chart pages and credit panes, kept as
receipts). Some referenced assets are intentionally metadata-only; their row in
`assets.json` records the reason, the file's size and SHA-256, and its canonical
URL. A missing binary is a policy decision, not missing data.

This is a mixed-rights archive. Luke F. Walton's original material is CC BY-NC-ND 4.0; he keeps the copyright. Third-party evidence remains owned by its respective rights holders and is not licensed under those terms. Evidence captures are receipts, not relicensed. The Zenodo license field is a record-level conservative rights classification (`other-closed`), not the license of every contained work. Copyright: © Luke F. Walton for original material. Third-party evidence remains with its respective rights holders. Rights terms are in `RIGHTS.md` in the published mirror.

## Mirror and releases

The GitHub mirror is a frequently refreshed copy, regenerated on every change to the source. Zenodo releases are intentional, citable snapshots of it, each with its own version DOI.

## Contents

- **songs**: 404
- **albums**: 36
- **writing**: 6
- **letters**: 4
- **publications**: 1
- **interviews**: 30
- **lmm-episodes**: 226
- **lmm-essays**: 4
- **pages** (identity surfaces): 174
- **media assets**: 371 included, 271 evidence captures, 53 metadata-only, 0 excluded (204,803,289 bytes copied)

## Citation

Archived on [Zenodo](https://doi.org/10.5281/zenodo.20683155). The DOI badge above is the
**concept DOI** — it always resolves to the latest version; each release also gets
its own version DOI. The Zenodo license field is a record-level conservative rights classification, not the license of every file. Citation metadata is in `CITATION.cff`; rights terms are in
`RIGHTS.md`.

## Durability contract

The build step uses one small library (`js-yaml`) to parse frontmatter. That
dependency lives only in the generator. The **artifacts above have no
dependencies** — if the generator ever breaks, the committed archive still
stands. Drafts are never archived.
