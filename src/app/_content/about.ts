import type { Locale } from "@/lib/i18n/config";

const en = {
    meta: {
        title: "About Us | The Only Constant",
    },
    hero: {
        title: "ABOUT US",
    },
    approach: {
        eyebrow: "OUR APPROACH",
        title: "WE BELIEVE IN PRACTICAL CHANGE.",
        description: [
            "You prove strategy by building, not by talking about it. We design and build prototypes, Proofs of Concept and automations, with AI as an accelerator. We work within real constraints, learn with real users and scale what proves its value.",
        ]
    },
    team: {
        eyebrow: "OUR TEAM",
        title: "",
        description: "Small team, hands-on. Three founders who build alongside you, supported by specialists when the work calls for it. No layers between client and maker.",
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
    meta: {
        title: "Over ons | The Only Constant",
    },
    hero: {
        title: "OVER ONS",
    },
    approach: {
        eyebrow: "ONZE AANPAK",
        title: "WE GELOVEN IN PRAKTISCHE VERANDERING.",
        description: [
            "Strategie bewijs je door te maken, niet door erover te praten. Wij ontwerpen en bouwen prototypes, Proofs of Concept en automations, met AI als versneller. We werken binnen echte beperkingen, leren met echte gebruikers en schalen op wat zijn waarde bewijst.",
        ]
    },
    team: {
        eyebrow: "ONS TEAM",
        title: "",
        description: "Klein team, hands-on. Drie oprichters die zelf meebouwen, aangevuld met specialisten wanneer het werk daarom vraagt. Geen laag tussen klant en maker.",
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
