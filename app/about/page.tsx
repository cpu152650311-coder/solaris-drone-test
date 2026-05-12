import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'About — Founded 2021 by DJI Engineers & Inspection Veterans',
  description: 'Solaris Robotics: founded 2021. ATEX Zone 1 certified. 4 global hubs. 500+ inspections. Built by former DJI UAV engineers and infrastructure inspection veterans.',
};

const TIMELINE = [
  { y: '2021', t: 'Founded', b: 'Solaris Robotics founded by former DJI flight control engineers and infrastructure inspection veterans who saw the gap between what commercial drones could do and what industrial sites actually needed: ATEX certification, GPS-denied navigation, and onboard intelligence.' },
  { y: '2022', t: 'ATEX Zone 1 Certified', b: 'Earned the only ATEX Zone 1 certification in the inspection drone class — IECEx tested, not self-declared. Enabled autonomous flight inside explosive atmospheres and on live offshore platforms. First commercial deployment: Gulf of Mexico platform under-deck survey.' },
  { y: '2023', t: '3D SLAM Navigation', b: 'Deployed proprietary SLAM engine fusing LiDAR, stereo-VIO, and ultrasonic sensors. First autonomous GPS-denied flight inside a live storage tank. Extended capability to pipeline interiors, ballast tanks, and confined spaces.' },
  { y: '2024', t: 'Onboard AI Launch', b: 'Released in-flight AI defect classification powered by NVIDIA Jetson Orin NX. Corrosion, cracks, coating failures, and thermal anomalies identified during flight. Report ready before landing. Training dataset: 50,000+ annotated industrial images.' },
  { y: '2025', t: 'Global Expansion', b: 'Established regional hubs in Houston, Rotterdam, Dubai, and Singapore. Launched pay-per-inspection commercial model at $0.08/meter. Deployed fleets serving clients across 6 continents. 500th inspection completed.' },
  { y: '2026', t: 'Full-Stack Platform', b: 'Integrated fleet management, automated ISO 19232 reporting, REST API, and IRATA/ISO 18436 operator training pathways into a unified inspection ecosystem. Launched Gas Detection and EMAT custom payloads.' },
];

const TEAM = [
  { name: 'Dr. Alex Chen', role: 'CEO & Co-Founder', bio: 'Former DJI Flight Control Lead. 15 years in UAV autonomy and control systems. PhD Aerospace Engineering, Stanford.' },
  { name: 'Maria Kristiansen', role: 'CTO & Co-Founder', bio: 'Former Equinor Senior Inspection Engineer. 18 years in offshore asset integrity. MSc Subsea Engineering, NTNU.' },
  { name: 'James Okonkwo', role: 'VP Global Operations', bio: 'Former Schlumberger Operations Director. 20 years in oilfield services across 4 continents. IRATA Level 3.' },
  { name: 'Dr. Lena Vogel', role: 'VP AI & Data', bio: 'Former NVIDIA Applied Research. 12 years in computer vision and edge AI. PhD Machine Learning, ETH Zurich.' },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>About Solaris</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Built by Engineers.<br /><span style={{ color: '#0d9488' }}>Built for the Field.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Founded in 2021 by former DJI engineers and infrastructure inspection veterans. We combine deep flight autonomy with brutal field honesty about what actually works at -40°C on a North Sea platform.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <div><Image src="/generated/credibility_field_deployment.webp" alt="Solaris field technician at pipeline site" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '14px', boxShadow: '0 12px 48px rgba(15,23,42,0.1)' }} /></div>
            <div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', fontWeight: 700, color: '#1e293b', marginBottom: '1rem', letterSpacing: '-0.02em' }}>From Racetrack to Refinery</h2>
              <p style={{ fontFamily: 'Geist, sans-serif', color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>Our founding team brought together deep expertise in flight control systems and brutal honesty about what works in the field. That combination produced something the industry had never seen — an autonomous inspection drone engineered specifically for environments where conventional drones and human inspectors both fall short.</p>
              <p style={{ fontFamily: 'Geist, sans-serif', color: '#64748b', lineHeight: 1.8 }}>We speak the language of plant managers and engineering directors — because we were them. Precision, safety, and operational reliability are not marketing words here. They are the specification.</p>
            </div>
          </div>

          {/* Timeline */}
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginBottom: '2.5rem', textAlign: 'center' }}>Our Journey</h2>
          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: 'clamp(1rem, 2vw, 1.5rem)', top: 0, bottom: 0, width: '2px', background: '#0d9488', opacity: 0.2 }} />
            {TIMELINE.map(({ y, t, b }, i) => (
              <div key={y} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: i < TIMELINE.length - 1 ? '2.5rem' : 0, position: 'relative' }}>
                <div style={{ width: 'clamp(2.5rem, 3vw, 3rem)', height: 'clamp(2.5rem, 3vw, 3rem)', borderRadius: '50%', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(0.65rem, 1vw, 0.75rem)', zIndex: 1 }}>{y.slice(2)}</div>
                <div style={{ paddingTop: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 700, color: '#1e293b' }}>{t}</h4><span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#0d9488' }}>{y}</span>
                  </div>
                  <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7, maxWidth: '62ch' }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: 'white' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            <span className="label-tag">Leadership</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>The People Behind the Platform</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {TEAM.map((p) => (
              <div key={p.name} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem', margin: '0 auto 1rem' }}>{p.name.split(' ').map((n) => n[0]).join('')}</div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.2rem' }}>{p.name}</h3>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.75rem', color: '#0d9488', fontWeight: 600, marginBottom: '0.75rem' }}>{p.role}</p>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{p.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Join Our Team" /></div>
        </div>
      </section>
    </>
  );
}
