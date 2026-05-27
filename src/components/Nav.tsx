"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "17px",
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          Cee
        </Link>

        {/* Availability badge */}
        <div className="flex items-center gap-2">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-btn)",
              padding: "5px 12px",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.01em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#22C55E",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Available for work
          </span>
        </div>
      </div>
    </nav>
  );
}
