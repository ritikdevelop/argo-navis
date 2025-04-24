"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Award, ChevronRight } from "lucide-react";
import WhyChooseUsRedesigned from "@/components/why-choose-us";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="m-1 p-1 bg-gradient-to-b from-transparent to-gray-100 text-gray-800">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full items-center">
          <div className="max-w-2xl m-2 text-white">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-5xl font-semibold tracking-tight md:text-5xl"
            >
              Providing You With Advance
              <br />
              Defense Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-md md:text-md"
            >
              Argo Navis Global provides cutting-edge defense equipment and
              security solutions for military and law enforcement agencies
              worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="mr-4">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsRedesigned />

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our most advanced and sought-after defense solutions
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/gun.png"
                  alt="Tactical Assault Parachute"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold">
                  Tactical Assault Parachute
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Our state-of-the-art Tactical Assault Parachute is designed
                  for military operations requiring precision and reliability.
                  With advanced materials and cutting-edge design, it offers
                  superior control, stealth capabilities, and exceptional
                  durability in the most demanding conditions.
                </p>
                <Button asChild>
                  <Link href="/products/parachutes-boats/tactical-assault-parachute">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className="order-1 md:order-2 relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/gun.png"
                  alt="Tactical Assault Parachute"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="order-2 md:order-1">
                <h3 className="mb-3 text-2xl font-bold">
                  Advanced Bulletproof Vest
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Our Advanced Bulletproof Vest combines superior protection
                  with ergonomic design for maximum comfort during extended
                  operations. Featuring multi-layer ballistic protection,
                  quick-release system, and modular attachment points, it's the
                  preferred choice for elite military and law enforcement units
                  worldwide.
                </p>
                <Button asChild>
                  <Link href="/products/bulletproof-anti-cut/advanced-bulletproof-vest">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">In Action</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our equipment in use by defense forces around the world
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src="/first.webp"
                alt="Tactical Assault Parachute"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src="/two.webp"
                alt="Tactical operation"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src="three.webp"
                alt="Defense equipment demonstration"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src="/four.webp"
                alt="Military training exercise"
                fill
               className="object-cover transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Product Categories
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our comprehensive range of defense and security solutions
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Armaments"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-bold">Armaments</h3>
                  <p className="mb-3 text-sm">
                    Small Caliber, Medium Caliber, Heavy Artillery Guns, Weapon
                    Systems
                  </p>
                  <Link
                    href="/products/armaments"
                    className="inline-flex items-center text-sm font-medium text-white hover:underline"
                  >
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Bulletproof & Anti-Cut Products"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-bold">
                    Bulletproof Products
                  </h3>
                  <p className="mb-3 text-sm">
                    Vests, Plates, Anti-cut Products, Full Protection Systems
                  </p>
                  <Link
                    href="/products/bulletproof-anti-cut"
                    className="inline-flex items-center text-sm font-medium text-white hover:underline"
                  >
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Parachutes & Boats"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-bold">Parachutes & Boats</h3>
                  <p className="mb-3 text-sm">
                    Man Drop, Cargo Drop, Tactical Assault Parachutes
                  </p>
                  <Link
                    href="/products/parachutes-boats"
                    className="inline-flex items-center text-sm font-medium text-white hover:underline"
                  >
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Anti Riot & Crowd Control"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-bold">Anti Riot Products</h3>
                  <p className="mb-3 text-sm">
                    Tear Smoke Shells, Stun Grenades, Anti Riot Suits,
                    Non-Lethal Solutions
                  </p>
                  <Link
                    href="/products/anti-riot-crowd-control"
                    className="inline-flex items-center text-sm font-medium text-white hover:underline"
                  >
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/products">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive solutions to meet your defense and security needs
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Procurement Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    End-to-end procurement services for defense and security
                    equipment, ensuring compliance with international
                    regulations and standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Technical Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Expert advice on equipment selection, deployment strategies,
                    and integration with existing systems to maximize
                    operational effectiveness.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Training Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive training on equipment operation, maintenance,
                    and tactical deployment for military and law enforcement
                    personnel.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
