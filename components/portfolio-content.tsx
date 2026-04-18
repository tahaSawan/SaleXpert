"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import InnerPageCta from "@/components/inner-page-cta"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { portfolioCases } from "@/lib/portfolio-cases"

export default function PortfolioContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = useMemo(() => {
    const cats = new Set(portfolioCases.map((c) => c.category))
    return ["all", ...Array.from(cats).sort()]
  }, [])

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return portfolioCases
    return portfolioCases.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      </div>

      <PageHero
        eyebrow="Portfolio"
        title="Sample website layouts"
        subtitle="Industry-based examples showing structure and flow—not real client brands. Pick one to see how we’d approach that type of business."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <article
              key={item.slug}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors flex flex-col"
            >
              <Link href={`/portfolio/${item.slug}`} className="relative block h-48 sm:h-52 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </Link>

              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block text-xs font-medium text-primary mb-2 capitalize">{item.category}</span>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  <Link href={`/portfolio/${item.slug}`} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  View sample layout
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-8 sm:p-10 mb-12">
          <p className="text-center text-sm font-semibold text-foreground mb-6">What you can count on</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Demonstration only",
                desc: "Titles and businesses here are generic samples—not real clients or performance claims.",
              },
              {
                title: "Clear scope",
                desc: "Deliverables and pricing are spelled out in your quote before work begins.",
              },
              {
                title: "Local service focus",
                desc: "We build for trades and businesses that win on calls, quotes, and bookings.",
              },
              {
                title: "Realistic timelines",
                desc: "We give ranges based on your content and complexity—not hype dates.",
              },
            ].map((row) => (
              <div key={row.title} className="text-center sm:text-left">
                <p className="font-semibold text-foreground text-sm">{row.title}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 sm:p-12 text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">Want something like this?</h2>
          <p className="text-muted-foreground mb-8">
            Share your business and goals—we&apos;ll suggest a package and timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Get a free quote
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden />
          </Link>
        </div>
      </div>

      <InnerPageCta
        title="Like what you see?"
        subtitle="We&apos;ll tailor structure and copy to your trade and market."
      />

      <Footer />
    </div>
  )
}
