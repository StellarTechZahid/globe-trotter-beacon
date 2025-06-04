
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AustralianGovernmentScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Australian Government Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Australian Government scholarships including Australia Awards. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Australian Government scholarship, Australia Awards, study in Australia, international scholarship Australia" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/australian-government-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop"
          alt="Australian Government Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/fully-funded" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Fully Funded Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇦🇺</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Australia
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Australian Government Scholarship
            </h1>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Prestigious government-funded scholarships for international students
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Full Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>April Deadline</span>
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
                    <li>Full tuition fees covered for undergraduate and postgraduate study</li>
                    <li>Living allowance of approximately AUD $3,511 per month</li>
                    <li>Return air travel and health insurance</li>
                    <li>Available for students from developing countries</li>
                    <li>Academic support and professional development opportunities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Australia Awards</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Australia Awards are prestigious international scholarships funded by the Australian Government. They aim to contribute to the development needs of Australia's partner countries in line with bilateral and regional agreements, while building strong relationships between Australia and its neighbors.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Australia Awards offer comprehensive support for international education. Our consultants can help you understand eligibility criteria and prepare a competitive application.
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

export default AustralianGovernmentScholarship;
