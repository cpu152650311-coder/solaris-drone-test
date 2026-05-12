import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Solaris Robotics — Autonomous Inspection. Zero Pilots. Zero Compromise.',
  description: 'ATEX Zone 1 certified autonomous inspection drones with onboard AI. Pipeline inspection from $0.08/meter. 24-hour global deployment.',
  openGraph: { title: 'Solaris Robotics — Autonomous Inspection. Zero Pilots.', description: 'ATEX Zone 1 certified. Onboard AI. GPS-denied navigation. $0.08/meter pipeline inspection.' },
};

const METRICS = [
  { value: '500+', label: 'Inspections Completed', sub: 'Across 6 continents' },
  { value: '12,000+', label: 'Linear KM Inspected', sub: 'Pipeline & confined space' },
  { value: '98.7%', label: 'Defect Detection Rate', sub: 'AI-verified, human-validated' },
  { value: '<24hr', label: 'Global Deployment', sub: '4 hubs worldwide' },
];

const CAPABILITIES = [
  { title: '3D SLAM Navigation', desc: 'GPS-denied autonomous flight inside tanks, pipelines, tunnels. Real-time sub-cm spatial mapping with LiDAR + VIO + ultrasonic sensor fusion.', href: '/technology' },
  { title: 'Onboard AI Detection', desc: 'Corrosion, cracks, coating failures classified in-flight on NVIDIA Jetson Orin NX. Report generated before the drone lands — no cloud upload delay.', href: '/technology' },
  { title: 'Modular Sensor Payloads', desc: 'Thermal FLIR 640×512, 200m LiDAR, Ultrasonic UT, Gas Detection. Hot-swappable in the field. Auto-detect. Under 60 seconds to reconfigure.', href: '/services' },
  { title: 'ATEX Zone 1 Certified', desc: 'The only inspection drone class rated for explosive atmospheres. IECEx tested — not self-declared. Operate on live offshore platforms and inside chemical storage.', href: '/certifications' },
  { title: 'Fleet Management Platform', desc: 'Web-based mission planning. Live multi-drone telemetry. Automated ISO 19232 reports. REST API + webhook integration with your CMMS/ERP.', href: '/technology' },
  { title: 'Pay-Per-Inspection', desc: 'Pipeline from $0.08/meter. Tank & vessel flat per-unit pricing. Zero CAPEX. No minimum commitment. Deploy within days — not quarters.', href: '/services' },
];

const INDUSTRIES = [
  { title: 'Oil & Gas', desc: 'Pipeline corridors, storage tanks, offshore platforms, refineries.', href: '/industries/oil-gas' },
  { title: 'Wind Energy', desc: 'Blade erosion, lightning strike, tower weld, offshore transition piece.', href: '/industries/wind-energy' },
  { title: 'Power Utilities', desc: 'BVLOS transmission patrol, substation thermal, cooling tower, hydro dam.', href: '/industries/power-utilities' },
  { title: 'Mining', desc: 'Tailings dam integrity, highwall stability, conveyor belt, processing plant.', href: '/industries/mining' },
  { title: 'Maritime', desc: 'Hull UT, ballast tank entry, FPSO under-deck, dock infrastructure.', href: '/industries/maritime' },
  { title: 'Chemical', desc: 'Reactor vessel, pipe rack CUI, flare stack, storage sphere UT.', href: '/industries/chemical' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-grid" style={{ padding: 'var(--space-24) 0 var(--space-16)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-300px', right: '-200px', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'var(--space-16)', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <span className="hero-badge">
                  <span className="hero-badge-dot" />
                  ATEX Zone 1 Certified · Onboard AI · GPS-Denied Navigation
                </span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.05em', color: 'var(--color-foreground)', marginBottom: 'var(--space-6)' }}>
                Autonomous<br />Inspection.<br /><span style={{ color: 'var(--color-primary)' }}>Zero Pilots.</span>
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', maxWidth: '52ch', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
                Solaris drones enter where humans cannot — ATEX-rated for explosive atmospheres, navigating GPS-denied confined spaces, with AI defect classification complete before the drone lands.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
                <PageCTA label="Request a Demo" />
                <Link href="/technology" className="btn-secondary">Explore Technology →</Link>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
                {['ATEX Zone 1', 'IECEx', 'IRATA', 'ISO 18436'].map((cert) => (
                  <span key={cert} className="cert-badge">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
              <Image src="/generated/hero_drone_in_flight.webp" alt="Solaris autonomous inspection drone over offshore platform" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ position: 'absolute', bottom: 'var(--space-5)', left: 'var(--space-5)', background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(12px)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3) var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="hero-badge-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: '#e2e8f0', letterSpacing: '0.02em' }}>LIVE MISSION — NORTH SEA PLATFORM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAR ── */}
      <section style={{ background: 'var(--color-dark)', padding: 'var(--space-10) 0', borderTop: '1px solid var(--color-dark-border)', borderBottom: '1px solid var(--color-dark-border)' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-8)', textAlign: 'center' }}>
            {METRICS.map((m) => (
              <div key={m.label} className="metric-display metric-dark">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label" style={{ color: '#e2e8f0', fontWeight: 600 }}>{m.label}</span>
                <span className="metric-sub" style={{ color: '#64748b' }}>{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES BENTO GRID ── */}
      <section className="section-pad" style={{ background: 'var(--color-background)' }}>
        <div className="container-wide">
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <span className="label-tag">Platform Capabilities</span>
            <h2 style={{ marginTop: 'var(--space-4)' }}>Every Inspection Need.<br /><span style={{ color: 'var(--color-primary)' }}>One Integrated Platform.</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 'var(--space-4)' }}>
            {CAPABILITIES.map((c) => (
              <Link key={c.title} href={c.href} className="card" style={{ textDecoration: 'none', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-foreground)', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', flex: 1 }}>{c.desc}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 500 }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <span className="label-tag">Industries Served</span>
            <h2 style={{ marginTop: 'var(--space-4)' }}>Built for the World&apos;s<br /><span style={{ color: 'var(--color-primary)' }}>Harshest Environments.</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 'var(--space-3)' }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.title} href={ind.href} style={{ textDecoration: 'none', padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)', transition: 'all 0.25s', background: 'var(--color-background)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)' }} className="card">
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: 'var(--space-1)' }}>{ind.title}</h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{ind.desc}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M3 8h10M9 5l3 3-3 3" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="section-pad section-dark">
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <span className="label-tag label-tag-dark">Trusted by Operators Worldwide</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-8)', marginTop: 'var(--space-12)' }}>
            {[
              { quote: 'Inspection cycle: 14 days → 36 hours.', author: 'Gulf Coast Pipeline Operations', metric: '−68% cost/km' },
              { quote: '100% under-deck coverage — up from 65%.', author: 'North Sea Energy ASA', metric: '$165K saved/cycle' },
              { quote: 'Cost per linear km dropped by 62%.', author: 'Andes Pipeline Consortium', metric: '10 days to deploy' },
            ].map((t) => (
              <div key={t.author} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600, color: '#5eead4', marginBottom: 'var(--space-2)' }}>{t.metric}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'white', lineHeight: 1.5, marginBottom: 'var(--space-2)' }}>&ldquo;{t.quote}&rdquo;</p>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--color-dark-text-secondary)' }}>{t.author}</span>
              </div>
            ))}
          </div>
          <Link href="/case-studies" style={{ display: 'inline-block', marginTop: 'var(--space-10)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#5eead4', textDecoration: 'none', letterSpacing: '0.04em' }}>
            VIEW ALL CASE STUDIES →
          </Link>
        </div>
      </section>
    </>
  );
}
