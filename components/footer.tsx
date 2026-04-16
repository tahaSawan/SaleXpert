"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { useCallback } from "react"

export default function Footer() {
  const handleNavClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4 col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-sm">
                S
              </div>
              <span className="font-semibold text-lg text-foreground">SaleXpert</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We build websites that help local service businesses turn searches into calls, quotes, and bookings—clear
              offers, fast delivery, straightforward pricing.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#services" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#services" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">© 2026 SaleXpert. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </Link>
            <Link href="/" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </Link>
            <Link href="/" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={18} />
            </Link>
            <Link href="/" onClick={handleNavClick} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
