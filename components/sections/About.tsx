"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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

  const skills = [
    { category: "Product Management", items: ["iOS & Android Apps", "Agile/Scrum", "User Research", "Product Strategy", "Cross-functional Leadership"] },
    { category: "Development", items: ["Python", "JavaScript/TypeScript", "Kotlin", "Swift", "React/Next.js"] },
    { category: "Bitcoin & Crypto", items: ["Bitcoin Protocol", "Nostr", "Multisig Security", "Hardware Wallets", "Enterprise Key Management"] },
    { category: "Modern Mobile", items: ["KMP (Kotlin Multiplatform)", "Compose Multiplatform", "Native iOS/Android", "Shared Infrastructure"] },
    { category: "AI & Automation", items: ["Slack Bots", "LLM Integration", "Process Automation", "CLI Tools"] },
  ];

  return (
    <section id="about" className="py-36 px-6 lg:px-12 bg-[var(--bg-primary)]" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-12">
            <h2 className="mb-4">About</h2>
          </div>

          {/* Asymmetric two-column layout */}
          <div className="grid lg:grid-cols-12 gap-20 mb-24">
            <div className="lg:col-span-7">
              <div className="mb-16 pb-16 border-b-2 border-[var(--border-color)]">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">
                  Product Manager Who Codes
                </h3>
                <p className="text-[var(--text-primary)] mb-8 leading-relaxed">
                  I'm a Product Manager at Unchained with a unique background that combines deep technical
                  expertise with product leadership. My journey from QA Engineer to PM has given me a rare
                  perspective: I understand both the code and the customer.
                </p>
                <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                  Currently, I lead product development for Unchained's native iOS and Android applications,
                  built with Swift and Kotlin respectively. I've championed the adoption of Kotlin Multiplatform
                  (KMP) and Compose Multiplatform to create shared infrastructure and components, dramatically
                  improving development velocity and code quality.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Beyond mobile, I drive AI initiatives across the organization—from Slack bots that auto-generate
                  release notes to engineering-friendly CLI tools powered by LLMs. I believe in building tools that
                  make developers' lives easier and shipping products that empower users to take control of their
                  financial future.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">
                  Bitcoin Specialist & Builder
                </h3>
                <p className="text-[var(--text-primary)] mb-8 leading-relaxed">
                  My work in Bitcoin and self-custody technology isn't just professional—it's personal. I'm passionate
                  about building tools that give people true ownership of their wealth through collaborative custody
                  and multisig security.
                </p>
                <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                  At Unchained, I've worked extensively on our enterprise key security and "Signing Stack"—a critical
                  infrastructure project that expanded our daily signature capacity from ~50 to thousands. This work
                  directly enables institutional clients to custody Bitcoin at scale while maintaining the highest
                  security standards.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Outside of work, I contribute to the Bitcoin community through projects like BitLancaster (Lancaster's
                  Bitcoin/BitDevs meetup), build educational tools like a browser-based Bitcoin miner, and experiment
                  with Nostr protocol integrations. I'm a freedom maximalist who believes Bitcoin is essential
                  infrastructure for human liberty.
                </p>
              </div>
            </div>

            {/* Right column - offset brutalist card */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="border-brutalist bg-[var(--bg-secondary)] text-[var(--text-secondary)] p-8 hard-shadow-lg -rotate-1 hover:rotate-0 transition-transform">
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-wider">
                    Tech Stack
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-[var(--accent-primary)] font-bold mb-2 uppercase text-sm tracking-wider">Mobile</div>
                      <div className="text-sm font-mono">Swift • Kotlin • KMP • Compose</div>
                    </div>
                    <div>
                      <div className="text-[var(--accent-primary)] font-bold mb-2 uppercase text-sm tracking-wider">Bitcoin</div>
                      <div className="text-sm font-mono">Multisig • Hardware Wallets • Nostr</div>
                    </div>
                    <div>
                      <div className="text-[var(--accent-primary)] font-bold mb-2 uppercase text-sm tracking-wider">Development</div>
                      <div className="text-sm font-mono">Python • TypeScript • React</div>
                    </div>
                    <div>
                      <div className="text-[var(--accent-primary)] font-bold mb-2 uppercase text-sm tracking-wider">AI & Automation</div>
                      <div className="text-sm font-mono">LLMs • Slack Bots • CLI Tools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills grid - brutalist cards */}
          <div className="mt-16">
            <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-8">
              <h3 className="text-3xl font-bold uppercase tracking-wide">Skills & Technologies</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="bg-[var(--bg-tertiary)] p-6 border-brutalist-2 hover:hard-shadow-sm hover:-translate-y-1 transition-all"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease-out ${index * 0.1}s`
                  }}
                >
                  <h4 className="font-black text-lg mb-4 uppercase tracking-wide">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-[var(--text-muted)] flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-[var(--accent-primary)] mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
