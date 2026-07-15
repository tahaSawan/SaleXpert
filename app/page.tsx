import Hero from "@/components/hero"
import TrustStrip from "@/components/trust-strip"
import HowItWorks from "@/components/how-it-works"
import Services from "@/components/services"
import HomeFaq from "@/components/home-faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Services />
      <HomeFaq />
      <CTA />
      <Footer />
    </main>
  )
}
