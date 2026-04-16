import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import BlogHero from "@/components/blog-hero"
import BlogGrid from "@/components/blog-grid"
import InnerPageCta from "@/components/inner-page-cta"
import Footer from "@/components/footer"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Insights",
  description: `Articles on websites, local SEO, and conversions for service businesses — ${SITE_NAME}.`,
}

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
      </div>
      <BlogHero />
      <BlogGrid />
      <InnerPageCta
        title="Want help applying this to your site?"
        subtitle="Get a quote and we&apos;ll point you to the right package."
      />
      <Footer />
    </main>
  )
}
