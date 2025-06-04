
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MarshallScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Marshall Scholarship UK | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to Marshall Scholarship for studying in the UK. Learn about eligibility, benefits, application process, and requirements." />
        <meta name="keywords" content="Marshall scholarship, UK education, British universities, international scholarship, study in Britain" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/marshall-scholarship" />
        <meta property="og:title" content="Marshall Scholarship UK | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to Marshall Scholarship for American students in the UK." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/marshall-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop"
          alt="Marshall Scholarship UK"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Marshall Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Prestigious scholarship for American citizens to study in the UK
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Full Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>October Deadline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="text-gray-300 space-y-8">
                  
                  <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-orange-500 font-bold text-lg mb-2">Program Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Full funding for up to 3 years of graduate study</li>
                      <li>Established in 1953 to strengthen UK-US relations</li>
                      <li>Up to 50 awards annually for American citizens</li>
                      <li>Study at any UK university</li>
                      <li>Living allowance, travel costs, and thesis grant</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Marshall Scholarship</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Marshall Scholarship was created by the British government in 1953 as a gesture of gratitude to the United States for the Marshall Plan. It enables intellectually distinguished young Americans to study for a degree in the United Kingdom.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      The scholarship aims to strengthen the enduring relationship between the British and American peoples, their governments and their institutions. Marshall Scholars strengthen the bond between the two countries and carry with them an understanding of contemporary Britain.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Full Financial Support</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• University fees at Oxford, Cambridge rates</li>
                          <li className="text-gray-300">• Living allowance of £1,378 per month</li>
                          <li className="text-gray-300">• Annual book grant of £1,235</li>
                          <li className="text-gray-300">• Thesis grant of £750</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Additional Benefits</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• Research and daily travel grants</li>
                          <li className="text-gray-300">• Fares to and from the United States</li>
                          <li className="text-gray-300">• Where applicable, contribution to dependent allowances</li>
                          <li className="text-gray-300">• Access to Marshall Association network</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Marshall Scholarship is highly competitive with rigorous selection criteria. Let our experts guide you through the application process and help you present your best case.
                    </p>
                    <Button 
                      onClick={scrollToConsultation}
                      className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
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

export default MarshallScholarship;
