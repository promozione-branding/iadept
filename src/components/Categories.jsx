
"use client";

import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Vibration Analyzer",
    image: "/images/categories/vibration-analyzer.png",
    href: "#products",
  },
  {
    id: 2,
    name: "Laser Shaft Alignment",
    image: "/images/categories/laser-shaft-alignment.png",
    href: "#products",
  },
  {
    id: 3,
    name: "Eye Tracker",
    image: "/images/categories/eye-tracker.png",
    href: "#products",
  },
  {
    id: 4,
    name: "Vibration Monitoring System",
    image: "/images/categories/vibration-monitoring.png",
    href: "#products",
  },
  {
    id: 5,
    name: "Vibration Sensor",
    image: "/images/categories/vibration-sensor.png",
    href: "#products",
  },
  {
    id: 6,
    name: "Air Leak Testing",
    image: "/images/categories/air-leak-testing.png",
    href: "#products",
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-700 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Products By <span className="text-red-500">Categories</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-red-700 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-xl"
            >
              {/* Image above title */}
              <div className="mb-4 flex h-28 w-full items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full max-w-[190px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category title */}
              <span className="relative z-10 text-center text-lg font-semibold text-white sm:text-xl">
                {cat.name}
              </span>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-md border border-red-600 bg-red-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-800"
          >
            Talk Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
