import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Case Studies — 500+ Inspections, 12,000+ KM, 98.7% Detection',
  description: 'Proven results: Gulf Coast Pipeline (14d→36hrs), North Sea Energy (100% under-deck), Andes Pipeline (−62% cost/km). Operator-verified performance data.',
};

const STATS = [
  { v: '500+', l: 'Inspections', sub: '6 continents' },
  { v: '12,000+', l: 'Linear KM', sub: 'Pipeline & confined' },
  { v: '98.7%', l: 'Detection Rate', sub: 'AI + human verified' },
  { v: '4.7 / 5', l: 'Client Score', sub: 'Quarterly NPS' },
];

const CASES = [
  {
    client: 'Gulf Coast Pipeline Operations', industry: 'Oil & Gas — Onshore Pipeline',
    quote: 'Solaris cut our pipeline inspection cycle from 14 days to 36 hours. The onboard AI flagged three corrosion hotspots our rope-access team had missed on the previous two inspections.',
    author: 'Sarah Chen — VP Engineering',
    metrics: [['14d → 36hrs', 'Inspection cycle'], ['3', 'Missed defects found'], ['−68%', 'Cost per linear km'], ['98.7%', 'Detection rate']],
    detail: 'The operator manages 2,400km of pipeline across coastal marsh to dense forest. Manual patrol required 4 teams working 14-day rotations. Solaris autonomous BVLOS corridor missions now cover the entire network in 36 hours per cycle with AI classification and GIS/CMMS integration.',
  },
  {
    client: 'North Sea Energy ASA', industry: 'Oil & Gas — Offshore Platform',
    quote: 'We operate a platform 120km from shore. Solaris drones fly autonomously in GPS-denied under-deck zones no GPS drone — and no human inspector — can safely reach.',
    author: 'Lars Magnussen — Asset Integrity Manager',
    metrics: [['100%', 'Under-deck coverage'], ['$165K', 'Saved per cycle'], ['24hrs', 'Report turnaround'], ['0', 'Work-at-height hours']],
    detail: 'Previously only ~65% under-deck coverage via rope access. Solaris ATEX Zone 1 drone navigated autonomously using 3D SLAM. Ultrasonic payload measured structural thickness at 4× density. AI detected coating failure and CUI missed by prior surveys. Zero production deferment.',
  },
  {
    client: 'Andes Pipeline Consortium', industry: 'Oil & Gas — Cross-Country Pipeline',
    quote: 'Pay-per-inspection let us deploy immediately without a $2.4M CAPEX request. We started within 10 days — cost per linear km dropped by 62%.',
    author: 'Carlos Ruiz — Operations Director',
    metrics: [['−62%', 'Cost per linear km'], ['$2.4M', 'CAPEX avoided'], ['10 days', 'Sign-to-flight'], ['3 years', 'Continuous contract']],
    detail: 'Pipeline crosses Andes at 500m–4,800m altitude, helicopter patrol limited by weather. Solaris BVLOS autonomous missions cover terrain inaccessible by road. LiDAR detects ground movement and landslide risk. Thermal payload identifies leaks through snow. Frequency: quarterly → monthly.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-dark" style={{ padding: 'var(--space-24) 0 var(--space-16)' }}>
        <div className="container-wide">
          <span className="label-tag label-tag-dark">Case Studies</span>
          <h1 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Trusted by Operators.<br /><span style={{ color: 'var(--color-primary)' }}>Proven in the Field.</span></h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-dark-text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>Real results from real deployments. Every data point operator-verified.</p>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: 'var(--color-background)' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}>
            {STATS.map((s) => (
              <div key={s.l} className="metric-display" style={{ textAlign: 'center' }}>
                <span className="metric-value">{s.v}</span>
                <span className="metric-label" style={{ fontWeight: 600 }}>{s.l}</span>
                <span className="metric-sub">{s.sub}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            {CASES.map((c) => (
              <div key={c.client} className="card" style={{ padding: 'var(--space-8)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.06em' }}>{c.industry}</span>
                <h3 style={{ marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>{c.client}</h3>
                <blockquote style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', paddingLeft: 'var(--space-4)', borderLeft: '3px solid var(--color-primary)', marginBottom: 'var(--space-6)' }}>
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                  {c.metrics.map(([v, l]) => (
                    <div key={l} className="metric-display">
                      <span className="metric-value" style={{ fontSize: 'var(--text-xl)' }}>{v}</span>
                      <span className="metric-sub">{l}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{c.detail}</p>
                <div style={{ marginTop: 'var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-foreground)' }}>{c.author}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}><PageCTA label="Become a Case Study" /></div>
        </div>
      </section>
    </>
  );
}
