import type { Metadata } from 'next';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Certifications — ATEX Zone 1, IECEx, IRATA, ISO',
  description: 'Independently verified certifications: ATEX Zone 1, IECEx, IRATA Level 1-3, ISO 18436, ISO 19232, ISO 9001. Every certification backed by test reports.',
};

const CERTS = [
  { name: 'ATEX Zone 1', body: 'Certified for explosive atmospheres — the only drone in the inspection market to hold this rating. IECEx-tested, not self-declared.', tags: ['IECEx', 'Explosive Atmospheres', 'Offshore Platforms', 'Chemical Plants'] },
  { name: 'IECEx', body: 'Full IECEx certification for equipment used in explosive atmospheres. Validated by independent third-party testing, recognized in 30+ countries.', tags: ['International', 'Third-Party Validated', '30+ Countries'] },
  { name: 'IRATA', body: 'Industrial Rope Access Trade Association accredited training. Courses delivered by IRATA Level 3 instructors meeting all assessment criteria.', tags: ['Level 1–3', 'Rope Access', 'Inspection Training', 'Global Recognition'] },
  { name: 'ISO 18436', body: 'Condition monitoring and diagnostics — vibration analysis, thermography, ultrasonic testing. Your operators earn accredited, portable qualifications.', tags: ['Vibration Analysis', 'Thermography', 'Ultrasonic Testing'] },
  { name: 'ISO 19232', body: 'Non-destructive testing image quality standard. AI-generated reports meet ISO 19232 requirements for defect image clarity and measurement accuracy.', tags: ['NDT Imaging', 'Defect Measurement', 'Compliance'] },
  { name: 'ISO 9001', body: 'Quality management system certification. Every drone, payload, and software release follows documented, auditable quality processes.', tags: ['Quality Management', 'Process Auditing', 'Continuous Improvement'] },
];

export default function CertificationsPage() {
  return (
    <>
      <section style={{ background: '#f8fafc', padding: 'clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem)' }}>
        <div className="container-wide">
          <span className="label-tag">Certifications & Compliance</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Certified.<br /><span style={{ color: '#0d9488' }}>Not Self-Declared.</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '52ch' }}>Every certification listed is independently verified. We carry the credentials that safety-critical industries require — and the test reports to prove them.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
            {CERTS.map((cert) => (
              <div key={cert.name} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#0d9488', borderRadius: '3px 0 0 3px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.6rem' }}>{cert.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1rem' }}>{cert.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cert.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '0.68rem', fontWeight: 600, color: '#0d9488', background: '#ccfbf1', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PageCTA label="Request Certification Docs" />
          </div>
        </div>
      </section>
    </>
  );
}
