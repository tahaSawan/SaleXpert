import { Phone, Star, MapPin, Clock } from "lucide-react"

export default function HeroPhoneMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-sky-500/20 blur-[60px] rounded-full scale-75" />

      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-white/15 bg-slate-900 p-2 shadow-2xl shadow-black/40">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden bg-white relative h-[480px]">
          {/* Scrolling content inside the phone */}
          <div className="hero-phone-scroll">
            {/* Website content - first copy */}
            <PhoneWebsiteContent />
            {/* Duplicate for seamless loop */}
            <PhoneWebsiteContent />
          </div>

          {/* Top fade */}
          <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white to-transparent z-10" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
      </div>

      {/* Floating badge - top right */}
      <div className="absolute -top-3 -right-3 sm:-right-6 bg-white rounded-xl px-3 py-2 shadow-lg shadow-black/20 border border-slate-100 hero-float-medium z-20">
        <div className="flex items-center gap-1.5">
          <Phone size={14} className="text-green-500" />
          <span className="text-xs font-bold text-slate-900">+12 calls</span>
        </div>
        <span className="text-[10px] text-slate-500">this week</span>
      </div>

      {/* Floating badge - bottom left */}
      <div className="absolute -bottom-2 -left-3 sm:-left-6 bg-white rounded-xl px-3 py-2 shadow-lg shadow-black/20 border border-slate-100 hero-float-slow z-20" style={{ animationDelay: "1s" }}>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="text-amber-400 fill-amber-400" size={10} />
          ))}
        </div>
        <span className="text-[10px] text-slate-500 font-medium">&quot;Best decision for my business&quot;</span>
      </div>
    </div>
  )
}

function PhoneWebsiteContent() {
  return (
    <div className="px-4 py-5 space-y-4">
      {/* Fake website header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600" />
          <div className="w-16 h-2.5 rounded bg-slate-800" />
        </div>
        <div className="w-6 h-4 flex flex-col gap-0.5 justify-center">
          <div className="w-full h-[2px] bg-slate-700 rounded" />
          <div className="w-4 h-[2px] bg-slate-700 rounded" />
          <div className="w-full h-[2px] bg-slate-700 rounded" />
        </div>
      </div>

      {/* Hero section */}
      <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-4 text-white">
        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200 mb-1">Plumbing & HVAC</p>
        <p className="text-sm font-bold leading-tight mb-2">24/7 Emergency Service in Dallas</p>
        <div className="flex gap-2">
          <div className="bg-white text-blue-700 text-[9px] font-bold px-2 py-1 rounded-md">Call Now</div>
          <div className="border border-white/40 text-[9px] px-2 py-1 rounded-md">Get Quote</div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="flex gap-2">
        <div className="flex-1 text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-sm font-bold text-slate-900">500+</p>
          <p className="text-[9px] text-slate-500">Jobs done</p>
        </div>
        <div className="flex-1 text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-sm font-bold text-slate-900">4.9</p>
          <p className="text-[9px] text-slate-500">Rating</p>
        </div>
        <div className="flex-1 text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-sm font-bold text-slate-900">15min</p>
          <p className="text-[9px] text-slate-500">Response</p>
        </div>
      </div>

      {/* Services list */}
      <div>
        <p className="text-xs font-bold text-slate-800 mb-2">Our Services</p>
        <div className="space-y-1.5">
          {["Emergency Repairs", "Water Heater Install", "Drain Cleaning", "AC Maintenance"].map((s) => (
            <div key={s} className="flex items-center gap-2 p-2 rounded-lg border border-slate-100 bg-slate-50/50">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-medium text-slate-700">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
        <div className="flex gap-0.5 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="text-amber-400 fill-amber-400" size={10} />
          ))}
        </div>
        <p className="text-[10px] text-slate-600 italic leading-relaxed">&quot;Fixed our pipes same day. Professional and fair pricing. Highly recommend!&quot;</p>
        <p className="text-[9px] text-slate-400 mt-1 font-medium">— Sarah M., Dallas</p>
      </div>

      {/* Service area */}
      <div className="p-3 rounded-xl border border-slate-100 bg-slate-50">
        <div className="flex items-center gap-1.5 mb-1.5">
          <MapPin size={11} className="text-blue-600" />
          <p className="text-[10px] font-bold text-slate-800">Service Areas</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {["Dallas", "Fort Worth", "Plano", "Arlington"].map((city) => (
            <span key={city} className="text-[9px] bg-white border border-slate-200 px-1.5 py-0.5 rounded font-medium text-slate-600">{city}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-blue-600 p-3 text-center">
        <p className="text-[10px] text-blue-100 mb-1">Ready to get started?</p>
        <p className="text-xs font-bold text-white">Call (214) 555-0123</p>
      </div>

      {/* Hours */}
      <div className="flex items-center gap-1.5 justify-center py-2">
        <Clock size={10} className="text-green-500" />
        <span className="text-[10px] text-slate-500 font-medium">Open 24/7 — Emergency Service Available</span>
      </div>
    </div>
  )
}
