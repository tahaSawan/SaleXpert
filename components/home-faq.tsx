"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const items = [
  {
    q: "How fast can my site go live?",
    a: "Most sites launch within 7–14 days. We move fast because every day without a proper website is a day your competitors are winning those customers instead of you.",
  },
  {
    q: "What if I'm not tech-savvy?",
    a: "Perfect — that's exactly who we built this for. You tell us about your business, we handle everything else. No technical knowledge needed, ever.",
  },
  {
    q: "Will this actually bring me more customers?",
    a: "Yes. Every site is built with SEO, clear calls-to-action, and mobile optimization. When someone Googles your service in your area, you show up. When they land on your site, they know exactly how to contact you.",
  },
  {
    q: "What do I need to get started?",
    a: "Just your business name, services you offer, the area you serve, and how you want people to reach you. That's it. We'll handle the rest and guide you through anything else we need.",
  },
  {
    q: "Is there a monthly fee?",
    a: "No. You pay once, you own your website. Hosting is separate (usually $5–15/month through providers like Vercel or Netlify) — we'll set it up for you and explain everything.",
  },
]

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Got questions?"
          title="Everything you need to know before you start"
          subtitle="No jargon, no fine print. Just straight answers."
        />

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.q} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors ${
                  open === i ? "bg-muted/50" : "hover:bg-muted/30"
                }`}
              >
                <span className="font-semibold text-foreground pr-4">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-border">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">
            Still have questions? We&apos;ll answer them personally — no bots, no forms.
          </p>
          <Button asChild variant="outline" className="font-semibold">
            <Link href="/contact">
              Ask us anything <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
