import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        title: "CONTACT",
    },
    form: {
        eyebrow: "GET IN TOUCH",
        description: "Fill in the form and we'll get back to you shortly.",
        fields: {
            name: { label: "Name", placeholder: "Jane Doe" },
            email: { label: "Email", placeholder: "jane@example.com", error: "Please enter a valid email address." },
            message: { label: "Message", placeholder: "Tell us about your project..." },
        },
        submit: {
            label: "SEND MESSAGE",
            loading: "SENDING...",
        },
        success: {
            title: "Thanks for your message!",
            message: "We have received your inquiry and will reply within 2 business days.",
            resetLabel: "Send another message",
        }
    },
    details: {
        eyebrow: "COMPANY INFORMATION",
        description: "Here you can find our visiting address and administrative details.",
        cards: [
            {
                title: "VISITING ADDRESS",
                lines: [
                    "Kon. Wilhelminalaan 21",
                    "3818 HN Amersfoort",
                    "The Netherlands",
                ],
                mapLink: {
                    label: "View on Google Maps",
                    href: "https://www.google.com/maps/search/?api=1&query=Kon.+Wilhelminalaan+21,+3818+HN+Amersfoort",
                },
                media: {
                    type: "embed",
                    title: "Map",
                    src: "https://www.google.com/maps?&q=Kon.+Wilhelminalaan+21,+3818+HN+Amersfoort,+The+Netherlands&output=embed",
                },
            },
            {
                title: "REGISTERED ADDRESS",
                lines: [
                    "The Only Constant B.V.",
                    "Surinameplein 1 HS",
                    "1058 GL Amsterdam",
                    "The Netherlands",
                ],
                items: [
                    { label: "Chamber of Commerce (KvK)", value: "91800528" },
                    { label: "VAT (BTW)", value: "NL865775230B01" },
                    { label: "IBAN", value: "NL52 BUNQ 2100 3024 93" },
                ],
            },
        ],
    },
};

const nl: typeof en = {
    hero: {
        title: "CONTACT",
    },
    form: {
        eyebrow: "NEEM CONTACT OP",
        description: "Vul het formulier in en we nemen snel contact met je op.",
        fields: {
            name: { label: "Naam", placeholder: "Jan Jansen" },
            email: { label: "E-mail", placeholder: "jan@voorbeeld.nl", error: "Vul een geldig e-mailadres in." },
            message: { label: "Bericht", placeholder: "Vertel ons over je project..." },
        },
        submit: {
            label: "VERSTUUR BERICHT",
            loading: "VERZENDEN...",
        },
        success: {
            title: "Bedankt voor je bericht!",
            message: "We hebben je vraag ontvangen en reageren binnen 2 werkdagen.",
            resetLabel: "Nog een bericht versturen",
        }
    },
    details: {
        eyebrow: "BEDRIJFSINFORMATIE",
        description: "Hier vind je ons bezoekadres en onze bedrijfsgegevens.",
        cards: [
            {
                title: "BEZOEKADRES",
                lines: [
                    "Kon. Wilhelminalaan 21",
                    "3818 HN Amersfoort",
                    "Nederland",
                ],
                mapLink: {
                    label: "Bekijk op Google Maps",
                    href: "https://www.google.com/maps/search/?api=1&query=Kon.+Wilhelminalaan+21,+3818+HN+Amersfoort",
                },
                media: {
                    type: "embed",
                    title: "Map",
                    src: "https://www.google.com/maps?&q=Kon.+Wilhelminalaan+21,+3818+HN+Amersfoort,+The+Netherlands&output=embed",
                },
            },
            {
                title: "VESTIGINGSADRES",
                lines: [
                    "The Only Constant B.V.",
                    "Surinameplein 1 HS",
                    "1058 GL Amsterdam",
                    "Nederland",
                ],
                items: [
                    { label: "Kamer van Koophandel (KvK)", value: "91800528" },
                    { label: "Btw-nummer", value: "NL865775230B01" },
                    { label: "IBAN", value: "NL52 BUNQ 2100 3024 93" },
                ],
            },
        ],
    },
};

export const contactContent: Record<Locale, typeof en> = { en, nl };
