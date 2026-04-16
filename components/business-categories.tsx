import { Wrench, Smile, Wind, Zap, Scissors, Home, Utensils, Users, Briefcase, ShoppingCart } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const businessCategories = [
  { icon: Wrench, name: "Plumber", description: "Emergency number, services, and areas you cover" },
  { icon: Smile, name: "Dentist", description: "Booking, team, and patient-friendly messaging" },
  { icon: Wind, name: "HVAC", description: "Maintenance plans, brands, and seasonal offers" },
  { icon: Zap, name: "Electrician", description: "Safety, certifications, and project types" },
  { icon: Scissors, name: "Salon & spa", description: "Services menu, gallery, and appointments" },
  { icon: Home, name: "Real estate", description: "Listings, neighborhoods, and lead capture" },
  { icon: Utensils, name: "Restaurant", description: "Menu, hours, reservations, and directions" },
  { icon: Users, name: "Fitness", description: "Classes, pricing, and membership CTAs" },
  { icon: Briefcase, name: "Consulting", description: "Services, case studies, and contact" },
  { icon: ShoppingCart, name: "Retail", description: "Products, hours, and pickup or delivery" },
]

export default function BusinessCategories() {
  return (
    <section id="industries" className="relative py-20 sm:py-24 overflow-hidden border-b border-border bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Who we build for"
          subtitle="Same focus everywhere: what you do, where you work, and how customers reach you."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {businessCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center mb-3">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
