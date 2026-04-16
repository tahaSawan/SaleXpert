const milestones = [
  {
    label: "Focus",
    title: "Built for local sales",
    description:
      "SaleXpert works with trades and service businesses—plumbers, dentists, salons, contractors—where the goal is simple: more qualified calls and bookings.",
  },
  {
    label: "Delivery",
    title: "Sites that convert",
    description:
      "Every project is structured around your services, service area, proof, and a clear next step (call, quote, or book)—especially on mobile.",
  },
  {
    label: "Pricing",
    title: "No mystery invoices",
    description:
      "Straightforward packages and timelines. You know what you pay up front and what you get in return.",
  },
]

export default function TimelineSection() {
  return (
    <section className="py-20 sm:py-24 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">How we work</h2>
          <p className="text-muted-foreground text-base">
            What you can expect when you work with SaleXpert—not a timeline of fake awards, just our promise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`md:${index % 2 === 0 ? "ml-auto" : ""} md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">{milestone.label}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
