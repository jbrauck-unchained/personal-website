export default function About() {
  const skills = [
    { category: "Product Management", items: ["iOS & Android Apps", "Agile/Scrum", "User Research", "Product Strategy", "Cross-functional Leadership"] },
    { category: "Development", items: ["Python", "JavaScript/TypeScript", "Kotlin", "Swift", "React/Next.js"] },
    { category: "Bitcoin & Crypto", items: ["Bitcoin Protocol", "Nostr", "Multisig Security", "Hardware Wallets", "Enterprise Key Management"] },
    { category: "Modern Mobile", items: ["KMP (Kotlin Multiplatform)", "Compose Multiplatform", "Native iOS/Android", "Shared Infrastructure"] },
    { category: "AI & Automation", items: ["Slack Bots", "LLM Integration", "Process Automation", "CLI Tools"] },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="divider" />

      <div className="w-full max-w-7xl mx-auto">
        <h2 className="mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4">
                Product Manager Who Codes
              </h3>
              <div className="space-y-4">
                <p>
                  I'm a Product Manager at Unchained with a unique background that combines deep technical
                  expertise with product leadership. My journey from QA Engineer to PM has given me a rare
                  perspective: I understand both the code and the customer.
                </p>
                <p>
                  Currently, I lead product development for Unchained's native iOS and Android applications,
                  built with Swift and Kotlin respectively. I've championed the adoption of Kotlin Multiplatform
                  (KMP) and Compose Multiplatform to create shared infrastructure and components, dramatically
                  improving development velocity and code quality.
                </p>
                <p>
                  Beyond mobile, I drive AI initiatives across the organization—from Slack bots that auto-generate
                  release notes to engineering-friendly CLI tools powered by LLMs. I believe in building tools that
                  make developers' lives easier and shipping products that empower users to take control of their
                  financial future.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4">
                Bitcoin Specialist & Builder
              </h3>
              <div className="space-y-4">
                <p>
                  My work in Bitcoin and self-custody technology isn't just professional—it's personal. I'm passionate
                  about building tools that give people true ownership of their wealth through collaborative custody
                  and multisig security.
                </p>
                <p>
                  At Unchained, I've worked extensively on our enterprise key security and "Signing Stack"—a critical
                  infrastructure project that expanded our daily signature capacity from ~50 to thousands. This work
                  directly enables institutional clients to custody Bitcoin at scale while maintaining the highest
                  security standards.
                </p>
                <p>
                  Outside of work, I contribute to the Bitcoin community through projects like BitLancaster (Lancaster's
                  Bitcoin/BitDevs meetup), build educational tools like a browser-based Bitcoin miner, and experiment
                  with Nostr protocol integrations. I'm a freedom maximalist who believes Bitcoin is essential
                  infrastructure for human liberty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="border-accent">
                <h4 className="font-bold mb-3 text-[length:var(--text-base)]">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2 text-[length:var(--text-sm)]">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <span className="text-[var(--accent)] mr-2 flex-shrink-0">→</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
