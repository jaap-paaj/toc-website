import type { Locale } from "@/lib/i18n/config";
import type { ToolAnalytics, ToolEndpoints } from "@/lib/tools/types";

export const READINESS_ENDPOINTS: ToolEndpoints = {
    chat: "/api/readiness-chat",
    contact: "/api/readiness-contact",
};

/**
 * `tool` is deliberately "readiness_scan", not "readiness": the paid AI
 * Opportunity Scan already reports under "readiness". Two different products
 * under one label would make the funnel unreadable.
 */
export const READINESS_ANALYTICS: ToolAnalytics = {
    tool: "readiness_scan",
    startEvent: "scan_start",
    completionEvent: "scan_completion",
    leadEvent: "readiness_lead",
};

const en = {
    meta: {
        title: "AI Readiness Scan - The Only Constant",
        description:
            "Find out in five minutes whether your organization is ready for a first AI project. Free, no login, plan of action in your inbox.",
    },
    hero: {
        eyebrow: "AI Readiness Scan",
        title: "Is your organization ready for AI?",
        titleMuted: "Find out in five minutes.",
        description:
            "A short conversation about where you stand. Not a checkbox questionnaire, but a conversation that asks follow-up questions. You get an honest picture of where you are and a plan of action in your inbox. Free, no login.",
        cta: "Start the scan",
    },
    howItWorks: {
        eyebrow: "How it works",
        items: [
            {
                step: "01",
                duration: "5 minutes",
                title: "Tell us what is going on",
                description:
                    "Describe your organization and what you want from AI. The scan asks follow-up questions on what actually matters.",
            },
            {
                step: "02",
                title: "We check the foundation",
                description:
                    "Sponsorship, middle management, your information housekeeping, the shadow usage, the decision structure and the room to fail. Those are what decide whether a first project succeeds.",
            },
            {
                step: "03",
                title: "Plan of action",
                description:
                    "You get back where you stand, what has to happen first, and which first project fits you. In your inbox, ready to share with your team.",
            },
        ] as Array<{ step: string; duration?: string; title: string; description: string }>,
    },
    checks: {
        title: "What the scan looks at",
        items: [
            "Is there an owner with a mandate, or is AI a project of the IT department?",
            "Is middle management behind it, or does it have to be worked around?",
            "Is your information findable and current enough to point a model at?",
            "Do you know who is already using AI on a personal account?",
            "Who decides whether an experiment continues, and on what basis?",
            "Is there room to try something that turns out not to work?",
        ],
    },
    about: {
        title: "What the scan is built on",
        body: [
            "The AI Readiness Scan uses the same principles as our projects: start with the work, prove value before you scale, and leave the knowledge with your own people.",
            "The scan is built and maintained by The Only Constant.",
        ],
    },
    chat: {
        emptyTitle: "Tell us briefly what is going on.",
        emptyDescription:
            "What kind of organization, how many people, and what you want from AI. The scan asks the rest.",
        placeholder: "What kind of organization are you, and what do you want from AI?",
        send: "Send",
        back: "Back",
        errorMessage:
            "Something went wrong. Please try again, or reach out directly at info@theonlyconstant.nl.",
        closeOut: {
            bookCall: "Book a call",
            bookCallHref: "/contact",
            sendDocument: "Send me the plan of action",
        },
        contact: {
            title: "Send me the plan of action",
            helper:
                "Get your readiness picture and the first steps in your inbox. Useful to share with your team.",
            emailPlaceholder: "Your email",
            namePlaceholder: "Name (optional)",
            companyPlaceholder: "Company (optional)",
            submit: "Send the plan of action",
            sending: "Sending...",
            success:
                "Your plan of action has been sent. Good luck the coming weeks, and let us know if you have any questions.",
            error: "Something went wrong. Try again or email info@theonlyconstant.nl directly.",
            dismiss: "Dismiss",
        },
    },
};

