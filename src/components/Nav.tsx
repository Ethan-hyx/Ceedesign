"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full px-6 md:px-10 py-4 flex items-center justify-between"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: scrolled ? "rgba(244, 241, 236, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        transition:
          "background-color 300ms var(--ease-out-quart), backdrop-filter 300ms var(--ease-out-quart)",
      }}
    >
      <Link
        href="/"
        className="text-sm"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}
      >
        Cee
      </Link>

      <div className="flex items-center gap-7">
        <a
          href="#"
          className="text-sm nav-link"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Home
        </a>
        <a
          href="#work"
          className="text-sm nav-link"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Work
        </a>
      </div>

      <a
        href="#contact"
        className="text-sm px-4 py-1.5 rounded-full"
        style={{
          color: "var(--text-primary)",
          border: "1px solid var(--text-primary)",
          fontFamily: "var(--font-sans)",
          transition: "opacity 200ms var(--ease-out-quart)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Contact ↗
      </a>
    </nav>
  );
}
