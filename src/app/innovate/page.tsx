import type { Metadata } from 'next';
import { PageLayout } from "@/design-system/components/Layout";
import { Heading, Text } from "@/design-system/components/Typography";

export const metadata: Metadata = {
    title: 'Innovate | The Only Constant',
};

export default function InnovatePage() {
    return (
        <PageLayout variant="landing">
            <div className="container mx-auto pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8">
                <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
                    <Heading level={1} className="text-display-section">
                        Innovate
                    </Heading>
                    <Text size="lg" className="text-muted-foreground leading-relaxed">
                        We help organizations move beyond incremental improvements to create breakthrough value.
                        By leveraging cutting-edge technologies and new business models, we turn ambitious ideas into proven market reality.
                    </Text>
                </div>
            </div>
        </PageLayout>
    );
}
