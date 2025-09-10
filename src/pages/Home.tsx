import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import AdvancedDestinationsSection from '@/components/AdvancedDestinationsSection';
import AdvancedProcessSection from '@/components/AdvancedProcessSection';
import AdvancedServicesSection from '@/components/AdvancedServicesSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AboutUsSection from '@/components/AboutUsSection';
import ConsultationFormWrapper from '@/components/ConsultationFormWrapper';
import OurImpactSection from '@/components/OurImpactSection';
import PartnerUniversitiesSection from '@/components/PartnerUniversitiesSection';
import LatestInsightsSection from '@/components/LatestInsightsSection';
import CTASection from '@/components/CTASection';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Award, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';

const Home = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Abroad Academics | Study Abroad Consultancy</title>
        <meta name="description" content="Your trusted partner for international education. Get expert guidance for studying abroad." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <HeroCarousel />
        
        
        <AdvancedDestinationsSection />
        <AdvancedProcessSection />
        <AdvancedServicesSection />
        
        <div className="animate-fade-in">
          <AboutUsSection />
        </div>
        <div className="animate-fade-in">
          <PartnerUniversitiesSection />
        </div>
        <div className="animate-fade-in">
          <OurImpactSection />
        </div>
        <div className="animate-fade-in">
          <TestimonialsCarousel />
        </div>
        <div className="animate-fade-in">
          <LatestInsightsSection />
        </div>
        <div className="animate-fade-in">
          <ConsultationFormWrapper />
        </div>
        <div className="animate-fade-in">
          <CTASection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
