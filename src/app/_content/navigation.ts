import type { Locale } from "@/lib/i18n/config";

export interface NavLink {
    label: string;
    href: string;
}

/**
 * The three capabilities. The site's spine.
 *
 * One list, because the header navigates on it and the footer restates it. They
 * drifted apart once already — the same six lines lived in Header.tsx and in
 * footer.ts, and nothing would have caught it if one of them had changed.
 *
 * Same wording in both locales: these are the names of the offer, not copy.
 */
export const capabilityLinks: Record<Locale, NavLink[]> = {
    en: [
        { label: "Educate", href: "/educate" },
        { label: "Automate", href: "/automate" },
        { label: "Innovate", href: "/innovate" },
    ],
    nl: [
        { label: "Educate", href: "/educate" },
        { label: "Automate", href: "/automate" },
        { label: "Innovate", href: "/innovate" },
    ],
};

/** What the header shows: the spine plus the about page. */
export const headerLinks: Record<Locale, NavLink[]> = {
    en: [...capabilityLinks.en, { label: "About us", href: "/about" }],
    nl: [...capabilityLinks.nl, { label: "Over ons", href: "/about" }],
};

export const headerCta: NavLink = { label: "Contact", href: "/contact" };
