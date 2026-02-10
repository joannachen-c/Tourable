"use client";

import { useEffect, useRef, useState } from "react";

const universities = [
  { name: "Northwestern", abbr: "NW" },
  { name: "Princeton", abbr: "PR" },
  { name: "Brown", abbr: "BR" },
  { name: "Harvard", abbr: "HA" },
  { name: "Cornell", abbr: "CO" },
  { name: "Georgetown", abbr: "GT" },
  { name: "Stanford", abbr: "ST" },
  { name: "Duke", abbr: "DU" },
  { name: "MIT", abbr: "MIT" },
  { name: "Yale", abbr: "YA" },
  { name: "Columbia", abbr: "CU" },
  { name: "Penn", abbr: "UP" },
];

function UniversityLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex flex-shrink-0 flex-col items-center gap-2 px-6 md:px-10">
      <div className="flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
        <span className="text-muted-foreground font-serif text-lg font-semibold tracking-wide md:text-xl">
          {abbr}
        </span>
      </div>
      <span className="text-muted-foreground/60 text-xs tracking-wider whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function UniversityLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="universities"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        className={`text-center transition-all duration-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-muted-foreground text-sm tracking-widest">
          50+ universities available
        </p>
      </div>

      {/* Scrolling Logo Strip */}
      <div className="relative mt-10 md:mt-12">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        {/* Animated scroll strip */}
        <div
          className={`flex animate-scroll-left transition-opacity duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "max-content" }}
        >
          {/* Duplicate list for seamless loop */}
          {[...universities, ...universities].map((uni, i) => (
            <UniversityLogo key={`${uni.name}-${i}`} name={uni.name} abbr={uni.abbr} />
          ))}
        </div>
      </div>
    </section>
  );
}
