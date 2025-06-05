
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChineseGovernmentScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Chinese Government Scholarship | Complete Guide</title>
        <meta name="description" content="Comprehensive guide to Chinese Government Scholarship (CSC) for international students. Learn about eligibility and application process." />
        <meta name="keywords" content="Chinese Government scholarship, CSC scholarship, study in China, China scholarship council" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/chinese-government-scholarship" />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=600&fit=crop"
            alt="Chinese Government Scholarship"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 container-full h-full flex items-center">
            <div className="max-w-4xl text-white">
              <Link to="/scholarship/asian-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Asian Scholarships
              </Link>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇨🇳</span>
                <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  China
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Chinese Government Scholarship
              </h1>
              <p className="text-xl mb-6 opacity-90">
                China's premier scholarship program for international students
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Full Coverage</span>
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
                      <li>Full tuition waiver for all programs</li>
                      <li>Monthly living allowance (CNY 2,500-3,500)</li>
                      <li>Free on-campus accommodation</li>
                      <li>Comprehensive medical insurance</li>
                      <li>Chinese language preparatory programs</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Chinese Government Scholarships</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Chinese Government Scholarship is established by the Ministry of Education (MOE) of the People's Republic of China to sponsor international students, teachers and scholars to study and conduct research in Chinese higher education institutions.
                    </p>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Chinese Government Scholarships offer excellent opportunities to study in one of the world's fastest-growing economies. Our experts can help you navigate the application process.
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

export default ChineseGovernmentScholarship;
