'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactModal from '@/components/shared/ContactModal';

const NAV_LINKS = [
  { label: 'Technology', href: '/technology' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
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

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(248,250,252,0.98)',
          borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'transparent'}`,
          backdropFilter: 'blur(12px)', transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 1px 3px rgba(15,23,42,0.06)' : 'none',
        }}
      >
        <div className="container-wide" style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '2rem' }}>
          <Link href="/" aria-label="Solaris Robotics home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
            <span aria-hidden="true" style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 6.5V11.5L9 16L2 11.5V6.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none" /><circle cx="9" cy="9" r="2.5" fill="white" /></svg>
            </span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1e293b', letterSpacing: '-0.02em' }}>
              Solaris <span style={{ color: '#0d9488' }}>Robotics</span>
            </span>
          </Link>

          <nav aria-label="Main" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: 'auto' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '0.875rem',
                  color: isActive(link.href) ? '#0d9488' : '#475569',
                  textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: '6px',
                  transition: 'color 0.2s, background 0.2s',
                  background: isActive(link.href) ? '#f0fdfa' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button onClick={() => setModalOpen(true)} className="btn-primary desktop-nav" style={{
            marginLeft: '0.75rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '8px',
            border: 'none', cursor: 'pointer', background: '#0d9488', color: 'white', fontWeight: 600, whiteSpace: 'nowrap',
          }}>Request a Demo</button>

          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none', color: '#1e293b' }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav aria-label="Mobile" style={{ background: 'white', borderTop: '1px solid #e2e8f0', padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '0.95rem',
                  color: isActive(link.href) ? '#0d9488' : '#1e293b', textDecoration: 'none',
                  padding: '0.5rem 0.75rem', borderRadius: '6px',
                  background: isActive(link.href) ? '#f0fdfa' : 'transparent',
                }}>
                {link.label}
              </Link>
            ))}
            <button onClick={() => { setMobileOpen(false); setModalOpen(true); }} style={{ marginTop: '0.5rem', padding: '0.65rem', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#0d9488', color: 'white', fontWeight: 600, fontSize: '0.9rem', width: '100%' }}>
              Request a Demo
            </button>
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
