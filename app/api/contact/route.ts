import { NextResponse } from "next/server"
import { appendFile, mkdir } from "fs/promises"
import { join } from "path"
import nodemailer from "nodemailer"
import { contactFormSchema } from "@/lib/schemas/contact"

export const runtime = "nodejs"

type LeadPayload = {
  name: string
  email: string
  business: string
  phone: string
  serviceArea: string
  preferredContact: "email" | "phone" | "either"
  message: string
}

function buildLeadEmail(payload: LeadPayload) {
  const subject = `New lead: ${payload.name}${payload.business ? ` (${payload.business})` : ""}`
  const contactPref =
    payload.preferredContact === "either"
      ? "Email or phone"
      : payload.preferredContact === "email"
        ? "Email"
        : "Phone"
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Business: ${payload.business || "—"}`,
    `Phone: ${payload.phone || "—"}`,
    `Service area: ${payload.serviceArea || "—"}`,
    `Preferred contact: ${contactPref}`,
    "",
    payload.message,
  ].join("\n")
  return { subject, text }
}

async function sendViaSmtp(payload: LeadPayload): Promise<boolean> {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO_EMAIL
  const port = Number(process.env.SMTP_PORT ?? "587")
  const from = process.env.CONTACT_FROM_EMAIL ?? user

  if (!host || !user || !pass || !to || !from) return false

  const { subject, text } = buildLeadEmail(payload)

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      text,
    })
    return true
  } catch (e) {
    console.error("[contact] SMTP send failed:", e)
    return false
  }
}

async function sendViaResend(
  payload: LeadPayload,
): Promise<{ ok: true } | { ok: false; message?: string }> {
  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"

  if (!key || !to) return { ok: false, message: "Missing RESEND_API_KEY or CONTACT_TO_EMAIL." }

  const { subject, text } = buildLeadEmail(payload)

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
    }),
  })

  if (!res.ok) {
    const raw = await res.text()
    let message: string | undefined
    try {
      const parsed = JSON.parse(raw) as { message?: string }
      message = parsed.message
    } catch {
      message = raw.slice(0, 300)
    }
    console.error("[contact] Resend HTTP", res.status, raw)
    return { ok: false, message }
  }

  return { ok: true }
}

async function appendLocalFile(payload: Record<string, string>) {
  if (process.env.NODE_ENV !== "development") return
  const dir = join(process.cwd(), "data")
  await mkdir(dir, { recursive: true })
  const line = JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }) + "\n"
  await appendFile(join(dir, "leads.jsonl"), line, "utf8")
}

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = contactFormSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const data = parsed.data

  const smtpConfigured = Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL,
  )
  const resendConfigured = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL)

  try {
    if (smtpConfigured) {
      const ok = await sendViaSmtp(data)
      if (!ok) {
        return NextResponse.json({ error: "Could not send email. Try again later." }, { status: 502 })
      }
      return NextResponse.json({ ok: true, emailed: true })
    }

    if (resendConfigured) {
      const result = await sendViaResend(data)
      if (!result.ok) {
        return NextResponse.json(
          {
            error: "Could not send email. Try again later.",
            hint: result.message,
          },
          { status: 502 },
        )
      }
      return NextResponse.json({ ok: true, emailed: true })
    }

    await appendLocalFile({
      name: data.name,
      email: data.email,
      business: data.business ?? "",
      phone: data.phone ?? "",
      serviceArea: data.serviceArea ?? "",
      preferredContact: data.preferredContact,
      message: data.message,
    })

    if (process.env.NODE_ENV === "production") {
      console.info("[contact] Lead — set SMTP_* or RESEND_API_KEY + CONTACT_TO_EMAIL:", data.email)
    }

    return NextResponse.json({ ok: true, emailed: false })
  } catch (e) {
    console.error("[contact]", e)
    return NextResponse.json({ error: "Could not save your message. Try again later." }, { status: 500 })
  }
}
