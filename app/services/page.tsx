"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Briefcase, GraduationCap, Wrench, Truck, FileText, Gift } from "lucide-react"

export default function ServicesPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="m-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Argo Navis Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 flex h-full items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
            >
              Your Trusted Defense Partner 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-md md:text-lg"
            >
              Argo Navis Global operates with unwavering integrity and in full compliance with international defense protocols and arms trade regulations. 
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Argo Navis Global offers a comprehensive range of services to support your defense and security needs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { delay: 0.1, duration: 0.6 } },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Briefcase className="mb-2 h-12 w-12 text-primary" />
                  <CardTitle>Manufacturing & Trading </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                  Argo Navis Global bridges the gap between cutting-edge military technology and those who rely on it most. We provide high-caliber weaponry, munitions, and defense systems sourced from a trusted network of renowned manufacturers.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Needs assessment and requirements analysis</li>
                    <li>• Vendor selection and qualification</li>
                    <li>• Contract negotiation and management</li>
                    <li>• Quality assurance and compliance verification</li>
                    <li>• Logistics coordination and delivery management</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { delay: 0.2, duration: 0.6 } },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Shield className="mb-2 h-12 w-12 text-primary" />
                  <CardTitle>Logistics & Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                  Argo Navis Global, we specialize in the seamless and secure cross-border transportation of defense-grade weaponry and munitions. Our logistics experts are well-versed in navigating complex international regulations, ensuring full compliance with global arms trade laws.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Capability gap analysis</li>
                    <li>• Technology assessment and recommendations</li>
                    <li>• System integration planning</li>
                    <li>• Operational procedure development</li>
                    <li>• Security infrastructure design</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { delay: 0.3, duration: 0.6 } },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Gift className="mb-2 h-12 w-12 text-primary" />
                  <CardTitle>Value-Added Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                  Argo Navis Global provides seamless in-house logistics and secure documentation, ensuring no reliance on third-party intermediaries. From comprehensive after-sales support to bespoke product customization, we are committed to guaranteeing that your defense assets are optimized for superior performance. 
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Equipment operation and handling</li>
                    <li>• Tactical deployment techniques</li>
                    <li>• Maintenance and troubleshooting</li>
                    <li>• Instructor certification programs</li>
                    <li>• Customized training modules</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { delay: 0.4, duration: 0.6 } },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Wrench className="mb-2 h-12 w-12 text-primary" />
                  <CardTitle>Maintenance & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                    Ongoing maintenance, repair, and technical support services to ensure optimal performance and
                    longevity of your equipment.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Preventive maintenance programs</li>
                    <li>• Repair and refurbishment services</li>
                    <li>• Spare parts supply chain management</li>
                    <li>• Technical support hotline</li>
                    <li>• On-site service and support</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { delay: 0.5, duration: 0.6 } },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Truck className="mb-2 h-12 w-12 text-primary" />
                  <CardTitle>Cross-Country Operations </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                  Argo Navis Global, we navigate the intricacies of international defense trade with unmatched expertise and strategic precision. Backed by years of experience and deep geopolitical insight, our team ensures smooth cross-border transactions through a smart
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• International shipping and customs clearance</li>
                    <li>• Secure transportation and handling</li>
                    <li>• Inventory management systems</li>
                    <li>• Distribution network optimization</li>
                    <li>• Supply chain security protocols</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                ...fadeIn,
                visible: { ...fadeIn.visible, transition: { delay: 0.6, duration: 0.6 } },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <FileText className="mb-2 h-12 w-12 text-primary" />
                  <CardTitle>Compliance & Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">
                    Expert assistance with regulatory compliance, export controls, and documentation requirements for
                    defense equipment.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Export license application support</li>
                    <li>• End-user certification management</li>
                    <li>• Regulatory compliance audits</li>
                    <li>• Documentation preparation and verification</li>
                    <li>• International trade compliance consulting</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Service Process</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A structured approach to delivering exceptional service and solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border md:left-0 md:top-1/2 md:h-1 md:w-full md:translate-x-0 md:-translate-y-1/2"></div>

            <div className="grid gap-12 md:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto mb-4 md:mx-0">
                  1
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">Consultation</h3>
                  <p className="text-muted-foreground">
                    We begin with a thorough consultation to understand your specific requirements, challenges, and
                    objectives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto mb-4 md:mx-0">
                  2
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">Solution Design</h3>
                  <p className="text-muted-foreground">
                    Our experts develop a customized solution tailored to your specific needs and operational
                    environment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto mb-4 md:mx-0">
                  3
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">Implementation</h3>
                  <p className="text-muted-foreground">
                    We handle all aspects of implementation, from procurement and delivery to installation and
                    integration.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mx-auto mb-4 md:mx-0">
                  4
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">Ongoing Support</h3>
                  <p className="text-muted-foreground">
                    We provide continuous support, maintenance, and training to ensure optimal performance and
                    longevity.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Enhance Your Capabilities?</h2>
            <p className="mb-8 text-lg">
              Contact our team today to discuss how our services can help you meet your defense and security objectives.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
