'use client';

import { useEffect, useRef } from 'react';

const CERTIFICATIONS = [
  {
    name: 'ATEX Zone 1',
    body: 'Certified for operation in explosive atmospheres — the only drone in the inspection market to hold this rating. IECEx-tested, not self-declared.',
    tags: ['IECEx', 'Explosive Atmospheres', 'Offshore Platforms', 'Chemical Plants'],
  },
  {
    name: 'IECEx',
    body: 'Full IECEx certification for equipment used in explosive atmospheres. Validated by independent third-party testing, recognized in 30+ countries.',
    tags: ['International', 'Third-Party Validated', '30+ Countries'],
  },
  {
    name: 'IRATA',
    body: 'Industrial Rope Access Trade Association accredited training pathways. Our courses are delivered by IRATA Level 3 instructors and meet all assessment criteria.',
    tags: ['Level 1–3', 'Rope Access', 'Inspection Training', 'Global Recognition'],
  },
  {
    name: 'ISO 18436',
    body: 'Condition monitoring and diagnostics certification — vibration analysis, thermography, and ultrasonic testing. Your operators earn accredited, portable qualifications.',
    tags: ['Vibration Analysis', 'Thermography', 'Ultrasonic Testing', 'Portable Qualification'],
  },
  {
    name: 'ISO 19232',
    body: 'Non-destructive testing image quality standard. Our AI-generated inspection reports meet ISO 19232 requirements for defect image clarity and measurement accuracy.',
    tags: ['NDT Imaging', 'Defect Measurement', 'Compliance Reports'],
  },
  {
    name: 'ISO 9001',
    body: 'Quality management system certification. Every drone, payload, and software release follows documented, auditable quality processes from design through deployment.',
    tags: ['Quality Management', 'Process Auditing', 'Continuous Improvement'],
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((c) => c.classList.add('revealed'));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      aria-labelledby="certs-heading"
      className="section-pad"
      style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Certifications & Compliance</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="certs-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            Certified.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Not Self-Declared.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Every certification listed is independently verified. We carry the credentials that
            safety-critical industries require — and we carry the test reports to prove them.
          </p>
        </div>

        {/* Cert grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem',
          }}
          aria-label="Solaris certifications"
        >
          {CERTIFICATIONS.map((cert, i) => (
            <article
              key={cert.name}
              className={`card reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}
              style={{
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                position: 'relative',
              }}
            >
              {/* Left accent */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: 'var(--color-accent)',
                  borderRadius: '3px 0 0 3px',
                }}
              />

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
                {cert.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                {cert.body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      background: 'var(--color-accent-light)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
