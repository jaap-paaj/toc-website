import type { Locale } from "@/lib/i18n/config";

interface PillarBlogLink {
    slug: string;
    title: string;
}

interface PillarService {
    href: string;
    label: string;
}

interface PillarContent {
    meta: { title: string; description: string };
    hero: { eyebrow: string; title: string; subtitle: string };
    intro: string[];
    blogLinks: PillarBlogLink[];
    services: PillarService[];
}

const aiStrategie = {
    en: {
        meta: {
            title: "AI Strategy - The Only Constant",
            description: "From question to proof. Articles about building an AI strategy that starts with work and ends with decisions.",
        },
        hero: { eyebrow: "Pillar", title: "AI Strategy", subtitle: "from question to proof" },
        intro: [
            "Start with the right questions, not the right tools. The organizations that succeed with AI share one trait: they begin with focus and end with decisions.",
            "These articles help you build an AI strategy that starts with the work and produces evidence, not slide decks.",
        ],
        blogLinks: [
            { slug: "wat-is-ai-strategie", title: "What is an AI strategy (and why most don't work)" },
            { slug: "ai-strategie-90-dagen", title: "AI strategy in ninety days" },
            { slug: "ai-readiness", title: "AI readiness: when is your organization ready?" },
            { slug: "follow-the-friction", title: "Follow the Friction: why the best AI strategy starts with looking" },
            { slug: "solutioneering", title: "Solutioneering: the most expensive mistake in AI" },
            { slug: "shadow-ai", title: "Shadow AI: the signal you're missing" },
        ],
        services: [
            { href: "/educate", label: "AI Workshop" },
            { href: "/innovate", label: "Innovation Sprint" },
        ],
    },
    nl: {
        meta: {
            title: "AI-strategie - The Only Constant",
            description: "Van vraag naar bewijs. Artikelen over het bouwen van een AI-strategie die begint bij het werk en eindigt bij beslissingen.",
        },
        hero: { eyebrow: "Pillar", title: "AI-strategie", subtitle: "van vraag naar bewijs" },
        intro: [
            "Begin met de juiste vragen, niet met de juiste tools. De organisaties die slagen met AI delen een eigenschap: ze beginnen met focus en eindigen met beslissingen.",
            "Deze artikelen helpen je een AI-strategie bouwen die begint bij het werk en bewijs oplevert, geen slideware.",
        ],
        blogLinks: [
            { slug: "wat-is-ai-strategie", title: "Wat is een AI-strategie (en waarom de meeste niet werken)" },
            { slug: "ai-strategie-90-dagen", title: "AI-strategie in negentig dagen" },
            { slug: "ai-readiness", title: "AI readiness: wanneer is je organisatie klaar?" },
            { slug: "follow-the-friction", title: "Follow the Friction: waarom de beste AI-strategie begint met kijken" },
            { slug: "solutioneering", title: "Solutioneering: de duurste fout bij AI" },
            { slug: "shadow-ai", title: "Shadow AI: het signaal dat je mist" },
        ],
        services: [
            { href: "/educate", label: "AI Workshop" },
            { href: "/innovate", label: "Innovation Sprint" },
        ],
    },
} satisfies Record<Locale, PillarContent>;

const aiAutomatisering = {
    en: {
        meta: {
            title: "AI Automation Guide - The Only Constant",
            description: "From friction to working solution. Articles about AI automation that actually adds value.",
        },
        hero: { eyebrow: "Pillar", title: "AI Automation", subtitle: "from friction to working solution" },
        intro: [
            "Faster isn't better if you're speeding up the wrong thing. The best AI automation starts with understanding what should exist, not what already does.",
            "These articles show how to approach AI automation that truly adds value, without paving the cow path.",
        ],
        blogLinks: [
            { slug: "ai-automatisering", title: "AI automation doesn't start with the tool" },
            { slug: "ai-agents-bedrijven", title: "AI agents for business: what they can and can't do" },
            { slug: "vier-vormen-ai", title: "Four forms of AI for organizations" },
            { slug: "proof-before-scale", title: "Proof before Scale: don't scale what isn't proven" },
            { slug: "zombie-pilots", title: "Zombie Pilots: the pilots that won't die" },
            { slug: "ai-drift", title: "AI drift: the silent degradation nobody sees" },
        ],
        services: [
            { href: "/automate", label: "AI Automation" },
        ],
    },
    nl: {
        meta: {
            title: "AI Automatisering Gids - The Only Constant",
            description: "Van frictie naar werkende oplossing. Artikelen over AI-automatisering die echt waarde toevoegt.",
        },
        hero: { eyebrow: "Pillar", title: "AI-automatisering", subtitle: "van frictie naar werkende oplossing" },
        intro: [
            "Sneller is niet beter als je het verkeerde versnelt. De beste AI-automatisering begint met begrijpen wat zou moeten bestaan, niet met wat er al is.",
            "Deze artikelen laten zien hoe je AI-automatisering aanpakt die echt waarde toevoegt, zonder het bestaande spoor te asfalteren.",
        ],
        blogLinks: [
            { slug: "ai-automatisering", title: "AI automatisering begint niet bij de tool" },
            { slug: "ai-agents-bedrijven", title: "AI agents voor bedrijven: wat ze wel en niet kunnen" },
            { slug: "vier-vormen-ai", title: "Vier vormen van AI voor organisaties" },
            { slug: "proof-before-scale", title: "Proof before Scale: schaal niet op wat niet bewezen is" },
            { slug: "zombie-pilots", title: "Zombie Pilots: de pilots die niet doodgaan" },
            { slug: "ai-drift", title: "AI drift: de stille degradatie die niemand ziet" },
        ],
        services: [
            { href: "/automate", label: "AI Automatisering" },
        ],
    },
} satisfies Record<Locale, PillarContent>;

