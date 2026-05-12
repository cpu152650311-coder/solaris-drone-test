import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — Request a Demo, Deploy Tomorrow',
  description: 'Get in touch with Solaris Robotics. 2-hour response time. Four global hubs. Emergency deployment within 24 hours. Request a tailored proposal for your inspection challenge.',
};

export default function ContactPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">Get Started</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Request a Demo.<br /><span style={{ color: '#0d9488' }}>Deploy Tomorrow.</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '52ch' }}>
            Tell us about your inspection challenge. We will respond within 2 hours with a tailored proposal — including cost estimate and deployment timeline.
          </p>
        </div>
      </section>

      <ContactPageClient />
    </>
  );
}
