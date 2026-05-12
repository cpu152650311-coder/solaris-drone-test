'use client';

import { useEffect, useRef } from 'react';

const TECH_LAYERS = [
  {
    title: '3D SLAM Navigation Engine',
    subtitle: 'GPS-Denied. Autonomous. Real-Time.',
    body: 'Our proprietary Simultaneous Localization and Mapping engine builds a real-time 3D spatial map of the environment using fused LiDAR, visual-inertial odometry, and ultrasonic range data. The drone navigates, executes the mission, and returns — without GPS, without external beacons, and without a pilot.',
    specs: [
      { label: 'Sensor Fusion', value: 'LiDAR + VIO + Ultrasonic + IMU' },
      { label: 'Map Resolution', value: 'Sub-cm 3D point cloud' },
      { label: 'Max Indoor Range', value: 'Autonomous 500m per mission leg' },
      { label: 'Map Persistence', value: 'Saved for differential comparison over time' },
    ],
  },
  {
    title: 'Onboard AI Inference',
    subtitle: 'Classify Before Landing.',
    body: 'Neural networks trained on 50,000+ annotated inspection images run on a dedicated edge AI processor. Defect detection and classification happen in-flight — no cloud upload delay, no bandwidth dependency, no analyst backlog. The report is ready before the drone lands.',
    specs: [
      { label: 'Inference Hardware', value: 'NVIDIA Jetson Orin NX (100 TOPS)' },
      { label: 'Defect Categories', value: 'Corrosion, cracks, coating, thermal, deformation' },
      { label: 'Detection Resolution', value: 'Cracks down to 0.1mm surface width' },
      { label: 'Training Dataset', value: '50,000+ annotated inspection images' },
    ],
  },
  {
    title: 'Modular Sensor Architecture',
    subtitle: 'Swap in the Field. No Tools.',
    body: 'Four interchangeable payload modules — Thermal, LiDAR, Ultrasonic, Gas Detection — mount to a common interface rail. The drone auto-detects the installed payload, loads the appropriate mission profile, and calibrates in under 60 seconds.',
    specs: [
      { label: 'Thermal', value: '640×512 FLIR, -20°C to +2000°C range' },
      { label: 'LiDAR', value: '200m range, ±1cm accuracy, 300K pts/sec' },
      { label: 'Ultrasonic', value: 'Wall-loss measurement, no contact required' },
      { label: 'Gas Detection', value: 'Real-time leak signature identification' },
    ],
  },
];

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((c) => c.classList.add('revealed'));
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-deepdive"
      aria-labelledby="tech-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-wide">
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Technology Deep-Dive</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="tech-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            Three Systems.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>One Autonomous Platform.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Navigation, intelligence, and sensing — the three technology layers that make Solaris
            the only inspection drone capable of operating where humans and conventional drones
            cannot.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3rem)' }}>
          {TECH_LAYERS.map((layer, i) => (
            <article
              key={layer.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: i === 1 ? 'var(--color-accent)' : i === 2 ? 'var(--color-secondary)' : 'var(--color-accent)',
                  borderRadius: '3px 0 0 3px',
                  opacity: 0.6,
                }}
              />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                      marginBottom: '0.5rem',
                      display: 'block',
                    }}
                  >
                    System {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      marginBottom: '0.3rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {layer.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-accent)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem' }}>
                    {layer.subtitle}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                    {layer.body}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                  }}
                >
                  {layer.specs.map((spec) => (
                    <div
                      key={spec.label}
                      style={{
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                      }}
                    >
                      <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.3rem' }}>
                        {spec.label}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.4 }}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
