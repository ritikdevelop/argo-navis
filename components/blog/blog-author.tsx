import Image from "next/image"
import { Twitter, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample author data
const authors = {
  "John Smith": {
    name: "John Smith",
    role: "Defense Analyst",
    image: "/placeholder.svg?height=200&width=200&text=JS",
    bio: "John Smith is a senior defense analyst with over 15 years of experience in the military and defense industry. He specializes in military technology, strategic defense planning, and international security affairs.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  "Sarah Johnson": {
    name: "Sarah Johnson",
    role: "Security Specialist",
    image: "/placeholder.svg?height=200&width=200&text=SJ",
    bio: "Sarah Johnson is a security specialist with expertise in cybersecurity, threat intelligence, and defense technology. She has worked with major defense contractors and government agencies on security implementation projects.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: null,
  },
  "Michael Chen": {
    name: "Michael Chen",
    role: "Military Technology Expert",
    image: "/placeholder.svg?height=200&width=200&text=MC",
    bio: "Michael Chen is a military technology expert focusing on emerging defense technologies and their strategic implications. He has published numerous articles on defense innovation and next-generation warfare systems.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  "Elena Petrova": {
    name: "Elena Petrova",
    role: "International Security Consultant",
    image: "/placeholder.svg?height=200&width=200&text=EP",
    bio: "Elena Petrova is an international security consultant specializing in border security, counter-terrorism strategies, and defense policy analysis. She advises governments and organizations on security challenges and solutions.",
    twitter: null,
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
}

interface BlogAuthorProps {
  author: string
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  // Get author data or use default if not found
  const authorData = authors[author] || {
    name: author,
    role: "Defense Industry Expert",
    image: "/placeholder.svg?height=200&width=200&text=Author",
    bio: "An expert in the defense and security industry with extensive knowledge and experience in the field.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: null,
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative h-24 w-24 rounded-full overflow-hidden">
          <Image src={authorData.image || "/placeholder.svg"} alt={authorData.name} fill className="object-cover" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">{authorData.name}</h3>
          <p className="text-yellow-600 mb-3">{authorData.role}</p>
          <p className="text-gray-600 text-sm mb-4">{authorData.bio}</p>

          <div className="flex gap-2">
            {authorData.twitter && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 border-gray-300 text-gray-600 hover:text-blue-400 hover:border-blue-400"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            )}

            {authorData.linkedin && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            )}

            {authorData.website && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 border-gray-300 text-gray-600 hover:text-yellow-600 hover:border-yellow-600"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
