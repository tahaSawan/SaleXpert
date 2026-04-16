import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            That link doesn&apos;t exist or has moved. Head back home or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
