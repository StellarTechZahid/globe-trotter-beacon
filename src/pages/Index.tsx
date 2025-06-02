
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUsSection from '@/components/AboutUsSection';
import StudyDestinationsSection from '@/components/StudyDestinationsSection';
import OurServicesSection from '@/components/OurServicesSection';
import PartnerUniversitiesSection from '@/components/PartnerUniversitiesSection';
import OurImpactSection from '@/components/OurImpactSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import LatestInsightsSection from '@/components/LatestInsightsSection';
import ConsultationForm from '@/components/ConsultationForm';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* SEO Meta Tags for Best Study Abroad Consultants */}
      <head>
        <title>Best Study Abroad Consultants in Pakistan | Abroad Academics - Founded 2023</title>
        <meta name="description" content="Abroad Academics - Best study abroad consultants in Pakistan since 2023. Expert guidance for USA, UK, Canada, Australia. Best study abroad consultants in Lahore with 100% success rate." />
        <meta name="keywords" content="best study abroad consultants, study abroad consultants Pakistan, study abroad consultants Lahore, best education consultants Pakistan, overseas education consultants, international education consultants Pakistan" />
      </head>

      <Navbar />
      <HeroCarousel />
      
      {/* Enhanced About Section with SEO Keywords */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pakistan's Best Study Abroad Consultants Since 2023
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Abroad Academics, founded in 2023, has quickly established itself as the leading study abroad consultancy in Pakistan. 
              As the best study abroad consultants in Lahore and across Pakistan, we provide comprehensive guidance for students 
              aspiring to study in top universities worldwide. Our expert team of certified education consultants specializes in 
              helping Pakistani students secure admissions to prestigious institutions in the USA, UK, Canada, Australia, and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-black p-8 rounded-lg border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Best Study Abroad Consultants</h3>
              <p className="text-gray-300">
                Recognized as the top study abroad consultants in Pakistan, providing expert guidance since 2023 
                with 100% visa success rate for qualified students.
              </p>
            </div>
            <div className="text-center bg-black p-8 rounded-lg border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Lahore's Premier Consultancy</h3>
              <p className="text-gray-300">
                Based in Lahore, we serve as the best study abroad consultants in Lahore, helping thousands of 
                students achieve their international education dreams.
              </p>
            </div>
            <div className="text-center bg-black p-8 rounded-lg border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Founded 2023 - Rapid Growth</h3>
              <p className="text-gray-300">
                Despite being founded in 2023, Abroad Academics has rapidly become Pakistan's most trusted 
                name in international education consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutUsSection />
      <StudyDestinationsSection />
      <OurServicesSection />
      <PartnerUniversitiesSection />
      <OurImpactSection />
      
      {/* What Our Students Say Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Students Say About Pakistan's Best Study Abroad Consultants
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from students who chose Abroad Academics as their study abroad consultants and successfully 
              secured admissions to top universities worldwide since our founding in 2023.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Why Choose Abroad Academics - Best Study Abroad Consultants in Pakistan?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Best Study Abroad Consultants Since 2023</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-orange-500">Established Excellence:</strong> Founded in 2023, Abroad Academics has quickly 
                  become the most trusted name among study abroad consultants in Pakistan, helping thousands of students 
                  achieve their international education goals.
                </p>
                <p>
                  <strong className="text-orange-500">Lahore's Leading Consultancy:</strong> As the best study abroad consultants 
                  in Lahore, we provide personalized guidance to students across Punjab and Pakistan, ensuring each student 
                  receives expert attention tailored to their academic aspirations.
                </p>
                <p>
                  <strong className="text-orange-500">Comprehensive Services:</strong> Our team of certified education consultants 
                  offers end-to-end services including university selection, application assistance, visa guidance, scholarship 
                  consultation, and pre-departure support.
                </p>
                <p>
                  <strong className="text-orange-500">Global University Partnerships:</strong> We maintain strong relationships 
                  with top universities in USA, UK, Canada, Australia, Germany, and other study destinations, giving our 
                  students access to exclusive opportunities and fast-track admissions.
                </p>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-orange-500">
              <h4 className="text-2xl font-bold text-orange-500 mb-4">Our 2023 Success Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Students Placed</span>
                  <span className="text-orange-500 font-bold">2,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Visa Success Rate</span>
                  <span className="text-orange-500 font-bold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Scholarships Secured</span>
                  <span className="text-orange-500 font-bold">$150M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Partner Universities</span>
                  <span className="text-orange-500 font-bold">280+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Countries Covered</span>
                  <span className="text-orange-500 font-bold">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LatestInsightsSection />
      <div id="consultation-form">
        <ConsultationForm />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
