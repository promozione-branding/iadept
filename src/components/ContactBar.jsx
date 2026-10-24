"use client";

import {
  MapPin,
  Phone,
  Mail,
  PhoneCall,
  ChevronUp,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "D-998, First Floor, Palam Extension, Sector-7,",
      "Dwarka, New Delhi-110077 India",
    ],
  },
  {
    icon: Phone,
    title: "Mobile Number",
    lines: ["+91-9810010218", "+91-9910310218"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      "crm@iadeptmarketing.com",
      "info@iadeptmarketing.com",
    ],
  },
];

function ContactItem({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d51f1b] text-white sm:h-[50px] sm:w-[50px]">
        <Icon size={25} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <h3 className="mb-1 text-xl font-bold leading-tight text-black sm:text-2xl">
          {item.title}
        </h3>

        {item.lines.map((line) => {
          const isPhone = item.title === "Mobile Number";
          const isEmail = item.title === "Email";

          const href = isPhone
            ? `tel:${line.replace(/[\s()-]/g, "")}`
            : isEmail
              ? `mailto:${line.trim()}`
              : null;

          return (
            <p
              key={line}
              className="text-sm leading-6 text-black sm:text-base"
            >
              {href ? (
                <a
                  href={href}
                  className="transition-colors duration-200 hover:text-[#d51f1b] hover:underline"
                >
                  {line}
                </a>
              ) : (
                line
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function FloatingContactButtons() {
  const phoneNumber = "919810010218";
  const whatsappNumber = "919810010218";

  return (
    <div
      className="
        fixed right-2 top-1/2 z-[9999]
        flex -translate-y-1/2 flex-col items-center
        gap-3 rounded-[20px] bg-white px-2 py-3 shadow-lg
        sm:right-3
      "
    >
      {/* Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call us"
        title="Call us"
        className="
          flex h-10 w-10 items-center justify-center
          rounded-full bg-[#ed1c24] text-white
          transition-transform duration-200 hover:scale-110
          sm:h-11 sm:w-11
        "
      >
        <PhoneCall size={24} fill="white" strokeWidth={2} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="flex items-center justify-center"
      >
        <img
          className="w-[40px]"
          src="/WhatsApp.svg-1-1.avif"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default function Contactbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer
        className="
          relative mt-16 w-full
          bg-[#c91f1b]
          px-3 pb-0 pt-0
          sm:mt-30 sm:px-5
          lg:px-7
        "
      >
        {/* TOP CONTACT BAR */}
        <div
          className="
            relative z-10 mx-auto
            rounded-[50px]
            bg-white
            px-5 py-10
            sm:px-8
            md:px-10
            lg:px-12
          "
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
            {contactDetails.map((item) => (
              <ContactItem
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* COMPANY INFORMATION */}
        <div className="mt-4 pb-8 pt-2 text-center sm:pb-10">
          {/* Logo */}
          <div
            className="
              mx-auto mb-5 flex min-h-10
              w-full max-w-[480px]
              items-center justify-center
              rounded-xl bg-white
              px-4 py-2
            "
          >
            <img
              src="/logo-1 (1).webp"
              alt="iAdept Marketing"
              className="
                max-h-9 w-auto
                max-w-full object-contain
              "
            />
          </div>

          {/* Description */}
          <p
            className="
              mx-auto max-w-[1400px]
              px-1 text-sm font-medium
              leading-6 text-white
              sm:text-base
            "
          >
            At iAdept Marketing, we deliver advanced industrial solutions
            including vibration systems, laser alignment tools, eye trackers,
            sound level meters, leak detectors, engine analyzers and more,
            serving industries across India and globally.
          </p>
        </div>

        {/* COPYRIGHT BAR */}
        <div
          className="
            -mx-3 flex flex-col
            items-center justify-between
            gap-2 bg-black
            px-4 py-3
            text-center text-sm text-white
            sm:-mx-5 sm:flex-row
            sm:px-7 sm:text-left
            lg:-mx-7
          "
        >
          <p>
            Copyright © 2025 iAdept Marketing. All Right Reserved.
          </p>

          <p className="leading-6">
            Website Designed By{" "}
            <a
              href="https://www.inquirybazaar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Inquiry Bazaar Pvt. Ltd. B2B Marketplace
            </a>
          </p>
        </div>

        {/* BACK TO TOP */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            absolute bottom-0 right-3 z-20
            flex h-8 w-9
            items-center justify-center
            bg-[#414141] text-white
            transition-colors hover:bg-[#555]
            sm:right-4
          "
        >
          <ChevronUp size={21} />
        </button>
      </footer>

      {/* FIXED CONTACT BUTTONS */}
      <FloatingContactButtons />
    </>
  );
}