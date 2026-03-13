import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        intro: "What to automate is the decision that makes or breaks ROI. Our projects start with an opportunity scan: together with your team we map automation candidates across workflows, plot them on a value versus effort matrix, and turn the outcome into a practical roadmap. We also agree how each automation should work in your context, so the build fits your ways of working. Then we design and build the first automation, prove value fast, and scale what works."
    },
    readyToRun: {
        eyebrow: "READY-TO-RUN AI SOLUTIONS",
        description: "Modular solutions we adapt to your context. First value in days, production-ready in mere weeks.",
        items: [
            {
                title: "DAILY INSIGHT REPORTS",
                body: "AI scans your data and flags trends, anomalies, and opportunities. Ideal for leaders and analysts looking to reduce time spent on reporting."
            },
            {
                title: "CONTENT GENERATION SYSTEMS",
                body: "Automatically turns product specs into marketing-ready copy. Built for e-commerce, marketing, and product teams needing speed and scale."
            },
            {
                title: "SOCIAL MEDIA ASSISTANTS",
                body: "Creates, posts, and analyzes consistent, on-brand content. Great for marketing teams and agencies looking to grow without extra hires."
            },
            {
                title: "CUSTOMER SERVICE AUTOMATION",
                body: "Smart triage and automated replies for faster resolutions and happier customers. Best for support-heavy and service-driven businesses."
            },
            {
                title: "PROCESS OPTIMIZATION ANALYSIS",
                body: "AI maps out inefficiencies in your workflows and suggests improvements. Perfect for operations teams focused on performance gains."
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
                    "Analyze current workflows",
                    "Identify high-impact targets",
                    "Design agent architecture"
                ]
            },
            {
                badge: "WEEK 2",
                title: "BUILD & TRAIN",
                bullets: [
                    "Build automation",
                    "Integrate with tools",
                    "Rigorous testing/refinement"
                ]
            },
            {
                badge: "WEEK 3",
                title: "DEPLOY & SCALE",
                bullets: [
                    "Live deployment",
                    "Team training",
                    "Performance monitoring"
                ]
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        items: [
            {
                title: "FAST, MEASURABLE ROI",
                body: "Our automations typically pay for themselves within 3–6 months, driven by 40–70% reductions in manual workload."
            },
            {
                title: "AUTOMATE WHAT MATTERS MOST",
                body: "We prioritise the processes with the highest impact, avoiding the waste that sinks most automation projects."
            },
            {
                title: "LOW-RISK, PREDICTABLE DELIVERY",
                body: "Clear scoping, iterative validation and predictable costs prevent surprises and overruns."
            },
            {
                title: "DESIGNED TO FIT YOUR WORKFLOW",
                body: "Fit beats fancy. We use our AI capability cards to shape workflows together, from inputs and decisions to checks, exceptions, and escalations, so automations fit the organisation, not the other way around."
            }
        ]
    }
};

const nl: typeof en = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        intro: "Wat je automatiseert bepaalt of je rendement haalt. Onze projecten beginnen met een opportunity scan: samen met jouw team brengen we automatiseringskansen in kaart, plaatsen ze op een waarde-versus-inspanningsmatrix en vertalen de uitkomst naar een praktische roadmap. We bepalen ook hoe elke automatisering in jouw context moet werken, zodat de oplossing past bij jullie manier van werken. Vervolgens ontwerpen en bouwen we de eerste automatisering, bewijzen snel waarde en schalen op wat werkt."
    },
    readyToRun: {
        eyebrow: "KANT-EN-KLARE AI-OPLOSSINGEN",
        description: "Modulaire oplossingen die we aanpassen aan jouw context. Eerste waarde binnen dagen, productierijp in enkele weken.",
        items: [
            {
                title: "DAGELIJKSE INZICHTEN",
                body: "AI scant je data en signaleert trends, afwijkingen en kansen. Ideaal voor leidinggevenden en analisten die minder tijd willen besteden aan rapportages."
            },
            {
                title: "CONTENTGENERATIE",
                body: "Zet productspecificaties automatisch om in marketingklare teksten. Gebouwd voor e-commerce-, marketing- en productteams die snelheid en schaalbaarheid nodig hebben."
            },
            {
                title: "SOCIAL MEDIA ASSISTENT",
                body: "Creëert, plaatst en analyseert consistente content in jouw merkstijl op al je kanalen. Ideaal voor marketingteams en bureaus die willen groeien zonder extra personeel aan te nemen."
            },
            {
                title: "SERVICE-AUTOMATISERING",
                body: "Slimme triage en automatische antwoorden voor snellere oplossingen en tevredenere klanten. Het beste voor servicegerichte organisaties met veel supportvragen."
            },
            {
                title: "PROCESOPTIMALISATIE",
                body: "AI brengt inefficiënties in je workflows in kaart en doet verbetervoorstellen. Perfect voor operationele teams die gericht zijn op prestatieverbetering."
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
                    "Huidige workflows analyseren",
                    "High-impact doelen identificeren",
                    "Agent-architectuur ontwerpen"
                ]
            },
            {
                badge: "WEEK 2",
                title: "BOUWEN & TRAINEN",
                bullets: [
                    "Automatisering bouwen",
                    "Integreren met tools",
                    "Grondig testen en verfijnen"
                ]
            },
            {
                badge: "WEEK 3",
                title: "UITROL & OPSCHALING",
                bullets: [
                    "Live-deployment",
                    "Teamtraining",
                    "Prestatiemonitoring"
                ]
            }
        ]
    },
    whyUs: {
        eyebrow: "WAAROM WIJ?",
        items: [
            {
                title: "SNEL, MEETBAAR RENDEMENT",
                body: "Onze automatiseringen verdienen zichzelf doorgaans binnen 3–6 maanden terug, dankzij 40–70% minder handmatig werk."
            },
            {
                title: "AUTOMATISEER WAT DE GROOTSTE IMPACT HEEFT",
                body: "We prioriteren de processen met de grootste impact en vermijden de verspilling waar de meeste automatiseringsprojecten op stranden."
            },
            {
                title: "LAAG RISICO, VOORSPELBARE OPLEVERING",
                body: "Heldere scoping, iteratieve validatie en voorspelbare kosten voorkomen verrassingen en overschrijdingen."
            },
            {
                title: "ONTWORPEN VOOR JOUW WERKWIJZE",
                body: "Werkbaar is belangrijker dan mooi. We gebruiken onze AI-capabilitykaarten om workflows samen vorm te geven, van inputs en beslissingen tot controles, uitzonderingen en escalaties, zodat automatiseringen passen bij de organisatie en niet andersom."
            }
        ]
    }
};

export const automateContent: Record<Locale, typeof en> = { en, nl };
