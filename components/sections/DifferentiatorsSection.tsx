'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'ATEX Zone 1 Certified',
    metric: 'Only drone in class',
    consequence: 'Inspect live offshore platforms and explosive atmospheres — no exclusion zones, no shutdowns.',
    body: 'Conventional drones stop at the perimeter. Solaris enters. Our ATEX Zone 1 certification is the only one of its kind in the inspection drone market — earned through rigorous IECEx testing, not self-declaration.',
  },
  {
    number: '02',
    title: 'Onboard AI — In-Flight Classification',
    metric: 'Report ready on landing',
    consequence: 'Zero post-mission upload delays — defect findings delivered in minutes, not days.',
    body: 'Corrosion, cracks, coating failures, thermal anomalies, and structural deformations are identified and classified during flight. By the time the drone touches down, your inspection report is already generated.',
  },
  {
    number: '03',
    title: '3D SLAM — GPS-Denied Navigation',
    metric: 'No external signal required',
    consequence: 'Operate inside tanks, tunnels, and pipeline interiors where no other drone can navigate.',
    body: 'Our 3D Simultaneous Localization and Mapping engine builds a real-time spatial map of the environment. The drone navigates, executes the mission, and returns — autonomously, without GPS or external reference signals.',
  },
  {
    number: '04',
    title: '$0.08/Meter Pipeline Inspection',
    metric: 'Zero CAPEX',
    consequence: 'Deploy immediately — no procurement cycle, no asset depreciation, no capital commitment.',
    body: 'Pay-per-inspection pricing removes the barrier to entry. Pipeline inspection starts at $0.08 per meter. Scale up or down with your operational calendar. Budget certainty from day one.',
  },
  {
    number: '05',
    title: '24-Hour Global Deployment',
    metric: '4 regional hubs',
    consequence: 'Unplanned shutdowns and emergency inspections covered anywhere in the world within one day.',
    body: 'Deployment teams stationed in Houston, Rotterdam, Singapore, and Dubai can mobilize to any site within 24 hours. Emergency response capability is built into our standard service agreement.',
  },
];

const GLOBAL_HUBS = [
  { city: 'Houston', region: 'Americas', x: '18%', y: '42%' },
  { city: 'Rotterdam', region: 'Europe', x: '47%', y: '28%' },
  { city: 'Dubai', region: 'Middle East', x: '62%', y: '46%' },
  { city: 'Singapore', region: 'Southeast Asia', x: '79%', y: '58%' },
];

export default function DifferentiatorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeHub, setActiveHub] = useState<string | null>(null);

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
      id="technology"
      aria-labelledby="diff-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        {/* Section header */}
        <div style={{ maxWidth: '680px', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Why Solaris</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="diff-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            Built for Environments
            <br />
            Where Others Stop.
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Five engineering decisions that separate Solaris from every other inspection drone on the market —
            and what each one means for your operation.
          </p>
        </div>

        {/* Differentiators list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          {DIFFERENTIATORS.map((diff, i) => (
            <article
              key={diff.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'clamp(1rem, 3vw, 2.5rem)',
                alignItems: 'start',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                boxShadow: '0 2px 12px var(--color-shadow)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Left accent bar */}
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

              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  opacity: 0.35,
                  lineHeight: 1,
                  paddingLeft: '0.5rem',
                  letterSpacing: '-0.04em',
                  minWidth: '2.5rem',
                }}
                aria-hidden="true"
              >
                {diff.number}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {diff.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                  }}
                >
                  → {diff.consequence}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {diff.body}
                </p>
              </div>

              {/* Metric badge */}
              <div
                style={{
                  background: 'var(--color-accent-light)',
                  border: '1px solid oklch(56% 0.14 185 / 0.2)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.875rem',
                  textAlign: 'center',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {diff.metric}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* AI Dashboard Feature */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
          id="ai-analytics"
        >
          <div>
            <div className="reveal" style={{ marginBottom: '1rem' }}>
              <span className="label-tag">AI Analytics Platform</span>
            </div>
            <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
            <h2
              className="section-heading reveal reveal-delay-2"
              style={{ marginBottom: '1rem' }}
            >
              Intelligence at the Edge.
              <br />
              <span style={{ color: 'var(--color-accent)' }}>Report Before Landing.</span>
            </h2>
            <p className="section-subheading reveal reveal-delay-3" style={{ marginBottom: '1.5rem' }}>
              Solaris drones process data onboard — not in the cloud. Defect classification happens
              during flight, so your engineering team receives actionable findings the moment the
              drone touches down.
            </p>
            <ul
              className="reveal reveal-delay-4"
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
              aria-label="AI capabilities"
            >
              {[
                'Corrosion mapping with severity classification (Grade 1–5)',
                'Crack detection down to 0.1mm surface width',
                'Coating failure area measurement in cm²',
                'Thermal anomaly flagging with ΔT threshold alerts',
                'Automated compliance report generation (ISO 19232)',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    alignItems: 'flex-start',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  >
                    <circle cx="8" cy="8" r="7" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <path d="M5 8l2.5 2.5L11 5.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary reveal reveal-delay-5">
              See the Platform Live
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Dashboard image with pulse annotations */}
          <div className="reveal-right" style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: '0 16px 56px oklch(22% 0.03 240 / 0.14)',
              }}
            >
              <Image
                src="/generated/detail_ai_dashboard.webp"
                alt="Fleet management platform showing live pipeline telemetry and AI defect annotations on rugged field tablet"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Defect annotation pulses */}
              {[
                { x: '32%', y: '44%', label: 'Corrosion Grade 3' },
                { x: '58%', y: '61%', label: 'Coating Failure' },
                { x: '71%', y: '35%', label: 'Thermal Anomaly' },
              ].map((pin, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: pin.x,
                    top: pin.y,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-label={pin.label}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '14px',
                      height: '14px',