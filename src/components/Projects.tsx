import AnimateIn from "./AnimateIn";

const projects = [
  {
    id: 1,
    title: "Project Title One",
    year: "2025",
    tag: "Product Design",
    description: "Brief one-line description of the project.",
    cover: null,
    iconColor: "#EFF6FF",
    iconSymbol: "◈",
  },
  {
    id: 2,
    title: "Project Title Two",
    year: "2024",
    tag: "Mobile App",
    description: "Brief one-line description of the project.",
    cover: null,
    iconColor: "#F0FDF4",
    iconSymbol: "◉",
  },
  {
    id: 3,
    title: "Project Title Three",
    year: "2024",
    tag: "Web",
    description: "Brief one-line description of the project.",
    cover: null,
    iconColor: "#FFF7ED",
    iconSymbol: "◆",
  },
  {
    id: 4,
    title: "Project Title Four",
    year: "2023",
    tag: "Branding",
    description: "Brief one-line description of the project.",
    cover: null,
    iconColor: "#FDF4FF",
    iconSymbol: "◇",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 pb-12">
      {/* Section label */}
      <AnimateIn>
        <div className="flex items-center justify-between mb-5">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
              textTransform: "uppercase",
            }}
          >
            Selected Work
          </p>
          <span
            style={{
              fontSize: "11px",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
            }}
          >
            {projects.length} projects
          </span>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((p, i) => (
          <AnimateIn key={p.id} delay={i * 60}>
            <article
              className="project-card cursor-pointer"
              style={{
                backgroundColor: "var(--surface)",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                boxShadow: "var(--shadow-inner)",
              }}
            >
              {/* Placeholder / cover area */}
              <div
                style={{
                  margin: "12px 12px 0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "128px",
                  backgroundColor: "var(--surface-2)",
                  border: p.cover ? "none" : "1.5px dashed var(--border-dashed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {p.cover ? (
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  /* Icon container — 圆角12px浅色方块 */
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "var(--radius-icon)",
                      backgroundColor: p.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    {p.iconSymbol}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-4 py-3.5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </p>
                  {/* Tag badge */}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "var(--accent)",
                      backgroundColor: "var(--accent-bg)",
                      borderRadius: "999px",
                      padding: "2px 8px",
                      fontFamily: "var(--font-sans)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    lineHeight: 1.5,
                    marginBottom: "8px",
                  }}
                >
                  {p.description}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    opacity: 0.7,
                  }}
                >
                  {p.year}
                </p>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
