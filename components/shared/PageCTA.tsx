'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

interface PageCTAProps {
  label?: string;
  service?: string;
  variant?: 'primary' | 'secondary';
}

export default function PageCTA({ label = 'Request a Demo', service, variant = 'primary' }: PageCTAProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.75rem 1.75rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
          fontWeight: 600, fontSize: '0.95rem', fontFamily: 'var(--font-display)',
          ...(variant === 'primary'
            ? { background: '#0d9488', color: 'white' }
            : { background: 'transparent', color: '#0d9488', border: '2px solid #0d9488' }),
        }}
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} service={service} />
    </>
  );
}
