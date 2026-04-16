import Hero from "@/components/hero"
import StickySectionNav from "@/components/sticky-section-nav"
import TrustStrip from "@/components/trust-strip"
import HowItWorks from "@/components/how-it-works"
import StatsBar from "@/components/stats-bar"
import WhatWeOffer from "@/components/what-we-offer"
import CapabilitiesSection from "@/components/capabilities-section"
import Services from "@/components/services"
import BusinessCategories from "@/components/business-categories"
import FeaturedWork from "@/components/featured-work"
import TestimonialsSection from "@/components/testimonials-section"
import Features from "@/components/features"
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
      <FeaturedWork />
      <TestimonialsSection />
      <Features />
      <HomeFaq />
      <CTA />
      <Footer />
    </main>
  )
}
