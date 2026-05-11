import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection';
;

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <DifferentiatorsSection />
      <ServicesSection />
      
    </main>
  );
}