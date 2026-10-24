"use client";

import { useRef } from "react";

const clients = [
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
  { id: 7, name: "Client 7" },
  { id: 8, name: "Client 8" },
];

export default function Clientele() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Our <span className="text-red-600">Clientele</span>
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full text-gray-600 hover:text-red-600 hover:shadow-lg transition-all -translate-x-2"
            aria-label="Previous"
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

          {/* Logos carousel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-12 py-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="shrink-0 w-28 h-20 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <span className="text-xs text-gray-400 font-medium">
                  Logo {client.id}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full text-gray-600 hover:text-red-600 hover:shadow-lg transition-all translate-x-2"
            aria-label="Next"
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
      </div>
    </section>
  );
}
