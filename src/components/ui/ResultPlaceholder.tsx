import React from "react";
import { Sparkles } from "lucide-react";
import { Text } from "@/design-system/components/Typography";
import { cn } from "@/lib/utils";


export type ResultPlaceholderProps = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    minHeight?: string | number;
    className?: string;
};

export function ResultPlaceholder({
    title,
    description,
    icon,
    minHeight = '50vh', // Default matching current usage
    className,
}: ResultPlaceholderProps) {
    return (
        <div
            className={cn(
                "bg-muted/50 rounded-2xl flex flex-col items-center justify-center text-center gap-4 p-8 h-full",
                className
            )}
            style={{ minHeight }}
        >
            {icon ? (
                <span className="text-muted-foreground/50 [&>svg]:w-8 [&>svg]:h-8">{icon}</span>
            ) : (
                <Sparkles className="w-8 h-8 text-muted-foreground/50" />
            )}

            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-foreground">
                    {title}
                </h3>
                {description && (
                    <Text size="sm" className="text-muted-foreground max-w-sm mx-auto">
                        {description}
                    </Text>
                )}
            </div>
        </div>
    );
}
