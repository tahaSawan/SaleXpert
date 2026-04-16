import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import BlogPost from "@/components/blog-post"
import RelatedPosts from "@/components/related-posts"
import Footer from "@/components/footer"
import InnerPageCta from "@/components/inner-page-cta"
import { SITE_NAME } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

const blogTitles: Record<string, string> = {
  "5-reasons-website": "5 Reasons Your Business Needs a Website",
  "website-seo-tips": "Website SEO Tips",
  "mobile-optimization": "Mobile Optimization",
  "conversion-optimization": "Increase Website Conversions",
  "website-security": "Website Security",
  "website-analytics": "Website Analytics",
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const title = blogTitles[slug] ?? "Article"
  return {
    title,
    description: `Insight for local businesses from ${SITE_NAME}.`,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const breadcrumbTitle = blogTitles[slug] ?? "Article"

  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/blog" },
            { label: breadcrumbTitle },
          ]}
        />
      </div>
      <BlogPost slug={slug} />
      <RelatedPosts slug={slug} />
      <InnerPageCta title="Questions about your own site?" subtitle="We can apply these ideas to your business—get a quote." />
      <Footer />
    </main>
  )
}
