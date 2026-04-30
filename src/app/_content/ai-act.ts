import type { Locale } from "@/lib/i18n/config";
import { RiskLevel } from "@/lib/ai-act/types";

interface HowItWorksItem {
    step: string;
    duration?: string;
    title: string;
    description: string;
}

const en = {
    meta: {
        title: "AI Act Check - The Only Constant",
        description:
            "Does the EU AI Act apply to you? An honest self-check in nine yes/no questions. Get a classification, deadlines and concrete next steps.",
    },
    hero: {
        eyebrow: "AI Act Check",
        title: "Does the EU AI Act apply to you?",
        titleMuted: "The answer in nine questions.",
        description:
            "An honest self-check, not legal advice. Nine yes/no questions, a classification, and concrete next steps. Whether you're a ChatGPT customer or building your own models.",
        cta: "Start the check",
        secondaryCta: "What do I have to do anyway?",
        secondaryCtaDescription:
            "Read about the universal obligation: AI literacy (Art. 4).",
    },
    howItWorks: {
        eyebrow: "How it works",
        items: [
            {
                step: "01",
                title: "Answer yes or no",
                description:
                    "Nine questions about how you use AI. No open fields, no fluffy language.",
            },
            {
                step: "02",
                title: "Get a classification",
                description:
                    "Prohibited, high risk, transparency obligation, minimal, or out of scope. With the legal articles behind it.",
            },
            {
                step: "03",
                title: "Read what to do",
                description:
                    "Per outcome: concrete actions, deadlines and references. Different paths for providers and deployers.",
            },
        ] as HowItWorksItem[],
    },
    problems: {
        title: "Sound familiar?",
        items: [
            "Our HR tool uses AI. That's not really our problem, right?",
            "We only use ChatGPT. Surely those rules don't apply to us?",
            "We need to 'do something with the AI Act' but have no idea where to start.",
            "The fines are no joke. But our risk level? No clue.",
            "Our vendor says 'compliant'. Does that hold for how we use it?",
            "By 2 August something has to happen. What exactly?",
        ],
    },
    about: {
        title: "Built on the regulation, not on marketing",
        body: [
            "AI Act Check is a simplified self-check based on EU Regulation 2024/1689. No consultant fluff, just a direct translation of the classification rules from Art. 5, 6 and 50.",
            "Built and maintained by The Only Constant. Not legal advice, but a good first direction.",
        ],
    },
    wizard: {
        eyebrow: "AI Act Check",
        backToLanding: "Back to overview",
        progressLabel: (n: number, total: number) =>
            `Question ${n} of ~${total}`,
        legalRefSuffix: "↗",
        longExplanationToggleShow: "What does this mean?",
        longExplanationToggleHide: "Hide explanation",
        yes: "Yes",
        no: "No",
        back: "Previous question",
    },
    result: {
        outcomeLabel: "Outcome",
        levelLabels: {
            [RiskLevel.PROHIBITED]: "Prohibited",
            [RiskLevel.HIGH]: "High risk",
            [RiskLevel.GPAI]: "GPAI",
            [RiskLevel.TRANSPARENCY]: "Transparency",
            [RiskLevel.MINIMAL]: "Minimal risk",
            [RiskLevel.NO_REGULATION]: "Out of scope",
        } satisfies Record<RiskLevel, string>,
        whyTitle: "Why?",
        whatNextTitle: "What now?",
        asProviderLabel: "As provider",
        asUserLabel: "As deployer",
        deadlineLabel: "Deadline",
        deadlineNA: "N/A",
        mandatory: {
            eyebrow: "Always mandatory",
            title: "AI literacy (Art. 4)",
            body: "Make sure your staff understands how AI systems work and what the risks are. This applies to everyone, regardless of risk level. Already in force since 2 February 2025.",
            cta: "Read the article",
        },
        back: "Previous question",
        reset: "Start a new check",
    },
    lead: {
        title: "Want more?",
        body: "Leave your details and we'll send you additional context on this outcome and possible next steps. No spam, no sales pitch.",
        labels: {
            email: "Email *",
            name: "Name",
            company: "Company",
            role: "Role",
        },
        consentText:
            "I agree that The Only Constant uses my details to contact me about this outcome and related services. You can unsubscribe at any time.",
        submit: "Send",
        submitting: "Sending…",
        success: {
            title: "Thanks",
            body: "Your details are noted. We'll be in touch within a few working days with additional information and possible next steps.",
        },
        errorFallback: "Something went wrong",
    },
    legalDrawer: {
        closeLabel: "Close",
        eurLexNote:
            "Summary of the regulation for readability. For the official text:",
        eurLexLabel: "EUR-Lex 2024/1689",
        eurLexUrl:
            "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
    },
    toolbox: {
        sublabel: "Other tools by The Only Constant",
        openPrefix: "Open",
        links: [
            {
                title: "AI First Aid",
                description:
                    "AI pilot stuck? Our diagnostic tool listens in and points to the cause.",
                href: "/ai-ehbo",
            },
            {
                title: "AI Opportunity Scan",
                description:
                    "Where is the highest-leverage AI opportunity in your organisation?",
                href: "/ai-opportunity-scan",
            },
        ],
    },
    disclaimer: {
        subtle:
            "This check is a simplified estimate for awareness, not legal advice. The EU AI Act has exceptions and grey areas this tool cannot all capture. For definitive classification or compliance work: consult a specialist or the Dutch Data Protection Authority (AI supervisory chamber).",
        strong: {
            prefix: "Important:",
            body: "this outcome flags a serious risk based on a simplified check. Have your situation reviewed by a specialist or the Dutch Data Protection Authority (AI supervisory chamber) before drawing conclusions or taking action. This tool is for awareness, not legal advice.",
        },
    },
    eurLexBadge: {
        label: "EU Regulation 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
    },
};

