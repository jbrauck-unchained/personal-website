export default function Projects() {
  const otherProjects = [
    {
      title: "BitLancaster",
      description: "Lancaster's Bitcoin and BitDevs hybrid monthly meetup website. Forked from BitDevsNYC to create a local community hub for Bitcoin developers and enthusiasts.",
      tech: ["HTML", "Jekyll", "GitHub Pages"],
      github: "https://github.com/jbrauck-unchained/BitLancaster",
      category: "Bitcoin",
    },
    {
      title: "Labor Notifications",
      description: "Python scripting project to send periodic notifications during active labor. Creative problem-solving for a very specific use case.",
      tech: ["Python", "Notifications", "Automation"],
      github: "https://github.com/jbrauck-unchained/labor-notifs",
      category: "Tools",
    },
    {
      title: "Caravan Contributions",
      description: "Contributions to Caravan, Unchained's multisig coordinator. Working with TypeScript and Bitcoin wallet infrastructure.",
      tech: ["TypeScript", "Bitcoin", "Multisig"],
      github: "https://github.com/jbrauck-unchained/caravan",
      category: "Bitcoin",
    },
    {
      title: "Umbrel App Store",
      description: "Contributions to Umbrel's app ecosystem, making Bitcoin and self-hosted applications more accessible.",
      tech: ["Docker", "YAML", "Apps"],
      github: "https://github.com/jbrauck-unchained/umbrel-apps",
      category: "Bitcoin",
    },
    {
      title: "RSS Kindle",
      description: "Python tool for converting RSS feeds into Kindle-friendly formats for distraction-free reading.",
      tech: ["Python", "RSS", "E-books"],
      github: "https://github.com/jbrauck-unchained/rss-kindle",
      category: "Tools",
    },
    {
      title: "Logseq Automation",
      description: "Python scripts for automating and enhancing Logseq workflows and knowledge management.",
      tech: ["Python", "Automation", "Knowledge Management"],
      github: "https://github.com/jbrauck-unchained/logseq",
      category: "Tools",
    },
  ];

  return (
    <section className="section-padding">
      <div className="divider" />

      <div className="container-width">
        <h2 className="mb-3">
          More Work
        </h2>
        <p className="text-muted mb-12">
          Additional projects spanning Bitcoin tools, automation, and developer utilities
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <article key={project.title} className="card card-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[length:var(--text-lg)]">{project.title}</h3>
                <span className="badge flex-shrink-0">
                  {project.category}
                </span>
              </div>

              <p className="mb-4 text-[length:var(--text-sm)]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[length:var(--text-xs)] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[length:var(--text-sm)] font-medium link"
              >
                View Repository →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/jbrauck-unchained?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
