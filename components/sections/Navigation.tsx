'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactModal from '@/components/shared/ContactModal';

const NAV_LINKS = [
  { label: 'Technology', href: '/technology' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Global', href: '/global' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(248,250,252,0.98)',
          borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'transparent'}`,
          backdropFilter: 'blur(12px)', transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 2px 20px rgba(15,31,56,0.08)' : 'none',
        }}
      >
        <div className="container-wide" style={{ display: 'flex', alignItems: 'center', height: '68px', gap: '2rem' }}>
          <Link href="/" aria-label="Solaris Robotics home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
            <span aria-hidden="true" style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 6.5V11.5L9 16L2 11.5V6.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none" /><circle cx="9" cy="9" r="2.5" fill="white" /></svg>
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#1e293b', letterSpacing: '-0.02em' }}>
              Solaris <span style={{ color: '#0d9488' }}>Robotics</span>
            </span>
          </Link>

          <nav role="navigation" aria-label="Main" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', marginLeft: 'auto' }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '0.88rem',
                color: pathname === link.href ? '#0d9488' : '#475569', textDecoration: 'none',
                position: 'relative', paddingBottom: '2px',
              }}>
                {link.label}
                <span style={{ position: 'absolute', bottom: '-2px', left: 0, height: '2px', background: '#0d9488', borderRadius: '1px', width: pathname === link.href ? '100%' : '0%', transition: 'width 0.3s' }} />
              </Link>
            ))}
          </nav>

          <button onClick={() => setModalOpen(true)} className="btn-primary desktop-nav" style={{
            marginLeft: '0.5rem', padding: '0.55rem 1.3rem', fontSize: '0.85rem', borderRadius: '8px',
            border: 'none', cursor: 'pointer', background: '#0d9488', color: 'white', fontWeight: 600, whiteSpace: 'nowrap',
          }}>Request a Demo</button>

          <button aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none', color: '#1e293b' }}>
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav aria-label="Mobile" style={{ background: 'white', borderTop: '1px solid #e2e8f0', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: pathname === link.href ? '#0d9488' : '#1e293b', textDecoration: 'none', padding: '0.25rem 0' }}>{link.label}</Link>
            ))}
            <button onClick={() => { setMobileOpen(false); setModalOpen(true); }} style={{ marginTop: '0.5rem', padding: '0.75rem', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#0d9488', color: 'white', fontWeight: 700, fontSize: '0.95rem', width: '100%' }}>Request a Demo</button>
          </nav>
        )}
      </header>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-toggle { display: flex !important; } }
        @media (min-width: 769px) { .mobile-toggle { display: none !important; } }
      `}</style>
    </>
  );
}
