
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

  const openQuote = () => {
    setQuoteOpen(true);
    setIsOpen(false);
  };

  const closeQuote = () => {
    setQuoteOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-t border-gray-200">
        <div className="w-full">
          {/* DESKTOP HEADER */}
          <div className="hidden lg:flex items-start h-[92px]">
            {/* LOGO */}
            <div className="relative shrink-0">
              <Link
                href="/"
                className="flex items-center h-[70px] w-[232px] rounded-r-full border border-gray-500 border-l-0 px-3"
              >
                <img
                  src="/logo-1 (1).webp"
                  alt="i-Adept Marketing"
                  className="w-auto h-auto max-w-[210px] max-h-[58px] object-contain"
                />
              </Link>

              <p className="absolute left-[39px] top-[72px] text-[14px] font-semibold text-gray-700 whitespace-nowrap">
                GST: 07ABXPN5874D1Z1
              </p>
            </div>

            {/* NAVIGATION */}
            <nav className="flex-1 flex items-center justify-center h-[70px]">
              <div className="flex items-center gap-[42px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[18px] font-semibold whitespace-nowrap transition-colors ${
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

            {/* GET A QUOTE */}
            <div className="w-[280px] h-[70px] flex items-center justify-center">
              <button
                type="button"
                onClick={openQuote}
                className="relative flex items-center justify-between w-[178px] h-[59px] bg-[#d5231f] text-white pl-[25px] pr-[27px] text-[13px] font-bold group cursor-pointer"
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
            <div className="flex items-center justify-between h-[72px] px-4">
              {/* LOGO */}
              <Link href="/" className="flex items-center">
                <img
                  src="/logo-1 (1).webp"
                  alt="i-Adept Marketing"
                  className="max-w-[190px] max-h-[55px] object-contain"
                />
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 flex items-center justify-center text-gray-800"
                aria-label="Toggle menu"
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

            {/* GST */}
            <div className="px-4 pb-2">
              <p className="text-[11px] text-gray-700">
                GST: 07ABXPN5874D1Z1
              </p>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
              <div className="border-t border-gray-200 bg-white px-4 py-4">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`py-3 text-[16px] border-b border-gray-100 ${
                        link.active
                          ? "text-red-600"
                          : "text-gray-800 hover:text-red-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* MOBILE GET A QUOTE */}
                  <button
                    type="button"
                    onClick={openQuote}
                    className="relative mt-5 flex items-center justify-between w-full max-w-[190px] h-[52px] bg-[#d5231f] text-white px-5 text-[13px] font-bold cursor-pointer"
                    style={{
                      clipPath:
                        "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                    }}
                  >
                    <span>GET A QUOTE</span>
                    <span className="text-[21px]">→</span>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* SEPARATE QUOTE POPUP COMPONENT */}
      <Popup
        isOpen={quoteOpen}
        onClose={closeQuote}
      />
    </>
  );
}
