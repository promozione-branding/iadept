"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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

  // Desktop = 2 cards
  // Mobile = 1 card
  const desktopVisibleCount = 2;

  const maxIndex = testimonials.length - desktopVisibleCount;

  const prev = () => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-10 lg:py-15">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/testimonials-bg.webp')",
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Client Reviews
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="text-red-500">Clients Say</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
            Trusted by industry professionals for reliable products,
            expert support, and smarter maintenance solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((t, index) => {
            // Desktop: show current + next 2
            const isDesktopVisible =
              index >= current && index < current + desktopVisibleCount;

            return (
              <div
                key={t.id}
                className={`
                  flex h-full flex-col rounded-2xl border border-white/15
                  bg-white/[0.96] p-6 shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-red-400/60
                  sm:p-8 lg:p-9
                  ${isDesktopVisible ? "md:flex" : "md:hidden"}
                  ${index === current ? "flex" : "hidden"}
                `}
              >
                {/* Quote and Rating */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Quote size={25} />
                  </div>

                  <div className="flex gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={17}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="flex-1 text-base leading-8 text-gray-700">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Client Details */}
                <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-900 text-lg font-bold text-white">
                    {t.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900">
                      {t.name}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-9 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-red-500 hover:bg-red-600"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial group ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-8 bg-red-500"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-red-500 hover:bg-red-600"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}