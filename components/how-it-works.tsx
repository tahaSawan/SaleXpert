import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    title: "Discover & scope",
    description: "We learn your trade, service area, and what you want visitors to do—call, quote, or book.",
  },
  {
    title: "Structure & content",
    description: "We map pages, headlines, and proof (reviews, photos, certifications) so the story sells.",
  },
  {
    title: "Design & build",
    description: "Fast, clean layouts on brand—optimized for phones first, then desktop.",
  },
  {
    title: "Launch & handoff",
    description: "Go live with analytics basics and clear next steps so you’re not stuck after launch.",
  },
  {
    title: "Refine & grow",
    description: "Small tweaks based on what you see in the real world—we stay available as agreed.",
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our process"
          title="From first call to live site—without the jargon"
          subtitle="A straightforward path so you always know what happens next."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-xl border border-border bg-card p-6 lg:p-5 flex flex-col"
            >
              <span className="text-3xl font-bold text-primary/25 tabular-nums leading-none mb-3">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
