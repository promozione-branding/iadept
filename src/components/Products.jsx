
"use client";

import { useState } from "react";
import { openEnquiryWhatsApp, submitEnquiry } from "@/lib/enquiry";
import Popup from "./Popup";

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
    image: "/Multi-Cylinder-Diesel-Engine-Performance-Analyzer-DK-100 (1).webp",
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

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  place: "",
  message: "",
};

export default function Products() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  // Open popup with selected product
  const handleProductQuote = (productName) => {
    setSelectedProduct(productName);
    setIsPopupOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Existing sticky quote form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus("");

    try {
      await submitEnquiry({
        ...formData,
        product: "N/A",
      });

      setFormStatus("Your enquiry has been submitted successfully!");

      openEnquiryWhatsApp({
        ...formData,
        product: "N/A",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setFormStatus(
        error.message === "Enter a valid 10-digit phone number."
          ? error.message
          : "Failed to send. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappLink = (productName) =>
    `https://wa.me/919810010218?text=${encodeURIComponent(
      `Hello, I want to enquire about ${productName}. Please share the details.`
    )}`;

  return (
    <>
      <section id="products" className="bg-[#E7E7E7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* PRODUCTS GRID */}
            <div className="min-w-0 flex-1">
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Explore Our Range
                </p>

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Our <span className="text-red-600">Products</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                  Explore our range of precision measurement, bearing
                  analysis, vibration monitoring and eye-tracking equipment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
                {products.map((product) => (
                  <article
                    key={product.id}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* CLICKABLE PRODUCT IMAGE */}
                    <button
                      type="button"
                      onClick={() => handleProductQuote(product.name)}
                      aria-label={`Get a quote for ${product.name}`}
                      className="block aspect-square w-full cursor-pointer overflow-hidden bg-white p-3 sm:p-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>

                    {/* PRODUCT DETAILS */}
                    <div className="flex flex-1 flex-col border-t border-gray-100 p-3 sm:p-4">
                      <h3 className="line-clamp-3 min-h-[60px] text-xs font-semibold leading-5 text-gray-800 sm:text-sm">
                        {product.name}
                      </h3>

                      <div className="mt-auto space-y-2 pt-4">
                        {/* WHATSAPP BUTTON — UNCHANGED */}
                        <a
                          href={whatsappLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-green-600 px-2 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-700 sm:gap-2 sm:text-sm"
                        >
                          <svg
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 00-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp Now
                        </a>

                        {/* GET A QUOTE — OPENS POPUP */}
                        <button
                          type="button"
                          onClick={() => handleProductQuote(product.name)}
                          className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-red-600 px-2 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-600 hover:text-white sm:text-sm"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* STICKY QUOTE FORM — UNCHANGED */}
            <aside id="quote" className="shrink-0 lg:w-80">
              <div className="rounded-xl bg-red-900 p-5 text-white shadow-xl sm:p-6 lg:sticky lg:top-24">
                <h3 className="mb-2 text-center text-2xl font-bold">
                  Get a Quote
                </h3>

                <p className="mb-6 text-center text-sm text-red-100">
                  Tell us what equipment you need.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-red-700 bg-red-800/50 px-4 py-3 text-white placeholder-red-200 outline-none focus:ring-2 focus:ring-white/50"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-red-700 bg-red-800/50 px-4 py-3 text-white placeholder-red-200 outline-none focus:ring-2 focus:ring-white/50"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-lg border border-red-700 bg-red-800/50 px-4 py-3 text-white placeholder-red-200 outline-none focus:ring-2 focus:ring-white/50"
                  />

                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder="Place"
                    autoComplete="address-level2"
                    className="w-full rounded-lg border border-red-700 bg-red-800/50 px-4 py-3 text-white placeholder-red-200 outline-none focus:ring-2 focus:ring-white/50"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-red-700 bg-red-800/50 px-4 py-3 text-white placeholder-red-200 outline-none focus:ring-2 focus:ring-white/50"
                  />

                  {formStatus && (
                    <p role="status" className="text-sm text-white">
                      {formStatus}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg bg-white py-3 font-semibold text-red-900 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Your Request"}
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* REUSABLE PRODUCT POPUP */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        product={selectedProduct}
        initialValues={{
          message: selectedProduct
            ? `I want to enquire about: ${selectedProduct}`
            : "",
        }}
      />
    </>
  );
}
