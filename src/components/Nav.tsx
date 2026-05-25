"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(248, 246, 242, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-sm tracking-widest uppercase"
          style={{ color: "var(--text-primary)", fontWeight: 500, letterSpacing: "0.12em" }}
        >
          Cee
        </Link>

        <div className="flex items-center gap-7">
          <a
            href="#work"
            className="text-sm transition-opacity hover:opacity-60"
            style={{ color: "var(--text-secondary)" }}
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm transition-opacity hover:opacity-60"
            style={{ color: "var(--text-secondary)" }}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 rounded-full transition-all hover:opacity-80"
            style={{
              color: "var(--bg)",
              backgroundColor: "var(--text-primary)",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
