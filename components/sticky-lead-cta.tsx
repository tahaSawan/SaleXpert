"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/** Persistent Action CTA after scroll—AIDA “Action” without leaving the page. */
export default function StickyLeadCta() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 380)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const hidden =
    pathname?.startsWith("/contact") ||
    pathname === "/privacy" ||
    pathname === "/terms"
  if (hidden) return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out pb-[env(safe-area-inset-bottom)] ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-center sm:text-left text-muted-foreground sm:flex-1">
          <span className="font-medium text-foreground">Ready for a clear quote?</span> One short form—same goal as the hero and footer. No obligation.
        </p>
        <Button asChild size="default" className="w-full sm:w-auto shrink-0 font-semibold">
          <Link href="/contact">
            Get a free quote
            <ArrowRight className="ml-1.5 w-4 h-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  )
}
