import React from 'react';
import { Switch as ShadcnSwitch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SwitchProps {
    label: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    id?: string;
}

import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";

// ... interfaces ...

export function Switch({ label, checked, onCheckedChange, id }: SwitchProps) {
    const switchId = id || label.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="flex items-center space-x-2">
            <ShadcnSwitch
                id={switchId}
                checked={checked}
                onCheckedChange={onCheckedChange}

            />
            <Label htmlFor={switchId} className={cn("text-foreground", typography.variants.body.sm)}>
                {label}
            </Label>
        </div>
    );
}
