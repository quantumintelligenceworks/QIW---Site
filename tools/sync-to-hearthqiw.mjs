// Copy this site into a local clone of hearth-qiw/site, the repo that serves hearthqiw.online.
// Usage: node tools/sync-to-hearthqiw.mjs <path-to-hearth-qiw-site-clone>
// Copies only the public site; keeps the target's CNAME, .nojekyll and README.md.
// It never commits or pushes: review the diff, then commit and push yourself (Chase's OK first:
// the main branch of hearth-qiw/site is the live public site).
import { cpSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2];
if (!target || !existsSync(join(target, 'CNAME'))) {
  console.error('Give the path to a clone of hearth-qiw/site (it must contain CNAME).');
  process.exit(1);
}
const PUBLIC = [
  'index.html', 'services.html', 'contact.html', '404.html', 'robots.txt', 'sitemap.xml',
  'assets', 'styles', 'hearth', 'privacy', 'terms', 'support',
];
for (const p of PUBLIC) {
  const from = join(SITE, p);
  if (!existsSync(from)) throw new Error(`missing ${p}`);
  cpSync(from, join(target, p), { recursive: statSync(from).isDirectory() });
}
console.log(`Copied ${PUBLIC.length} items into ${target}. Next: git -C "${target}" status`);
