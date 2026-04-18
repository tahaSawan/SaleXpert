import { ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

/** Illustrative examples—not real client results or locations. */
const beforeAfterCases = [
  {
    trade: "Plumber",
    before: {
      title: "Hard to find online",
      issues: ["No site or only a social page", "Hard for new customers to compare you", "Contact info scattered"],
    },
    after: {
      title: "Clear, professional presence",
      improvements: ["Dedicated pages for services & areas", "Click-to-call and simple contact", "Trust signals (reviews, photos, licenses)"],
      outcome: "Typical goal: more calls and clearer leads from search and referrals.",
    },
  },
  {
    trade: "Electrician",
    before: {
      title: "Site doesn’t match your quality",
      issues: ["Not mobile-friendly", "Services hard to scan", "Certifications buried or missing"],
    },
    after: {
      title: "Built for how people hire you",
      improvements: ["Mobile-first layout", "Residential vs commercial clarity", "Emergency contact easy to find"],
      outcome: "Typical goal: fewer confused callers, more qualified inquiries.",
    },
  },
  {
    trade: "Dentist",
    before: {
      title: "Generic or confusing site",
      issues: ["Hard to see what you offer", "Booking path unclear", "Insurance/payment info missing"],
    },
    after: {
      title: "Patient-friendly structure",
      improvements: ["Clear services and team", "Simple next step (call or request)", "Professional, calm design"],
      outcome: "Typical goal: new patients understand you faster.",
    },
  },
]

export default function BeforeAfterShowcase() {
  return (
    <section className="py-20 sm:py-24 border-b border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Illustrative examples"
          title="What a focused site can change"
          subtitle="These are common situations we design for—not specific client stories or guaranteed outcomes."
        />

        <div className="space-y-12">
          {beforeAfterCases.map((caseStudy, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {caseStudy.trade}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-red-200 bg-red-50">
                    <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center">
                        !
                      </span>
                      Before: {caseStudy.before.title}
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.before.issues.map((issue, idx) => (
                        <li key={idx} className="text-sm text-red-700 flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-red-200 text-red-600 text-xs flex items-center justify-center mt-0.5 shrink-0">
                            ✗
                          </span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-green-200 bg-green-50">
                    <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      After: {caseStudy.after.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {caseStudy.after.improvements.map((improvement, idx) => (
                        <li key={idx} className="text-sm text-green-700 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-green-200">
                      <p className="text-sm text-green-800 leading-relaxed">{caseStudy.after.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-6">
                  <div className="w-32 h-40 bg-gray-300 rounded-lg border-2 border-gray-400 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-2 bg-gray-400 rounded mb-2 mx-auto" />
                      <div className="w-12 h-2 bg-gray-400 rounded mb-2 mx-auto" />
                      <div className="w-20 h-2 bg-gray-400 rounded mx-auto" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                      !
                    </div>
                  </div>

                  <ArrowRight className="text-primary w-8 h-8" />

                  <div className="w-32 h-40 bg-white rounded-lg border-2 border-primary shadow-lg flex flex-col p-2 relative">
                    <div className="h-6 bg-gradient-to-r from-primary to-primary/80 rounded mb-2" />
                    <div className="space-y-1 flex-1">
                      <div className="h-2 bg-gray-200 rounded" />
                      <div className="h-2 bg-gray-200 rounded w-3/4" />
                      <div className="h-2 bg-gray-200 rounded w-1/2" />
                    </div>
                    <div className="h-6 bg-green-500 rounded flex items-center justify-center">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                      ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 rounded-xl border border-border bg-card">
          <h3 className="text-xl font-bold text-foreground mb-2">Want something like this for your trade?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Share your business and area—we’ll suggest structure and pricing. No fake urgency—just a clear path forward.
          </p>
        </div>
      </div>
    </section>
  )
}
