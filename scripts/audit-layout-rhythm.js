const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BAN_REGEX = /(?:^|\s)(?:p[trblxy]?|m[trblxy]?|gap)-(?:\$begin:math:display$\.\*\?\\$end:math:display$|\d+)(?:\s|$)/;
const RESPONSIVE_PREFIX = /^(?:sm:|md:|lg:|xl:|2xl:)?/;
const CONTAINER_CHECK = /container\s+mx-auto/;

const SCOPE_GLOB = 'src/app/_components/**/modules/**/*.tsx';
const ALLOWLIST_PATH = 'audit.allowlist.layout-rhythm.json';

let allowlist = [];
if (fs.existsSync(ALLOWLIST_PATH)) {
    try {
        allowlist = JSON.parse(fs.readFileSync(ALLOWLIST_PATH, 'utf8'));
    } catch (e) {
        console.error('Failed to parse allowlist:', e);
    }
}

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let errors = [];

    // Check allowlist
    const relativePath = path.relative(process.cwd(), filePath);
    const allowed = allowlist.filter(entry => entry.path === relativePath);

    lines.forEach((line, index) => {
        // Simple heuristic: check lines with className="..." or className={...}
        if (!line.includes('className')) return;

        // Extract class strings (simple regex, not a full parser)
        const classMatch = line.match(/className=["']([^"']+)["']/);
        if (classMatch) {
            const classes = classMatch[1].split(/\s+/);

            // Check for Banned Utilities
            classes.forEach(cls => {
                if (RESPONSIVE_PREFIX.test(cls)) {
                    const core = cls.replace(RESPONSIVE_PREFIX, '');
                    if (BAN_REGEX.test(core)) {
                        // Check specific allowlist rule
                        const isAllowed = allowed.some(a => a.rule === 'outer-rhythm');
                        if (!isAllowed) {
                            errors.push({ line: index + 1, msg: `Banned rhythm utility: ${cls}`, rule: 'outer-rhythm' });
                        }
                    }
                }
            });

            // Check for Double Container
            if (CONTAINER_CHECK.test(classMatch[1])) {
                const isAllowed = allowed.some(a => a.rule === 'double-container');
                if (!isAllowed) {
                    errors.push({ line: index + 1, msg: `Double container detected: container mx-auto`, rule: 'double-container' });
                }
            }
        }
    });

    return errors;
}

const files = glob.sync(SCOPE_GLOB, { ignore: '**/node_modules/**' });
let totalErrors = 0;

console.log(`\n🛡️  Audit: Layout Rhythm (Module Scope)`);
console.log(`-------------------------------------------`);

files.forEach(file => {
    const errors = checkFile(file);
    if (errors.length > 0) {
        console.log(`\n❌ ${path.relative(process.cwd(), file)}`);
        errors.forEach(err => {
            console.log(`   Line ${err.line}: ${err.msg}`);
        });
        totalErrors += errors.length;
    }
});

if (totalErrors > 0) {
    console.log(`\n💥 FAILED: ${totalErrors} rhythm violations found.`);
    console.log(`   Modules must not own outer rhythm (p/m/gap) or containers.`);
    console.log(`   Use HomeModule props (pad, gap) or delegate to Sections.`);
    process.exit(1);
} else {
    console.log(`\n✅ PASSED: No layout rhythm violations found.`);
}
