import type { Metadata } from 'next';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Industries — Oil & Gas, Wind, Power, Mining, Maritime, Chemical',
  description: 'Solaris autonomous inspection drones serve 6 critical infrastructure industries: oil & gas, wind energy, power utilities, mining, maritime, and chemical processing.',
};

const INDUSTRIES = [
  { slug: 'oil-gas', title: 'Oil & Gas', icon: '01', desc: 'Pipeline corridors, storage tanks, offshore platforms, refineries, gas processing. ATEX Zone 1 certified for explosive atmospheres. API 653 compliant tank inspection.' },
  { slug: 'wind-energy', title: 'Wind Energy', icon: '02', desc: 'Blade erosion survey, lightning strike detection, tower weld assessment, offshore transition piece inspection. Blade-to-blade in 20 minutes. 200m LiDAR range.' },
  { slug: 'power-utilities', title: 'Power Utilities', icon: '03', desc: 'BVLOS transmission patrol, substation thermal scan, cooling tower internal survey, hydro dam assessment. Corona detection. GIS/CMMS integration.' },
  { slug: 'mining', title: 'Mining', icon: '04', desc: 'Tailings dam monitoring, highwall stability, conveyor belt survey, processing plant scan. GISTM compliant. IP54 dust-hardened. −40°C to +55°C rated.' },
  { slug: 'maritime', title: 'Maritime', icon: '05', desc: 'Hull UT measurement, ballast tank entry, cargo hold survey, FPSO under-deck, dock infrastructure. Class Society ready. GPS-denied confined space navigation.' },
  { slug: 'chemical', title: 'Chemical', icon: '06', desc: 'Reactor vessel survey, pipe rack CUI mapping, flare stack inspection, storage sphere UT. ATEX Zone 1. Gas detection payload. No shutdown required.' },
];

export default function IndustriesHub() {
  return (
    <>
      <section className="section-dark" style={{ padding: 'var(--space-24) 0 var(--space-16)' }}>
        <div className="container-wide">
          <span className="label-tag label-tag-dark">Industries Served</span>
          <h1 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Six Industries.<br /><span style={{ color: 'var(--color-primary)' }}>One Platform.</span></h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-dark-text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>Every industry presents unique challenges. Solaris adapts — with interchangeable sensors, ATEX certification where required, and mission profiles tuned to each environment.</p>
        </div>
      </section>

      <section className="section-pad bg-grid">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 'var(--space-6)' }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="card" style={{ textDecoration: 'none', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-border)', lineHeight: 1 }}>{ind.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-foreground)' }}>{ind.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', flex: 1 }}>{ind.desc}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 500 }}>Explore Industry →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}><PageCTA label="Discuss Your Industry" /></div>
        </div>
      </section>
    </>
  );
}
