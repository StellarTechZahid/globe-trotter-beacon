
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const YaleScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Yale University Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Yale University scholarships and financial aid. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Yale scholarship, Yale University, USA education, international scholarship, Ivy League" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/yale-scholarship" />
        <meta property="og:title" content="Yale University Scholarship | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to Yale University scholarships for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/yale-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&h=600&fit=crop"
          alt="Yale University Scholarship"
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
                Yale University
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Yale University Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Exceptional education with comprehensive financial support
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Need-Based Aid</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January Deadline</span>
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
                      <li>100% of demonstrated financial need met</li>
                      <li>No loans in financial aid packages</li>
                      <li>Need-blind admissions for all applicants</li>
                      <li>Average grant: $60,000+ annually</li>
                      <li>International students fully supported</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Yale Financial Aid</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      Yale University is committed to ensuring that all qualified students can afford a Yale education, regardless of their family's financial circumstances. Yale's need-based financial aid program is among the most generous in higher education.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      Yale meets 100% of each student's demonstrated financial need and has eliminated loans from all financial aid packages. Instead, Yale provides grants that do not need to be repaid, making a Yale education accessible to talented students from all backgrounds.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Benefits</h2>
                    <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">100%</div>
                          <div className="text-gray-300">Need Met</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">$60K+</div>
                          <div className="text-gray-300">Average Grant</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">0</div>
                          <div className="text-gray-300">Loans Required</div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Tuition and mandatory fees</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Room and board costs</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Personal expenses allowance</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Travel and miscellaneous costs</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Yale's generous financial aid program makes an Ivy League education accessible to students worldwide. Our expert consultants can help you navigate the application process and financial aid requirements.
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

export default YaleScholarship;
