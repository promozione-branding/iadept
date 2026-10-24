"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "We've been using iAdept Marketing's Vibration Analyzer for nearly a year now, and I must say it has transformed our maintenance approach. The accuracy of the data and the ease of analysis are excellent. It's helped us detect early signs of equipment wear and avoid unexpected breakdowns. Great product with even better support!",
    name: "Rajiv Mehta",
    role: "Maintenance Head – Jaydeep Industries",
  },
  {
    id: 2,
    text: "The laser alignment tools from iAdept have significantly reduced our setup times. Their team provided excellent training and ongoing support. Highly recommended for any industrial facility looking to improve reliability.",
    name: "Priya Sharma",
    role: "Plant Manager – Apex Manufacturing",
  },
  {
    id: 3,
    text: "Outstanding condition monitoring solutions. The real-time data insights have helped us move from reactive to predictive maintenance. ROI was visible within the first quarter.",
    name: "Suresh Patel",
    role: "Reliability Engineer – Steel Corp India",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-16 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Client <span className="text-red-500">Testimonials</span>
        </h2>

        <div className="relative">
          {/* Card */}
          <div className="bg-gray-100 rounded-2xl p-8 sm:p-10 shadow-xl border border-orange-200/50">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center mb-8">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="text-center">
              <p className="font-bold text-gray-900 text-lg">{t.name}</p>
              <p className="text-sm text-gray-500 mt-1">{t.role}</p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-red-500" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
