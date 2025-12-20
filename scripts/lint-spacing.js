/* eslint-disable */
const fs = require('fs');
const path = require('path');

const TARGET_DIRS = ['src/app', 'src/components'];
const ALLOWLIST = [
    // All files migrated. Exceptions handled via inline disable.
];

// Regex patterns to match banned classes
// Matches space-y-*, mt-*, mb-*, my-*
// We want to catch class names, so we look for these strings.
// Note: This is a rough scan, it might catch comments or strings not used as classes.
const BANNED_PATTERNS = [
    { regex: /\bspace-y-\d+|space-y-\[/g, message: 'Avoid space-y-*, use gap-based stack tokens instead.' },
    { regex: /\b(mt|mb|my)-\d+|(mt|mb|my)-\[/g, message: 'Avoid ad-hoc vertical margins (mt, mb, my). Use gap on parent or specific exception.' },
];

let hasErrors = false;

function scanDirectory(directory) {
    if (!fs.existsSync(directory)) return;

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else if (stat.isFile() && /\.(tsx|ts|js|jsx)$/.test(file)) {
            checkFile(fullPath);
        }
    }
}

function checkFile(filePath) {
    // Check allowlist (relative path)
    const relativePath = path.relative(process.cwd(), filePath);
    if (ALLOWLIST.includes(relativePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        // Simple check for inline disable comment
        if (line.includes('// lint:spacing-disable-line')) return;

        BANNED_PATTERNS.forEach(pattern => {
            const matches = line.match(pattern.regex);
            if (matches) {
                matches.forEach(match => {
                    console.error(`ERROR: ${relativePath}:${index + 1}: Found banned pattern "${match}". ${pattern.message}`);
                    hasErrors = true;
                });
            }
        });
    });
}

console.log('Running Spacing Guardrails...');
TARGET_DIRS.forEach(dir => scanDirectory(path.join(process.cwd(), dir)));

if (hasErrors) {
    console.error('\nSpacing check failed. Please fix the errors above or add `// lint:spacing-disable-line` if this is a valid exception.');
    process.exit(1);
} else {
    console.log('Spacing check passed!');
    process.exit(0);
}
