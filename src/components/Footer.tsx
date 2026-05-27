"use client";

import AnimateIn from "./AnimateIn";

const socials = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Read.cv", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-6 pb-8">
      <AnimateIn>
        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--border)",
            marginBottom: "24px",
          }}
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Copyright */}
          <p
            style={{
              fontSize: "12px",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
            }}
          >
            © {new Date().getFullYear()} Cee
          </p>

          {/* Social links */}
          <nav className="flex items-center gap-1 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  borderRadius: "var(--radius-btn)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  transition:
                    "border-color 180ms var(--ease-out-quart), color 180ms var(--ease-out-quart)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--text-secondary)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </AnimateIn>
    </footer>
  );
}
