import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground mb-6">Contact information</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">hello@salexpert.com</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium text-foreground">1-800-ELEVSITE</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Hours</p>
              <p className="font-medium text-foreground">Mon–Fri, 9am–6pm PT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="text-base font-semibold text-foreground mb-3">Quick links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services" className="text-primary font-medium hover:underline">
              Services & pricing
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-primary font-medium hover:underline">
              Example sites
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-primary font-medium hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-primary font-medium hover:underline">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
