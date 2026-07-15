import { SectionHeader } from "@/components/section-header"
import { MessageSquare, Hammer, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Tell us about your business",
    description: "Takes 2 minutes. We respond with an exact quote and timeline — no vague estimates, no hidden fees.",
  },
  {
    icon: Hammer,
    title: "We build your site",
    description: "Mobile-first, SEO-ready, designed to make your phone ring. You review it before anything goes live.",
  },
  {
    icon: Rocket,
    title: "Go live & start winning",
    description: "Your site launches. Customers find you. You start getting the calls your competitors have been getting.",
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple process"
          title="From zero to live in under 2 weeks"
          subtitle="While you focus on your business, we handle everything."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative rounded-xl border border-border bg-card p-7 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step {i + 1}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
