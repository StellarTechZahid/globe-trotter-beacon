
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SwissGovernmentScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Swiss Government Excellence Scholarship | Complete Guide</title>
        <meta name="description" content="Comprehensive guide to Swiss Government Excellence Scholarships for international students. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Swiss government scholarship, Switzerland education, international scholarship, research scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/swiss-government-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop"
            alt="Swiss Government Scholarship"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 container-full h-full flex items-center">
            <div className="max-w-4xl text-white">
              <Link to="/scholarship/european-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to European Scholarships
              </Link>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇨🇭</span>
                <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Switzerland
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Swiss Government Excellence Scholarship
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Prestigious scholarships for research and postgraduate study
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-semibold">CHF 1,920/month</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Various Deadlines</span>
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
                      <li>Monthly scholarship payment of CHF 1,920</li>
                      <li>Tuition fee waiver at Swiss universities</li>
                      <li>Health insurance coverage</li>
                      <li>Housing allowance and research costs</li>
                      <li>Available for Master's, PhD, and research programs</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Swiss Government Excellence Scholarships</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Swiss Government Excellence Scholarships are awarded by the Federal Commission for Scholarships for Foreign Students (FCS) to promote international exchange and research cooperation between Switzerland and over 180 countries.
                    </p>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Swiss Government Excellence Scholarships offer exceptional opportunities to study and research in Switzerland. Our experts can help you navigate the application process.
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

export default SwissGovernmentScholarship;
