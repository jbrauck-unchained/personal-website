"use client";

import { useEffect, useRef, useState } from "react";

export default function Experience() {
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

  const experiences = [
    {
      title: "Product Manager",
      company: "Unchained",
      period: "June 2025 - Present",
      location: "Remote",
      achievements: [
        {
          text: "Product lead for native iOS (Swift) and Android (Kotlin) applications serving thousands of Bitcoin self-custody users",
          highlight: true,
        },
        {
          text: "Launched Android app in November 2025, expanding Unchained's mobile reach to the Android ecosystem",
          highlight: true,
        },
        {
          text: "Shipped vault spending feature enabling users to send Bitcoin from multisig vaults across iOS and Android",
          highlight: true,
        },
        {
          text: "Launched modular feature flag system across web, iOS, and Android platforms for coordinated feature rollouts",
          highlight: false,
        },
        {
          text: "Rolled out Braze in-app messaging across all three platforms to improve user engagement and communication",
          highlight: false,
        },
        {
          text: "Leading AI initiatives including Product Context Repository leveraging AI agents to reference documentation, stakeholder requests, and client interviews for PRD development",
          highlight: true,
        },
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Unchained",
      period: "July 2024 - June 2025",
      location: "Remote",
      achievements: [
        {
          text: "Led enterprise key management team building Signing Stack 2.0 with signature authorization gateway platform and new signing software rollout",
          highlight: true,
        },
        {
          text: "Expanded daily signature capacity from ~50 to thousands, enabling institutional-scale Bitcoin custody operations",
          highlight: true,
        },
        {
          text: "Authored comprehensive technical documentation and onboarded all operations teams to new signing infrastructure",
          highlight: false,
        },
        {
          text: "Built disaster recovery variants of signing software ensuring business continuity and system resilience",
          highlight: false,
        },
        {
          text: "Wrote PRDs for 'Capacity Killer' initiative that relieved 40 hours per week of operational burden through automation",
          highlight: true,
        },
        {
          text: "Joined Mobile team full-time in February 2025, transitioning focus to iOS and Android app development",
          highlight: false,
        },
      ],
    },
    {
      title: "QA Engineer",
      company: "Unchained",
      period: "June 2023 - July 2024",
      location: "Remote",
      achievements: [
        {
          text: "Served in release manager capacity, managing production releases via Helm charts for Kubernetes deployments",
          highlight: false,
        },
        {
          text: "Built Test Bridge API to generate testing data in development environments, accelerating QA workflows",
          highlight: false,
        },
        {
          text: "Established end-to-end testing infrastructure, initially in Cypress then migrating to Playwright for improved reliability",
          highlight: false,
        },
        {
          text: "Collaborated with engineering teams on release planning and deployment strategies",
          highlight: false,
        },
      ],
    },
    {
      title: "QA Support Engineer",
      company: "Unchained",
      period: "April 2022 - June 2023",
      location: "Remote",
      achievements: [
        {
          text: "Led company-wide migration from Jira to ClickUp, streamlining bug tracking and project management workflows",
          highlight: false,
        },
        {
          text: "Built Flask API webhook integration connecting GitHub activity to ClickUp, automatically syncing tickets with git commits and PRs",
          highlight: false,
        },
        {
          text: "Performed comprehensive manual acceptance and regression testing across web applications and Bitcoin wallet integrations",
          highlight: false,
        },
        {
          text: "Established QA best practices and documentation for the growing engineering team",
          highlight: false,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 lg:px-12 bg-[var(--bg-tertiary)]" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-6">
            <h2 className="mb-3">Experience</h2>
          </div>
          <p className="text-[var(--text-muted)] mb-20 max-w-2xl text-lg">
            From QA Support Engineer to Product Manager—nearly 4 years of growth leveraging technical depth to ship impactful products
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - BRUTALIST */}
            <div className="absolute left-2 top-0 bottom-0 w-1 bg-[var(--border-color)]"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-16 pl-12"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                  transition: `all 0.6s ease-out ${index * 0.15}s`
                }}
              >
                {/* Timeline marker - SQUARE, not circle */}
                <div className="absolute left-0 top-0 w-5 h-5 bg-[var(--accent-primary)] border-brutalist-2 z-10"></div>

                <div className="bg-[var(--bg-primary)] p-6 border-brutalist hard-shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform">
                  <div className="flex flex-col items-start">
                    <span className="inline-block px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs font-bold uppercase tracking-wider mb-3 font-mono">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-[var(--accent-primary)] font-bold mb-1 uppercase tracking-wide">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mb-6 uppercase tracking-wider font-mono">
                      {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex items-start ${
                          achievement.highlight
                            ? "text-[var(--text-primary)] font-semibold"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        <div className={`w-2 h-2 flex-shrink-0 mt-2 mr-3 ${
                          achievement.highlight
                            ? "bg-[var(--accent-primary)]"
                            : "bg-[var(--border-color)]"
                        }`} />
                        <span>{achievement.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Key Metrics - BRUTALIST CARDS */}
          <div
            className="mt-20 grid md:grid-cols-3 gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease-out 0.6s"
            }}
          >
            <div className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] p-8 border-brutalist hard-shadow text-center">
              <div className="text-5xl font-black mb-3 text-[var(--accent-primary)]">4</div>
              <div className="text-sm font-bold uppercase tracking-wider">Roles in Under 4 Years</div>
              <div className="text-xs mt-2 font-mono opacity-80">QA Support → PM</div>
            </div>
            <div className="bg-[var(--accent-primary)] text-[var(--bg-secondary)] p-8 border-brutalist hard-shadow text-center">
              <div className="text-5xl font-black mb-3">50→1000s</div>
              <div className="text-sm font-bold uppercase tracking-wider">Daily Signatures</div>
              <div className="text-xs mt-2 font-mono opacity-80">Capacity Scaled</div>
            </div>
            <div className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] p-8 border-brutalist hard-shadow text-center">
              <div className="text-5xl font-black mb-3 text-[var(--accent-primary)]">40</div>
              <div className="text-sm font-bold uppercase tracking-wider">hrs/week Saved</div>
              <div className="text-xs mt-2 font-mono opacity-80">Via Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
