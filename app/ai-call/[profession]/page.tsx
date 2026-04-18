import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const professionData = {
  plumber: {
    title: "Professional Websites for Plumbers",
    headline: "Stop losing customers to competitors who show up online",
    subheadline:
      "Get a professional website that brings emergency calls, service bookings, and repeat customers directly to your phone.",
    avgJob: 250,
    painPoints: [
      "Customers can't find you when pipes burst at midnight",
      "Your Yellow Pages ad isn't working like it used to",
      "Homeowners trust plumbers with professional websites more",
      "You're losing jobs to competitors who look more established online",
    ],
    benefits: [
      "24/7 emergency contact form that goes to your phone",
      "Service area maps showing exactly where you work",
      "Before/after photos that prove your quality work",
      "Clear pricing that builds trust before you even talk",
    ],
    cta: "Get more emergency calls",
  },
  electrician: {
    title: "Professional Websites for Electricians",
    headline: "Wire your business for more customers",
    subheadline:
      "Professional websites that help homeowners and businesses find, trust, and hire you for electrical work.",
    avgJob: 300,
    painPoints: [
      "Safety-conscious customers research electricians online first",
      "Your certifications and licenses aren't visible to prospects",
      "Customers can't easily see your commercial vs residential services",
      "Emergency electrical work requires immediate phone contact",
    ],
    benefits: [
      "Professional look that showcases your certifications",
      "Separate pages for residential and commercial work",
      "Emergency contact buttons on every page",
      "Service gallery showing your electrical installations",
    ],
    cta: "Power up your business",
  },
  dentist: {
    title: "Professional Websites for Dental Practices",
    headline: "A website that makes patients smile",
    subheadline:
      "Patient-friendly websites that make it easy to find your practice, understand your services, and book appointments.",
    avgJob: 180,
    painPoints: [
      "Patients research dentists online before choosing",
      "Insurance and payment options aren't clear to new patients",
      "Online booking would reduce phone calls to your staff",
      "Your expertise isn't visible to prospective patients",
    ],
    benefits: [
      "Clean, medical-grade design that builds confidence",
      "Service pages explaining procedures in patient terms",
      "Insurance and payment information upfront",
      "Online appointment request forms",
    ],
    cta: "Attract more patients",
  },
}

interface Props {
  params: Promise<{ profession: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profession } = await params
  const data = professionData[profession as keyof typeof professionData]

  if (!data) {
    return { title: "Not Found" }
  }

  return {
    title: data.title,
    description: data.subheadline,
  }
}

export default async function ProfessionLandingPage({ params }: Props) {
  const { profession } = await params
  const data = professionData[profession as keyof typeof professionData]

  if (!data) {
    notFound()
  }

  const monthlyRevenue = 3 * data.avgJob
  const yearlyRevenue = monthlyRevenue * 12
  const roi = ((yearlyRevenue - 599) / 599) * 100

  return (
    <main className="overflow-hidden">
      <section className="relative bg-slate-950 text-white pt-20 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_80%_-20%,oklch(0.45_0.2_250/0.35),transparent)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{data.headline}</h1>

            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">{data.subheadline}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-gray-100 text-lg font-semibold px-8">
                <Link href={`/contact?profession=${profession}&source=ai-call`}>
                  {data.cta}
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href="/portfolio">See example sites</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Clear packages on the homepage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Scope before you pay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sound familiar?</h2>
              <ul className="space-y-4">
                {data.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-sm flex items-center justify-center mt-0.5 shrink-0">
                      ✗
                    </span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Illustrative math (not a promise)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you only added a few jobs per month at your typical job size, revenue could add up. Your real results
                depend on your market and follow-through.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-green-600">{roi.toFixed(0)}% illustrative ROI</div>
                  <div className="text-sm text-muted-foreground">vs. a $599 build, first year only</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">${monthlyRevenue.toLocaleString()}/mo</div>
                  <div className="text-sm text-muted-foreground">If 3 extra customers/mo at ~${data.avgJob} each</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">${yearlyRevenue.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">That scenario × 12 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What you get with your website</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to turn online visitors into paying customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to talk?</h2>
          <p className="text-xl text-white/90 mb-8">
            Request a quote and we’ll confirm pricing and timeline for your package—no fake discounts or countdowns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8">
              <Link href={`/contact?profession=${profession}&source=ai-call`}>
                Get a quote
                <Phone className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <div className="text-sm text-white/80">We’ll reply with next steps</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ profession: "plumber" }, { profession: "electrician" }, { profession: "dentist" }]
}
