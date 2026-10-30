"use client";

import { useEffect, useRef, useState } from "react";
import Popup from "./Popup";

const products = [
  {
    title:
      "Full Body Scanner – Symcad (Non Security) III CX20 Compact 3D Body Scanner",
    image:
      "/Full-Body-Scanner-Symcad-Non-Security-III-CX20-Compact-3D-Body-Scanner-1.webp",
  },
  {
    title: "Vibration Monitoring System TPI 9038 Vibration Monitor",
    image:
      "/Vibration-Monitoring-System-Vibration-Monitor-TPI-9038-1-300x300-1.webp",
  },
  {
    title:
      "MTN/5000 – Microcontroller-Based Condition Monitoring System",
    image:
      "/MTN_5000-–-Microcontroller-Based-Condition-Monitoring-System-1-300x300-1.webp",
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "User Locations" },
  { value: 50, suffix: "+", label: "Innovative Contracts" },
  { value: 2000, suffix: "+", label: "Happy Client" },
];

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    const duration = 1800;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, active]);

  return (
    <>
      {count.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

export default function MoreProductsSection() {
  const statsRef = useRef(null);

  const [active, setActive] = useState(false);

  // Popup state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "919876543210";

  // Open popup when image is clicked
  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
  };

  // Close popup
  const closeProductPopup = () => {
    setPopupOpen(false);

    setTimeout(() => {
      setSelectedProduct(null);
    }, 200);
  };

  // WhatsApp
const contactWhatsApp = () => {
  window.open(
    "https://walink.me/gidahh",
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-0 lg:py-5">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-0">

            {/* =========================================
                LEFT: MORE PRODUCTS
            ========================================= */}
            <div className="relative z-10 min-w-0 bg-[#f3f3f3] px-3 py-5 sm:px-5 lg:py-5 lg:pr-6">

              <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-[#252525] sm:text-3xl">
                More Products
              </h2>

              {/* 
                MOBILE:
                2 columns

                DESKTOP:
                3 columns
              */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                {products.map((product, index) => (
                  <article
                    key={product.title}
                    className={`
                      group flex min-w-0 flex-col bg-white p-2.5
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-lg
                      sm:p-2.5

                      ${
                        index === 2
                          ? "hidden sm:flex"
                          : "flex"
                      }
                    `}
                  >

                    {/* PRODUCT IMAGE */}
                    <button
                      type="button"
                      onClick={() => openProductPopup(product)}
                      className="mb-3 block w-full cursor-pointer border-0 bg-transparent p-0"
                      aria-label={`View ${product.title}`}
                    >
                      <div className="flex aspect-square items-center justify-center overflow-hidden bg-[#f7f5f3]">

                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                      </div>
                    </button>

                    {/* PRODUCT TITLE */}
                    <h3 className="mb-3 flex-1 text-center text-xs font-bold leading-[1.4] text-[#171717] sm:text-[13px] md:text-sm">
                      {product.title}
                    </h3>

                    <button
  type="button"
  onClick={contactWhatsApp}
  className="mt-auto w-full rounded-[3px] bg-[#08b50b] px-2 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#079409] focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:py-3 sm:text-sm"
>
  WhatsApp Now
</button>
                  </article>
                ))}

              </div>
            </div>

            {/* =========================================
                RIGHT: IMAGE + COUNTERS
            ========================================= */}
            <div
              ref={statsRef}
              className="relative min-w-0 lg:min-h-[400px]"
            >
              <div className="relative grid min-h-[420px] grid-cols-1 sm:grid-cols-2 lg:min-h-[450px]">

                {/* CENTER PRODUCT / EQUIPMENT IMAGE */}
                <div
                  className="
                    relative z-20 flex items-center justify-center
                    px-4 py-4 sm:px-2
                    lg:absolute lg:left-50
                    lg:top-1/2 lg:w-[53%]
                    lg:-translate-x-1/2
                    lg:-translate-y-1/2
                    lg:px-0 lg:py-0
                  "
                >
                  <div className="h-[250px] w-full max-w-[350px] overflow-hidden rounded-xl border-4 border-white bg-[#dfe3e3] shadow-[0_5px_18px_rgba(0,0,0,0.25)] sm:h-[360px] lg:h-[510px] lg:max-w-none">

                    <img
                      src="/imgg.webp"
                      alt="Industrial condition monitoring equipment"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />

                  </div>
                </div>

                {/* TURQUOISE STATISTICS PANEL */}
                <div
                  className="
                    relative col-span-1 flex flex-col
                    justify-center gap-8
                    bg-[#42eee0]
                    px-5 py-8
                    sm:col-span-2 sm:gap-7
                    sm:pl-[42%] sm:pr-5
                    lg:col-span-1 lg:col-start-1
                    lg:col-end-3 lg:items-end
                    lg:gap-8 lg:py-8
                    lg:pl-[40%] lg:pr-8
                  "
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#42eee0] via-[#42eee0] to-[#30dcd0]" />

                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="relative z-10 w-full text-center sm:text-center lg:max-w-[300px]"
                    >
                      <div className="text-4xl font-extrabold leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                          active={active}
                        />
                      </div>

                      <p className="mt-2 text-base font-bold text-[#ff2929] sm:text-lg">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          PRODUCT POPUP
      ========================================= */}
      <Popup
        isOpen={popupOpen}
        onClose={closeProductPopup}
        product={selectedProduct}
      />
    </>
  );
}