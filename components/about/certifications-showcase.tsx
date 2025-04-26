"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Globe, Award, Check } from "lucide-react"

const certifications = [
  {
    icon: <Shield className="h-12 w-12 text-brand-500" />,
    title: "NATO registered and certified supplier:",
    code: "015YU",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Globe className="h-12 w-12 text-brand-500" />,
    title: "United Nations (UN) registered and approved supplier:",
    code: "#690668",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: <Award className="h-12 w-12 text-brand-500" />,
    title: "Registered and licensed for transfer of military products in the EU:",
    code: "",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: <Globe className="h-12 w-12 text-brand-500" />,
    title: "Worldwide license for import and export of military equipment:",
    code: "",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Globe className="h-12 w-12 text-brand-500" />,
    title: "Worldwide license for brokerage activity of military equipment:",
    code: "",
    color: "from-red-500 to-rose-500",
  },
]

export default function CertificationsShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={isInView ? { opacity: 0.05, x: 0, y: 0 } : { opacity: 0, x: -100, y: -100 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-brand-500"
          style={{ filter: "blur(80px)" }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={isInView ? { opacity: 0.05, x: 0, y: 0 } : { opacity: 0, x: 100, y: 100 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-brand-500"
          style={{ filter: "blur(80px)" }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-brand-500">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Internationally recognized certifications that validate our commitment to excellence and compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 group"
            >
              <div className="relative">
                {/* Animated background gradient */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br ${cert.color}`}
                ></motion.div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">{cert.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-brand-500 transition-colors">
                    {cert.title}
                  </h3>
                  {cert.code && (
                    <div className="mt-auto pt-4">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-500">
                        <Check className="h-4 w-4 mr-2" />
                        <span className="font-medium">{cert.code}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
