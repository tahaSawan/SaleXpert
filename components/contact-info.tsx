import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react"
import { SITE_CONTACT_EMAIL, SITE_LOCATION, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site"

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
              <p className="font-medium text-foreground">
                <a href={`mailto:${SITE_CONTACT_EMAIL}`} className="hover:text-primary hover:underline">
                  {SITE_CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium text-foreground">
                <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-primary hover:underline">
                  {SITE_PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-1">Mon–Fri · We answer during business hours</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">{SITE_LOCATION}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Response time</p>
              <p className="font-medium text-foreground">Under 2 hours</p>
              <p className="text-xs text-muted-foreground mt-1">During business hours · Mon–Fri 9am–6pm CT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust reinforcement */}
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheck className="text-green-600" size={18} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground mb-1">Our promise to you</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>Clear scope & pricing before you pay</li>
              <li>7-day money-back guarantee</li>
              <li>Post-launch support included</li>
              <li>You own everything we build</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
