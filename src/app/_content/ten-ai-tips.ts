import type { Locale } from "@/lib/i18n/config";

interface Tip {
    number: string;
    title: string;
    body: string;
}

interface TenAiTipsContent {
    meta: {
        title: string;
        description: string;
    };
    hero: {
        eyebrow: string;
        titleLine1: string;
        titleAccent: string;
        titleLine2: string;
        intro: string;
    };
    tips: Tip[];
    closing: {
        title: string;
        cta: { label: string; href: string };
        secondaryAction: { prefix: string; label: string; href: string };
        panelTitle: string;
        panelBody: string;
    };
}

export const tenAiTipsContent: Record<Locale, TenAiTipsContent> = {
    nl: {
        meta: {
            title: "10 AI tips voor ondernemers",
            description:
                "Van eerste stap tot echt resultaat. Tien concrete stappen die je vandaag kunt zetten om gericht van interessant naar werkend te gaan met AI.",
        },
        hero: {
            eyebrow: "Van eerste stap tot echt resultaat",
            titleLine1: "10 AI",
            titleAccent: "tips",
            titleLine2: "voor ondernemers",
            intro:
                "Je hebt gezien wat AI kan. De vraag is nu: wat ga je er vandaag mee doen? Met deze 10 stappen ga je gericht van interessant naar werkend.",
        },
        tips: [
            {
                number: "01",
                title: "Begin bij de irritatie",
                body: "Waar verlies je de meeste tijd? Waar maak je steeds dezelfde fouten? Dat is je startpunt. De wrijving in je dagelijks werk wijst je de weg.",
            },
            {
                number: "02",
                title: "Kijk wat je team al stiekem doet",
                body: "Als medewerkers ChatGPT of Gemini op hun eigen telefoon gebruiken, is dat geen probleem, maar een aanwijzing. Het vertelt je precies waar de behoefte het grootst is. Maak het bespreekbaar!",
            },
            {
                number: "03",
                title: "Begin met één proces",
                body: "Elk extra project halveert je leervermogen. Kies één proces en ga daarmee aan de gang. Denk aan productteksten schrijven, klantvragen beantwoorden of offertes opstellen. Ga daar diep op in. De rest komt later.",
            },
            {
                number: "04",
                title: "Hoe in plaats van wat",
                body: "Ga naast je medewerker zitten en kijk hoe de taak echt wordt uitgevoerd. Bestaande procesbeschrijvingen houden geen rekening met workarounds. Twintig minuten meekijken levert dus meer op dan weken praten.",
            },
            {
                number: "05",
                title: "Bepaal wat je niet automatiseert",
                body: "Het adviesgesprek op de winkelvloer. De creatieve keuze voor een etalage. De persoonlijke klantrelatie. Sommige dingen blijven mensenwerk. Die keuze maakt je bedrijf sterker.",
            },
            {
                number: "06",
                title: "De praktijk bepaalt de oplossing",
                body: "Bekijk het proces dat je wilt verbeteren en beschrijf het stap voor stap. Vraag je bij elke stap af: kan AI dit, past het hier en hebben we de data? Beschrijf het aangepaste proces en ga experimenteren.",
            },
            {
                number: "07",
                title: "Bouw klein, snel en herhaal",
                body: "Begin met een simpele GPT, een standaard tool, een test van twee weken. Blijf weg van grote IT-projecten. Als het niet werkt, gooi je het weg en heb je iets geleerd. Als het wel werkt, ga je verder.",
            },
            {
                number: "08",
                title: "Meet wat ertoe doet",
                body: "Vier vragen, elke keer: hoeveel tijd bespaart het? Wat kost het? Is de kwaliteit goed genoeg? Wat kan er misgaan? Zonder meten is alles een mening. Met data neem je beslissingen.",
            },
            {
                number: "09",
                title: "Vraag je af: wordt het werk er beter van?",
                body: "Sneller is niet automatisch beter. Als je medewerkers straks alleen nog AI-output zitten te controleren, hol je het werk uit. De echte vraag is: wat doen ze met de vrijgekomen tijd? Daar zit de winst.",
            },
            {
                number: "10",
                title: "Schaal alleen wat bewezen is",
                body: "De verleiding is groot om meteen groot uit te rollen. Bewijs eerst dat het werkt, met echte mensen, in echt werk. Dan pas opschalen. Dat is slimmer ondernemen.",
            },
        ],
        closing: {
            title: "Meer weten?",
            cta: { label: "Neem contact op", href: "/contact" },
            secondaryAction: {
                prefix: "of",
                label: "Mail maarten@theonlyconstant.nl",
                href: "mailto:maarten@theonlyconstant.nl",
            },
            panelTitle: "Benieuwd wat AI voor jouw bedrijf kan betekenen?",
            panelBody:
                "Bij The Only Constant helpen we ondernemers razendsnel met verandering. Van eerste AI-experiment tot werkende automations en AI-gedreven innovaties. Sneller, beter en betaalbaarder dan je denkt.",
        },
    },
    en: {
        meta: {
            title: "10 AI tips for entrepreneurs",
            description:
                "From first step to real results. Ten concrete moves you can make today to go from interesting to working AI in your business.",
        },
        hero: {
            eyebrow: "From first step to real results",
            titleLine1: "10 AI",
            titleAccent: "tips",
            titleLine2: "for entrepreneurs",
            intro:
                "You've seen what AI can do. The question now is: what will you do with it today? These 10 steps take you deliberately from interesting to working.",
        },
        tips: [
            {
                number: "01",
                title: "Start with the irritation",
                body: "Where do you lose the most time? Where do you make the same mistakes? That's your starting point. The friction in your daily work shows you the way.",
            },
            {
                number: "02",
                title: "Look at what your team is already doing on the side",
                body: "If employees use ChatGPT or Gemini on their own phones, that's not a problem — it's a signal. It tells you exactly where the need is greatest. Bring it into the open.",
            },
            {
                number: "03",
                title: "Start with one process",
                body: "Every extra project halves your learning. Pick one process and dive in. Think product copy, customer enquiries, or quote-building. Go deep. The rest comes later.",
            },
            {
                number: "04",
                title: "How, not what",
                body: "Sit next to your employee and watch how the task is actually performed. Existing process descriptions ignore the workarounds. Twenty minutes of watching beats weeks of talking.",
            },
            {
                number: "05",
                title: "Decide what you don't automate",
                body: "The advice on the shop floor. The creative call for a window display. The personal customer relationship. Some things stay human work. Choosing that makes your business stronger.",
            },
            {
                number: "06",
                title: "Practice shapes the solution",
                body: "Take the process you want to improve and describe it step by step. At every step ask: can AI do this, does it fit, and do we have the data? Describe the new flow and start experimenting.",
            },
            {
                number: "07",
                title: "Build small, fast, repeat",
                body: "Start with a simple GPT, an off-the-shelf tool, a two-week test. Stay away from big IT projects. If it doesn't work, throw it away and you've learned something. If it does, you keep going.",
            },
            {
                number: "08",
                title: "Measure what matters",
                body: "Four questions, every time: how much time does it save? What does it cost? Is the quality good enough? What could go wrong? Without measurement, everything is opinion. With data, you decide.",
            },
            {
                number: "09",
                title: "Ask: does the work get better?",
                body: "Faster isn't automatically better. If your people end up only checking AI output, you hollow out the work. The real question: what do they do with the time freed up? That's where the win is.",
            },
            {
                number: "10",
                title: "Only scale what's proven",
                body: "The temptation to roll out big is real. Prove it works first — with real people, in real work. Then scale. That's smarter business.",
            },
        ],
        closing: {
            title: "Want to know more?",
            cta: { label: "Get in touch", href: "/contact" },
            secondaryAction: {
                prefix: "or",
                label: "Email maarten@theonlyconstant.nl",
                href: "mailto:maarten@theonlyconstant.nl",
            },
            panelTitle: "Curious what AI could mean for your business?",
            panelBody:
                "At The Only Constant we help entrepreneurs move fast through change. From first AI experiment to working automations and AI-driven innovation. Faster, better and more affordable than you'd think.",
        },
    },
};
