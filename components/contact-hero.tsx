export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 text-white">
      {/* Animated gradient orbs */}
      <div className="hero-float-slow absolute top-10 right-[20%] w-64 h-64 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="hero-float-medium absolute bottom-0 left-[5%] w-48 h-48 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_80%_-30%,oklch(0.45_0.2_250/0.3),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,oklch(0.35_0.08_250/0.35),transparent)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 text-center relative z-10">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-sky-300/90">
          Free quote
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight leading-tight">
          Tell us what you need
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-white/75">
          Share your trade, service area, and goals. We reply with a clear quote and timeline — usually within 2 hours.
        </p>

        {/* Live indicator */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-xs sm:text-sm text-white/70 font-medium">We&apos;re online — typically respond in under 2 hours</span>
        </div>
      </div>
    </section>
  )
}
