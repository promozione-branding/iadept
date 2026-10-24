
"use client";

import { useRef, useEffect, useState } from "react";

const clients = [
  { id: 1, name: "Client 1", image: "/2 (46).webp" },
  { id: 2, name: "Client 2", image: "/2 webp" },
  { id: 3, name: "Client 3", image: "/3 (33).webp" },
  { id: 4, name: "Client 4", image: "/5 (11).webp" },
  { id: 5, name: "Client 5", image: "/6 (8).webp" },
  { id: 6, name: "Client 6", image: "/7 (10).webp" },
  { id: 7, name: "Client 7", image: "/8 (4).webp" },
  { id: 8, name: "Client 8", image: "/10 (5).webp" },
    { id: 9, name: "Client 8", image: "/11 (4).webp" },
      { id: 10, name: "Client 8", image: "/12 (6).webp" },
];

export default function Clientele() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let lastTime = 0;
    const speed = 45; // Pixels per second

    const animate = (time) => {
      if (!lastTime) lastTime = time;

      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (!pausedRef.current) {
        positionRef.current += speed * delta;

        const halfWidth = container.scrollWidth / 2;

        if (halfWidth > 0 && positionRef.current >= halfWidth) {
          positionRef.current -= halfWidth;
        }

        container.scrollLeft = positionRef.current;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const pauseScroll = (paused) => {
    pausedRef.current = paused;
    setIsPaused(paused);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    pausedRef.current = true;
    setIsPaused(true);

    const amount = direction === "left" ? -220 : 220;
    const maxScroll = container.scrollWidth / 2;

    let nextPosition = positionRef.current + amount;

    if (nextPosition < 0) nextPosition = maxScroll + nextPosition;
    if (maxScroll > 0 && nextPosition >= maxScroll) {
      nextPosition -= maxScroll;
    }

    positionRef.current = Math.max(0, nextPosition);
    container.scrollTo({
      left: positionRef.current,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 py-10 sm:py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Trusted Partnerships
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our <span className="text-red-600">Clientele</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
            Trusted by businesses through quality, reliability and long-term
            partnerships.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            onMouseLeave={() => pauseScroll(false)}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            aria-label="Scroll clients left"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Automatic Infinite Logo Carousel */}
          <div
            ref={scrollRef}
            onMouseEnter={() => pauseScroll(true)}
            onMouseLeave={() => pauseScroll(false)}
            onTouchStart={() => pauseScroll(true)}
            onTouchEnd={() => pauseScroll(false)}
            className="flex gap-5 overflow-x-auto px-7 py-4 sm:gap-7 sm:px-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-24 w-36 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition duration-300 hover:border-red-200 hover:shadow-md sm:h-28 sm:w-44 sm:p-5"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            onMouseLeave={() => pauseScroll(false)}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            aria-label="Scroll clients right"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-gray-400">
          {isPaused
            ? "Carousel paused"
            : "Our valued clients · Continuous scroll"}
        </p>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
