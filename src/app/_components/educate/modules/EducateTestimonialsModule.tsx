"use client";

import { HomeModule } from "../../home/HomeModule";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { educateContent } from "@/app/_content/educate";
import { useLocale } from "@/lib/i18n/useLocale";

export function EducateTestimonialsModule() {
    const lang = useLocale();

    return (
        <HomeModule
            id="educate-testimonials"
            width="full"

            tone="dark"
            pad="m"
            padTop="none"
            gap="s"
        >
            <TestimonialsSection
                eyebrow={educateContent[lang].testimonials.eyebrow}
                items={[...educateContent[lang].testimonials.items]}
                pad="none"
            />
        </HomeModule>
    );
}
