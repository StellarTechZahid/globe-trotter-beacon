
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BolashakInternationalScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Bolashak International Scholarship | Complete Guide</title>
        <meta name="description" content="Comprehensive guide to Bolashak International Scholarship from Kazakhstan. Learn about this prestigious scholarship program." />
        <meta name="keywords" content="Bolashak scholarship, Kazakhstan scholarship, international education, Central Asia scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/bolashak-international-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop"
            alt="Bolashak International Scholarship"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 container-full h-full flex items-center">
            <div className="max-w-4xl text-white">
              <Link to="/scholarship/asian-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Asian Scholarships
              </Link>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇰🇿</span>
                <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Kazakhstan
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Bolashak International Scholarship
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Kazakhstan's flagship scholarship for studying abroad
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Full Coverage</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Varies by Program</span>
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
                      <li>Full tuition and living expenses covered</li>
                      <li>Study at top universities worldwide</li>
                      <li>Available for Bachelor's, Master's, and PhD</li>
                      <li>Multiple destination countries</li>
                      <li>Commitment to serve Kazakhstan after graduation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Bolashak Scholarship</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Bolashak International Scholarship is Kazakhstan's prestigious state-funded program that provides opportunities for Kazakhstani citizens to pursue higher education at leading universities abroad.
                    </p>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Bolashak scholarships are highly competitive and require a commitment to contribute to Kazakhstan's development. Our experts can guide you through the application process.
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

export default BolashakInternationalScholarship;
