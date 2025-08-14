"use client";

import React from 'react';
import {
  ThemeProvider,
  Navbar,
  HeroSection,
  FeaturesSection,
  DemoSection,
  TestimonialsSection,
  PricingSection,
  Footer,
  ChatWidget
} from '@/components';
import LayoutLanding from '@/components/layout/LayoutLanding';

export default function LandingPage() {
  return (
    <ThemeProvider>
      <LayoutLanding>
        <div className="min-h-screen transition-all duration-300">
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <DemoSection />
          <TestimonialsSection />
          <PricingSection />
          <Footer />
          <ChatWidget />
        </div>
      </LayoutLanding>
    </ThemeProvider>
  );
}