import FadeIn from "@/components/animations/fade-in"

export default function BlogHeader() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" duration={0.8}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-4">
            Defense & Security <span className="text-yellow-500">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Stay informed with the latest news, trends, and analysis in the defense and security industry
          </p>
        </FadeIn>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow-500/5 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-500/5 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}
