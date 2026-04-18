"use client"

import Link from "next/link"

const sections = [
  { id: "process", label: "Process" },
  { id: "offer", label: "What we offer" },
  { id: "capabilities", label: "Capabilities" },
  { id: "services", label: "Pricing" },
  { id: "industries", label: "Industries" },
  { id: "examples", label: "Examples" },
  { id: "testimonials", label: "Client stories" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
]

export default function StickySectionNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-14 sm:top-16 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-2 sm:py-2.5 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="hidden sm:inline text-xs font-medium text-muted-foreground shrink-0 pr-2">Jump to:</span>
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
