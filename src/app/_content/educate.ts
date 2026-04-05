import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        eyebrow: "01",
        title: "EDUCATE",
        seoTitle: "" as string,
        description: "Most AI training teaches buttons. We teach people to think in applications. Our programmes work with your challenges and data, so your team experiences what's possible and can run with it straight away."
    },
    trainingCatalog: {
        aiTraining: {
            eyebrow: "AI TRAINING",
            description: "Programmes that start with your work, not with the technology. Designed with EU AI Act requirements in mind. In-company workshops from 1,500 euros.",
            items: [
                {
                    title: "AI INTRODUCTION",
                    description: "What can generative AI do for your role and sector? After this session you'll know, and you'll be ready to start. No prior knowledge needed.",
                },
                {
                    title: "CUSTOM GPTS",
                    description: "For teams already using ChatGPT. You'll learn to build Custom GPTs that fit your workflows and are ready to deploy immediately.",
                },
                {
                    title: "AI FOR VISUAL CONTENT",
                    description: "Create compelling visuals with Midjourney and Runway. Tailored to your style and workflow, with results you'll use the same day.",
                },
                {
                    title: "EXECUTIVE AI STRATEGY",
                    description: "For leaders who want to make strategic decisions about AI. Where's the value, what are the risks, and where do you start?",
                }
            ]
        },
        innovationTraining: {
            eyebrow: "INNOVATION TRAINING",
            description: "Not every opportunity is the right one. These programmes teach your team to identify, validate and translate opportunities into better products and services.",
            items: [
                {
                    title: "INNOVATION BY DESIGN",
                    description: "Most teams start with the solution. This programme starts with the user. You work on real challenges and leave with an approach your team can repeat on its own.",
                },
                {
                    title: "EXPERIENCE MAPPING",
                    description: "Make visible how people experience your product or service, from first contact to aftersales. You'll learn to find the friction points and turn them into improvements you can implement tomorrow.",
                }
            ]
        }
    },
    whyUs: {
        header: {
            eyebrow: "WHY US?"
        },
        items: [
            {
                title: "NEW SKILLS IN HOURS",
                description: "Compact and intensive. Your team gets more done in an afternoon than in most full-day training programmes."
            },
            {
                title: "YOUR WORK AS PRACTICE MATERIAL",
                description: "We work with your context and data. What you learn is applicable tomorrow."
            },
            {
                title: "EXPERIENCED PROFESSIONALS",
                description: "AI specialists, design strategists and innovation leaders. Everything they teach comes from their own client practice."
            },
            {
                title: "A TEAM THAT SPEAKS THE SAME LANGUAGE",
                description: "After the training, your team shares the same tools, methods and vocabulary. That makes collaboration faster."
            }
        ],
        images: {
            left: "/images/educate/why-us-workshop-audience.png",
            altLeft: "Workshop audience",
            right: "/images/educate/why-us-ai-training-presentation.png",
            altRight: "AI Training presentation"
        }
    },
    testimonials: {
        eyebrow: "TESTIMONIALS",
        items: [
            {
                quote: "Finally an AI workshop that uses our own data and challenges. I went home with knowledge I applied the very next day."
            },
            {
                quote: "In four hours I went from ChatGPT beginner to a working Custom GPT that saves our team ten hours a week. The hands-on approach made the difference."
            },
            {
                quote: "A lot, and sometimes overwhelming, but I learned more in one afternoon about how to actually work differently."
            }
        ]
    }
};

