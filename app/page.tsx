import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Solaris Robotics — Autonomous Inspection. Zero Pilots. Zero Compromise.',
  description: 'ATEX Zone 1 certified autonomous inspection drones with onboard AI. Pipeline inspection from $0.08/meter. 24-hour global deployment from 4 hubs.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="label-tag" style={{ marginBottom: '1rem' }}>ATEX Zone 1 Certified · Onboard AI · GPS-Denied Navigation</span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.04em', color: '#1e293b', marginBottom: '1.25rem' }}>
                Autonomous<br />Inspection. <span style={{ color: '#0d9488' }}>Zero Pilots.</span><br />Zero Compromise.
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: '#64748b', maxWidth: '52ch', marginBottom: '2rem', lineHeight: 1.7 }}>
                Solaris drones enter where humans cannot. ATEX-rated for explosive atmospheres, navigating GPS-denied confined spaces, with AI defect classification complete before the drone lands.
              </p>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem', paddingLeft: '1rem', borderLeft: '2px solid #0d9488' }}>
                {[
                  { value: '$0.08', unit: '/meter', label: 'Pipeline inspection — no CAPEX required' },
                  { value: '24hr', unit: '', label: 'Global deployment from 4 regional hubs' },
                  { value: '4', unit: ' hubs', label: 'Houston · Rotterdam · Singapore · Dubai' },
                ].map(({ value, unit, label }) => (
                  <div key={value} style={{ minWidth: '100px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d9488', letterSpacing: '-0.03em', lineHeight: 1 }}>
                      {value}<span style={{ fontSize: '0.55em', fontWeight: 600, color: '#64748b' }}>{unit}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', maxWidth: '140px', lineHeight: 1.4 }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <PageCTA />
                <Link href="/technology" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '8px', border: '2px solid #0d9488', color: '#0d9488', fontWeight: 600, textDecoration: 'none' }}>See How It Works</Link>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {['ATEX Zone 1', 'IRATA Certified', 'ISO 18436', 'IECEx'].map((cert) => (
                  <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 80px rgba(15,31,56,0.15)' }}>
                <Image src="/generated/hero_drone_in_flight.webp" alt="Solaris autonomous inspection drone flying near offshore oil platform" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderRadius: '8px', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 600, color: '#1e293b' }}>Live Mission Active — North Sea Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: 'white', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '2rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {[
              { value: '500+', label: 'Inspections Completed' },
              { value: '12,000+', label: 'Linear KM Inspected' },
              { value: '98.7%', label: 'Defect Detection Rate' },
              { value: '0.3%', label: 'DOA Rate' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.35rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="label-tag">What We Do</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#1e293b', marginTop: '1rem' }}>
              Every Inspection Need.<br /><span style={{ color: '#0d9488' }}>One Integrated Platform.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
            {[
              { title: 'Autonomous Drones', desc: 'ATEX Zone 1 certified. Operate in explosive atmospheres and GPS-denied spaces.', href: '/technology' },
              { title: 'AI Defect Detection', desc: 'In-flight classification — corrosion, cracks, thermal anomalies. Report before landing.', href: '/technology' },
              { title: 'Sensor Payloads', desc: 'Modular Thermal, LiDAR, Ultrasonic, and Gas Detection payloads. Swap in the field.', href: '/services' },
              { title: 'Fleet Management', desc: 'Web-based mission planning, live telemetry, and automated compliance reporting.', href: '/technology' },
              { title: 'Pay-Per-Inspection', desc: '$0.08/meter pipeline inspection. Zero CAPEX. Deploy immediately.', href: '/pricing' },
              { title: 'Global Deployment', desc: '4 hubs — Houston, Rotterdam, Dubai, Singapore. 24-hour emergency response.', href: '/global' },
            ].map(({ title, desc, href }) => (
              <Link key={title} href={href} style={{ textDecoration: 'none', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', transition: 'box-shadow 0.3s, transform 0.3s' }} className="card-hover">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <PageCTA label="Request a Demo" />
          </div>
        </div>
      </section>
    </>
  );
}
