const projects = [
  {
    title: "Bitcoin Miner",
    description: "A browser tool for understanding proof of work.",
    href: "https://jbrauck-unchained.github.io/bitcoin-miner/",
  },
  {
    title: "Sportstr",
    description: "Sports headlines posted to Nostr.",
    href: "https://github.com/jbrauck-unchained/sportstr",
  },
  {
    title: "Caravan",
    description: "Contributions to a stateless multisig coordinator.",
    href: "https://github.com/jbrauck-unchained/caravan",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="site-shell projects-grid">
        <h2 id="projects-title" className="projects-title">
          Side projects
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project-row"
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
