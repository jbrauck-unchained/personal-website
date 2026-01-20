"use client";

export default function Hero() {
  return (
    <section className="pt-60 pb-40 px-6 lg:px-12 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Main content - asymmetric layout */}
          <div className="lg:col-span-8 animate-in">
            {/* Massive typography */}
            <h1 className="mb-24 leading-none">
              JOE BRAUCKMANN
            </h1>

            {/* Subtitle with uppercase tracking */}
            <div className="mb-24 max-w-2xl border-l-[6px] border-[var(--accent-primary)] pl-6">
              <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wider mb-6">
                Product Manager
              </h2>
              <p className="text-lg md:text-xl text-[var(--text-muted)] font-medium">
                Building Bitcoin infrastructure at Unchained
              </p>
            </div>

            {/* Description */}
            <p className="text-lg max-w-2xl mb-24 leading-relaxed animate-in-delay-1">
              Technical PM who codes. Shipping native iOS and Android apps for Bitcoin self-custody.
              Scaling enterprise key management from ~50 to thousands of daily signatures.
              Automating everything with AI.
            </p>

            {/* CTAs with brutalist styling */}
            <div className="flex flex-wrap gap-4 mb-24 animate-in-delay-2">
              <a
                href="#projects"
                className="px-8 py-4 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-brutalist font-bold uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 transition-transform text-sm md:text-base"
              >
                View Work ▸
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-[var(--bg-primary)] text-[var(--text-primary)] border-brutalist font-bold uppercase tracking-wider hover:bg-[var(--accent-primary)] hover:text-[var(--bg-secondary)] transition-colors text-sm md:text-base"
              >
                Contact
              </a>
            </div>

            {/* Social links - minimal */}
            <div className="flex gap-6 items-center animate-in-delay-3">
              <span className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Find me:
              </span>
              <a
                href="https://github.com/jbrauck-unchained"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono text-sm uppercase tracking-wider"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/joseph-brauckmann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono text-sm uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rnutstink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono text-sm uppercase tracking-wider"
              >
                X
              </a>
            </div>
          </div>

          {/* Right side - asymmetric accent block */}
          <div className="lg:col-span-4 animate-in-delay-2">
            <div className="border-brutalist p-8 hard-shadow bg-[var(--bg-primary)]">
              <div className="border-l-[6px] border-[var(--accent-primary)] pl-4 mb-6">
                <h3 className="text-2xl font-bold mb-2">Focus Areas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "iOS & Android Apps",
                  "Bitcoin & Multisig",
                  "Enterprise Custody",
                  "AI Automation",
                  "Product Strategy"
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg font-medium"
                  >
                    <div className="w-2 h-2 bg-[var(--accent-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll indicator - minimalist */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors font-mono text-xs uppercase tracking-widest"
          >
            <span>Scroll</span>
            <div className="w-[2px] h-12 bg-[var(--border-color)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
