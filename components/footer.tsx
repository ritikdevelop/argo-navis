import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="Logo" width={150} height={80} className="h-10" />
            </div>
            <p className="text-gray-600 mb-4">
              Argo Navis Global operates at the forefront of global defense markets, delivering precision-engineered
              military equipment, strategic procurement solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-brand-500 mr-2" />
                <span className="text-gray-700">Uttar Pradesh, Noida</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-2" />
                <span className="text-gray-700">+91-9318381008</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-2" />
                <span className="text-gray-700">info@argonavis-global.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-brand-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-brand-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="text-gray-600 hover:text-brand-500 transition-colors">
                  Download Brochure
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=armaments"
                  className="text-gray-600 hover:text-brand-500 transition-colors"
                >
                  Armaments
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=ammunitions"
                  className="text-gray-600 hover:text-brand-500 transition-colors"
                >
                  Ammunitions
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sight-night-vision"
                  className="text-gray-600 hover:text-brand-500 transition-colors"
                >
                  Sight & Night Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=armored-vehicles"
                  className="text-gray-600 hover:text-brand-500 transition-colors"
                >
                  Armored Vehicles
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-brand-500 hover:text-brand-600 transition-colors">
                  View All Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Connect With US</h3>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Argo Navis Gloabl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
