"use client";

import { useEffect, useRef, useState } from "react";

const universities = [
  { name: "Northwestern" },
  { name: "Princeton" },
  { name: "Brown" },
  { name: "Harvard" },
  { name: "Cornell" },
  { name: "Georgetown" },
  { name: "Stanford" },
  { name: "Duke" },
  { name: "MIT" },
  { name: "Yale" },
  { name: "Columbia" },
  { name: "Penn" },
];

/* SVG-based monogram crests for each university */
function UniversityCrest({ name }: { name: string }) {
  const monograms: Record<string, React.ReactNode> = {
    Northwestern: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <text x="24" y="29" textAnchor="middle" fontSize="16" fontFamily="serif" fontWeight="500">N</text>
      </svg>
    ),
    Princeton: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <path d="M24 3 L44 18 L39 44 L9 44 L4 18 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="30" textAnchor="middle" fontSize="15" fontFamily="serif" fontWeight="500">P</text>
      </svg>
    ),
    Brown: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <rect x="6" y="6" width="36" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="0.5" />
        <text x="24" y="34" textAnchor="middle" fontSize="16" fontFamily="serif" fontWeight="500">B</text>
      </svg>
    ),
    Harvard: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <path d="M24 2 L46 15 L46 33 L24 46 L2 33 L2 15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="30" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="600">VE</text>
        <text x="24" y="18" textAnchor="middle" fontSize="6" fontFamily="serif" letterSpacing="1">HARVARD</text>
      </svg>
    ),
    Cornell: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="29" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="500">CU</text>
      </svg>
    ),
    Georgetown: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <path d="M24 4 C24 4, 42 12, 42 24 C42 36, 24 46, 24 46 C24 46, 6 36, 6 24 C6 12, 24 4, 24 4 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="29" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="500">G</text>
      </svg>
    ),
    Stanford: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <rect x="8" y="4" width="32" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="0.5" />
        <text x="24" y="32" textAnchor="middle" fontSize="16" fontFamily="serif" fontWeight="500">S</text>
      </svg>
    ),
    Duke: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <path d="M14 4 L34 4 L44 24 L34 44 L14 44 L4 24 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="29" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="500">D</text>
      </svg>
    ),
    MIT: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <rect x="4" y="14" width="8" height="24" fill="currentColor" />
        <rect x="16" y="8" width="4" height="30" fill="currentColor" />
        <rect x="10" y="8" width="16" height="4" fill="currentColor" />
        <rect x="28" y="8" width="16" height="4" fill="currentColor" />
        <rect x="34" y="8" width="4" height="30" fill="currentColor" />
      </svg>
    ),
    Yale: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <path d="M24 4 C24 4, 44 10, 44 18 L44 44 L4 44 L4 18 C4 10, 24 4, 24 4 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="32" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="500">Y</text>
      </svg>
    ),
    Columbia: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <text x="24" y="29" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="500">C</text>
      </svg>
    ),
    Penn: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="currentColor">
        <path d="M24 2 L44 14 L44 34 L24 46 L4 34 L4 14 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="30" textAnchor="middle" fontSize="14" fontFamily="serif" fontWeight="500">P</text>
      </svg>
    ),
  };

  return (
    <div className="flex flex-shrink-0 items-center justify-center px-6 md:px-10">
      <div className="flex h-10 w-10 items-center justify-center text-muted-foreground/70 transition-all duration-500 hover:text-foreground/80 md:h-14 md:w-14">
        {monograms[name] || (
          <span className="font-serif text-lg font-semibold">{name[0]}</span>
        )}
      </div>
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
      className="relative overflow-hidden py-12 md:py-20"
    >
      <div
        className={`text-center transition-all duration-[800ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-muted-foreground text-sm italic tracking-wide">
          50+ universities available
        </p>
      </div>

      {/* Scrolling Logo Strip */}
      <div className="relative mt-8 md:mt-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent md:w-32" />

        {/* Animated scroll strip */}
        <div
          className={`flex animate-marquee transition-opacity duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "max-content" }}
        >
          {[...universities, ...universities].map((uni, i) => (
            <UniversityCrest key={`${uni.name}-${i}`} name={uni.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
