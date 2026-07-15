import { Target, Clock, ShieldCheck, Handshake } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Built for local businesses",
    description: "We only work with service businesses — plumbers, dentists, salons, contractors. We know exactly what your customers look for and how to structure a site that converts.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    description: "Most sites go live in 7–14 days. No months of back-and-forth. You tell us about your business, we build it, you start getting calls.",
  },
  {
    icon: ShieldCheck,
    title: "No risk, no BS",
    description: "One-time payment. Clear scope before you pay a cent. 7-day money-back guarantee if you're not happy. We make it impossible to lose.",
  },
  {
    icon: Handshake,
    title: "We stick around",
    description: "Post-launch tweaks, questions about your site, help with hosting — we don't disappear after delivery. Support is included in every package.",
  },
]

export default function AboutContent() {
  return (
    <section className="py-16 sm:py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Short story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why businesses choose us over agencies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Big agencies charge $5,000+ and take months. DIY builders leave you with something that looks amateur.
            We sit in the middle: professional results, clear pricing, done in days. Every site we build has one job — get your customers to pick up the phone or fill out a form.
          </p>
        </div>

        {/* Why us cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 sm:p-7"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-foreground">20+</p>
            <p className="text-sm text-muted-foreground mt-1">Businesses served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">7–14</p>
            <p className="text-sm text-muted-foreground mt-1">Days to launch</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground mt-1">Satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
