"use client";

import Link from "next/link";

const categories = [
  { id: 1, name: "Vibration Analyzer", href: "#products" },
  { id: 2, name: "Laser Shaft Alignment", href: "#products" },
  { id: 3, name: "Eye Tracker", href: "#products" },
  { id: 4, name: "Vibration Monitoring System", href: "#products" },
  { id: 5, name: "Vibration Sensor", href: "#products" },
  { id: 6, name: "Air Leak Testing", href: "#products" },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Products By <span className="text-red-500">Categories</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative h-40 bg-red-700 hover:bg-red-800 rounded-lg flex items-center justify-center transition-colors overflow-hidden"
            >
              <span className="text-xl font-semibold text-white text-center px-4 z-10">
                {cat.name}
              </span>
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-md transition-colors border border-red-600"
          >
            Talk Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
