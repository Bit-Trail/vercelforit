import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { LoadingSpinner } from "./loading"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-white text-gray-900 shadow-md hover:bg-gray-50 hover:shadow-lg border border-gray-200 transition-all duration-200 font-semibold",
        destructive:
          "bg-destructive text-white shadow-md hover:bg-destructive/90 hover:shadow-lg focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 transition-all duration-200",
        outline:
          "border-2 border-primary bg-transparent text-primary shadow-sm hover:bg-primary hover:text-white hover:shadow-md transition-all duration-200 font-semibold",
        secondary:
          "bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200 font-semibold",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-200",
        success: "bg-green-600 text-white shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200",
        warning: "bg-yellow-500 text-white shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-200",
        info: "bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4 text-sm rounded-xl",
        sm: "h-8 rounded-lg gap-1.5 px-4 has-[>svg]:px-3 text-xs",
        lg: "h-12 rounded-xl px-8 has-[>svg]:px-6 text-base",
        xl: "h-14 rounded-2xl px-10 has-[>svg]:px-8 text-lg",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText = "Loading...",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        loading && "button-loading",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner size="sm" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
