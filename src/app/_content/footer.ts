import type { Locale } from "@/lib/i18n/config";
import { contactContent } from "@/app/_content/contact";

/**
 * The site's navigation footer.
 *
 * Second navigation layer for everything deliberately kept out of the header:
 * the free tools and the knowledge pages. Those are currently the least linked
 * things on the site, which is the opposite of what they should be.
 */

/**
 * Interim: one link to the answer-page index, on the copyright line of the CTA
 * band. Satisfies the crawl path the pages need until the footer redesign
 * lands, which will absorb it.
 *
 * The anchor text is the question phrasing on purpose: that is what an engine
 * matches on.
 */
export const footerIndexLink: Record<Locale, { label: string; href: string }> = {
    en: { label: "Frequently asked questions about AI", href: "/vragen" },
    nl: { label: "Veelgestelde vragen over AI", href: "/vragen" },
};

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

export const footerContent: Record<Locale, typeof en> = { en, nl };

/**
 * Company details come from the contact page rather than being restated, so
 * there is one place to change the KvK number.
 */
export function footerLegal(lang: Locale): string[] {
    const address = contactContent[lang].details.cards.find(
        (card): card is Extract<typeof card, { items: unknown }> =>
            "items" in card && card.items !== undefined,
    );
    if (!address) return [];

    const name = address.lines[0];
    const place = address.lines.slice(1, 3).join(", ");
    const numbers = address.items
        .filter((item) => !item.label.toUpperCase().includes("IBAN"))
        .map((item) => `${item.label.replace(/\s*\([^)]*\)/, "")} ${item.value}`);

    return [name, place, ...numbers];
}
