const socials = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Read.cv", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 max-w-5xl mx-auto w-full py-24">
      <div className="h-px mb-24" style={{ backgroundColor: "var(--border)" }} />

      {/* CTA */}
      <div className="mb-20">
        <h2
          className="text-xs uppercase tracking-widest mb-8"
          style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
        >
          Get in touch
        </h2>
        <p
          className="text-4xl md:text-6xl leading-[1.1] max-w-2xl mb-10"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontWeight: 400 }}
        >
          Have a project in mind? Let's talk.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 text-base underline underline-offset-4 transition-opacity hover:opacity-60"
          style={{ color: "var(--text-primary)" }}
        >
          hello@example.com ↗
        </a>
      </div>

      {/* Bottom row */}
      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Cee. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-xs transition-opacity hover:opacity-60"
              style={{ color: "var(--text-secondary)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
