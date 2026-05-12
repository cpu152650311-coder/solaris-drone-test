import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </>
  );
}
