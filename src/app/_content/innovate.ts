export interface InnovateContent {
    hero: {
        index: string;
        title: string;
        intro: string;
    };
    propositions: {
        eyebrow: string;
        description: string;
        items: {
            title: string;
            meta: string;
            body: string;
        }[];
    };
    solutions: {
        eyebrow: string;
        description: string;
        items: {
            title: string;
            meta: string;
            body: string;
        }[];
    };
    whyUs: {
        eyebrow: string;
        variant?: "grid" | "comparison";
        comparison?: {
            left: {
                title: string;
                bullets: { tone: "positive" | "negative"; text: string }[];
            };
            right: {
                title: string;
                bullets: { tone: "positive" | "negative"; text: string }[];
            };
        };
        items: {
            title: string;
            body: string;
        }[];
    };
}

export const innovateContent: InnovateContent = {
    hero: {
        index: "03",
        title: "INNOVATE",
        intro: "Strategic decisions are harder than ever before. They need proof over assumptions. Innovate is for proving what to build or change next, before you commit time, budget, and teams.We do this through an AI-supported sprints, using AI to build understanding faster, generate stronger options, and validate earlier through a prototype or Proof of Concept. The result is decision-grade evidence: what to pursue, what to drop, and what to scale."
    },
    propositions: {
        eyebrow: "NEW PROPOSITIONS & PRODUCTS",
        description: "",
        items: [
            {
                title: "Opportunity Sprint",
                meta: "5 days",
                body: "AI-supported research to uncover and validate new market opportunities. Ends with a roadmap and prioritization of high-value ideas."
            },
            {
                title: "Design Sprint",
                meta: "5 days",
                body: "From problem to tested prototype in five days. Accelerated with AI to support ideation, prototyping, and user testing."
            }
        ]
    },
    solutions: {
        eyebrow: "AI-DRIVEN SOLUTIONS",
        description: "",
        items: [
            {
                title: "AI Exploration Sprint",
                meta: "5 days",
                body: "A deep dive into your organization’s AI readiness and opportunities, including feasibility analysis, roadmap, and ROI insights."
            },
            {
                title: "AI Build Sprint",
                meta: "10 days",
                body: "Design and deliver a working AI solution from scratch. Includes development, testing, training, and a plan for scaling."
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        variant: "comparison",
        comparison: {
            left: {
                title: "TRADITIONAL APPROACH",
                bullets: [
                    { tone: "negative", text: "Takes months" },
                    { tone: "negative", text: "High & unpredictable investment" },
                    { tone: "negative", text: "Theoretical analysis & testing after launch" },
                    { tone: "negative", text: "Endless meetings & siloed teams" },
                    { tone: "negative", text: "Reports, presentations, estimations, guess-work" },
                    { tone: "negative", text: "70–90% of all digital innovations fail" }
                ]
            },
            right: {
                title: "OUR INNOVATION SPRINTS",
                bullets: [
                    { tone: "positive", text: "Takes 5–10 days" },
                    { tone: "positive", text: "Low & predictable investment" },
                    { tone: "positive", text: "Real customer input & early testing" },
                    { tone: "positive", text: "Cross-functional collaboration" },
                    { tone: "positive", text: "Working prototype or Proof of Concept" },
                    { tone: "positive", text: "Consistently strong outcomes with repeated use" }
                ]
            }
        },
        items: [
            {
                title: "Fast Validation",
                body: "Test real ideas with real users in days, not months."
            },
            {
                title: "Low Risk",
                body: "Small, predictable investments with clear outcomes."
            },
            {
                title: "Human + AI",
                body: "Creativity amplified by AI — not replaced."
            },
            {
                title: "Built to Scale",
                body: "Every sprint ends with production-ready insights."
            }
        ]
    }
};
