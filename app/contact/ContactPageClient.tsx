'use client';

import { useState } from 'react';

const INDUSTRIES = ['Oil & Gas', 'Wind Energy', 'Power Utilities', 'Mining', 'Maritime', 'Chemical Processing', 'Other'];
const SERVICES = ['Pipeline Inspection', 'Storage Tank Inspection', 'Offshore Platform Inspection', 'Wind Turbine Inspection', 'Confined Space Inspection', 'Emergency Response', 'Training & Certification', 'Other'];

export default function ContactPageClient() {
  const [step, setStep] = useState<'form' | 'sending' | 'done' | 'error'>('form');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', industry: '', service: '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('sending');
    try {
      const res = await fetch('https://formsubmit.co/YOUR_EMAIL_HERE', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStep('done');
      else { setStep('error'); setErrorMsg('Submission failed. Please email demo@solarisrobotics.com'); }
    } catch { setStep('error'); setErrorMsg('Network error. Please try again or email demo@solarisrobotics.com'); }
  };

  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));
  const ls: React.CSSProperties = { display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#475569', marginBottom: '0.3rem' };
  const is: React.CSSProperties = { width: '100%', fontSize: '0.875rem', padding: '0.65rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', background: '#f8fafc', boxSizing: 'border-box' };

  return (
    <section className="section-pad" style={{ background: '#f8fafc' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'start' }}>
          <div>
            {step === 'done' ? (
              <div style={{ background: 'white', border: '1px solid #0d9488', borderRadius: '14px', padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"><path d="M5 14l7 7 11-11" /></svg>
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Demo Request Received</h2>
                <p style={{ color: '#64748b', lineHeight: 1.7, maxWidth: '38ch', margin: '0 auto' }}>Our team will respond within 2 hours with a tailored proposal.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div><label style={ls}>Full Name *</label><input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} style={is} placeholder="James Mitchell" /></div>
                  <div><label style={ls}>Company *</label><input type="text" required value={form.company} onChange={(e) => update('company', e.target.value)} style={is} placeholder="North Sea Operations Ltd." /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div><label style={ls}>Work Email *</label><input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} style={is} placeholder="j.mitchell@northseaops.com" /></div>
                  <div><label style={ls}>Phone</label><input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} style={is} placeholder="+1 (555) 000-0000" /></div>
                </div>
                <div><label style={ls}>Industry *</label><select required value={form.industry} onChange={(e) => update('industry', e.target.value)} style={is}><option value="">Select your industry</option>{INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}</select></div>
                <div><label style={ls}>Service Interest *</label><select required value={form.service} onChange={(e) => update('service', e.target.value)} style={is}><option value="">Select a service</option>{SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                <div><label style={ls}>Describe Your Challenge</label><textarea rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} style={{ ...is, resize: 'vertical' }} placeholder="120km of pipeline across 6 remote sites. Current inspection takes 3 weeks..." /></div>
                {step === 'error' && <p style={{ fontSize: '0.82rem', color: '#dc2626', background: '#fef2f2', borderRadius: '6px', padding: '0.5rem 0.75rem' }}>{errorMsg}</p>}
                <button type="submit" disabled={step === 'sending'} style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#0d9488', color: 'white', fontWeight: 700, fontSize: '0.95rem', opacity: step === 'sending' ? 0.7 : 1 }}>
                  {step === 'sending' ? 'Sending...' : 'Request a Demo'}
                </button>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center' }}>2-hour response · No spam · Your data stays private</p>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { l: 'Response Time', v: 'Under 2 hours', d: 'Our Houston desk responds immediately during US business hours; Rotterdam, Dubai, and Singapore cover the rest of the world.' },
              { l: 'What You Will Receive', v: 'Tailored Proposal', d: 'Cost estimate, deployment timeline, recommended payload configuration, and compliance documentation — delivered in one PDF.' },
              { l: 'Global Hubs', v: '4 Locations', d: 'Houston · Rotterdam · Dubai · Singapore. All four maintain ready-to-deploy teams and equipment stock.' },
              { l: 'Emergency Deployment', v: 'Within 24 Hours', d: 'Unplanned shutdowns and critical asset failures covered under our standard service agreement.' },
            ].map(({ l, v, d }) => (
              <div key={l} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.35rem' }}>{l}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0d9488', marginBottom: '0.35rem' }}>{v}</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
