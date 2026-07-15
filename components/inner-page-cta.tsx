import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type InnerPageCtaProps = {
  title?: string
  subtitle?: string
}

export default function InnerPageCta({
  title = "Ready to get more customers?",
  subtitle = "Tell us about your business — we\u0027ll reply with a clear quote and timeline.",
}: InnerPageCtaProps) {
  return (
    <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">{title}</h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">{subtitle}</p>
        <div className="mt-6">
          <Button asChild size="lg" className="font-semibold">
            <Link href="/contact">
              Claim your free quote
              <ArrowRight className="ml-1" size={18} />
            </Link>
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">No obligation · We respond in under 2 hours</p>
      </div>
    </section>
  )
}
