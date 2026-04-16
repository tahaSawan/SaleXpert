"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to get my website live?",
    answer:
      "Many brochure-style sites go live within about one to two weeks after we have your content and branding. Larger builds take longer—we give you a timeline with your quote.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Yes. We set things up so you can change text, photos, and basic sections without touching code. We’re also available for updates if you prefer we handle it.",
  },
  {
    question: "What if I need help after launch?",
    answer:
      "You get support for the window included in your package (email first—phone when needed). After that, we can agree on ongoing help or small fixes as needed.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Every site we build is structured for local search—clear pages, titles, and basic metadata. No one can guarantee rankings. If you want ongoing content, citations, or deeper SEO work, ask what we offer or recommend a specialist.",
  },
  {
    question: "Can I add an online store to my website?",
    answer:
      "Yes! Our Professional and Enterprise plans include e-commerce functionality. You can sell products or services directly from your website.",
  },
  {
    question: "What happens if I want to cancel?",
    answer:
      "Typical website projects are one-time scope with a written quote—no multi-year lock-in for the build itself. If you pause mid-project or need to move hosting, we’ll handle it according to your agreement and what’s fair for work already done.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-24 border-t border-border bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Common questions</h2>
          <p className="mt-3 text-muted-foreground text-base">Straight answers about timelines, updates, and what&apos;s included.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors ${
                  openIndex === index ? "bg-muted/50" : "hover:bg-muted/30"
                }`}
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
