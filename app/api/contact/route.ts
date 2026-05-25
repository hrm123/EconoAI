import { Resend } from "resend"
import { NextResponse } from "next/server"

const resendApiKey = process.env.RESEND_API_KEY || ""
const resend = new Resend(resendApiKey)

function generateUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const name = String(body.name || "").trim()
  const helpText = String(body.helpText || "").trim()
  const email = String(body.email || "").trim()
  const uuid = String(body.uuid || generateUuid()).trim()

  if (!name || !helpText || !email) {
    return NextResponse.json({ error: "Your name, email, and request details are required." }, { status: 400 })
  }

  if (!resendApiKey) {
    return NextResponse.json({ error: "Resend API key is not configured." }, { status: 500 })
  }

  try {
    await resend.emails.send({
      from: "EconoAI <noreply@econo.ai>",
      // to: "econoai@ufereepixu.resend.app",
      to: "hr@econo.ai",
      subject: `EconoAI Contact Request — ${uuid}`,
      reply_to: email,
      text: `UUID: ${uuid}\n\nYour Name: ${name}\nYour Email: ${email}\nWhat you want help with:\n${helpText}`,
    })

    return NextResponse.json({ uuid })
  } catch (error) {
    console.error("Resend email error:", error)
    return NextResponse.json({ error: "Failed to send your contact request. Please try again later." }, { status: 500 })
  }
}
