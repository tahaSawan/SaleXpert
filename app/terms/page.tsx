import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using this website and ${SITE_NAME}'s services.`,
}

export default function TermsPage() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of service" }]} />
      </div>
      <PageHero
        variant="light"
        eyebrow="Legal"
        title="Terms of service"
        subtitle="Terms for using salexpert.co and working with us on website projects."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20">
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-foreground">Last updated:</strong> June 2025. By using {SITE_NAME}&apos;s website,
            you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Use of this website</h2>
          <p>
            You agree to use salexpert.co lawfully—for example, to learn about our services or submit a legitimate quote
            request. Do not misuse contact forms, attempt to disrupt the site, or upload harmful content.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Services &amp; pricing</h2>
          <p>
            {SITE_NAME} designs and builds websites for local service businesses. Package prices shown on this site
            (e.g. Starter, Professional, Enterprise) are starting points. Your final scope, timeline, and fee are
            confirmed in a written quote or email before work begins.
          </p>
          <p>
            Nothing on this website is a binding contract until you accept a specific quote and any deposit or payment
            terms we agree on. Hosting, domains, third-party tools, and ongoing services are quoted separately unless
            stated otherwise in your agreement.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Your responsibilities</h2>
          <p>
            You agree to provide accurate contact information and content you have the right to use (text, logos, photos).
            Delays in providing materials may shift project timelines.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Ownership &amp; deliverables</h2>
          <p>
            Upon full payment for agreed work, you receive the website deliverables described in your project quote,
            subject to any third-party licenses (fonts, stock assets, platforms). Domain and hosting accounts are
            typically registered in your name unless we agree otherwise in writing.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Revisions &amp; support</h2>
          <p>
            Included revision rounds and post-launch support depend on the package you purchase and are spelled out in
            your quote. Work outside agreed scope may be billed separately.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Disclaimer</h2>
          <p>
            We build sites structured for local visibility and conversions, but we do not guarantee specific search
            rankings, traffic levels, or revenue outcomes. Marketing results depend on your market, competition, and
            follow-through.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE_NAME} is not liable for indirect, incidental, or consequential
            damages arising from use of this website or our services. Our total liability for any claim related to a
            project is limited to the fees you paid us for that project.
          </p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Changes</h2>
          <p>We may update these terms. Continued use of the site after changes means you accept the updated terms.</p>

          <h2 className="text-foreground text-lg font-semibold pt-2">Contact</h2>
          <p>
            Questions? Email{" "}
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
