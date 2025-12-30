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
        cards: [
            {
                title: "VISIT US",
                lines: [
                    "Kon. Wilhelminalaan 21",
                    "3818 HN Amersfoort",
                    "The Netherlands",
                ],
                mapLink: {
                    label: "View on Google Maps",
                    href: "https://www.google.com/maps/search/?api=1&query=Kon.+Wilhelminalaan+21,+3818+HN+Amersfoort",
                },
            },
            {
                title: "REGISTERED ADDRESS",
                lines: [
                    "The Only Constant B.V.",
                    "Surinameplein 1 HS",
                    "1058 GL Amsterdam",
                    "The Netherlands",
                ],
                items: [
                    { label: "Chamber of Commerce (KvK)", value: "91800528" },
                    { label: "VAT (BTW)", value: "NL865775230B01" },
                    { label: "IBAN", value: "NL52 BUNQ 2100 3024 93" },
                ],
            },
        ],
    },
} as const;
