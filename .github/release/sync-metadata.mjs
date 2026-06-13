#!/usr/bin/env node
/**
 * Sync version-bearing metadata for an archive release tag.
 *
 * This repository is a generated content mirror with no package.json, so the
 * only version-bearing files are .zenodo.json and CITATION.cff. (Adapted from
 * answer-engine's scripts/sync-release-metadata.mjs, minus the package files.)
 *
 * Usage: node .github/release/sync-metadata.mjs <semver>
 */
import { readFileSync, writeFileSync } from 'node:fs';

const next = process.argv[2];
if (!next || !/^\d+\.\d+\.\d+$/.test(next)) {
  console.error('Usage: node .github/release/sync-metadata.mjs <semver>');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const zenodo = JSON.parse(readFileSync('.zenodo.json', 'utf8'));
zenodo.version = next;
writeFileSync('.zenodo.json', `${JSON.stringify(zenodo, null, 2)}\n`);

let cff = readFileSync('CITATION.cff', 'utf8');
// Top-level fields (column 0).
cff = cff.replace(/^version: .+$/m, `version: ${next}`);
cff = cff.replace(/^date-released: .+$/m, `date-released: "${today}"`);
// Nested fields: scope the rewrite to the preferred-citation block (which runs to
// EOF) so an indented version:/date-released: added elsewhere later can't be
// matched by accident. The verification below still fails loudly on any drift.
cff = cff.replace(/^preferred-citation:[\s\S]*$/m, (block) =>
  block
    .replace(/^(\s+version: ).+$/m, `$1${next}`)
    .replace(/^(\s+date-released: ).+$/m, `$1"${today}"`),
);

const topVersion = cff.match(/^version: (.+)$/m)?.[1];
const topDate = cff.match(/^date-released: "(.+)"$/m)?.[1];
const preferredBlock = cff.match(/^preferred-citation:[\s\S]*$/m)?.[0] ?? '';
const preferredVersion = preferredBlock.match(/^\s+version: (.+)$/m)?.[1];
const preferredDate = preferredBlock.match(/^\s+date-released: "(.+)"$/m)?.[1];

if (topVersion !== next || preferredVersion !== next) {
  throw new Error(
    `Expected version ${next} in CITATION.cff (top=${topVersion}, preferred=${preferredVersion}).`,
  );
}
if (topDate !== today || preferredDate !== today) {
  throw new Error(
    `Expected date-released ${today} in CITATION.cff (top=${topDate}, preferred=${preferredDate}).`,
  );
}

writeFileSync('CITATION.cff', cff);

console.log(`Synced archive release metadata to ${next} (${today}).`);
