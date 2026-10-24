"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white">
      {/* Main footer content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
        {/* Logo */}
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-6 shadow-md">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-yellow-400 flex items-center justify-center text-white font-bold text-xs">
            iAM
          </div>
          <span className="text-lg font-semibold text-gray-800">
            i<span className="text-red-600">Adept</span> Marketing
          </span>
        </div>

        <p className="text-sm text-red-100 max-w-2xl mx-auto leading-relaxed mb-8">
          At iAdept Marketing, we deliver advanced industrial solutions including
          vibration systems, laser alignment tools, eye trackers, sound level
          meters, leak detectors, engine analyzers, and more, serving industries
          across India and globally.
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center px-6 py-2.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition-colors"
        >
          Need More Information
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/90 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>Copyright © 2025 iAdept Marketing. All Right Reserved.</p>
          <p>
            Website Designed By Inquiry Bazaar Pvt. Ltd.{" "}
            <a
              href="https://inquirybazaar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline"
            >
              B2B Marketplace
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
