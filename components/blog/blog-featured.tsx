import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import type { BlogPost } from "@/types/blog"

interface BlogFeaturedProps {
  posts: BlogPost[]
}

export default function BlogFeatured({ posts }: BlogFeaturedProps) {
  // If no posts, return nothing
  if (!posts.length) return null

  // Get the main featured post (first one)
  const mainPost = posts[0]

  // Get secondary featured posts (remaining ones)
  const secondaryPosts = posts.slice(1)

  return (
    <div>
      <FadeIn direction="up" duration={0.8}>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Articles</h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Post */}
        <FadeIn direction="up" className="lg:col-span-2">
          <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="relative h-80">
              <Image
                src={mainPost.image || "/placeholder.svg"}
                alt={mainPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {mainPost.categories.map((category, index) => (
                    <Badge key={index} className="bg-yellow-500 text-black font-medium">
                      {category}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {mainPost.title}
                </h3>

                <div className="flex items-center text-sm text-gray-300">
                  <Calendar className="h-4 w-4 mr-1" />
                  {mainPost.date}
                  <span className="mx-2">•</span>
                  {mainPost.readTime} min read
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-4">{mainPost.excerpt}</p>
              <Link href={`/blog/${mainPost.slug}`}>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Secondary Featured Posts */}
        <div className="lg:col-span-1">
          <StaggerChildren staggerDelay={0.1} initialDelay={0.2} className="space-y-6">
            {secondaryPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row lg:flex-col">
                  <div className="relative h-48 sm:w-1/3 lg:w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                    <div className="absolute top-2 left-2">
                      <Badge className="bg-yellow-500 text-black font-medium">{post.categories[0]}</Badge>
                    </div>
                  </div>

                  <div className="p-4 sm:w-2/3 lg:w-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      {post.readTime} min read
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-yellow-600 text-sm font-medium hover:text-yellow-700 inline-flex items-center mt-2"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </div>
  )
}
