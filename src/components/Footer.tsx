import AnimateIn from "./AnimateIn";

const socials = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Read.cv", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 pb-16 max-w-2xl">
      <AnimateIn>
        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
          >
            © {new Date().getFullYear()} Cee
          </p>

          <nav className="flex items-center gap-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs nav-link"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
                target="_blank"
                rel="noopener noreferrer"
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
