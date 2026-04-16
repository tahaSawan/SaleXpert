import { Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const placeholders = [
  { key: "1" },
  { key: "2" },
  { key: "3" },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Social proof"
          title="What clients say"
          subtitle="We’re reserving this space for real quotes from business owners we’ve worked with. When you have permission to share, we’ll feature them here."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map(({ key }) => (
            <figure
              key={key}
              className="rounded-xl border border-dashed border-border bg-muted/20 p-6 sm:p-7 flex flex-col min-h-[200px]"
            >
              <Quote className="text-primary/70 mb-4 shrink-0" size={28} strokeWidth={1.5} aria-hidden />
              <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1 italic">
                Client testimonial placeholder—replace with a short quote about results, experience, or support.
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/80">
                <p className="text-sm font-semibold text-foreground">Name & business</p>
                <p className="text-xs text-muted-foreground mt-1">Trade · City, region</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
