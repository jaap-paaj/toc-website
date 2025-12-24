import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface HeaderCtaProps {
    cta: { label: string; href: string };
    className?: string;
}

export function HeaderCta({ cta, className }: HeaderCtaProps) {
    return (
        <div className={className}>
            <Button
                asChild
                // "Solid black background, white text"
                // "Solid black background, white text" via tone-dark semantics
                // instead of semantic tokens if tokens don't map to pure black/white in this context.
                // However, --background is Deep Black and --foreground is Off-white.
                // A black button on the green header:
                className="rounded-full px-6 py-5 tone-dark bg-background text-foreground hover:bg-background/80 border-0"
            >
                <Link href={cta.href}>{cta.label}</Link>
            </Button>
        </div>
    );
}
