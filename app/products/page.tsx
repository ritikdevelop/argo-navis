"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Search, Download, Phone } from "lucide-react"

// Product categories based on the provided list
const categories = [
  { id: "armaments", name: "Armaments" },
  { id: "ammunitions", name: "Ammunitions" },
  { id: "sight-night-vision", name: "Sight & Night Vision" },
  { id: "communication-systems", name: "Communication Systems" },
  { id: "armored-vehicles", name: "Armored Vehicles" },
  { id: "parachutes-boats", name: "Parachutes & Boats" },
  { id: "bulletproof-anti-cut", name: "Bulletproof & Anti-Cut Products" },
  { id: "anti-riot-crowd-control", name: "Anti Riot & Crowd Control" },
  { id: "cbrne-protective-gears", name: "CBRNe & Protective Gears" },
  { id: "wearables", name: "Wearables" },
  { id: "armament-storage", name: "Armament Storage Racks" },
  { id: "border-security", name: "Border Security" },
  { id: "space-ai-technology", name: "Space and AI Technology" },
  { id: "bots-drones", name: "Bots & Drones" },
  { id: "medical-supplies", name: "Ambulance and Medical Supplies" },
]

// Sample products for demonstration
const products = [
  {
    id: "tactical-assault-parachute",
    name: "Tactical Assault Parachute",
    category: "parachutes-boats",
    image: "/placeholder.svg?height=400&width=400",
    description: "Advanced tactical parachute designed for military operations requiring precision and stealth.",
  },
  {
    id: "bulletproof-vest",
    name: "Advanced Bulletproof Vest",
    category: "bulletproof-anti-cut",
    image: "/placeholder.svg?height=400&width=400",
    description: "High-performance bulletproof vest with multi-layer protection and quick-release system.",
  },
  {
    id: "night-vision-monocular",
    name: "Night Vision Monocular",
    category: "sight-night-vision",
    image: "/placeholder.svg?height=400&width=400",
    description: "Military-grade night vision monocular with extended range and enhanced clarity.",
  },
  {
    id: "tear-smoke-grenade",
    name: "Tear Smoke Grenade",
    category: "anti-riot-crowd-control",
    image: "/placeholder.svg?height=400&width=400",
    description: "Non-lethal tear smoke grenade for crowd control and riot management.",
  },
  {
    id: "tactical-communication-system",
    name: "Tactical Communication System",
    category: "communication-systems",
    image: "/placeholder.svg?height=400&width=400",
    description: "Secure and reliable communication system for tactical operations.",
  },
  {
    id: "surveillance-drone",
    name: "Surveillance Drone",
    category: "bots-drones",
    image: "/placeholder.svg?height=400&width=400",
    description: "Advanced surveillance drone with extended flight time and high-resolution imaging.",
  },
  {
    id: "medium-caliber-ammunition",
    name: "Medium Caliber Ammunition",
    category: "ammunitions",
    image: "/placeholder.svg?height=400&width=400",
    description: "High-performance medium caliber ammunition for military applications.",
  },
  {
    id: "armored-personnel-carrier",
    name: "Armored Personnel Carrier",
    category: "armored-vehicles",
    image: "/placeholder.svg?height=400&width=400",
    description: "Heavily armored vehicle designed for troop transport in hostile environments.",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter products based on search term and active category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "all" || product.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="m-1 p-1">
      {/* Products Header */}
      <section className="bg-navy-gradient py-12 md:py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg opacity-90"
            >
              Explore our comprehensive range of defense and security solutions designed for military, law enforcement,
              and security agencies worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mx-auto max-w-md"
            >
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Listing - Redesigned */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Product Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                All Categories
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="hover-scale"
              >
                <Card className="h-full overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/products/${product.category}/${product.id}`}>
                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="my-20 text-center">
              <p className="text-lg text-muted-foreground">No products found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Product */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Product</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Discover our most advanced defense solution</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] overflow-hidden rounded-lg"
            >
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Advanced Surveillance System"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h3 className="mb-3 text-2xl font-bold">Advanced Surveillance System</h3>
              <p className="mb-6 text-muted-foreground">
                Our state-of-the-art Advanced Surveillance System combines cutting-edge optical technology with
                AI-powered analytics to provide unparalleled situational awareness for border security, critical
                infrastructure protection, and military operations.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-primary" />
                  <span>Long-range detection and identification capabilities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-primary" />
                  <span>Multi-sensor integration (thermal, optical, radar)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-primary" />
                  <span>AI-powered threat detection and classification</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-primary" />
                  <span>Seamless integration with existing security infrastructure</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="/products/border-security/advanced-surveillance-system">View Details</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Need More Information Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-lg bg-navy-gradient p-8 text-center text-white md:p-12"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Need More Information?</h2>
            <p className="mb-8 text-lg opacity-90">
              Download our product brochures or contact our team for detailed specifications and customized solutions
              tailored to your requirements.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/brochure">
                  <Download className="mr-2 h-4 w-4" /> Download Brochures
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
