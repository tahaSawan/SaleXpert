import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles information on this website.`,
}

export default function PrivacyPage() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]} />
      </div>
      <PageHero
        variant="light"
        eyebrow="Legal"
        title="Privacy policy"
        subtitle="Starter language—replace with a policy that fits your business and jurisdiction."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20">
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            This is a starter policy for your site. Replace it with text that matches your business and jurisdiction,
            ideally reviewed by a lawyer.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Information we collect</h2>
          <p>
            When you use our contact form, we collect the details you submit (such as name, email, phone, and message)
            so we can respond to your inquiry.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">How we use information</h2>
          <p>We use contact submissions only to communicate with you about your request unless you agree otherwise.</p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Analytics</h2>
          <p>
            This site may use privacy-friendly analytics to understand traffic. You can adjust cookie settings in your
            browser.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Contact</h2>
          <p>
            Questions?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
