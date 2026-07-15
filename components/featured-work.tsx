import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

const cases = [
  {
    title: "Home services",
    tag: "Plumbing",
    slug: "sample-plumbing-home-services",
    result: "Emergency calls within the first week",
    excerpt: "Service areas front and center, tap-to-call on every page, and trust badges that make homeowners pick up the phone.",
  },
  {
    title: "Health & dental",
    tag: "Dental",
    slug: "sample-dental-practice",
    result: "Online bookings from day one",
    excerpt: "Patient-friendly layout with clear services, team bios, and appointment CTAs that remove friction.",
  },
  {
    title: "Beauty & wellness",
    tag: "Salon",
    slug: "sample-salon-beauty",
    result: "Full schedule from organic search",
    excerpt: "Service menus, pricing, and one-tap booking designed to fill chairs from Google searches alone.",
  },
]

export default function FeaturedWork() {
  return (
    <section id="examples" className="py-20 sm:py-24 border-b border-border bg-muted/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="See it in action"
          title="Sites built to generate revenue — not just look pretty"
          subtitle="Real layouts for real industries. See how we structure sites to drive calls, bookings, and sales."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-primary/30"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">{c.tag}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm font-semibold text-primary/90 mb-3">{c.result}</p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.excerpt}</p>
              <Link
                href={`/portfolio/${c.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                See how it works <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="/portfolio">
              View all examples <ArrowRight className="ml-1" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
