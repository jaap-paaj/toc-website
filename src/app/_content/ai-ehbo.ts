import type { Locale } from "@/lib/i18n/config";

const en = {
    meta: {
        title: "AI First Aid - The Only Constant",
        description:
            "Your AI project is in trouble. Describe what's going wrong, get an honest diagnosis, immediate actions, and a route forward.",
    },
    hero: {
        eyebrow: "AI First Aid",
        title: "Your AI project is in trouble.",
        titleMuted: "That's fixable.",
        description:
            "Describe what's going wrong. Get an honest diagnosis, immediate actions, and a route forward. No login. No sales pitch. Just help, grounded in a framework tested across dozens of organisations.",
        cta: "Describe your problem",
    },
    howItWorks: {
        items: [
            {
                index: "1.",
                title: "Stabilise",
                description:
                    "What to do this week to stop things from getting worse. Concrete actions, not vague advice.",
            },
            {
                index: "2.",
                title: "Diagnose",
                description:
                    "What's actually going on underneath the symptoms. The structural cause, named in plain language.",
            },
            {
                index: "3.",
                title: "Route forward",
                description:
                    "Three to five prioritised steps that make sense and feel achievable. Specific enough to act on.",
            },
        ],
    },
    problems: {
        title: "Sound familiar?",
        items: [
            "We bought an AI tool. Nobody uses it.",
            "Half the team is using ChatGPT on personal accounts. We have no governance.",
            "Our AI pilot impressed the board. Now it sits unused.",
            "We know we need to \"do something with AI\" but every path feels risky.",
            "The vendor says the tool works. Our people say it doesn't.",
            "We're spending money but can't measure if it's working.",
        ],
    },
    about: {
        title: "Built on real experience",
        body: [
            "AI First Aid is powered by the INCOMPETENT framework, a 90-day handbook for safe, disciplined, human-centred AI adoption. Written by the GenAI Circle, a group of practitioners who have guided dozens of organisations through AI.",
            "The tool is built and maintained by The Only Constant.",
        ],
    },
    chat: {
        emptyTitle: "Describe your AI problem.",
        emptyDescription: "Any language, any level of detail. We'll figure it out together.",
        placeholder: "What's going on with AI in your organisation?",
        send: "Send",
        errorMessage: "Something went wrong. Please try again, or reach out directly at hello@theonlyconstant.nl.",
        back: "Back",
        contact: {
            title: "Want us to send you a summary?",
            emailPlaceholder: "Your email",
            namePlaceholder: "Name (optional)",
            companyPlaceholder: "Company (optional)",
            submit: "Send me the summary",
            sending: "Sending...",
            success: "Got it. We'll be in touch.",
            error: "Something went wrong. Try again or email hello@theonlyconstant.nl directly.",
        },
    },
};

const nl: typeof en = {
    meta: {
        title: "AI Eerste Hulp - The Only Constant",
        description:
            "Je AI-project zit in de problemen. Beschrijf wat er misgaat, krijg een eerlijke diagnose, directe acties en een route vooruit.",
    },
    hero: {
        eyebrow: "AI Eerste Hulp",
        title: "Je AI-project zit in de problemen.",
        titleMuted: "Dat is op te lossen.",
        description:
            "Beschrijf wat er misgaat. Krijg een eerlijke diagnose, directe acties en een route vooruit. Geen login. Geen verkooppraatje. Gewoon hulp, gebaseerd op een framework getest bij tientallen organisaties.",
        cta: "Beschrijf je probleem",
    },
    howItWorks: {
        items: [
            {
                index: "1.",
                title: "Stabiliseren",
                description:
                    "Wat je deze week kunt doen om te voorkomen dat het erger wordt. Concrete acties, geen vaag advies.",
            },
            {
                index: "2.",
                title: "Diagnose",
                description:
                    "Wat er werkelijk speelt onder de symptomen. De structurele oorzaak, in heldere taal benoemd.",
            },
            {
                index: "3.",
                title: "Route vooruit",
                description:
                    "Drie tot vijf geprioriteerde stappen die logisch en haalbaar zijn. Specifiek genoeg om op te handelen.",
            },
        ],
    },
    problems: {
        title: "Herkenbaar?",
        items: [
            "We hebben een AI-tool gekocht. Niemand gebruikt hem.",
            "De helft van het team gebruikt ChatGPT op persoonlijke accounts. We hebben geen governance.",
            "Onze AI-pilot maakte indruk op het bestuur. Nu ligt hij stof te vergaren.",
            "We weten dat we \"iets met AI\" moeten, maar elke richting voelt risicovol.",
            "De leverancier zegt dat de tool werkt. Onze mensen zeggen van niet.",
            "We geven geld uit, maar kunnen niet meten of het werkt.",
        ],
    },
    about: {
        title: "Gebaseerd op echte ervaring",
        body: [
            "AI Eerste Hulp wordt aangedreven door het INCOMPETENT framework, een 90-dagen handboek voor veilige, gedisciplineerde, mensgerichte AI-adoptie. Geschreven door de GenAI Circle, een groep practitioners die tientallen organisaties door AI-adoptie hebben begeleid.",
            "De tool is gebouwd en wordt onderhouden door The Only Constant.",
        ],
    },
    chat: {
        emptyTitle: "Beschrijf je AI-probleem.",
        emptyDescription: "Elke taal, elk detailniveau. We komen er samen uit.",
        placeholder: "Wat speelt er met AI in je organisatie?",
        send: "Verstuur",
        errorMessage: "Er ging iets mis. Probeer het opnieuw, of neem direct contact op via hello@theonlyconstant.nl.",
        back: "Terug",
        contact: {
            title: "Wil je dat we je een samenvatting sturen?",
            emailPlaceholder: "Je e-mailadres",
            namePlaceholder: "Naam (optioneel)",
            companyPlaceholder: "Bedrijf (optioneel)",
            submit: "Stuur me de samenvatting",
            sending: "Versturen...",
            success: "Ontvangen. We nemen contact op.",
            error: "Er ging iets mis. Probeer het opnieuw of mail hello@theonlyconstant.nl.",
        },
    },
};

export const ehboContent: Record<Locale, typeof en> = { en, nl };
