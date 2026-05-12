import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Power Utilities Inspection — Transmission, Substation, Dam, Cooling Tower',
  description: 'Autonomous drone inspection for power utilities: BVLOS transmission line patrol, substation thermal scanning, cooling tower survey, hydroelectric dam assessment.',
};

const USE_CASES = [
  { title: 'Transmission Line BVLOS Patrol', challenge: 'Utilities manage thousands of kilometers of transmission corridors. Helicopter patrol costs $1,200/hour. Manual ground patrol covers only accessible terrain. Vegetation encroachment and insulator defects develop between annual cycles.', solution: 'Solaris drones fly autonomous BVLOS corridor missions with 640×512 FLIR thermal payload. AI detects overheated insulators, damaged conductors, and vegetation proximity. GPS-tagged defect imagery feeds directly into utility GIS/CMMS systems.', impact: 'Utility reduced transmission inspection cost by 68%. Defect detection rate increased from 72% (manual) to 98.7% (AI-assisted). Vegetation encroachment alerts issued 3 months earlier than previous annual cycle.' },
  { title: 'Substation Thermal Anomaly Scanning', challenge: 'Substation component failures cause outages affecting millions. Manual infrared scanning requires technicians walking energized yards — slow, incomplete, and hazardous during peak load.', solution: 'Solaris drone performs autonomous substation flight pattern with thermal and corona detection payloads. AI flags temperature anomalies exceeding ΔT thresholds. Automated report with component-level severity ratings delivered within minutes of landing.', impact: 'Substation scan time reduced from 8 hours (2-person crew) to 45 minutes. 100% component coverage achieved vs. ~70% with handheld IR. Early detection of failing disconnect switch saved $2.1M in avoided outage costs.' },
  { title: 'Cooling Tower Internal Survey', challenge: 'Natural draft cooling towers are GPS-denied, humid, and structurally complex. Internal inspection requires scaffolding or rope access — 5 days of downtime per tower.', solution: 'Solaris collision-tolerant drone navigates autonomously inside the tower shell using 3D SLAM. Visual + thermal payloads capture fill pack condition, drift eliminator integrity, and concrete shell spalling. Complete internal survey in under 2 hours.', impact: 'Tower downtime reduced from 5 days to 4 hours. Scaffolding eliminated. Internal inspection cost reduced by 80% per tower per cycle.' },
  { title: 'Hydroelectric Dam & Penstock Inspection', challenge: 'Dam face, spillway gates, and penstock interiors require specialized access. Underwater sections need divers. Above-water manual inspection is dangerous on steep dam faces.', solution: 'Solaris drone surveys dam faces at programmed standoff distances. LiDAR generates mm-accurate surface model for deformation monitoring. Inside penstocks, collision-tolerant drone navigates autonomously in GPS-denied darkness with onboard illumination.', impact: 'Hydro operator achieved complete dam inspection in 2 days vs. 3 weeks previously. Penstock internal survey completed without dewatering — saving $500K in lost generation revenue.' },
];

export default function PowerUtilitiesPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industry — Power Utilities</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Autonomous Inspection<br /><span style={{ color: '#0d9488' }}>for Power Utilities.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            BVLOS transmission patrol. Substation thermal scanning. Cooling tower internals. Hydro dam surveys. Zero outages required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['BVLOS Approved', 'Corona Detection', 'GIS Integration', 'Thermal 640×512'].map((c) => (
              <span key={c} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#5eead4', background: 'rgba(94,234,212,0.1)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="label-tag">Use Cases</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>Grid Reliability Through Autonomous Inspection</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {USE_CASES.map((uc) => (
              <div key={uc.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{uc.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {[{ l: 'Challenge', c: '#dc2626', t: uc.challenge }, { l: 'How Solaris Solves It', c: '#0d9488', t: uc.solution }, { l: 'Measured Impact', c: '#2563eb', t: uc.impact }].map((col) => (
                    <div key={col.l}>
                      <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: col.c, marginBottom: '0.35rem' }}>{col.l}</div>
                      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: col.c === '#2563eb' ? '#1e293b' : '#64748b', lineHeight: 1.7, fontWeight: col.c === '#2563eb' ? 600 : 400 }}>{col.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Request a Utility Demo" service="Pipeline Inspection" /></div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: 'white', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
        <div className="container-wide"><Link href="/industries" style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', textDecoration: 'none' }}>← Back to all industries</Link></div>
      </section>
    </>
  );
}
