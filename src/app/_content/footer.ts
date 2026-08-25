import type { Locale } from "@/lib/i18n/config";
import { capabilityLinks } from "@/app/_content/navigation";

/**
 * The site's navigation footer.
 *
 * Second navigation layer for everything deliberately kept out of the header:
 * the free tools and the knowledge pages. Those are currently the least linked
 * things on the site, which is the opposite of what they should be.
 */

/** The shape every page-specific closing CTA has to satisfy. */
export interface FooterCtaContent {
    title: string | readonly string[];
    cta: { label: string; href: string };
    secondaryAction?: { prefix: string; label: string; href: string };
    panelTitle?: string;
    panelBody: string;
}

/**
 * The closing call to action every page ends on unless it overrides it.
 *
 * It lived in home.ts while the home page was the only caller. Fourteen pages
 * use it now, so it belongs with the rest of the footer.
 */
export const footerCta: Record<Locale, FooterCtaContent> = {
    en: {
        title: ["FIRST CONVERSATION,", "FIRST DIRECTION"],
        cta: { label: "GET IN TOUCH", href: "/contact" },
        panelTitle: "",
        panelBody:
            "After one conversation you'll know where the biggest opportunities are and the smallest first step to prove them.",
    },
    nl: {
        title: ["EERSTE GESPREK,", "EERSTE RICHTING"],
        cta: { label: "NEEM CONTACT OP", href: "/contact" },
        panelTitle: "",
        panelBody:
            "Na een gesprek weet je waar de grootste kansen liggen en wat de kleinste eerste stap is om ze te bewijzen.",
    },
};

/**
 * The dominant block, left of the three secondary columns.
 *
 * The three capabilities, not a fourth link list: they are the spine the header
 * already navigates on, so the footer restates the same spine at a size that
 * anchors the strip. Same source as the header, so the two cannot drift.
 */
export const footerPrimary = capabilityLinks;

const en = {
    columns: [
        {
            title: "Tools",
            links: [
                { label: "AI First Aid", href: "/ai-ehbo" },
                { label: "AI Readiness Scan", href: "/ai-readiness-scan" },
                { label: "AI Act Check", href: "/ai-act" },
            ],
        },
        {
            title: "Knowledge",
            links: [
                // Anchor text matters here: an engine matches on the words.
                { label: "Frequently asked questions about AI", href: "/vragen" },
                { label: "Blog", href: "/blog" },
                { label: "AI strategy", href: "/ai-strategie" },
                { label: "AI automation", href: "/ai-automatisering-gids" },
                { label: "AI and people", href: "/ai-en-mensen" },
                { label: "10 AI tips", href: "/10-ai-tips" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About us", href: "/about" },
                { label: "AI Opportunity Scan", href: "/ai-opportunity-scan" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ],
};

const nl: typeof en = {
    columns: [
        {
            title: "Tools",
            links: [
                { label: "AI EHBO", href: "/ai-ehbo" },
                { label: "AI Readiness Scan", href: "/ai-readiness-scan" },
                { label: "AI Act Check", href: "/ai-act" },
            ],
        },
        {
            title: "Kennis",
            links: [
                { label: "Veelgestelde vragen over AI", href: "/vragen" },
                { label: "Blog", href: "/blog" },
                { label: "AI-strategie", href: "/ai-strategie" },
                { label: "AI-automatisering", href: "/ai-automatisering-gids" },
                { label: "AI en mensen", href: "/ai-en-mensen" },
                { label: "10 AI-tips", href: "/10-ai-tips" },
            ],
        },
        {
            title: "Bedrijf",
            links: [
                { label: "Over ons", href: "/about" },
                { label: "AI Opportunity Scan", href: "/ai-opportunity-scan" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ],
};

/**
 * No registry line here on purpose. The company details are stated once, on the
 * contact page, where the address can be labelled for what it is. The Company
 * column links there.
 */
export const footerContent: Record<Locale, typeof en> = { en, nl };

/**
 * The legal strip under the columns: the privacy statement, and the control
 * that reopens the cookie banner. The AVG asks that consent stays revocable —
 * this link is where that promise in the privacy statement ("via the cookie
 * settings at the bottom of the site") is kept.
 */
const legalEn = {
    privacy: { label: "Privacy statement", href: "/privacy" },
    cookieSettings: "Cookie settings",
};

const legalNl: typeof legalEn = {
    privacy: { label: "Privacyverklaring", href: "/privacy" },
    cookieSettings: "Cookie-instellingen",
};

export const footerLegal: Record<Locale, typeof legalEn> = {
    en: legalEn,
    nl: legalNl,
};
