export const contactContent = {
    hero: {
        title: "CONTACT",
    },
    form: {
        eyebrow: "GET IN TOUCH",
        description: "Fill out the form below and we’ll get back to you shortly.",
        fields: {
            name: { label: "Name", placeholder: "Jane Doe" },
            email: { label: "Email", placeholder: "jane@example.com", error: "Please enter a valid email address." },
            message: { label: "Message", placeholder: "Tell us about your project..." },
        },
        submit: {
            label: "SEND MESSAGE",
            loading: "SENDING...",
        },
        success: {
            title: "Thanks for your message!",
            message: "We have received your inquiry and will reply within 2 business days.",
            resetLabel: "Send another message",
        }
    },
    details: {
        eyebrow: "COMPANY INFORMATION",
        description: "Here you can find our visiting address and administrative details.",
        visit: {
            title: "VISIT US",
            lines: [
                "The Only Constant B.V.",
                "Surinameplein 1 HS",
                "1058 GL Amsterdam",
                "The Netherlands"
            ]
        },
        legal: {
            title: "LEGAL & FINANCE",
            items: [
                { label: "KVK", value: "...." },
                { label: "BTW", value: "...." },
                { label: "BANK", value: "...." },
            ]
        }
    }
} as const;
