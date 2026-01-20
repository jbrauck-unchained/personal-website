"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
    <section id="projects" className="py-28 px-6 lg:px-12 bg-[var(--bg-primary)]" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-6">
            <h2 className="mb-2">Other Projects</h2>
          </div>
          <p className="text-[var(--text-muted)] mb-16 max-w-2xl text-lg">
            Additional work spanning Bitcoin tools, automation, and developer utilities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="border-brutalist bg-[var(--bg-tertiary)] p-6 hover:hard-shadow-sm hover:-translate-y-1 transition-all group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 bg-[var(--accent-primary)] text-[var(--bg-secondary)] text-xs font-bold uppercase tracking-wider font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-black mb-3 uppercase tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[var(--text-muted)] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border-brutalist-2 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-bold uppercase text-xs tracking-wider"
                >
                  View Repo ▸
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/jbrauck-unchained?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-brutalist font-bold uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              All Repositories ▸
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
