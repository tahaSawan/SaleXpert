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
          eyebrow="Get started"
          title="Ready for a site that earns its keep?"
          subtitle="Send a short note about your business and what you want customers to do. We&apos;ll reply with next steps and a clear quote—no pressure."
        />

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button
            asChild
            size="lg"
            className="font-semibold h-12 px-8 bg-white text-slate-950 hover:bg-white/90"
          >
            <Link href="/contact">
              Get a free quote
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold h-12 px-8 border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/portfolio">See example sites</Link>
          </Button>
        </div>

        <p className="text-sm text-white/55 mt-8">Typical response within one business day · No obligation</p>
      </div>
    </section>
  )
}
