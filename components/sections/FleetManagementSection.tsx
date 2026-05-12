'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PLATFORM_FEATURES = [
  {
    title: 'Mission Planning',
    body: 'Define inspection zones, set waypoints, and assign sensor payloads from an interactive map interface. Pre-programmed mission templates for pipelines, tanks, wind turbines, and offshore platforms.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Live Telemetry',
    body: 'Real-time flight data, battery status, sensor health, and video feed streamed to your browser. Monitor multiple simultaneous missions from a single dashboard.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-8" stroke="var(--color-accent)" />
      </svg>
    ),
  },
  {
    title: 'Automated Reporting',
    body: 'AI-generated inspection reports with defect classifications, severity gradings, timestamped imagery, and GPS coordinates. Export as PDF, CSV, or integrate via API. ISO 19232 compliant.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Audit Trail',
    body: 'Every flight, every sensor reading, and every human decision is logged with cryptographic integrity. Full compliance audit trail for regulatory submissions and insurance documentation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'REST API & Webhooks',
    body: 'Integrate inspection data directly into your ERP, CMMS, or asset management system. Webhook alerts for critical defect findings. Full API documentation and sandbox environment.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Multi-Tenant Access',
    body: 'Role-based access control for operators, engineers, managers, and external auditors. Each role sees the data they need — and nothing they don\'t. SOC 2 compliant infrastructure.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function FleetManagementSection() {
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
      id="fleet"
      aria-labelledby="fleet-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-surface-2)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Fleet Management Platform</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="fleet-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            One Dashboard.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Every Mission. Every Metric.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Plan missions, monitor live telemetry, review AI-generated defect reports, and integrate
            with your existing systems — all from a web-based platform accessible anywhere.
          </p>
        </div>

        {/* Dashboard image */}
        <div
          className="reveal"
          style={{ marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              aspectRatio: '16/7',
              boxShadow: '0 12px 48px oklch(22% 0.03 240 / 0.1)',
            }}
          >
            <Image
              src="/generated/detail_ai_dashboard.webp"
              alt="Fleet management platform dashboard showing live telemetry, 3D pipeline scan with defect annotations, and inspection report"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem',
          }}
          aria-label="Fleet management platform features"
        >
          {PLATFORM_FEATURES.map((feat, i) => (
            <article
              key={feat.title}
              className={`card reveal reveal-delay-${Math.min(i % 3 + 1, 5)}`}
              style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--color-accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                }}
              >
                {feat.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {feat.title}
              </h3>
              <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                {feat.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
