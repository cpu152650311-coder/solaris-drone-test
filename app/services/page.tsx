import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Services — Autonomous Drones, AI Analytics, Payloads, Training, API',
  description: 'Full inspection stack: ATEX Zone 1 autonomous drones, thermal & LiDAR payloads, ultrasonic & gas detection, AI analytics, fleet management, IRATA/ISO training, REST API, global deployment.',
};

const SERVICES = [
  { title: 'Autonomous Inspection Drones', detail: 'ATEX Zone 1 Certified · IP54 Rated', desc: 'The only inspection drone class rated for explosive atmospheres (ATEX Zone 1, IECEx). Operates inside storage tanks, pipeline interiors, and live offshore platforms without a pilot. Collision-tolerant airframe with omnidirectional flight control. 3D SLAM navigation in GPS-denied environments. Endurance: 35 minutes with payload. Operating temperature: -40°C to +55°C.' },
  { title: 'Thermal & LiDAR Sensor Payloads', detail: 'FLIR Boson+ 640×512 · 200m LiDAR', desc: 'Modular, hot-swappable payloads. Thermal: 640×512 FLIR Boson+ radiometric sensor, ≤50mK NEDT sensitivity, -20°C to +2000°C measurement range. LiDAR: 200-meter range, ±1cm accuracy, 300,000 points per second, IP65 rated. Both payloads auto-detect on mount and calibrate in under 60 seconds.' },
  { title: 'Ultrasonic Thickness & Gas Detection', detail: 'Wall-loss 1–100mm · Real-time ppm', desc: 'Ultrasonic payload measures wall thickness through coatings and marine growth without contact or couplant — range 1–100mm, accuracy ±0.01mm. Gas detection payload provides real-time ppm readout for CH₄, H₂S, CO, and VOCs. Integrated GPS tagging of every measurement point.' },
  { title: 'Fleet Management & Mission Planning', detail: 'Web-based · Live Telemetry · Multi-Drone', desc: 'Browser-based platform for mission planning, real-time telemetry monitoring, and post-mission analysis. Plan autonomous flight paths on satellite or LiDAR basemaps. Monitor multiple simultaneous drone missions. Automated ISO 19232-compliant report generation. Cryptographic audit trail for regulatory submissions.' },
  { title: 'AI Defect Analytics & Reporting', detail: 'In-flight classification · NVIDIA Jetson Orin', desc: 'Onboard convolutional neural networks trained on 50,000+ annotated images classify defects during flight: corrosion Grade 1–5, cracks ≥0.1mm, coating failure area in cm², thermal anomalies with ΔT alerts, structural deformation. Every AI finding linked to source imagery for human verification. Report ready before landing.' },
  { title: 'Operator Training & Certification', detail: 'IRATA Level 1–3 · ISO 18436', desc: 'Build internal inspection capability with accredited training. IRATA rope access certification (Levels 1–3) with hands-on flight training. ISO 18436 vibration analysis and thermography certification. 3-day onsite intensive programs. Annual re-certification available. Delivered by IRATA Level 3 instructors.' },
  { title: 'Custom Sensor Integration', detail: 'Radiation · Hyperspectral · EMAT', desc: 'Bespoke sensor configurations engineered for your asset class. Past integrations: radiation detection (gamma spectrometry), hyperspectral imaging (mineral identification), EMAT (electromagnetic acoustic transducer for high-temp UT), corona discharge detection. MIL-SPEC interface with documented electrical and data protocol.' },
  { title: 'API Access & Data Pipeline', detail: 'REST · WebSocket · Webhooks · SDK', desc: 'Full programmatic access to inspection data. REST API for CRUD operations on missions, defects, and reports. WebSocket for real-time telemetry streaming. Webhooks for alert integration with Slack, Teams, PagerDuty. SDKs in Python and JavaScript. Integrate directly with your ERP, CMMS, or GIS platform.' },
  { title: 'Pay-Per-Inspection Programs', detail: 'From $0.08/meter · Zero CAPEX', desc: 'Pipeline inspection from $0.08 per linear meter. Tank and vessel inspection at flat per-unit pricing. Wind turbine inspection at per-tower pricing. Monthly consolidated billing with detailed inspection reports. No minimum commitment. Scale up or down with your operational calendar. Budget certainty from day one.' },
  { title: '24-Hour Global Deployment', detail: 'Houston · Rotterdam · Dubai · Singapore', desc: 'Four regional hubs maintain ready-to-deploy inspection teams, full equipment stock, and certified operators. Standard deployment: 72 hours. Emergency deployment: within 24 hours — included in standard service agreement. Covers unplanned shutdowns, critical asset failures, and regulatory deadline support.' },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Services & Capabilities</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Every Inspection Need.<br /><span style={{ color: '#0d9488' }}>One Integrated Platform.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            From drone hardware to data pipelines — the full inspection stack. Your team focuses on decisions, not logistics.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '1.5rem' }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.75rem', color: '#0d9488', fontWeight: 600, marginBottom: '0.75rem' }}>{s.detail}</p>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
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
