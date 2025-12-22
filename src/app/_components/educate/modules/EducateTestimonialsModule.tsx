import { HomeModule } from "../../home/HomeModule";
import { TestimonialsSection, TestimonialItem } from "@/components/sections/TestimonialsSection";

const TESTIMONIALS: TestimonialItem[] = [
    {
        quote: "Finally, an AI workshop that uses our real data and challenges. I left with actual knowledge I could put to work immediately, not just theoretical knowledge."
    },
    {
        quote: "In 4 hours I went from ChatGPT beginner to building a Custom GPT that saves our team 10 hours per week. The hands-on approach made all the difference."
    },
    {
        quote: "I walked away with more than I expected. It was a lot and at times a bit overwhelming, but I learned more in those hours than in most full-day trainings."
    }
];

export function EducateTestimonialsModule() {
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
                headingLabel="TESTIMONIALS"
                items={TESTIMONIALS}
                className="py-0 md:py-0"
            />
        </HomeModule>
    );
}
