import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Solaris Robotics — Autonomous Inspection. Zero Pilots. Zero Compromise.',
  description: 'ATEX Zone 1 certified autonomous inspection drones with onboard AI. Pipeline inspection from $0.08/meter. 24-hour global deployment from 4 hubs.',
  openGraph: { title: 'Solaris Robotics — Autonomous Inspection. Zero Pilots.', description: 'ATEX Zone 1 certified. Onboard AI. GPS-denied navigation. Pipeline inspection from $0.08/meter.' },
};

const STATS = [
  { value: '500+', label: 'Inspections Completed', sub: 'Across 6 continents' },
  { value: '12,000+', label: 'Linear KM Inspected', sub: 'Pipeline & confined space' },
  { value: '98.7%', label: 'Defect Detection Rate', sub: 'AI-verified, human-validated' },
  { value: '24hr', label: 'Global Deployment', sub: 'From 4 regional hubs' },
];

const INDUSTRIES = [
  { title: 'Oil & Gas', desc: 'Pipeline corridors, storage tanks, offshore platforms, and refineries. ATEX Zone 1 certified for explosive atmospheres.', href: '/industries/oil-gas', image: '/generated/hero_drone_in_flight.webp' },
  { title: 'Wind Energy', desc: 'Turbine blade inspection, tower structural assessment, and offshore wind farm monitoring.', href: '/industries/wind-energy', image: '/generated/hero_drone_in_flight.webp' },
  { title: 'Power Utilities', desc: 'Transmission line corridors, substation thermal scanning, and cooling tower internal inspection.', href: '/industries/power-utilities', image: '/generated/hero_drone_in_flight.webp' },
  { title: 'Mining', desc: 'Tailings dam monitoring, conveyor belt inspection, and open-pit highwall stability assessment.', href: '/industries/mining', image: '/generated/hero_drone_in_flight.webp' },
  { title: 'Maritime', desc: 'Hull inspection, ballast tank entry, cargo hold survey, and dock infrastructure assessment.', href: '/industries/maritime', image: '/generated/hero_drone_in_flight.webp' },
  { title: 'Chemical', desc: 'Reactor vessel inspection, pipe rack corrosion mapping, and flare stack assessment in ATEX zones.', href: '/industries/chemical', image: '/generated/hero_drone_in_flight.webp' },
];

const CAPABILITIES = [
  { title: '3D SLAM Navigation', desc: 'GPS-denied autonomous flight inside tanks, pipelines, tunnels, and confined spaces. Real-time spatial mapping with sub-cm accuracy.', href: '/technology' },
  { title: 'Onboard AI Detection', desc: 'Corrosion, cracks, coating failures, and thermal anomalies classified in-flight. Report ready before the drone lands.', href: '/technology' },
  { title: 'Modular Sensor Payloads', desc: 'Thermal (640×512 FLIR), LiDAR (200m), Ultrasonic thickness, and Gas detection. Swap in the field. No tools.', href: '/services' },
  { title: 'Fleet Management Platform', desc: 'Web-based mission planning, live multi-drone telemetry, automated ISO 19232 compliance reports, and REST API integration.', href: '/technology' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#f8fafc', padding: 'clamp(3rem, 8vw, 6rem) 0 clamp(2rem, 6vw, 4rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="label-tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>ATEX Zone 1 Certified · Onboard AI · GPS-Denied Navigation</span>
              <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.04em', color: '#1e293b', marginBottom: '1.5rem' }}>
                Autonomous Inspection.<br /><span style={{ color: '#0d9488' }}>Zero Pilots.</span><br />Zero Compromise.
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: '#64748b', maxWidth: '54ch', marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'Geist, sans-serif' }}>
                Solaris drones enter where humans cannot. ATEX-rated for explosive atmospheres, navigating GPS-denied confined spaces, with AI defect classification complete before the drone lands.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <PageCTA />
                <Link href="/technology" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '8px', border: '2px solid #0d9488', color: '#0d9488', fontWeight: 600, textDecoration: 'none', fontFamily: 'Geist, sans-serif' }}>See How It Works</Link>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                {['ATEX Zone 1', 'IECEx', 'IRATA Certified', 'ISO 18436'].map((c) => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 600, color: '#475569', fontFamily: 'Geist, sans-serif' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 80px rgba(15,23,42,0.12)' }}>
              <Image src="/generated/hero_drone_in_flight.webp" alt="Solaris autonomous inspection drone near offshore oil platform" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(10px)', borderRadius: '8px', padding: '0.65rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }} />
                <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#1e293b' }}>Live Mission — North Sea Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: 'white', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '2.5rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {STATS.map(({ value, label, sub }) => (
              <div key={label}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#1e293b', marginTop: '0.35rem' }}>{label}</div>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="label-tag">Platform Capabilities</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em', marginTop: '1rem' }}>
              Every Inspection Need.<br /><span style={{ color: '#0d9488' }}>One Integrated Platform.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
            {CAPABILITIES.map((c) => (
              <Link key={c.title} href={c.href} style={{ textDecoration: 'none', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', transition: 'box-shadow 0.25s, transform 0.25s' }} className="card-hover">
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: 'white' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="label-tag">Industries Served</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em', marginTop: '1rem' }}>
              Built for the World&apos;s<br /><span style={{ color: '#0d9488' }}>Harshest Environments.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.25rem' }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.title} href={ind.href} style={{ textDecoration: 'none', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.75rem', transition: 'box-shadow 0.25s, transform 0.25s', display: 'flex', flexDirection: 'column' }} className="card-hover">
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>{ind.title}</h3>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, flex: 1 }}>{ind.desc}</p>
                <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#0d9488', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Learn more <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 0', background: '#0f172a' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Trusted by Operators Worldwide</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 5rem)', marginTop: '2.5rem' }}>
            {[
              { quote: 'Inspection cycle: 14 days → 36 hours.', author: 'Gulf Coast Pipeline' },
              { quote: '100% under-deck coverage achieved.', author: 'North Sea Energy ASA' },
              { quote: 'Cost per linear km dropped by 62%.', author: 'Andes Pipeline Consortium' },
            ].map(({ quote, author }) => (
              <div key={author} style={{ maxWidth: '280px' }}>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'white', lineHeight: 1.5, marginBottom: '0.5rem' }}>&ldquo;{quote}&rdquo;</p>
                <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.75rem', color: '#64748b' }}>{author}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/case-studies" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#5eead4', textDecoration: 'none' }}>View all case studies →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
