import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'About — Founded 2021 by DJI Engineers & Inspection Veterans',
  description: 'Solaris Robotics: founded 2021. ATEX Zone 1 certified. 4 global hubs. 500+ inspections. Built by former DJI UAV engineers and infrastructure inspection veterans.',
};

const TIMELINE = [
  { y: '2021', t: 'Founded', b: 'Solaris Robotics founded by former DJI flight control engineers and infrastructure inspection veterans. Mission: build the first inspection drone that actually works in the environments where existing drones and humans both fail.' },
  { y: '2022', t: 'ATEX Zone 1 Certified', b: 'Earned the only ATEX Zone 1 certification in the inspection drone class — IECEx tested, not self-declared. First commercial deployment: Gulf of Mexico platform under-deck survey.' },
  { y: '2023', t: '3D SLAM Navigation', b: 'Proprietary SLAM engine deployed. First autonomous GPS-denied flight inside a live storage tank. Extended to pipeline interiors, ballast tanks, confined spaces.' },
  { y: '2024', t: 'Onboard AI', b: 'In-flight AI defect classification on NVIDIA Jetson Orin NX. 50,000+ annotated training images. Report ready before landing.' },
  { y: '2025', t: 'Global Expansion', b: 'Hubs in Houston, Rotterdam, Dubai, Singapore. Pay-per-inspection at $0.08/meter. 500th inspection completed. Clients across 6 continents.' },
  { y: '2026', t: 'Full-Stack Platform', b: 'Fleet management, ISO 19232 automated reporting, REST API, IRATA/ISO 18436 training. Gas Detection and EMAT payloads. Unified inspection ecosystem.' },
];

const TEAM = [
  { name: 'Dr. Alex Chen', role: 'CEO & Co-Founder', bio: 'Former DJI Flight Control Lead. 15 years UAV autonomy. PhD Aerospace Engineering, Stanford.' },
  { name: 'Maria Kristiansen', role: 'CTO & Co-Founder', bio: 'Former Equinor Senior Inspection Engineer. 18 years offshore asset integrity. MSc Subsea, NTNU.' },
  { name: 'James Okonkwo', role: 'VP Global Operations', bio: 'Former Schlumberger Ops Director. 20 years oilfield services, 4 continents. IRATA Level 3.' },
  { name: 'Dr. Lena Vogel', role: 'VP AI & Data', bio: 'Former NVIDIA Applied Research. 12 years computer vision & edge AI. PhD ML, ETH Zurich.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-dark" style={{ padding: 'var(--space-24) 0 var(--space-16)' }}>
        <div className="container-wide">
          <span className="label-tag label-tag-dark">About Solaris</span>
          <h1 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Built by Engineers.<br /><span style={{ color: 'var(--color-primary)' }}>Built for the Field.</span></h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-dark-text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>Founded 2021 by former DJI engineers and infrastructure veterans. Deep flight autonomy meets brutal field honesty about what works at −40°C on a North Sea platform.</p>
        </div>
      </section>

      <section className="section-pad bg-grid">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-16)', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/generated/credibility_field_deployment.webp" alt="Solaris field technician deploying drone at pipeline site" width={600} height={450} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>From Racetrack to Refinery</h2>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>Our founding team combined deep expertise in flight control with brutal honesty about what actually works in the field. The result: an autonomous inspection drone engineered specifically for environments where conventional drones and human inspectors both fall short.</p>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>We speak the language of plant managers and engineering directors — because we were them.</p>
            </div>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Our Journey</h2>
          <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '1.5rem', top: 0, bottom: 0, width: '2px', background: 'var(--color-border)' }} />
            {TIMELINE.map(({ y, t, b }, i) => (
              <div key={y} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-8)', paddingBottom: i < TIMELINE.length - 1 ? 'var(--space-8)' : 0, position: 'relative' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-xs)', zIndex: 1, flexShrink: 0 }}>{y.slice(2)}</div>
                <div style={{ paddingTop: 'var(--space-2)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'baseline', marginBottom: 'var(--space-1)' }}>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>{t}</h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 600 }}>{y}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '62ch' }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <span className="label-tag">Leadership</span>
            <h2 style={{ marginTop: 'var(--space-4)' }}>The People Behind the Platform</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 'var(--space-6)', maxWidth: '1000px', margin: '0 auto' }}>
            {TEAM.map((p) => (
              <div key={p.name} className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-base)', margin: '0 auto var(--space-4)' }}>{p.name.split(' ').map((n) => n[0]).join('')}</div>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: 'var(--space-1)' }}>{p.name}</h4>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 500, marginBottom: 'var(--space-3)' }}>{p.role}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-normal)' }}>{p.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}><PageCTA label="Join Our Team" /></div>
        </div>
      </section>
    </>
  );
}
