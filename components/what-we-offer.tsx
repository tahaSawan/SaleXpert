import Link from "next/link"
import { LayoutTemplate, MessageCircle } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: LayoutTemplate,
    title: "Websites—nothing else",
    body: "We design and build professional sites for local service businesses: clear service pages, fast loading, click-to-call and forms, and structure that helps people find you on Google. This site is an example of the kind of work we deliver.",
    foot: "One-time project pricing with scope agreed up front—so you know what you’re getting before you commit.",
  },
  {
    icon: MessageCircle,
    title: "How we connect with businesses",
    body: "We reach out to trades and local providers—electricians, plumbers, dentists, and similar—when we think a stronger website could help. If we’ve contacted you, the conversation is about getting you online or upgrading what you have, not selling unrelated tools or software.",
    foot: "No pressure: if it’s not the right time, that’s fine. When you’re ready, we’re happy to scope something that fits.",
  },
]

export default function WhatWeOffer() {
  return (
    <section id="offer" className="py-20 sm:py-24 border-b border-border bg-muted/25 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What SaleXpert offers"
          title="Professional websites for local service businesses"
          subtitle="Our product is the website—built to turn searches into calls and bookings. You’re on one right now; it’s the best preview of what we’d build for your business."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-5">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">{p.body}</p>
                <p className="mt-5 text-xs sm:text-sm text-muted-foreground border-t border-border pt-5 leading-relaxed">
                  {p.foot}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-dashed border-border bg-background/80 px-5 py-4 sm:px-6">
          <p className="text-sm text-muted-foreground max-w-2xl">
            Want a quote or a quick opinion on your current site? Send a message—we’ll respond with clear next steps.
          </p>
          <Button asChild variant="default" className="shrink-0 font-semibold">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
