import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Case Studies — Trusted by Operators, Proven in the Field',
  description: '500+ inspections completed, 12,000+ linear KM inspected, 98.7% defect detection rate. Gulf Coast Pipeline, North Sea Energy, Andes Pipeline Consortium case studies.',
};

const CASES = [
  {
    quote: 'Solaris cut our pipeline inspection cycle from 14 days to 36 hours. The onboard AI flagged three corrosion hotspots that our rope-access team had missed on the previous two inspections.',
    name: 'Sarah Chen', title: 'VP Engineering, Gulf Coast Pipeline Operations',
    metric: '14d → 36hrs', ml: 'inspection cycle reduction',
  },
  {
    quote: 'We operate an offshore platform 120km from shore. Solaris drones fly autonomously in GPS-denied under-deck zones that no GPS drone — and no human inspector — can safely reach.',
    name: 'Lars Magnussen', title: 'Asset Integrity Manager, North Sea Energy ASA',
    metric: '100%', ml: 'under-deck coverage',
  },
  {
    quote: 'The pay-per-inspection model let us deploy immediately without a $2.4M CAPEX request. We started inspecting within 10 days of signing — our cost per linear kilometer dropped by 62%.',
    name: 'Carlos Ruiz', title: 'Operations Director, Andes Pipeline Consortium',
    metric: '-62%', ml: 'cost per linear km',
  },
];

const STATS = [
  { v: '500+', l: 'Inspections Completed' },
  { v: '12,000+', l: 'Linear KM Inspected' },
  { v: '98.7%', l: 'Defect Detection Rate' },
  { v: '4.7/5', l: 'Client Satisfaction' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">Case Studies</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Trusted by Operators.<br /><span style={{ color: '#0d9488' }}>Proven in the Field.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>Real results from real deployments — on platforms, in pipelines, and across continents.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
            {STATS.map(({ v, l }) => (
              <div key={l} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.35rem' }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {CASES.map((c) => (
              <div key={c.name} className="card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="#0d9488" opacity="0.2" style={{ marginBottom: '1rem' }}><path d="M0 16V9.5C0 5.5 2 2 5 0l2 2C4.5 3.5 3 5.5 3 8h5v8H0zm12 0V9.5C12 5.5 14 2 17 0l2 2c-2.5 1.5-4 3.5-4 6h5v8H12z" /></svg>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.75, marginBottom: '1.25rem' }}>&ldquo;{c.quote}&rdquo;</p>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>{c.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{c.title}</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ccfbf1', borderRadius: '8px', padding: '0.4rem 0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#0d9488' }}>{c.metric}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{c.ml}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Become Our Next Case Study" />
          </div>
        </div>
      </section>
    </>
  );
}
