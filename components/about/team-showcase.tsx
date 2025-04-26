"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

// Team members data
const teamMembers = [
  {
    name: "Alexander Petrov",
    role: "Chief Executive Officer",
    image: "/placeholder.svg?height=400&width=400&text=AP",
    bio: "With over 20 years of experience in the defense industry, Alexander leads our company with strategic vision and industry expertise.",
    linkedin: "#",
    email: "alexander@argonavis.com",
  },
  {
    name: "Maria Ivanova",
    role: "Chief Operating Officer",
    image: "/placeholder.svg?height=400&width=400&text=MI",
    bio: "Maria oversees all operational aspects of our business, ensuring efficiency, compliance, and customer satisfaction.",
    linkedin: "#",
    email: "maria@argonavis.com",
  },
  {
    name: "Stefan Dimitrov",
    role: "Director of International Sales",
    image: "/placeholder.svg?height=400&width=400&text=SD",
    bio: "Stefan manages our global sales operations, building strong relationships with clients across Europe, Asia, and Africa.",
    linkedin: "#",
    email: "stefan@argonavis.com",
  },
  {
    name: "Elena Kovacheva",
    role: "Head of Logistics",
    image: "/placeholder.svg?height=400&width=400&text=EK",
    bio: "Elena ensures smooth and timely delivery of all products, managing our complex global supply chain operations.",
    linkedin: "#",
    email: "elena@argonavis.com",
  },
]

export default function TeamShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-brand-500">Leadership</span> Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind our success, bringing decades of combined experience in the defense and security
            industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
            >
              {/* Image container with overlay */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social links that appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-brand-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-brand-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
