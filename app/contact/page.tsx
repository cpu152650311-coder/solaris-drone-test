import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — Request a Demo, Deploy Tomorrow',
  description: 'Get in touch. 2-hour response. Four global hubs. Emergency deployment within 24 hours. Request a tailored proposal for your inspection challenge.',
};

const CONTACT_INFO = [
  { region: 'Americas', city: 'Houston, TX', tz: 'UTC−6 (CST)' },
  { region: 'Europe & Africa', city: 'Rotterdam, NL', tz: 'UTC+1 (CET)' },
  { region: 'Middle East & Caspian', city: 'Dubai, UAE', tz: 'UTC+4 (GST)' },
  { region: 'Asia-Pacific', city: 'Singapore', tz: 'UTC+8 (SGT)' },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-dark" style={{ padding: 'var(--space-24) 0 var(--space-16)' }}>
        <div className="container-wide">
          <span className="label-tag label-tag-dark">Get Started</span>
          <h1 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Request a Demo.<br /><span style={{ color: 'var(--color-primary)' }}>Deploy Tomorrow.</span></h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-dark-text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '52ch' }}>We respond within 2 hours with a tailored proposal — cost estimate, deployment timeline, payload recommendation, and compliance documentation.</p>
        </div>
      </section>

      <section className="section-pad bg-grid">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-12)', alignItems: 'start' }}>
            <ContactPageClient />
            <div>
              <h3 style={{ marginBottom: 'var(--space-6)' }}>Global Presence</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {CONTACT_INFO.map((hub) => (
                  <div key={hub.city} className="card" style={{ padding: 'var(--space-5)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>{hub.region}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-foreground)' }}>{hub.city}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>{hub.tz}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-6)', background: 'var(--color-dark)', borderRadius: 'var(--radius-xl)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: '#5eead4', fontWeight: 600, letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>EMERGENCY DEPLOYMENT</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'white', fontWeight: 700 }}>Within 24 hours. Worldwide.</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-dark-text-secondary)', marginTop: 'var(--space-2)' }}>Standard service agreement includes emergency response. Unplanned shutdowns, critical failures — we mobilize from the nearest hub.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
