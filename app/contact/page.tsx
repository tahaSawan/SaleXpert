import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { DEFAULT_SITE_URL, SITE_NAME } from "@/lib/site"

const contactDesc = `Request a quote from ${SITE_NAME}. Tell us your trade, area, and goals—we respond with clear pricing and timeline.`

export const metadata: Metadata = {
  title: "Contact",
  description: contactDesc,
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: contactDesc,
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL}/contact`,
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <FAQ />
      <Footer />
    </main>
  )
}
