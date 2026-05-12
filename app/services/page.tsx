import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Services — Autonomous Drones, AI Analytics, Payloads, Training, API',
  description: 'Full inspection stack: ATEX Zone 1 autonomous drones, thermal & LiDAR payloads, ultrasonic & gas detection, AI analytics, fleet management, IRATA/ISO training, REST API, pay-per-inspection.',
};

const SERVICES = [
  { title: 'Autonomous Inspection Drones', detail: 'ATEX Zone 1 · IP54 · 35min endurance', desc: 'The only drone class rated for explosive atmospheres. Collision-tolerant airframe. Omnidirectional flight. 3D SLAM GPS-denied navigation. Operates inside tanks, pipelines, offshore platforms, confined spaces. −40°C to +55°C operating range.' },
  { title: 'Thermal Payload', detail: 'FLIR Boson+ 640×512 · ≤50mK NEDT', desc: 'Radiometric thermal sensor capturing −20°C to +2000°C range. Detects coating failures, CUI, subsurface delamination, and process leaks through temperature differential. Automated ΔT threshold alerts.' },
  { title: 'LiDAR Payload', detail: '200m range · ±1cm accuracy · 300K pts/sec', desc: 'Survey-grade 3D point cloud generation. Sub-cm structural modeling for deformation monitoring. Time-series comparison for movement detection. IP65 rated for all-weather operation.' },
  { title: 'Ultrasonic Thickness', detail: '1–100mm range · ±0.01mm · no couplant', desc: 'Non-contact wall thickness measurement through coatings and marine growth. Programmed grid point measurement. GPS-tagged data with timestamp for corrosion rate trending. RBI-compatible output.' },
  { title: 'Gas Detection', detail: 'CH₄ · H₂S · CO · VOCs · real-time ppm', desc: 'Multi-gas sensor payload with real-time concentration readout. GPS-tagged leak plume mapping. Integrated with automated reporting for regulatory compliance (EU Methane Regulation, EPA OOOOb).' },
  { title: 'Fleet Management Platform', detail: 'Web-based · Multi-Drone · Live Telemetry', desc: 'Browser-based mission planning on satellite or LiDAR basemaps. Monitor multiple simultaneous missions. Automated ISO 19232 reports. REST API + WebSocket + Webhook integration with CMMS/ERP/GIS.' },
  { title: 'AI Defect Analytics', detail: 'NVIDIA Jetson Orin NX · 50K+ training images', desc: 'In-flight defect classification: corrosion Grade 1–5, cracks ≥0.1mm, coating failure cm², thermal ΔT, deformation. Report generated before landing. Every AI finding linked to source imagery.' },
  { title: 'Operator Training', detail: 'IRATA Level 1–3 · ISO 18436', desc: 'Accredited certification pathways with hands-on Solaris UAV flight time. 3-day onsite intensive. Annual re-certification. Delivered by IRATA Level 3 instructors and ISO 18436 certified assessors.' },
  { title: 'Custom Sensor Integration', detail: 'Radiation · Hyperspectral · EMAT · Corona', desc: 'Bespoke payload engineering for mission-specific requirements. MIL-SPEC interface with documented electrical and data protocol. Past integrations delivered in 6–12 weeks from specification to field-ready.' },
  { title: 'Pay-Per-Inspection', detail: 'From $0.08/meter · Zero CAPEX · No minimum', desc: 'Pipeline from $0.08/linear meter. Tank & vessel flat per-unit. Wind turbine per-tower. Monthly consolidated billing with detailed reports. Scale with your operational calendar. No procurement cycle required.' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-dark" style={{ padding: 'var(--space-24) 0 var(--space-16)' }}>
        <div className="container-wide">
          <span className="label-tag label-tag-dark">Services & Capabilities</span>
          <h1 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Every Inspection Need.<br /><span style={{ color: 'var(--color-primary)' }}>One Integrated Platform.</span></h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-dark-text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>From drone hardware to data pipelines — the full inspection stack. Your team focuses on decisions, not logistics.</p>
        </div>
      </section>

      <section className="section-pad bg-grid">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: 'var(--space-6)' }}>
            {SERVICES.map((s) => (
              <div key={s.title} className="card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-foreground)' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 500, letterSpacing: '0.02em' }}>{s.detail}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', flex: 1 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}><PageCTA label="Request a Service Quote" /></div>
        </div>
      </section>
    </>
  );
}
