import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

const cases = [
  {
    title: "Home services",
    tag: "Plumbing",
    slug: "sample-plumbing-home-services",
    metric: "Emergency & service calls front and center",
    excerpt: "Clear areas, phone-first layout, and trust signals that match how homeowners actually book.",
  },
  {
    title: "Health & dental",
    tag: "Dental",
    slug: "sample-dental-practice",
    metric: "Appointment-ready messaging",
    excerpt: "Services, team, and patient-friendly CTAs so visitors know what to do next.",
  },
  {
    title: "Beauty & wellness",
    tag: "Salon",
    slug: "sample-salon-beauty",
    metric: "Menu + booking path",
    excerpt: "Showcase services and make it easy to call or book from any device.",
  },
]

export default function FeaturedWork() {
  return (
    <section id="examples" className="py-20 sm:py-24 border-b border-border bg-muted/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sample layouts"
          title="How we structure sites by industry"
          subtitle="These are demonstration layouts—not live client sites. Your build is tailored to your business."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-primary/30"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">{c.tag}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm font-medium text-foreground/90 mb-3">{c.metric}</p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.excerpt}</p>
              <Link
                href={`/portfolio/${c.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                View sample layout <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/portfolio">
              All examples <ArrowRight className="ml-1" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
