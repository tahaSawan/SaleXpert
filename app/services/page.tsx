import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/page-hero"
import Services from "@/components/services"
import ServiceComparison from "@/components/service-comparison"
import InnerPageCta from "@/components/inner-page-cta"
import Footer from "@/components/footer"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services & pricing",
  description: `One-time website packages for local businesses. Compare plans, features, and pricing — ${SITE_NAME}.`,
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      </div>
      <PageHero
        eyebrow="Services & Pricing"
        title="One payment. A website that pays for itself."
        subtitle="No monthly fees, no hidden costs. Pick a package, tell us about your business, and we build a site designed to make your phone ring."
      />
      <Services />
      <ServiceComparison />
      <InnerPageCta
        title="Not sure which package fits?"
        subtitle="Tell us your goals — we'll recommend the right one and send a clear quote."
      />
      <Footer />
    </main>
  )
}
