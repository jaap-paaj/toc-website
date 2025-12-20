import type { Metadata } from 'next';
import { PageLayout } from "@/design-system/components/Layout";
import { Heading, Text } from "@/design-system/components/Typography";

export const metadata: Metadata = {
    title: 'Automate | The Only Constant',
};

export default function AutomatePage() {
    return (
        <PageLayout variant="landing">
            <div className="container mx-auto pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8">
                <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
                    <Heading level={1} className="text-display-section">
                        Automate
                    </Heading>
                    <Text size="lg" className="text-muted-foreground leading-relaxed">
                        We streamline complex workflows and eliminate repetitive tasks through intelligent automation.
                        Our solutions integrate seamlessly with your existing systems to drive efficiency and reduce operational overhead.
                    </Text>
                </div>
            </div>
        </PageLayout>
    );
}
