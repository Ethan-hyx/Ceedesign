export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 px-6 md:px-10 max-w-5xl mx-auto w-full pt-32">
      {/* Status badge */}
      <div className="mb-12">
        <span
          className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "var(--bg-card)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </span>
      </div>

      {/* Main heading */}
      <h1
        className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-3xl"
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--text-primary)",
          fontWeight: 400,
        }}
      >
        Designer crafting{" "}
        <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
          calm
        </span>{" "}
        & intentional experiences
      </h1>

      {/* Description + scroll cue row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <p
          className="max-w-md text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Hi, I'm Cee — a product designer with a passion for interfaces
          that feel effortless. I care deeply about typography, whitespace,
          and the details that make people feel at home.
        </p>

        <div className="flex items-center gap-6 shrink-0">
          <a
            href="#work"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
            style={{ color: "var(--text-secondary)" }}
          >
            View work ↓
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 h-px" style={{ backgroundColor: "var(--border)" }} />
    </section>
  );
}
