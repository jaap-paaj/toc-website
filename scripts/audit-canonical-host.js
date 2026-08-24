/* eslint-disable */
/**
 * Audit: Canonical Host
 *
 * Every canonical, hreflang, og:url and sitemap entry has to name the host that
 * serves. The apex redirects to www, so a URL naming the apex tells a search
 * engine the real version lives at an address that answers with a redirect —
 * and neither address gets indexed.
 *
 * That is not a hypothetical: seventeen files each declared the origin
 * separately, all naming the apex, and Search Console reported 157 pages
 * unindexed against 71 indexed. The origin now lives in src/lib/site.ts. This
 * audit is what stops the eighteenth copy — including one that names www, since
 * a second correct copy is still a second place to get it wrong later.
 */
const fs = require('fs');
const path = require('path');

const HOST = 'theonlyconstant.nl';
const ORIGIN_DEFINITION = path.join('src', 'lib', 'site.ts');

/**
 * Two exemptions, because they are two different questions.
 *
 * A file may be allowed to write the origin out in full without importing it —
 * a static file has nowhere to import from. That is a style concern.
 *
 * Naming the *apex* is a correctness concern and is exempt almost nowhere: a
 * URL naming the apex is a URL pointing at a redirect. The one legitimate case
 * is an origin allowlist, which is the opposite concern — it has to recognise
 * every host a request can arrive from, rather than name the one we advertise.
 */
const MAY_HARDCODE_ORIGIN = [
    ORIGIN_DEFINITION,
    path.join('public', 'llms.txt'), // static; nothing to import from
    path.join('src', 'actions', 'contact.ts'), // CSRF origin allowlist
];

const MAY_NAME_APEX = [
    path.join('src', 'actions', 'contact.ts'), // a form can arrive from the apex
];

const SCOPE = ['src', 'public'];
const EXTENSIONS = /\.(tsx?|jsx?|mjs|json|txt|xml)$/;

const violations = [];
let scanned = 0;

function walk(dir) {
    if (!fs.existsSync(dir)) return;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
            walk(full);
            continue;
        }
        if (!EXTENSIONS.test(entry.name)) continue;

        scanned += 1;
        const lines = fs.readFileSync(full, 'utf-8').split('\n');
        const mayHardcode = MAY_HARDCODE_ORIGIN.includes(full);
        const mayNameApex = MAY_NAME_APEX.includes(full);
        const origin = new RegExp(`https?://([\\w.]*)${HOST.replace(/\./g, '\\.')}`, 'g');

        lines.forEach((line, i) => {
            for (const match of line.matchAll(origin)) {
                const isApex = match[1] === '';

                if (isApex && !mayNameApex) {
                    violations.push({
                        rule: 'APEX',
                        file: full,
                        line: i + 1,
                        code: line.trim().slice(0, 120),
                        message: `names the apex, which redirects. Use the origin from ${ORIGIN_DEFINITION}.`,
                    });
                    continue;
                }

                // A correct origin is still a second place to get it wrong later.
                if (!mayHardcode) {
                    violations.push({
                        rule: 'HARDCODED',
                        file: full,
                        line: i + 1,
                        code: line.trim().slice(0, 120),
                        message: `hardcodes the origin. Import SITE_URL or siteUrl() from ${ORIGIN_DEFINITION}.`,
                    });
                }
            }
        });
    }
}

console.log('🛡️  Audit: Canonical Host');
console.log('-------------------------------------------');

SCOPE.forEach(walk);

console.log(`\n📊 Scanned: ${scanned} files`);
console.log(`   Origin defined in: ${ORIGIN_DEFINITION}`);

if (violations.length > 0) {
    console.error(`\n❌ FAILED: Found ${violations.length} violations.\n`);
    violations.forEach((v) => {
        console.error(`   [${v.rule}] ${v.file}:${v.line}`);
        console.error(`   ${v.code}`);
        console.error(`   --> ${v.message}\n`);
    });
    process.exit(1);
} else {
    console.log('\n✅ PASSED: One origin, and it is the host that serves.');
    process.exit(0);
}
