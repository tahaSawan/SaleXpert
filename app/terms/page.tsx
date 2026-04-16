import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SITE_NAME } from "@/lib/site"

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
        subtitle="Placeholder terms—have them reviewed for your region and business model."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20">
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            This is placeholder copy. Replace it with terms appropriate for your business, services, and region, and have
            them reviewed legally if needed.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Use of the site</h2>
          <p>
            You agree to use this website lawfully and not to misuse contact forms, upload harmful content, or attempt
            to disrupt the service.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Services &amp; pricing</h2>
          <p>
            Website builds, timelines, and fees are agreed in writing (or by email) per project. Nothing on this site is
            a binding offer until confirmed.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Limitation of liability</h2>
          <p>
            To the extent allowed by law, we are not liable for indirect damages arising from use of this site. Your
            lawyer should tailor this section.
          </p>
          <h2 className="text-foreground text-lg font-semibold pt-2">Contact</h2>
          <p>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>{" "}
            for questions about these terms.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
