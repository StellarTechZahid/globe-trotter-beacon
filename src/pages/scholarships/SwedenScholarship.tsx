
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SwedenScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Swedish Institute Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Swedish Institute Scholarships for international students. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Swedish Institute scholarship, Sweden education, international scholarship, study in Sweden" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/sweden-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&h=600&fit=crop"
            alt="Sweden Scholarship"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 container-full h-full flex items-center">
            <div className="max-w-4xl text-white">
              <Link to="/scholarship/european-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to European Scholarships
              </Link>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇸🇪</span>
                <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Sweden
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Swedish Institute Scholarship
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Government scholarship for global leaders and innovators
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Full Coverage</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>February Deadline</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 full-width-container">
          <div className="container-full max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-orange-500">
              <CardContent className="p-8">
                <div className="text-gray-300 space-y-8">
                  <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-orange-500 font-bold text-lg mb-2">Program Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Full tuition coverage for Master's programs</li>
                      <li>Monthly living allowance of SEK 12,000</li>
                      <li>Insurance and travel grant</li>
                      <li>Leadership development and networking opportunities</li>
                      <li>Alumni network and career support</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Swedish Institute Scholarships</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Swedish Institute Scholarships for Global Professionals (SISGP) is a scholarship program for working professionals from selected countries to pursue a full-time Master's degree at a Swedish university.
                    </p>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Swedish Institute Scholarships are designed for future leaders and change-makers. Our experts can help you demonstrate your leadership potential in your application.
                    </p>
                    <Button 
                      onClick={scrollToConsultation}
                      className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                    >
                      Get Expert Application Guidance
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SwedenScholarship;
