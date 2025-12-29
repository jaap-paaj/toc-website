import React from "react";

export const homeContent = {
    hero: {
        description: "The Only Constant is a digital transformation and innovation agency built for a faster world. We help organizations move from assumptions to proven business results. Fast.",
        cta: {
            label: "EXPLORE OUR CAPABILITIES",
            href: "#capabilities",
        }
    },
    about: {
        eyebrow: "About Us",
        title: React.createElement(
            React.Fragment,
            null,
            "DIGITAL INNOVATION",
            React.createElement("br"),
            "THAT DELIVERS",
            React.createElement("br"),
            React.createElement("span", { className: "text-primary" }, "PROVEN IMPACT")
        ),
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
                href: "/educate",
            },
            {
                id: "02",
                title: "AUTOMATE",
                description: "Free your team from repetitive tasks with proven AI solutions that deliver measurable ROI.",
                href: "/automate",
            },
            {
                id: "03",
                title: "INNOVATE",
                description: "Accelerate innovation with AI-driven sprints that deliver validated, ready-to-build solutions fast.",
                href: "/innovate",
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
        eyebrow: "Ready",
        title: React.createElement(
            React.Fragment,
            null,
            "READY FOR CHANGE?",
            React.createElement("br"),
            "LET'S TALK!"
        ),
        cta: {
            label: "INFO@THEONLYCONSTANT.NL",
            href: "mailto:info@theonlyconstant.nl"
        },
        copyright: "© The Only Constant 2025"
    }
} as const;
