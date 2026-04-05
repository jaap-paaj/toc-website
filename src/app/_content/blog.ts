import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        title: "BLOG",
    },
    overview: {
        latestTitle: "Latest Thinking",
        moreTitle: "More Thinking",
    },
    sidebar: {
        latestPosts: "Latest Posts",
        viewAll: "View all blogs",
    },
    detail: {
        moreFrom: "More from The Only Constant",
        viewAll: "View all blogs",
        newBadge: "New",
    },
    authorBio: {
        label: "About the author",
        name: "Maarten Mantje",
        description:
            "Founder of The Only Constant, an AI consultancy for marketing and organization innovation. He helps organizations discover what AI makes possible and builds the proof that it works.",
    },
    faq: {
        title: "Frequently Asked Questions",
    },
};

const nl: typeof en = {
    hero: {
        title: "BLOG",
    },
    overview: {
        latestTitle: "Laatste inzichten",
        moreTitle: "Meer inzichten",
    },
    sidebar: {
        latestPosts: "Laatste inzichten",
        viewAll: "Bekijk alle blogs",
    },
    detail: {
        moreFrom: "Meer inzichten van The Only Constant",
        viewAll: "Bekijk alle blogs",
        newBadge: "Nieuw",
    },
    authorBio: {
        label: "Over de auteur",
        name: "Maarten Mantje",
        description:
            "Oprichter van The Only Constant, een AI consultancy voor marketing en organisatie-innovatie. Hij helpt organisaties ontdekken wat AI mogelijk maakt en bouwt het bewijs dat het werkt.",
    },
    faq: {
        title: "Veelgestelde vragen",
    },
};

export const blogContent: Record<Locale, typeof en> = { en, nl };
