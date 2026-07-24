const chapters = [
  {
    number: "01",
    period: "Apr 2022 — Jun 2023",
    title: "QA support",
    role: "QA Support Engineer",
    body: "I started in QA support, working through bugs, acceptance testing, and client-facing product issues.",
    scope: ["QA support", "Acceptance testing", "Product bugs"],
  },
  {
    number: "02",
    period: "Jun 2023 — Jul 2024",
    title: "Quality and releases",
    role: "QA Engineer",
    body: "I moved into QA engineering and worked on release management, test infrastructure, and Playwright.",
    scope: ["Release management", "Test infrastructure", "Playwright"],
  },
  {
    number: "03",
    period: "Jul 2024 — May 2025",
    title: "Signing Stack",
    role: "Associate Product Manager",
    body: "I led work on Signing Stack that took daily signature capacity from about 50 to thousands. After that, I moved to mobile.",
    scope: ["Signing operations", "Internal tools", "Capacity"],
  },
  {
    number: "04",
    period: "Jun 2025 — Apr 2026",
    title: "Native mobile",
    role: "Product Manager",
    body: "I led native iOS and Android product work. We launched Android, added vault spending on iOS, and built cross-platform release systems.",
    scope: ["Android launch", "iOS vault spending", "Mobile releases"],
  },
  {
    number: "05",
    period: "May 2026 — Now",
    title: "The client journey",
    role: "Senior Product Manager",
    body: "I now work across iOS, Android, and web on the path from a first visit through becoming an active client.",
    scope: [
      "Onboarding",
      "Identity",
      "Payments",
      "Referrals",
      "Transactional email",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="chapters"
      className="section"
      aria-labelledby="chapters-title"
    >
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-kicker">01 / CHAPTERS</p>
          <h2 id="chapters-title" className="section-title">
            My work so far
          </h2>
          <p className="section-intro">
            Five roles at Unchained from 2022 to now.
          </p>
        </div>

        <div className="chapter-rows">
          {chapters.map((chapter) => (
            <article className="chapter-row" key={chapter.number}>
              <div className="chapter-meta">
                <span className="chapter-index">{chapter.number}</span>
                <time>{chapter.period}</time>
              </div>

              <div className="chapter-copy">
                <h3>{chapter.title}</h3>
                <p className="chapter-role">{chapter.role}</p>
                <p className="chapter-body">{chapter.body}</p>
              </div>

              <ul className="chapter-scope" aria-label="Work included">
                {chapter.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
