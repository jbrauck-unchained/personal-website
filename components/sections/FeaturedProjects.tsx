export default function FeaturedProjects() {
  const projects = [
    {
      title: "Bitcoin Miner",
      description: "Interactive web application demonstrating SHA256 hashing and Bitcoin mining difficulty adjustment. Built as an educational tool to help people understand proof-of-work consensus at a fundamental level.",
      tech: ["JavaScript", "Web Crypto API", "SHA256"],
      github: "https://github.com/jbrauck-unchained/bitcoin-miner",
      demo: "https://jbrauck-unchained.github.io/bitcoin-miner/",
      highlights: [
        "Real-time SHA256 hashing visualization",
        "Adjustable mining difficulty",
        "Educational proof-of-work demonstration",
        "Browser-based, no installation required",
      ],
    },
    {
      title: "Sportstr",
      description: "Python-based RSS feed aggregator that automatically posts sports news headlines to Nostr relays. Features intelligent duplicate detection to prevent spam and supports multiple free US sports news platforms.",
      tech: ["Python", "Nostr Protocol", "RSS", "Duplicate Detection"],
      github: "https://github.com/jbrauck-unchained/sportstr",
      highlights: [
        "Automated RSS-to-Nostr bridge",
        "Multi-platform sports news aggregation",
        "Smart duplicate detection algorithm",
        "Decentralized social media integration",
      ],
    },
    {
      title: "Bitcoin Voice Price",
      description: "Voice-activated Bitcoin price checker that integrates with Mempool running on Umbrel. A practical tool demonstrating IoT integration with Bitcoin infrastructure on local networks.",
      tech: ["JavaScript", "Voice Recognition API", "Mempool Integration"],
      github: "https://github.com/jbrauck-unchained/bitcoin-voice-price",
      highlights: [
        "Voice-activated price queries",
        "Local Mempool integration",
        "Umbrel network compatibility",
        "Hands-free Bitcoin price checking",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="divider" />

      <div className="w-full max-w-7xl mx-auto">
        <h2 className="mb-4">
          Projects
        </h2>
        <p className="text-muted mb-12">
          Bitcoin technology, developer tools, and educational applications
        </p>

        <div className="space-y-12">
          {projects.map((project) => (
            <article key={project.title} className="border-accent pb-8">
              <h3 className="mb-3">{project.title}</h3>

              <p className="mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-[length:var(--text-sm)] text-muted uppercase tracking-wider mb-2">
                  Key Features
                </p>
                <ul className="space-y-1 text-[length:var(--text-sm)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <span className="text-[var(--accent)] mr-2">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[length:var(--text-xs)] px-2 py-1 border border-[var(--border)] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[length:var(--text-sm)] font-medium hover:text-[var(--accent)] transition-colors"
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[length:var(--text-sm)] font-medium hover:text-[var(--accent)] transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
