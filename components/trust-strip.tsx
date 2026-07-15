import { Star } from "lucide-react"

const labels = ["Plumbing & HVAC", "Electrical", "Dental & medical", "Salons & spas", "Contractors", "Restaurants & retail"]

export default function TrustStrip() {
  return (
    <section id="trust" className="border-b border-border bg-background py-10 sm:py-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="text-amber-400 fill-amber-400" size={14} />
          ))}
          <span className="ml-2 text-xs sm:text-sm font-medium text-muted-foreground">
            Trusted by 20+ businesses across Texas
          </span>
        </div>
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
          We build websites for
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {labels.map((label, i) => (
            <span
              key={label}
              className="trust-chip-in inline-flex items-center rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground/90"
              style={{ animationDelay: `${80 + i * 55}ms` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
