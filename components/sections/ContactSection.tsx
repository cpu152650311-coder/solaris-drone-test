'use client';

import { useEffect, useRef, useState } from 'react';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  service: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  service: '',
  message: '',
};

const INDUSTRIES = [
  'Oil & Gas',
  'Wind Energy',
  'Power Utilities',
  'Mining',
  'Maritime',
  'Chemical Processing',
  'Other',
];

const SERVICES = [
  'Pipeline Inspection',
  'Storage Tank Inspection',
  'Offshore Platform Inspection',
  'Wind Turbine Inspection',
  'Confined Space Inspection',
  'Emergency Response',
  'Training & Certification',
  'Other',
];

const FORM_SUBMIT_URL = 'https://formsubmit.co/YOUR_EMAIL_HERE';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child) => {
            child.classList.add('revealed');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Submission failed. Please email us directly at demo@solarisrobotics.com');
      }
    } catch {
      setError('Network error. Please try again or email demo@solarisrobotics.com');
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: keyof FormState, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="section-spine section-spine-strong section-pad"
      style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}
    >
      <div
        className="gradient-orb"
        style={{ width: '500px', height: '500px', bottom: '-100px', left: '10%', opacity: 0.5 }}
        aria-hidden="true"
      />

      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">Get Started</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="contact-heading" className="section-heading reveal reveal-delay-2" style={{ marginBottom: '1rem' }}>
            Request a Demo.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Deploy Tomorrow.</span>
          </h2>
          <p className="section-subheading reveal reveal-delay-3">
            Tell us about your inspection challenge. We will respond within 2 hours with a tailored proposal — including a cost estimate and deployment timeline.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-accent)',
                  borderRadius: '14px',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                  aria-hidden="true"
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 14l7 7 11-11" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                  Demo Request Received
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '42ch', margin: '0 auto' }}>
                  Our team will respond within 2 hours with a tailored proposal. For urgent requests, call your nearest hub or email demo@solarisrobotics.com.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '14px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 4px 24px var(--color-shadow)',
                }}
                noValidate
                aria-label="Demo request form"
              >
                {/* Name + Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="contact-name" style={labelStyle}>
                      Full Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      style={inputStyle}
                      placeholder="James Mitchell"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="contact-company" style={labelStyle}>
                      Company <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      style={inputStyle}
                      placeholder="North Sea Operations Ltd."
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="contact-email" style={labelStyle}>
                      Work Email <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      style={inputStyle}
                      placeholder="j.mitchell@northseaops.com"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="contact-phone" style={labelStyle}>Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      style={inputStyle}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Industry */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label htmlFor="contact-industry" style={labelStyle}>
                    Industry <span style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <select
                    id="contact-industry"
                    required
                    value={form.industry}
                    onChange={(e) => update('industry', e.target.value)}
                    style={selectStyle}
                  >
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                {/* Service interest */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label htmlFor="contact-service" style={labelStyle}>
                    Service Interest <span style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <select
                    id="contact-service"
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    style={selectStyle}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label htmlFor="contact-message" style={labelStyle}>Describe your inspection challenge</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' } as React.CSSProperties}
                    placeholder="We need to inspect 120km of pipeline across 6 remote sites. Current method takes 3 weeks with rope-access crews. Looking for an autonomous alternative that can operate in GPS-denied canyon sections and deliver defect reports immediately."
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '0.82rem', color: '#dc2626', padding: '0.5rem 0.75rem', background: '#fef2f2', borderRadius: '6px' }}>
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary" disabled={submitting} style={{ justifyContent: 'center', width: '100%', padding: '0.9rem 1.75rem' }}>
                  {submitting ? 'Sending...' : 'Request a Demo'}
                  {!submitting && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  2-hour response time · No spam · Your data stays private
                </p>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                label: 'Response Time',
                value: 'Under 2 hours',
                detail: 'Our Houston desk responds immediately during US business hours; Rotterdam, Dubai, and Singapore cover the rest of the world.',
              },
              {
                label: 'What You Will Receive',
                value: 'Tailored Proposal',
                detail: 'Cost estimate, deployment timeline, recommended payload configuration, and compliance documentation — delivered in one PDF.',
              },
              {
                label: 'Global Hubs',
                value: '4 Locations',
                detail: 'Houston · Rotterdam · Dubai · Singapore. All four hubs maintain ready-to-deploy inspection teams and equipment stock.',
              },
              {
                label: 'Emergency Deployment',
                value: 'Within 24 Hours',
                detail: 'Unplanned shutdowns and critical asset failures covered under our standard service agreement. Call +1 (555) 000-SOLR.',
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.35rem' }}>
                  {item.value}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--color-text-muted)',
};

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.88rem',
  color: 'var(--color-text)',
  background: 'var(--color-bg)',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  padding: '0.65rem 0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2364748b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.875rem center',
  paddingRight: '2.25rem',
  cursor: 'pointer',
};
