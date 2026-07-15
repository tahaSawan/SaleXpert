import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Zap, Smartphone, Globe } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const services = [
  {
    name: "Starter",
    price: "$299",
    description: "Get found online and start receiving calls — fast",
    features: [
      "Professional, conversion-focused layout",
      "Mobile-optimized (where 80% of searches happen)",
      "Click-to-call + contact form",
      "On-page SEO so Google finds you",
      "Analytics to track every visitor",
      "30 days of support after launch",
    ],
    highlighted: false,
    icon: Smartphone,
    cta: "Start with Starter",
  },
  {
    name: "Professional",
    price: "$599",
    description: "The full package to dominate your local market",
    features: [
      "Everything in Starter, plus:",
      "Dedicated service, about & area pages",
      "Reviews & testimonials that build instant trust",
      "Google Business profile alignment",
      "90 days of priority support",
      "Content updates included after launch",
    ],
    highlighted: true,
    icon: Zap,
    cta: "Get the Pro package",
  },
  {
    name: "Enterprise",
    price: "$999",
    description: "Maximum firepower for serious growth",
    features: [
      "Everything in Professional, plus:",
      "Custom booking, galleries & FAQ sections",
      "Priority support — we respond first",
      "Extended support window",
      "Ongoing updates as your business grows",
    ],
    highlighted: false,
    icon: Globe,
    cta: "Go Enterprise",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 overflow-hidden border-b border-border scroll-mt-28">
      <div className="absolute inset-0 gradient-section-soft -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Transparent pricing"
          title="One payment. No subscriptions. No surprises."
          subtitle="Every dollar goes into building a site that pays for itself in new customers. Pick the package that fits your goals."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`relative rounded-xl flex flex-col h-full ${
                  service.highlighted ? "border-2 border-primary bg-card shadow-md" : "glass hover:border-primary/20"
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Best value
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                  <div className="mb-6">
                    <span className="text-foreground text-4xl font-bold tracking-tight">{service.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">one-time</span>
                  </div>

                  <Button
                    asChild
                    className="w-full mb-8 font-semibold h-11"
                    variant={service.highlighted ? "default" : "outline"}
                  >
                    <Link href="/contact">{service.cta}</Link>
                  </Button>

                  <div className="space-y-3 flex-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Not sure which to pick? Tell us your goals — we&apos;ll recommend the right fit. Zero pressure.
        </p>
      </div>
    </section>
  )
}
