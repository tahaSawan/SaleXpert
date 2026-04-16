import { Zap, Shield, BarChart3, Smartphone, Globe, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const features = [
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Most local customers browse on their phone—your site is built for that first.",
  },
  {
    icon: Zap,
    title: "Fast loading",
    description: "Quick pages reduce bounce and help with search visibility.",
  },
  {
    icon: Shield,
    title: "HTTPS & basics covered",
    description: "Secure connection and standard best practices for trust and safety.",
  },
  {
    icon: BarChart3,
    title: "Analytics-ready",
    description: "Understand traffic and what people click—so you can improve over time.",
  },
  {
    icon: Globe,
    title: "Structured for local SEO",
    description: "Clear titles, services, and locations so search engines understand your business.",
  },
  {
    icon: Sparkles,
    title: "Easy to update",
    description: "We set you up so small text and image changes don’t require a developer.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 border-b border-border bg-muted/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why it works"
          title="Built for visibility, trust, and conversions"
          subtitle="Practical pieces that support local search and real customer actions—not buzzwords."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="rounded-xl border border-border bg-card p-6 sm:p-7">
                <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
