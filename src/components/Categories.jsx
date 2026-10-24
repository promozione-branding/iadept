
"use client";

import { useState } from "react";
import Link from "next/link";
import Popup from "./Popup";

const categories = [
  {
    id: 1,
    name: "Vibration Analyzer",
    image: "/service1.webp",
    href: "#products",
  },
  {
    id: 2,
    name: "Laser Shaft Alignment",
    image: "/service2.webp",
    href: "#products",
  },
  {
    id: 3,
    name: "Eye Tracker",
    image: "/IMAGE-14.webp",
    href: "#products",
  },
  {
    id: 4,
    name: "Vibration Monitoring System",
    image: "/gdgdrg.webp",
    href: "#products",
  },
  {
    id: 5,
    name: "Vibration Sensor",
    image: "/bg3-1.webp.webp",
    href: "#products",
  },
  {
    id: 6,
    name: "Air Leak Testing",
    image: "/servicess.webp",
    href: "#products",
  },
];

export default function Categories() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Open reusable popup with the selected category
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);

    window.dispatchEvent(
      new CustomEvent("openQuotePopup", {
        detail: {
          productName: categoryName,
        },
      })
    );

    // Local fallback if Header listener is unavailable
    setQuoteOpen(true);
  };

  const closePopup = () => {
    setQuoteOpen(false);
  };

  return (
    <>
      <section className="bg-[#5b5b5b] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-3 sm:px-5 lg:px-6">
          {/* HEADING */}
          <h2 className="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-4xl">
            Products By{" "}
            <span className="text-red-500">Categories</span>
          </h2>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-x-[38px] lg:gap-y-[30px]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.name)}
                aria-label={`Enquire about ${cat.name}`}
                className="group block min-w-0 cursor-pointer overflow-hidden border border-white/80 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* CATEGORY IMAGE */}
                <div className="h-[125px] w-full overflow-hidden sm:h-[180px] md:h-[200px] lg:h-[216px]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* RED TITLE BAR */}
                <div className="flex min-h-[48px] items-center justify-center bg-[#bd2017] px-1.5 py-3 transition-colors duration-300 group-hover:bg-[#a91a13] sm:min-h-[60px] sm:px-3">
                  <h3 className="text-center text-xs font-bold leading-snug text-white sm:text-base md:text-lg">
                    {cat.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>

        
{/* WHATSAPP CTA */}
<div className="mt-8 text-center sm:mt-10">
  <a
    href={`https://wa.me/919810010218?text=${encodeURIComponent(
      "Hello, I want to enquire about bulk prices for your products and categories. Please share the pricing details."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 border border-green-600 bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-700 sm:px-6 sm:text-base"
  >
    {/* WhatsApp Icon */}
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.85 11.85 0 0012.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.16 1.6 5.97L.04 24l6.29-1.65a11.9 11.9 0 005.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.42-8.42zM12.04 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.85 9.85 0 01-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.9-9.92 9.9zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.77-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.06 2.88 1.21 3.08.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>

    WhatsApp for Bulk Prices
    <span aria-hidden="true">→</span>
  </a>
</div>


        </div>
      </section>

      {/* REUSABLE POPUP */}
      <Popup
        isOpen={quoteOpen}
        onClose={closePopup}
        title="Get a Quote"
        initialValues={{
          message: selectedCategory
            ? `I want to enquire about: ${selectedCategory}`
            : "",
        }}
      />
    </>
  );
}
