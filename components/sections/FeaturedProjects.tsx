"use client";

import { useEffect, useRef, useState } from "react";

export default function FeaturedProjects() {
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
    <section id="featured-projects" className="py-28 px-6 lg:px-12 bg-[var(--bg-tertiary)]" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-6">
            <h2 className="mb-3">Featured Projects</h2>
          </div>
          <p className="text-[var(--text-muted)] mb-20 max-w-2xl text-lg">
            Highlighted work showcasing Bitcoin technology, developer tools, and educational applications
          </p>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${index * 0.2}s`
                }}
              >
                {/* Content side - alternating */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                  <div className="mb-6">
                    <h3 className="text-4xl font-black mb-4 uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-primary)] text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 border-l-4 border-[var(--accent-primary)] pl-4">
                    <div className="text-xs uppercase tracking-widest font-bold text-[var(--text-muted)] mb-3">
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-[var(--text-primary)]">
                          <div className="w-2 h-2 bg-[var(--accent-primary)] mr-3 mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[var(--bg-primary)] border-brutalist-2 text-xs font-bold uppercase tracking-wider font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-brutalist font-bold uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 transition-transform text-sm"
                    >
                      GitHub ▸
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-secondary)] border-brutalist font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual side - brutalist card, alternating position */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div
                    className={`border-brutalist bg-[var(--bg-secondary)] p-8 hard-shadow-lg ${
                      index % 2 === 0 ? "rotate-1" : "-rotate-1"
                    } hover:rotate-0 transition-transform`}
                  >
                    <div className="aspect-video bg-[var(--accent-primary)] flex items-center justify-center border-brutalist-2 border-[var(--bg-primary)]">
                      <div className="text-[var(--bg-secondary)] font-black text-6xl font-mono">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="mt-4 text-[var(--text-secondary)] font-mono text-xs uppercase tracking-wider text-center">
                      Project #{String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
