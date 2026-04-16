type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: string
  /** dark: slate band (matches home hero). light: subtle gray. */
  variant?: "dark" | "light"
  align?: "center" | "left"
}

export function PageHero({ eyebrow, title, subtitle, variant = "dark", align = "center" }: PageHeroProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={`relative overflow-hidden border-b ${
        isDark ? "border-white/10 bg-slate-950 text-white" : "border-border bg-muted/30 text-foreground"
      }`}
    >
      {isDark ? (
        <>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_80%_-30%,oklch(0.45_0.2_250/0.3),transparent)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,oklch(0.35_0.08_250/0.35),transparent)]" />
        </>
      ) : null}

      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
            isDark ? "text-sky-300/90" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight leading-tight">{title}</h1>
        {subtitle ? (
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            } ${isDark ? "text-white/75" : "text-muted-foreground"}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
