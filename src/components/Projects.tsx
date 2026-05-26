import AnimateIn from "./AnimateIn";

const projects = [
  {
    id: 1,
    title: "Project Title One",
    year: "2025",
    description: "Brief one-line description of the project.",
    cover: null,
  },
  {
    id: 2,
    title: "Project Title Two",
    year: "2024",
    description: "Brief one-line description of the project.",
    cover: null,
  },
  {
    id: 3,
    title: "Project Title Three",
    year: "2024",
    description: "Brief one-line description of the project.",
    cover: null,
  },
  {
    id: 4,
    title: "Project Title Four",
    year: "2023",
    description: "Brief one-line description of the project.",
    cover: null,
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 pb-24 max-w-2xl">
      <AnimateIn>
        <p
          className="text-xs mb-6 tracking-wide"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
        >
          Projects
        </p>
      </AnimateIn>

      <div className="space-y-1">
        {projects.map((project, i) => (
          <AnimateIn key={project.id} delay={i * 60}>
            <article
              className="project-card group flex items-center gap-4 py-3 cursor-pointer"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div
                className="w-[52px] h-[52px] rounded-lg shrink-0 overflow-hidden"
                style={{ backgroundColor: "#DDD8CF" }}
              >
                {project.cover && (
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform 300ms var(--ease-out-quart)",
                    }}
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-sm underline underline-offset-2 decoration-[var(--border)] group-hover:decoration-current truncate"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    transition: "text-decoration-color 200ms var(--ease-out-quart)",
                  }}
                >
                  {project.title}
                </p>
                <p
                  className="text-xs mt-0.5 truncate"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
                >
                  {project.description}
                </p>
              </div>

              <span
                className="text-xs shrink-0"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  transition: "color 200ms var(--ease-out-quart)",
                }}
              >
                {project.year}
              </span>
            </article>
          </AnimateIn>
        ))}

        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
