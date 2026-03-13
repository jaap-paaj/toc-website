import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        title: "ABOUT US",
    },
    approach: {
        eyebrow: "OUR APPROACH",
        title: "We believe in practical AI.",
        description: [
            "We believe in practical change. AI is a tool to build and test ideas fast, not to produce more slides. Strategy should be proven through making, with prototypes, Proofs of Concept, and automations that create clarity. We work within real constraints, learn fast with real users and operations, and scale what earns its place.",
        ]
    },
    team: {
        eyebrow: "OUR TEAM",
        title: "",
        description: "We are a senior core team, supported by trusted specialist network when it improves the work. The founders stay hands-on throughout. We scale expertise up or down based on the challenge, so you get depth without unnecessary overhead.",
        members: [
            {
                name: "Maarten Mantje",
                role: "",
                imageSrc: "/images/team/team-03.png",
                email: "maarten@theonlyconstant.nl",
                linkedinUrl: "https://www.linkedin.com/in/maarten-mantje-385612/"
            },
            {
                name: "Julien Amoureus",
                role: "",
                imageSrc: "/images/team/team-02.jpg",
                email: "julien@theonlyconstant.nl",
                linkedinUrl: "https://www.linkedin.com/in/julienamoureus/"
            },
            {
                name: "JAAP BEÄRDA",
                role: "",
                imageSrc: "/images/team/team-01.jpg",
                email: "jaap@theonlyconstant.nl",
                linkedinUrl: "https://www.linkedin.com/in/jaapbearda/"
            }
        ]
    }
};

const nl: typeof en = {
    hero: {
        title: "OVER ONS",
    },
    approach: {
        eyebrow: "ONZE AANPAK",
        title: "Wij geloven in praktische AI.",
        description: [
            "Wij geloven in praktische verandering. AI is een middel om ideeën snel te bouwen en te testen, niet om meer slides te produceren. Strategie moet je bewijzen door te bouwen, met prototypes, Proofs of Concept en automatiseringen die helderheid creëren. We werken binnen de echte beperkingen van organisaties, leren snel met echte gebruikers en operaties, en schalen op wat in de praktijk werkt.",
        ]
    },
    team: {
        eyebrow: "ONS TEAM",
        title: "",
        description: "Wij zijn een senior kernteam, ondersteund door een vertrouwd specialistennetwerk wanneer dat het werk verbetert. De oprichters blijven hands-on betrokken. We schalen expertise op of af op basis van de uitdaging, zodat je diepgang krijgt zonder onnodige overhead.",
        members: [
            {
                name: "Maarten Mantje",
                role: "",
                imageSrc: "/images/team/team-03.png",
                email: "maarten@theonlyconstant.nl",
                linkedinUrl: "https://www.linkedin.com/in/maarten-mantje-385612/"
            },
            {
                name: "Julien Amoureus",
                role: "",
                imageSrc: "/images/team/team-02.jpg",
                email: "julien@theonlyconstant.nl",
                linkedinUrl: "https://www.linkedin.com/in/julienamoureus/"
            },
            {
                name: "JAAP BEÄRDA",
                role: "",
                imageSrc: "/images/team/team-01.jpg",
                email: "jaap@theonlyconstant.nl",
                linkedinUrl: "https://www.linkedin.com/in/jaapbearda/"
            }
        ]
    }
};

export const aboutContent: Record<Locale, typeof en> = { en, nl };
