import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { DEFAULT_SITE_URL } from "@/lib/site"

export type BreadcrumbItem = { label: string; href?: string }

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  /** Include JSON-LD for search engines */
  includeJsonLd?: boolean
  className?: string
}

export function Breadcrumbs({ items, includeJsonLd = true, className = "" }: BreadcrumbsProps) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL

  const jsonLd =
    includeJsonLd && items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: `${base.replace(/\/$/, "")}${item.href}` } : {}),
          })),
        }
      : null

  return (
    <div className={className}>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
      <nav aria-label="Breadcrumb" className="py-3 sm:py-4">
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted-foreground">
          {items.map((item, i) => (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1 min-w-0">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/50" aria-hidden />}
              {item.href ? (
                <Link href={item.href} className="hover:text-foreground transition-colors truncate">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground truncate" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
