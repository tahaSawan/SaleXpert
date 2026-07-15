import { Check, X } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

/** Features relevant to local trades—not generic SaaS checkboxes. */
const features = [
  "Custom domain setup guidance",
  "Mobile-responsive layout",
  "HTTPS / SSL security",
  "Contact form",
  "Click-to-call buttons",
  "Service pages (e.g. drain, HVAC, dental)",
  "Service area / location pages",
  "Reviews & testimonials section",
  "Photo gallery",
  "Google Business Profile alignment",
  "Basic on-page SEO (titles, headings)",
  "Analytics setup",
  "Blog or news section",
  "Booking / scheduling link",
  "Post-launch revision rounds (2 included)",
  "Extended email support (90 days)",
  "Priority support",
  "Custom sections (FAQs, pricing tables, etc.)",
]

const comparison = [
  {
    name: "Starter",
    features: [
      true, true, true, true, true, false, false, false, false, false, true, true, false, false, false, false, false,
      false,
    ],
  },
  {
    name: "Professional",
    features: [
      true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false,
    ],
  },
  {
    name: "Enterprise",
    features: [
      true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
    ],
  },
]

export default function ServiceComparison() {
  return (
    <section className="py-20 sm:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Compare plans"
          title="What each package includes"
          subtitle="Built for plumbers, dentists, salons, and local trades—not enterprise software. Ask us if you need something custom."
        />

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold text-foreground">Included for local businesses</th>
                {comparison.map((plan) => (
                  <th key={plan.name} className="text-center py-4 px-6 font-semibold text-foreground">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/30 transition">
                  <td className="py-4 px-6 text-foreground">{feature}</td>
                  {comparison.map((plan) => (
                    <td key={plan.name} className="text-center py-4 px-6">
                      {plan.features[idx] ? (
                        <Check className="w-6 h-6 text-primary mx-auto" aria-label="Included" />
                      ) : (
                        <X className="w-6 h-6 text-foreground/20 mx-auto" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Comparison */}
        <div className="lg:hidden space-y-6">
          {comparison.map((plan) => (
            <div key={plan.name} className="glass p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{plan.name} plan</h3>
              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground text-sm">{feature}</span>
                    {plan.features[idx] ? (
                      <Check className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-foreground/20 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
              {plan.name === "Enterprise" && (
                <p className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                  Longer support window and additional revision rounds quoted per project.
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Hosting and domain registration are typically billed separately—we explain options in your quote. Page counts
          and revision details are confirmed per project.
        </p>
      </div>
    </section>
  )
}
