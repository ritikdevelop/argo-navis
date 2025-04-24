import type { Metadata } from "next"
import BlogHeader from "@/components/blog/blog-header"
import BlogFeatured from "@/components/blog/blog-featured"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import BlogSearch from "@/components/blog/blog-search"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Blog | Argonavis - Defense & Security Insights",
  description: "Stay informed with the latest news, trends, and insights in the defense and security industry.",
}

export default function BlogPage() {
  // Get featured posts (first 3 posts)
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)

  // Get remaining posts for the grid
  const remainingPosts = blogPosts.filter((post) => !featuredPosts.includes(post))

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <BlogHeader />

      {/* Featured Posts Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <BlogFeatured posts={featuredPosts} />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Blog Posts Grid */}
            <div className="lg:col-span-2">
              <BlogGrid posts={remainingPosts} />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <BlogSearch />
              <BlogCategories />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
