"use client"

import { useState } from "react"

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

export default function ContactPage() {
  const [name, setName] = useState("")
  const [helpText, setHelpText] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    const uuid = generateUuid()

    try {
      const bodyJson = JSON.stringify({ name, helpText, email, uuid })
      console.log('bodyJson', bodyJson)
      debugger
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bodyJson,
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.error || "Unable to submit your request right now.",
        })
      } else {
        setStatus({
          type: "success",
          message: `Successfully submitted your request. Note down your reference ID: ${data.uuid}`,
        })
        setName("")
        setHelpText("")
        setEmail("")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "A network error occurred. Please try again.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 mx-auto max-w-4xl">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary">Contact Us</p>
        <h1 className="text-4xl font-bold mt-3">Get in touch with EconoAI</h1>
        <p className="mt-4 text-base-content/80">
          Fill out the form below and submit your request. Your message will be prepared for email to hr@econo.ai and a unique reference ID will appear after submission.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-base-100 shadow-xl border border-base-300 rounded-3xl p-8">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">What you want help with</span>
          </label>
          <textarea
            placeholder="Tell us what you need help with"
            className="textarea textarea-bordered w-full min-h-[140px]"
            value={helpText}
            onChange={(e) => setHelpText(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Preparing request..." : "Submit"}
          </button>

          {status && (
            <div className={`alert ${status.type === "success" ? "alert-success" : "alert-error"}`}>
              <span>{status.message}</span>
            </div>
          )}
        </div>
      </form>
    </section>
  )
}
