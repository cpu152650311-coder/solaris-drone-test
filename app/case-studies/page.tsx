import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Case Studies — 500+ Inspections, 12,000+ KM, 98.7% Detection Rate',
  description: 'Real results: Gulf Coast Pipeline cut inspection from 14 days to 36 hours. North Sea Energy achieved 100% under-deck coverage. Andes Pipeline cut cost per km by 62%.',
};

const CASES = [
  {
    client: 'Gulf Coast Pipeline Operations',
    industry: 'Oil & Gas — Onshore Pipeline',
    quote: 'Solaris cut our pipeline inspection cycle from 14 days to 36 hours. The onboard AI flagged three corrosion hotspots that our rope-access team had missed on the previous two inspections.',
    name: 'Sarah Chen', title: 'VP Engineering',
    results: [
      { metric: '14d → 36hrs', label: 'Inspection cycle' },
      { metric: '3', label: 'Previously missed defects found' },
      { metric: '-68%', label: 'Cost per linear km' },
      { metric: '98.7%', label: 'Defect detection rate' },
    ],
    detail: 'The operator manages 2,400km of pipeline across varying terrain — from coastal marsh to dense forest. Manual right-of-way patrol required 4 teams working 14-day rotations. Solaris deployed autonomous BVLOS corridor missions covering the entire network in 36 hours per cycle. Onboard AI classified corrosion, vegetation encroachment, and third-party activity. Integration with existing GIS/CMMS enabled seamless handoff to maintenance crews.',
  },
  {
    client: 'North Sea Energy ASA',
    industry: 'Oil & Gas — Offshore Platform',
    quote: 'We operate an offshore platform 120km from shore. Solaris drones fly autonomously in GPS-denied under-deck zones that no GPS drone — and no human inspector — can safely reach.',
    name: 'Lars Magnussen', title: 'Asset Integrity Manager',
    results: [
      { metric: '100%', label: 'Under-deck coverage' },
      { metric: '$165K', label: 'Saved per platform/cycle' },
      { metric: '24hrs', label: 'Report turnaround' },
      { metric: '0', label: 'Working-at-height exposures' },
    ],
    detail: 'The platform had historically achieved only ~65% under-deck coverage via rope access, leaving critical structural members uninspected for years. Solaris ATEX Zone 1 drone navigated autonomously through the congested under-deck structure using 3D SLAM. Ultrasonic payload measured structural member thickness at 4× the spatial density of rope access. AI detected coating failure and corrosion under insulation missed by previous survey. Inspection completed during normal operations — zero production deferment.',
  },
  {
    client: 'Andes Pipeline Consortium',
    industry: 'Oil & Gas — Cross-Country Pipeline',
    quote: 'The pay-per-inspection model let us deploy immediately without a $2.4M CAPEX request. We started inspecting within 10 days of signing — our cost per linear kilometer dropped by 62%.',
    name: 'Carlos Ruiz', title: 'Operations Director',
    results: [
      { metric: '-62%', label: 'Cost per linear km' },
      { metric: '$2.4M', label: 'CAPEX avoided' },
      { metric: '10 days', label: 'From signing to first flight' },
      { metric: '3 years', label: 'Continuous contract' },
    ],
    detail: 'The consortium operates pipelines crossing the Andes at altitudes from 500m to 4,800m. Helicopter patrol was expensive and weather-limited. Solaris pay-per-inspection model eliminated the need for capital procurement. BVLOS autonomous missions cover segments inaccessible by road. LiDAR payload detects ground movement and landslide risk. Thermal payload identifies subsurface leaks through snow cover. Inspection frequency increased from quarterly to monthly with cost reduction.',
  },
];

const STATS = [
  { v: '500+', l: 'Inspections Completed', sub: 'Across 6 continents' },
  { v: '12,000+', l: 'Linear KM Inspected', sub: 'Pipeline & confined space' },
  { v: '98.7%', l: 'Defect Detection Rate', sub: 'AI-verified, human-validated' },
  { v: '4.7/5', l: 'Client Satisfaction', sub: 'NPS tracked quarterly' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Case Studies</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Trusted by Operators.<br /><span style={{ color: '#0d9488' }}>Proven in the Field.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>Real results from real deployments — on platforms, in pipelines, and across continents. Every data point below is operator-verified.</p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
            {STATS.map(({ v, l, sub }) => (
              <div key={l} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#1e293b', marginTop: '0.35rem' }}>{l}</div>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.15rem' }}>{sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {CASES.map((c) => (
              <div key={c.client} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#0d9488', background: '#f0fdfa', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{c.industry}</span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{c.client}</h3>
                <blockquote style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, margin: '0 0 1.25rem 0', paddingLeft: '1rem', borderLeft: '3px solid #0d9488' }}>&ldquo;{c.quote}&rdquo;</blockquote>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 800, color: '#0d9488' }}>{r.metric}</div>
                      <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', color: '#64748b' }}>{r.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{c.detail}</p>
                <div style={{ marginTop: '1rem' }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#1e293b' }}>{c.name}</span>
                  <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.75rem', color: '#64748b', marginLeft: '0.5rem' }}>{c.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Become Our Next Case Study" /></div>
        </div>
      </section>
    </>
  );
}
