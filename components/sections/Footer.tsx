import Link from 'next/link';

const serviceLinks = [
  { label: 'Autonomous Inspection Drones', href: '#services' },
  { label: 'Thermal & LiDAR Payloads', href: '#services' },
  { label: 'AI Defect Analytics', href: '#ai-analytics' },
  { label: 'Fleet Management Platform', href: '#fleet' },
  { label: 'Operator Training', href: '#services' },
  { label: 'API Access', href: '#services' },
];

const companyLinks = [
  { label: 'About Solaris', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Global Hubs', href: '#technology' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '/blog' },
];

const certLinks = [
  { label: 'ATEX Zone 1', href: '#certifications' },
  { label: 'IECEx Certified', href: '#certifications' },
  { label: 'IRATA Training', href: '#certifications' },
  { label: 'ISO 18436', href: '#certifications' },
  { label: 'ISO 19232', href: '#certifications' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--color-text)',
        color: 'oklch(72% 0.02 240)',
      }}
    >
      <div
        className="container-wide"
        style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              aria-label="Solaris Robotics home"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1.25rem' }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2L16 6.5V11.5L9 16L2 11.5V6.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="9" cy="9" r="2.5" fill="white" />
                </svg>
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'white', letterSpacing: '-0.02em' }}>
                Solaris <span style={{ color: 'var(--color-accent)' }}>Robotics</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, maxWidth: '38ch', marginBottom: '1.5rem', color: 'oklch(65% 0.02 240)' }}>
              Autonomous inspection drones for critical infrastructure. ATEX Zone 1 certified. Onboard AI. Serving oil & gas, wind, power, mining, and maritime — globally.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              {[
                { label: '0.3% DOA Rate', color: 'var(--color-accent)' },
                { label: '4 Global Hubs', color: 'var(--color-secondary)' },
                { label: '24hr Deployment', color: 'var(--color-accent)' },
              ].map((stat) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: stat.color, flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'oklch(80% 0.02 240)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} role="list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: '0.83rem', color: 'oklch(65% 0.02 240)', textDecoration: 'none', transition: 'color 0.2s' }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} role="list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      style={{ fontSize: '0.83rem', color: 'oklch(65% 0.02 240)', textDecoration: 'none', transition: 'color 0.2s' }}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      style={{ fontSize: '0.83rem', color: 'oklch(65% 0.02 240)', textDecoration: 'none', transition: 'color 0.2s' }}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>
              Certifications
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} role="list">
              {certLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: '0.83rem', color: 'oklch(65% 0.02 240)', textDecoration: 'none', transition: 'color 0.2s' }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid oklch(100% 0 0 / 0.08)',
            paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'oklch(55% 0.02 240)' }}>
              &copy; {new Date().getFullYear()} Solaris Robotics. All rights reserved.
            </span>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#contact" className="footer-link" style={{ fontSize: '0.75rem', color: 'oklch(55% 0.02 240)', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'oklch(55% 0.02 240)' }}>
            Intelligence where humans cannot go.
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: white !important; }
      `}</style>
    </footer>
  );
}
