/* eslint-disable */
/**
 * Audit: Page Metadata
 *
 * The sitemap is derived from the app directory, so a new page is advertised to
 * Google the moment it exists — whether or not it says which version of itself
 * is the real one. A page without a canonical, announced in the sitemap, on a
 * Search Console property that covers apex, www and preview, is how the
 * duplicate-host problem of August 2026 comes back.
 *
 * Two rules:
 *   1. Every route emits a canonical.
 *   2. A route that serves one locale is registered in the locale-path table,
 *      or the language switcher sends visitors to a path that does not exist.
 */
const fs = require('fs');
const path = require('path');

const LANG_DIR = path.join('src', 'app', '[lang]');

/** Anything that ends up calling buildAlternates. */
const CANONICAL_SOURCES = [
    'buildAlternates',
    'answersIndexMetadata',
    'answerMetadata',
    'pillarMetadata',
    'ehboMetadata',
    'ehboChatMetadata',
];

/**
 * Where the per-locale paths are declared. A route pinned to one language has
 * to appear in one of these, or nothing knows its counterpart exists.
 */
const PATH_TABLES = [
    path.join('src', 'lib', 'i18n', 'localePaths.ts'),
    path.join('src', 'app', '_content', 'vragen.ts'),
    path.join('src', 'app', '_content', 'pillar.ts'),
    path.join('src', 'app', '_content', 'ai-ehbo.ts'),
];

/** Routes with no canonical, and why that is correct. */
const NO_CANONICAL = new Set([
    // (none today — add with a reason, not to silence the audit)
]);

// -- COLLECT --

function routes(dir = LANG_DIR, prefix = '') {
    if (!fs.existsSync(dir)) return [];

    const found = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            if (entry.name === 'page.tsx') found.push({ route: prefix || '/', file: path.join(dir, 'page.tsx') });
            continue;
        }
        if (entry.name.startsWith('_') || entry.name.startsWith('(')) continue;
        found.push(...routes(path.join(dir, entry.name), `${prefix}/${entry.name}`));
    }
    return found;
}

const tables = PATH_TABLES.filter(fs.existsSync)
    .map((f) => fs.readFileSync(f, 'utf-8'))
    .join('\n');

const violations = [];
const all = routes();

for (const { route, file } of all) {
    const source = fs.readFileSync(file, 'utf-8');

    // Rule 1 — the page says which version of itself is canonical.
    const hasCanonical = CANONICAL_SOURCES.some((name) => source.includes(name));
    if (!hasCanonical && !NO_CANONICAL.has(route)) {
        violations.push({
            rule: 'CANONICAL',
            file,
            message:
                'has no canonical. Add `alternates: buildAlternates(lang, path)` to generateMetadata — ' +
                'the sitemap advertises this page either way.',
        });
    }

    // Rule 2 — a route pinned to one locale is registered as a pair.
    const pinned = source.match(/const LANG = "(nl|en)"/);
    if (pinned) {
        // A dynamic route inherits its pairing from its parent: the per-slug
        // paths are generated from the content, so registering /vragen covers
        // every /vragen/<slug> under it.
        const lookup = route.replace(/\/\[[^\]]+\]$/, '') || route;
        const registered = tables.includes(`"${lookup}"`);
        if (!registered) {
            violations.push({
                rule: 'UNPAIRED',
                file,
                message:
                    `serves ${pinned[1].toUpperCase()} only but "${lookup}" is in none of the locale-path ` +
                    `tables. The language switcher will swap the locale segment and land on a 404. ` +
                    `Register it (${PATH_TABLES.map((p) => path.basename(p)).join(', ')}).`,
            });
        }
    }
}

// -- REPORT --

console.log('🛡️  Audit: Page Metadata');
console.log('-------------------------------------------');
console.log(`\n📊 Routes: ${all.length}`);
console.log(`   Locale-pinned: ${all.filter((r) => /const LANG = "(nl|en)"/.test(fs.readFileSync(r.file, 'utf-8'))).length}`);

if (violations.length > 0) {
    console.error(`\n❌ FAILED: Found ${violations.length} violations.\n`);
    violations.forEach((v) => {
        console.error(`   [${v.rule}] ${v.file}`);
        console.error(`   --> ${v.message}\n`);
    });
    process.exit(1);
} else {
    console.log('\n✅ PASSED: Every route is canonical, and every one-language route has a counterpart.');
    process.exit(0);
}
