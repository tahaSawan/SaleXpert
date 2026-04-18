import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-slate-950 text-white overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,oklch(0.45_0.18_250/0.35),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          dark
          eyebrow="Next step"
          title="Get a clear quote—same goal as the rest of this page"
          subtitle="Tell us your business, area, and what you want people to do on the site. We respond with scope and pricing you can compare—no fluff."
        />

        <div className="flex flex-col items-center gap-3 pt-2">
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="font-semibold h-12 px-8 bg-white text-slate-950 hover:bg-white/90 shadow-md"
            >
              <Link href="/contact">
                Get a free quote
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="font-medium h-11 px-6 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/portfolio">Browse example layouts</Link>
            </Button>
          </div>
          <p className="text-[11px] text-white/45 max-w-md">
            Portfolio is for inspiration; the quote form is how we price your build.
          </p>
        </div>

        <p className="text-sm text-white/55 mt-8">Typical response within one business day · No obligation</p>
      </div>
    </section>
  )
}
