import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'FAQ — Questions Engineers Ask, Answers You Can Use',
  description: 'Frequently asked questions about Solaris autonomous inspection drones: ATEX certification, AI detection, pricing, global deployment, sensor payloads, and compliance.',
};

const FAQS = [
  { q: 'What makes Solaris drones different from any other inspection drone?', a: 'Three things. First, ATEX Zone 1 certification — the only inspection drone class rated for explosive atmospheres. Second, onboard AI — defects are classified during flight; the report is ready at landing. Third, 3D SLAM navigation — we operate autonomously inside GPS-denied environments without external signal.' },
  { q: 'What is pay-per-inspection pricing and how does it work?', a: 'You pay only for what you inspect — no CAPEX, no asset depreciation, no minimum commitment. Pipeline inspection starts at $0.08 per linear meter. Tank and wind turbine inspections follow flat per-unit pricing. Monthly consolidated invoice with detailed inspection reports.' },
  { q: 'How quickly can you deploy to our site?', a: 'Standard deployment: 72 hours. Emergency deployment: within 24 hours under our standard service agreement. Four regional hubs (Houston, Rotterdam, Dubai, Singapore) with ready-to-deploy teams and equipment.' },
  { q: 'Do we need our own drone pilots or operators?', a: 'No. Solaris drones are fully autonomous — they fly pre-planned missions without a pilot. Our field technicians handle pre-flight checks and payload configuration. For internal capability, we offer IRATA and ISO 18436 training programs.' },
  { q: 'Can the drones operate in rain, snow, or extreme temperatures?', a: 'Yes. Rated for operation from -40°C to +55°C with IP54 ingress protection. Deployed on North Sea platforms in winter, Gulf of Mexico hurricane season, and Middle East desert conditions. Specific limits depend on payload configuration.' },
  { q: 'What sensor payloads are available?', a: 'Four standard modular payloads: Thermal (640×512 FLIR), LiDAR (200m range, sub-cm accuracy), Ultrasonic thickness gauge (wall-loss, no contact), Gas detection (real-time leak signatures). Custom sensor integration available for mission-specific requirements.' },
  { q: 'How does the AI defect detection work?', a: 'Onboard neural networks trained on 50,000+ annotated inspection images classify defects in real time. Categories: corrosion (Grade 1–5), cracks down to 0.1mm, coating failures with area measurement, thermal anomalies with ΔT alerts. All classifications are human-verifiable with linked source imagery.' },
  { q: 'What compliance standards do inspection reports meet?', a: 'Reports meet ISO 19232 (NDT imaging), ISO 18436 (condition monitoring), and can be formatted to your organization\'s templates. Every report includes: timestamped imagery, defect classification with confidence scores, severity grading, GPS coordinates, and audit-ready PDF export.' },
  { q: 'How is data security handled?', a: 'All inspection data is encrypted at rest (AES-256) and in transit (TLS 1.3). Multi-tenant access control with role-based permissions. SOC 2 compliant infrastructure. Full cryptographic audit trail for regulatory submissions.' },
  { q: 'What is the minimum contract commitment?', a: 'Pay-per-inspection has no minimum commitment. Enterprise Fleet agreements are annual with guaranteed SLA. Training programs are per-person, no ongoing commitment required.' },
];

export default function FAQPage() {
  return (
    <>
      <section style={{ background: '#f8fafc', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem)' }}>
        <div className="container-wide" style={{ maxWidth: '760px' }}>
          <span className="label-tag">FAQ</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Questions Engineers Ask.<br /><span style={{ color: '#0d9488' }}>Answers You Can Use.</span>
          </h1>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.map(({ q, a }) => (
              <details key={q} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.1rem 1.5rem', cursor: 'pointer' }}>
                <summary style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 600, color: '#1e293b', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {q}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginLeft: '1rem' }}><circle cx="9" cy="9" r="8" stroke="#cbd5e1" strokeWidth="1.5" /><path d="M9 5.5v7M5.5 9h7" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </summary>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.75, marginTop: '0.9rem', paddingTop: '0.9rem', borderTop: '1px solid #e2e8f0' }}>{a}</p>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Still Have Questions?" />
          </div>
        </div>
      </section>
    </>
  );
}
