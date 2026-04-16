import { Check, X } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const features = [
  "Custom Domain",
  "Mobile Responsive",
  "SSL Security",
  "Contact Forms",
  "Blog Functionality",
  "E-commerce Ready",
  "Social Integration",
  "Analytics Dashboard",
  "API Access",
  "Advanced Support",
  "Dedicated Manager",
  "Custom Development",
]

const comparison = [
  { name: "Starter", features: [true, true, true, true, false, false, false, true, false, false, false, false] },
  { name: "Professional", features: [true, true, true, true, true, true, true, true, true, true, false, false] },
  { name: "Enterprise", features: [true, true, true, true, true, true, true, true, true, true, true, true] },
]

export default function ServiceComparison() {
  return (
    <section className="py-20 sm:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Compare plans"
          title="Feature comparison"
          subtitle="See what is included at each tier. Ask us if you need something custom."
        />

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold text-foreground">Features</th>
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
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-foreground/20 mx-auto" />
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
              <h3 className="text-xl font-bold text-foreground mb-4">{plan.name} Plan</h3>
              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">{feature}</span>
                    {plan.features[idx] ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <X className="w-5 h-5 text-foreground/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
