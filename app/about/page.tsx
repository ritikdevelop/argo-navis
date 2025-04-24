// "use client"

// import { useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion, useAnimation } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { Button } from "@/components/ui/button"
// import { Eye, Target, Shield, Compass, Globe, Award } from "lucide-react"

// export default function AboutPage() {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     }
//   }, [controls, inView])

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   }

//   return (
//     <div className="m-1 p-1">
//       {/* About Argo Navis Section */}
//       <section className="py-20">
//         <div className="container">
//           <div className="grid gap-12 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col justify-center"
//             >
//               <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About Argo Navis Global</h1>
//               <p className="mb-4 text-lg text-muted-foreground">
//               Argo Navis Global, we redefine defense excellence. With a commanding presence across international arms corridors, we specialize in the procurement, integration, and secure delivery of advanced defense systems, tactical-grade munitions, and military-grade technology.
//               </p>
//               <br />
//               <p className="mb-4 text-lg text-muted-foreground">
//               Our operations are engineered for precision and discretion—serving armed forces, homeland security, paramilitary divisions, and elite private security entities worldwide. From cross-border arms compliance to turnkey logistics and in-field product customization, Argo Navis Global ensures that every solution is mission-ready and field-proven.
//               </p>
//               <br />
//               <p className="text-lg text-muted-foreground">
//                 At Argo Navis Global, we combine technical expertise with a deep understanding of operational
//                 requirements to deliver solutions that enhance the capabilities and safety of those who protect and
//                 serve.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative h-[500px] overflow-hidden rounded-lg"
//             >
//               <Image
//                 src="/placeholder.svg?height=1000&width=800"
//                 alt="Argo Navis Global Headquarters"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission and Vision Section - Redesigned */}
//       <section className="py-20 bg-navy-gradient text-white">
//         <div className="container">
//           <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn} className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Mission & Vision</h2>
//             <p className="mx-auto max-w-2xl opacity-90">Guided by our commitment to excellence and innovation</p>
//           </motion.div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="relative"
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 h-full relative overflow-hidden">
//                 <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-white/5"></div>
//                 <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-white/5"></div>

//                 <div className="relative z-10">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-white/20 p-4 rounded-full mr-4">
//                       <Target className="h-8 w-8" />
//                     </div>
//                     <h3 className="text-2xl font-bold">Our Mission</h3>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="flex items-start">
//                       <Shield className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
//                       <p>
//                         To provide cutting-edge defense and security solutions that enhance the operational capabilities
//                         of our clients while ensuring the highest standards of quality and reliability.
//                       </p>
//                     </div>

//                     <div className="flex items-start">
//                       <Compass className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
//                       <p>
//                         We are committed to supporting the safety and security of nations through innovative products,
//                         expert consultation, and comprehensive service throughout the lifecycle of our solutions.
//                       </p>
//                     </div>

//                     <div className="flex items-start">
//                       <Award className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
//                       <p>
//                         To maintain the highest standards of compliance with international regulations and ethical
//                         business practices in all our operations.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 h-full relative overflow-hidden">
//                 <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-white/5"></div>
//                 <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-white/5"></div>

//                 <div className="relative z-10">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-white/20 p-4 rounded-full mr-4">
//                       <Eye className="h-8 w-8" />
//                     </div>
//                     <h3 className="text-2xl font-bold">Our Vision</h3>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="flex items-start">
//                       <Globe className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
//                       <p>
//                         To be the global leader in defense and security solutions, recognized for our innovation,
//                         reliability, and commitment to excellence.
//                       </p>
//                     </div>

//                     <div className="flex items-start">
//                       <Shield className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
//                       <p>
//                         We envision a world where security forces are equipped with the most advanced tools and
//                         technologies, enabling them to effectively address evolving threats and challenges.
//                       </p>
//                     </div>