const nl: typeof en = {
    meta: {
        title: "AI Readiness Scan - The Only Constant",
        description:
            "Weet in vijf minuten of je organisatie klaar is voor een eerste AI-project. Gratis, geen login, plan van aanpak in je mail.",
    },
    hero: {
        eyebrow: "AI Readiness Scan",
        title: "Is je organisatie klaar voor AI?",
        titleMuted: "Weet het in vijf minuten.",
        description:
            "Een kort gesprek over hoe het er bij jullie voor staat. Geen vragenlijst met vinkjes, maar een gesprek dat doorvraagt. Je krijgt een eerlijk beeld van waar je staat en een plan van aanpak in je mail. Gratis, geen login.",
        cta: "Start de scan",
    },
    howItWorks: {
        eyebrow: "Hoe het werkt",
        items: [
            {
                step: "01",
                duration: "5 minuten",
                title: "Vertel wat er speelt",
                description:
                    "Beschrijf je organisatie en wat je met AI wilt. De scan vraagt door op wat er echt toe doet.",
            },
            {
                step: "02",
                title: "We checken de basis",
                description:
                    "Opdrachtgeverschap, middenmanagement, je informatiehuishouding, het stille gebruik, de beslisstructuur en de ruimte om te falen. Dat zijn de dingen die bepalen of een eerste project slaagt.",
            },
            {
                step: "03",
                title: "Plan van aanpak",
                description:
                    "Je krijgt terug waar je staat, wat er eerst moet gebeuren, en welk eerste project bij je past. In je mail, om met je team te delen.",
            },
        ] as Array<{ step: string; duration?: string; title: string; description: string }>,
    },
    checks: {
        title: "Waar de scan naar kijkt",
        items: [
            "Is er een opdrachtgever met mandaat, of is AI een project van de IT-afdeling?",
            "Staat het middenmanagement erachter, of moet het eromheen?",
            "Is je informatie vindbaar en actueel genoeg om een model op los te laten?",
            "Weet je wie er nu al met AI werkt op een privéaccount?",
            "Wie beslist of een experiment doorgaat, en op basis waarvan?",
            "Is er ruimte om iets te proberen dat niet blijkt te werken?",
        ],
    },
    about: {
        title: "Waar de scan op gebouwd is",
        body: [
            "De AI Readiness Scan gebruikt dezelfde uitgangspunten als onze projecten: begin bij het werk, bewijs de waarde voordat je opschaalt, en laat de kennis achter bij je eigen mensen.",
            "De scan is gebouwd en wordt onderhouden door The Only Constant.",
        ],
    },
    chat: {
        emptyTitle: "Vertel kort wat er speelt.",
        emptyDescription:
            "Wat voor organisatie, hoeveel mensen, en wat je met AI wilt. De rest vraagt de scan.",
        placeholder: "Wat voor organisatie zijn jullie, en wat wil je met AI?",
        send: "Verstuur",
        back: "Terug",
        errorMessage:
            "Er ging iets mis. Probeer het opnieuw, of neem direct contact op via info@theonlyconstant.nl.",
        closeOut: {
            bookCall: "Boek een gesprek",
            bookCallHref: "/contact",
            sendDocument: "Stuur me het plan van aanpak",
        },
        contact: {
            title: "Stuur mij het plan van aanpak",
            helper:
                "Je krijgt je readiness-beeld en de eerste stappen in je inbox. Handig om met je team te delen.",
            emailPlaceholder: "Je e-mailadres",
            namePlaceholder: "Naam (optioneel)",
            companyPlaceholder: "Bedrijf (optioneel)",
            submit: "Stuur het plan van aanpak",
            sending: "Versturen...",
            success:
                "Je plan van aanpak is verstuurd. Succes de komende weken, en laat het weten als je vragen hebt.",
            error: "Er ging iets mis. Probeer het opnieuw of mail direct naar info@theonlyconstant.nl.",
            dismiss: "Sluiten",
        },
    },
};

export const readinessScanContent: Record<Locale, typeof en> = { en, nl };

export const READINESS_SCAN_PATH = "/ai-readiness-scan";
export const READINESS_SCAN_CHAT_PATH = "/ai-readiness-scan/chat";
