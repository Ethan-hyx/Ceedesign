const projects = [
  {
    id: "01",
    title: "Project Title One",
    year: "2024",
    category: "Product Design",
    description: "A brief description of the project and the problem it solves. What was your role and what impact did it have?",
    tags: ["UX Research", "UI Design", "Prototyping"],
    cover: null,
  },
  {
    id: "02",
    title: "Project Title Two",
    year: "2024",
    category: "Brand & Identity",
    description: "A brief description of the project and the problem it solves. What was your role and what impact did it have?",
    tags: ["Branding", "Visual Design"],
    cover: null,
  },
  {
    id: "03",
    title: "Project Title Three",
    year: "2023",
    category: "Design System",
    description: "A brief description of the project and the problem it solves. What was your role and what impact did it have?",
    tags: ["Design Systems", "Components", "Documentation"],
    cover: null,
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 max-w-5xl mx-auto w-full py-24">
      {/* Section header */}
      <div className="flex items-baseline justify-between mb-14">
        <h2
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
        >
          Selected Work
        </h2>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {projects.length} projects
        </span>
      </div>

      {/* Project list */}
      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.005]"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
          >
            {/* Cover image placeholder */}
            <div
              className="w-full aspect-[16/7] flex items-center justify-center"
              style={{ backgroundColor: "var(--border)" }}
            >
              {project.cover ? (
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Cover image
                </span>
              )}
            </div>

            {/* Project info */}
            <div className="p-7 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {project.id}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {project.category}
                  </span>
                </div>
                <h3
                  className="text-xl mb-2 transition-opacity group-hover:opacity-70"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {project.year}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--bg)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
