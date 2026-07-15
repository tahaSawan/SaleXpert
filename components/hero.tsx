import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import HeroRotatingAudience from "@/components/hero-rotating-audience"
import HeroPhoneMockup from "@/components/hero-phone-mockup"
import HeroCanvasBg from "@/components/hero-canvas-bg"
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site"

const benefits = [
  "Show up when locals search for your service",
  "Turn visitors into calls, bookings & quotes",
  "Go live in days — not months",
]

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-slate-950 text-white pt-14 sm:pt-20 pb-16 sm:pb-24 scroll-mt-28">
      {/* Particle network canvas */}
      <HeroCanvasBg />

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_80%_-20%,oklch(0.45_0.2_250/0.35),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_10%_100%,oklch(0.35_0.08_250/0.4),transparent)]" />

      {/* Floating orbs for depth */}
      <div className="hero-float-slow absolute top-20 right-[15%] w-72 h-72 rounded-full bg-sky-500/10 blur-3xl -z-10" />
      <div className="hero-float-medium absolute bottom-10 left-[10%] w-56 h-56 rounded-full bg-blue-600/10 blur-3xl -z-10" />
      <div className="hero-float-slow absolute top-1/2 right-[5%] w-40 h-40 rounded-full bg-indigo-500/8 blur-2xl -z-10" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <p className="hero-fade-up inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/95 mx-auto lg:mx-0">
              Only 5 spots left this month
            </p>

            <div className="hero-fade-up-delay">
              <HeroRotatingAudience />
              <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-snug">
                Your competitors have a website. Your customers are searching right now.
                <span className="text-white/90 font-medium"> Don&apos;t let them find someone else.</span>
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
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start sm:items-start">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="hero-cta-glow w-full sm:w-auto h-12 sm:h-14 text-base font-semibold bg-white text-slate-950 hover:bg-white/90 shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Claim your free quote
                    <ArrowRight size={18} className="ml-1" aria-hidden />
                  </Button>
                </Link>
                <a href={`tel:${SITE_PHONE_TEL}`} className="w-full sm:w-auto">
                  <Button
                    size="default"
                    variant="outline"
                    className="w-full sm:w-auto h-11 px-5 text-sm font-medium border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="mr-2" aria-hidden />
                    {SITE_PHONE_DISPLAY}
                  </Button>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-white/50 text-center lg:text-left">
                Free, no-obligation quote · We respond in under 2 hours
              </p>
            </div>
          </div>

          {/* Animated phone mockup */}
          <div className="hero-fade-up-delay relative flex justify-center w-full lg:justify-end">
            <HeroPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
