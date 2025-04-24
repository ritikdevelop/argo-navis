"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import type { BlogPost } from "@/types/blog"

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      <FadeIn direction="up" duration={0.8}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
          <div className="text-sm text-gray-600">
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, posts.length)} of {posts.length} articles
          </div>
        </div>
      </FadeIn>

      <StaggerChildren staggerDelay={0.1} initialDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-yellow-500 transition-all duration-300 flex flex-col shadow-sm hover:shadow-md"
          >
            <div className="relative h-48">
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

            <div className="p-5 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
                <span className="mx-2">•</span>
                {post.readTime} min read
              </div>

              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            </div>

            <div className="px-5 pb-5 mt-auto">
              <Link href={`/blog/${post.slug}`}>
                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500/10 w-full">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </StaggerChildren>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 text-gray-600 hover:text-gray-800"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                className={
                  currentPage === index + 1
                    ? "bg-yellow-500 text-black hover:bg-yellow-600"
                    : "border-gray-300 text-gray-600 hover:text-gray-800"
                }
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 text-gray-600 hover:text-gray-800"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
