import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import AboutHero from "@/components/about-hero"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"
import TimelineSection from "@/components/timeline-section"
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
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <InnerPageCta />
      <Footer />
    </main>
  )
}
