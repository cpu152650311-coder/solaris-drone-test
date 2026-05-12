import type { Metadata } from 'next';
import GlobalMapClient from './GlobalMapClient';

export const metadata: Metadata = {
  title: 'Global Deployment — 4 Hubs, 24-Hour Response',
  description: 'Deployment teams in Houston, Rotterdam, Dubai, and Singapore. 24-hour emergency response anywhere in the world. Standard deployment in 72 hours.',
};

const HUBS = [
  { city: 'Houston', region: 'Americas', flag: '🇺🇸', tz: 'UTC-6 (CST)', coverage: 'North & South America, Gulf of Mexico', addr: '1200 McKinney Street, Suite 450, Houston, TX 77010', coords: [-95.3698, 29.7604] as [number, number] },
  { city: 'Rotterdam', region: 'Europe & Africa', flag: '🇳🇱', tz: 'UTC+1 (CET)', coverage: 'Europe, North Sea, West Africa', addr: 'Wilhelminakade 137, 3072 AP Rotterdam, Netherlands', coords: [4.4777, 51.9244] as [number, number] },
  { city: 'Dubai', region: 'Middle East & Caspian', flag: '🇦🇪', tz: 'UTC+4 (GST)', coverage: 'Middle East, East Africa, Caspian', addr: 'Jumeirah Lakes Towers, Cluster X, Dubai, UAE', coords: [55.2708, 25.2048] as [number, number] },
  { city: 'Singapore', region: 'Asia-Pacific', flag: '🇸🇬', tz: 'UTC+8 (SGT)', coverage: 'Southeast Asia, Australia, China', addr: '1 Raffles Place, #20-61, Tower One, Singapore 048616', coords: [103.8198, 1.3521] as [number, number] },
];

export default function GlobalPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">Global Deployment</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            4 Regional Hubs.<br /><span style={{ color: '#0d9488' }}>24-Hour Deployment Anywhere.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Each hub maintains ready-to-deploy inspection teams, full equipment stock, and certified operators. Emergency response is built into our standard service agreement — not an add-on.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <GlobalMapClient hubs={HUBS} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {HUBS.map((hub) => (
              <div key={hub.city} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{hub.flag}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#1e293b' }}>{hub.city}</h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{hub.region}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div><span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Timezone</span><br /><span style={{ fontSize: '0.85rem', color: '#1e293b' }}>{hub.tz}</span></div>
                  <div><span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Coverage</span><br /><span style={{ fontSize: '0.85rem', color: '#1e293b' }}>{hub.coverage}</span></div>
                  <div><span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8' }}>Address</span><br /><span style={{ fontSize: '0.85rem', color: '#1e293b' }}>{hub.addr}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
