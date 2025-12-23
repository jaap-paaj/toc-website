import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function TextInput({ label, className, ...props }: TextInputProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <Label className={cn("text-muted-foreground ml-1", typography.variants.meta.label)}>
                    {label}
                </Label>
            )}
            <Input
                className={`w-full h-12 px-4 ${className}`}
                {...props}
            />
        </div>
    );
}
