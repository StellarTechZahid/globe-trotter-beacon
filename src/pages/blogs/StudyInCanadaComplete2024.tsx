
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, GraduationCap, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const StudyInCanadaComplete2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Complete Guide to Study in Canada 2024 | Universities, Costs & Requirements</title>
        <meta name="description" content="Complete guide to studying in Canada 2024. Top universities, costs, admission requirements, student visa process, and scholarships for international students." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Guide to Study in Canada 2024</h1>
            <p className="text-xl mb-6">Your pathway to world-class education in the Great White North</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Canada Study Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Why Canada Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Why Choose Canada for Higher Education?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">World-Class Education</h3>
              <p className="text-gray-300">Top-ranked universities globally recognized</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Welcoming Culture</h3>
              <p className="text-gray-300">Multicultural and inclusive society</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Affordable Education</h3>
              <p className="text-gray-300">Lower tuition compared to US & UK</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Work Opportunities</h3>
              <p className="text-gray-300">PGWP and immigration pathways</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Canadian Dream?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance for studying in Canada with personalized counseling
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Canada Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyInCanadaComplete2024;
