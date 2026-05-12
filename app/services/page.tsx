import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Services — Full Inspection Stack, One Platform',
  description: 'Autonomous inspection drones, thermal & LiDAR payloads, ultrasonic & gas detection, fleet management, AI analytics, operator training, API access. Pay-per-inspection from $0.08/meter.',
};

const SERVICES = [
  { icon: '🚁', title: 'Autonomous Inspection Drones', detail: 'ATEX Zone 1 Certified', desc: 'The only inspection drone class rated for explosive atmospheres. Operates inside tanks, pipelines, and live offshore platforms without a pilot.' },
  { icon: '🌡️', title: 'Thermal & LiDAR Sensor Payloads', detail: '640×512 FLIR · 200m LiDAR', desc: 'Modular, mission-configurable payloads. FLIR thermal imaging for heat anomalies. 200m LiDAR for precise 3D structural models.' },
  { icon: '📡', title: 'Ultrasonic & Gas Detection', detail: 'Wall-loss · Leak identification', desc: 'Ultrasonic thickness gauges measure pipe wall-loss without contact. Gas detection sensors identify leak signatures in real time.' },
  { icon: '🗺️', title: 'Fleet Management & Mission Planning', detail: 'Web-based · Live telemetry', desc: 'Plan, execute, and monitor missions from one dashboard. Live telemetry, automated compliance reporting, full audit trail.' },
  { icon: '🤖', title: 'Automated Defect Reporting & AI Analytics', detail: 'In-flight classification', desc: 'Onboard AI classifies corrosion, cracks, coating failures, and thermal anomalies during flight. Report ready before landing.' },
  { icon: '🎓', title: 'Operator Training & Certification', detail: 'IRATA / ISO 18436', desc: 'Build internal capability with accredited training. IRATA and ISO 18436 compliant certification for your operations team.' },
  { icon: '🔧', title: 'Custom Sensor Integration', detail: 'Mission-specific payloads', desc: 'Bespoke sensor configurations for your asset class. Radiation detection, hyperspectral imaging — we integrate what you need.' },
  { icon: '⚡', title: 'API Access & Data Pipeline', detail: 'REST · WebSocket · Webhooks', desc: 'Full API access to inspection data, defect records, and telemetry streams. Integrate with your ERP or CMMS.' },
  { icon: '💰', title: 'Pay-Per-Inspection Programs', detail: 'From $0.08/meter', desc: 'Eliminate CAPEX. Deploy immediately without procurement cycles. Scale with your operational calendar.' },
  { icon: '🌍', title: '24-Hour Global Deployment', detail: 'Houston · Rotterdam · Singapore · Dubai', desc: 'Teams across four hubs mobilize within 24 hours. Emergency response for unplanned shutdowns and critical failures.' },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: '#f8fafc', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem)' }}>
        <div className="container-wide">
          <span className="label-tag">Services & Capabilities</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Every Inspection Need.<br /><span style={{ color: '#0d9488' }}>One Integrated Platform.</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '52ch' }}>From drone hardware to data pipelines — the full inspection stack so your team focuses on decisions, not logistics.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
            {SERVICES.map((s) => (
              <div key={s.title} className="card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', transition: 'box-shadow 0.3s, transform 0.3s' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem' }}>{s.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 600, marginBottom: '0.5rem' }}>{s.detail}</p>
                <p style={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Request a Service Quote" />
          </div>
        </div>
      </section>
    </>
  );
}
