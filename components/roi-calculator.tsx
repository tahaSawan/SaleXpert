"use client"

import { useState } from "react"
import Link from "next/link"
import { Calculator, TrendingUp, DollarSign, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

const businessTypes = [
  { value: "plumber", label: "Plumber", avgJob: 250, avgMonthlyJobs: 15 },
  { value: "electrician", label: "Electrician", avgJob: 300, avgMonthlyJobs: 12 },
  { value: "dentist", label: "Dentist", avgJob: 180, avgMonthlyJobs: 40 },
  { value: "hvac", label: "HVAC", avgJob: 400, avgMonthlyJobs: 10 },
  { value: "salon", label: "Salon", avgJob: 65, avgMonthlyJobs: 60 },
  { value: "contractor", label: "Contractor", avgJob: 2500, avgMonthlyJobs: 4 },
]

export default function ROICalculator() {
  const [selectedBusiness, setSelectedBusiness] = useState(businessTypes[0])
  const [newCustomersPerMonth, setNewCustomersPerMonth] = useState(3)
  const [websiteCost] = useState(599) // Professional plan

  const monthlyRevenue = newCustomersPerMonth * selectedBusiness.avgJob
  const yearlyRevenue = monthlyRevenue * 12
  const roi = ((yearlyRevenue - websiteCost) / websiteCost) * 100
  const paybackMonths = Math.ceil(websiteCost / monthlyRevenue)

  return (
    <section className="py-20 sm:py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ROI Calculator"
          title="See how much more you could earn"
          subtitle="Calculate the potential return on your website investment based on your business type and goals."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Your Business Details
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  What's your business type?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {businessTypes.map((business) => (
                    <button
                      key={business.value}
                      onClick={() => setSelectedBusiness(business)}
                      className={`p-3 text-left rounded-lg border transition-colors ${
                        selectedBusiness.value === business.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/30"
                      }`}
                    >
                      <div className="font-medium text-sm">{business.label}</div>
                      <div className="text-xs text-muted-foreground">
                        ~${business.avgJob} avg job
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  How many NEW customers per month would make this worthwhile?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setNewCustomersPerMonth(num)}
                      className={`p-3 text-center rounded-lg border font-medium transition-colors ${
                        newCustomersPerMonth === num
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/30"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Just {newCustomersPerMonth} additional customers per month from your website
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Your Potential Return
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    ${monthlyRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Monthly revenue</div>
                </div>

                <div className="text-center p-4 rounded-lg bg-background/50">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {paybackMonths}
                  </div>
                  <div className="text-sm text-muted-foreground">Months to pay off</div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-green-50 border border-green-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    {roi.toFixed(0)}% ROI
                  </div>
                  <div className="text-sm text-green-700 mb-4">
                    First-year return on investment
                  </div>
                  <div className="text-lg font-semibold text-green-800">
                    ${yearlyRevenue.toLocaleString()} additional revenue
                  </div>
                  <div className="text-sm text-green-600">
                    vs. ${websiteCost} website investment
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  This is a hypothetical calculator—not a guarantee of results. Your market and follow-through matter.
                </p>
                <Button size="lg" className="font-semibold" asChild>
                  <Link href="/contact">Contact us for a real quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl border border-border bg-muted/30 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Local businesses often get more leads when they&apos;re easy to find and clear to contact. We focus on
            structure and messaging that match how people search and hire—your results will vary.
          </p>
        </div>
      </div>
    </section>
  )
}