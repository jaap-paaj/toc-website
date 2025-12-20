import type { Metadata } from 'next';
import { PageLayout } from "@/design-system/components/Layout";
import { Heading, Text } from "@/design-system/components/Typography";

export const metadata: Metadata = {
    title: 'About Us | The Only Constant',
};

export default function AboutPage() {
    return (
        <PageLayout variant="landing">
            <div className="container mx-auto pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8">
                <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
                    <Heading level={1} className="text-display-section">
                        About Us
                    </Heading>
                    <Text size="lg" className="text-muted-foreground leading-relaxed">
                        The Only Constant is a digital transformation agency built for a faster world.
                        We believe that in an era of rapid change, the ability to adapt is the ultimate competitive advantage.
                    </Text>
                </div>
            </div>
        </PageLayout>
    );
}
