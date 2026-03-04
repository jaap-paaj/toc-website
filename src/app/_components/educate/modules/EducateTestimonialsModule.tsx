import { HomeModule } from "../../home/HomeModule";
import { TestimonialsSection, TestimonialItem } from "@/components/sections/TestimonialsSection";
import { educateContent } from "@/app/_content/educate";

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
                eyebrow={educateContent.testimonials.eyebrow}
                items={[...educateContent.testimonials.items]}
                pad="none"
            />
        </HomeModule>
    );
}
