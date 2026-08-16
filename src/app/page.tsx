import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BuildersSection from '@/components/BuildersSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustedPartners from '@/components/TrustedPartners';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SarvMaan Home Superhero | Premium Interior Design in Pune',
  description: 'Transform your dream home with SarvMaan Home Superhero. 6+ years experience, 500+ successful projects. Premium interior design, modular kitchens, wardrobes, and furniture solutions across Pune.',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <BuildersSection />
      <ProjectsGallery />
      <ProcessSection />
      <TestimonialsSection />
      <TrustedPartners />
    </div>
  );
}
