#!/usr/bin/env node
/* eslint-disable */
/**
 * Audit: Footer Coverage
 *
 * Every public route either ends on SiteFooterModule or is named below as a
 * deliberate exception. Nothing else guards this, and "does this page have a
 * footer?" turned out to be a question nobody could answer from memory.
 *
 * A route counts as covered when SiteFooterModule appears in its page.tsx or in
 * any *Page.tsx component that page.tsx renders.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src", "app");
const LANG_DIR = path.join(ROOT, "[lang]");
const COMPONENTS = path.join(ROOT, "_components");
const MODULE = "SiteFooterModule";

/**
 * Routes that deliberately end without a footer: the four tool entry points.
 * A visitor mid-conversation should not be offered an exit.
 *
 * Adding a route here is a design decision. Write down why.
 */
const NO_FOOTER = [
    "/ai-ehbo/chat", // in the middle of the first-aid conversation
    "/ai-first-aid/chat", // the same conversation, English route
    "/ai-readiness-scan/chat", // in the middle of the scan conversation
    "/ai-act/check", // in the middle of the wizard
    "/ai-opportunity-scan/book", // on the booking calendar
];

function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, out);
        else if (entry.name === "page.tsx") out.push(full);
    }
    return out;
}

function routeOf(file) {
    const rel = path.relative(LANG_DIR, path.dirname(file));
    return rel === "" ? "/" : "/" + rel.split(path.sep).join("/");
}

/** page.tsx often only composes a *Page component; follow one hop into it. */
function rendersFooter(file) {
    const src = fs.readFileSync(file, "utf8");
    if (src.includes(MODULE)) return true;

    for (const match of src.matchAll(/<([A-Z][A-Za-z0-9]*Page)\b/g)) {
        const component = match[1];
        const found = findComponentFile(component);
        if (found && fs.readFileSync(found, "utf8").includes(MODULE)) return true;
    }
    return false;
}

function findComponentFile(name) {
    const stack = [COMPONENTS];
    while (stack.length) {
        const dir = stack.pop();
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) stack.push(full);
            else if (entry.name === `${name}.tsx`) return full;
        }
    }
    return null;
}

console.log("\n🛡️  Audit: Footer Coverage");
console.log("-------------------------------------------\n");

const pages = walk(LANG_DIR);
const missing = [];
const covered = [];
const exempt = [];

for (const file of pages) {
    const route = routeOf(file);
    const has = rendersFooter(file);
    const allowed = NO_FOOTER.includes(route);

    if (allowed && has) {
        missing.push(`${route} — listed as footer-less but renders ${MODULE}`);
    } else if (allowed) {
        exempt.push(route);
    } else if (has) {
        covered.push(route);
    } else {
        missing.push(`${route} — no ${MODULE}, and not on the exception list`);
    }
}

const stale = NO_FOOTER.filter((r) => !pages.some((f) => routeOf(f) === r));
for (const route of stale) {
    missing.push(`${route} — on the exception list but the route no longer exists`);
}

/**
 * The module owns the space above the band. A page that wraps it in a spacing
 * module of its own doubles that, which silently breaks the symmetry between
 * the space above the band and the space from the band down to the first link.
 */
const WRAPPED = new RegExp(
    `<HomeModule[^>]*?(pad|padTop)=[^>]*?>\\s*<${MODULE}\\b`,
    "s",
);
const allSources = [...pages, ...walkComponents()];
for (const file of allSources) {
    const src = fs.readFileSync(file, "utf8");
    if (WRAPPED.test(src)) {
        missing.push(
            `${path.relative(path.join(__dirname, ".."), file)} — wraps <${MODULE} /> ` +
                `in a padded HomeModule; the module brings its own top spacing`,
        );
    }
}

function walkComponents(dir = COMPONENTS, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walkComponents(full, out);
        else if (entry.name.endsWith(".tsx")) out.push(full);
    }
    return out;
}

console.log(`📊 Routes: ${pages.length}`);
console.log(`   With footer:  ${covered.length}`);
console.log(`   Deliberately without: ${exempt.length} (${exempt.join(", ")})\n`);

if (missing.length) {
    console.error("❌ FAILED:\n");
    for (const line of missing) console.error(`   ${line}`);
    console.error(
        `\n   Render <${MODULE} /> on the page, or add the route to NO_FOOTER in ` +
            `scripts/audit-footer.js with a reason.\n`,
    );
    process.exit(1);
}

console.log("✅ PASSED: Every route is accounted for.\n");
