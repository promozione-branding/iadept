"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", place: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-100 relative overflow-hidden">
      {/* World map background hint */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <ellipse cx="250" cy="250" rx="120" ry="180" fill="#000" />
          <ellipse cx="500" cy="220" rx="150" ry="160" fill="#000" />
          <ellipse cx="750" cy="280" rx="130" ry="140" fill="#000" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left empty / map space on large screens */}
          <div className="hidden lg:block" />

          {/* Form */}
          <div className="max-w-lg ml-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Send Us a <span className="text-red-600">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                />
              </div>

              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                placeholder="Place"
                className="w-full px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-red-50 border border-red-100 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent resize-none"
              />

              <button
                type="submit"
                className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors shadow-md"
              >
                Submit Your Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
