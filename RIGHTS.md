# Rights

This repository is the public preservation mirror of lukefwalton.com. The
canonical, authoritative record is https://lukefwalton.com. The mirror is
generated from the site's private source repository and refreshed by CI
whenever the site changes. Zenodo releases are intentional, versioned
snapshots of it, cut by hand and never on every sync (see README.md for the
DOI).

## What the mirror contains

- Dependency-free text and metadata records: verbatim Markdown and plain HTML
  for every published song, album, essay, letter, publication, interview and
  podcast episode page, plus `catalog.json`, `manifest.json`, and the surface
  records under `pages/` (normalized summaries of the site's identity pages
  such as /about/, /press-kit/, /cv/, /with/ and /folklore/, with the static
  prose of each page extracted from its source).
- The public entity network (`entity-network.json`, `.jsonld`, `.html`):
  the shared identifiers that tie Luke F. Walton, his projects, organizations,
  works and the fictional canon together across sites.
- Media binaries whose preservation policy allows copying: Luke-controlled
  photographs, cover art and graphics, FEiN material, artwork commissioned for
  Luke-controlled releases, Luke's papers and CV, the few audio and video
  masters he controls, and first-party brand assets. Every copied file is
  listed in `assets.json` with its checksum, size, media type, rights status,
  archive policy, provenance and the records that reference it.
- Public-internet evidentiary captures: screenshots and archive copies of
  credit panes, playlist placements, charts, press, social posts, listings and
  platform records. These are retained as documentary evidence of public
  claims, the way a library keeps a clipping or a web archive keeps a capture.
  They are marked `third-party` / `include-as-evidence` in `assets.json`,
  carry their source URL and attribution where known, and are not relicensed.

Some assets the site references are deliberately not copied here: client and
collaborator album artwork, third-party professional photography, masters
whose redistribution rights are not documented, and material whose status is
not yet settled. For those, `assets.json` records the canonical URL, checksum,
size, rights status and the reason the file is not replicated. The absence of
a binary is a policy decision, not missing data.

## Record-level Zenodo classification

Zenodo's license field is one value for the whole deposit. This archive is
mixed-rights, so that field is `other-closed` ("Other (Not Open)"). That is a
record-level conservative rights classification. It is not the license of
every contained work, and it does not mean none of this may be reused. The
field is too coarse to say anything more truthful, and a blank license would
be stored as CC0.

Luke F. Walton's original material is CC BY-NC-ND 4.0. Third-party evidence
remains owned by its respective rights holders and is not licensed under
those terms. Copyright: © Luke F. Walton for original material. Third-party
evidence remains with its respective rights holders.

The distinctions below, and the per-file statuses in `assets.json`, are the
authority. The Zenodo field is only the coarse classification the deposit
can preserve.

## Copyright and licenses

This is a mixed-rights archive. The per-file statuses in `assets.json` are the
operative record; the rules that produce them are documented in the source
repository (`docs/preservation.md`) and summarized in README.md here.

- Original material by Luke F. Walton (prose, lyrics he wrote, metadata,
  archive structure, his own photographs and recordings) is licensed under
  [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
  International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
  unless a record states otherwise. He keeps the copyright. You may read,
  cite, quote and share that material verbatim with attribution for
  non-commercial purposes without asking. Fair use and fair dealing (brief
  quotation for commentary, criticism, news reporting or scholarship) are
  unaffected.
- Material Luke controls jointly with others (for example FEiN, his duo with
  Brandon Woodward, or Love Music More, co-owned with Beformer) is preserved
  with that status recorded. No license is granted on behalf of the other
  party.
- Works marked `work-for-hire` were commissioned for Luke-controlled projects
  (for example cover art by Grizzard Graphics). The credit stays with the
  artist.
- Third-party material (artwork by other artists, photographs by named
  photographers, press, platform captures, quoted or excerpted text) remains
  the copyright of its respective owners. It is included only as part of the
  public website archive and is not relicensed. No ownership, license or
  permission is claimed over it.
- Where the rights status is recorded as `unknown`, nothing is claimed. The
  item is held as archive material.

The CC BY-NC-ND grant above applies only to Luke's original material. It does
not extend to any third-party or jointly held material in this archive.

## Takedown

If you hold rights in material captured here and want it removed, use the
contact on https://lukefwalton.com/press-kit/. Removal is handled as an
exception at the source, not by editing this generated repository by hand.
