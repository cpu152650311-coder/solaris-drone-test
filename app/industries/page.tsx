import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Industries — Oil & Gas, Wind, Power, Mining, Maritime, Chemical',
  description: 'Solaris autonomous inspection drones serve 6 critical infrastructure industries: oil & gas, wind energy, power utilities, mining, maritime, and chemical processing.',
};

const INDUSTRIES = [
  { slug: 'oil-gas', title: 'Oil & Gas', icon: '🛢️', desc: 'Pipeline corridors, storage tanks, offshore platforms, refineries, and gas processing facilities.', stats: 'ATEX Zone 1 · 500km+ pipelines inspected · Offshore rated', highlights: ['Pipeline right-of-way inspection', 'Storage tank internal survey', 'Offshore platform under-deck', 'Flare stack & riser inspection', 'Refinery confined space entry'] },
  { slug: 'wind-energy', title: 'Wind Energy', icon: '💨', desc: 'Onshore and offshore wind turbine blade inspection, tower structural assessment, and farm-wide monitoring.', stats: 'Blade-to-blade in 20 min · Lightning strike detection · 200m LiDAR', highlights: ['Blade leading edge erosion', 'Lightning strike damage assessment', 'Tower weld & bolt inspection', 'Offshore transition piece survey', 'Annual farm-wide monitoring'] },
  { slug: 'power-utilities', title: 'Power Utilities', icon: '⚡', desc: 'Transmission corridors, substation thermal scanning, cooling tower internals, and dam infrastructure.', stats: 'BVLOS approved · Thermal 640×512 FLIR · Live corona detection', highlights: ['Transmission line corridor patrol', 'Substation thermal anomaly scan', 'Cooling tower internal survey', 'Hydroelectric dam inspection', 'Insulator defect detection'] },
  { slug: 'mining', title: 'Mining', icon: '⛏️', desc: 'Tailings dam monitoring, conveyor belt inspection, open-pit highwall stability, and processing plant survey.', stats: 'IP54 rated · -40°C to +55°C · Dust & vibration hardened', highlights: ['Tailings dam integrity monitoring', 'Highwall stability assessment', 'Conveyor belt inspection', 'Stockpile volumetric survey', 'Processing plant structural scan'] },
  { slug: 'maritime', title: 'Maritime', icon: '🚢', desc: 'Hull inspection, ballast tank entry, cargo hold survey, dock infrastructure, and FPSO asset integrity.', stats: 'GPS-denied navigation · Confined space rated · Salt-spray hardened', highlights: ['Hull thickness measurement', 'Ballast tank internal survey', 'Cargo hold damage assessment', 'Dock & jetty structural scan', 'FPSO under-deck inspection'] },
  { slug: 'chemical', title: 'Chemical', icon: '🧪', desc: 'Reactor vessels, pipe rack corrosion mapping, flare stacks, and storage spheres in ATEX-classified zones.', stats: 'ATEX Zone 1 · Gas detection payload · Chemical resistant', highlights: ['Reactor vessel internal survey', 'Pipe rack corrosion mapping', 'Flare stack inspection', 'Storage sphere UT measurement', 'Containment bund wall survey'] },
];

export default function IndustriesPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Industries Served</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Six Industries.<br /><span style={{ color: '#0d9488' }}>One Platform.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Every industry presents unique inspection challenges. Solaris adapts — with interchangeable sensor payloads, ATEX certification where required, and mission profiles tuned to each environment.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} style={{ textDecoration: 'none', background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2rem)', transition: 'box-shadow 0.25s, transform 0.25s', display: 'flex', flexDirection: 'column' }} className="card-hover">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.6rem' }}>{ind.icon}</span>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#1e293b' }}>{ind.title}</h3>
                </div>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{ind.desc}</p>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#0d9488', background: '#f0fdfa', borderRadius: '6px', padding: '0.5rem 0.75rem', marginBottom: '1rem' }}>{ind.stats}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {ind.highlights.slice(0, 3).map((h) => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Geist, sans-serif', fontSize: '0.8rem', color: '#475569' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      {h}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Discuss Your Industry Needs" />
          </div>
        </div>
      </section>
    </>
  );
}
