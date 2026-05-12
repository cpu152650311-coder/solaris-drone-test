import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Mining Inspection — Tailings Dam, Highwall Stability, Conveyor, Plant Survey',
  description: 'Autonomous drone inspection for mining: tailings dam integrity monitoring, open-pit highwall stability assessment, conveyor belt survey, processing plant structural scan.',
};

const USE_CASES = [
  { title: 'Tailings Dam Integrity Monitoring', challenge: 'Tailings dam failures are catastrophic — environmentally, financially, and for human life. GISTM (Global Industry Standard on Tailings Management) mandates frequent, documented inspections. Manual survey of kilometer-scale structures is slow and dangerous.', solution: 'Solaris drone flies autonomous grid patterns capturing sub-cm LiDAR point clouds. Thermal payload detects seepage through temperature differential. Time-series comparison identifies millimeter-scale surface deformation between surveys. Automated GISTM-compliant report generation.', impact: 'Mining company reduced tailings survey cycle from quarterly manual to weekly autonomous. Surface deformation detected 4 months earlier than manual methods. Regulatory compliance documentation automated — 40 hours/month saved in report writing.' },
  { title: 'Open-Pit Highwall Stability Assessment', challenge: 'Highwall failures are the leading cause of fatalities in open-pit mining. Geotechnical inspection requires personnel on benches — exposed to rockfall hazard while collecting limited data points.', solution: 'Solaris drone maps highwall faces autonomously at programmed standoff distances. LiDAR generates survey-grade 3D model with joint orientation analysis. AI compares sequential surveys to identify block movement before failure. Visual payload captures rockfall debris, tension cracks, and water seepage.', impact: 'Zero personnel on highwall benches during survey. Wall movement detected 2 weeks before bench-scale failure — enabling proactive evacuation. Inspection frequency increased from monthly to weekly with zero additional labor cost.' },
  { title: 'Conveyor Belt & Transfer Point Inspection', challenge: 'Kilometer-scale conveyor systems require continuous monitoring. Idler failure, belt misalignment, and transfer point blockages cause unplanned downtime costing $50K–$200K per hour in lost production.', solution: 'Solaris drone flies autonomous belt corridor missions. Thermal payload identifies overheating idlers before failure. Visual AI detects belt edge fraying, misalignment, and material spillage. Automated defect report with GPS-tagged imagery delivered to maintenance teams.', impact: 'Idler replacement moved from reactive to predictive — 70% reduction in unplanned conveyor downtime. Belt replacement interval extended by 30% through early edge wear detection.' },
  { title: 'Processing Plant Structural Survey', challenge: 'SAG mills, ball mills, thickener tanks, and flotation cells are congested, multi-level structures. Manual inspection requires scaffolding in confined, noisy, and dusty environments.', solution: 'Collision-tolerant drone navigates autonomously through congested plant structures using 3D SLAM. Visual payload captures structural steel condition, grating integrity, and pipe support corrosion. Ultrasonic payload measures vessel wall thickness at programmed locations.', impact: 'Plant structural survey completed in 2 days vs. 3 weeks manual. 100% structural coverage achieved vs. ~60% accessible by scaffolding. Corrosion hotspots identified 18 months before structural repair would have been required.' },
];

export default function MiningPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industry — Mining</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Autonomous Inspection<br /><span style={{ color: '#0d9488' }}>for Mining.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Tailings dam monitoring. Highwall stability. Conveyor belt survey. Processing plant scan. GISTM compliant. Zero personnel at hazard.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['GISTM Compliant', 'IP54 Rated', '-40°C to +55°C', 'LiDAR Sub-cm'].map((c) => (
              <span key={c} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#5eead4', background: 'rgba(94,234,212,0.1)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}><span className="label-tag">Use Cases</span><h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>Safety & Productivity Through Autonomous Survey</h2></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {USE_CASES.map((uc) => (
              <div key={uc.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{uc.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {[{ l: 'Challenge', c: '#dc2626', t: uc.challenge }, { l: 'How Solaris Solves It', c: '#0d9488', t: uc.solution }, { l: 'Measured Impact', c: '#2563eb', t: uc.impact }].map((col) => (
                    <div key={col.l}><div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: col.c, marginBottom: '0.35rem' }}>{col.l}</div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: col.c === '#2563eb' ? '#1e293b' : '#64748b', lineHeight: 1.7, fontWeight: col.c === '#2563eb' ? 600 : 400 }}>{col.t}</p></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Request a Mining Demo" service="Pipeline Inspection" /></div>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: 'white', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}><div className="container-wide"><Link href="/industries" style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', textDecoration: 'none' }}>← Back to all industries</Link></div></section>
    </>
  );
}
