import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Maritime Inspection — Hull, Ballast Tank, Cargo Hold, FPSO, Dock Survey',
  description: 'Autonomous drone inspection for maritime: hull thickness measurement, ballast tank internal survey, cargo hold assessment, FPSO under-deck, dock infrastructure.',
};

const USE_CASES = [
  { title: 'Hull Thickness & Coating Survey', challenge: 'Class society rules mandate periodic hull thickness measurement. Traditional method: scaffolding or cherry pickers for above-waterline areas, divers for below. Weather-dependent, slow, and expensive for large vessels.', solution: 'Solaris drone with ultrasonic thickness payload measures hull plate thickness at programmed grid points without contact. Visual payload captures coating condition above and below waterline (via splash zone flight). LiDAR generates as-built hull digital twin for class records.', impact: 'Hull survey completed in 8 hours vs. 3 days traditional. Ultrasonic measurements at 5× spatial density. Digital twin submitted directly to classification society.' },
  { title: 'Ballast Tank Internal Survey', challenge: 'Ballast tanks are confined, GPS-denied, dark, and often contain residual water. Human entry requires gas-free certification, ventilation, rescue team on standby — 4 hours prep per tank. Multiple tanks per vessel.', solution: 'Collision-tolerant drone with onboard LED illumination navigates autonomously through ballast tank compartments using 3D SLAM. Visual payload captures coating condition, pitting, and weld cracking. No gas-free certification required. Full tank survey in 20 minutes.', impact: 'Ballast tank survey time reduced from 4 hours (manual, 1 tank) to 20 minutes. Zero confined-space personnel entries. Inspection frequency increased from every 2.5 years to annual — without increasing cost.' },
  { title: 'FPSO & Offshore Asset Integrity', challenge: 'FPSOs operate 24/7 for years without dry-docking. Under-deck structural inspection requires rope access in hazardous, GPS-denied zones. Production deferment during inspection costs $500K+ per day.', solution: 'ATEX Zone 1 certified drone navigates autonomously under FPSO decks. Ultrasonic payload measures structural member thickness. Visual + thermal payloads detect coating failure, corrosion under insulation, and process leaks. Inspection completed without production shutdown.', impact: 'FPSO under-deck survey completed during normal operations — zero production deferment. Structural data collected at 8× density of rope-access survey. Saved $3.2M per inspection cycle in avoided deferment costs.' },
  { title: 'Dock & Jetty Infrastructure Assessment', challenge: 'Port infrastructure — quay walls, fenders, bollards, and dolphins — requires underwater and above-water survey. Divers handle below-water; above-water is manual and incomplete. Corrosion in tidal zone is the hardest to inspect.', solution: 'Solaris drone surveys dock structures from waterline to top. LiDAR captures as-built geometry. Visual AI detects concrete spalling, steel corrosion, and timber degradation. Ultrasonic payload measures steel pile thickness in splash zone.', impact: 'Port authority completed full berth survey in 2 days vs. 2 weeks. Splash zone thickness data collected for first time without divers. Maintenance prioritization based on quantitative remaining wall thickness.' },
];

export default function MaritimePage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industry — Maritime</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Autonomous Inspection<br /><span style={{ color: '#0d9488' }}>for Maritime.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Hull thickness. Ballast tank entry. FPSO under-deck. Dock infrastructure. GPS-denied. Confined-space rated.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['Class Society Ready', 'Ultrasonic UT', 'Confined Space', 'Salt-Spray Hardened'].map((c) => (
              <span key={c} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#5eead4', background: 'rgba(94,234,212,0.1)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}><span className="label-tag">Use Cases</span><h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>Vessel & Port Infrastructure Inspection</h2></div>
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
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Request a Maritime Demo" service="Confined Space Inspection" /></div>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: 'white', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}><div className="container-wide"><Link href="/industries" style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', textDecoration: 'none' }}>← Back to all industries</Link></div></section>
    </>
  );
}
