import { Search, Smartphone, Users, HelpCircle } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const pains = [
  {
    icon: Search,
    title: "Search happens first",
    body: "People Google you before they call. No site—or a weak one—and they pick someone else.",
  },
  {
    icon: Smartphone,
    title: "Phones win",
    body: "Most local traffic is mobile. Your site has to work in one thumb tap.",
  },
  {
    icon: Users,
    title: "Look legit",
    body: "Clear services + areas + trust beats a dead link or empty profile.",
  },
  {
    icon: HelpCircle,
    title: "You stay focused",
    body: "We handle structure and launch. Scope and price agreed before you pay.",
  },
]

export default function AidaInterestSection() {
  return (
    <section id="interest" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The real problem"
          title="Sound familiar?"
          subtitle="Same story for trades, clinics, shops, and pros: clarity wins. Confusion loses."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {pains.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="interest-card-in rounded-xl border border-border bg-card p-5 sm:p-6 flex flex-col shadow-sm hover:border-primary/30 transition-colors duration-300"
                style={{ animationDelay: `${100 + i * 75}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="text-primary" size={20} aria-hidden />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{item.body}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
          Next: process → pricing. No fluff.
        </p>
      </div>
    </section>
  )
}
