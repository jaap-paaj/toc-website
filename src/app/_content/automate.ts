import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        intro: "Most automations fail. Not because of bad technology, but because they automate the wrong process. We start with the friction and build from there, creating solutions that work for you."
    },
    readyToRun: {
        eyebrow: "OUR SOLUTIONS",
        description: "AI powers the engine, design sets the direction. First results within days, production-ready in weeks.",
        items: [
            {
                title: "DAILY INSIGHTS",
                body: "Automated analysis of your data that surfaces trends, anomalies and opportunities. Less reporting, more deciding."
            },
            {
                title: "CONTENT GENERATION",
                body: "Automatically turn product information into publishable copy in your own tone of voice."
            },
            {
                title: "SOCIAL MEDIA ASSISTANT",
                body: "Create, schedule and analyse content in your brand style. Grow on social media with the team you already have."
            },
            {
                title: "SERVICE AUTOMATION",
                body: "Smart triage and automated responses for frequently asked questions. Less pressure on your service team, faster response times."
            },
            {
                title: "PROCESS OPTIMISATION",
                body: "Map your workflows, surface inefficiencies and design concrete improvements. For operational teams that want targeted results."
            }
        ]
    },
    approach: {
        eyebrow: "APPROACH",
        items: [
            {
                badge: "WEEK 1",
                title: "AUDIT & DESIGN",
                bullets: [
                    "Analyse workflows",
                    "Identify highest-impact opportunities",
                    "Design the solution"
                ]
            },
            {
                badge: "WEEK 2",
                title: "BUILD & TEST",
                bullets: [
                    "Build the automation",
                    "Integrate with existing tools",
                    "Test and refine"
                ]
            },
            {
                badge: "WEEK 3",
                title: "LIVE & SCALE",
                bullets: [
                    "Roll out",
                    "Train the team",
                    "Measure results"
                ]
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        items: [
            {
                title: "FAST RETURNS",
                body: "40 to 70% less manual work, paid back in three to six months. Every time."
            },
            {
                title: "IMPACT FIRST",
                body: "We start with the processes that deliver immediate value. Your first automation is your most valuable one."
            },
            {
                title: "PREDICTABLE COSTS",
                body: "Clear scope, iterative validation, fixed pricing. You know upfront what it costs and what you get."
            },
            {
                title: "BUILT AROUND YOUR PROCESS",
                body: "We design around how you actually work: inputs, decision points, exceptions, escalations. The solution fits the business, not the other way around."
            }
        ]
    }
};

const nl: typeof en = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        intro: "De meeste automations mislukken. Niet door slechte technologie, maar omdat ze het verkeerde proces automatiseren. Wij beginnen bij de frictie en bouwen van daaruit oplossingen die voor je werken."
    },
    readyToRun: {
        eyebrow: "ONZE OPLOSSINGEN",
        description: "AI drijft de motor, het ontwerp bepaalt de richting. Eerste resultaat binnen dagen, productierijp in weken.",
        items: [
            {
                title: "DAGELIJKSE INZICHTEN",
                body: "Automatische analyse van je data die trends, afwijkingen en kansen zichtbaar maakt. Minder rapporteren, meer beslissen."
            },
            {
                title: "CONTENTGENERATIE",
                body: "Productinformatie automatisch omzetten naar publiceerbare teksten in je eigen tone of voice."
            },
            {
                title: "SOCIAL MEDIA ASSISTENT",
                body: "Content maken, plannen en analyseren in je merkstijl. Groei op social media met het team dat je al hebt."
            },
            {
                title: "SERVICE-AUTOMATISERING",
                body: "Slimme triage en automatische antwoorden voor veelgestelde vragen. Minder druk op het serviceteam, snellere responstijd."
            },
            {
                title: "PROCESOPTIMALISATIE",
                body: "Workflows in kaart brengen, inefficiënties zichtbaar maken en concrete verbeteringen ontwerpen. Voor operationele teams die gericht willen verbeteren."
            }
        ]
    },
    approach: {
        eyebrow: "AANPAK",
        items: [
            {
                badge: "WEEK 1",
                title: "AUDIT & ONTWERP",
                bullets: [
                    "Workflows analyseren",
                    "Kansen met de grootste impact identificeren",
                    "De oplossing ontwerpen"
                ]
            },
            {
                badge: "WEEK 2",
                title: "BOUWEN & TESTEN",
                bullets: [
                    "De automation bouwen",
                    "Integreren met bestaande tools",
                    "Testen en verfijnen"
                ]
            },
            {
                badge: "WEEK 3",
                title: "LIVE & OPSCHALEN",
                bullets: [
                    "Uitrollen",
                    "Het team trainen",
                    "Resultaten meten"
                ]
            }
        ]
    },
    whyUs: {
        eyebrow: "WAAROM WIJ?",
        items: [
            {
                title: "SNEL RENDEMENT",
                body: "40 tot 70% minder handmatig werk, terugverdiend in drie tot zes maanden. Keer op keer."
            },
            {
                title: "IMPACT EERST",
                body: "We beginnen bij de processen die direct wat opleveren. De eerste automation is meteen een waardevolle."
            },
            {
                title: "VOORSPELBARE KOSTEN",
                body: "Heldere scope, iteratieve validatie, vaste prijzen. Je weet vooraf wat het kost en wat je ervoor krijgt."
            },
            {
                title: "GEBOUWD ROND JULLIE PROCES",
                body: "We ontwerpen rond hoe je daadwerkelijk werkt: inputs, beslismomenten, uitzonderingen, escalaties. De oplossing past bij het bedrijf, niet andersom."
            }
        ]
    }
};

export const automateContent: Record<Locale, typeof en> = { en, nl };
