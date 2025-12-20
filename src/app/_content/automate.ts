export interface AutomateContent {
    hero: {
        index: string;
        title: string;
        intro: string;
    };
    readyToRun: {
        eyebrow: string;
        description: string;
        items: {
            title: string;
            body: string;
        }[];
    };
    approach: {
        eyebrow: string;
        items: {
            badge: string;
            title: string;
            bullets: string[];
        }[];
    };
    whyUs: {
        eyebrow: string;
        items: {
            title: string;
            body: string;
        }[];
    };
}

export const automateContent: AutomateContent = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        intro: "We build and deploy AI agents that do the work. From customer service to internal operations, we automate the repetitive so your team can focus on the exceptional."
    },
    readyToRun: {
        eyebrow: "READY-TO-RUN AI SOLUTIONS",
        description: "Proven modules we can deploy in days, not months.",
        items: [
            {
                title: "CUSTOMER SERVICE AGENT",
                body: "Handle 24/7 support inquiries with human-like empathy and accuracy. Escalates complex issues seamlessly."
            },
            {
                title: "HR ONBOARDING ASSISTANT",
                body: "Guide new hires through paperwork, policies, and setup automatically. Reduces HR workload by 80%."
            },
            {
                title: "LEAD QUALIFICATION BOT",
                body: "Engage website visitors instantly, qualify intent, and book meetings for your sales team."
            },
            {
                title: "DOCUMENT PROCESSING",
                body: "Extract data from invoices, contracts, and forms automatically. Syncs directly to your ERP/CRM."
            },
            {
                title: "SOCIAL MEDIA MANAGER",
                body: "Plan, draft, and schedule content based on your brand voice. Monitors engagement and suggests replies."
            }
        ]
    },
    approach: {
        eyebrow: "APPROACH",
        items: [
            {
                badge: "WEEK 1",
                title: "AUDIT & DESIGN",
                bullets: [
                    "Analyze current workflows",
                    "Identify high-impact targets",
                    "Design agent architecture"
                ]
            },
            {
                badge: "WEEK 2",
                title: "BUILD & TRAIN",
                bullets: [
                    "Configure agent behaviors",
                    "Integrate with tools",
                    "Rigorous testing/refinement"
                ]
            },
            {
                badge: "WEEK 3",
                title: "DEPLOY & SCALE",
                bullets: [
                    "Live deployment",
                    "Team training",
                    "Performance monitoring"
                ]
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        items: [
            {
                title: "Practical, Not Theoretical",
                body: "We don't just advise; we build. You get working software, not just a slide deck."
            },
            {
                title: "Human-in-the-Loop",
                body: "Our agents efficiently hand off to humans when needed. Automation enhances your team, it doesn't replace them."
            },
            {
                title: "Security First",
                body: "Enterprise-grade data protection. We ensure your proprietary data remains yours and stays secure."
            },
            {
                title: "Platform Agnostic",
                body: "We build on the best tools for your stack, whether that's OpenAI, Azure, or open-source models."
            }
        ]
    }
};
