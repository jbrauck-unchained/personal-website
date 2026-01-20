export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] section-padding">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[length:var(--text-sm)] text-muted">
            © {currentYear} Joe Brauckmann. Built with Next.js, Tailwind, and ₿.
          </p>

          <div className="flex gap-8">
            <a
              href="https://github.com/jbrauck-unchained"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--text-sm)] text-muted hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/joseph-brauckmann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--text-sm)] text-muted hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/rnutstink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--text-sm)] text-muted hover:text-[var(--accent)] transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:jbrauck417@gmail.com"
              className="text-[length:var(--text-sm)] text-muted hover:text-[var(--accent)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
