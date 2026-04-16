import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Breadcrumbs } from "@/components/breadcrumbs"
import InnerPageCta from "@/components/inner-page-cta"
import { Button } from "@/components/ui/button"
import { getCaseBySlug, portfolioCases } from "@/lib/portfolio-cases"
import { SITE_NAME } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return portfolioCases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) return { title: "Sample layout" }
  return {
    title: c.title,
    description: `${c.outcome} Sample layout by ${SITE_NAME}—not a live client site.`,
  }
}

export default async function PortfolioCasePage({ params }: Props) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-border/80">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: c.title },
          ]}
        />
      </div>

      <PageHero
        eyebrow="Sample layout"
        title={c.title}
        subtitle={c.outcome}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="max-w-3xl text-sm text-muted-foreground mb-8">
          <strong className="text-foreground">Sample layout only.</strong> Not a live client project—name and category
          are for demonstration. Stock imagery; your site would use your photos and copy.
        </p>
        <div className="relative w-full aspect-[21/9] max-h-[420px] rounded-xl overflow-hidden border border-border bg-muted mb-10 sm:mb-12">
          <Image src={c.image} alt="" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" priority />
        </div>

        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-foreground border border-border"
              >
                {tag}
              </span>
            ))}
            <span className="inline-flex px-2.5 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary capitalize border border-primary/20">
              {c.category}
            </span>
          </div>

          <div
            className="prose prose-neutral max-w-none text-foreground prose-headings:font-semibold prose-h2:text-lg prose-ul:my-2"
            dangerouslySetInnerHTML={{ __html: c.contentHtml }}
          />

          <p className="mt-10 text-sm text-muted-foreground border-t border-border pt-8">
            Your real site would be written and structured for your market, photos, and offers—this page shows structure
            only.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link href="/contact">
                Get a quote for your business
                <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">Back to portfolio</Link>
            </Button>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-8"
          >
            <ArrowLeft size={16} />
            All sample layouts
          </Link>
        </div>
      </article>

      <InnerPageCta />
      <Footer />
    </div>
  )
}
