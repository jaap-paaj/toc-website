
export const scanContent = {
    hero: {
        title: "AI Opportunity Scan: priorities, roadmap and one PoC-ready process in half a day",
        subtitle: "Know where AI pays off. Get a build-ready plan, not a slide deck.",
        outcomes: [
            "Typical outcome 3 prioritised use cases · 1 process mapped for PoC · 90-day roadmap · concrete owners and next steps"
        ],
        cta: {
            label: "Plan 20 minutes",
            href: "/ai-opportunity-scan/book"
        }
    },
    statement: {
        eyebrow: "The Opportunity",
        // Using string array for multi-line emphasis in EditorialStatementSection
        lines: [
            "CLARITY IN",
            "A NOISY WORLD"
        ]
    },
    features: {
        items: [
            {
                title: "Strategic Assessment",
                description: "We analyze your current workflows and identify high-impact areas for AI integration."
            },
            {
                title: "Proven Use Cases",
                description: "See examples of how similar organizations are already generating value with AI."
            },
            {
                title: "Actionable Roadmap",
                description: "Walk away with a prioritized list of next steps to start your AI journey."
            }
        ]
    },
    footerCta: {
        title: [
            "READY TO START?",
            "BOOK NOW"
        ],
        cta: {
            label: "SCHEDULE SESSION",
            href: "/ai-opportunity-scan/book"
        },
        panelTitle: "NEXT STEPS",
        panelBody: "Select a time that works for you. You'll receive a confirmation email with a Google Meet link and a short pre-session questionnaire to help us prepare.",
        copyright: "© The Only Constant 2025"
    },
    booking: {
        title: "Schedule Your Scan",
        embedUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2HBfcp_-gZwOEdeN0WlCgjHeHP1-V8ULrVsEeCpzyluEmmjB9E4HTc5sUbdtiiD6-BEmMdgmLb?gv=true",
        fallback: {
            text: "If booking doesn’t work, use our contact page.",
            cta: {
                label: "Open booking in a new tab",
            },
            contactLink: {
                label: "Contact Page",
                href: "/contact"
            }
        },
        loadingText: "Loading available time slots...",
        backLink: {
            label: "Back to AI Opportunity Scan",
            href: "/ai-opportunity-scan"
        }
    }
} as const;
