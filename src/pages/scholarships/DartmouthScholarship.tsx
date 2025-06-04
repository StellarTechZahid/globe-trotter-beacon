
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DartmouthScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Dartmouth College Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Dartmouth College scholarships and financial aid. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Dartmouth scholarship, Dartmouth College, USA education, Ivy League scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/dartmouth-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop"
          alt="Dartmouth College Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/north-america" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to North America Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇺🇸</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Dartmouth College
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Dartmouth College Scholarship
            </h1>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Need-based financial aid with generous support
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">100% Need Met</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>February Deadline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              <div className="text-gray-300 space-y-8">
                <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-orange-500 font-bold text-lg mb-2">Program Highlights</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>100% of demonstrated financial need met</li>
                    <li>Families earning under $60,000 pay nothing</li>
                    <li>Average need-based aid: $52,000</li>
                    <li>No loans in aid packages</li>
                    <li>Need-blind admissions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Dartmouth Financial Aid</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Dartmouth College provides comprehensive financial aid ensuring that all admitted students can attend regardless of their financial circumstances. The College meets 100% of demonstrated need.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Dartmouth's generous financial aid makes Ivy League education accessible. Our consultants can help you navigate the application process.
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

      <Footer />
    </div>
  );
};

export default DartmouthScholarship;
