
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import AdvancedDestinationsSection from '@/components/AdvancedDestinationsSection';
import AdvancedProcessSection from '@/components/AdvancedProcessSection';
import AdvancedServicesSection from '@/components/AdvancedServicesSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AboutUsSection from '@/components/AboutUsSection';
import ConsultationForm from '@/components/ConsultationForm';
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
        
        {/* Enhanced Visual Section */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Why Choose Abroad Academics?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We've been transforming dreams into reality for thousands of students worldwide. 
                Our comprehensive approach ensures your success at every step.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-all">
                    <Globe className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Global Reach</h3>
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-gray-300">Countries Covered</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-all">
                    <Users className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Success Stories</h3>
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter end={15000} suffix="+" />
                  </div>
                  <p className="text-gray-300">Students Placed</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-all">
                    <Award className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Partner Universities</h3>
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <p className="text-gray-300">Top Institutions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-all">
                    <TrendingUp className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Success Rate</h3>
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-gray-300">Visa Approval</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">Your Journey, Our Expertise</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  From the initial consultation to your successful arrival at your dream university, 
                  we provide comprehensive support that goes beyond traditional consultancy. 
                  Our team of experienced counselors has helped thousands of students achieve 
                  their international education goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Personalized counseling based on your profile</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">End-to-end application support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Pre-departure and post-arrival assistance</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Students collaborating"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <AdvancedDestinationsSection />
        <AdvancedProcessSection />
        <AdvancedServicesSection />
        <AboutUsSection />
        <PartnerUniversitiesSection />
        <OurImpactSection />
        <TestimonialsCarousel />
        <LatestInsightsSection />
        <div id="consultation-form">
          <ConsultationForm />
        </div>
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
