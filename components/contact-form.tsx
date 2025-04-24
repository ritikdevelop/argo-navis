"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          inquiryType: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white border-gray-700 text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-black">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white border-gray-700 text-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-black">
            Company/Organization
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-white border-gray-700 text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inquiryType" className="text-black">
            Inquiry Type
          </Label>
          <Select
            value={formData.inquiryType}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="bg-white border-gray-700 text-black">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-700 text-black">
              <SelectItem value="product">Product Information</SelectItem>
              <SelectItem value="quote">Request a Quote</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="partnership">
                Partnership Opportunity
              </SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-black">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-white border-gray-700 text-black"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-black">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white border-gray-700 text-black"
        />
      </div>

      <Button
        type="submit"
        className="w-full text-black bg-gray-400 rounded-lg hover:bg-green-400 transition duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitSuccess && (
        <div className="p-4 bg-green-900 text-green-100 rounded-md">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
    </form>
  );
}
