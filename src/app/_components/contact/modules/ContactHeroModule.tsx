import { Heading, Text } from "@/design-system/components/Typography";
import { HomeModule } from "@/app/_components/home/HomeModule";

export function ContactHeroModule() {
    return (
        <HomeModule id="contact-hero" width="full" className="pt-32 md:pt-48 pb-16 md:pb-24">
            <div className="container mx-auto px-6 md:px-8">
                <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
                    <Heading level={1} className="text-display-section">
                        Contact
                    </Heading>
                    <Text size="lg" className="text-muted-foreground leading-relaxed">
                        Ready to accelerate your AI journey? Whether you&apos;re looking for strategic guidance, custom automation, or team training, we&apos;re here to help. capability for sustainable digital innovation.
                    </Text>
                </div>
            </div>
        </HomeModule>
    );
}
