"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    phone: "",
    profession: "",
    source: "",
    offer: ""
  })
  const [pending, setPending] = useState(false)

  // Capture URL parameters for tracking AI bot calls
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const profession = urlParams.get('profession') || ''
    const source = urlParams.get('source') || ''
    const offer = urlParams.get('offer') || ''
    
    setFormState(prev => ({
      ...prev,
      profession,
      source,
      offer,
      message: profession ? `I'm interested in a website for my ${profession} business.` : prev.message
    }))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
          : "Thanks—we received your message and will get back to you soon.",
      )
      setFormState({ 
        name: "", 
        email: "", 
        business: "", 
        message: "", 
        phone: "",
        profession: formState.profession,
        source: formState.source, 
        offer: formState.offer
      })
    } catch {
      toast.error("Network error. Check your connection and try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="glass p-6 sm:p-8 h-fit sticky top-20 sm:top-24">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
        {formState.source === "ai-call" ? "Get your website quote" : "Send us a message"}
      </h2>

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
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
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
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
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
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
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
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            disabled={pending}
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none disabled:opacity-60"
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
              Send message <Send size={18} />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
