import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Built to turn visitors into calls, quotes, and bookings",
  "Mobile-first with clear pages and structure for local search",
  "Simple one-time pricing—scope agreed before you commit",
]

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-slate-950 text-white pt-14 sm:pt-20 pb-16 sm:pb-20 scroll-mt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_80%_-20%,oklch(0.45_0.2_250/0.35),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_10%_100%,oklch(0.35_0.08_250/0.4),transparent)]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center">
          <div className="space-y-6 sm:space-y-7 text-center lg:text-left">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/95 mb-4">
                SaleXpert
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] font-bold text-white tracking-tight">
                Clear websites. More local customers.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We build fast, focused sites for plumbers, electricians, dentists, salons, and other service
                providers—so people who search for your work can contact you in seconds.
              </p>
            </div>

            <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
              {benefits.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm sm:text-base text-white/90">
                  <CheckCircle2 className="text-sky-400 shrink-0 mt-0.5" size={20} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/contact" className="w-full sm:w-auto" aria-describedby="hero-cta-hint">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 sm:h-14 text-base font-semibold bg-white text-slate-950 hover:bg-white/90"
                >
                  Get a free quote
                  <ArrowRight size={18} className="ml-1" aria-hidden />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 sm:h-14 text-base font-semibold border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  aria-label="View example portfolio sites"
                >
                  View example sites
                </Button>
              </Link>
            </div>

            <p id="hero-cta-hint" className="text-sm text-white/55">
              No obligation—tell us your trade and area, we&apos;ll reply with options.
            </p>
          </div>

          <div className="relative flex justify-center w-full">
            <div className="rounded-xl border border-white/10 bg-white p-6 sm:p-8 space-y-5 w-full max-w-md text-center text-slate-900 shadow-xl shadow-black/20">
              <p className="text-sm font-semibold text-slate-900">What you get</p>
              <div className="space-y-4">
                {[
                  { label: "Service pages", detail: "What you do, areas you cover, clear pricing where it helps" },
                  { label: "Contact that works", detail: "Click-to-call, form, and map—on every phone" },
                  { label: "Trust on the page", detail: "Reviews, photos, and licenses so people choose you" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                    <p className="font-medium text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
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
