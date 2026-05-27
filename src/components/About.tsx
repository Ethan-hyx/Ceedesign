import AnimateIn from "./AnimateIn";

const experience = [
  {
    role: "Senior Product Designer",
    company: "Company Name",
    period: "2022 — Present",
    description: "Brief description of responsibilities and achievements.",
  },
  {
    role: "Product Designer",
    company: "Company Name",
    period: "2020 — 2022",
    description: "Brief description of responsibilities and achievements.",
  },
  {
    role: "UI/UX Designer",
    company: "Company Name",
    period: "2018 — 2020",
    description: "Brief description of responsibilities and achievements.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-12">
      <AnimateIn>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-sans)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Experience
        </p>
      </AnimateIn>

      {/* Single outer card containing all entries */}
      <AnimateIn delay={40}>
        <div
          style={{
            backgroundColor: "var(--surface)",
            borderRadius: "var(--radius-card)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            boxShadow: "var(--shadow-inner)",
          }}
        >
          {experience.map((item, i) => (
            <div
              key={i}
              className="px-5 py-4"
              style={{
                borderBottom:
                  i < experience.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.role}
                </p>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    paddingTop: "2px",
                  }}
                >
                  {item.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                {item.company}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.6,
                  opacity: 0.85,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
