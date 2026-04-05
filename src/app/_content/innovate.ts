import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        index: "03",
        title: "INNOVATE",
        intro: "Evidence makes decisions better. We build prototypes and Proofs of Concept that show what works, before you commit time, budget and teams. The result is decision data on what to pursue, what to drop and what to scale."
    },
    propositions: {
        eyebrow: "NEW PROPOSITIONS & PRODUCTS",
        description: "",
        items: [
            {
                title: "Opportunity Sprint",
                meta: "5 days",
                body: "Discover and validate new market opportunities with AI-supported research. You end with a prioritised list of opportunities, backed by real research and a concrete next step."
            },
            {
                title: "Design Sprint",
                meta: "5 days",
                body: "From challenge to tested prototype in five days. AI accelerates the research, ideation and prototyping. The result: a validated concept ready for the next step."
            }
        ]
    },
    solutions: {
        eyebrow: "AI SOLUTIONS",
        description: "",
        items: [
            {
                title: "AI Exploration Sprint",
                meta: "5 days",
                body: "A thorough exploration of AI opportunities within your business. Where's the value, what's feasible and where do you start? You get a roadmap with substantiated priorities and realistic expectations."
            },
            {
                title: "AI Build Sprint",
                meta: "10 days",
                body: "We build and test an AI solution in ten days. Including training for your team and a plan to scale."
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        variant: "comparison" as const,
        comparison: {
            left: {
                title: "THE TRADITIONAL APPROACH",
                bullets: [
                    { tone: "negative" as const, text: "Months of lead time" },
                    { tone: "negative" as const, text: "High costs, unpredictable outcomes" },
                    { tone: "negative" as const, text: "Theoretical analyses you only test after launch" },
                    { tone: "negative" as const, text: "70 to 90% of digital innovations never make it to market" }
                ]
            },
            right: {
                title: "OUR INNOVATION SPRINTS",
                bullets: [
                    { tone: "positive" as const, text: "5 to 10 days" },
                    { tone: "positive" as const, text: "Low and predictable investment" },
                    { tone: "positive" as const, text: "Real customer feedback, early testing, cross-functional collaboration" },
                    { tone: "positive" as const, text: "A prototype or Proof of Concept as the deliverable, and decision data to build on" }
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
                body: "Creativity amplified by AI, not replaced."
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
        intro: "Bewijs maakt beslissingen beter. Wij bouwen prototypes en Proofs of Concept die laten zien wat werkt, voordat je er tijd, budget en teams op inzet. Het resultaat is decision data over wat doorzetten, wat laten vallen en wat opschalen."
    },
    propositions: {
        eyebrow: "NIEUWE PROPOSITIES & PRODUCTEN",
        description: "",
        items: [
            {
                title: "Opportunity Sprint",
                meta: "5 dagen",
                body: "Nieuwe marktkansen ontdekken en valideren met AI-ondersteund onderzoek. Je eindigt met een geprioriteerde lijst van kansen, onderbouwd met echt onderzoek en een concreet vervolgplan."
            },
            {
                title: "Design Sprint",
                meta: "5 dagen",
                body: "Van vraagstuk naar getest prototype in vijf dagen. AI versnelt het onderzoek, de ideeontwikkeling en het prototypen. Het resultaat: een gevalideerd concept dat klaar is voor de volgende stap."
            }
        ]
    },
    solutions: {
        eyebrow: "AI-OPLOSSINGEN",
        description: "",
        items: [
            {
                title: "AI Exploration Sprint",
                meta: "5 dagen",
                body: "Grondige verkenning van AI-kansen binnen jouw bedrijf. Waar zit de waarde, wat is haalbaar en waar begin je? Je krijgt een routekaart met onderbouwde prioriteiten en realistische verwachtingen."
            },
            {
                title: "AI Build Sprint",
                meta: "10 dagen",
                body: "Wij bouwen en testen een AI-oplossing in tien dagen. Inclusief training voor je team en een plan om op te schalen."
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
                    { tone: "negative", text: "Maanden doorlooptijd" },
                    { tone: "negative", text: "Hoge kosten, onvoorspelbare resultaten" },
                    { tone: "negative", text: "Theoretische analyses die je pas na lancering toetst" },
                    { tone: "negative", text: "70 tot 90% van digitale innovaties haalt de markt niet" }
                ]
            },
            right: {
                title: "ONZE INNOVATIE SPRINTS",
                bullets: [
                    { tone: "positive", text: "5 tot 10 dagen" },
                    { tone: "positive", text: "Lage en voorspelbare investering" },
                    { tone: "positive", text: "Echte klantfeedback, vroege tests, cross-functionele samenwerking" },
                    { tone: "positive", text: "Een prototype of Proof of Concept als eindresultaat, en decision data om mee verder te bouwen" }
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
                body: "Creativiteit versterkt door AI, niet vervangen."
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