const nl: typeof en = {
    meta: {
        title: "AI Act Check - The Only Constant",
        description:
            "Geldt de EU AI Act voor jou? Een eerlijke zelfcheck in negen ja/nee-vragen. Krijg een classificatie, deadlines en concrete vervolgstappen.",
    },
    hero: {
        eyebrow: "AI Act Check",
        title: "Geldt de EU AI Act voor jou?",
        titleMuted: "Het antwoord in negen vragen.",
        description:
            "Een eerlijke zelfcheck, geen juridisch advies. Negen ja/nee-vragen, een classificatie en concrete vervolgstappen. Of je nu een ChatGPT-klant bent of zelf modellen bouwt.",
        cta: "Start de check",
        secondaryCta: "Wat moet ik sowieso doen?",
        secondaryCtaDescription:
            "Lees over de universele basisverplichting: AI-geletterdheid (Art. 4).",
    },
    howItWorks: {
        eyebrow: "Hoe het werkt",
        items: [
            {
                step: "01",
                title: "Beantwoord ja of nee",
                description:
                    "Negen vragen over jouw AI-gebruik. Geen open velden, geen fluffy taal.",
            },
            {
                step: "02",
                title: "Krijg een classificatie",
                description:
                    "Verboden, hoog risico, transparantieplicht, minimaal, of buiten scope. Met de wetsartikelen erachter.",
            },
            {
                step: "03",
                title: "Lees wat je moet doen",
                description:
                    "Per uitkomst: concrete acties, deadlines en verwijzingen. Aparte paden voor aanbieders en gebruikers.",
            },
        ],
    },
    problems: {
        title: "Herkenbaar?",
        items: [
            "Onze HR-tool gebruikt AI. Dat is toch ons probleem niet?",
            "We gebruiken alleen ChatGPT. Daar gelden die regels toch niet voor?",
            "We moeten 'iets met AI Act doen' maar weten niet waar te beginnen.",
            "De boetes liegen er niet om. Maar ons risiconiveau? Geen idee.",
            "Onze leverancier zegt 'compliant'. Klopt dat ook voor ons gebruik?",
            "Per 2 augustus moet er iets gebeuren. Wat precies?",
        ],
    },
    about: {
        title: "Gebaseerd op de wettekst, niet op marketing",
        body: [
            "AI Act Check is een vereenvoudigde zelfcheck op basis van EU Verordening 2024/1689. Geen adviseurspraat, maar een directe vertaling van de classificatieregels uit Art. 5, 6 en 50.",
            "Gebouwd en onderhouden door The Only Constant. Geen juridisch advies, wel een goede eerste richting.",
        ],
    },
    wizard: {
        eyebrow: "AI Act Check",
        backToLanding: "Terug naar uitleg",
        progressLabel: (n: number, total: number) => `Vraag ${n} van ~${total}`,
        legalRefSuffix: "↗",
        longExplanationToggleShow: "Wat betekent dit?",
        longExplanationToggleHide: "Verberg toelichting",
        yes: "Ja",
        no: "Nee",
        back: "Vorige vraag",
    },
    result: {
        outcomeLabel: "Uitkomst",
        levelLabels: {
            [RiskLevel.PROHIBITED]: "Verboden",
            [RiskLevel.HIGH]: "Hoog risico",
            [RiskLevel.GPAI]: "GPAI",
            [RiskLevel.TRANSPARENCY]: "Transparantie",
            [RiskLevel.MINIMAL]: "Minimaal risico",
            [RiskLevel.NO_REGULATION]: "Buiten scope",
        } satisfies Record<RiskLevel, string>,
        whyTitle: "Waarom?",
        whatNextTitle: "Wat nu?",
        asProviderLabel: "Als aanbieder",
        asUserLabel: "Als gebruiker",
        deadlineLabel: "Deadline",
        deadlineNA: "N.v.t.",
        mandatory: {
            eyebrow: "Altijd verplicht",
            title: "AI-geletterdheid (Art. 4)",
            body: "Zorg dat je personeel begrijpt hoe AI-systemen werken en wat de risico's zijn. Dit geldt voor iedereen, ongeacht je risiconiveau. Al van kracht sinds 2 februari 2025.",
            cta: "Lees het artikel",
        },
        back: "Vorige vraag",
        reset: "Nieuwe check starten",
    },
    lead: {
        title: "Meer weten?",
        body: "Laat je gegevens achter, dan sturen we je aanvullende uitleg over deze uitkomst en eventuele vervolgstappen. Geen spam, geen verkooppraatje.",
        labels: {
            email: "E-mail *",
            name: "Naam",
            company: "Bedrijf",
            role: "Rol",
        },
        consentText:
            "Ik ga ermee akkoord dat The Only Constant mijn gegevens gebruikt om contact op te nemen over deze uitkomst en gerelateerde dienstverlening. Afmelden kan altijd.",
        submit: "Verstuur",
        submitting: "Versturen…",
        success: {
            title: "Bedankt",
            body: "Je gegevens staan genoteerd. We nemen binnen een paar werkdagen contact op met aanvullende informatie en mogelijke vervolgstappen.",
        },
        errorFallback: "Er ging iets mis",
    },
    legalDrawer: {
        closeLabel: "Sluiten",
        eurLexNote:
            "Samenvatting van de wettekst voor leesbaarheid. Voor de officiële tekst:",
        eurLexLabel: "EUR-Lex 2024/1689",
        eurLexUrl:
            "https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689",
    },
    toolbox: {
        sublabel: "Andere tools van The Only Constant",
        openPrefix: "Open",
        links: [
            {
                title: "AI Eerste Hulp",
                description:
                    "Vastgelopen AI-pilot? Onze diagnose-tool kijkt mee en wijst de oorzaak aan.",
                href: "/ai-ehbo",
            },
            {
                title: "AI Opportunity Scan",
                description:
                    "Waar zit de meeste AI-impact in jouw organisatie?",
                href: "/ai-opportunity-scan",
            },
        ],
    },
    disclaimer: {
        subtle:
            "Deze check is een vereenvoudigde inschatting voor bewustwording, geen juridisch advies. De EU AI Act kent uitzonderingen en grijze gebieden die deze tool niet allemaal kan vangen. Voor definitieve classificatie of compliance-trajecten: raadpleeg een specialist of de Autoriteit Persoonsgegevens.",
        strong: {
            prefix: "Belangrijk:",
            body: "deze uitkomst signaleert een serieus risico op basis van een vereenvoudigde check. Laat je situatie inhoudelijk toetsen door een specialist of de Autoriteit Persoonsgegevens (AI-toezichtkamer) voor je conclusies trekt of acties onderneemt. Deze tool is bedoeld voor bewustwording, niet als juridisch advies.",
        },
    },
    eurLexBadge: {
        label: "EU Verordening 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689",
    },
};

export const aiActContent: Record<Locale, typeof en> = { en, nl };
