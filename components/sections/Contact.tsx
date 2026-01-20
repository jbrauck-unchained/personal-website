export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "jbrauck417@gmail.com",
      href: "mailto:jbrauck417@gmail.com",
    },
    {
      label: "GitHub",
      value: "@jbrauck-unchained",
      href: "https://github.com/jbrauck-unchained",
    },
    {
      label: "LinkedIn",
      value: "joseph-brauckmann",
      href: "https://linkedin.com/in/joseph-brauckmann",
    },
    {
      label: "Twitter",
      value: "@rnutstink",
      href: "https://twitter.com/rnutstink",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="divider" />

      <div className="container-width">
        <h2 className="mb-3">
          Get in Touch
        </h2>
        <p className="text-muted mb-12">
          Interested in collaborating or have a question? Reach out.
        </p>

        <div className="space-y-6 max-w-2xl">
          {contactLinks.map((link) => (
            <div key={link.label} className="card card-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-[length:var(--text-sm)] font-medium text-muted uppercase tracking-wider">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-medium link"
                >
                  {link.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-[length:var(--text-sm)] text-muted">
            📍 Philadelphia, PA
          </p>
        </div>
      </div>
    </section>
  );
}
