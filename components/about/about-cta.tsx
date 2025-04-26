"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Phone } from "lucide-react"

export default function AboutCta() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-white to-brand-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-800">Ready to Collaborate?</h2>
                <p className="text-gray-600">
                  Connect with our defense specialists to explore mission-specific solutions tailored to your
                  operational needs. At Argo Navis Global, we're here to support your objectives with precision,
                  discretion, and unwavering expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-brand-500 text-black font-medium rounded-lg border shadow-lg shadow-brand-500/20 hover:bg-red-400 transition-colors"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                  <Link href="/brochure">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-red-400 transition-colors"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Brochure
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right side - Decorative */}
            <div className="relative bg-gradient-to-br from-red-200 to-red-400 p-8 md:p-12 flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white"
                ></motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative text-center text-white"
              >
                <Phone className="h-16 w-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-black">Direct Support Line</h3>
                <p className="text-black mb-6">
                  Our dedicated team is ready to assist you with any inquiries about our products and services.
                </p>
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="text-md font-regular text-gray-500">+91-9318381008</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
