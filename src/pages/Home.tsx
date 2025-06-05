
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import OurServicesSection from '@/components/OurServicesSection';
import StudyDestinationsSection from '@/components/StudyDestinationsSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AboutUsSection from '@/components/AboutUsSection';
import ConsultationForm from '@/components/ConsultationForm';
import { Helmet } from 'react-helmet-async';

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
        <OurServicesSection />
        <StudyDestinationsSection />
        <AboutUsSection />
        <TestimonialsCarousel />
        <div id="consultation-form">
          <ConsultationForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
