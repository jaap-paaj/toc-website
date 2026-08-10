/* eslint-disable */
/**
 * Audit: Locale Pairs
 *
 * Every page on this site is a Dutch page with an English translation. That
 * used to be enforced by the filesystem: a blog post was one folder name shared
 * by both locales, so a pair either existed or the URL did not.
 *
 * Translatable slugs replace that structural guarantee with a convention. This
 * audit puts the guarantee back. Without it, the first unpaired post ships an
 * hreflang pointing at a 404 and nothing says a word.
 *
 * Four rules:
 *   1. Every key exists in both locales.
 *   2. No two posts share a slug within one locale.
 *   3. No slug collides with a retired URL that now redirects.
 *   4. Slugs are URL-safe.
 */
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const LOCALES = ['nl', 'en'];
const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// -- READING --

/** The frontmatter block, without pulling in a YAML parser for two fields. */
function frontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    return match ? match[1] : '';
}

function scalar(block, field) {
    const match = block.match(new RegExp(`^${field}:[ \\t]*(.+)$`, 'm'));
    if (!match) return '';
    return match[1].trim().replace(/^['"]|['"]$/g, '');
}

/** Inline (`[a, b]`) or block (`- a`) list, both of which gray-matter accepts. */
function list(block, field) {
    const inline = block.match(new RegExp(`^${field}:[ \\t]*\\[(.*)\\]$`, 'm'));
    if (inline) {
        return inline[1]
            .split(',')
            .map((v) => v.trim().replace(/^['"]|['"]$/g, ''))
            .filter(Boolean);
    }

    const start = block.match(new RegExp(`^${field}:[ \\t]*$`, 'm'));
    if (!start) return [];

    const items = [];
    for (const line of block.slice(start.index + start[0].length).split('\n')) {
        const item = line.match(/^[ \t]*-[ \t]*(.+)$/);
        if (!item) break;
        items.push(item[1].trim().replace(/^['"]|['"]$/g, ''));
    }
    return items;
}

function readPosts(locale) {
    const dir = path.join(BLOG_DIR, locale);
    if (!fs.existsSync(dir)) return [];

    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .filter((key) => fs.existsSync(path.join(dir, key, 'post.md')))
        .map((key) => {
            const block = frontmatter(
                fs.readFileSync(path.join(dir, key, 'post.md'), 'utf-8')
            );
            return {
                key,
                slug: scalar(block, 'slug') || key,
                previousSlugs: list(block, 'previousSlugs'),
            };
        });
}

/**
 * URLs that now 301 somewhere else, and must therefore never be handed to a
 * new post. Derived exactly the way next.config.ts derives the redirects, so
 * the two can never disagree.
 */
function redirectSources(posts) {
    const sources = new Map();

    for (const post of posts) {
        const retired = [...post.previousSlugs];
        if (post.slug !== post.key) retired.push(post.key);
        for (const source of retired) sources.set(source, post);
    }

    return sources;
}

// -- RULES --

const violations = [];

function report(rule, message) {
    violations.push({ rule, message });
}

const byLocale = Object.fromEntries(LOCALES.map((l) => [l, readPosts(l)]));

// Rule 1 — every key exists in both locales.
for (const locale of LOCALES) {
    const others = LOCALES.filter((l) => l !== locale);
    for (const post of byLocale[locale]) {
        for (const other of others) {
            if (!byLocale[other].some((p) => p.key === post.key)) {
                report(
                    'PAIR',
                    `content/blog/${locale}/${post.key}/ has no ${other.toUpperCase()} counterpart. ` +
                        `Every page exists in both locales; without the pair, hreflang points at a 404.`
                );
            }
        }
    }
}

for (const locale of LOCALES) {
    const posts = byLocale[locale];

    // Rule 2 — no two posts share a slug within one locale.
    const seen = new Map();
    for (const post of posts) {
        const owner = seen.get(post.slug);
        if (owner) {
            report(
                'DUPLICATE',
                `content/blog/${locale}/${post.key}/ and .../${owner}/ both claim the slug "${post.slug}". ` +
                    `One of them is unreachable.`
            );
        }
        seen.set(post.slug, post.key);
    }

    // Rule 3 — no slug collides with a URL that now redirects.
    const retired = redirectSources(posts);
    for (const post of posts) {
        const owner = retired.get(post.slug);
        if (owner && owner.key !== post.key) {
            report(
                'REDIRECT',
                `content/blog/${locale}/${post.key}/ claims the slug "${post.slug}", but /${locale}/blog/${post.slug} ` +
                    `already 301s to /${locale}/blog/${owner.slug} (retired by content/blog/${locale}/${owner.key}/). ` +
                    `The redirect wins and this post is unreachable — with a 200 on another page, so nothing looks broken.`
            );
        }
    }

    // Rule 4 — slugs are URL-safe.
    for (const post of posts) {
        for (const slug of [post.slug, ...post.previousSlugs]) {
            if (!SAFE_SLUG.test(slug)) {
                report(
                    'SHAPE',
                    `content/blog/${locale}/${post.key}/ uses the slug "${slug}". ` +
                        `Lowercase letters, digits and single hyphens only — no accents, spaces or capitals.`
                );
            }
        }
    }
}

// -- MAIN EXECUTION --

console.log('🛡️  Audit: Locale Pairs');
console.log('-------------------------------------------');

console.log(`\n📊 Blog posts:`);
for (const locale of LOCALES) {
    const posts = byLocale[locale];
    const translated = posts.filter((p) => p.slug !== p.key).length;
    console.log(
        `   ${locale.toUpperCase()}: ${posts.length} posts, ${translated} with a translated slug`
    );
}

if (violations.length > 0) {
    console.error(`\n❌ FAILED: Found ${violations.length} violations.\n`);
    violations.forEach((v) => {
        console.error(`   [${v.rule}] ${v.message}\n`);
    });
    process.exit(1);
} else {
    console.log(`\n✅ PASSED: Every post is paired and every slug is reachable.`);
    process.exit(0);
}
