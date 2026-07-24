import Image from "next/image";

const careerChapters = [
  { year: "2022", label: "SUPPORT" },
  { year: "2023", label: "QA" },
  { year: "2024", label: "SIGNING" },
  { year: "2025", label: "MOBILE" },
  { year: "2026", label: "CLIENT JOURNEY" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">I&apos;m Joe Brauckmann.</h1>
          <p className="hero-role">Senior Product Manager at Unchained.</p>
          <p className="hero-intro">
            I&apos;ve worked in support, quality, release systems, signing
            operations, native mobile apps, and the client journey across iOS,
            Android, and web.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#chapters">
              Read the chapters <ArrowIcon />
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/joseph-brauckmann"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <LocationIcon />
              Lancaster, PA
            </span>
            <span>
              <CalendarIcon />
              At Unchained since 2022
            </span>
          </div>
        </div>

        <div className="chapter-panel" aria-label="Career chapters">
          <div className="chapter-portrait">
            <Image
              src="/images/jbheadshot.jpg"
              alt="Joe Brauckmann"
              fill
              sizes="(max-width: 640px) 112px, (max-width: 1040px) 164px, 270px"
              priority
            />
          </div>
          <div className="chapter-list">
            {careerChapters.map((chapter, index) => (
              <div className="chapter-step" key={chapter.label}>
                <span className="chapter-number">0{index + 1}</span>
                <span>{chapter.label}</span>
                <time>{chapter.year}</time>
              </div>
            ))}
          </div>
          <div className="dot-field" aria-hidden="true" />
          <div className="blue-square" aria-hidden="true" />
          <div className="cross-mark" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 3v3M19 3v3M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
