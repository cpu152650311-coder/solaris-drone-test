'use client';

import { useEffect, useRef, useState } from 'react';

const HUBS = [
  {
    city: 'Houston',
    region: 'Americas',
    flag: '🇺🇸',
    timezone: 'UTC-6 (CST)',
    coverage: 'North & South America, Gulf of Mexico',
    address: '1200 McKinney Street, Suite 450, Houston, TX 77010',
    phone: '+1 (555) 000-SOLR',
  },
  {
    city: 'Rotterdam',
    region: 'Europe & Africa',
    flag: '🇳🇱',
    timezone: 'UTC+1 (CET)',
    coverage: 'Europe, North Sea, West Africa',
    address: 'Wilhelminakade 137, 3072 AP Rotterdam, Netherlands',
    phone: '+31 (0)10 000 SOLR',
  },
  {
    city: 'Dubai',
    region: 'Middle East',
    flag: '🇦🇪',
    timezone: 'UTC+4 (GST)',
    coverage: 'Middle East, East Africa, Caspian',
    address: 'Jumeirah Lakes Towers, Cluster X, Dubai, UAE',
    phone: '+971 (0)4 000 SOLR',
  },
  {
    city: 'Singapore',
    region: 'Asia-Pacific',
    flag: '🇸🇬',
    timezone: 'UTC+8 (SGT)',
    coverage: 'Southeast Asia, Australia, China',
    address: '1 Raffles Place, #20-61, Tower One, Singapore 048616',
    phone: '+65 6XXX SOLR',
  },
];

export default function GlobalDeploymentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeHub, setActiveHub] = useState(0);

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
      id="global"
      aria-labelledby="global-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-surface-2)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Global Deployment</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="global-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            4 Regional Hubs.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>24-Hour Deployment Anywhere.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Each hub maintains ready-to-deploy inspection teams, full equipment stock, and certified
            operators. Emergency response capability is built into our standard service agreement.
          </p>
        </div>

        {/* Hub cards */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {HUBS.map((hub, i) => (
            <button
              key={hub.city}
              onClick={() => setActiveHub(i)}
              aria-pressed={activeHub === i}
              style={{
                background: activeHub === i ? 'var(--color-surface)' : 'transparent',
                border: `1.5px solid ${activeHub === i ? 'var(--color-accent)' : 'var(--color-border)'}`,
                borderRadius: '12px',
                padding: '1.25rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.25s',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }} aria-hidden="true">{hub.flag}</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.15rem' }}>
                {hub.city}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{hub.region}</div>
              {activeHub === i && (
                <div style={{ marginTop: '0.5rem', height: '2px', background: 'var(--color-accent)', borderRadius: '1px' }} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>

        {/* Active hub detail */}
        <div
          className="reveal card"
          style={{
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            <div>
              <div style={detailLabel}>Headquarters</div>
              <div style={detailValue}>{HUBS[activeHub].address}</div>
            </div>
            <div>
              <div style={detailLabel}>Coverage</div>
              <div style={detailValue}>{HUBS[activeHub].coverage}</div>
            </div>
            <div>
              <div style={detailLabel}>Time Zone</div>
              <div style={detailValue}>{HUBS[activeHub].timezone}</div>
            </div>
            <div>
              <div style={detailLabel}>Phone</div>
              <div style={{ ...detailValue, fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-accent)' }}>
                {HUBS[activeHub].phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const detailLabel: React.CSSProperties = {
  fontSize: '0.7rem',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-text-muted)',
  marginBottom: '0.35rem',
};

const detailValue: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--color-text)',
  lineHeight: 1.6,
};
