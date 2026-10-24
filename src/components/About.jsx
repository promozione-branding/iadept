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

         
{/* Bulk Pricing Buttons */}
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
  {/* Get Bulk Pricing */}
  <Link
    href="#contact"
    className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-[#477f00] px-6 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#386600] sm:min-w-[245px] sm:text-base"
  >
    GET BULK PRICING
    <span className="text-xl leading-none">↓</span>
  </Link>

  {/* WhatsApp Bulk */}
  <a
    href="https://wa.me/919810010218?text=Hello%2C%20I%20am%20interested%20in%20bulk%20pricing."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-[#14231e] px-6 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#203b30] sm:min-w-[230px] sm:text-base"
  >
    WHATSAPP BULK

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M9 9a3 3 0 0 0 6 6" />
    </svg>
  </a>
</div>

        </div>

         <div>
        <img src="/about-us.webp.webp" alt="" />
      </div>
      </div>

     
    </section>
  );
}
