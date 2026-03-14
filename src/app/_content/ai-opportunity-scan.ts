import type { Locale } from "@/lib/i18n/config";

const en = {
    meta: {
        title: "AI Opportunity Scan | The Only Constant",
        description: "Get clarity on where AI creates value. A half-day AI Opportunity Scan delivering priorities, a roadmap, and one PoC-ready process.",
    },
    hero: {
        title: "AI Opportunity Scan: priorities, roadmap and one PoC-ready process in half a day",
        subtitle: "Know where AI pays off. Get a build-ready plan, not a slide deck.",
        outcomes: [
            "Typical outcome 3 prioritised use cases · 1 process mapped for PoC · 90-day roadmap · concrete owners and next steps"
        ],
        cta: {
            label: "Plan 20 minutes",
            href: "/ai-opportunity-scan/book"
        }
    },
    trust: {
        label: "Trusted by",
        logos: [
            { name: "Randstad", src: "/images/clients/randstad_logo.png" },
            { name: "AkzoNobel", src: "/images/clients/akzo_logo.png" },
            { name: "Eneco", src: "/images/clients/eneco_logo.png" }
        ]
    },
    statement: {
        eyebrow: "Why now",
        title: "Every month without clarity is a month your competitors use to ship",
        body: [
            "AI is everywhere, but choosing what to do with it is hard. Most organisations end up shopping tools or running pilots that do not change who does what. That keeps your best people on low-value work and prevents AI from delivering lasting value.",
        ],
        interrupt: "There is no such thing as a last mover advantage",
        goal: {
            title: "One clear goal:",
            description: "We show where AI should be used, then help you build it."
        },
        cta: {
            label: "Plan 20 minutes",
            href: "/ai-opportunity-scan/book"
        }
    },
    howItWorks: {
        eyebrow: "Process",
        title: "Three steps to certainty",
        steps: [
            {
                step: "01",
                duration: "20 minutes",
                title: "Quick intake",
                description: "Align goals, scope and outcomes. We prepare sector insights so the session is already tailored."
            },
            {
                step: "02",
                duration: "Half a day",
                title: "Opportunity session",
                description: "We map where revenue is created, where value leaks, and where future value will come from. We collect use cases, detail them with our AI capability cards, score them on value and effort, and research sector and cross-sector examples. We pick the top bets and map one process into PoC-ready format."
            },
            {
                step: "03",
                duration: "Same day",
                title: "Delivery",
                description: "A prioritised list, an impact and feasibility matrix, a 90-day roadmap, and one process redesigned and documented ready for PoC."
            }
        ]
    },
    whatYouGet: {
        eyebrow: "What you get",
        title: "Clear outcomes, not experiments",
        description: [
            "Shared understanding of where AI should and should not be used",
            "3 to 7 prioritised use cases with named owners and expected impact",
            "Impact and feasibility matrix to speed decision making",
            "90-day roadmap with owners and KPIs",
            "One process redesigned and PoC-ready, with acceptance criteria and a test data plan",
            "Practical do's and don'ts including technical notes, privacy and governance guidance"
        ]
    },
    whoThisIsFor: {
        eyebrow: "Who this is for",
        title: "This scan is for",
        subtitle: "heads of operations, marketing, sales or product at organisations that:",
        items: [
            "Have 30+ employees or several repeatable processes",
            "Already expect to use AI — or are under pressure to adopt it — but don't yet know where",
            "Want decisions and measurable progress, not just experiments"
        ]
    },
    pricing: {
        eyebrow: "PRICING",
        title: "Simple, fixed pricing",
        items: [
            {
                title: "AI Opportunity Scan",
                price: "€2,500",
                description: "On-site, half a day. Priorities, roadmap, and one PoC-ready process.",
            },
            {
                title: "Scan + First Automation",
                price: "€6,000",
                description: "Scan followed by a production sprint that delivers your first working automation.",
            }
        ]
    },
    introCall: {
        eyebrow: "Intro call",
        title: "The 20-minute intro call",
        body: "Book 20 minutes. You'll get a sector analysis report and a clear next step - even if you don't continue.",
        card: {
            title: "What happens:",
            bullets: [
                "Quick context and goals (5 minutes)",
                "We share sector context and two tailored ideas you can test quickly (10 minutes)",
                "Agree the next step: on-site scan, scan plus build, or PoC (5 minutes)"
            ],
            cta: {
                label: "Plan 20 minutes",
                href: "/ai-opportunity-scan/book"
            }
        }
    },
    faq: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        items: [
            {
                question: "Is this a full implementation?",
                answer: "No. The scan is a focused workshop that produces a build-ready plan. High-value, low-effort ideas can usually move to PoC within weeks."
            },
            {
                question: "How long does the session take?",
                answer: "About 3.5 to 4 hours on-site."
            },
            {
                question: "Who should attend?",
                answer: "4–6 decision-makers and domain experts. We need people who can decide or commit resources."
            },
            {
                question: "What if we don't continue after the scan?",
                answer: "The deliverables are yours. No strings attached."
            },
            {
                question: "Do you handle data and privacy?",
                answer: "Yes. Deliverables include governance and privacy guidance. We follow GDPR and current AI governance principles."
            },
            {
                question: "How quickly can we start?",
                answer: "We usually schedule the intake within a week and the on-site scan shortly after."
            }
        ]
    },
    features: {
        items: [
            {
                title: "Strategic Assessment",
                description: "We analyze your current workflows and identify high-impact areas for AI integration."
            },
            {
                title: "Proven Use Cases",
                description: "See examples of how similar organizations are already generating value with AI."
            },
            {
                title: "Actionable Roadmap",
                description: "Walk away with a prioritized list of next steps to start your AI journey."
            }
        ]
    },
    footerCta: {
        title: [
            "READY TO START?",
            "BOOK NOW"
        ],
        cta: {
            label: "SCHEDULE SESSION",
            href: "/ai-opportunity-scan/book"
        },
        panelTitle: "NEXT STEPS",
        panelBody: "Select a time that works for you. You'll receive a confirmation email with a Google Meet link and a short pre-session questionnaire to help us prepare.",
        copyright: "© The Only Constant 2025"
    },
    booking: {
        title: "Schedule Your Scan",
        embedUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2HBfcp_-gZwOEdeN0WlCgjHeHP1-V8ULrVsEeCpzyluEmmjB9E4HTc5sUbdtiiD6-BEmMdgmLb?gv=true",
        fallback: {
            text: "If booking doesn't work, use our contact page.",
            cta: {
                label: "Open booking in a new tab",
            },
            contactLink: {
                label: "Contact Page",
                href: "/contact"
            }
        },
        loadingText: "Loading available time slots...",
        backLink: {
            label: "Back to AI Opportunity Scan",
            href: "/ai-opportunity-scan"
        }
    }
};