const nl: typeof en = {
    hero: {
        eyebrow: "01",
        title: "EDUCATE",
        seoTitle: "AI Workshop voor Bedrijven - The Only Constant",
        description: "De meeste AI-trainingen leren knoppen. Wij leren denken in toepassingen. Onze trainingen werken met jullie uitdagingen en data, zodat je team ervaart wat mogelijk is en er direct mee verder kan."
    },
    trainingCatalog: {
        aiTraining: {
            eyebrow: "AI TRAINING",
            description: "Programma's die beginnen bij je eigen werkzaamheden, niet bij de technologie. Uiteraard rekening houdend met de eisen van de EU AI Act. Incompany workshops vanaf 1.500 euro.",
            items: [
                {
                    title: "AI INTRODUCTIE",
                    description: "Wat kan generatieve AI voor jouw rol en sector betekenen? Na deze sessie weet je het en kun je direct van start. Geen voorkennis nodig.",
                },
                {
                    title: "CUSTOM GPTS",
                    description: "Voor teams die ChatGPT al gebruiken. Je leert Custom GPTs bouwen die passen bij je werkprocessen en direct inzetbaar zijn.",
                },
                {
                    title: "AI VOOR VISUELE CONTENT",
                    description: "Overtuigende visuals maken met Midjourney en Runway. Gericht op je eigen stijl en workflow, met resultaat dat je dezelfde dag nog gebruikt.",
                },
                {
                    title: "EXECUTIVE AI STRATEGIE",
                    description: "Voor leidinggevenden die strategische keuzes willen maken over AI. Waar zit de waarde, wat zijn de risico's en waar begin je?",
                }
            ]
        },
        innovationTraining: {
            eyebrow: "INNOVATIE TRAINING",
            description: "Niet elke kans is de juiste. Deze training leert je team om kansen te herkennen, valideren en vertalen naar betere producten en diensten.",
            items: [
                {
                    title: "INNOVATION BY DESIGN",
                    description: "De meeste teams beginnen bij de oplossing. Dit programma begint bij de gebruiker. Je oefent met echte vraagstukken en eindigt met een aanpak die je team zelf kan herhalen.",
                },
                {
                    title: "EXPERIENCE MAPPING",
                    description: "Maak zichtbaar hoe mensen je product of dienst ervaren, van eerste contact tot aftersales. Je leert de knelpunten vinden én vertalen naar verbeteringen die je morgen kunt doorvoeren.",
                }
            ]
        }
    },
    whyUs: {
        header: {
            eyebrow: "WAAROM WIJ?"
        },
        items: [
            {
                title: "NIEUWE VAARDIGHEDEN IN UREN",
                description: "Compact en intensief. Je team doet in een middag meer op dan in de meeste dagtrainingen."
            },
            {
                title: "EIGEN WERK ALS OEFENMATERIAAL",
                description: "We werken met jullie context en data. Wat je leert is morgen toepasbaar."
            },
            {
                title: "ERVAREN PROFESSIONALS",
                description: "AI-specialisten, designstrategen en innovators. Alles wat je leert komt uit hun eigen klantpraktijk."
            },
            {
                title: "EEN TEAM DAT DEZELFDE TAAL SPREEKT",
                description: "Na de training deelt je team dezelfde tools, methoden en begrippen. Dat maakt samenwerken sneller."
            }
        ],
        images: {
            left: "/images/educate/why-us-workshop-audience.png",
            altLeft: "Workshop publiek",
            right: "/images/educate/why-us-ai-training-presentation.png",
            altRight: "AI Training presentatie"
        }
    },
    testimonials: {
        eyebrow: "ERVARINGEN",
        items: [
            {
                quote: "Eindelijk een AI-workshop die onze eigen data en uitdagingen gebruikt. Ik ging naar huis met kennis die ik de volgende dag al toepaste."
            },
            {
                quote: "In vier uur ging ik van ChatGPT-beginner naar een werkende Custom GPT die ons team tien uur per week bespaart. De hands-on aanpak maakte het verschil."
            },
            {
                quote: "Veel en soms overweldigend, maar ik leerde meer in een middag hoe ik echt anders kan gaan werken"
            }
        ]
    }
};

