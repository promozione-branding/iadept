
"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "./Popup";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "We Serve", href: "#industries" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Open quote popup
  const openQuote = () => {
    setIsOpen(false);
    setQuoteOpen(true);
  };

  // Close quote popup
  const closeQuote = () => {
    setQuoteOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-t border-gray-200 bg-white">
        <div className="w-full">
          {/* DESKTOP HEADER */}
          <div className="hidden h-[92px] items-start lg:flex">
            {/* LOGO */}
            <div className="relative shrink-0">
              <Link
                href="/"
                className="flex h-[70px] w-[232px] items-center rounded-r-full border border-l-0 border-gray-500 px-3"
              >
                <img
                  src="/logo-1 (1).webp"
                  alt="i-Adept Marketing"
                  className="h-auto max-h-[58px] w-auto max-w-[210px] object-contain"
                />
              </Link>

              <p className="absolute left-[39px] top-[72px] whitespace-nowrap text-[14px] font-semibold text-gray-700">
                GST: 07ABXPN5874D1Z1
              </p>
            </div>

            {/* NAVIGATION */}
            <nav className="flex h-[70px] flex-1 items-center justify-center">
              <div className="flex items-center gap-[42px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`whitespace-nowrap text-[18px] font-semibold transition-colors ${
                      link.active
                        ? "text-red-600"
                        : "text-black hover:text-red-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* DESKTOP GET A QUOTE */}
            <div className="flex h-[70px] w-[280px] items-center justify-center">
              <button
                type="button"
                onClick={openQuote}
                className="group relative flex h-[59px] w-[178px] cursor-pointer items-center justify-between bg-[#d5231f] pl-[25px] pr-[27px] text-[13px] font-bold text-white"
                style={{
                  clipPath:
                    "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                }}
              >
                <span>GET A QUOTE</span>

                <span className="text-[22px] font-light leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

       {/* MOBILE HEADER */}
<div className="lg:hidden">
  <div className="flex h-[72px] items-center justify-between px-4">
    {/* LOGO */}
    <Link href="/" className="flex items-center">
      <img
        src="/logo-1 (1).webp"
        alt="i-Adept Marketing"
        className="max-h-[55px] max-w-[190px] object-contain"
      />
    </Link>

    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className="flex h-11 w-11 items-center justify-center text-gray-800"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <svg
          width="27"
          height="27"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
      )}
    </button>
  </div>

  {/* GST - LOGO KE BILKUL PAAS */}
  <div className="px-4 pb-1">
    <p className="text-[11px] leading-none text-gray-700">
      GST: 07ABXPN5874D1Z1
    </p>
  </div>

  {/* MOBILE MENU */}
  {isOpen && (
    <div className="border-t border-gray-200 bg-white px-4 py-4">
      {/* ...your existing menu... */}
    </div>
  )}
</div>
        </div>
      </header>

      {/* CONNECTED REUSABLE POPUP */}
      <Popup
        isOpen={quoteOpen}
        onClose={closeQuote}
        title="Get a Quote"
      />
    </>
  );
}
