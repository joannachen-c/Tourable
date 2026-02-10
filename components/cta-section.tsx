"use client";

import { useEffect, useRef, useState } from "react";

export function CtaSection() {
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
    <section ref={sectionRef} className="relative px-6 py-24 md:px-8 md:py-32">
      <div
        className={`mx-auto max-w-4xl rounded-3xl border border-border bg-card px-8 py-16 text-center transition-all duration-1000 md:px-16 md:py-24 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
        }`}
      >
        <h2
          className={`font-serif text-foreground text-3xl font-medium tracking-tight transition-all duration-800 delay-200 md:text-5xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-balance">
            Ready to find your perfect campus?
          </span>
        </h2>
        <p
          className={`text-muted-foreground mx-auto mt-4 max-w-lg text-base leading-relaxed transition-all duration-800 delay-400 md:text-lg ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Join thousands of students who have already discovered their dream
          school through Tourable.
        </p>
        <div
          className={`mt-10 transition-all duration-800 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="group relative overflow-hidden rounded-full bg-foreground px-10 py-4 text-base font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span className="relative z-10">Start Exploring Now</span>
            <div className="absolute inset-0 bg-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
}
