const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-brauckmann",
  },
  { label: "X", href: "https://x.com/rnutstink" },
  {
    label: "GitHub",
    href: "https://github.com/jbrauck-unchained",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="site-shell contact-inner">
        <h2 id="contact-title" className="contact-title">
          Email me.
        </h2>

        <div className="contact-details">
          <a className="email-link" href="mailto:jbrauck417@gmail.com">
            jbrauck417@gmail.com
          </a>
          <div className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="contact-location">Lancaster, PA</p>
        </div>
      </div>
    </section>
  );
}
