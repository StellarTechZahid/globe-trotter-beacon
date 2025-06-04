
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErasmusMundusScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Erasmus Mundus Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Erasmus Mundus Joint Master's Degree scholarships. Learn about eligibility, benefits, and application process for EU education." />
        <meta name="keywords" content="Erasmus Mundus, EU scholarship, European education, joint master degree, international scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/erasmus-mundus-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop"
          alt="Erasmus Mundus Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/european-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to European Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇪🇺</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                European Union
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Erasmus Mundus Scholarship
            </h1>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Joint Master's Degree programs across multiple European countries
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">€25,000 annually</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January Deadline</span>
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
                    <li>Joint degrees from prestigious European universities</li>
                    <li>€25,000 annual scholarship for living costs</li>
                    <li>Full tuition coverage for program duration</li>
                    <li>Study in at least 2 different EU countries</li>
                    <li>Travel allowances and insurance coverage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Erasmus Mundus</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Erasmus Mundus Joint Master Degrees (EMJMDs) are prestigious, integrated, international study programmes delivered by consortia of higher education institutions. Students study in at least two different countries and receive a joint, double or multiple degree.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Erasmus Mundus offers world-class European education with full funding. Our consultants can help you navigate the complex application process and choose the right program.
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

export default ErasmusMundusScholarship;
