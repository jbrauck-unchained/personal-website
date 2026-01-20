"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Bitcoin Miner",
      description: "Interactive web application demonstrating SHA256 hashing and Bitcoin mining difficulty adjustment. Built as an educational tool to help people understand proof-of-work consensus at a fundamental level.",
      tech: ["JavaScript", "Web Crypto API", "SHA256"],
      github: "https://github.com/jbrauck-unchained/bitcoin-miner",
      demo: "https://jbrauck-unchained.github.io/bitcoin-miner/",
      image: "/images/projects/bitcoin-miner.png",
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
      image: "/images/projects/sportstr.png",
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
      image: "/images/projects/bitcoin-voice-price.png",
      highlights: [
        "Voice-activated price queries",
        "Local Mempool integration",
        "Umbrel network compatibility",
        "Hands-free Bitcoin price checking",
      ],
    },
  ];

  return (
    <section id="featured-projects" className="py-20 px-6 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Highlighted work showcasing Bitcoin technology, developer tools, and educational applications
          </p>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Project Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                          <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Preview */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                    <div className="relative w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // If image fails to load, hide it and show placeholder
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback placeholder if image doesn't exist */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm">
                        <svg className="w-24 h-24 mb-4 opacity-50 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
