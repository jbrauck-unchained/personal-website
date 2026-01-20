export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-t-4 border-[var(--border-color)]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-4xl font-black mb-4 uppercase tracking-tighter">JB</div>
            <p className="text-sm opacity-80 leading-relaxed">
              Product Manager building Bitcoin infrastructure at Unchained. Technical depth meets product vision.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="#about" className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a
                  href="https://github.com/jbrauck-unchained"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider"
                >
                  GitHub ▸
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/joseph-brauckmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider"
                >
                  LinkedIn ▸
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/rnutstink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider"
                >
                  X ▸
                </a>
              </li>
              <li>
                <a
                  href="mailto:jbrauck417@gmail.com"
                  className="hover:text-[var(--accent-primary)] transition-colors uppercase tracking-wider"
                >
                  Email ▸
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-[var(--text-secondary)] text-center">
          <p className="text-xs font-mono uppercase tracking-widest opacity-60">
            © {currentYear} Joe Brauckmann • Built with Next.js • Deployed on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
