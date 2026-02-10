"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-12 md:px-8"
    >
      {/* Hero Image Container */}
      <div
        className={`relative w-full max-w-[1280px] overflow-hidden rounded-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
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
          sizes="(max-width: 768px) 100vw, 1280px"
        />

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#202020]/50 via-transparent to-[#202020]/30" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1
            className={`font-serif text-foreground text-center text-4xl font-medium leading-tight tracking-tight transition-all duration-1000 delay-300 sm:text-5xl md:text-6xl lg:text-7xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-balance">
              Your Personalized 360° College Tours
            </span>
          </h1>
          <p
            className={`text-foreground/80 mt-4 max-w-lg text-center text-base font-light tracking-wide md:mt-6 md:text-lg transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Find your perfect campus, from anywhere.
          </p>
          <div
            className={`mt-8 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <button className="group relative overflow-hidden rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <span className="relative z-10">Start Your Virtual Tour</span>
              <div className="absolute inset-0 bg-[#e0e0e0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        {/* Subtle inner shadow for depth */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
      </div>
    </section>
  );
}
