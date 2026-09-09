import React from 'react';
import { Hero } from '../components/Hero';
import { FloatingCards } from '../components/FloatingCards';
import { AboutSection } from '../components/AboutSection';
import { AdventureSection } from '../components/AdventureSection';
import { WellnessSection } from '../components/WellnessSection';
import { VillasSection } from '../components/VillasSection';
import { WeddingsCorporate } from '../components/WeddingsCorporate';
import { Testimonials } from '../components/Testimonials';
import { GalleryGrid } from '../components/GalleryGrid';
import { PackagesSection } from '../components/PackagesSection';
import { FilmStrip } from '../components/FilmStrip';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Overlapping Floating Feature Cards */}
      <FloatingCards />

      <FilmStrip />

      {/* 3. About Joy Club Section */}
      <AboutSection />

      {/* 4. Adventure Experiences Section */}
      <AdventureSection />

      {/* 5. Natural Therapy & Wellness Section */}
      <WellnessSection />

      {/* 6. Luxury Villas & Rooms Section */}
      <VillasSection />

      <PackagesSection />

      {/* 7. Weddings & Corporate Banners */}
      <WeddingsCorporate />

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. Moments That Stay With You (Gallery Grid) */}
      <GalleryGrid />
    </>
  );
};
