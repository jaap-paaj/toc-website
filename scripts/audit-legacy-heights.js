/* eslint-disable */
const fs = require('fs');
const path = require('path');

// -- CANON-EXACT RULES --
// 1. GLOBAL BAN: min-h-[14rem] anywhere in src (Known Legacy Offender)
// 2. SURFACES BAN: Any min-h-* in src/design-system/tokens/surfaces.ts (Style-only contract)
// 3. ALLOWED: Other min-h-* usages are permitted (governed by audit:card-canon separately)

const LEGACY_14REM_REGEX = /min-h-\[14rem\]/;
const ANY_MIN_H_REGEX = /min-h-/;

const VIOLATIONS = [];

function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Rule 1: Global Ban on min-h-[14rem]
    if (LEGACY_14REM_REGEX.test(content)) {
        VIOLATIONS.push({
            file: relativePath,
            message: 'STRICT BAN: Found legacy min-h-[14rem]. Usage forbidden globally.'
        });
    }

    // Rule 2: Surfaces.ts must be style-only (no size rules)
    if (relativePath === 'src/design-system/tokens/surfaces.ts') {
        if (ANY_MIN_H_REGEX.test(content)) {
            VIOLATIONS.push({
                file: relativePath,
                message: 'STRICT BAN: Found min-height in surfaces.ts. Surfaces must be style-only (bg, shadow, border).'
            });
        }
    }
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.match(/\.(tsx?|ts|js|jsx)$/)) {
            scanFile(filePath);
        }
    }
}

console.log('🛡️  Audit: Legacy Heights Lock (Canon-Exact)');
walkDir('src');

if (VIOLATIONS.length > 0) {
    console.error(`\n❌ FAILED: Found ${VIOLATIONS.length} legacy height violations.\n`);
    VIOLATIONS.forEach(v => {
        console.error(`   ${v.file}: ${v.message}`);
    });
    process.exit(1);
} else {
    console.log('✅ PASSED: System is clean of legacy 14rem hacks.');
}
