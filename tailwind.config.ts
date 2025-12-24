import type { Config } from "tailwindcss";

const config: Config = {
    // Scan *alles* onder src zodat tokens, design-system
    // en component-level utility strings altijd worden opgepikt
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
            },

            boxShadow: {
                card: "0 2px 16px rgba(0,0,0,0.06)",
                "card-hover": "0 8px 30px rgba(0,0,0,0.1)",
            },

            fontSize: {
                // Explicitly including larger sizes if not default, but standard TW scale usually covers these.
                // We will stick to standard scale but ensure we have the line-heights we need.
            },

            lineHeight: {
                'hero-tight': '0.85',
                'section-tight': '0.9',
            },

            fontFamily: {
                sans: "var(--font-sans)",
                serif: "var(--font-sans)", // Enforce no-font-pairing policy
            },
        },
    },

    plugins: [],
};

export default config;