
export const scanContent = {
    hero: {
        title: "Unlock Your AI Potential",
        description: "Join us for a focused 45-minute Opportunity Scan to identify where AI can deliver the most immediate value to your organization.",
        cta: {
            label: "Book Your Scan",
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
