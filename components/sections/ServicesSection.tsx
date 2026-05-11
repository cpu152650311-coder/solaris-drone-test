'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const SERVICES = [
  {
    icon: '🚁',
    title: 'Autonomous Inspection Drones',
    detail: 'ATEX Zone 1 Certified',
    description:
      'The only inspection drone class rated for explosive and hazardous atmospheres. Operates inside storage tanks, pipeline interiors, and live offshore platforms without a pilot.',
  },
  {
    icon: '🌡️',
    title: 'Thermal & LiDAR Sensor Payloads',
    detail: '640×512 FLIR · 200m LiDAR',
    description:
      'Modular, mission-configurable payloads. FLIR thermal imaging identifies heat anomalies. 200-meter-range LiDAR generates precise 3D structural models.',
  },
  {
    icon: '📡',
    title: 'Ultrasonic & Gas Detection',
    detail: 'Wall-loss · Leak identification',
    description:
      'Ultrasonic thickness gauges measure pipe wall-loss without contact. Gas detection sensors identify leak signatures in real time — all integrated into the mission payload.',
  },
  {
    icon: '🗺️',
    title: 'Fleet Management & Mission Planning',
    detail: 'Web-based · Live telemetry',
    description:
      'Plan, execute, and monitor missions from a single dashboard. Live telemetry, automated compliance reporting, and full audit trail for every inspection.',
  },
  {
    icon: '🤖',
    title: 'Automated Defect Reporting & AI Analytics',
    detail: 'In-flight classification',
    description:
      'Onboard AI classifies corrosion, cracks, coating failures, and thermal anomalies during flight. Report is ready before the drone lands — no upload delays, no analyst backlog.',
  },
  {
    icon: '🎓',
    title: 'Operator Training & Certification',
    detail: 'IRATA / ISO 18436',
    description:
      'Build internal inspection capability with fully accredited training pathways. IRATA and ISO 18436 compliant certification for your operations team.',
  },
  {
    icon: '🔧',
    title: 'Custom Sensor Integration',
    detail: 'Mission-specific payloads',
    description:
      'Bespoke sensor configurations engineered for your specific asset class. From radiation detection to hyperspectral imaging — we integrate what your mission requires.',
  },
  {
    icon: '⚡',
    title: 'API Access & Data Pipeline',
    detail: 'REST · WebSocket · Webhooks',
    description:
      'Full API access to inspection data, defect records, and telemetry streams. Integrate directly with your asset management, ERP, or maintenance systems.',
  },
  {
    icon: '💰',
    title: 'Pay-Per-Inspection Programs',
    detail: 'From $0.08/meter',
    description:
      'Eliminate CAPEX. Pipeline inspection from $0.08 per meter — deploy immediately without procurement cycles. Scale up or down with your operational calendar.',
  },
  {
    icon: '🌍',
    title: '24-Hour Global Deployment',
    detail: 'Houston · Rotterdam · Singapore · Dubai',
    description:
      'Teams stationed across four global hubs mobilize to any site within 24 hours. Emergency response capability for unplanned shutdowns and critical asset failures.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="section-spine section-pad"
      style={{
        background: 'var(--color-surface-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="gradient-orb"
        style={{ width: '500px', height: '500px', top: '0', right: '5%', opacity: 0.6 }}
        aria-hidden="true"
      />

      <div className="container-wide">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '2rem',
            alignItems: 'end',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div>
            <div className="reveal" style={{ marginBottom: '1rem' }}>
              <span className="label-tag">Services &amp; Capabilities</span>
            </div>
            <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
            <h2 id="services-heading" className="section-heading reveal reveal-delay-2">
              Every Inspection Need.
              <br />
              One Integrated Platform.
            </h2>
          </div>
          <p className="section-subheading reveal reveal-delay-3" style={{ alignSelf: 'end' }}>
            From drone hardware to data pipelines — Solaris delivers the full inspection stack
            so your team focuses on decisions, not logistics.
          </p>
        </div>

        {/* Sensor payload image + featured callout */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '2rem',
            marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              boxShadow: '0 12px 48px oklch(22% 0.03 240 / 0.12)',
            }}
          >
            <Image
              src="/generated/product_sensor_payload.webp"
              alt="Modular thermal and LiDAR sensor payload mounted on drone chassis, studio product photography"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '14px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 4px 20px var(--color-shadow)',
            }}
          >
            <div className="label-tag" style={{ marginBottom: '1rem' }}>
              Modular Payload Architecture
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Swap sensors in the field. No tools required.
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Every Solaris UAV accepts four interchangeable payload modules. Switch from thermal
              imaging to ultrasonic thickness measurement between missions — the platform auto-detects
              and reconfigures. One drone, infinite inspection profiles.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { sensor: 'Thermal', spec: '640×512 FLIR — detects coating failures and heat anomalies' },
                { sensor: 'LiDAR', spec: '200m range — builds sub-centimetre 3D structural models' },
                { sensor: 'Ultrasonic', spec: 'Wall-loss measurement — no contact required' },
                { sensor: 'Gas Detection', spec: 'Identifies leak signatures in real time' },
              ].map((item) => (
                <div
                  key={item.sensor}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    padding: '0.6rem 0.75rem',
                    borderRadius: '6px',
                    background: 'var(--color-surface-2)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      background: 'var(--color-accent-light)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      flexShrink: 0,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.sensor}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {item.spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem',
          }}
          role="list"
          aria-label="Solaris services list"
        >
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`card reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}
              role="listitem"
              style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: '1.4rem',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--color-accent-light)',
                    borderRadius: '8px',
                    flexShrink: 0,
                  }}
                >
                  {service.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                    }}
                  >
                    {service.detail}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}