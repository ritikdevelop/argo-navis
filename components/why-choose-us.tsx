"use client"

import { Shield, CheckCircle, Clock, Globe, Users, BarChart4, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import ScaleIn from "@/components/animations/scale-in"
import SlideIn from "@/components/animations/slide-in"
import StaggerChildren from "@/components/animations/stagger-children"
import AnimatedCounter from "@/components/animations/animated-counter"
import Link from "next/link"

// Benefits data
const benefits = [
  {
    icon: <Shield className="h-14 w-14 text-yellow-500" />,
    title: "Quality Assurance",
    description: "All our products meet the highest international standards and certifications",
    stat: "100",
    statSuffix: "%",
    statDescription: "Quality Certified",
  },
  {
    icon: <Globe className="h-14 w-14 text-yellow-500" />,
    title: "Global Reach",
    description: "Operating in all major markets with reliable supply chains worldwide",
    stat: "40",
    statSuffix: "+",
    statDescription: "Countries Served",
  },
  {
    icon: <Clock className="h-14 w-14 text-yellow-500" />,
    title: "Fast Delivery",
    description: "Swift logistics and delivery systems to meet urgent operational needs",
    stat: "24",
    statSuffix: "/7",
    statDescription: "Support Available",
  },
]

const additionalBenefits = [
  {
    icon: <CheckCircle className="h-10 w-10 text-yellow-500" />,
    title: "Compliance",
    description: "Strict adherence to international regulations and export controls",
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-yellow-500" />,
    title: "Proven Track Record",
    description: "Years of experience successfully fulfilling defense contracts",
  },
  {
    icon: <Users className="h-10 w-10 text-yellow-500" />,
    title: "Expert Team",
    description: "Team of specialists with deep industry knowledge and expertise",
  },
]

export default function WhyChooseUsRedesigned() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100 to-white"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-500/5 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-500/5 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-brand-500/5 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-500/20 to-transparent transform -rotate-45"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-500/20 to-transparent transform rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <FadeIn direction="up" duration={0.8}>
            <h2 className="inline-block text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative">
              Why Choose <span className="text-brand-500">Argo Navis Global</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
            </h2>
          </FadeIn>
          <SlideIn direction="up" delay={0.3} duration={0.8}>
            <p className="text-gray-600 text-md max-w-2xl mx-auto">
              Saving Those Who Save Us,
              <br />
              In a world where every mission matters, security is more than a need-it's a solemn vow. At Argo Navis
              Global, we empower those who defend our freedoms.
            </p>
          </SlideIn>
        </div>

        {/* Main benefits with stats - HORIZONTAL LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 overflow-x-auto pb-4 hide-scrollbar">
          <StaggerChildren staggerDelay={0.2} initialDelay={0.4} className="flex flex-col lg:flex-row gap-6 w-full">
            {benefits.map((benefit, index) => (
              <ScaleIn
                key={index}
                delay={0.1 * index}
                className="relative bg-gradient-to-br from-white to-gray-50 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl p-8 border border-gray-200 hover:border-brand-500 transition-all duration-500 group flex-1 min-w-[280px] lg:min-w-0"
              >
                {/* Glowing corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500/10 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-500/20 transition-all duration-500"></div>

                <div className="flex flex-col h-full">
                  <div className="mb-6 animate-float text-brand-500">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-500 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow">{benefit.description}</p>

                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex items-baseline">
                      <AnimatedCounter
                        end={Number.parseInt(benefit.stat)}
                        className="text-4xl font-bold text-brand-500 mr-1"
                        suffix={benefit.statSuffix}
                        threshold={0.3}
                        duration={2.5}
                      />
                    </div>
                    <p className="text-sm text-gray-500">{benefit.statDescription}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </StaggerChildren>
        </div>

        {/* CTA Section */}
        <FadeIn direction="up" delay={0.6} className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to experience the Argo Navis Global difference?
          </h3>
          <Link href="/contact">
            <Button className="bg-blue-950 hover:bg-brand-600 text-white px-8 py-6 text-lg rounded-xl group">
              Contact Our Team
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </FadeIn>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
