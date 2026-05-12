import Link from 'next/link';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Autonomous Inspection Drones', href: '/services' },
      { label: 'Thermal & LiDAR Payloads', href: '/services' },
      { label: 'AI Defect Analytics', href: '/technology' },
      { label: 'Fleet Management Platform', href: '/technology' },
      { label: 'Operator Training', href: '/services' },
      { label: 'API Access', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Solaris', href: '/about' },
      { label: 'Technology', href: '/technology' },
      { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ background: '#0f172a', color: '#94a3b8' }}>
      <div className="container-wide" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Solaris Robotics home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <span aria-hidden="true" style={{ width: '28px', height: '28px', borderRadius: '7px', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 6.5V11.5L9 16L2 11.5V6.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none" /><circle cx="9" cy="9" r="2.5" fill="white" /></svg>
              </span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', letterSpacing: '-0.02em' }}>Solaris <span style={{ color: '#0d9488' }}>Robotics</span></span>
            </Link>
            <p style={{ fontSize: '0.83rem', lineHeight: 1.7, maxWidth: '36ch', marginBottom: '1.25rem', color: '#64748b' }}>
              Autonomous inspection drones for critical infrastructure. ATEX Zone 1 certified. Onboard AI. Serving oil & gas, wind, power, mining, and maritime — globally.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['ATEX Zone 1', 'IECEx', 'ISO 18436', 'IRATA'].map((cert) => (
                <span key={cert} style={{ fontSize: '0.7rem', fontWeight: 600, color: '#cbd5e1', background: 'rgba(255,255,255,0.06)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontFamily: 'Geist, sans-serif' }}>{cert}</span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '1rem' }}>{col.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col.links.map((l) => (
                  <li key={l.label}><Link href={l.href} className="footer-link" style={{ fontSize: '0.81rem', color: '#94a3b8', textDecoration: 'none' }}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info — replaces dead cert links */}
          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '1rem' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Americas</div>
                <div style={{ fontSize: '0.81rem', color: '#cbd5e1' }}>Houston, TX</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Europe</div>
                <div style={{ fontSize: '0.81rem', color: '#cbd5e1' }}>Rotterdam, NL</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Middle East</div>
                <div style={{ fontSize: '0.81rem', color: '#cbd5e1' }}>Dubai, UAE</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Asia-Pacific</div>
                <div style={{ fontSize: '0.81rem', color: '#cbd5e1' }}>Singapore</div>
              </div>
              <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', marginTop: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '6px', textDecoration: 'none' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.72rem', color: '#475569' }}>&copy; {new Date().getFullYear()} Solaris Robotics. All rights reserved.</span>
          <span style={{ fontSize: '0.72rem', color: '#475569' }}>Intelligence where humans cannot go.</span>
        </div>
      </div>
      <style>{`.footer-link:hover { color: white !important; }`}</style>
    </footer>
  );
}
