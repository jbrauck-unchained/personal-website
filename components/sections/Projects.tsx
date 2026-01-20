"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Other Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Additional work spanning Bitcoin tools, automation, and developer utilities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-bitcoin-100 dark:bg-bitcoin-900 rounded-lg">
                    <svg className="w-6 h-6 text-bitcoin-500 dark:text-bitcoin-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-bitcoin-500 dark:group-hover:text-bitcoin-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-bitcoin-500 dark:text-bitcoin-400 hover:underline font-medium"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Repository
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/jbrauck-unchained?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View All Repositories on GitHub
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
