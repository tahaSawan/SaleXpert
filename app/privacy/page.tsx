import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/site"

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
        subtitle="How we collect, use, and protect information when you visit our site or request a quote."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20">
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Last updated:</strong> June 2025. {SITE_NAME} (&quot;we&quot;,
            &quot;us&quot;) respects your privacy. This policy explains what we collect on salexpert.co and how we use
            it.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Information we collect</h2>
          <p>
            When you submit our contact or quote form, we collect the details you provide—such as your name, email,
            phone number, business name, service area, and project message—so we can respond to your inquiry.
          </p>
          <p>
            When you browse our site, we may collect standard technical data (browser type, pages visited, approximate
            location from IP) through privacy-friendly analytics. We do not sell this information.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">How we use your information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To reply to quote requests and follow up about website projects</li>
            <li>To improve our website and understand how visitors use it</li>
            <li>To comply with legal obligations when required</li>
          </ul>
          <p>We use contact submissions only to communicate about your request unless you agree to something else.</p>

          <h2 className="text-foreground text-lg font-semibold pt-2">How we store and protect data</h2>
          <p>
            Form submissions are sent to our business email via secure providers. We keep inquiry details only as long as
            needed to respond, quote, and deliver services—or as required by law.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Third-party services</h2>
          <p>
            Our site may use analytics (e.g. Vercel Analytics) and email delivery services to operate. Those providers
            process data under their own privacy policies. We choose services with reasonable security practices.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Your choices</h2>
          <p>
            You can request access to or deletion of contact information you submitted by emailing us. You can adjust
            cookie settings in your browser. Most analytics we use are privacy-focused and do not require marketing
            cookies.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Children&apos;s privacy</h2>
          <p>Our services are for businesses. We do not knowingly collect information from children under 13.</p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Changes to this policy</h2>
          <p>
            We may update this page from time to time. The &quot;Last updated&quot; date at the top will change when we
            do.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Contact</h2>
          <p>
            Questions about privacy? Email{" "}
            <a href={`mailto:${SITE_CONTACT_EMAIL}`} className="text-primary font-medium hover:underline">
              {SITE_CONTACT_EMAIL}
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
