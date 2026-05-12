import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechnologySection from '@/components/sections/TechnologySection';
import FleetManagementSection from '@/components/sections/FleetManagementSection';
import PricingSection from '@/components/sections/PricingSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import GlobalDeploymentSection from '@/components/sections/GlobalDeploymentSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import AboutSection from '@/components/sections/AboutSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <DifferentiatorsSection />
        <ServicesSection />
        <TechnologySection />
        <FleetManagementSection />
        <PricingSection />
        <CertificationsSection />
        <GlobalDeploymentSection />
        <SocialProofSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
