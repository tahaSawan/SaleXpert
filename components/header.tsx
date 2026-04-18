"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { XLogo } from "@/components/x-logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm transition-shadow ${
        hasScrolled ? "shadow-sm border-border" : "border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 min-w-0 [&_svg]:block"
            aria-label="SaleXpert home"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
              <XLogo size={38} variant="onPrimary" />
            </span>
            <span className="font-semibold text-base sm:text-lg text-foreground leading-none hidden sm:inline translate-y-[0.5px]">
              SaleXpert
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground font-medium"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center">
            <Link href="/contact">
              <Button size="sm" className="font-semibold">
                Get a free quote
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 -mr-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 border-t border-border pt-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-sm font-medium ${
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" className="w-full block" onClick={() => setIsOpen(false)}>
                <Button className="w-full font-semibold">Get a free quote</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
