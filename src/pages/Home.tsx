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
        
        <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
                Excellence in Education
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent animate-scale-in">
                Why Choose Abroad Academics?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
                We've been transforming dreams into reality for thousands of students worldwide. 
                Our comprehensive approach ensures your success at every step of your international education journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <Card className="bg-gray-800/30 border-orange-500/20 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300">
                    <Globe className="h-12 w-12 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Global Reach</h3>
                  <div className="text-4xl font-bold mb-2 text-orange-500">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Countries Covered</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/30 border-orange-500/20 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <Users className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Success Stories</h3>
                  <div className="text-4xl font-bold mb-2 text-blue-500">
                    <AnimatedCounter end={15000} suffix="+" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Students Placed</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/30 border-orange-500/20 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-green-500/20 to-teal-600/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-green-500/30 group-hover:to-teal-600/30 transition-all duration-300">
                    <Award className="h-12 w-12 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">Partner Universities</h3>
                  <div className="text-4xl font-bold mb-2 text-green-500">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Top Institutions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/30 border-orange-500/20 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-pink-600/30 transition-all duration-300">
                    <TrendingUp className="h-12 w-12 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Success Rate</h3>
                  <div className="text-4xl font-bold mb-2 text-purple-500">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Visa Approval</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Your Journey, Our Expertise
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From the initial consultation to your successful arrival at your dream university, 
                  we provide comprehensive support that goes beyond traditional consultancy. 
                  Our team of experienced counselors has helped thousands of students achieve 
                  their international education goals.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">Personalized counseling based on your profile</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">End-to-end application support</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-300 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">Pre-departure and post-arrival assistance</span>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent rounded-3xl group-hover:from-orange-500/40 transition-all duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Students collaborating"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
        
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
        <div id="consultation-form" className="animate-fade-in">
          <ConsultationForm />
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