const nl: typeof en = {
    meta: {
        title: "AI Opportunity Scan | The Only Constant",
        description: "Duidelijkheid over waar AI waarde creëert. Een halve dag AI Opportunity Scan met prioriteiten, roadmap en één PoC-klaar proces.",
    },
    hero: {
        title: "AI Opportunity Scan: prioriteiten, roadmap en één PoC-klaar proces in een halve dag",
        subtitle: "Weet waar AI zich terugverdient. Krijg een bouwklaar plan, geen slideshow.",
        outcomes: [
            "Typisch resultaat 3 geprioriteerde use cases · 1 proces uitgewerkt voor PoC · 90-dagen-roadmap · concrete eigenaren en vervolgstappen"
        ],
        cta: {
            label: "Plan 20 minuten",
            href: "/ai-opportunity-scan/book"
        }
    },
    trust: {
        label: "Vertrouwd door",
        logos: [
            { name: "Randstad", src: "/images/clients/randstad_logo.png" },
            { name: "AkzoNobel", src: "/images/clients/akzo_logo.png" },
            { name: "Eneco", src: "/images/clients/eneco_logo.png" }
        ]
    },
    statement: {
        eyebrow: "Waarom nu",
        title: "Elke maand zonder duidelijkheid is een maand voorsprong voor je concurrenten",
        body: [
            "AI is overal, maar kiezen wat je ermee doet is lastig. De meeste organisaties blijven tools vergelijken of pilots draaien die niets veranderen aan processen, rollen of verantwoordelijkheden. Dat houdt je beste mensen op laagwaardig werk en voorkomt dat AI blijvende waarde oplevert.",
        ],
        interrupt: "Een last mover advantage bestaat niet",
        goal: {
            title: "Eén helder doel:",
            description: "We laten zien waar AI waarde toevoegt en helpen je de juiste oplossing te bouwen."
        },
        cta: {
            label: "Plan 20 minuten",
            href: "/ai-opportunity-scan/book"
        }
    },
    howItWorks: {
        eyebrow: "Proces",
        title: "Drie stappen naar zekerheid",
        steps: [
            {
                step: "01",
                duration: "20 minuten",
                title: "Korte intake",
                description: "Doelen, scope en gewenste resultaten afstemmen. Wij bereiden sectorinzichten voor zodat de sessie direct op maat is."
            },
            {
                step: "02",
                duration: "Halve dag",
                title: "Opportunity sessie",
                description: "We brengen in kaart waar omzet ontstaat, waar waarde weglekt en waar toekomstige waarde vandaan komt. We verzamelen use cases, detailleren ze met onze AI-capability-cards, scoren ze op waarde en inspanning en onderzoeken voorbeelden uit je sector en daarbuiten. We kiezen de beste kansen en werken één proces uit in PoC-klaar formaat."
            },
            {
                step: "03",
                duration: "Dezelfde dag",
                title: "Oplevering",
                description: "Een geprioriteerde lijst, een impact- en haalbaarheidsmatrix, een 90-dagen-roadmap en één herontworpen, gedocumenteerd proces dat klaar is voor een PoC."
            }
        ]
    },
    whatYouGet: {
        eyebrow: "Wat je krijgt",
        title: "Concrete resultaten, geen experimenten",
        description: [
            "Gedeeld begrip van waar AI wel en niet ingezet moet worden",
            "3 tot 7 geprioriteerde use cases met eigenaren en verwachte impact",
            "Een impact- en haalbaarheidsmatrix om besluitvorming te versnellen",
            "90-dagen-roadmap met eigenaren en KPI's",
            "Eén proces herontworpen en PoC-klaar, met acceptatiecriteria en een testdataplan",
            "Praktische do's en don'ts, inclusief technische notities en richtlijnen voor privacy en governance"
        ]
    },
    whoThisIsFor: {
        eyebrow: "Voor wie",
        title: "Deze scan is voor",
        subtitle: "Hoofden van operations, marketing, sales of product bij organisaties die:",
        items: [
            "30+ medewerkers of meerdere herhaalbare processen hebben",
            "AI willen inzetten — of onder druk staan om ermee aan de slag te gaan — maar nog niet weten waar te beginnen",
            "Besluiten en meetbare voortgang willen, niet alleen experimenten"
        ]
    },
    pricing: {
        eyebrow: "PRIJZEN",
        title: "Eenvoudige, vaste prijzen",
        items: [
            {
                title: "AI Opportunity Scan",
                price: "€2,500",
                description: "Op locatie, halve dag. Prioriteiten, roadmap en één PoC-klaar proces.",
            },
            {
                title: "Scan + Eerste Automatisering",
                price: "€6,000",
                description: "Een scan, gevolgd door een productiesprint die je eerste werkende automatisering oplevert.",
            }
        ]
    },
    introCall: {
        eyebrow: "Kennismakingsgesprek",
        title: "Het kennismakingsgesprek van 20 minuten",
        body: "Plan 20 minuten. Je ontvangt een sectoranalyse en een duidelijke vervolgstap — ook als je niet verdergaat.",
        card: {
            title: "Wat er gebeurt:",
            bullets: [
                "Korte context en doelen (5 minuten)",
                "We delen sectorcontext en twee ideeën op maat die je snel kunt testen (10 minuten)",
                "Vervolgstap afspreken: scan op locatie, scan plus bouw, of PoC (5 minuten)"
            ],
            cta: {
                label: "Plan 20 minuten",
                href: "/ai-opportunity-scan/book"
            }
        }
    },
    faq: {
        eyebrow: "FAQ",
        title: "Veelgestelde vragen",
        items: [
            {
                question: "Is dit een volledige implementatie?",
                answer: "Nee. De scan is een gerichte workshop die een bouwklaar plan oplevert. Kansrijke ideeën met lage inspanning kunnen meestal binnen weken naar een PoC."
            },
            {
                question: "Hoe lang duurt de sessie?",
                answer: "Ongeveer 3,5 tot 4 uur op locatie."
            },
            {
                question: "Wie moeten er bij zijn?",
                answer: "4–6 beslissers en domeinexperts. We hebben mensen nodig die kunnen beslissen of middelen kunnen toewijzen."
            },
            {
                question: "Wat als we na de scan niet verdergaan?",
                answer: "De oplevering is van jou. Zonder verplichtingen."
            },
            {
                question: "Hoe gaan jullie om met data en privacy?",
                answer: "De oplevering bevat governance- en privacyrichtlijnen. We volgen de AVG en actuele AI-governance-principes."
            },
            {
                question: "Hoe snel kunnen we starten?",
                answer: "De intake plannen we meestal binnen een week, de sessie op locatie kort daarna."
            }
        ]
    },
    features: {
        items: [
            {
                title: "Strategische Analyse",
                description: "We analyseren je huidige werkprocessen en identificeren gebieden met hoge impact voor AI-integratie."
            },
            {
                title: "Bewezen Use Cases",
                description: "Bekijk voorbeelden van hoe vergelijkbare organisaties al waarde creëren met AI."
            },
            {
                title: "Actiegerichte Roadmap",
                description: "Ga naar huis met een geprioriteerde lijst vervolgstappen om je AI-reis te starten."
            }
        ]
    },
    footerCta: {
        title: [
            "KLAAR OM TE BEGINNEN?",
            "BOEK NU"
        ],
        cta: {
            label: "SESSIE PLANNEN",
            href: "/ai-opportunity-scan/book"
        },
        panelTitle: "VOLGENDE STAPPEN",
        panelBody: "Kies een moment dat je uitkomt. Je ontvangt een bevestigingsmail met een Google Meet-link en een korte vragenlijst zodat wij ons kunnen voorbereiden.",
        copyright: "© The Only Constant 2025"
    },
    booking: {
        title: "Plan je Scan",
        embedUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2HBfcp_-gZwOEdeN0WlCgjHeHP1-V8ULrVsEeCpzyluEmmjB9E4HTc5sUbdtiiD6-BEmMdgmLb?gv=true",
        fallback: {
            text: "Lukt het boeken niet? Gebruik onze contactpagina.",
            cta: {
                label: "Open boeking in een nieuw tabblad",
            },
            contactLink: {
                label: "Contactpagina",
                href: "/contact"
            }
        },
        loadingText: "Beschikbare tijdsloten laden...",
        backLink: {
            label: "Terug naar AI Opportunity Scan",
            href: "/ai-opportunity-scan"
        }
    }
};

