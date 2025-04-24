"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Phone, ChevronRight } from "lucide-react"

// Sample product data - in a real application, this would come from a database
const productData = {
  "tactical-assault-parachute": {
    name: "Tactical Assault Parachute",
    category: "parachutes-boats",
    categoryName: "Parachutes & Boats",
    description: "Advanced tactical parachute designed for military operations requiring precision and stealth.",
    features: [
      "Stealth design with minimal radar signature",
      "High maneuverability for precision landing",
      "Rapid deployment system",
      "Advanced materials for durability and reduced weight",
      "Compatible with night vision equipment",
    ],
    specifications: [
      { name: "Canopy Size", value: "320 sq ft" },
      { name: "Weight", value: "12.5 kg" },
      { name: "Maximum Load", value: "150 kg" },
      { name: "Deployment Altitude", value: "3,000 - 35,000 ft" },
      { name: "Glide Ratio", value: "4:1" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    model3d: "/assets/3d/duck.glb", // Using the sample 3D model
  },
  "bulletproof-vest": {
    name: "Advanced Bulletproof Vest",
    category: "bulletproof-anti-cut",
    categoryName: "Bulletproof & Anti-Cut Products",
    description: "High-performance bulletproof vest with multi-layer protection and quick-release system.",
    features: [
      "NIJ Level IV protection",
      "Quick-release system for emergency situations",
      "Modular attachment system for customization",
      "Ergonomic design for extended wear comfort",
      "Lightweight composite materials",
    ],
    specifications: [
      { name: "Protection Level", value: "NIJ Level IV" },
      { name: "Weight", value: "3.8 kg" },
      { name: "Coverage Area", value: "0.55 m²" },
      { name: "Material", value: "Ceramic + UHMWPE Composite" },
      { name: "Temperature Range", value: "-40°C to +70°C" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    model3d: "/assets/3d/duck.glb", // Using the sample 3D model
  },
}

// 3D Model component
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params; // Unwrap the Promise
      const productInfo = productData[resolvedParams.product as keyof typeof productData];

      if (productInfo) {
        setProduct(productInfo);
      }

      setLoading(false);
    }

    fetchParams();
  }, [params])

  if (loading) {
    return (
      <div className="container flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-lg">Loading product information...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container flex min-h-[70vh] items-center justify-center m-1 p-1">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            The product you are looking for does not exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Product Header */}
      <section className="bg-muted py-8">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href={`/products/${params.category}`} className="text-muted-foreground hover:text-foreground">
              {product.categoryName}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Tabs defaultValue="images">
                <TabsList className="mb-4">
                  <TabsTrigger value="images">Images</TabsTrigger>
                  <TabsTrigger value="3d">3D View</TabsTrigger>
                </TabsList>
                <TabsContent value="images" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={product.images[activeImage] || "/placeholder.svg"}
                      alt={product.name}
                      width={800}
                      height={800}
                      className="h-auto w-full object-cover"
                    />
                  </motion.div>
                  <div className="grid grid-cols-3 gap-4">
                    {product.images.map((image: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`cursor-pointer overflow-hidden rounded-md border-2 ${
                          activeImage === index ? "border-primary" : "border-transparent"
                        }`}
                        onClick={() => setActiveImage(index)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.name} - Image ${index + 1}`}
                          width={200}
                          height={200}
                          className="h-auto w-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="3d" className="mt-0">
                  <div className="h-[500px] overflow-hidden rounded-lg bg-black/5">
                    <Suspense
                      fallback={<div className="flex h-full items-center justify-center">Loading 3D Model...</div>}
                    >
                      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <Model url={product.model3d} />
                        <OrbitControls />
                        <Environment preset="studio" />
                      </Canvas>
                    </Suspense>
                  </div>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Click and drag to rotate. Scroll to zoom.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="mb-4 text-3xl font-bold md:text-4xl">{product.name}</h1>
                <p className="mb-6 text-lg text-muted-foreground">{product.description}</p>

                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-semibold">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <ChevronRight className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-semibold">Specifications</h2>
                  <div className="rounded-md border">
                    {product.specifications.map((spec: { name: string; value: string }, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex items-center justify-between p-3 ${
                          index !== product.specifications.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <span className="font-medium">{spec.name}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" /> Request Information
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/brochure">
                      <Download className="mr-2 h-4 w-4" /> Download Brochure
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-center">Related Products</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hover-scale"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Night Vision Monocular"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Night Vision Monocular</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Military-grade night vision monocular with extended range and enhanced clarity.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/products/sight-night-vision/night-vision-monocular">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hover-scale"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Tactical Communication System"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Tactical Communication System</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Secure and reliable communication system for tactical operations.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/products/communication-systems/tactical-communication-system">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hover-scale"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Tear Smoke Grenade"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Tear Smoke Grenade</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Non-lethal tear smoke grenade for crowd control and riot management.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/products/anti-riot-crowd-control/tear-smoke-grenade">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hover-scale"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Medium Caliber Ammunition"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Medium Caliber Ammunition</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    High-performance medium caliber ammunition for military applications.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/products/ammunitions/medium-caliber-ammunition">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
