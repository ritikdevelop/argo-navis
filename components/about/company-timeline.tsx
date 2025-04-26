"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Flag, Award, Briefcase, GraduationCap, Rocket, Globe } from "lucide-react"

// Timeline data
const timelineEvents = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Argo Navis Global was established with a vision to transform the defense supply industry.",
    icon: <Flag className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2012",
    title: "International Expansion",
    description: "Expanded operations to 15+ countries, establishing a global presence in the defense market.",
    icon: <Globe className="h-6 w-6" />,
    color: "from-emerald-500 to-green-500",
  },
  {
    year: "2015",
    title: "NATO Certification",
    description: "Received official NATO supplier certification, marking a significant milestone in our growth.",
    icon: <Award className="h-6 w-6" />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    year: "2018",
    title: "Strategic Partnerships",
    description: "Formed strategic partnerships with leading defense manufacturers across Europe and Asia.",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-red-500 to-rose-500",
  },
  {
    year: "2020",
    title: "R&D Initiative",
    description:
      "Launched dedicated research and development division focused on next-generation defense technologies.",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-purple-500 to-violet-500",
  },
  {
    year: "2023",
    title: "Future Vision",
    description: "Embarked on a new strategic vision to lead innovation in global defense solutions.",
    icon: <Rocket className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-500",
  },
]

export default function CompanyTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-brand-500">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tracing our path from foundation to becoming a global leader in defense solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full"
          ></motion.div>

          {/* Timeline events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`mb-12 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white text-sm font-bold mb-2`}
                  >
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                {/* Center icon */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center z-10 shadow-lg`}
                  >
                    <div className={`text-brand-500`}>{event.icon}</div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
