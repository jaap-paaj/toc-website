import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        description: "Most companies use AI to do what they already did, just faster. We help our clients discover where change delivers the most value.",
        cta: {
            label: "EXPLORE OUR SERVICES",
            href: "#capabilities",
        }
    },
    about: {
        eyebrow: "About Us",
        statementLines: [
            "PROOF FOR",
            "BETTER DECISIONS"
        ],
        imageSrc: "/images/home/about.png",
        description: [
            "We're a strategy and design agency for organisations that want real progress. No reports or roadmaps, but prototypes, automations and PoCs you can test and act on. So you know where to invest before you scale."
        ],
        cta: {
            label: "MORE ABOUT US",
            href: "#"
        }
    },
    services: {
        eyebrow: "Our Services",
        items: [
            {
                id: "01",
                title: "EDUCATE",
                description: "Learning AI tools takes an afternoon. Knowing where to apply them is the real work. Our training programmes start with your own challenges and end with skills you'll use tomorrow.",
                cta: {
                    label: "Explore Educate",
                    href: "/educate",
                }
            },
            {
                id: "02",
                title: "AUTOMATE",
                description: "Most automations fail because they automate the wrong thing. We start with the user and the goals. Then we design the process together and build the automation.",
                cta: {
                    label: "Explore Automate",
                    href: "/automate",
                }
            },
            {
                id: "03",
                title: "INNOVATE",
                description: "Innovation isn't about coming up with ideas. It's about finding proof for the best ones. Using proven design methods and AI, we build what works before you go all in.",
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
        eyebrow: "Latest Insights",
        newBadge: "New",
        viewAll: "View all",
    },
    footerCta: {
        title: [
            "FIRST CONVERSATION,",
            "FIRST DIRECTION"
        ],
        cta: {
            label: "GET IN TOUCH",
            href: "/contact"
        },
        panelTitle: "",
        panelBody: "After one conversation you'll know where the biggest opportunities are and the smallest first step to prove them.",
    }
};

const nl: typeof en = {
    hero: {
        description: "De meeste bedrijven gebruiken AI om sneller te doen wat ze al deden. Wij helpen onze klanten ontdekken waar verandering het meeste oplevert.",
        cta: {
            label: "BEKIJK ONZE DIENSTEN",
            href: "#capabilities",
        }
    },
    about: {
        eyebrow: "Over Ons",
        statementLines: [
            "BEWIJS VOOR",
            "BETERE BESLISSINGEN"
        ],
        imageSrc: "/images/home/about.png",
        description: [
            "We zijn een strategie- en design agency voor organisaties die concreet vooruit willen. Geen rapporten of roadmaps, maar prototypes, automations en PoCs die je kunt testen en waarop je kunt beslissen. Zodat je weet waar je op inzet voordat je opschaalt."
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
                description: "AI-tools leren kost een middag. Weten waar je ze inzet is het echte werk. Onze trainingen beginnen bij de eigen uitdagingen en eindigen met vaardigheden die je morgen al inzet.",
                cta: {
                    label: "Ontdek Educate",
                    href: "/educate",
                }
            },
            {
                id: "02",
                title: "AUTOMATE",
                description: "De meeste automations mislukken omdat ze het verkeerde automatiseren. Wij starten bij de gebruiker en de doelen. Daarna ontwerpen we samen het proces en bouwen we de automation.",
                cta: {
                    label: "Ontdek Automate",
                    href: "/automate",
                }
            },
            {
                id: "03",
                title: "INNOVATE",
                description: "Innovatie gaat niet om ideeën bedenken, het gaat om bewijs vinden voor de beste. Met beproefde designmethoden en AI bouwen we wat werkt, voordat je er groot op inzet.",
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
            "EERSTE GESPREK,",
            "EERSTE RICHTING"
        ],
        cta: {
            label: "NEEM CONTACT OP",
            href: "/contact"
        },
        panelTitle: "",
        panelBody: "Na een gesprek weet je waar de grootste kansen liggen en wat de kleinste eerste stap is om ze te bewijzen.",
    }
};

export const homeContent: Record<Locale, typeof en> = { en, nl };
