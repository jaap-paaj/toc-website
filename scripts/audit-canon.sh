#!/bin/bash

# ==============================================================================
# CANON AUDIT SCRIPT
# Enforces strictly strict adherence to Design System Canon (SCALES_CANON.md).
# Blocks any commit/PR that introduces:
# 1. Raw Typography utilities
# 2. Raw Radius/Shadow utilities
# 3. Hardcoded Module Vertical Spacing
# 4. Forbidden State Hacks
# ==============================================================================

EXIT_CODE=0
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo "🛡️  Running Canon Audits..."
echo "----------------------------------------"

# 1. TYPOGRAPHY AUDIT
# Ban raw text sizes, weights, leading, tracking, text-transforms.
# Exemptions: typography.ts (tokens), Typography.tsx (primitive), and markdown files.
echo "🔍 Checking Typography Leaks..."
TYPO_HITS=$(rg -n --hidden --glob '!**/.next/**' --glob '!**/node_modules/**' \
  --glob '!src/design-system/tokens/typography.ts' \
  --glob '!src/design-system/components/Typography.tsx' \
  --glob '!**/*.md' \
  '(\btext-(2?xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b|\bfont-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)\b|\bleading-|\btracking-|\buppercase\b|\blowercase\b|\bcapitalize\b)' src | grep -v "lint:allowed")

if [ -n "$TYPO_HITS" ]; then
  echo -e "${RED}❌ FAIL: Raw Typography utilities detected.${NC}"
  echo "$TYPO_HITS"
  EXIT_CODE=1
else
  echo -e "${GREEN}✅ PASS: Typography (Strict)${NC}"
fi
echo "----------------------------------------"

# 2. RADIUS & SHADOW AUDIT
# Ban raw rounded-* (except full/none) and shadow-*.
# Exemptions: globals.css, surfaces.ts.
echo "🔍 Checking Radius & Shadow Leaks..."
SURFACE_HITS=$(rg -n --hidden --glob '!**/.next/**' --glob '!**/node_modules/**' \
  --glob '!src/app/globals.css' \
  --glob '!src/design-system/tokens/surfaces.ts' \
  '(\brounded-(sm|md|lg|xl|2xl|3xl)\b|\bshadow-(sm|md|lg|xl|2xl)\b)' src | grep -v "lint:allowed")

if [ -n "$SURFACE_HITS" ]; then
  echo -e "${RED}❌ FAIL: Raw Radius/Shadow utilities detected.${NC}"
  echo "$SURFACE_HITS"
  EXIT_CODE=1
else
  echo -e "${GREEN}✅ PASS: Radius & Shadows (Strict)${NC}"
fi
echo "----------------------------------------"

# 3. MODULE VERTICAL RHYTHM AUDIT
# Ban hardcoded py/pt/pb/my/mt/mb in Modules and Sections.
# They should use spacing.modulePad tokens.
echo "🔍 Checking Module Vertical Spacing..."
# We filter out "lint:allowed" and "spacing.ts" usage (though grep normally won't catch token usage unless it looks like raw utility)
# Actually, strict grep matches "pt-10" even inside "spacing.modulePad.m". But usually tokens are imported constants.
# If code has `className="pt-10"`, it catches.
# If code has `spacing.heroFollower` (values defined in spacing.ts), grep won't see it in the component file.
SPACING_HITS=$(rg -n --hidden --glob '!**/.next/**' --glob '!**/node_modules/**' \
  '(\bpy-\d+\b|\bpt-\d+\b|\bpb-\d+\b|\bmy-\d+\b|\bmt-\d+\b|\bmb-\d+\b)' \
  src/app/_components/**/modules/*.tsx src/components/sections/*.tsx | grep -v "lint:allowed" | grep -v "py-0")

if [ -n "$SPACING_HITS" ]; then
  echo -e "${RED}❌ FAIL: Hardcoded module vertical spacing detected. Use spacing.modulePad tokens.${NC}"
  echo "$SPACING_HITS"
  EXIT_CODE=1
else
  echo -e "${GREEN}✅ PASS: Module Vertical Rhythm (Strict)${NC}"
fi
echo "----------------------------------------"

# 4. STATES HARDENING AUDIT
# Ban hover:text-white, text-white/60, and broken focus rings.
# Fixed regex to avoid look-around.
echo "🔍 Checking State Hardening..."
STATE_HITS=$(rg -n --hidden --glob '!**/.next/**' --glob '!**/node_modules/**' \
  '(hover:text-white|text-white/60|focus-visible:ring-2)' src | grep -v "lint:allowed")

if [ -n "$STATE_HITS" ]; then
  echo -e "${RED}❌ FAIL: Forbidden state utilities detected.${NC}"
  echo "$STATE_HITS"
  EXIT_CODE=1
else
  echo -e "${GREEN}✅ PASS: States Hardening (Strict)${NC}"
fi
echo "----------------------------------------"

if [ $EXIT_CODE -eq 0 ]; then
  echo -e "${GREEN}🎉 ALL CANON AUDITS PASSED.${NC}"
else
  echo -e "${RED}⛔ AUDIT FAILED. Please fix the violations above.${NC}"
fi

exit $EXIT_CODE
