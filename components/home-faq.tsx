"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/section-header"

const items = [
  {
    q: "How long until my site goes live?",
    a: "Most brochure-style sites launch within about one to two weeks after we have your content and branding. Larger builds take longer—we give you a timeline with your quote.",
  },
  {
    q: "Do you only work with certain industries?",
    a: "We focus on local businesses that serve customers in person in a region—trades, health and beauty, food and retail, professional services, and more. If you need a clear site that drives calls, visits, or bookings, we can usually help.",
  },
  {
    q: "What do I need to get started?",
    a: "A short description of your services, service area, logo or photos if you have them, and how you want customers to contact you (call, form, booking). We’ll guide you through the rest.",
  },
  {
    q: "Is hosting included?",
    a: "Hosting and domains are usually billed separately so you own your assets. We explain options upfront and can recommend simple setups.",
  },
]

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-24 border-b border-border bg-background scroll-mt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Common questions"
          title="What people ask before starting"
          subtitle="Straight answers about timelines, scope, and how we work."
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

        <p className="text-center text-sm text-muted-foreground mt-10">
          More detail on the{" "}
          <Link href="/contact" className="text-primary font-medium hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
