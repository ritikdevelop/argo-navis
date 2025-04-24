"use client"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Mail, Phone } from "lucide-react"

// Sample brochure data for demonstration
const brochures = {
  company: [
    {
      id: "company-profile",
      title: "Argo Navis Global - Company Profile",
      description: "A comprehensive overview of Argo Navis Global, our history, capabilities, and global presence.",
      fileSize: "5.2 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "product-catalog",
      title: "Complete Product Catalog 2023",
      description: "Our full product catalog featuring all categories and detailed specifications.",
      fileSize: "12.8 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "services-overview",
      title: "Services & Solutions Overview",
      description: "Detailed information about our comprehensive range of services and solutions.",
      fileSize: "4.7 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  categories: [
    {
      id: "armaments-brochure",
      title: "Armaments Catalog",
      category: "Armaments",
      description: "Detailed specifications and information about our small, medium, and heavy caliber armaments.",
      fileSize: "8.5 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "ammunition-brochure",
      title: "Ammunition Solutions",
      category: "Ammunitions",
      description: "Complete range of ammunition products for various applications and calibers.",
      fileSize: "7.2 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "bulletproof-brochure",
      title: "Bulletproof & Protective Gear",
      category: "Bulletproof & Anti-Cut Products",
      description: "Advanced personal protection solutions including vests, plates, and anti-cut products.",
      fileSize: "6.8 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "parachutes-brochure",
      title: "Parachutes & Boats Catalog",
      category: "Parachutes & Boats",
      description: "Tactical and cargo parachutes, brake systems, and specialized boat solutions.",
      fileSize: "5.4 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "anti-riot-brochure",
      title: "Anti-Riot & Crowd Control Solutions",
      category: "Anti Riot & Crowd Control",
      description: "Non-lethal crowd control equipment and anti-riot gear for law enforcement.",
      fileSize: "9.1 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "vehicles-brochure",
      title: "Armored Vehicles Portfolio",
      category: "Armored Vehicles",
      description: "MRAP, APC, and troop carrier specifications and capabilities.",
      fileSize: "10.3 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
  products: [
    {
      id: "tactical-parachute-spec",
      title: "Tactical Assault Parachute - Technical Specifications",
      category: "Parachutes & Boats",
      description: "Detailed technical specifications and operational guidelines for our Tactical Assault Parachute.",
      fileSize: "3.2 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "bulletproof-vest-spec",
      title: "Advanced Bulletproof Vest - Technical Specifications",
      category: "Bulletproof & Anti-Cut Products",
      description: "Comprehensive specifications and testing data for our Advanced Bulletproof Vest.",
      fileSize: "2.8 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "night-vision-spec",
      title: "Night Vision Monocular - Technical Specifications",
      category: "Sight & Night Vision",
      description: "Detailed specifications and operational parameters for our Night Vision Monocular.",
      fileSize: "2.5 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "tear-smoke-spec",
      title: "Tear Smoke Grenade - Technical Specifications",
      category: "Anti Riot & Crowd Control",
      description: "Technical data and deployment guidelines for our Tear Smoke Grenade.",
      fileSize: "1.9 MB",
      image: "/placeholder.svg?height=400&width=300",
    },
  ],
}

export default function BrochurePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent, brochureId: string) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission and download
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // In a real application, this would trigger the actual download
      alert(`Brochure ${brochureId} download initiated. Thank you for your interest!`)

      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
      })
    }, 1500)
  }

  // Filter brochures based on search term
  const filteredCompanyBrochures = brochures.company.filter(
    (brochure) =>
      brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brochure.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredCategoryBrochures = brochures.categories.filter(
    (brochure) =>
      brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brochure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brochure.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredProductBrochures = brochures.products.filter(
    (brochure) =>
      brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brochure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brochure.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      {/* Brochure Header */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Product Brochures</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Download detailed brochures and technical specifications for our products and services.
            </p>
            <div className="relative mx-auto max-w-md">
              <Input
                type="search"
                placeholder="Search brochures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brochures Listing */}
      <section className="py-12 md:py-20">
        <div className="container">
          <Tabs defaultValue="company">
            <TabsList className="mb-8">
              <TabsTrigger value="company">Company Profile</TabsTrigger>
              <TabsTrigger value="categories">Product Categories</TabsTrigger>
              <TabsTrigger value="products">Specific Products</TabsTrigger>
            </TabsList>

            <TabsContent value="company" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCompanyBrochures.map((brochure) => (
                  <motion.div
                    key={brochure.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full overflow-hidden">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={brochure.image || "/placeholder.svg"}
                          alt={brochure.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{brochure.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2 text-muted-foreground">{brochure.description}</p>
                        <p className="text-sm text-muted-foreground">File size: {brochure.fileSize}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link
                            href={`#download-form-${brochure.id}`}
                            onClick={() =>
                              document
                                .getElementById(`download-form-${brochure.id}`)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            <Download className="mr-2 h-4 w-4" /> Download Brochure
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredCompanyBrochures.length === 0 && (
                <div className="my-20 text-center">
                  <p className="text-lg text-muted-foreground">No brochures found matching your search criteria.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="categories" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCategoryBrochures.map((brochure) => (
                  <motion.div
                    key={brochure.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full overflow-hidden">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={brochure.image || "/placeholder.svg"}
                          alt={brochure.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="mb-2">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {brochure.category}
                          </span>
                        </div>
                        <CardTitle>{brochure.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2 text-muted-foreground">{brochure.description}</p>
                        <p className="text-sm text-muted-foreground">File size: {brochure.fileSize}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link
                            href={`#download-form-${brochure.id}`}
                            onClick={() =>
                              document
                                .getElementById(`download-form-${brochure.id}`)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            <Download className="mr-2 h-4 w-4" /> Download Brochure
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredCategoryBrochures.length === 0 && (
                <div className="my-20 text-center">
                  <p className="text-lg text-muted-foreground">
                    No category brochures found matching your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="products" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProductBrochures.map((brochure) => (
                  <motion.div
                    key={brochure.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full overflow-hidden">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={brochure.image || "/placeholder.svg"}
                          alt={brochure.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="mb-2">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {brochure.category}
                          </span>
                        </div>
                        <CardTitle>{brochure.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2 text-muted-foreground">{brochure.description}</p>
                        <p className="text-sm text-muted-foreground">File size: {brochure.fileSize}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link
                            href={`#download-form-${brochure.id}`}
                            onClick={() =>
                              document
                                .getElementById(`download-form-${brochure.id}`)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            <Download className="mr-2 h-4 w-4" /> Download Brochure
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredProductBrochures.length === 0 && (
                <div className="my-20 text-center">
                  <p className="text-lg text-muted-foreground">
                    No product brochures found matching your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Download Form */}
      <section id="download-form" className="bg-muted py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl rounded-lg bg-card p-8 shadow-sm"
          >
            <div className="mb-6 text-center">
              <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-2 text-2xl font-bold">Download Brochures</h2>
              <p className="text-muted-foreground">
                Please fill out the form below to download our brochures. Your information helps us better understand
                our clients' needs.
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20">
                <h3 className="mb-2 text-xl font-semibold text-green-800 dark:text-green-300">Thank You!</h3>
                <p className="mb-4 text-green-700 dark:text-green-400">
                  Your download should begin automatically. If it doesn't, please click the download button again.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Download Another Brochure
                </Button>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, "selected-brochure")} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your Company"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Download Selected Brochure"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Need More Information?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              If you can't find the brochure you're looking for or need additional information, our team is here to
              help.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="tel:+15551234567">
                  <Phone className="mr-2 h-4 w-4" /> Call Sales: +1 (555) 123-4567
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
