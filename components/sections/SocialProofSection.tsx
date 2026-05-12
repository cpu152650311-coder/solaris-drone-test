'use client';

import { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    quote: 'Solaris cut our pipeline inspection cycle from 14 days to 36 hours. The onboard AI flagged three corrosion hotspots that our rope-access team had missed on the previous two inspections.',
    name: 'Sarah Chen',
    title: 'VP Engineering, Gulf Coast Pipeline Operations',
    metric: '14 days → 36 hrs',
    metricLabel: 'inspection cycle reduction',
  },
  {
    quote: 'We operate an offshore platform 120km from shore in the North Sea. Solaris drones fly autonomously in GPS-denied under-deck zones that no GPS drone — and no human inspector — can safely reach.',
    name: 'Lars Magnussen',
    title: 'Asset Integrity Manager, North Sea Energy ASA',
    metric: '100%',
    metricLabel: 'under-deck coverage achieved',
  },
  {
    quote: 'The pay-per-inspection model let us deploy immediately without a $2.4M CAPEX request. We started inspecting within 10 days of signing — and our cost per linear kilometer dropped by 62%.',
    name: 'Carlos Ruiz',
    title: 'Operations Director, Andes Pipeline Consortium',
    metric: '-62%',
    metricLabel: 'cost per linear kilometer',
  },
];

const STATS = [
  { value: '500+', label: 'Inspections Completed' },
  { value: '12,000+', label: 'Linear KM Inspected' },
  { value: '98.7%', label: 'Defect Detection Rate' },
  { value: '4.7/5', label: 'Client Satisfaction Score' },
];

export default function SocialProofSection() {
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
      id="case-studies"
      aria-labelledby="proof-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Social Proof</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="proof-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            Trusted by Operators.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Proven in the Field.</span>
          </h2>
        </div>

        {/* Stats row */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.25rem',
            marginBottom: 'clamp(3rem, 5vw, 4rem)',
          }}
          aria-label="Key metrics"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
          }}
          aria-label="Client testimonials"
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`card reveal reveal-delay-${i + 1}`}
              style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="var(--color-accent)" opacity="0.2" aria-hidden="true">
                  <path d="M0 16V9.5C0 5.5 2 2 5 0l2 2C4.5 3.5 3 5.5 3 8h5v8H0zm12 0V9.5C12 5.5 14 2 17 0l2 2c-2.5 1.5-4 3.5-4 6h5v8H12z" />
                </svg>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.75, flex: 1, marginBottom: '1.25rem' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  {t.title}
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--color-accent-light)',
                    borderRadius: '8px',
                    padding: '0.4rem 0.75rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    {t.metric}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{t.metricLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
