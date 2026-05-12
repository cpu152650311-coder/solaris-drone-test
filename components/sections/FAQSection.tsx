'use client';

import { useEffect, useRef, useState } from 'react';

const FAQS = [
  {
    q: 'What makes Solaris drones different from any other inspection drone?',
    a: 'Three things. First, ATEX Zone 1 certification — we are the only inspection drone class rated for explosive atmospheres, so we fly where others cannot legally operate. Second, onboard AI — defects are classified during flight; the report is ready at landing. Third, 3D SLAM navigation — we operate autonomously inside GPS-denied environments like storage tanks, pipelines, and confined spaces without external signal.',
  },
  {
    q: 'What is pay-per-inspection pricing and how does it work?',
    a: 'You pay only for what you inspect — there is no capital expenditure, no asset depreciation, and no minimum commitment. Pipeline inspection starts at $0.08 per linear meter. Tank and wind turbine inspections follow flat per-unit pricing. You receive a consolidated monthly invoice with detailed inspection reports and defect summaries.',
  },
  {
    q: 'How quickly can you deploy to our site?',
    a: 'Standard deployment: 72 hours. Emergency deployment: within 24 hours — covered under our standard service agreement. We have 4 regional hubs (Houston, Rotterdam, Dubai, Singapore) with ready-to-deploy teams and equipment. For emergency response, call your nearest hub.',
  },
  {
    q: 'Do we need our own drone pilots or operators?',
    a: 'No. Solaris drones are fully autonomous — they fly pre-planned missions without a pilot in the loop. Our field technicians handle pre-flight checks and payload configuration. If you want to build internal capability, we offer IRATA and ISO 18436 accredited operator training programs.',
  },
  {
    q: 'Can the drones operate in rain, snow, or extreme temperatures?',
    a: 'Yes. Solaris UAVs are rated for operation from -40°C to +55°C, with an IP54 ingress protection rating. They have been deployed on North Sea platforms in winter, Gulf of Mexico hurricane season, and Middle East desert conditions. Specific limits depend on the sensor payload configuration.',
  },
  {
    q: 'What sensor payloads are available?',
    a: 'Four standard modular payloads: (1) Thermal — 640×512 FLIR, (2) LiDAR — 200m range, sub-cm accuracy, (3) Ultrasonic thickness gauge — wall-loss measurement without contact, (4) Gas detection — real-time leak signature identification. Custom sensor integration is available for mission-specific requirements.',
  },
  {
    q: 'How does the AI defect detection work?',
    a: 'Onboard neural networks trained on 50,000+ annotated inspection images classify defects in real time. Categories include: corrosion (Grade 1–5 severity), cracks down to 0.1mm width, coating failures with area measurement, thermal anomalies with ΔT alerts. Classifications are human-verifiable — every AI finding links to the source imagery.',
  },
  {
    q: 'What compliance standards do the inspection reports meet?',
    a: 'Reports meet ISO 19232 (NDT imaging), ISO 18436 (condition monitoring), and can be formatted to your organization\'s specific reporting templates. Every report includes: timestamped imagery, defect classification with confidence scores, severity grading, GPS coordinates, and an audit-ready PDF export.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((c) => c.classList.add('revealed'));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby="faq-heading"
      className="section-spine section-pad"
      style={{ background: 'var(--color-surface-2)', position: 'relative' }}
    >
      <div className="container-wide" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div className="reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-tag">FAQ</span>
          </div>
          <div className="accent-rule reveal reveal-delay-1" style={{ marginBottom: '1rem' }} />
          <h2 id="faq-heading" className="section-heading reveal reveal-delay-2">
            Questions Engineers Ask.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Answers You Can Use.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} role="list" aria-label="Frequently asked questions">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className={`reveal reveal-delay-${Math.min(i % 3 + 1, 5)}`}
              role="listitem"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%',
                  background: 'var(--color-surface)',
                  border: `1.5px solid ${open === i ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  borderRadius: '12px',
                  padding: '1.1rem 1.5rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  boxShadow: open === i ? '0 4px 20px oklch(56% 0.14 185 / 0.1)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text)', letterSpacing: '-0.01em' }}>
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <circle cx="9" cy="9" r="8" stroke={open === i ? 'var(--color-accent)' : 'var(--color-border)'} strokeWidth="1.5" />
                    <path d="M9 5.5v7M5.5 9h7" stroke={open === i ? 'var(--color-accent)' : 'var(--color-text-muted)'} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                {open === i && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginTop: '0.9rem', paddingTop: '0.9rem', borderTop: '1px solid var(--color-border)' }}>
                    {faq.a}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
