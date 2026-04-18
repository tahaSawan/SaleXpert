import { Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client stories"
          title="Testimonials coming soon"
          subtitle="We’re new and focused on doing great work first. When clients agree to share feedback, we’ll feature real quotes here."
        />

        <div className="max-w-2xl mx-auto rounded-xl border border-dashed border-border bg-muted/20 p-8 sm:p-10 text-center">
          <Quote className="text-primary/70 mx-auto mb-4" size={32} strokeWidth={1.5} aria-hidden />
          <p className="text-muted-foreground leading-relaxed mb-6">
            We don’t publish made-up reviews. If you become a client and want to share your experience, we’d be glad to
            highlight it—with your permission.
          </p>
          <p className="text-sm text-muted-foreground">
            In the meantime, see{" "}
            <Link href="/portfolio" className="text-primary font-medium hover:underline">
              sample layouts
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              request a quote
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
