import { Heart, Zap, Shield, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const values = [
  {
    icon: Heart,
    title: "Client success",
    description:
      "We measure our work by whether your site makes it easier for customers to understand what you do and how to reach you.",
  },
  {
    icon: Zap,
    title: "Practical builds",
    description:
      "We use modern, maintainable tools—no buzzwords. The goal is a fast, clear site you can actually run day to day.",
  },
  {
    icon: Shield,
    title: "Security & performance",
    description:
      "HTTPS, sensible hosting guidance, and performance-minded layouts. Uptime depends on your host—we set you up clearly.",
  },
  {
    icon: Users,
    title: "Straightforward partnership",
    description:
      "Clear quotes, realistic timelines, and scope in writing. We’re easy to reach when you need changes after launch.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 sm:py-24 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Principles" title="How we work with clients" subtitle="What guides every SaleXpert project." />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
