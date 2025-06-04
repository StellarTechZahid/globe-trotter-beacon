
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FullbrightScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Fulbright Scholarship | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to Fulbright Scholarship for international students. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Fulbright scholarship, USA education, international scholarship, study abroad, cultural exchange" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/fulbright-scholarship" />
        <meta property="og:title" content="Fulbright Scholarship | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to Fulbright Scholarship for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/fulbright-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section - Fully Responsive */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop"
          alt="Fulbright Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/fully-funded" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-2 sm:mb-4 text-sm sm:text-base">
              <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Back to Fully Funded Scholarships
            </Link>
            <div className="flex items-center mb-2 sm:mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3">🇺🇸</span>
              <span className="bg-orange-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                United States
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
              Fulbright Scholarship
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
              Premier international exchange program for graduate study and research
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="font-semibold text-sm sm:text-base">Full Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-sm sm:text-base">October Deadline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="prose prose-sm sm:prose prose-lg prose-invert max-w-none">
                <div className="text-gray-300 space-y-6 sm:space-y-8">
                  
                  <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-4 sm:p-6 rounded-r-lg">
                    <h3 className="text-orange-500 font-bold text-base sm:text-lg mb-2">Program Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base">
                      <li>Fully funded graduate study and research opportunities</li>
                      <li>Established in 1946 for international educational exchange</li>
                      <li>Available in over 140 countries worldwide</li>
                      <li>Monthly stipend plus tuition and travel allowances</li>
                      <li>Cultural immersion and professional development</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About Fulbright Scholarship</h2>
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      The Fulbright Program is the flagship international educational exchange program sponsored by the U.S. government. Designed to increase mutual understanding between the people of the United States and other countries, it provides funding for individually designed study/research projects or for English Teaching Assistant Programs.
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      Since its inception in 1946, the Fulbright Program has provided more than 390,000 participants with the opportunity to exchange ideas and contribute to finding solutions to shared international concerns.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Financial Benefits</h2>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-4">Full Financial Support</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300 text-sm sm:text-base">• Round-trip international travel</li>
                          <li className="text-gray-300 text-sm sm:text-base">• Monthly living stipend</li>
                          <li className="text-gray-300 text-sm sm:text-base">• Tuition coverage (where applicable)</li>
                          <li className="text-gray-300 text-sm sm:text-base">• Health insurance</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-4">Additional Benefits</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300 text-sm sm:text-base">• Professional development workshops</li>
                          <li className="text-gray-300 text-sm sm:text-base">• Alumni network access</li>
                          <li className="text-gray-300 text-sm sm:text-base">• Cultural orientation programs</li>
                          <li className="text-gray-300 text-sm sm:text-base">• Research and conference allowances</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6 sm:pt-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      The Fulbright Program is highly competitive with rigorous selection criteria. Let our experts guide you through the application process and help you craft a compelling proposal.
                    </p>
                    <Button 
                      onClick={scrollToConsultation}
                      className="bg-orange-500 hover:bg-orange-600 text-black text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full md:w-auto"
                    >
                      Get Expert Application Guidance
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullbrightScholarship;
