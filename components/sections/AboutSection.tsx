'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const TIMELINE = [
  { year: '2021', title: 'Founded', body: 'Solaris Robotics founded by former DJI UAV engineers and infrastructure inspection veterans who saw the gap between what drones could do and what industrial sites actually needed.' },
  { year: '2022', title: 'ATEX Zone 1 Certified', body: 'Earned the only ATEX Zone 1 certification in the inspection drone class — enabling autonomous flight inside explosive atmospheres and live offshore platforms.' },
  { year: '2023', title: '3D SLAM Navigation', body: 'Deployed proprietary 3D SLAM engine for GPS-denied navigation inside storage tanks, pipelines, and confined spaces — no external signal required.' },
  { year: '2024', title: 'Onboard AI Launch', body: 'Released in-flight AI defect classification. Corrosion, cracks, coating failures, and thermal anomalies identified and categorized before the drone lands.' },
  { year: '2025', title: 'Global Expansion', body: 'Established 4 regional hubs in Houston, Rotterdam, Singapore, and Dubai. Launched pay-per-inspection pricing at $0.08/meter. Deployed fleets across 6 continents.' },
  { year: '2026', title: 'Full-Stack Platform', body: 'Integrated fleet management, automated compliance reporting, REST API, and operator training pathways into a unified inspection data ecosystem.' },
];

export default function AboutSection() {
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
      id="about"
      aria-labelledby="about-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-surface-2)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">About Solaris</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="about-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1.25rem' }}>
            Built by Engineers.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Built for the Field.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Solaris Robotics was founded in 2021 by a team that knows both sides of the problem: engineers
            who built the world&apos;s most advanced UAV systems at DJI, and veterans who spent careers
            inspecting pipelines, offshore platforms, and wind assets in the field.
          </p>
        </div>

        {/* Image + Story */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              boxShadow: '0 16px 56px oklch(22% 0.03 240 / 0.12)',
            }}
          >
            <Image
              src="/generated/credibility_field_deployment.webp"
              alt="Solaris field technician in PPE deploying autonomous inspection drone at pipeline site"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              From Racetrack to Refinery
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Our founding team brought together deep expertise in flight control systems and
              brutal honesty about what actually works at -40°C on a North Sea platform. That
              combination produced something the industry had never seen — an autonomous inspection
              drone engineered specifically for the environments where conventional drones and
              human inspectors both fall short.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              We speak the language of plant managers and engineering directors — because we were
              them. Precision, safety, and operational reliability are not marketing words here.
              They are the specification.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* Vertical spine */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'clamp(1rem, 2vw, 1.5rem)',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--color-accent)',
              opacity: 0.25,
            }}
          />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`reveal reveal-delay-${Math.min(i % 3 + 1, 5)}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                paddingBottom: i < TIMELINE.length - 1 ? '2.5rem' : '0',
                position: 'relative',
              }}
            >
              {/* Year marker */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: 'clamp(2.5rem, 3vw, 3rem)',
                    height: 'clamp(2.5rem, 3vw, 3rem)',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                    position: 'relative',
                    zIndex: 1,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {item.year.slice(2)}
                </div>
              </div>
              <div style={{ paddingTop: '0.3rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h4>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-accent)' }}>
                    {item.year}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '62ch' }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
