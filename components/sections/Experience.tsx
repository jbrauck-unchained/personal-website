"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          text: "Wrote PRDs for 'Capacity Killer' initiative that relieved 40 hours per month of operational burden through automation",
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
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            From QA Support Engineer to Product Manager—nearly 4 years of growth leveraging technical depth to ship impactful products
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-bitcoin-200 dark:bg-bitcoin-800"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-5 h-5 bg-bitcoin-500 dark:bg-bitcoin-400 rounded-full border-4 border-gray-50 dark:border-gray-900 z-10"></div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-start">
                    <span className="inline-block px-3 py-1 bg-bitcoin-100 dark:bg-bitcoin-900 text-bitcoin-700 dark:text-bitcoin-300 rounded-full text-sm font-medium mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-bitcoin-500 dark:text-bitcoin-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className={`flex items-start ${
                          achievement.highlight 
                            ? "text-gray-900 dark:text-white font-medium" 
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <svg 
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 mr-2 ${
                            achievement.highlight 
                              ? "text-bitcoin-500 dark:text-bitcoin-400" 
                              : "text-bitcoin-500 dark:text-bitcoin-500"
                          }`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{achievement.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Metrics/Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 border-4 border-bitcoin-500 p-6 rounded-lg text-center shadow-lg">
              <div className="text-4xl font-bold mb-2 text-bitcoin-600 dark:text-bitcoin-400">4 Roles</div>
              <div className="text-gray-700 dark:text-gray-300">QA Support → QA → APM → PM in Under 4 Years</div>
            </div>
            <div className="bg-white dark:bg-gray-800 border-4 border-orange-500 p-6 rounded-lg text-center shadow-lg">
              <div className="text-4xl font-bold mb-2 text-orange-600 dark:text-orange-400">50 → 1000s</div>
              <div className="text-gray-700 dark:text-gray-300">Daily Signature Capacity Scaled</div>
            </div>
            <div className="bg-white dark:bg-gray-800 border-4 border-bitcoin-500 p-6 rounded-lg text-center shadow-lg">
              <div className="text-4xl font-bold mb-2 text-bitcoin-600 dark:text-bitcoin-400">40 hrs/month</div>
              <div className="text-gray-700 dark:text-gray-300">Operational Capacity Saved</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
