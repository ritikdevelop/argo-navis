import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface BlogRelatedPostsProps {
  posts: BlogPost[]
}

export default function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`} className="group flex items-start gap-3 py-2">
          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div>
            <h4 className="text-gray-800 font-medium group-hover:text-yellow-600 transition-colors line-clamp-2">
              {post.title}
            </h4>

            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
