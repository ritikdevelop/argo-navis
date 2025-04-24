import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog-posts"
import BlogRelatedPosts from "@/components/blog/blog-related-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Argonavis Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Argonavis Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Return to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((cat) => post.categories.includes(cat)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        {/* Featured Image */}
        <div className="absolute inset-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-12">
          <Link href="/blog" className="text-yellow-400 hover:text-yellow-300 flex items-center mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-yellow-500/20 text-yellow-500 text-xs px-3 py-1 rounded-full hover:bg-yellow-500/30 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-gray max-w-none">
              {/* This would be the actual blog content - using placeholder for now */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>

              <h2 className="text-gray-800">Introduction to {post.title}</h2>
              <p className="text-gray-700">
                The defense industry continues to evolve rapidly with technological advancements and changing global
                security landscapes. This article explores the latest developments in {post.categories[0]} and their
                implications for military operations and security protocols.
              </p>

              <p className="text-gray-700">
                With increasing global tensions and the emergence of new threats, defense organizations worldwide are
                investing in cutting-edge technologies to maintain strategic advantages. These investments span across
                various domains including cybersecurity, autonomous systems, advanced weaponry, and intelligence
                gathering capabilities.
              </p>

              <h2 className="text-gray-800">Key Developments</h2>
              <p className="text-gray-700">
                Recent advancements in {post.categories[0]} have significantly transformed how military operations are
                conducted. The integration of artificial intelligence, machine learning, and data analytics has enhanced
                decision-making processes and operational efficiency.
              </p>

              <p className="text-gray-700">
                Furthermore, the miniaturization of technology has enabled the development of more compact and efficient
                defense systems, allowing for greater mobility and deployment flexibility in various operational
                environments.
              </p>

              <h2 className="text-gray-800">Strategic Implications</h2>
              <p className="text-gray-700">
                The strategic implications of these developments are profound. Nations that effectively leverage these
                technologies gain significant advantages in both conventional and asymmetric warfare scenarios. This has
                led to a new arms race focused not just on traditional military hardware but increasingly on
                technological capabilities and digital infrastructure.
              </p>

              <p className="text-gray-700">
                Defense organizations must therefore adapt their strategies to incorporate these new technologies while
                also addressing the ethical and legal considerations they present. This includes developing robust
                frameworks for the responsible use of autonomous systems and ensuring compliance with international laws
                and conventions.
              </p>

              <h2 className="text-gray-800">Conclusion</h2>
              <p className="text-gray-700">
                As the defense landscape continues to evolve, staying informed about the latest developments and their
                implications is crucial for security professionals, policymakers, and organizations operating in this
                space. The ability to adapt to these changes and effectively integrate new technologies will be a key
                determinant of success in addressing future security challenges.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-gray-800 font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8">
              <h3 className="text-gray-800 font-semibold mb-2">Share this article:</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-gray-300 text-gray-600 hover:text-blue-500 hover:border-blue-500"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-gray-300 text-gray-600 hover:text-blue-400 hover:border-blue-400"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>

            {/* Author Bio */}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                <BlogRelatedPosts posts={relatedPosts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