export const scanContent: Record<Locale, typeof en> = { en, nl };

export type HeroVariant = {
    title: string;
    subtitle: string;
};

export const scanHeroVariants: Record<Locale, Record<string, HeroVariant>> = {
    en: {
        "v-human-time": {
            title: "AI Opportunity Scan: HUMAN TIME IS THE BOTTLENECK",
            subtitle: "Your best people are stuck in work they should not do. We find the AI priorities that free your team and give you a build-ready 90-day roadmap."
        },
        "v-theatre": {
            title: "AI Opportunity Scan: EXPERIMENTS WITHOUT PLANS ARE JUST THEATRE",
            subtitle: "Pilots that don't tie to decisions waste time and budget. We turn experiments into decision-making workstreams and PoC-ready processes."
        },
        "v-right-things": {
            title: "AI Opportunity Scan: DOING THE RIGHT THINGS vs DOING THINGS RIGHT",
            subtitle: "Most AI projects make the wrong work faster. We show where AI creates business outcomes and shift human time to higher-value work."
        },
        "v-arriving-late": {
            title: "AI Opportunity Scan: THE REAL COST IS ARRIVING LATE",
            subtitle: "While you calculate, competitors ship. We map the opportunities you should act on now and deliver a build-ready plan."
        }
    },
    nl: {
        "v-human-time": {
            title: "AI Opportunity Scan: JE BESTE MENSEN ZITTEN VAST IN HET VERKEERDE WERK",
            subtitle: "Je beste mensen besteden hun tijd aan werk dat niet bij hen hoort. Wij brengen in kaart waar AI echt waarde toevoegt, maken de juiste prioriteiten scherp en vertalen die naar een bouwklare roadmap voor de komende 90 dagen."
        },
        "v-theatre": {
            title: "AI Opportunity Scan: ZONDER PLAN WORDT AI AL SNEL THEATER",
            subtitle: "Pilots die niet leiden tot echte keuzes kosten tijd en budget. Wij vertalen experimenten naar concrete beslissingen, duidelijke werkstromen en processen die klaar zijn voor een PoC."
        },
        "v-right-things": {
            title: "AI Opportunity Scan: AI MAAKT HET VERKEERDE WERK OOK ALLEEN MAAR SNELLER",
            subtitle: "De meeste AI-projecten versnellen vooral werk dat weinig oplevert. Wij laten zien waar AI echt bedrijfswaarde creëert en verschuiven tijd van mensen naar werk met meer impact."
        },
        "v-arriving-late": {
            title: "AI Opportunity Scan: DE ECHTE KOSTEN ZITTEN IN TE LANG WACHTEN",
            subtitle: "Terwijl jij nog afweegt, zetten concurrenten al stappen. Wij maken zichtbaar waar je nu moet handelen en leveren een bouwklaar plan om door te pakken."
        }
    }
};
