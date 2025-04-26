"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg text-gray-800 border-t border-gray-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-500/5"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-500/5"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </div>
            <p className="text-gray-600 mb-4">
              Argo Navis Global operates at the forefront of global defense
              markets, delivering precision-engineered military equipment,
              strategic procurement solutions.
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-800 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/brochure"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Download Brochure
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-800 relative inline-block">
              Product Categories
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=armaments"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Armaments
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=ammunitions"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Ammunitions
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sight-night-vision"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Sight & Night Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=armored-vehicles"
                  className="text-gray-600 hover:text-brand-500 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Armored Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-brand-500 hover:text-brand-600 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  View All Categories
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-800 relative inline-block">
              Connect With Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-500"></span>
            </h3>

            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Youtube className="h-5 w-5" />, label: "Youtube" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Argo Navis Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
