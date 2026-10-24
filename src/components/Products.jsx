
"use client";

import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "107 VF-BE Shock Pulse Bearing Analyzer",
    image: "/pro5-1-1.webp",
  },
  {
    id: 2,
    name: "Bearing Analyzer – Vibrometer CM-21",
    image: "/Bearing-Analyzer-Vibrometer-CM-21-1 (1).webp",
  },
  {
    id: 3,
    name: "Factory Manager – Vibration Data Management System",
    image: "/Factory-Manager-1 (1).webp",
  },
  {
    id: 4,
    name: "Multi Cylinder Diesel Engine Performance Analyzer DK-100",
    image:
      "/Multi-Cylinder-Diesel-Engine-Performance-Analyzer-DK-100 (1).webp",
  },
  {
    id: 5,
    name: "Eye Tracker – Argus",
    image: "/Eye-Tracker-Argus (1).webp",
  },
  {
    id: 6,
    name: 'Eye Tracking Device Pupil Labs "CORE"',
    image: "/pro17-1.webp",
  },
  {
    id: 7,
    name: "EyeLink 1000 Plus",
    image: "/pro15-1.webp",
  },
  {
    id: 8,
    name: "EyeLink Portable Duo",
    image: "/pro14-1.webp",
  },
];

export default function Products() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "",
    message: "",
  });

  // Listen for the Header's existing quote popup event.
  useEffect(() => {
    const handleOpenQuote = (event) => {
      const productName = event.detail?.productName || "";

      setFormData((prev) => ({
        ...prev,
        message: productName
          ? `I want a quote for: ${productName}`
          : "",
      }));
    };

    window.addEventListener("openQuotePopup", handleOpenQuote);

    return () => {
      window.removeEventListener("openQuotePopup", handleOpenQuote);
    };
  }, []);

  // Open the existing Header popup with the selected product.
  const handleProductImageClick = (productName) => {
    window.dispatchEvent(
      new CustomEvent("openQuotePopup", {
        detail: { productName },
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote request:", formData);

    alert("Thank you! Your request has been submitted.");

    setFormData({
      name: "",
      email: "",
      place: "",
      message: "",
    });
  };

  return (
    <section id="products" className="py-16 bg-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* PRODUCTS GRID */}
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our <span className="text-red-600">Products</span>
            </h2>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
                >
                  {/* CLICKABLE PRODUCT IMAGE */}
                  <div
                    className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden cursor-pointer"
                    onClick={() =>
                      handleProductImageClick(product.name)
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={`Get a quote for ${product.name}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleProductImageClick(product.name);
                      }
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                      {product.name}
                    </h3>

                    {/* WHATSAPP BUTTON */}
                    <a
                      href={`https://wa.me/919810010218?text=${encodeURIComponent(
                        `Hello, I want to enquire about ${product.name}. Please share the details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 00-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>

                      WhatsApp Now
                    </a>

                    {/* GET A QUOTE BUTTON */}
                    <button
                      type="button"
                      onClick={() =>
                        handleProductImageClick(product.name)
                      }
                      className="mt-2 w-full px-3 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STICKY QUOTE FORM */}
          <aside id="quote" className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-24 bg-red-900 text-white rounded-xl p-5 sm:p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-center mb-6">
                Get a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-red-800/50 border border-red-700 rounded-lg text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-red-800/50 border border-red-700 rounded-lg text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Place"
                  className="w-full px-4 py-3 bg-red-800/50 border border-red-700 rounded-lg text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-red-800/50 border border-red-700 rounded-lg text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Submit Your Request
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
