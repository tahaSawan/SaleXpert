import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/page-hero"
import Services from "@/components/services"
import Features from "@/components/features"
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
        eyebrow="Services"
        title="Plans built for local service businesses"
        subtitle="Pick the package that matches how many pages you need and how much you want to grow. Hosting and domain are usually separate—we explain that in your quote."
      />
      <Services />
      <ServiceComparison />
      <Features />
      <InnerPageCta />
      <Footer />
    </main>
  )
}
