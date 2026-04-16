import Link from "next/link"
import { Globe, MapPin, MousePointerClick } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const columns = [
  {
    icon: Globe,
    title: "Web & brand",
    items: [
      { label: "Service pages & offers", href: "/services" },
      { label: "Fast, clean layouts", href: "/services" },
      { label: "Photos, reviews, trust blocks", href: "/portfolio" },
    ],
  },
  {
    icon: MapPin,
    title: "Local presence",
    items: [
      { label: "Clear service areas", href: "/services" },
      { label: "Google-friendly structure", href: "/blog/website-seo-tips" },
      { label: "Contact & map", href: "/contact" },
    ],
  },
  {
    icon: MousePointerClick,
    title: "Conversion",
    items: [
      { label: "Click-to-call & forms", href: "/services" },
      { label: "Strong CTAs on every page", href: "/services" },
      { label: "Analytics-ready setup", href: "/services" },
    ],
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we deliver"
          title="Everything your next customer needs to say yes"
          subtitle="Three pillars—so your site isn’t just pretty, it’s built to generate calls and bookings."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {columns.map((col) => {
            const Icon = col.icon
            return (
              <div key={col.title} className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary font-medium hover:underline underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
