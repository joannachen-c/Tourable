"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose Your Schools",
    description:
      "Browse our catalog of 50+ universities and add the ones you want to explore to your personal list.",
  },
  {
    number: "02",
    title: "Customize Your Tour",
    description:
      "Select your major interests, preferred campus vibes, and must-see spots to get a tour tailored just for you.",
  },
  {
    number: "03",
    title: "Explore in 360°",
    description:
      "Immerse yourself in each campus with stunning 360° views, student commentary, and interactive hotspots.",
  },
];

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={`mb-16 text-center transition-all duration-800 md:mb-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">
            How It Works
          </p>
          <h2 className="font-serif text-foreground text-3xl font-medium tracking-tight md:text-5xl">
            <span className="text-balance">
              Three steps to your dream campus
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex items-start gap-8 transition-all duration-700 md:gap-12 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${index < steps.length - 1 ? "pb-8 md:pb-12" : ""}`}
              style={{ transitionDelay: isVisible ? `${300 + index * 200}ms` : "0ms" }}
            >
              {/* Step number + connector line */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-card">
                  <span className="text-foreground font-serif text-xl font-medium">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`mt-4 h-full w-px bg-border transition-all duration-1000 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${600 + index * 200}ms` : "0ms",
                    }}
                  />
                )}
              </div>

              {/* Step content */}
              <div className="pt-2 pb-4">
                <h3 className="text-foreground mb-2 text-xl font-medium md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-md text-sm leading-relaxed md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
