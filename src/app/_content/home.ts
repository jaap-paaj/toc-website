import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        description: "We are a strategy and design partner that helps teams move from assumptions to proven business results by making. We build prototypes, Proofs of Concept, and automations that create clarity fast.",
        cta: {
            label: "EXPLORE OUR CAPABILITIES",
            href: "#capabilities",
        }
    },
    about: {
        eyebrow: "About Us",
        statementLines: [
            "DIGITAL INNOVATION",
            "THAT DELIVERS",
            "PROVEN IMPACT"
        ],
        imageSrc: "/images/home/about.png",
        description: [
            "We're a strategy and design partner for teams that need progress without the noise. We combine business goals, human needs and emerging tech to create practical concepts, prototypes and automations built for real-world use.",
            "We focus on outcomes, not hype. That means clearer decisions, less manual work, and early proof of what's worth building so you can move faster without guessing."
        ],
        cta: {
            label: "MORE ABOUT US",
            href: "#"
        }
    },
    services: {
        eyebrow: "Our Capabilities",
        items: [
            {
                id: "01",
                title: "EDUCATE",
                description: "Build practical AI and innovation skills fast through hands-on workshops using your team's real challenges.",
                cta: {
                    label: "Explore Educate",
                    href: "/educate",
                }
            },
            {
                id: "02",
                title: "AUTOMATE",
                description: "Free your team from repetitive tasks with proven AI solutions that deliver measurable ROI.",
                cta: {
                    label: "Explore Automate",
                    href: "/automate",
                }
            },
            {
                id: "03",
                title: "INNOVATE",
                description: "Accelerate innovation with AI-driven sprints that deliver validated, ready-to-build solutions fast.",
                cta: {
                    label: "Explore Innovate",
                    href: "/innovate",
                }
            },
        ],
    },
    clients: {
        eyebrow: "Clients",
        items: [
            { src: "/images/clients/akzo_logo.png", name: "AkzoNobel" },
            { src: "/images/clients/eon_drive_logo.png", name: "E.ON Drive" },
            { src: "/images/clients/eneco_logo.png", name: "Eneco" },
            { src: "/images/clients/intersport_logo.png", name: "Intersport" },
            { src: "/images/clients/ministerie_logo.png", name: "Ministerie van Justitie en Veiligheid" },
            { src: "/images/clients/randstad_logo.png", name: "Randstad" },
            { src: "/images/clients/reama_logo.png", name: "ReumaNederland" },
        ],
    },
    insights: {
        eyebrow: "Latest Thinking",
        newBadge: "New",
        viewAll: "View all",
    },
    footerCta: {
        title: [
            "READY FOR CHANGE?",
            "LET'S TALK!"
        ],
        cta: {
            label: "CONTACT",
            href: "/contact"
        },
        panelTitle: "WHAT HAPPENS NEXT",
        panelBody: "You will leave with experience, not just inspiration. You will understand what AI is and what it will change in your organisation, and you will know what is worth doing next. You will get ready-to-use prompts, templates, and practical workflows you can start using immediately. Then you are ready for the next step: automate, innovate, or both.",
        copyright: "© The Only Constant 2025"
    }
};

const nl: typeof en = {
    hero: {
        description: "Wij zijn een strategie- en designpartner die teams helpt aannames om te zetten in bewezen bedrijfsresultaten door te maken. We bouwen prototypes, Proofs of Concept en automatiseringen die snel duidelijk maken wat werkt.",
        cta: {
            label: "ONTDEK ONZE DIENSTEN",
            href: "#capabilities",
        }
    },
    about: {
        eyebrow: "Over Ons",
        statementLines: [
            "DIGITALE INNOVATIE",
            "DIE LEVERT",
            "BEWEZEN IMPACT"
        ],
        imageSrc: "/images/home/about.png",
        description: [
            "We zijn een strategie- en designpartner voor teams die vooruitgang nodig hebben zonder ruis. We combineren bedrijfsdoelen, menselijke behoeften en opkomende technologie om praktische concepten, prototypes en automatiseringen te bouwen voor dagelijks gebruik.",
            "We richten ons op resultaat, niet op hype. Dat betekent duidelijkere beslissingen, minder handmatig werk en vroeg bewijs van wat de moeite waard is zodat je sneller kunt handelen zonder te gokken."
        ],
        cta: {
            label: "MEER OVER ONS",
            href: "#"
        }
    },
    services: {
        eyebrow: "Onze Diensten",
        items: [
            {
                id: "01",
                title: "EDUCATE",
                description: "Bouw praktische AI- en innovatievaardigheden op door hands-on workshops met de echte uitdagingen van je team.",
                cta: {
                    label: "Ontdek Educate",
                    href: "/educate",
                }
            },
            {
                id: "02",
                title: "AUTOMATE",
                description: "Bevrijd je team van repetitieve taken met bewezen AI-oplossingen die meetbare ROI leveren.",
                cta: {
                    label: "Ontdek Automate",
                    href: "/automate",
                }
            },
            {
                id: "03",
                title: "INNOVATE",
                description: "Versnel innovatie met AI-gedreven sprints die gevalideerde, bouwklare oplossingen snel opleveren.",
                cta: {
                    label: "Ontdek Innovate",
                    href: "/innovate",
                }
            },
        ],
    },
    clients: {
        eyebrow: "Klanten",
        items: [
            { src: "/images/clients/akzo_logo.png", name: "AkzoNobel" },
            { src: "/images/clients/eon_drive_logo.png", name: "E.ON Drive" },
            { src: "/images/clients/eneco_logo.png", name: "Eneco" },
            { src: "/images/clients/intersport_logo.png", name: "Intersport" },
            { src: "/images/clients/ministerie_logo.png", name: "Ministerie van Justitie en Veiligheid" },
            { src: "/images/clients/randstad_logo.png", name: "Randstad" },
            { src: "/images/clients/reama_logo.png", name: "ReumaNederland" },
        ],
    },
    insights: {
        eyebrow: "Laatste Inzichten",
        newBadge: "Nieuw",
        viewAll: "Bekijk alles",
    },
    footerCta: {
        title: [
            "KLAAR VOOR VERANDERING?",
            "LATEN WE PRATEN!"
        ],
        cta: {
            label: "CONTACT",
            href: "/contact"
        },
        panelTitle: "WAT GEBEURT ER DAARNA",
        panelBody: "Je vertrekt met ervaring, niet alleen inspiratie. Je begrijpt wat AI is en wat het in je organisatie verandert, en je weet wat de moeite waard is om als volgende te doen. Je krijgt kant-en-klare prompts, templates en praktische workflows die je meteen kunt gebruiken. Daarna ben je klaar voor de volgende stap: automatiseren, innoveren, of allebei.",
        copyright: "© The Only Constant 2025"
    }
};

export const homeContent: Record<Locale, typeof en> = { en, nl };
