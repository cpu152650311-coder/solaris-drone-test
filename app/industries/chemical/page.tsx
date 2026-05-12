import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Chemical Processing Inspection — ATEX Zone 1 Reactor, Pipe Rack, Flare, Storage',
  description: 'Autonomous drone inspection for chemical processing: ATEX Zone 1 reactor vessel survey, pipe rack corrosion mapping, flare stack assessment, storage sphere UT.',
};

const USE_CASES = [
  { title: 'Reactor Vessel Internal Survey', challenge: 'Chemical reactor vessels require internal inspection for catalyst bed condition, refractory lining integrity, and weld cracking. Manual entry requires full vessel preparation — gas-free, ventilation, rescue — and exposes personnel to residual chemical hazard.', solution: 'ATEX Zone 1 certified drone enters through a single manway. 3D SLAM navigates autonomously in the dark, GPS-denied interior. 4K visual camera with onboard LED captures refractory condition and weld seams. Ultrasonic payload measures wall thickness at programmed locations. Zero vessel preparation required beyond standard isolation.', impact: 'Reactor internal survey completed in 2 hours vs. 12 hours manual entry. Vessel turnaround reduced by 18 hours. Zero personnel confined-space entries. Inspection frequency increased from every 4 years to every 18 months.' },
  { title: 'Pipe Rack Corrosion Mapping', challenge: 'Chemical plant pipe racks span kilometers with thousands of corrosion-prone points — supports, flanges, valves, and insulation joints. Manual CUI (Corrosion Under Insulation) inspection requires insulation removal, which is destructive and covers only sample locations.', solution: 'Solaris drone flies autonomous pipe rack corridors. Thermal payload detects CUI through temperature differential at insulation wet spots. Visual AI identifies external corrosion, missing insulation, and failed steam tracing. GPS-tagged defect map feeds directly into plant CMMS.', impact: 'Pipe rack inspection cost reduced by 60%. CUI detected 2 years earlier than visual-only inspection. 100% coverage vs. 15% sample-based manual approach. Insulation replacement targeted only where needed, saving $400K in unnecessary removal.' },
  { title: 'Flare Stack & Elevated Structure Survey', challenge: 'Flare stacks, vent stacks, and distillation columns require shutdown for manual inspection. Drone-based alternatives struggle with thermal updrafts from operating flare pilots and obstacle-rich chemical plant environments.', solution: 'Solaris omnidirectional flight control compensates for thermal turbulence. Onboard AI maintains safe standoff distance from hot surfaces and obstacles. ATEX Zone 1 certification enables flight while adjacent equipment remains operating. LiDAR + visual + thermal payloads capture comprehensive structural data.', impact: 'Flare inspection completed without plant shutdown. Eliminated $180K in lost production from previous 3-day outage. Inspection data density 4× higher than manual rope-access method.' },
  { title: 'Storage Sphere & Bullet Tank UT Survey', challenge: 'LPG spheres and pressurized storage bullets require periodic ultrasonic thickness measurement. Manual UT requires full scaffolding — $50K+ per sphere, 2 weeks of preparation, and working-at-height risk for technicians.', solution: 'Solaris drone with ultrasonic payload performs non-contact UT measurement at programmed grid points on sphere and bullet surfaces. LiDAR generates as-built digital twin for deformation monitoring. ATEX Zone 1 certification covers the classified area around LPG storage.', impact: 'Sphere UT survey completed in 6 hours vs. 2 weeks manual (with scaffolding). Zero working-at-height risk. Thickness trending enabled RBI (Risk-Based Inspection) approach, extending internal inspection interval from 5 to 8 years per sphere.' },
];

export default function ChemicalPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industry — Chemical Processing</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Autonomous Inspection<br /><span style={{ color: '#0d9488' }}>for Chemical Processing.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Reactor vessels. Pipe rack CUI. Flare stacks. Storage spheres. ATEX Zone 1. No shutdown required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['ATEX Zone 1', 'CUI Detection', 'Gas Detection', 'No Shutdown'].map((c) => (
              <span key={c} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#5eead4', background: 'rgba(94,234,212,0.1)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}><span className="label-tag">Use Cases</span><h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>Process Safety Through Autonomous Inspection</h2></div>
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
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Request a Chemical Demo" service="Confined Space Inspection" /></div>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: 'white', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}><div className="container-wide"><Link href="/industries" style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', textDecoration: 'none' }}>← Back to all industries</Link></div></section>
    </>
  );
}
