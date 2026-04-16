const labels = ["Plumbing & HVAC", "Electrical", "Dental & medical", "Salons & spas", "Contractors", "Professional services"]

export default function TrustStrip() {
  return (
    <section id="trust" className="border-b border-border bg-background py-10 sm:py-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Built for local service businesses like yours
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {labels.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground/90"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
