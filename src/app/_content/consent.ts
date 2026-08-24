import type { Locale } from "@/lib/i18n/config";

/**
 * The cookie banner's copy.
 *
 * The banner exists for one cookie decision: Google Analytics. Declining is a
 * full answer, which is why both buttons sit side by side in the same layer —
 * the AVG asks that refusing costs no more clicks than accepting.
 */
const en = {
    ariaLabel: "Cookie consent",
    message:
        "We use cookies to measure how this site is used, only if you allow it. Strictly necessary cookies are always set.",
    privacyLabel: "Privacy statement",
    accept: "Accept",
    decline: "Decline",
};

const nl: typeof en = {
    ariaLabel: "Cookietoestemming",
    message:
        "Wij gebruiken cookies om te meten hoe de site gebruikt wordt, alleen als jij dat goed vindt. Strikt noodzakelijke cookies plaatsen we altijd.",
    privacyLabel: "Privacyverklaring",
    accept: "Accepteren",
    decline: "Weigeren",
};

export const consentContent: Record<Locale, typeof en> = { en, nl };
