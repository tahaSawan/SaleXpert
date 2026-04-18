/** SaleXpert — canonical branding. Set NEXT_PUBLIC_SITE_URL when your domain is live. */
export const SITE_NAME = "SaleXpert"

export const SITE_TAGLINE = "Websites that win you more local customers"

/** Default public URL (no trailing slash). Override with env in production. */
export const DEFAULT_SITE_URL = "https://salexpert.co"

/**
 * `metadataBase` must be a full URL with protocol. Local `.env` often uses `localhost:3000` without `http://`.
 */
export function resolveSiteUrl(envUrl: string | undefined): string {
  const raw = (envUrl ?? "").trim() || DEFAULT_SITE_URL
  const noTrailing = raw.replace(/\/$/, "")
  if (/^https?:\/\//i.test(noTrailing)) return noTrailing
  const host = noTrailing.replace(/^\/+/, "")
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return `http://${host}`
  }
  return `https://${host}`
}

/** Public contact email (shown on site; set CONTACT_TO_EMAIL in production to match). */
export const SITE_CONTACT_EMAIL = "help@salexpert.co"

/** Public business phone (display + `tel:` href — Twilio / AI calling line). */
export const SITE_PHONE_DISPLAY = "+1 (478) 347 1221"
export const SITE_PHONE_TEL = "+14783471221"

/** Primary business location shown on contact page. */
export const SITE_LOCATION = "Dallas, TX"

export const SITE_DESCRIPTION =
  "SaleXpert builds professional websites for local service businesses—trades, clinics, salons, shops, and more—so more people find you, trust you, and contact you. Clear one-time pricing, mobile-first, ready for Google."
