/* eslint-disable */
const fs = require('fs');
const path = require('path');

// -- CONFIGURATION --

const SCOPE_DIRS = [
    'src/components/cards',
    'src/components/sections',
    'src/app/_components'
];

const ALLOWLIST_PATH = 'audit.allowlist.json';

// -- RULES --

// Rule A: Raw Height Ban
const RAW_HEIGHT_REGEX = /(\s|^|{{)(min-h-|md:min-h-|style={{.*minHeight|minHeight\s*:)/;

// Rule B: cardHeight Prop Ownership
const PROP_DEF_REGEX = /cardHeight(\?)?:/;

// -- SCHEMA VALIDATION --

function validateAllowlist(allowlist) {
    if (!Array.isArray(allowlist)) {
        throw new Error('Allowlist must be an array.');
    }
    const today = new Date().toISOString().split('T')[0];

    allowlist.forEach((entry, idx) => {
        const requiredKeys = ['path', 'rule', 'rationale', 'linkedCanon', 'status'];
        const missing = requiredKeys.filter(k => !entry.hasOwnProperty(k));
        if (missing.length > 0) {
            throw new Error(`Allowlist entry #${idx} missing keys: ${missing.join(', ')}`);
        }

        // Rule Validation
        if (!['raw-min-height', 'cardHeight-ownership'].includes(entry.rule)) {
            throw new Error(`Allowlist entry #${idx} has invalid rule: ${entry.rule}`);
        }

        // Rationale Validation
        if (typeof entry.rationale !== 'string' || entry.rationale.length < 20) {
            throw new Error(`Allowlist entry #${idx} rationale too short (min 20 chars).`);
        }

        // Linked Canon Validation
        if (entry.linkedCanon !== 'CARD_CANON.md') {
            throw new Error(`Allowlist entry #${idx} must link to CARD_CANON.md.`);
        }

        // Status Validation
        if (!['accepted', 'temporary'].includes(entry.status)) {
            throw new Error(`Allowlist entry #${idx} has invalid status: ${entry.status}. Must be "accepted" or "temporary".`);
        }

        // Expiry Validation
        if (entry.status === 'temporary') {
            if (!entry.expires) {
                throw new Error(`Allowlist entry #${idx} is temporary but missing 'expires' (YYYY-MM-DD).`);
            }
            if (entry.expires < today) {
                throw new Error(`Allowlist entry #${idx} has EXPIRED on ${entry.expires}. Refactor or extend.`);
            }
        }
    });
}

// -- HELPER FUNCTIONS --

function loadAllowlist() {
    if (!fs.existsSync(ALLOWLIST_PATH)) return [];
    try {
        const data = JSON.parse(fs.readFileSync(ALLOWLIST_PATH, 'utf8'));
        validateAllowlist(data);
        return data;
    } catch (e) {
        console.error('❌ Allowlist Validation Failed:', e.message);
        process.exit(1);
    }
}

const ALLOWLIST = loadAllowlist();

function isAllowed(filePath, ruleName) {
    const relativePath = path.relative(process.cwd(), filePath);
    return ALLOWLIST.some(entry => entry.path === relativePath && entry.rule === ruleName);
}

// NO HEURISTIC EXCLUSIONS - Pure scope
function shouldScanFile(filePath) {
    return filePath.match(/\.tsx?$/);
}

const VIOLATIONS = [];
let auditedCount = 0;
let allowedCount = 0;
let allowlistHitCount = 0;

function scanFile(filePath) {
    auditedCount++;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const relativePath = path.relative(process.cwd(), filePath);
    const isSurface = relativePath === 'src/design-system/components/Surfaces.tsx';

    // Rule B: CardHeight Ownership
    if (!isSurface) {
        lines.forEach((line, index) => {
            if (PROP_DEF_REGEX.test(line)) {
                if (isAllowed(filePath, 'cardHeight-ownership')) {
                    allowlistHitCount++;
                    return;
                }
                VIOLATIONS.push({
                    file: relativePath,
                    line: index + 1,
                    rule: 'cardHeight-ownership',
                    message: 'Only Surface may define "cardHeight" prop interface.',
                    code: line.trim()
                });
            }
        });
    }

    // Rule A: Raw Height Ban
    if (isAllowed(filePath, 'raw-min-height')) {
        allowlistHitCount++;
        return;
    }

    if (relativePath.includes('tokens/')) return;

    lines.forEach((line, index) => {
        if (line.includes('min-h-screen')) {
            allowedCount++; // Implicit allow
            return;
        }

        if (RAW_HEIGHT_REGEX.test(line)) {
            VIOLATIONS.push({
                file: relativePath,
                line: index + 1,
                rule: 'raw-min-height',
                message: 'Raw min-height / minHeight is forbidden in Card domain.',
                code: line.trim()
            });
        }
    });
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (shouldScanFile(filePath)) {
            scanFile(filePath);
        }
    }
}

// -- MAIN EXECUTION --

console.log('�️  Audit: Card Canon (Governance Hardened)');
console.log('-------------------------------------------');

SCOPE_DIRS.forEach(dir => walkDir(dir));

console.log(`\n📊 Stats:`);
console.log(`   Scanned Files: ${auditedCount}`);
console.log(`   Implicit Allow: ${allowedCount} (e.g. min-h-screen)`);
console.log(`   Allowlist Hits: ${allowlistHitCount}`);

if (VIOLATIONS.length > 0) {
    console.error(`\n❌ FAILED: Found ${VIOLATIONS.length} violations.\n`);
    VIOLATIONS.forEach(v => {
        console.error(`   [${v.rule}] ${v.file}:${v.line}`);
        console.error(`   ${v.code}`);
        console.error(`   --> ${v.message}\n`);
    });
    process.exit(1);
} else {
    console.log(`\n✅ PASSED: Governance verified. No violations.`);
    process.exit(0);
}