const aiEnMensen = {
    en: {
        meta: {
            title: "AI and People - The Only Constant",
            description: "AI changes not just processes, but work itself. Articles about governance, responsibility, and whether work has actually improved.",
        },
        hero: { eyebrow: "Pillar", title: "AI and People", subtitle: "making work better" },
        intro: [
            "AI doesn't just change processes, it changes work. The question isn't whether AI saves time, but what happens with the time it saves.",
            "These articles explore the human side: governance, responsibility, skills, and the question whether work has actually gotten better.",
        ],
        blogLinks: [
            { slug: "meaning-test", title: "The Meaning Test: has work improved or just gotten faster?" },
            { slug: "junior-gap", title: "The Junior Gap: the invisible risk of AI" },
            { slug: "ai-governance", title: "AI governance: less framework, more rhythm" },
            { slug: "ai-eu-ai-act", title: "The EU AI Act: what it means for your organization" },
            { slug: "ai-workshop-bedrijven", title: "AI workshop for business: beyond the inspiration session" },
            { slug: "ai-consultancy-kiezen", title: "Choosing an AI consultancy: the question nobody asks" },
            { slug: "ai-proof-of-concept", title: "AI proof of concept: from pilot graveyard to decision data" },
        ],
        services: [
            { href: "/educate", label: "AI Workshop" },
        ],
    },
    nl: {
        meta: {
            title: "AI en Mensen - The Only Constant",
            description: "AI verandert niet alleen processen, maar werk zelf. Artikelen over governance, verantwoordelijkheid en de vraag of het werk beter is geworden.",
        },
        hero: { eyebrow: "Pillar", title: "AI en mensen", subtitle: "werk beter maken" },
        intro: [
            "AI verandert niet alleen processen, het verandert werk. De vraag is niet of AI tijd bespaart, maar wat er met die tijd gebeurt.",
            "Deze artikelen gaan over de menselijke kant: governance, verantwoordelijkheid, vaardigheden en de vraag of het werk echt beter is geworden.",
        ],
        blogLinks: [
            { slug: "meaning-test", title: "De Meaning Test: is het werk beter geworden of alleen sneller?" },
            { slug: "junior-gap", title: "De Junior Gap: het onzichtbare risico van AI" },
            { slug: "ai-governance", title: "AI governance: minder framework, meer ritme" },
            { slug: "ai-eu-ai-act", title: "De EU AI Act: wat het betekent voor je organisatie" },
            { slug: "ai-workshop-bedrijven", title: "AI workshop voor bedrijven: voorbij de inspiratiesessie" },
            { slug: "ai-consultancy-kiezen", title: "AI consultancy kiezen: de vraag die niemand stelt" },
            { slug: "ai-proof-of-concept", title: "AI proof of concept: van pilot-kerkhof naar beslisdata" },
        ],
        services: [
            { href: "/educate", label: "AI Workshop" },
        ],
    },
} satisfies Record<Locale, PillarContent>;

export const pillarContent = {
    "ai-strategie": aiStrategie,
    "ai-automatisering-gids": aiAutomatisering,
    "ai-en-mensen": aiEnMensen,
} as const;

export type PillarSlug = keyof typeof pillarContent;

/**
 * Look up which pillar page a blog post belongs to.
 * Returns pillar slug and localized title, or null if no pillar match.
 */
/** Short tag labels for pillar badges on blog posts */
const pillarTagLabels: Record<PillarSlug, Record<Locale, string>> = {
    "ai-strategie": { nl: "Strategie", en: "Strategy" },
    "ai-automatisering-gids": { nl: "Automatisering", en: "Automation" },
    "ai-en-mensen": { nl: "Mensen & Organisatie", en: "People & Organization" },
};

/**
 * Look up which pillar page a blog post belongs to.
 * Returns pillar slug, localized title, and short tag label.
 */
export function getPillarForBlog(
    blogSlug: string,
    locale: Locale
): { pillarSlug: PillarSlug; title: string; tagLabel: string } | null {
    for (const [pillarSlug, pillar] of Object.entries(pillarContent)) {
        const slug = pillarSlug as PillarSlug;
        const content = pillar[locale];
        if (content.blogLinks.some((link) => link.slug === blogSlug)) {
            return {
                pillarSlug: slug,
                title: content.hero.title,
                tagLabel: pillarTagLabels[slug][locale],
            };
        }
    }
    return null;
}
