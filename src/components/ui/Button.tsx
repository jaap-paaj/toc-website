import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { typography } from "@/design-system/tokens/typography"

const buttonVariants = cva(
  // Base: always interactive cursor unless disabled
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-surface transition-all " +
  "cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
  "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
  "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border bg-background shadow-surface hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: cn("h-9 px-4 py-2 has-[>svg]:px-3", typography.variants.ui.button.md),
        sm: cn("h-8 rounded-surface gap-1.5 px-3 has-[>svg]:px-2.5", typography.variants.ui.button.sm),
        lg: cn("h-10 rounded-surface px-6 has-[>svg]:px-4", typography.variants.ui.button.lg),
        xl: cn("h-14 rounded-full px-8", typography.variants.ui.button.lg), // Hero CTA size
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // Accessibility enforcement: Icon-only buttons must have an accessible name
    if (process.env.NODE_ENV === "development") {
      const isIconSize = typeof size === "string" && size.startsWith("icon")
      const hasAccessibleName =
        props["aria-label"] || props["aria-labelledby"] || props.title

      if (isIconSize && !hasAccessibleName) {
        console.warn(
          "ACCESSIBILITY VIOLATION: Button with icon size must have an accessible name (aria-label, aria-labelledby, or title).",
          { className, size, ...props }
        )
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }