"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { category: "Product Management", items: ["iOS & Android Apps", "Agile/Scrum", "User Research", "Product Strategy", "Cross-functional Leadership"] },
    { category: "Development", items: ["Python", "JavaScript/TypeScript", "Kotlin", "Swift", "React/Next.js"] },
    { category: "Bitcoin & Crypto", items: ["Bitcoin Protocol", "Nostr", "Multisig Security", "Hardware Wallets", "Enterprise Key Management"] },
    { category: "Modern Mobile", items: ["KMP (Kotlin Multiplatform)", "Compose Multiplatform", "Native iOS/Android", "Shared Infrastructure"] },
    { category: "AI & Automation", items: ["Slack Bots", "LLM Integration", "Process Automation", "CLI Tools"] },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Product Manager Who Codes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a Product Manager at Unchained with a unique background that combines deep technical 
                expertise with product leadership. My journey from QA Engineer to PM has given me a rare 
                perspective: I understand both the code and the customer.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Currently, I lead product development for Unchained's native iOS and Android applications, 
                built with Swift and Kotlin respectively. I've championed the adoption of Kotlin Multiplatform 
                (KMP) and Compose Multiplatform to create shared infrastructure and components, dramatically 
                improving development velocity and code quality.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond mobile, I drive AI initiatives across the organization—from Slack bots that auto-generate 
                release notes to engineering-friendly CLI tools powered by LLMs. I believe in building tools that 
                make developers' lives easier and shipping products that empower users to take control of their 
                financial future.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Bitcoin Specialist & Builder
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                My work in Bitcoin and self-custody technology isn't just professional—it's personal. I'm passionate 
                about building tools that give people true ownership of their wealth through collaborative custody 
                and multisig security.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                At Unchained, I've worked extensively on our enterprise key security and "Signing Stack"—a critical 
                infrastructure project that expanded our daily signature capacity from ~50 to thousands. This work 
                directly enables institutional clients to custody Bitcoin at scale while maintaining the highest 
                security standards.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Outside of work, I contribute to the Bitcoin community through projects like BitLancaster (Lancaster's 
                Bitcoin/BitDevs meetup), build educational tools like a browser-based Bitcoin miner, and experiment 
                with Nostr protocol integrations. I'm a freedom maximalist who believes Bitcoin is essential 
                infrastructure for human liberty.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                >
                  <h4 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-gray-700 dark:text-gray-300 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
