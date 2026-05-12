import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Oil & Gas Inspection — ATEX Zone 1 Drones for Pipelines, Tanks, Offshore',
  description: 'Autonomous drone inspection for oil & gas: pipeline corridors, storage tanks, offshore platforms, refineries. ATEX Zone 1 certified. GPS-denied confined space navigation.',
};

const USE_CASES = [
  { title: 'Pipeline Right-of-Way Inspection', challenge: 'Thousands of kilometers of pipeline crossing remote terrain. Manual patrol is slow, expensive, and misses subtle indicators like vegetation stress or minor ground movement.', solution: 'Solaris drones fly autonomous corridor missions at $0.08/meter. Onboard AI detects ground disturbances, vegetation anomalies, and third-party encroachment. Thermal payload identifies subsurface leaks via temperature differentials.', impact: 'Gulf Coast operator reduced 14-day manual patrol cycle to 36 hours. 3 corrosion hotspots detected that were missed in two prior rope-access inspections.' },
  { title: 'Storage Tank Internal Survey', challenge: 'API 653 mandates internal tank inspections every 5–10 years. Traditional method requires draining, degassing, scaffolding — weeks of downtime per tank. Human confined-space entry carries serious safety risk.', solution: 'Elios-class collision-tolerant drone enters through a single manway. 3D SLAM navigation maps the tank interior without GPS. 4K visual camera captures coating condition, floor pitting, and weld integrity. LiDAR payload generates survey-grade digital twin.', impact: 'Tank inspection downtime reduced from 21 days (scaffolding + manual) to under 48 hours. Zero confined-space entries required. Digital twin enables year-over-year corrosion rate comparison.' },
  { title: 'Offshore Platform Under-Deck Survey', challenge: 'Under-deck zones on offshore platforms are GPS-denied, congested, and classified as hazardous areas. Traditional rope-access inspection costs $50K+ per campaign and exposes personnel to working-at-height risk.', solution: 'ATEX Zone 1 certified Solaris drone navigates autonomously using 3D SLAM. Ultrasonic thickness payload measures structural member wall thickness at programmed grid points. Visual + thermal payloads capture coating condition and process leaks.', impact: 'North Sea operator achieved 100% under-deck coverage — up from ~65% with rope access. Defect detection time reduced from 4 weeks to 24 hours. $165K saved per platform per inspection cycle.' },
  { title: 'Flare Stack & Elevated Structure Inspection', challenge: 'Flare stacks require shutdown for manual inspection. Drone-based alternatives have struggled with thermal updrafts, obstacle-rich environments, and maintaining stable hover at height.', solution: 'Solaris omnidirectional flight control compensates for thermal updrafts. Onboard AI maintains safe standoff distance from hot surfaces. LiDAR and visual payloads capture comprehensive structural data without shutdown.', impact: 'Refinery reduced flare inspection shutdown window from 5 days to 4 hours. Eliminated scaffolding costs. Data density increased 3× over manual methods.' },
];

export default function OilGasPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industry — Oil & Gas</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Autonomous Inspection<br /><span style={{ color: '#0d9488' }}>for Oil & Gas.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Pipeline corridors, storage tanks, offshore platforms, refineries — Solaris is ATEX Zone 1 certified for the full hydrocarbon value chain.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['ATEX Zone 1', 'API 653 Compliant', 'Offshore Rated', 'GPS-Denied Navigation'].map((c) => (
              <span key={c} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#5eead4', background: 'rgba(94,234,212,0.1)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="label-tag">Use Cases</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>Solving the Hardest Inspection Challenges in Hydrocarbons</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {USE_CASES.map((uc) => (
              <div key={uc.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{uc.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#dc2626', marginBottom: '0.35rem' }}>Challenge</div>
                    <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{uc.challenge}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0d9488', marginBottom: '0.35rem' }}>How Solaris Solves It</div>
                    <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{uc.solution}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#2563eb', marginBottom: '0.35rem' }}>Measured Impact</div>
                    <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.7 }}>{uc.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Request an Oil & Gas Demo" service="Pipeline Inspection" />
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: 'white', borderTop: '1px solid #f1f5f9' }}>
        <div className="container-wide" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <span className="label-tag">Other Industries</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
            {['wind-energy', 'power-utilities', 'mining', 'maritime', 'chemical'].map((slug) => (
              <Link key={slug} href={`/industries/${slug}`} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 500, color: '#475569', textDecoration: 'none', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.5rem 1rem', transition: 'all 0.2s' }} className="footer-link">
                {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
