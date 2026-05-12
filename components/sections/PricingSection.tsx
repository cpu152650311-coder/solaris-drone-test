'use client';

import { useEffect, useRef } from 'react';

const TIERS = [
  {
    name: 'Pay-Per-Inspection',
    price: '$0.08',
    unit: '/meter',
    highlight: false,
    desc: 'Pipeline and linear asset inspection. Pay only for what you inspect. No minimum commitment.',
    features: [
      'Pipeline inspection from $0.08/meter',
      'Tank inspection: flat per-unit pricing',
      'Wind turbine inspection: per-tower pricing',
      'Standard AI defect report included',
      'Fleet Management Platform access',
      'Monthly consolidated billing',
    ],
    cta: 'Start Inspecting',
  },
  {
    name: 'Enterprise Fleet',
    price: 'Custom',
    unit: '',
    highlight: true,
    desc: 'Dedicated drone fleet with full sensor payload suite. Annual contract with guaranteed SLA.',
    features: [
      'Dedicated Solaris drone fleet (2–10 UAVs)',
      'All sensor payloads included',
      'On-site operator training (IRATA/ISO 18436)',
      'Priority 6-hour global deployment',
      'Custom sensor integration',
      'Dedicated account manager + API access',
      'Annual inspection volume discount',
      '24/7 emergency response SLA',
    ],
    cta: 'Talk to Sales',
  },
  {
    name: 'Training & Certification',
    price: 'From $4,500',
    unit: '/person',
    highlight: false,
    desc: 'Build internal capability. IRATA and ISO 18436 accredited training for your operations team.',
    features: [
      'IRATA Level 1–3 certification pathways',
      'ISO 18436 vibration analysis certification',
      '3-day onsite intensive training',
      'Hands-on flight time with Solaris UAVs',
      'AI analytics platform operator training',
      'Annual re-certification available',
    ],
    cta: 'View Courses',
  },
];

export default function PricingSection() {
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
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Pricing & Commercial Model</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem', marginLeft: 'auto', marginRight: 'auto' }} />
          <h2 id="pricing-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            Zero CAPEX.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Immediate Deployment.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Capital expenditure is a barrier. We removed it. Start inspecting immediately without procurement
            cycles, asset depreciation, or capital commitment.
          </p>
        </div>

        {/* Price tiers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {TIERS.map((tier, i) => (
            <article
              key={tier.name}
              className={`card reveal reveal-delay-${i + 1}`}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                borderColor: tier.highlight ? 'var(--color-accent)' : 'var(--color-border)',
                borderWidth: tier.highlight ? '2px' : '1px',
                position: 'relative',
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    background: 'var(--color-accent)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '0.3rem',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderRadius: '10px 10px 0 0',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginTop: tier.highlight ? '1.5rem' : 0, marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.3rem' }}>
                  {tier.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {tier.desc}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1 }}>
                  {tier.price}
                  {tier.unit && (
                    <span style={{ fontSize: '0.35em', fontWeight: 600, color: 'var(--color-text-muted)' }}>{tier.unit}</span>
                  )}
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }} aria-label={`${tier.name} includes`}>
                {tier.features.map((feat) => (
                  <li
                    key={feat}
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                      <path d="M3 7.5l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={tier.highlight ? 'btn-primary' : 'btn-secondary'} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