// FAQ items shared with blog post "ai-workshop-bedrijven"
const enFaq = {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions about AI Workshops",
    items: [
        {
            question: "What do you learn at an AI workshop?",
            answer: "A good AI workshop combines three things: understanding what AI can and can't do, insight into where AI adds value to your specific work, and a concrete starting point. Participants leave with a clear picture of which processes are most suitable for AI, and a plan to start next week.",
        },
        {
            question: "How much does an AI workshop cost?",
            answer: "An in-company AI workshop at The Only Constant costs between 1,500 and 3,500 euros, depending on scope and preparation. This includes an intake to tailor the workshop to your situation, the session itself, and a follow-up with concrete next steps.",
        },
        {
            question: "How long does an AI workshop take?",
            answer: "Plan for half a day for an AI workshop (3-4 hours) and a full day for a hands-on session where the team actually works with their own processes. The most effective workshops combine a morning of theory and context with an afternoon where participants work on their own use cases.",
        },
        {
            question: "Who is an AI workshop suitable for?",
            answer: "AI workshops are most effective for teams that work daily with processes where friction exists: customer service, marketing, operations, finance, HR. The ideal group is 8 to 20 participants from the same organization, preferably a mix of management and executors.",
        },
        {
            question: "What is the difference between an AI workshop and an AI training?",
            answer: "A training focuses on skills: how to use specific tools, write good prompts, integrate AI into your daily workflow. A workshop focuses on strategy and direction: where is the most value for our organization, which processes are suitable, and how do we start.",
        },
        {
            question: "How do I prepare my team for an AI workshop?",
            answer: "The most important preparation is openness. Ask your team to think about two things: which part of their work takes the most time, and where they already (informally) use AI tools. No technical knowledge is required, the workshop is designed for everyone to participate.",
        },
    ],
};

const nlFaq: typeof enFaq = {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over AI workshops",
    items: [
        {
            question: "Wat leer je bij een AI workshop?",
            answer: "Een goede AI workshop combineert drie dingen: begrip van wat AI wel en niet kan, inzicht in waar AI waarde toevoegt aan jouw specifieke werk, en een concreet startpunt om ermee te beginnen. Deelnemers verlaten de sessie met een helder beeld van welke processen het meest geschikt zijn voor AI, en een plan om daar volgende week mee te starten.",
        },
        {
            question: "Hoeveel kost een AI workshop?",
            answer: "Een incompany AI workshop bij The Only Constant kost tussen de 1.500 en 3.500 euro, afhankelijk van de omvang en voorbereiding. Dit is inclusief een intake om de workshop af te stemmen op jullie situatie, de sessie zelf, en een opvolging met concrete vervolgstappen.",
        },
        {
            question: "Hoe lang duurt een AI workshop?",
            answer: "Reken op een halve dag voor een AI workshop (3-4 uur) en een hele dag voor een hands-on sessie waarin het team ook daadwerkelijk aan de slag gaat met hun eigen processen. De meest effectieve workshops combineren een ochtend theorie en context met een middag waarin deelnemers werken aan hun eigen use cases.",
        },
        {
            question: "Voor wie is een AI workshop geschikt?",
            answer: "AI workshops zijn het meest effectief voor teams die dagelijks met processen werken waar frictie zit: klantenservice, marketing, operations, finance, HR. De ideale groep is 8 tot 20 deelnemers uit dezelfde organisatie, liefst een mix van management en uitvoerders.",
        },
        {
            question: "Wat is het verschil tussen een AI workshop en een AI training?",
            answer: "Een training richt zich op vaardigheden: hoe gebruik je specifieke tools, hoe schrijf je goede prompts, hoe integreer je AI in je dagelijkse workflow. Een workshop richt zich op strategie en richting: waar zit de meeste waarde voor onze organisatie, welke processen zijn geschikt, en hoe beginnen we.",
        },
        {
            question: "Hoe bereid ik mijn team voor op een AI workshop?",
            answer: "De belangrijkste voorbereiding is openheid. Vraag je team vooraf na te denken over twee dingen: welk onderdeel van hun werk het meeste tijd kost, en waar ze al (informeel) AI-tools gebruiken. Verder hoeft er geen technische kennis aanwezig te zijn.",
        },
    ],
};

export const educateFaq = { en: enFaq, nl: nlFaq };

export const educateContent: Record<Locale, typeof en> = { en, nl };
