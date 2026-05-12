import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'About — Built by Engineers, Built for the Field',
  description: 'Founded 2021 by former DJI engineers and infrastructure inspection veterans. ATEX Zone 1 certified, 4 global hubs, 500+ inspections completed across 6 continents.',
};

const TIMELINE = [
  { y: '2021', t: 'Founded', b: 'Solaris Robotics founded by former DJI UAV engineers and infrastructure inspection veterans who saw the gap between what drones could do and what industrial sites needed.' },
  { y: '2022', t: 'ATEX Zone 1 Certified', b: 'Earned the only ATEX Zone 1 certification in the inspection drone class — enabling autonomous flight inside explosive atmospheres and live offshore platforms.' },
  { y: '2023', t: '3D SLAM Navigation', b: 'Deployed proprietary 3D SLAM engine for GPS-denied navigation inside storage tanks, pipelines, and confined spaces — no external signal required.' },
  { y: '2024', t: 'Onboard AI Launch', b: 'Released in-flight AI defect classification. Corrosion, cracks, coating failures, and thermal anomalies identified before the drone lands.' },
  { y: '2025', t: 'Global Expansion', b: 'Established 4 regional hubs. Launched pay-per-inspection at $0.08/meter. Deployed fleets across 6 continents.' },
  { y: '2026', t: 'Full-Stack Platform', b: 'Integrated fleet management, automated compliance reporting, REST API, and operator training into a unified inspection data ecosystem.' },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">About Solaris</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Built by Engineers.<br /><span style={{ color: '#0d9488' }}>Built for the Field.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Founded in 2021 by engineers who built advanced UAV systems at DJI and veterans who spent careers inspecting pipelines, offshore platforms, and wind assets in the field.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
              <Image src="/generated/credibility_field_deployment.webp" alt="Solaris field technician in PPE deploying drone at pipeline site" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '14px' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>From Racetrack to Refinery</h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>Our founding team brought together deep expertise in flight control systems and brutal honesty about what actually works at -40°C on a North Sea platform. That combination produced something the industry had never seen — an autonomous inspection drone engineered for the environments where conventional drones and human inspectors both fall short.</p>
              <p style={{ color: '#64748b', lineHeight: 1.8 }}>We speak the language of plant managers and engineering directors — because we were them. Precision, safety, and operational reliability are not marketing words. They are the specification.</p>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginBottom: '2.5rem', textAlign: 'center' }}>Our Journey</h2>
          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: 'clamp(1rem, 2vw, 1.5rem)', top: 0, bottom: 0, width: '2px', background: '#0d9488', opacity: 0.25 }} />
            {TIMELINE.map(({ y, t, b }, i) => (
              <div key={y} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: i < TIMELINE.length - 1 ? '2.5rem' : 0, position: 'relative' }}>
                <div style={{ width: 'clamp(2.5rem, 3vw, 3rem)', height: 'clamp(2.5rem, 3vw, 3rem)', borderRadius: '50%', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 'clamp(0.65rem, 1vw, 0.75rem)', zIndex: 1, position: 'relative' }}>{y.slice(2)}</div>
                <div style={{ paddingTop: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 700, color: '#1e293b' }}>{t}</h4>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 600, color: '#0d9488' }}>{y}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7, maxWidth: '62ch' }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Join Our Mission" />
          </div>
        </div>
      </section>
    </>
  );
}
