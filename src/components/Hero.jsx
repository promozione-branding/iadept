"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        {/* DESKTOP IMAGE */}
            <img
              src="/banner1 (9).webp"
              alt="Vibration Analyzer"
              className="hidden md:block w-full object-cover"
            />

            {/* MOBILE IMAGE */}
            <img
              src="/banner2 (10).webp"
              alt="Vibration Analyzer"
              className="block md:hidden w-full  object-cover"
            />
    </section>
  );
}
