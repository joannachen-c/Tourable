"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Compass, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Immersive 360° Views",
    description:
      "Walk through every campus corner with high-fidelity 360° panoramic views that put you right in the middle of the action.",
  },
  {
    icon: Compass,
    title: "Personalized Paths",
    description:
      "Tell us your interests and we curate a custom tour route highlighting the departments, dorms, and dining halls that matter to you.",
  },
  {
    icon: Users,
    title: "Student-Led Insights",
    description:
      "Hear from real students as they share their authentic experiences, tips, and favorite hidden gems on campus.",
  },
];

export function Features() {
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
      id="features"
      className="relative px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-800 md:mb-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">
            Why Tourable
          </p>
          <h2 className="font-serif text-foreground text-3xl font-medium tracking-tight md:text-5xl">
            <span className="text-balance">
              Campus visits, reimagined
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-muted-foreground/30 hover:bg-accent md:p-10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms" }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-muted">
                  <Icon className="text-foreground h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground mb-3 text-lg font-medium">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
