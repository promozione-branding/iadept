"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row ">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
            ABOUT US
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-red-600">iAdept Marketing</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            iAdept Marketing offers intelligent solutions for{" "}
            <strong className="text-gray-800">condition monitoring</strong> and{" "}
            <strong className="text-gray-800">predictive maintenance</strong> to
            reduce downtime in industries and increase equipment reliability. Our
            configuration of{" "}
            <strong className="text-gray-800">
              software and hardware systems
            </strong>{" "}
            inherently transforms real-time data into actionable knowledge,
            thereby providing maintenance teams with the ability to make quicker
            and smarter decisions.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-md transition-colors"
          >
            Learn More
          </Link>
        </div>

         <div>
        <img src="/about-us.webp.webp" alt="" />
      </div>
      </div>

     
    </section>
  );
}
