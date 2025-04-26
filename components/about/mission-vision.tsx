"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Crosshair, Target, Eye, Lightbulb, Compass, Globe } from "lucide-react"

export default function MissionVision() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-brand-500"
          style={{ filter: "blur(80px)" }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-brand-500"
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
            Our <span className="text-brand-500">Mission</span> & <span className="text-brand-500">Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by our core values, we strive to deliver excellence in defense and security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <Crosshair className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                    Argo Navis Global, our mission is to strengthen global defense capabilities by delivering cutting-edge, reliable, and compliant military solutions. We are dedicated to driving operational excellence through precision-engineered products, streamlined logistics, and end-to-end service. Anchored in integrity, innovation, and responsiveness, we aim to be the trusted strategic partner for governments, law enforcement agencies, and defense contractors worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500 mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                    Our vision is to emerge as a world-class leader in defense equipment supply and cross-border defense trade-renowned for our technical expertise, global partnerships, and robust supply chain network. We aspire to empower nations with advanced military capabilities, enabling them to protect their sovereignty, secure strategic assets, and maintain regional stability. Through innovation and reliability, we seek to shape the future of modern defense commerce.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
