const labels = ["Plumbing & HVAC", "Electrical", "Dental & medical", "Salons & spas", "Contractors", "Professional services"]

export default function TrustStrip() {
  return (
    <section id="trust" className="border-b border-border bg-background py-10 sm:py-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
          Who we build for
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {labels.map((label, i) => (
            <span
              key={label}
              className="trust-chip-in inline-flex items-center rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground/90"
              style={{ animationDelay: `${80 + i * 55}ms` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
