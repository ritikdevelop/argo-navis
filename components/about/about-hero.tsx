"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Shield, Award, Globe } from "lucide-react"
import AnimatedCounter from "@/components/animations/animated-counter"

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Stats data
  const stats = [
    { icon: <Shield className="h-6 w-6" />, value: 15, suffix: "+", label: "Years Experience" },
    { icon: <Globe className="h-6 w-6" />, value: 40, suffix: "+", label: "Countries Served" },
    { icon: <Award className="h-6 w-6" />, value: 100, suffix: "%", label: "Client Satisfaction" },
  ]

  return (
    <section ref={containerRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Defense+Headquarters"
            alt="Argo Navis Global Headquarters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-500 mb-6"
            >
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-medium">About Argo Navis Global</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-800"
            >
              Your Strategic{" "}
              <span className="bg-clip-text text-gray-800 bg-gradient-to-r from-brand-500 to-brand-700">
                Defense Partner
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl"
            >
              Headquartered in Noida, India, Argo Navis Global stands as a premier provider of cutting-edge military
              equipment and strategic defense solutions. With an extensive footprint across major global defense
              corridors, we deliver excellence where it matters most-on the front lines of global security.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-500">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                      <AnimatedCounter
                        end={stat.value}
                        className=""
                        suffix={stat.suffix}
                        threshold={0.3}
                        duration={2}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-brand-500/10 rounded-3xl transform rotate-6"></div>
              <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-brand-500/10 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Company+Overview"
                  alt="Company Overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Global Defense Excellence</h3>
                  <p className="text-sm text-white/80">
                    Delivering cutting-edge military solutions to safeguard what matters most
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
