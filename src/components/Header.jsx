"use client";

import Link from "next/link";
import { useState } from "react";

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

          {/* ================= DESKTOP HEADER ================= */}
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

          {/* ================= MOBILE HEADER ================= */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between h-[72px] px-4">

              <Link href="/" className="flex items-center">
                <img
                  src="/logo-1 (1).webp"
                  alt="i-Adept Marketing"
                  className="max-w-[190px] max-h-[55px] object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 flex items-center justify-center text-gray-800"
                aria-label="Toggle menu"
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
                          : "text-gray-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

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

      {/* =====================================================
          GET A QUOTE POPUP
      ===================================================== */}
      {quoteOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeQuote();
            }
          }}
        >
          {/* POPUP */}
          <div
            className="relative w-full max-w-[610px] min-h-[520px] bg-[#8b8b8b] border border-red-500 overflow-hidden"
            style={{
              borderTopLeftRadius: "100px",
              borderBottomRightRadius: "100px",
            }}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeQuote}
              aria-label="Close"
              className="absolute top-[16px] right-[17px] z-20 text-white text-[25px] font-light leading-none hover:text-red-200 transition-colors cursor-pointer"
            >
              ×
            </button>

            {/* FORM AREA */}
            <div className="w-full flex justify-end">
              <div className="w-[290px] mr-[18px] pt-[25px] pb-[26px]">

                {/* TITLE */}
                <h2 className="text-white text-[30px] font-bold text-center mb-[20px] tracking-tight">
                  Get a Quote
                </h2>

                {/* NAME */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[46px] bg-white border border-gray-500 px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 mb-[16px]"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full h-[46px] bg-white border border-gray-500 px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 mb-[16px]"
                />

                {/* PHONE */}
                <div className="w-full h-[46px] bg-white border border-gray-500 flex items-center mb-[16px]">

                  <div className="flex items-center gap-1 px-2 h-full border-r border-gray-200">
                    <span className="text-[20px] leading-none">
                      🇮🇳
                    </span>

                    <span className="text-gray-500 text-[11px]">
                      ▾
                    </span>
                  </div>

                  <input
                    type="tel"
                    placeholder="081234 56789"
                    className="flex-1 h-full bg-transparent px-3 text-[15px] text-gray-700 outline-none placeholder:text-gray-500"
                  />
                </div>

                {/* PLACE */}
                <input
                  type="text"
                  placeholder="Place"
                  className="w-full h-[46px] bg-white border border-gray-500 px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 mb-[16px]"
                />

                {/* MESSAGE */}
                <textarea
                  placeholder="Your Message"
                  className="w-full h-[103px] bg-white border border-gray-500 px-4 py-2 text-[15px] text-gray-700 outline-none resize-none placeholder:text-gray-500 mb-[15px]"
                />

                {/* SUBMIT */}
                <button
                  type="button"
                  className="w-full h-[53px] bg-[#e10d08] hover:bg-[#c90905] text-white text-[16px] font-medium rounded-[4px] transition-colors cursor-pointer"
                >
                  Submit Your Request
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
