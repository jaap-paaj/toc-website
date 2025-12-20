import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export function TextArea({ label, className, ...props }: TextAreaProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
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
