import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        seoTitle: "" as string,
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
        seoTitle: "AI Automatisering voor Bedrijven - The Only Constant",
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

// FAQ items shared with blog post "ai-automatisering"
const enFaq = {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions about AI Automation",
    items: [
        {
            question: "What is AI automation?",
            answer: "AI automation uses artificial intelligence to make business processes smarter. Unlike traditional automation, AI can handle unstructured information like emails, documents and conversations, and perform tasks that previously required human judgment.",
        },
        {
            question: "What is the difference between AI automation and regular automation?",
            answer: "Traditional automation follows fixed rules: if X, then Y. AI automation can recognize patterns, understand context and handle variation. A traditional automation sends every complaint to the same inbox. AI automation reads the complaint, assesses urgency and routes it to the right person.",
        },
        {
            question: "What does AI automation cost?",
            answer: "A first AI automation project at The Only Constant, including intake, roadmap and first working automation, starts from 5,000 euros. Follow-up automations start from 2,250 euros. The investment typically pays for itself within three months through time savings and quality improvement.",
        },
        {
            question: "Which processes are suitable for AI automation?",
            answer: "The best candidates are processes with lots of repetition, unstructured information and human assessment steps that are time-consuming but not complex. Examples: processing incoming orders, classifying customer questions, summarizing meetings, generating first drafts of reports or proposals.",
        },
        {
            question: "How do you start with AI automation?",
            answer: "Don't start with the technology but with the friction. Sit next to someone doing the work and see where it gets stuck. Choose the process with the most daily pain and build a small, working automation for it. Test with real users, measure the result, and only scale when proven value is demonstrated.",
        },
    ],
};

const nlFaq: typeof enFaq = {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over AI automatisering",
    items: [
        {
            question: "Wat is AI automatisering?",
            answer: "AI automatisering is het inzetten van kunstmatige intelligentie om bedrijfsprocessen slimmer te maken. Het verschil met traditionele automatisering: AI kan omgaan met ongestructureerde informatie, zoals e-mails, documenten en gesprekken, en kan taken uitvoeren die voorheen menselijk beoordelingsvermogen vereisten.",
        },
        {
            question: "Wat is het verschil tussen AI automatisering en gewone automatisering?",
            answer: "Traditionele automatisering volgt vaste regels: als X, dan Y. AI automatisering kan patronen herkennen, context begrijpen en omgaan met variatie. Een traditionele automatisering stuurt elke klacht naar dezelfde inbox. AI automatisering leest de klacht, beoordeelt de urgentie en stuurt hem naar de juiste persoon.",
        },
        {
            question: "Wat kost AI automatisering?",
            answer: "Een eerste AI automatiseringstraject, inclusief intake, roadmap en eerste werkende automation, start bij The Only Constant vanaf 5.000 euro. Vervolgautomatiseringen starten vanaf 2.250 euro. De investering verdient zich in de meeste gevallen binnen drie maanden terug door tijdsbesparing en kwaliteitsverbetering.",
        },
        {
            question: "Voor welke processen is AI automatisering geschikt?",
            answer: "De beste kandidaten zijn processen met veel herhaling, ongestructureerde informatie en menselijke beoordeelstappen die tijdrovend maar niet complex zijn. Voorbeelden: het verwerken van inkomende orders, het classificeren van klantvragen, het samenvatten van vergaderingen, het genereren van eerste concepten voor rapporten of offertes.",
        },
        {
            question: "Hoe begin je met AI automatisering?",
            answer: "Begin niet bij de technologie maar bij de frictie. Ga naast iemand zitten die het werk doet en kijk waar het schuurt. Kies het proces met de meeste dagelijkse pijn en bouw daar een kleine, werkende automatisering voor. Test het met echte gebruikers, meet het resultaat, en schaal pas op als het bewezen waarde levert.",
        },
    ],
};

export const automateFaq = { en: enFaq, nl: nlFaq };

export const automateContent: Record<Locale, typeof en> = { en, nl };
