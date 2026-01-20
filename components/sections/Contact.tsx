"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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

  const contactMethods = [
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
      label: "X (Twitter)",
      value: "@rnutstink",
      href: "https://twitter.com/rnutstink",
    },
  ];

  return (
    <section id="contact" className="py-36 px-6 lg:px-12 bg-[var(--bg-primary)]" ref={ref}>
      <div className="container mx-auto max-w-screen-xl">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-12">
            <h2 className="mb-4">Get in Touch</h2>
          </div>
          <p className="text-[var(--text-muted)] mb-24 max-w-2xl text-lg">
            Interested in collaborating on Bitcoin projects, discussing product strategy, or just want to connect? Reach out directly.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border-brutalist bg-[var(--bg-tertiary)] p-8 hard-shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="text-xs uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 font-mono">
                  {method.label}
                </div>
                <div className="text-xl font-bold text-[var(--text-primary)] break-all">
                  {method.value}
                </div>
              </a>
            ))}
          </div>

          {/* CTA Block */}
          <div className="mt-16 border-brutalist bg-[var(--bg-secondary)] text-[var(--text-secondary)] p-12 hard-shadow-lg text-center">
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
              Let's Build Something
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Always open to discussing Bitcoin tech, product opportunities, or collaborative projects.
            </p>
            <a
              href="mailto:jbrauck417@gmail.com"
              className="inline-block px-8 py-4 bg-[var(--accent-primary)] text-[var(--bg-secondary)] border-brutalist font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors"
            >
              Send Email ▸
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
