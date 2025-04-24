// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Mail, Phone, MapPin, Clock } from "lucide-react"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     organization: "",
//     inquiryType: "general",
//     subject: "",
//     message: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSelectChange = (name: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleRadioChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, inquiryType: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         organization: "",
//         inquiryType: "general",
//         subject: "",
//         message: "",
//       })
//     }, 1500)
//   }

//   return (
//     <>
//       {/* Contact Header */}
//       <section className="bg-muted py-12 md:py-20">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
//             <p className="text-lg text-muted-foreground">
//               Have questions about our products or services? Get in touch with our team and we'll be happy to assist
//               you.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Form and Information */}
//       <section className="py-12 md:py-20">
//         <div className="container">
//           <div className="grid gap-8 lg:grid-cols-3">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="lg:col-span-2"
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Send Us a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and our team will get back to you as soon as possible.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {isSubmitted ? (
//                     <div className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20">
//                       <h3 className="mb-2 text-xl font-semibold text-green-800 dark:text-green-300">Thank You!</h3>
//                       <p className="mb-4 text-green-700 dark:text-green-400">
//                         Your message has been sent successfully. We'll get back to you shortly.
//                       </p>
//                       <Button onClick={() => setIsSubmitted(false)} variant="outline">
//                         Send Another Message
//                       </Button>
//                     </div>
//                   ) : (
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid gap-4 sm:grid-cols-2">
//                         <div className="space-y-2">
//                           <Label htmlFor="name">Full Name</Label>
//                           <Input
//                             id="name"
//                             name="name"
//                             placeholder="John Smith"
//                             required
//                             value={formData.name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="email">Email</Label>
//                           <Input
//                             id="email"
//                             name="email"
//                             type="email"
//                             placeholder="john@example.com"
//                             required
//                             value={formData.email}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="grid gap-4 sm:grid-cols-2">
//                         <div className="space-y-2">
//                           <Label htmlFor="phone">Phone Number</Label>
//                           <Input
//                             id="phone"
//                             name="phone"
//                             placeholder="+1 (555) 123-4567"
//                             value={formData.phone}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="organization">Organization</Label>
//                           <Input
//                             id="organization"
//                             name="organization"
//                             placeholder="Your Company"
//                             value={formData.organization}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label>Inquiry Type</Label>
//                         <RadioGroup
//                           defaultValue="general"
//                           value={formData.inquiryType}
//                           onValueChange={handleRadioChange}
//                           className="flex flex-wrap gap-4"
//                         >
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="general" id="general" />
//                             <Label htmlFor="general">General Inquiry</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="product" id="product" />
//                             <Label htmlFor="product">Product Information</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="quote" id="quote" />
//                             <Label htmlFor="quote">Request a Quote</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="support" id="support" />
//                             <Label htmlFor="support">Technical Support</Label>
//                           </div>
//                         </RadioGroup>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="subject">Subject</Label>
//                         <Input
//                           id="subject"
//                           name="subject"
//                           placeholder="Subject of your inquiry"
//                           required
//                           value={formData.subject}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="message">Message</Label>
//                         <Textarea
//                           id="message"
//                           name="message"
//                           placeholder="Please provide details about your inquiry..."
//                           rows={5}
//                           required
//                           value={formData.message}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <Button type="submit" className="w-full" disabled={isSubmitting}>
//                         {isSubmitting ? "Sending..." : "Send Message"}
//                       </Button>
//                     </form>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <Card className="h-full">
//                 <CardHeader>
//                   <CardTitle>Contact Information</CardTitle>
//                   <CardDescription>Reach out to us directly using the information below.</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="flex items-start">
//                     <MapPin className="mr-3 h-5 w-5 text-primary" />
//                     <div>
//                       <h3 className="font-medium">Address</h3>
//                       <p className="text-muted-foreground">
//                         123 Defense Avenue
//                         <br />
//                         Suite 500
//                         <br />
//                         New York, NY 10001
//                         <br />
//                         United States
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <Phone className="mr-3 h-5 w-5 text-primary" />
//                     <div>
//                       <h3 className="font-medium">Phone</h3>
//                       <p className="text-muted-foreground">
//                         +1 (555) 123-4567
//                         <br />
//                         +1 (555) 987-6543 (International)
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <Mail className="mr-3 h-5 w-5 text-primary" />
//                     <div>
//                       <h3 className="font-medium">Email</h3>
//                       <p className="text-muted-foreground">
//                         info@argonavisglobal.com
//                         <br />
//                         sales@argonavisglobal.com
//                         <br />
//                         support@argonavisglobal.com
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <Clock className="mr-3 h-5 w-5 text-primary" />
//                     <div>
//                       <h3 className="font-medium">Hours</h3>
//                       <p className="text-muted-foreground">
//                         Monday - Friday: 9:00 AM - 5:00 PM EST
//                         <br />
//                         Saturday - Sunday: Closed
//                       </p>
//                     </div>
//                   </div>

//                   <div className="pt-4">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373064617!2d-73.9746!3d40.7679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzA0LjQiTiA3M8KwNTgnMjguNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//                       width="100%"
//                       height="200"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       className="rounded-md"
//                     ></iframe>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Global Offices */}
//       <section className="bg-muted py-12 md:py-20">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-12 text-center"
//           >
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Global Offices</h2>
//             <p className="mx-auto max-w-2xl text-muted-foreground">
//               Argo Navis Global has a presence in key locations around the world to better serve our international
//               clients.
//             </p>
//           </motion.div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>North America</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="font-medium">New York, USA (Headquarters)</p>
//                   <p className="text-muted-foreground">
//                     123 Defense Avenue
//                     <br />
//                     Suite 500
//                     <br />
//                     New York, NY 10001
//                     <br />
//                     +1 (555) 123-4567
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Europe</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="font-medium">London, United Kingdom</p>
//                   <p className="text-muted-foreground">
//                     45 Security Street
//                     <br />
//                     Floor 3<br />
//                     London, EC2A 1AB
//                     <br />
//                     +44 20 1234 5678
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Asia Pacific</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="font-medium">Singapore</p>
//                   <p className="text-muted-foreground">
//                     78 Defense Tower
//                     <br />
//                     #12-01
//                     <br />
//                     Singapore 068897
//                     <br />
//                     +65 6123 4567
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-12 md:py-20">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-12 text-center"
//           >
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
//             <p className="mx-auto max-w-2xl text-muted-foreground">
//               Find answers to common questions about our products, services, and business operations.
//             </p>
//           </motion.div>

//           <div className="mx-auto max-w-3xl space-y-4">
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>How can I request a product demonstration?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     You can request a product demonstration by filling out the contact form on this page or by emailing
//                     us directly at sales@argonavisglobal.com. Please provide details about the specific products you're
//                     interested in, and our team will arrange a demonstration at your convenience.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Do you provide international shipping?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Yes, we provide international shipping for our products. However, please note that shipping of
//                     defense equipment is subject to export regulations and may require specific permits and
//                     documentation. Our logistics team will guide you through the process and ensure compliance with all
//                     applicable regulations.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>What types of organizations do you work with?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Argo Navis Global works primarily with government agencies, military organizations, law enforcement
//                     departments, and authorized security contractors. We also collaborate with other defense
//                     manufacturers and integrators on joint projects and solutions. All clients must meet our strict
//                     verification process and comply with applicable regulations.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Do you offer customization for your products?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     Yes, we offer customization options for many of our products to meet specific operational
//                     requirements. Our engineering team can work with you to develop tailored solutions that address your
//                     unique challenges. Please contact our sales team to discuss your customization needs.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Argo Navis Global",
  description: "Get in touch with Argo Navis Global for inquiries about our defense and security solutions.",
}

export default function ContactPage() {
  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">Contact Us</h1>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Have questions about our products or services? Get in touch with our team.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Headquarters</h3>
                  <p className="text-gray-400">
                    C-25, 1st floor, C-block, Sector-8
                    <br />
                    Noida 201301, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
                  <p className="text-gray-400">info@argonavisglobal.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Phone</h3>
                  <p className="text-gray-400">+91-9318381008</p>
                  <p className="text-gray-400">+91-8800701696</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Business Hours</h3>
                  <p className="text-gray-400">
                    Monday - Friday: 10:00 AM - 6:00 PM
                    <br />
                    Saturday-Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
