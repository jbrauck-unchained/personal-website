const principles = [
  {
    title: "Product delivery",
    body: "I map the full client flow, write requirements, work through tradeoffs, test builds, and stay involved through release.",
  },
  {
    title: "Agentic triage",
    body: "I built Codex agents that scan and triage every incoming bug. When a fix is high confidence, the agent puts up a code change and tags the relevant engineer to review it. Another agent evaluates every feature request.",
  },
  {
    title: "Product context",
    body: "I built an operating system for myself and my product team that connects meeting recordings, Slack, Google Drive, historical product knowledge, and the current codebase. I use that context when I write PRDs.",
  },
];

const platforms = [
  "iOS",
  "Android",
  "Web",
  "Codex",
  "Slack",
  "Google Drive",
  "Swift",
  "Kotlin",
];

export default function About() {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-title">
      <div className="site-shell">
        <p className="section-kicker">02 / APPROACH</p>
        <h2 id="approach-title" className="section-title">
          How I work
        </h2>
        <p className="section-intro">
          My work usually involves clients, design, engineering, operations,
          compliance, and marketing. AI is part of how I handle that scope day
          to day.
        </p>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span className="principle-index">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
              <div className="route-segment" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="platform-block">
          <div className="platform-rail" aria-label="Platform fluency">
            <div className="platform-label">Working stack</div>
            {platforms.map((platform) => (
              <div className="platform-item" key={platform}>
                {platform}
              </div>
            ))}
          </div>
          <p className="platform-note">
            I automate repeatable work so I can cover more ground without
            giving up context or review.
          </p>
        </div>
      </div>
    </section>
  );
}
