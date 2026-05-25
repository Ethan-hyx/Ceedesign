"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="w-full px-6 md:px-10 py-4 flex items-center justify-between"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-sm flex items-center gap-1.5"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}
      >
        Cee
      </Link>

      {/* Center nav */}
      <div className="flex items-center gap-7">
        <a
          href="#"
          className="text-sm transition-opacity hover:opacity-50"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Home
        </a>
        <a
          href="#work"
          className="text-sm transition-opacity hover:opacity-50"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Work
        </a>
      </div>

      {/* CTA — outline pill */}
      <a
        href="#contact"
        className="text-sm px-4 py-1.5 rounded-full transition-all hover:opacity-70"
        style={{
          color: "var(--text-primary)",
          border: "1px solid var(--text-primary)",
          fontFamily: "var(--font-sans)",
        }}
      >
        Contact ↗
      </a>
    </nav>
  );
}
