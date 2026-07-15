import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site"

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-slate-950 text-white overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,oklch(0.45_0.18_250/0.35),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          dark
          eyebrow="Stop losing customers"
          title="Every day without a website, someone else gets the call"
          subtitle="Your future customers are searching right now. They'll pick whoever shows up first with a professional site. Make sure that's you."
        />

        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="font-semibold h-12 px-8 bg-white text-slate-950 hover:bg-white/90 shadow-md"
            >
              <Link href="/contact">
                Claim your free quote now
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="font-medium h-11 px-6 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${SITE_PHONE_TEL}`}>
                <Phone size={16} className="mr-2" />
                {SITE_PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/55">
            Takes 30 seconds · We respond in under 2 hours · Only 5 spots left this month
          </p>
        </div>
      </div>
    </section>
  )
}
