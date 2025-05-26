
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ConsultationForm from '@/components/ConsultationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroCarousel />
      
      {/* What Our Students Say Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <ConsultationForm />
      <Footer />
    </div>
  );
};

export default Index;
