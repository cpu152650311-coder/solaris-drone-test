'use client';

import { useEffect, useState, useCallback } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

const FORM_SUBMIT_URL = 'https://formsubmit.co/YOUR_EMAIL_HERE';

const INDUSTRIES = [
  'Oil & Gas', 'Wind Energy', 'Power Utilities', 'Mining',
  'Maritime', 'Chemical Processing', 'Other',
];

const SERVICES = [
  'Pipeline Inspection', 'Storage Tank Inspection', 'Offshore Platform Inspection',
  'Wind Turbine Inspection', 'Confined Space Inspection', 'Emergency Response',
  'Training & Certification', 'Other',
];

export default function ContactModal({ isOpen, onClose, service }: ContactModalProps) {
  const [step, setStep] = useState<'form' | 'sending' | 'done' | 'error'>('form');
  const [form, setForm] = useState({ name: '', company: '', email: '', industry: '', service: service || '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen && service) setForm((p) => ({ ...p, service }));
  }, [isOpen, service]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('sending');
    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStep('done'); } else { setStep('error'); setErrorMsg('Submission failed. Please email demo@solarisrobotics.com'); }
    } catch {
      setStep('error'); setErrorMsg('Network error. Please try again or email demo@solarisrobotics.com');
    }
  }, [form]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Request a demo"
    >
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(15,31,56,0.7)', backdropFilter: 'blur(4px)' }} />
      <div style={{
        position: 'relative', background: 'white', borderRadius: '16px',
        width: '100%', maxWidth: '560px', maxHeight: '90vh', overflow: 'auto',
        boxShadow: '0 24px 80px rgba(15,31,56,0.3)', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      }}>
        <button onClick={onClose} aria-label="Close dialog" style={{
          position: 'absolute', top: '1rem', right: '1rem', width: '32px', height: '32px',
          borderRadius: '50%', border: 'none', background: '#f1f5f9', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b',
          fontSize: '1.1rem',
        }}>✕</button>

        {step === 'done' ? (
          <div style={{ textAlign: 'center', padding: 'clamp(2rem, 4vw, 4rem) 1rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"><path d="M5 14l7 7 11-11" /></svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Demo Request Received</h2>
            <p style={{ color: '#64748b', lineHeight: 1.7, maxWidth: '38ch', margin: '0 auto' }}>
              Our team will respond within 2 hours with a tailored proposal including cost estimate and deployment timeline.
            </p>
          </div>
        ) : step === 'error' ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <p style={{ color: '#dc2626', marginBottom: '1rem' }}>{errorMsg}</p>
            <button onClick={() => { setStep('form'); setErrorMsg(''); }} className="btn-primary" style={{ padding: '0.7rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '0.9rem', background: '#0d9488', color: 'white', fontWeight: 600 }}>Try Again</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Request a Demo</h2>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>Fill in your details and we will respond within 2 hours.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={inputStyle} placeholder="James Mitchell" />
                </div>
                <div>
                  <label style={labelStyle}>Company *</label>
                  <input type="text" required value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} style={inputStyle} placeholder="North Sea Operations Ltd." />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Work Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={inputStyle} placeholder="j.mitchell@northseaops.com" />
              </div>
              <div>
                <label style={labelStyle}>Industry *</label>
                <select required value={form.industry} onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))} style={selectStyle}>
                  <option value="">Select your industry</option>
                  {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Service Interest *</label>
                <select required value={form.service} onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))} style={selectStyle}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Describe Your Challenge</label>
                <textarea rows={3} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} style={{ ...inputStyle, resize: 'vertical' } as React.CSSProperties} placeholder="120km of pipeline across 6 remote sites. Current inspection takes 3 weeks..." />
              </div>
              <button type="submit" disabled={step === 'sending'} className="btn-primary" style={{
                width: '100%', padding: '0.9rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: '#0d9488', color: 'white', fontWeight: 700, fontSize: '0.95rem',
                opacity: step === 'sending' ? 0.7 : 1,
              }}>
                {step === 'sending' ? 'Sending...' : 'Request a Demo'}
              </button>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center' }}>2-hour response · No spam · Your data stays private</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#475569', marginBottom: '0.3rem' };
const inputStyle: React.CSSProperties = { width: '100%', fontSize: '0.875rem', padding: '0.6rem 0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', background: '#f8fafc', boxSizing: 'border-box' };
const selectStyle: React.CSSProperties = { ...inputStyle, appearance: 'none', cursor: 'pointer' };
