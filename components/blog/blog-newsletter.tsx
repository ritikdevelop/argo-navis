"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <Mail className="h-5 w-5 text-yellow-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">Subscribe to Newsletter</h3>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Stay updated with our latest articles, news, and insights in the defense and security industry.
      </p>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
          Thank you for subscribing! You'll receive our next newsletter.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white border-gray-300 text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
