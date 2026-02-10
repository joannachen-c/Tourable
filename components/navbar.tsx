"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`text-xl font-semibold tracking-tight transition-all duration-700 ${
            scrolled ? "text-foreground" : "text-white"
          } ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          Tourable
        </Link>
        <div
          className={`hidden items-center gap-8 md:flex transition-all duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="#features"
            className={`text-sm transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 hover:text-white"
            }`}
          >
            Features
          </Link>
          <Link
            href="#universities"
            className={`text-sm transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 hover:text-white"
            }`}
          >
            Universities
          </Link>
          <Link
            href="#how-it-works"
            className={`text-sm transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 hover:text-white"
            }`}
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0a0a0a] transition-all duration-300 hover:bg-white/90 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
