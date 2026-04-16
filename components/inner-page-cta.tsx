import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type InnerPageCtaProps = {
  title?: string
  subtitle?: string
}

export default function InnerPageCta({
  title = "Ready to get a clear plan and quote?",
  subtitle = "Tell us about your business—we&apos;ll reply with next steps.",
}: InnerPageCtaProps) {
  return (
    <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">{title}</h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">{subtitle}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="font-semibold">
            <Link href="/contact">
              Get a free quote
              <ArrowRight className="ml-1" size={18} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold bg-background">
            <Link href="/portfolio">View examples</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
