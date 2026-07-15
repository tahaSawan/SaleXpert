import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/page-hero"
import AboutContent from "@/components/about-content"
import InnerPageCta from "@/components/inner-page-cta"
import Footer from "@/components/footer"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: `Learn how ${SITE_NAME} helps plumbers, dentists, salons, and local trades get more calls with clear, fast websites.`,
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>
      <PageHero
        eyebrow="About us"
        title="We exist for one reason: to get you more customers"
        subtitle="We're a small team that builds websites for local service businesses. No agency fluff. No 6-week timelines. Just fast, professional sites that make your phone ring."
      />
      <AboutContent />
      <InnerPageCta
        title="Ready to see what we can do for your business?"
        subtitle="Get a free, no-obligation quote. We respond in under 2 hours."
      />
      <Footer />
    </main>
  )
}
