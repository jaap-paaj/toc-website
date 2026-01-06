

export const homeContent = {
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
            "We’re a strategy and design partner for teams that need progress without the noise. We combine business goals, human needs and emerging tech to create practical concepts, prototypes and automations built for real-world use.",
            "We focus on outcomes, not hype. That means clearer decisions, less manual work, and early proof of what’s worth building — so you can move faster without guessing."
        ],
        cta: {
            label: "MORE ABOUT US",
            href: "#" // Currently button doesn't have href in module, adding placeholder or if logic needed
        }
    },
    services: {
        eyebrow: "Our Capabilities",
        items: [
            {
                id: "01",
                title: "EDUCATE",
                description: "Build practical AI and innovation skills fast through hands-on workshops using your team’s real challenges.",
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
} as const;
