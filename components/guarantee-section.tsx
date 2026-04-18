import { Shield, RefreshCw, Clock, CheckCircle2, Phone } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const guarantees = [
  {
    icon: Shield,
    title: "Satisfaction-focused delivery",
    description:
      "We agree on scope before you pay, and we work with you through launch. Refund terms (if any) are spelled out in writing before you commit.",
    highlight: "Clear agreement upfront",
  },
  {
    icon: Clock,
    title: "Timeline you can plan around",
    description:
      "You get a realistic schedule with your quote. If something delays us on our side, we’ll communicate it early—we don’t promise perfection, we promise clarity.",
    highlight: "Honest timelines",
  },
  {
    icon: RefreshCw,
    title: "Post-launch tweaks",
    description:
      "Packages include a window for small fixes and adjustments after go-live. Details depend on the tier you choose.",
    highlight: "Support as agreed",
  },
]

export default function GuaranteeSection() {
  return (
    <section className="py-20 sm:py-24 border-b border-border bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How we work"
          title="Straightforward commitments"
          subtitle="No inflated claims—just clear scope, pricing, and what happens after launch."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <div key={index} className="text-center p-8 rounded-xl border border-border bg-background/50 backdrop-blur">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{guarantee.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {guarantee.highlight}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-background rounded-2xl border border-border p-8 sm:p-12 text-center shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Questions? Ask before you commit.</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us your trade and goals—we’ll reply with options and a clear quote. No pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="text-lg font-semibold px-8">
                <Link href="/contact">
                  Get your free quote
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">Free consultation • No obligation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Scope first</div>
                <div>Pricing tied to what we build</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">You own it</div>
                <div>Hosting & domain explained upfront</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Local focus</div>
                <div>Sites built for service businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
