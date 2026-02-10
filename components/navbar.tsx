"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
        <Link href="/" className="text-foreground text-xl font-semibold tracking-tight">
          Tourable
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            href="#universities"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
          >
            Universities
          </Link>
          <Link
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
