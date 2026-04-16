import { SectionHeader } from "@/components/section-header"

const team = [
  {
    name: "Abdullah Khan",
    role: "Founder & CEO",
    bio: "Sets the direction for SaleXpert—helping local service businesses get clear, credible sites that turn searches into calls and bookings.",
    initials: "AK",
  },
  {
    name: "Taha S Awan",
    role: "COO",
    bio: "Runs day-to-day operations and delivery so every project stays on track, on scope, and focused on results for your business.",
    initials: "TA",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 sm:py-24 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="People"
          title="Who you&apos;ll work with"
          subtitle="Leadership behind SaleXpert—focused on local trades and service businesses."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-foreground text-center mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-primary text-center mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
