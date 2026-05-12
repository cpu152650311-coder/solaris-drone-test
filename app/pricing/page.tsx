import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Pricing — Zero CAPEX, Pay-Per-Inspection from $0.08/m',
  description: 'Pipeline inspection from $0.08/meter. Enterprise fleet with dedicated drones and SLA. Training from $4,500/person. No procurement cycles, no capital commitment.',
};

const TIERS = [
  {
    name: 'Pay-Per-Inspection', price: '$0.08', unit: '/meter', highlight: false,
    desc: 'Pipeline and linear asset inspection. Pay only for what you inspect. No minimum commitment.',
    features: ['Pipeline from $0.08/meter', 'Tank: flat per-unit pricing', 'Wind turbine: per-tower pricing', 'Standard AI defect report included', 'Fleet Management Platform access', 'Monthly consolidated billing'],
  },
  {
    name: 'Enterprise Fleet', price: 'Custom', unit: '', highlight: true,
    desc: 'Dedicated drone fleet with full sensor suite. Annual contract with guaranteed SLA.',
    features: ['Dedicated Solaris drone fleet (2–10 UAVs)', 'All sensor payloads included', 'On-site operator training', 'Priority 6-hour global deployment', 'Custom sensor integration', 'Dedicated account manager + API', 'Annual volume discount', '24/7 emergency SLA'],
  },
  {
    name: 'Training & Certification', price: 'From $4,500', unit: '/person', highlight: false,
    desc: 'Build internal capability. IRATA and ISO 18436 accredited training.',
    features: ['IRATA Level 1–3 pathways', 'ISO 18436 vibration analysis', '3-day onsite intensive', 'Hands-on Solaris UAV flight time', 'AI analytics operator training', 'Annual re-certification'],
  },
];

const FAQS = [
  { q: 'What is pay-per-inspection pricing?', a: 'You pay only for what you inspect — no capital expenditure, no asset depreciation, no minimum commitment. Pipeline inspection starts at $0.08 per linear meter. You receive a consolidated monthly invoice with detailed reports.' },
  { q: 'How quickly can you deploy?', a: 'Standard: 72 hours. Emergency: within 24 hours — covered under our standard service agreement. Four regional hubs with ready-to-deploy teams and equipment.' },
  { q: 'Do we need our own pilots?', a: 'No. Solaris drones are fully autonomous. Our field technicians handle pre-flight checks. If you want internal capability, we offer IRATA and ISO 18436 training.' },
];

export default function PricingPage() {
  return (
    <>
      <section style={{ background: '#f8fafc', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>
        <div className="container-wide" style={{ maxWidth: '800px' }}>
          <span className="label-tag">Pricing & Commercial Model</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Zero CAPEX.<br /><span style={{ color: '#0d9488' }}>Immediate Deployment.</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Capital expenditure is a barrier. We removed it. Start inspecting immediately without procurement cycles or capital commitment.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {TIERS.map((tier) => (
              <div key={tier.name} className="card" style={{
                background: 'white', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                border: tier.highlight ? '2px solid #0d9488' : '1px solid #e2e8f0',
                position: 'relative', transition: 'box-shadow 0.3s, transform 0.3s',
              }}>
                {tier.highlight && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#0d9488', color: 'white', textAlign: 'center', padding: '0.3rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '12px 12px 0 0' }}>Most Popular</div>
                )}
                <div style={{ marginTop: tier.highlight ? '1.5rem' : 0, marginBottom: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem' }}>{tier.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{tier.desc}</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>{tier.price}</span>
                  {tier.unit && <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>{tier.unit}</span>}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}><path d="M3 7.5l3 3 5-5" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <PageCTA label={tier.highlight ? 'Talk to Sales' : 'Get Started'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container-wide" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginBottom: '2rem', textAlign: 'center' }}>Pricing FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.map(({ q, a }) => (
              <details key={q} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.1rem 1.5rem', cursor: 'pointer' }}>
                <summary style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 600, color: '#1e293b' }}>{q}</summary>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.75, marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #e2e8f0' }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
