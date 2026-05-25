const skills = [
  "Product Design",
  "UX Research",
  "UI Design",
  "Design Systems",
  "Prototyping",
  "Figma",
  "Motion Design",
  "Brand Identity",
];

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

const education = [
  {
    degree: "Bachelor of Design",
    school: "University Name",
    year: "2018",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 max-w-5xl mx-auto w-full py-24">
      <div
        className="h-px mb-24"
        style={{ backgroundColor: "var(--border)" }}
      />

      {/* About intro */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2
            className="text-xs uppercase tracking-widest mb-8"
            style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
          >
            About
          </h2>
          <p
            className="text-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontWeight: 400 }}
          >
            I believe good design is quiet. It solves real problems without
            drawing attention to itself.
          </p>
        </div>
        <div>
          <p className="text-sm leading-loose mb-6" style={{ color: "var(--text-secondary)" }}>
            I'm a product designer based in [City], focused on creating digital
            experiences that feel human. With [X] years of experience across
            startups and established companies, I've learned that the best design
            emerges from deep understanding of people and context.
          </p>
          <p className="text-sm leading-loose" style={{ color: "var(--text-secondary)" }}>
            Outside of work, I [personal interests that show personality].
          </p>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-20">
        <h3
          className="text-xs uppercase tracking-widest mb-10"
          style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
        >
          Experience
        </h3>
        <div className="space-y-0">
          {experience.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[200px_1fr] gap-4 py-7"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                  {item.period}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {item.company}
                </p>
              </div>
              <div>
                <p
                  className="text-base mb-1"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)" }}
                >
                  {item.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3
          className="text-xs uppercase tracking-widest mb-10"
          style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
        >
          Education
        </h3>
        {education.map((item, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[200px_1fr] gap-4 py-7"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {item.year}
              </p>
            </div>
            <div>
              <p
                className="text-base mb-1"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)" }}
              >
                {item.degree}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.school}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
