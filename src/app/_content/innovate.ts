import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        index: "03",
        title: "INNOVATE",
        intro: "Strategic decisions are harder than ever before. They need proof over assumptions. Innovate is for proving what to build or change next, before you commit time, budget, and teams.We do this through an AI-supported sprints, using AI to build understanding faster, generate stronger options, and validate earlier through a prototype or Proof of Concept. The result is decision-grade evidence: what to pursue, what to drop, and what to scale."
    },
    propositions: {
        eyebrow: "NEW PROPOSITIONS & PRODUCTS",
        description: "",
        items: [
            {
                title: "Opportunity Sprint",
                meta: "5 days",
                body: "AI-supported research to uncover and validate new market opportunities. Ends with a roadmap and prioritization of high-value ideas."
            },
            {
                title: "Design Sprint",
                meta: "5 days",
                body: "From problem to tested prototype in five days. Accelerated with AI to support ideation, prototyping, and user testing."
            }
        ]
    },
    solutions: {
        eyebrow: "AI-DRIVEN SOLUTIONS",
        description: "",
        items: [
            {
                title: "AI Exploration Sprint",
                meta: "5 days",
                body: "A deep dive into your organization's AI readiness and opportunities, including feasibility analysis, roadmap, and ROI insights."
            },
            {
                title: "AI Build Sprint",
                meta: "10 days",
                body: "Design and deliver a working AI solution from scratch. Includes development, testing, training, and a plan for scaling."
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        variant: "comparison" as const,
        comparison: {
            left: {
                title: "TRADITIONAL APPROACH",
                bullets: [
                    { tone: "negative" as const, text: "Takes months" },
                    { tone: "negative" as const, text: "High & unpredictable investment" },
                    { tone: "negative" as const, text: "Theoretical analysis & testing after launch" },
                    { tone: "negative" as const, text: "Endless meetings & siloed teams" },
                    { tone: "negative" as const, text: "Reports, presentations, estimations, guess-work" },
                    { tone: "negative" as const, text: "70–90% of all digital innovations fail" }
                ]
            },
            right: {
                title: "OUR INNOVATION SPRINTS",
                bullets: [
                    { tone: "positive" as const, text: "Takes 5–10 days" },
                    { tone: "positive" as const, text: "Low & predictable investment" },
                    { tone: "positive" as const, text: "Real customer input & early testing" },
                    { tone: "positive" as const, text: "Cross-functional collaboration" },
                    { tone: "positive" as const, text: "Working prototype or Proof of Concept" },
                    { tone: "positive" as const, text: "Consistently strong outcomes with repeated use" }
                ]
            }
        },
        items: [
            {
                title: "Fast Validation",
                body: "Test real ideas with real users in days, not months."
            },
            {
                title: "Low Risk",
                body: "Small, predictable investments with clear outcomes."
            },
            {
                title: "Human + AI",
                body: "Creativity amplified by AI — not replaced."
            },
            {
                title: "Built to Scale",
                body: "Every sprint ends with production-ready insights."
            }
        ]
    },
    imageDuo: {
        left: "/images/innovate/innovate-workshop-mapping.png",
        altLeft: "Innovate workshop mapping",
        right: "/images/innovate/innovate-ideation-sketch.png",
        altRight: "Innovate ideation sketch"
    }
};

const nl: typeof en = {
    hero: {
        index: "03",
        title: "INNOVATE",
        intro: "Strategische beslissingen zijn moeilijker dan ooit. Ze vragen om bewijs in plaats van aannames. Innovate helpt je bewijzen wat je als volgende moet bouwen of veranderen, voordat je tijd, budget en teams inzet. Dit doen we via AI-ondersteunde sprints, waarbij AI wordt ingezet om sneller inzicht op te bouwen, sterkere opties te genereren en eerder te valideren met een prototype of Proof of Concept. Het resultaat is bewijs waarop je kunt besluiten: wat door te zetten, wat te laten vallen en wat op te schalen."
    },
    propositions: {
        eyebrow: "NIEUWE PROPOSITIES & PRODUCTEN",
        description: "",
        items: [
            {
                title: "Opportunity Sprint",
                meta: "5 dagen",
                body: "AI-ondersteund onderzoek om nieuwe marktkansen te ontdekken en te valideren. Eindigt met een routekaart en prioritering van waardevolle ideeën."
            },
            {
                title: "Design Sprint",
                meta: "5 dagen",
                body: "Van probleem naar getest prototype in vijf dagen. Versneld met AI ter ondersteuning van ideeontwikkeling, prototyping en gebruikerstests. Eindigt met een gevalideerd concept klaar voor ontwikkeling."
            }
        ]
    },
    solutions: {
        eyebrow: "AI-GEDREVEN OPLOSSINGEN",
        description: "",
        items: [
            {
                title: "AI Exploration Sprint",
                meta: "5 dagen",
                body: "Een diepgaande verkenning van de AI-volwassenheid en kansen binnen jouw organisatie, inclusief haalbaarheidsanalyse, routekaart en ROI-inzichten."
            },
            {
                title: "AI Build Sprint",
                meta: "10 dagen",
                body: "Ontwerp en lever een werkende AI-oplossing vanaf nul. Inclusief ontwikkeling, testing, training en een plan voor opschaling."
            }
        ]
    },
    whyUs: {
        eyebrow: "WAAROM WIJ?",
        variant: "comparison",
        comparison: {
            left: {
                title: "TRADITIONELE AANPAK",
                bullets: [
                    { tone: "negative", text: "Duurt maanden" },
                    { tone: "negative", text: "Hoge en onvoorspelbare investering" },
                    { tone: "negative", text: "Theoretische analyse en testen na lancering" },
                    { tone: "negative", text: "Eindeloze vergaderingen en gescheiden teams" },
                    { tone: "negative", text: "Rapporten, presentaties, schattingen, giswerk" },
                    { tone: "negative", text: "70–90% van alle digitale innovaties mislukt" }
                ]
            },
            right: {
                title: "ONZE INNOVATIE SPRINTS",
                bullets: [
                    { tone: "positive", text: "Duurt 5–10 dagen" },
                    { tone: "positive", text: "Lage en voorspelbare investering" },
                    { tone: "positive", text: "Echte klantinput en vroege tests" },
                    { tone: "positive", text: "Cross-functionele samenwerking" },
                    { tone: "positive", text: "Werkend prototype of Proof of Concept" },
                    { tone: "positive", text: "Herhaalbare aanpak met consistent sterke resultaten" }
                ]
            }
        },
        items: [
            {
                title: "Snelle Validatie",
                body: "Test echte ideeën met echte gebruikers in dagen, niet maanden."
            },
            {
                title: "Laag Risico",
                body: "Kleine, voorspelbare investeringen met duidelijke resultaten."
            },
            {
                title: "Mens + AI",
                body: "Creativiteit versterkt door AI — niet vervangen."
            },
            {
                title: "Gebouwd om te Schalen",
                body: "Elke sprint eindigt met productieklare inzichten."
            }
        ]
    },
    imageDuo: {
        left: "/images/innovate/innovate-workshop-mapping.png",
        altLeft: "Innovate workshop mapping sessie",
        right: "/images/innovate/innovate-ideation-sketch.png",
        altRight: "Innovate ideatie schets"
    }
};

export const innovateContent: Record<Locale, typeof en> = { en, nl };
