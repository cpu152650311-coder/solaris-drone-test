import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Wind Energy Inspection — Drone-Based Turbine Blade & Tower Survey',
  description: 'Autonomous drone inspection for wind energy: blade leading edge erosion, lightning strike damage, tower structural assessment, offshore transition piece survey. 20 min per turbine.',
};

const USE_CASES = [
  { title: 'Blade Leading Edge Erosion Survey', challenge: 'Leading edge erosion reduces annual energy production by 2–5%. Manual blade inspection requires rope access or ground-based telephoto — slow, subjective, and missing early-stage micro-cracking.', solution: 'Solaris drone captures 640×512 FLIR thermal and 4K visual imagery of all three blades in a single automated 20-minute flight. Onboard AI classifies erosion severity (Grade 1–5) and measures affected area in cm². Report generated before landing.', impact: 'Wind farm operator reduced blade inspection time from 3 hours (manual rope access) to 20 minutes per turbine. Early-stage erosion detected 6 months before visible to ground-based survey, saving $80K per turbine in repair costs.' },
  { title: 'Lightning Strike Damage Assessment', challenge: 'Lightning strikes on blades can cause delamination invisible from the ground. Delayed detection leads to catastrophic blade failure — $200K replacement cost per blade.', solution: 'Thermal payload detects sub-surface delamination through temperature differential. AI cross-references thermal pattern against 50,000+ trained lightning strike signatures. Automated severity score with recommended action (monitor / repair / replace).', impact: 'Offshore wind farm detected 3 lightning-struck blades during routine survey. All repaired within 48 hours — zero blade losses over 3-year deployment.' },
  { title: 'Tower Structural & Weld Inspection', challenge: 'Bolt tension loss, weld cracking, and coating degradation accumulate over time. Manual tower inspection requires climbing — 4 hours per tower, 1 person at height.', solution: 'LiDAR payload captures sub-cm 3D structural model of tower shell and flange connections. Visual AI detects coating degradation and surface cracking. Ultrasonic payload measures bolt tension non-invasively on critical flange connections.', impact: 'Tower inspection time reduced by 85%. Bolt tension data trended across the entire fleet, enabling predictive maintenance scheduling instead of calendar-based checks.' },
  { title: 'Offshore Transition Piece & Substructure Survey', challenge: 'Splash zone corrosion, marine growth, and grout connection degradation require diver or ROV inspection — expensive, weather-dependent, and limited to visual-only assessment.', solution: 'Solaris drone operates from the transition piece deck, navigating autonomously around the structure. LiDAR generates above-water digital twin. Ultrasonic payload measures wall thickness at programmed grid points through marine growth.', impact: 'Offshore operator eliminated 70% of diver deployments for above-water structural survey. Wall thickness data collected at 10× the spatial density of manual methods.' },
];

export default function WindEnergyPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industry — Wind Energy</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Autonomous Inspection<br /><span style={{ color: '#0d9488' }}>for Wind Energy.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Blade-to-blade in 20 minutes. Lightning strike detection. Tower weld assessment. Offshore rated. Stop climbing — start flying.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['20 min/turbine', 'Thermal 640×512', '200m LiDAR', 'Offshore Rated'].map((c) => (
              <span key={c} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#5eead4', background: 'rgba(94,234,212,0.1)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="label-tag">Use Cases</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>End-to-End Wind Asset Inspection</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {USE_CASES.map((uc) => (
              <div key={uc.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{uc.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {[{ label: 'Challenge', color: '#dc2626', text: uc.challenge }, { label: 'How Solaris Solves It', color: '#0d9488', text: uc.solution }, { label: 'Measured Impact', color: '#2563eb', text: uc.impact }].map((col) => (
                    <div key={col.label}>
                      <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: col.color, marginBottom: '0.35rem' }}>{col.label}</div>
                      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: col.color === '#2563eb' ? '#1e293b' : '#64748b', lineHeight: 1.7, fontWeight: col.color === '#2563eb' ? 600 : 400 }}>{col.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}><PageCTA label="Request a Wind Demo" service="Wind Turbine Inspection" /></div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: 'white', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
        <div className="container-wide" style={{ maxWidth: '760px' }}>
          <Link href="/industries" style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', textDecoration: 'none' }}>← Back to all industries</Link>
        </div>
      </section>
    </>
  );
}
