import * as React from "react"

import { cn } from "@/lib/utils"
import { typography } from "@/design-system/tokens/typography"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-surface border border-[var(--instrument-input-border)] bg-[var(--instrument-input-bg)] text-[var(--instrument-input-fg)] px-3 py-2 shadow-surface transition-[color,box-shadow] outline-none",
        typography.variants.ui.input.value,
        "placeholder:text-[var(--instrument-input-placeholder)]",
        "selection:bg-primary selection:text-primary-foreground",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
