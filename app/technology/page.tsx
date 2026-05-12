import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Technology — 3D SLAM, Onboard AI, Modular Sensors',
  description: 'Three autonomous systems: 3D SLAM navigation in GPS-denied environments, onboard AI defect classification, and modular sensor payloads. No pilot required.',
};

const TECH = [
  {
    title: '3D SLAM Navigation Engine',
    sub: 'GPS-Denied. Autonomous. Real-Time.',
    body: 'Proprietary Simultaneous Localization and Mapping fuses LiDAR, visual-inertial odometry, and ultrasonic range data. The drone builds a real-time 3D map, navigates autonomously, and returns — without GPS, beacons, or pilot.',
    specs: [
      { l: 'Sensor Fusion', v: 'LiDAR + VIO + Ultrasonic + IMU' },
      { l: 'Map Resolution', v: 'Sub-cm 3D point cloud' },
      { l: 'Indoor Range', v: '500m per mission leg' },
      { l: 'Map Persistence', v: 'Saved for differential comparison' },
    ],
  },
  {
    title: 'Onboard AI Inference',
    sub: 'Classify Before Landing.',
    body: 'Neural networks trained on 50,000+ annotated inspection images run on a dedicated NVIDIA Jetson Orin NX edge processor. Corrosion, cracks, coating failures, and thermal anomalies are classified during flight.',
    specs: [
      { l: 'Hardware', v: 'NVIDIA Jetson Orin NX (100 TOPS)' },
      { l: 'Defect Categories', v: 'Corrosion, cracks, coating, thermal, deformation' },
      { l: 'Resolution', v: 'Cracks down to 0.1mm' },
      { l: 'Training Set', v: '50,000+ annotated images' },
    ],
  },
  {
    title: 'Modular Sensor Architecture',
    sub: 'Swap in the Field. No Tools.',
    body: 'Four interchangeable payload modules mount to a common interface rail. The drone auto-detects, loads the mission profile, and calibrates in under 60 seconds.',
    specs: [
      { l: 'Thermal', v: '640×512 FLIR, -20°C to +2000°C' },
      { l: 'LiDAR', v: '200m range, ±1cm, 300K pts/sec' },
      { l: 'Ultrasonic', v: 'Wall-loss, no contact required' },
      { l: 'Gas Detection', v: 'Real-time leak signatures' },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">Technology Deep-Dive</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Three Systems.<br /><span style={{ color: '#0d9488' }}>One Autonomous Platform.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Navigation, intelligence, and sensing — the three technology layers that make Solaris the only inspection drone capable of operating where humans and conventional drones cannot.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3rem)' }}>
            {TECH.map((t, i) => (
              <div key={t.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: i === 1 ? '#0d9488' : '#2563eb', borderRadius: '3px 0 0 3px', opacity: 0.6 }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0d9488', display: 'block', marginBottom: '0.5rem' }}>System {String(i + 1).padStart(2, '0')}</span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem' }}>{t.title}</h2>
                    <p style={{ fontSize: '0.88rem', color: '#0d9488', fontWeight: 600, marginBottom: '1rem' }}>{t.sub}</p>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.75 }}>{t.body}</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {t.specs.map(({ l, v }) => (
                      <div key={l} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#64748b', marginBottom: '0.3rem' }}>{l}</div>
                        <div style={{ fontSize: '0.82rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.4 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Management */}
      <section className="section-pad" style={{ background: '#0f172a' }}>
        <div className="container-wide">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>
            Fleet Management Platform.<br /><span style={{ color: '#0d9488' }}>Every Mission. Every Metric.</span>
          </h2>
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.3)' }}>
            <Image src="/generated/detail_ai_dashboard.webp" alt="Fleet management platform showing live telemetry and AI defect annotations" width={1280} height={560} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {['Mission Planning & Scheduling', 'Live Multi-Drone Telemetry', 'Automated ISO 19232 Reports', 'REST API & Webhook Integration', 'Multi-Tenant Role-Based Access', 'Cryptographic Audit Trail'].map((f) => (
              <div key={f} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'white', marginBottom: '0.25rem' }}>{f}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <PageCTA label="See the Platform Live" />
          </div>
        </div>
      </section>
    </>
  );
}
