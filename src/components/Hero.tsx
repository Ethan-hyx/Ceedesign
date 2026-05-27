"use client";

const SQUIRCLE_80 =
  "path('M40 0 C59.04 0 67.52 0 73.76 6.24 C80 12.48 80 20.96 80 40 C80 59.04 80 67.52 73.76 73.76 C67.52 80 59.04 80 40 80 C20.96 80 12.48 80 6.24 73.76 C0 67.52 0 59.04 0 40 C0 20.96 0 12.48 6.24 6.24 C12.48 0 20.96 0 40 0 Z')";

const stats = [
  { label: "5+ yrs", sub: "Experience" },
  { label: "20+", sub: "Projects" },
  { label: "Design", sub: "& Dev" },
];

export default function Hero() {
  return (
    <section className="px-6 pt-10 pb-10 animate-fade-up">
      {/* Avatar with blue glow */}
      <div
        className="mb-7"
        style={{
          width: 80,
          height: 80,
          borderRadius: "22px",
          boxShadow: "var(--shadow-glow)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            clipPath: SQUIRCLE_80,
            backgroundColor: "#DBEAFE",
          }}
        />
      </div>

      {/* Name & location */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "var(--text-primary)",
          fontFamily: "var(--font-sans)",
          marginBottom: "4px",
        }}
      >
        Your Name
      </h1>
      <p
        style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-sans)",
          marginBottom: "20px",
        }}
      >
        City, Country
      </p>

      {/* Bio */}
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#374151",
          fontFamily: "var(--font-sans)",
          maxWidth: "420px",
          marginBottom: "24px",
        }}
      >
        I design and build digital products with a focus on calm interfaces,
        thoughtful motion, and visual restraint.
      </p>

      {/* Stat chips */}
      <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: "32px" }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 18px",
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              minWidth: "80px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "var(--font-sans)",
                letterSpacing: "-0.02em",
              }}
            >
              {s.label}
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                marginTop: "1px",
              }}
            >
              {s.sub}
            </span>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Primary — blue capsule */}
        <a
          href="#work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "56px",
            padding: "0 28px",
            backgroundColor: "var(--accent)",
            color: "#FFFFFF",
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: "var(--font-sans)",
            borderRadius: "var(--radius-btn)",
            boxShadow: "var(--shadow-glow)",
            transition: "opacity 200ms var(--ease-out-quart), transform 200ms var(--ease-out-quart)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View Work
        </a>

        {/* Secondary — white capsule */}
        <a
          href="/resume.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "56px",
            padding: "0 28px",
            backgroundColor: "var(--surface)",
            color: "var(--text-primary)",
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "var(--font-sans)",
            borderRadius: "var(--radius-btn)",
            border: "1.5px solid var(--border)",
            transition: "border-color 200ms var(--ease-out-quart)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9CA3AF")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          Resume ↗
        </a>
      </div>
    </section>
  );
}
