import React from 'react';
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

import { typography } from "@/design-system/tokens/typography";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export function TextArea({ label, className, ...props }: TextAreaProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <Label className={cn("text-muted-foreground ml-1", typography.variants.meta.label)}>
                    {label}
                </Label>
            )}
            <Textarea
                className={`w-full min-h-[120px] px-4 py-3 resize-none ${className}`}
                {...props}
            />
        </div>
    );
}
