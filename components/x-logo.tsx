import { cn } from "@/lib/utils"

/**
 * Stroke-based X (no overlapping rects) — round caps/joins, no jagged nubs at crossings.
 * viewBox 32×32; column centers x=12 & x=20.
 */
interface XLogoProps {
  className?: string
  size?: number
  variant?: "default" | "onPrimary"
  barClassName?: string
}

const STROKE = 2.5

export function XLogo({ className, size = 32, variant = "default", barClassName }: XLogoProps) {
  const colorClass =
    barClassName ??
    (variant === "onPrimary" ? "text-primary-foreground" : "text-primary drop-shadow-[0_0_6px_oklch(0.45_0.14_250/0.55)]")

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={cn("block shrink-0 overflow-visible", colorClass, className)}
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top verticals */}
        <line x1="12" y1="1.25" x2="12" y2="10.75" />
        <line x1="20" y1="1.25" x2="20" y2="10.75" />
        {/* Diagonals — meet at crossing; round caps hide subpixel gaps */}
        <line x1="12" y1="11" x2="20" y2="17" />
        <line x1="20" y1="11" x2="12" y2="17" />
        {/* Bottom verticals */}
        <line x1="12" y1="17.25" x2="12" y2="30.75" />
        <line x1="20" y1="17.25" x2="20" y2="30.75" />
      </g>
    </svg>
  )
}
