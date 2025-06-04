
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HarvardScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Harvard University Scholarship | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Harvard University scholarships and financial aid. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Harvard scholarship, Harvard University, USA education, international scholarship, Ivy League" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/harvard-scholarship" />
        <meta property="og:title" content="Harvard University Scholarship | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to Harvard University scholarships for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/harvard-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop"
          alt="Harvard University Scholarship"
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
                Harvard University
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Harvard University Scholarship
            </h1>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              World-class education with comprehensive financial aid
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
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              <div className="text-gray-300 space-y-8">
                
                <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="text-orange-500 font-bold text-lg mb-2">Program Highlights</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>No loans required - only grants and work-study</li>
                    <li>Families earning less than $75,000 pay nothing</li>
                    <li>Average aid package: $70,000+ annually</li>
                    <li>Need-blind admissions for all students</li>
                    <li>Covers undergraduate and graduate programs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Harvard Financial Aid</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Harvard University is committed to making education affordable for students from all economic backgrounds. The Harvard Financial Aid Initiative ensures that cost is never a barrier to a Harvard education, with the most generous financial aid program in higher education.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Harvard's financial aid is entirely need-based, and the university meets 100% of demonstrated financial need for all admitted students. There are no merit-based scholarships, ensuring that aid goes to those who need it most.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Financial Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-orange-500 mb-4">Income-Based Aid</h3>
                      <ul className="space-y-2">
                        <li className="text-gray-300">• $0 cost for families earning under $75,000</li>
                        <li className="text-gray-300">• 0-10% income for families earning $75k-$150k</li>
                        <li className="text-gray-300">• Sliding scale for higher incomes</li>
                        <li className="text-gray-300">• No consideration of home equity</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-orange-500 mb-4">Coverage Includes</h3>
                      <ul className="space-y-2">
                        <li className="text-gray-300">• Full tuition and fees</li>
                        <li className="text-gray-300">• Room and board</li>
                        <li className="text-gray-300">• Personal and travel expenses</li>
                        <li className="text-gray-300">• Health insurance premium</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Harvard's generous financial aid makes world-class education accessible. Our consultants can help you navigate the application and financial aid process to maximize your chances of admission and aid.
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

export default HarvardScholarship;
