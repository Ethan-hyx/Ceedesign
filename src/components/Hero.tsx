export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-16 pb-20 max-w-2xl">
      {/* Avatar — squircle shape */}
      <div
        className="mb-6 w-[72px] h-[72px] overflow-hidden"
        style={{
          borderRadius: "22px",
          backgroundColor: "var(--border)",
          flexShrink: 0,
        }}
      >
        {/* Replace src with your photo */}
        <div className="w-full h-full" style={{ backgroundColor: "#D5CDBF" }} />
      </div>

      {/* Name + location */}
      <h1
        className="text-base mb-0.5"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)", fontWeight: 500 }}
      >
        Your Name
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
        City, Country
      </p>

      {/* Bio — monospace */}
      <p
        className="text-sm leading-[1.8] mb-8 max-w-lg"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
      >
        I design and build digital products with a focus on calm interfaces,
        thoughtful motion, and visual restraint. Brief intro about your background.
      </p>

      {/* Simple text links */}
      <div className="flex items-center gap-5">
        <a
          href="#contact"
          className="text-sm transition-opacity hover:opacity-50"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Contact
        </a>
        <span style={{ color: "var(--border)" }}>·</span>
        <a
          href="/resume.pdf"
          className="text-sm transition-opacity hover:opacity-50"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
        >
          Resume
        </a>
      </div>
    </section>
  );
}
