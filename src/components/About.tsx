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
    <section id="about" className="px-6 md:px-10 pb-24 max-w-2xl">
      <p
        className="text-xs mb-6 tracking-wide"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
      >
        Experience
      </p>

      <div className="space-y-1">
        {experience.map((item, i) => (
          <div
            key={i}
            className="py-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <p
                className="text-sm"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)", fontWeight: 500 }}
              >
                {item.role}
              </p>
              <span
                className="text-xs shrink-0"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
              >
                {item.period}
              </span>
            </div>
            <p
              className="text-xs mb-1"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
            >
              {item.company}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
            >
              {item.description}
            </p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
