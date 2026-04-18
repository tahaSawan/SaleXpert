"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

const inputClass =
  "w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    serviceArea: "",
    preferredContact: "either" as "email" | "phone" | "either",
    message: "",
  })
  const [pending, setPending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: name === "preferredContact" ? (value as typeof prev.preferredContact) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      const data = (await res.json()) as {
        ok?: boolean
        emailed?: boolean
        error?: string
        hint?: string
        details?: Record<string, string[]>
      }

      if (!res.ok) {
        const base = data.error ?? "Something went wrong."
        const msg = data.hint ? `${base} ${data.hint}` : base
        toast.error(msg)
        return
      }

      const devLocalOnly =
        process.env.NODE_ENV === "development" && data.emailed === false
      toast.success(
        devLocalOnly
          ? "Saved locally (see data/leads.jsonl). Add SMTP_* (e.g. Gmail) or RESEND_API_KEY to your .env to receive real emails."
          : "Thanks—we received your quote request and will get back to you soon.",
      )
      setFormState({
        name: "",
        email: "",
        business: "",
        phone: "",
        serviceArea: "",
        preferredContact: "either",
        message: "",
      })
    } catch {
      toast.error("Network error. Check your connection and try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="glass p-6 sm:p-8 h-fit sticky top-20 sm:top-24">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Request a free quote</h2>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        This is the main step—tell us what you do, where you work, and how you like to be reached. We reply with
        pricing and timeline, not a hard sell.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            disabled={pending}
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            disabled={pending}
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Business name</label>
          <input
            type="text"
            name="business"
            value={formState.business}
            onChange={handleChange}
            disabled={pending}
            autoComplete="organization"
            placeholder="Your business name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            disabled={pending}
            autoComplete="tel"
            placeholder="Your phone number"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            City / region / ZIP <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            type="text"
            name="serviceArea"
            value={formState.serviceArea}
            onChange={handleChange}
            disabled={pending}
            autoComplete="address-level2"
            placeholder="e.g. Dallas metro, 75201"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Best way to reach you</label>
          <select
            name="preferredContact"
            value={formState.preferredContact}
            onChange={handleChange}
            disabled={pending}
            className={inputClass}
          >
            <option value="either">Email or phone—either is fine</option>
            <option value="email">Email preferred</option>
            <option value="phone">Phone preferred</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Project details *</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            disabled={pending}
            placeholder="Your trade or industry, what you want the site to achieve, and any must-haves (booking, gallery, etc.)"
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        <Button type="submit" className="w-full font-semibold gap-2 h-12" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending…
            </>
          ) : (
            <>
              Send quote request <Send size={18} />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
