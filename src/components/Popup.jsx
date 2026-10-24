"use client";

import { useState } from "react";
import { openEnquiryWhatsApp, submitEnquiry } from "@/lib/enquiry";

export default function Popup({
  isOpen,
  onClose,
  initialValues = {},
  product,
}) {
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const productName =
    typeof product === "string"
      ? product
      : product?.name || product?.title;

  const initialMessage =
    initialValues.message ||
    (productName ? `I want to enquire about: ${productName}` : "");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setFormStatus("");

    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      const enquiry = {
        ...values,
        product: productName || "N/A",
      };

      await submitEnquiry(enquiry);

      setFormStatus("Your enquiry has been submitted successfully!");

      openEnquiryWhatsApp(enquiry);

      form.reset();

      setTimeout(() => {
        onClose();
      }, 3000);
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

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto 
      bg-black/75 px-3 py-5 sm:px-4 sm:py-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* POPUP CONTAINER */}
      <div
        className="relative isolate my-auto w-full max-w-[350px] min-h-[520px] overflow-hidden border border-red-500"
        style={{
          borderTopLeftRadius: "clamp(35px, 8vw, 100px)",
          borderBottomRightRadius: "clamp(35px, 8vw, 100px)",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/popup-bg.webp')",
          }}
        />

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 -z-10 bg-black/65" />

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-30 cursor-pointer text-[28px] font-light leading-none text-white transition-colors hover:text-red-300 sm:right-[17px] sm:top-[16px]"
        >
          ×
        </button>

        {/* FORM AREA */}
      <div className="relative z-10 flex w-full justify-center px-4 sm:px-0">
  <div className="mx-auto w-full max-w-[290px] py-[25px] sm:pb-[26px] sm:pt-[25px]">

    {/* TITLE */}
    <h2 className="mb-[20px] text-center text-[28px] font-bold tracking-tight text-white sm:text-[30px]">
      Get a Quote
    </h2>

            {/* ENQUIRY FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                defaultValue={initialValues.name || ""}
                required
                className="h-[46px] w-full border border-gray-300 bg-white px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                autoComplete="email"
                defaultValue={initialValues.email || ""}
                required
                className="h-[46px] w-full border border-gray-300 bg-white px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-red-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="10-digit phone number"
                autoComplete="tel"
                defaultValue={initialValues.phone || ""}
                required
                className="h-[46px] w-full border border-gray-300 bg-white px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-red-500"
              />

              <input
                type="text"
                name="place"
                placeholder="Place"
                autoComplete="address-level2"
                defaultValue={initialValues.place || ""}
                className="h-[46px] w-full border border-gray-300 bg-white px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-red-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                defaultValue={initialMessage}
                className="h-[103px] w-full resize-none border border-gray-300 bg-white px-4 py-2 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-red-500"
              />

              {/* FORM STATUS */}
              {formStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm leading-5 text-white"
                >
                  {formStatus}
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={submitting}
                className="h-[53px] w-full cursor-pointer rounded-[4px] bg-[#e10d08] text-[16px] font-medium text-white transition-colors hover:bg-[#c90905] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Your Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}