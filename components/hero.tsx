"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center px-4 pt-24 pb-8 md:px-8 md:pt-28 md:pb-12">
      {/* Hero Image Container */}
      <div
        className={`relative w-full max-w-[1320px] overflow-hidden rounded-2xl transition-all duration-[1.2s] ease-out md:rounded-3xl ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-4"
        }`}
        style={{ aspectRatio: "16/9" }}
      >
        {/* Background Image */}
        <Image
          src="/images/hero-campus.jpg"
          alt="Aerial view of a beautiful university campus with Mediterranean architecture"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1320px"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1
            className={`font-serif text-center text-4xl font-medium leading-[1.1] tracking-tight text-white transition-all duration-[1s] delay-300 ease-out sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-balance">
              Your Personalized 360° College Tours
            </span>
          </h1>

          <p
            className={`mt-4 max-w-lg text-center text-sm font-light tracking-wide text-white/75 transition-all duration-[1s] delay-500 ease-out md:mt-5 md:text-base lg:text-lg ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Find your perfect campus, from anywhere.
          </p>

          <div
            className={`mt-7 transition-all duration-[1s] delay-700 ease-out md:mt-9 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group relative overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-medium text-[#0a0a0a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-[1.02]">
              <span className="relative z-10">Start Your Virtual Tour</span>
              <div className="absolute inset-0 bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* Inner shadow for depth / rounded edge illusion */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] md:rounded-3xl" />
      </div>
    </section>
  );
}
