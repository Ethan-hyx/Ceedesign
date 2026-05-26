export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-16 pb-20 max-w-2xl">
      <div
        className="mb-6 w-[72px] h-[72px] overflow-hidden animate-fade-up"
        style={{
          borderRadius: "22px",
          backgroundColor: "var(--border)",
          flexShrink: 0,
        }}
      >
        <div className="w-full h-full" style={{ backgroundColor: "#D5CDBF" }} />
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
        <h1
          className="text-base mb-0.5"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)", fontWeight: 500 }}
        >
          Your Name
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
          City, Country
        </p>
      </div>

      <p
        className="text-sm leading-[1.8] mb-8 max-w-lg animate-fade-up"
        style={{
          color: "var(--text-primary)",
          fontFamily: "var(--font-mono)",
          animationDelay: "160ms",
        }}
      >
        I design and build digital products with a focus on calm interfaces,
        thoughtful motion, and visual restraint. Brief intro about your background.
      </p>

      <div
        className="flex items-center gap-5 animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <a
          href="#contact"
          className="text-sm nav-link"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Contact
        </a>
        <span style={{ color: "var(--border)" }}>·</span>
        <a
          href="/resume.pdf"
          className="text-sm nav-link"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Resume
        </a>
      </div>
    </section>
  );
}
