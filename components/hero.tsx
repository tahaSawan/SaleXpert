import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import HeroRotatingAudience from "@/components/hero-rotating-audience"

const benefits = ["More calls & bookings", "Mobile-first & easy to find", "Price scoped before work starts"]

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-slate-950 text-white pt-14 sm:pt-20 pb-16 sm:pb-20 scroll-mt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_80%_-20%,oklch(0.45_0.2_250/0.35),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_10%_100%,oklch(0.35_0.08_250/0.4),transparent)]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <p className="hero-fade-up inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/95 mx-auto lg:mx-0">
              Local businesses
            </p>

            <div className="hero-fade-up-delay">
              <HeroRotatingAudience />
              <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-snug">
                Fast sites. Clear pricing. Built to convert searchers into customers.
              </p>
            </div>

            <ul className="hero-fade-up-delay-2 space-y-2.5 text-left max-w-xl mx-auto lg:mx-0">
              {benefits.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white/90">
                  <CheckCircle2 className="text-sky-400 shrink-0 mt-0.5" size={18} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="hero-fade-up-delay-2 space-y-2 pt-1">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-sky-300/90 text-center lg:text-left">
                Start here
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start sm:items-start">
                <Link href="/contact" className="w-full sm:w-auto" aria-describedby="hero-cta-hint">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 sm:h-14 text-base font-semibold bg-white text-slate-950 hover:bg-white/90 shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get a free quote
                    <ArrowRight size={18} className="ml-1" aria-hidden />
                  </Button>
                </Link>
                <div className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-1">
                  <Link href="/portfolio" className="w-full sm:w-auto">
                    <Button
                      size="default"
                      variant="outline"
                      className="w-full sm:w-auto h-11 px-5 text-sm font-medium border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-colors"
                      aria-label="View example portfolio sites"
                    >
                      See examples
                    </Button>
                  </Link>
                  <span className="text-[10px] text-white/40 text-center sm:text-left">Optional</span>
                </div>
              </div>
            </div>

            <p id="hero-cta-hint" className="text-xs sm:text-sm text-white/50">
              No obligation · We reply with quote & timeline
            </p>
          </div>

          <div className="hero-fade-up-delay relative flex justify-center w-full lg:justify-end">
            <div className="rounded-xl border border-white/10 bg-white p-5 sm:p-7 space-y-4 w-full max-w-md text-left text-slate-900 shadow-xl shadow-black/20 transition-shadow hover:shadow-2xl hover:shadow-black/25">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Every package</p>
              <div className="space-y-3">
                {[
                  { label: "Pages that sell", detail: "Services, areas, proof" },
                  { label: "Tap-to-call & forms", detail: "Works on every phone" },
                  { label: "Trust on the page", detail: "Reviews, photos, licenses" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                    <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
