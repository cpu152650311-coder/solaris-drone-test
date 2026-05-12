import type { Metadata } from 'next';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://solarisrobotics.com'),
  title: {
    default: 'Solaris Robotics — Autonomous Inspection Drones for Critical Infrastructure',
    template: '%s — Solaris Robotics',
  },
  description: 'ATEX Zone 1 certified autonomous inspection drones with onboard AI defect detection. Zero pilots. Serving oil & gas, wind, power utilities, mining, and maritime — globally.',
  keywords: 'autonomous inspection drone, ATEX Zone 1 drone, pipeline inspection, AI defect detection, LiDAR drone, thermal inspection, offshore drone, industrial drone',
  openGraph: {
    title: 'Solaris Robotics — Autonomous Inspection. Zero Pilots. Zero Compromise.',
    description: 'The only inspection drone rated for explosive atmospheres. Onboard AI. 3D SLAM navigation. $0.08/meter pipeline inspection.',
    url: 'https://solarisrobotics.com',
    siteName: 'Solaris Robotics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Solaris Robotics', description: 'ATEX Zone 1 certified. Onboard AI. GPS-denied navigation. Global deployment in 24 hours.' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Solaris Robotics',
  url: 'https://solarisrobotics.com',
  description: 'Autonomous inspection drones and AI-powered defect detection for critical infrastructure.',
  foundingDate: '2021',
  areaServed: ['US', 'EU', 'ME', 'SEA'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
