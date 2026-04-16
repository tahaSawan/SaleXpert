const stats = [
  { value: "3", label: "Clear packages", sub: "Starter to full build" },
  { value: "Mobile", label: "Mobile-first design", sub: "Layouts built for phones first" },
  { value: "Local", label: "Search-friendly structure", sub: "Clear pages, titles, and areas" },
  { value: "1×", label: "One-time project fees", sub: "Scope agreed before work starts" },
]

export default function StatsBar() {
  return (
    <section id="stats" className="border-y border-border bg-muted/40 py-12 sm:py-14 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight tabular-nums">{s.value}</p>
              <p className="mt-1 font-semibold text-foreground text-sm sm:text-base">{s.label}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
