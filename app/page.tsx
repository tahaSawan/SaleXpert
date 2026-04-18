import Hero from "@/components/hero"
import StickySectionNav from "@/components/sticky-section-nav"
import TrustStrip from "@/components/trust-strip"
import HowItWorks from "@/components/how-it-works"
import StatsBar from "@/components/stats-bar"
import WhatWeOffer from "@/components/what-we-offer"
import CapabilitiesSection from "@/components/capabilities-section"
import Services from "@/components/services"
import BusinessCategories from "@/components/business-categories"
import ROICalculator from "@/components/roi-calculator"
import BeforeAfterShowcase from "@/components/before-after-showcase"
import FeaturedWork from "@/components/featured-work"
import TestimonialsSection from "@/components/testimonials-section"
import Features from "@/components/features"
import GuaranteeSection from "@/components/guarantee-section"
import HomeFaq from "@/components/home-faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <StickySectionNav />
      <TrustStrip />
      <HowItWorks />
      <StatsBar />
      <WhatWeOffer />
      <CapabilitiesSection />
      <Services />
      <BusinessCategories />
      <ROICalculator />
      <BeforeAfterShowcase />
      <FeaturedWork />
      <TestimonialsSection />
      <Features />
      <GuaranteeSection />
      <HomeFaq />
      <CTA />
      <Footer />
    </main>
  )
}
