'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero — Autonomous inspection drones"
      className="section-spine"
      style={{
        background: 'var(--color-bg)',
        paddingTop: 'clamp(4rem, 8vw, 6rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Gradient orb decoration */}
      <div
        className="gradient-orb"
        style={{
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-100px',
        }}
        aria-hidden="true"
      />
      <div
        className="gradient-orb"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-150px',
          left: '10%',
          background: 'radial-gradient(circle, oklch(52% 0.18 255 / 0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left: Text */}
          <div ref={textRef} style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: '1.25rem' }}>
              <span className="label-tag">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                ATEX Zone 1 Certified · Onboard AI · GPS-Denied Navigation
              </span>
            </div>

            <h1
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
              }}
            >
              Autonomous
              <br />
              Inspection.{' '}
              <span style={{ color: 'var(--color-accent)' }}>Zero Pilots.</span>
              <br />
              Zero Compromise.
            </h1>

            <p
              className="reveal reveal-delay-2 section-subheading"
              style={{ marginBottom: '2rem' }}
            >
              Solaris drones enter where humans cannot. ATEX-rated for explosive atmospheres,
              navigating GPS-denied confined spaces, with AI defect classification complete
              before the drone lands.
            </p>

            {/* Stats row */}
            <div
              className="reveal reveal-delay-3"
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
                paddingLeft: '1rem',
                borderLeft: '2px solid var(--color-accent)',
              }}
            >
              {[
                { value: '$0.08', unit: '/meter', label: 'Pipeline inspection — no CAPEX required' },
                { value: '24hr', unit: '', label: 'Global deployment from 4 regional hubs' },
                { value: '4', unit: ' hubs', label: 'Houston · Rotterdam · Singapore · Dubai' },
              ].map((stat) => (
                <div key={stat.value} style={{ minWidth: '100px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 800,
                      color: 'var(--color-accent)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                    <span style={{ fontSize: '0.55em', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      {stat.unit}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                      marginTop: '0.25rem',
                      lineHeight: 1.4,
                      maxWidth: '140px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="reveal reveal-delay-4"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href="#contact" className="btn-primary">
                Request a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#technology" className="btn-secondary">
                See How It Works
              </a>
            </div>

            {/* Certifications */}
            <div
              className="reveal reveal-delay-5"
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '2.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {['ATEX Zone 1', 'IRATA Certified', 'ISO 18436', 'IECEx'].map((cert) => (
                <div
                  key={cert}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            ref={imageRef}
            className="reveal-right"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: '0 24px 80px oklch(22% 0.03 240 / 0.15), 0 4px 20px oklch(56% 0.14 185 / 0.1)',
              }}
            >
              <Image
                src="/generated/hero_drone_in_flight.webp"
                alt="Solaris autonomous inspection drone flying near offshore oil platform infrastructure"
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  background: 'oklch(100% 0 0 / 0.92)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '8px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 16px oklch(22% 0.03 240 / 0.12)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    flexShrink: 0,
                    boxShadow: '0 0 0 3px oklch(60% 0.18 145 / 0.2)',
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                  }}
                >
                  Live Mission Active — North Sea Platform
                </span>
              </div>
            </div>

            {/* Floating card */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                boxShadow: '0 8px 32px oklch(22% 0.03 240 / 0.12)',
                minWidth: '160px',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '0.4rem',
                }}
              >
                Defects Detected
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                }}
              >
                12
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                In-flight, pre-landing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}