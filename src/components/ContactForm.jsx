"use client";

import { useState } from "react";
import { openEnquiryWhatsApp, submitEnquiry } from "@/lib/enquiry";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus("");

    try {
      const enquiry = {
        ...formData,
        product: "N/A",
      };
      await submitEnquiry(enquiry);
      setFormStatus("Your enquiry has been submitted successfully!");
      openEnquiryWhatsApp(enquiry);
      setFormData({
        name: "",
        email: "",
        phone: "",
        place: "",
        message: "",
      });
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      setFormStatus(
        error.message === "Enter a valid 10-digit phone number."
          ? error.message
          : "Failed to send. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-10 sm:py-10 lg:py-15"
    >
      {/* World Map Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/world-map.webp')",
        }}
      />

      {/* Light White Overlay */}
      <div className="absolute inset-0 -z-10 bg-white/85" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Image */}
          <div className="relative">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl sm:min-h-[420px] lg:min-h-[520px]">
              <img
                src="/form.webp"
                alt="Industrial condition monitoring and vibration analysis"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:p-8 lg:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Contact Us
            </p>

            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Send Us a{" "}
              <span className="text-red-600">Message</span>
            </h2>

            <p className="mb-8 text-sm leading-7 text-gray-600 sm:text-base hidden md:block">
              Have a question or need product information? Fill out the
              form below and our team will get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name and Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 
                    py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Phone and Place */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Your Phone
                  </label>

                  <input
                    id="contact-phone"
                     minlength="10"
  maxlength="10"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your 10-digit phone number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-place"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    City / Place
                  </label>

                  <input
                    id="contact-place"
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder="Enter your city or place"
                    autoComplete="address-level2"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                />
              </div>

              {formStatus && (
                <p role="status" className="text-sm text-gray-700">
                  {formStatus}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-red-700 px-8 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-red-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Submitting..." : "Submit Your Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