//                     <div className="flex items-start">
//                       <Award className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
//                       <p>
//                         To foster a culture of continuous innovation and improvement, staying at the forefront of
//                         defense technology to meet the evolving needs of our global clients.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-20">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-12 text-center"
//           >
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Location</h2>
//             <p className="mx-auto max-w-2xl text-muted-foreground">
//               Visit our headquarters or get in touch with our team
//             </p>
//           </motion.div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="h-[400px] overflow-hidden rounded-lg shadow-lg"
//             >
//               {/* This would be replaced with an actual map component in production */}
//               <div className="h-full w-full bg-muted">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373064617!2d-73.9746!3d40.7679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzA0LjQiTiA3M8KwNTgnMjguNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col justify-center"
//             >
//               <h3 className="mb-4 text-2xl font-bold">Argo Navis Global Headquarters</h3>
//               <div className="space-y-4 text-muted-foreground">
//                 <p>
//                   <strong>Address:</strong>
//                   <br />
//                   123 Defense Avenue
//                   <br />
//                   Suite 500
//                   <br />
//                   New York, NY 10001
//                   <br />
//                   United States
//                 </p>
//                 <p>
//                   <strong>Phone:</strong>
//                   <br />
//                   +1 (555) 123-4567
//                 </p>
//                 <p>
//                   <strong>Email:</strong>
//                   <br />
//                   info@argonavisglobal.com
//                 </p>
//                 <p>
//                   <strong>Hours:</strong>
//                   <br />
//                   Monday - Friday: 9:00 AM - 5:00 PM EST
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Ready to Collaborate Section */}
//       <section className="bg-navy-gradient py-20 text-white">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Collaborate?</h2>
//             <p className="mb-8 text-lg opacity-90">
//               Whether you're looking for specific defense equipment or need a comprehensive security solution, our team
//               of experts is ready to assist you. Let's discuss how Argo Navis Global can meet your requirements.
//             </p>
//             <Button asChild size="lg" variant="secondary">
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Clock, Users } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import ScaleIn from "@/components/animations/scale-in";
import SlideIn from "@/components/animations/slide-in";
import RevealText from "@/components/animations/reveal-text";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-white text-gray-800 m-1 p-1">
      {/* Hero Section */}

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                About Argo Navis Global
              </h1>
              <p className="mb-4 text-lg text-muted-foreground">
                Argo Navis Global, we redefine defense excellence. With a
                commanding presence across international arms corridors, we
                specialize in the procurement, integration, and secure delivery
                of advanced defense systems, tactical-grade munitions, and
                military-grade technology.
              </p>
              <br />
              <p className="mb-4 text-lg text-muted-foreground">
                Our operations are engineered for precision and
                discretion—serving armed forces, homeland security, paramilitary
                divisions, and elite private security entities worldwide. From
                cross-border arms compliance to turnkey logistics and in-field
                product customization, Argo Navis Global ensures that every
                solution is mission-ready and field-proven.
              </p>
              <br />
              <p className="text-lg text-muted-foreground">
                At Argo Navis Global, we combine technical expertise with a deep
                understanding of operational requirements to deliver solutions
                that enhance the capabilities and safety of those who protect
                and serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] overflow-hidden rounded-lg"
            >
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Argo Navis Global Headquarters"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-brand-500 mb-4" />
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">24/7</h2>
              <p className="text-gray-600">Partner support</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-brand-500 mb-4" />
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">40+</h2>
              <p className="text-gray-600">Countries contacts</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-brand-500 mb-4" />
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">98%</h2>
              <p className="text-gray-600">Trust from our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn direction="up" duration={0.8}>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Company Overview
                </h2>
                <p className="text-gray-700 mb-4 text-sm">
                  At Argo Navis Global, we redefine defense excellence. With a
                  commanding presence across international arms corridors, we
                  specialize in the procurement, integration, and secure
                  delivery of advanced defense systems, tactical-grade
                  munitions, and military-grade technology.
                </p>
                <p className="text-gray-700 mb-4 text-sm">
                  Our operations are engineered for precision and
                  discretion—serving armed forces, homeland security,
                  paramilitary divisions, and elite private security entities
                  worldwide. From cross-border arms compliance to turnkey
                  logistics and in-field product customization, Argo Navis
                  Global ensures that every solution is mission-ready and
                  field-proven.
                </p>
                <p className="text-gray-700 mb-6 text-sm">
                  What sets us apart is our commitment to integrity-driven
                  operations, multi-layered export compliance, and geopolitical
                  intelligence that shapes every transaction. Backed by years of
                  hands-on experience and a team of strategic experts, we don't
                  just deliver defense equipment—we deliver readiness, trust,
                  and operational dominance
                </p>
                <p className="text-gray-700 mb-6 text-sm">
                  Whether you're securing a nation's frontlines or fortifying
                  private defense, Argo Navis Global is your reliable ally in
                  today's rapidly evolving threat landscape.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-400 hover:bg-brand-600 text-black">
                    Contact Us
                  </Button>
                </Link>
              </FadeIn>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <ScaleIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Expertise
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-brand-500 mr-3 mt-1" />
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-1">
                        Logistic & Shipping
                      </h4>
                      <p className="text-gray-600">
                        Secure, compliant, and timely delivery of defense assets
                        across borders.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-brand-500 mr-3 mt-1" />
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-1">
                        Cross-Country & Operations
                      </h4>
                      <p className="text-gray-600">
                        Expert handling of international defense trade and
                        regulatory protocols.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-brand-500 mr-3 mt-1" />
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-1">
                        Manufacturing & Trading
                      </h4>
                      <p className="text-gray-600">
                        Global network for sourcing and supplying advanced
                        military equipment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-brand-500 mr-3 mt-1" />
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-1">
                        Value-Added Services
                      </h4>
                      <p className="text-gray-600">
                        Custom solutions, tech support, and seamless post-sale
                        assistance.
                      </p>
                    </div>
                  </li>
                </ul>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - with animations */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white p-8 rounded-lg border border-gray-200 shadow-sm group">
              {/* Animated background elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-100 rounded-full opacity-50 animate-pulse"></div>
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-100 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Content with animations */}
              <div className="relative z-10">
                <RevealText
                  text="Our Mission"
                  className="text-2xl font-bold text-gray-800 mb-6"
                  delay={0.2}
                />

                <div className="space-y-4">
                  <SlideIn
                    direction="right"
                    delay={0.4}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border-l-4 border-brand-500"
                  >
                    <p className="text-gray-700">
                      At Argo Navis Global, our mission is to strengthen global
                      defense capabilities by delivering cutting-edge, reliable,
                      and compliant military solutions. We are dedicated to
                      driving operational excellence through
                      precision-engineered products, streamlined logistics, and
                      end-to-end service.
                    </p>
                  </SlideIn>

                  {/* <SlideIn
                    direction="right"
                    delay={0.6}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border-l-4 border-brand-500"
                  >
                    <p className="text-gray-700">
                      Anchored in integrity, innovation, and responsiveness, we
                      aim to be the trusted strategic partner for governments,
                      law enforcement agencies, and defense contractors
                      worldwide.
                    </p>
                  </SlideIn> */}
                </div>

                {/* Animated icon */}
                <div className="absolute bottom-4 right-4 text-brand-500 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Shield className="h-24 w-24 animate-float" />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-gray-200 shadow-sm group">
              {/* Animated background elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Content with animations */}
              <div className="relative z-10">
                <RevealText
                  text="Our Vision"
                  className="text-2xl font-bold text-gray-800 mb-6"
                  delay={0.3}
                />

                <div className="space-y-4">
                  <SlideIn
                    direction="left"
                    delay={0.5}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-500"
                  >
                    <p className="text-gray-700">
                      Our vision is to emerge as a world-class leader in defense
                      equipment supply and cross-border defense trade—renowned
                      for our technical expertise, global partnerships, and
                      robust supply chain network.
                    </p>
                  </SlideIn>

                  {/* <SlideIn
                    direction="left"
                    delay={0.7}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-500"
                  >
                    <p className="text-gray-700">
                      We aspire to empower nations with advanced military
                      capabilities, enabling them to protect their sovereignty,
                      secure strategic assets, and maintain regional stability.
                      Through innovation and reliability, we seek to shape the
                      future of modern defense commerce.
                    </p>
                  </SlideIn> */}
                </div>

                {/* Animated icon */}
                <div className="absolute bottom-4 right-4 text-blue-500 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Globe
                    className="h-24 w-24 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up" duration={0.8}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Connect with our defense specialists to explore mission-specific
              solutions tailored to your operational needs. At Argo Navis
              Global, we're here to support your objectives with precision,
              discretion, and unwavering expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-brand-500 text-brand-600 hover:bg-brand-500/10 font-bold px-8 py-3"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/brochure">
                <Button
                  variant="outline"
                  className="border-brand-500 text-brand-600 hover:bg-brand-500/10 font-bold px-8 py-3"
                >
                  Download Brochure
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
