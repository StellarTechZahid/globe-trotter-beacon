
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CommonwealthScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Commonwealth Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Commonwealth Scholarships for international students. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Commonwealth scholarship, UK education, developing countries scholarship, postgraduate study" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/commonwealth-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop"
            alt="Commonwealth Scholarship"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 container-full h-full flex items-center">
            <div className="max-w-4xl text-white">
              <Link to="/scholarship/fully-funded" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fully Funded Scholarships
              </Link>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇬🇧</span>
                <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  United Kingdom
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Commonwealth Scholarship
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Scholarships for citizens of developing Commonwealth countries
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Full Coverage</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>December Deadline</span>
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
                      <li>Fully funded Master's and PhD programs</li>
                      <li>Monthly stipend and accommodation allowance</li>
                      <li>Return flights and visa fees covered</li>
                      <li>Available to developing Commonwealth countries</li>
                      <li>Focus on sustainable development goals</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Commonwealth Scholarships</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      Commonwealth Scholarships are funded by the UK Foreign, Commonwealth and Development Office (FCDO) as part of the UK's ongoing commitment to the Commonwealth. They provide opportunities for talented individuals from developing Commonwealth countries to study in the UK.
                    </p>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Commonwealth Scholarships offer life-changing opportunities for students from developing countries. Our experts can help you navigate the application process.
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

export default CommonwealthScholarship;
