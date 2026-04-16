import { NextResponse } from "next/server"
import { appendFile, mkdir } from "fs/promises"
import { join } from "path"
import { contactFormSchema } from "@/lib/schemas/contact"

export const runtime = "nodejs"

async function sendViaResend(payload: {
  name: string
  email: string
  business: string
  phone: string
  message: string
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"

  if (!key || !to) return false

  const subject = `New lead: ${payload.name}${payload.business ? ` (${payload.business})` : ""}`
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Business: ${payload.business || "—"}`,
    `Phone: ${payload.phone || "—"}`,
    "",
    payload.message,
  ].join("\n")

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

  return res.ok
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
  const wantsEmail = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL)

  try {
    if (wantsEmail) {
      const ok = await sendViaResend(data)
      if (!ok) {
        return NextResponse.json({ error: "Could not send email. Try again later." }, { status: 502 })
      }
      return NextResponse.json({ ok: true, emailed: true })
    }

    await appendLocalFile({
      name: data.name,
      email: data.email,
      business: data.business ?? "",
      phone: data.phone ?? "",
      message: data.message,
    })

    if (process.env.NODE_ENV === "production") {
      console.info("[contact] Lead (configure RESEND_API_KEY + CONTACT_TO_EMAIL):", data.email)
    }

    return NextResponse.json({ ok: true, emailed: false })
  } catch (e) {
    console.error("[contact]", e)
    return NextResponse.json({ error: "Could not save your message. Try again later." }, { status: 500 })
  }
}
