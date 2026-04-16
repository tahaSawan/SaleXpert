type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  dark?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center", dark = false }: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-14 ${align === "center" ? "mx-auto text-center" : ""} ${dark ? "text-white" : ""}`}
    >
      <p
        className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
          dark ? "text-sky-300/90" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
