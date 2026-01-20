export default function Experience() {
  const experiences = [
    {
      title: "Product Manager",
      company: "Unchained",
      period: "June 2025 - Present",
      location: "Remote",
      achievements: [
        "Product lead for native iOS (Swift) and Android (Kotlin) applications serving thousands of Bitcoin self-custody users",
        "Launched Android app in November 2025, expanding Unchained's mobile reach to the Android ecosystem",
        "Shipped vault spending feature enabling users to send Bitcoin from multisig vaults across iOS and Android",
        "Launched modular feature flag system across web, iOS, and Android platforms for coordinated feature rollouts",
        "Rolled out Braze in-app messaging across all three platforms to improve user engagement and communication",
        "Leading AI initiatives including Product Context Repository leveraging AI agents to reference documentation, stakeholder requests, and client interviews for PRD development",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Unchained",
      period: "July 2024 - June 2025",
      location: "Remote",
      achievements: [
        "Led enterprise key management team building Signing Stack 2.0 with signature authorization gateway platform and new signing software rollout",
        "Expanded daily signature capacity from ~50 to thousands, enabling institutional-scale Bitcoin custody operations",
        "Authored comprehensive technical documentation and onboarded all operations teams to new signing infrastructure",
        "Built disaster recovery variants of signing software ensuring business continuity and system resilience",
        "Wrote PRDs for 'Capacity Killer' initiative that relieved 40 hours per week of operational burden through automation",
        "Joined Mobile team full-time in February 2025, transitioning focus to iOS and Android app development",
      ],
    },
    {
      title: "QA Engineer",
      company: "Unchained",
      period: "June 2023 - July 2024",
      location: "Remote",
      achievements: [
        "Served in release manager capacity, managing production releases via Helm charts for Kubernetes deployments",
        "Built Test Bridge API to generate testing data in development environments, accelerating QA workflows",
        "Established end-to-end testing infrastructure, initially in Cypress then migrating to Playwright for improved reliability",
        "Collaborated with engineering teams on release planning and deployment strategies",
      ],
    },
    {
      title: "QA Support Engineer",
      company: "Unchained",
      period: "April 2022 - June 2023",
      location: "Remote",
      achievements: [
        "Led company-wide migration from Jira to ClickUp, streamlining bug tracking and project management workflows",
        "Built Flask API webhook integration connecting GitHub activity to ClickUp, automatically syncing tickets with git commits and PRs",
        "Performed comprehensive manual acceptance and regression testing across web applications and Bitcoin wallet integrations",
        "Established QA best practices and documentation for the growing engineering team",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="divider" />

      <div className="container-width">
        <h2 className="mb-3">
          Experience
        </h2>
        <p className="text-muted mb-12">
          From QA Support Engineer to Product Manager—nearly 4 years of growth leveraging technical depth to ship impactful products
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article key={index} className="card">
              <div className="mb-4">
                <span className="badge">
                  {exp.period}
                </span>
              </div>

              <h3 className="mb-2">
                {exp.title}
              </h3>

              <p className="text-[length:var(--text-lg)] mb-1">
                {exp.company}
              </p>

              <p className="text-[length:var(--text-sm)] text-muted mb-6">
                {exp.location}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-[var(--accent)] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card card-sm text-center">
            <div className="text-[length:var(--text-2xl)] font-bold mb-2">4 Roles</div>
            <div className="text-[length:var(--text-sm)] text-muted">QA Support → QA → APM → PM in Under 4 Years</div>
          </div>
          <div className="card card-sm text-center">
            <div className="text-[length:var(--text-2xl)] font-bold mb-2">50 → 1000s</div>
            <div className="text-[length:var(--text-sm)] text-muted">Daily Signature Capacity Scaled</div>
          </div>
          <div className="card card-sm text-center">
            <div className="text-[length:var(--text-2xl)] font-bold mb-2">40 hrs/week</div>
            <div className="text-[length:var(--text-sm)] text-muted">Operational Capacity Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}
