import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="text-foreground text-lg font-semibold tracking-tight">
            Tourable
          </span>
          <span className="text-muted-foreground text-xs">
            Your personalized campus experience.
          </span>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <p className="text-muted-foreground text-xs">
          {new Date().getFullYear()} Tourable. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
