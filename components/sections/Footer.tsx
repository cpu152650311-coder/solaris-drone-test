import Link from 'next/link';

const serviceCols = [
  { label: 'Autonomous Inspection Drones', href: '/services' },
  { label: 'Thermal & LiDAR Payloads', href: '/services' },
  { label: 'AI Defect Analytics', href: '/technology' },
  { label: 'Fleet Management Platform', href: '/technology' },
  { label: 'Operator Training', href: '/services' },
  { label: 'API Access', href: '/services' },
];

const companyCols = [
  { label: 'About Solaris', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Global Hubs', href: '/global' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
];

const certCols = [
  { label: 'ATEX Zone 1', href: '/certifications' },
  { label: 'IECEx Certified', href: '/certifications' },
  { label: 'IRATA Training', href: '/certifications' },
  { label: 'ISO 18436', href: '/certifications' },
  { label: 'ISO 19232', href: '/certifications' },
];

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ background: '#0f172a', color: '#94a3b8' }}>
      <div className="container-wide" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div>
            <Link href="/" aria-label="Solaris Robotics home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <span aria-hidden="true" style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 6.5V11.5L9 16L2 11.5V6.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none" /><circle cx="9" cy="9" r="2.5" fill="white" /></svg>
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'white', letterSpacing: '-0.02em' }}>Solaris <span style={{ color: '#0d9488' }}>Robotics</span></span>
            </Link>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, maxWidth: '38ch', marginBottom: '1.5rem', color: '#64748b' }}>
              Autonomous inspection drones for critical infrastructure. ATEX Zone 1 certified. Onboard AI. Serving oil & gas, wind, power, mining, and maritime — globally.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              {['0.3% DOA Rate', '4 Global Hubs', '24hr Deployment'].map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d9488' }} />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: '#cbd5e1' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {[{ title: 'Services', links: serviceCols }, { title: 'Company', links: companyCols }, { title: 'Certifications', links: certCols }].map((col) => (
            <div key={col.title}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>{col.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} style={{ fontSize: '0.83rem', color: '#94a3b8', textDecoration: 'none' }} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 'clamp(1.5rem, 3vw, 2rem)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#475569' }}>&copy; {new Date().getFullYear()} Solaris Robotics. All rights reserved.</span>
          <span style={{ fontSize: '0.75rem', color: '#475569' }}>Intelligence where humans cannot go.</span>
        </div>
      </div>
      <style>{`.footer-link:hover { color: white !important; }`}</style>
    </footer>
  );
}
