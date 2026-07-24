const roles = [
  {
    period: "May 2026 — Now",
    title: "Senior Product Manager",
    description: "Own the full client journey across iOS, Android, and web.",
  },
  {
    period: "Jun 2025 — Apr 2026",
    title: "Product Manager",
    description:
      "Led native iOS and Android. Launched Android, vault spending on iOS, and cross-platform release systems.",
  },
  {
    period: "Jul 2024 — May 2025",
    title: "Associate Product Manager",
    description:
      "Led Signing Stack work that took daily signature capacity from about 50 to thousands. Then moved to mobile.",
  },
  {
    period: "Jun 2023 — Jul 2024",
    title: "QA Engineer",
    description: "Release management, test infrastructure, and Playwright.",
  },
  {
    period: "Apr 2022 — Jun 2023",
    title: "QA Support Engineer",
    description: "Bugs, acceptance testing, and the systems around them.",
  },
];

export default function Experience() {
  return (
    <section id="timeline" className="section" aria-labelledby="timeline-title">
      <div className="site-shell timeline-grid">
        <div className="timeline-title-wrap">
          <p className="section-kicker">03 / TIMELINE</p>
          <h2 id="timeline-title" className="section-title">
            The short version
          </h2>
          <span className="company-label">UNCHAINED</span>
        </div>

        <div className="timeline-list">
          {roles.map((role) => (
            <article className="timeline-entry" key={role.title}>
              <time>{role.period}</time>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
