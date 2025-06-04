
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PennsylvaniaScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Pennsylvania State Grant | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Pennsylvania State Grant and financial aid programs. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Pennsylvania scholarship, PA State Grant, Pennsylvania education aid, PHEAA grant" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/pennsylvania-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=600&fit=crop"
          alt="Pennsylvania Scholarship"
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
                Pennsylvania
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Pennsylvania State Grant
            </h1>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Need-based financial aid for Pennsylvania residents
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Up to $4,348</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>May Deadline</span>
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
                    <li>Pennsylvania State Grant: Up to $4,348 annually</li>
                    <li>Available to Pennsylvania residents</li>
                    <li>Need-based funding for undergraduate studies</li>
                    <li>Renewable for up to 4 academic years</li>
                    <li>Can be used at eligible institutions nationwide</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Pennsylvania State Grant</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    The Pennsylvania State Grant Program provides need-based financial assistance to eligible Pennsylvania residents attending approved postsecondary institutions. The program is administered by the Pennsylvania Higher Education Assistance Agency (PHEAA).
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Pennsylvania offers substantial state aid for residents. Our consultants can help you understand eligibility requirements and maximize your financial aid opportunities.
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

export default PennsylvaniaScholarship;
