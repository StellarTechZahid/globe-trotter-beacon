
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MITScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>MIT Scholarship | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to MIT scholarships and financial aid. Learn about eligibility, benefits, and application process for international students." />
        <meta name="keywords" content="MIT scholarship, Massachusetts Institute of Technology, USA education, STEM scholarship, international students" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/mit-scholarship" />
        <meta property="og:title" content="MIT Scholarship | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to MIT scholarships for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/mit-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581092446705-e427aa77da25?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1581092446705-e427aa77da25?w=1200&h=600&fit=crop"
          alt="MIT Scholarship"
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
                MIT
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              MIT Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Leading STEM education with comprehensive financial support
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Need-Based Aid</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>February Deadline</span>
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
                      <li>100% of demonstrated need met for all students</li>
                      <li>Need-blind admissions for all applicants</li>
                      <li>Average aid package exceeds $55,000</li>
                      <li>No loans required in financial aid packages</li>
                      <li>International students receive same aid as domestic</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About MIT Financial Aid</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      MIT is committed to ensuring that the most talented students can attend regardless of their financial circumstances. MIT's need-based financial aid program is among the most generous in the world, with no merit-based scholarships - aid is distributed purely based on financial need.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      MIT meets 100% of each student's demonstrated financial need through grants and work-study opportunities. The institute has eliminated the need for student loans in its financial aid packages, making world-class STEM education accessible to all qualified students.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Aid Structure</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• Families earning <$90k pay nothing</li>
                          <li className="text-gray-300">• Families earning <$140k: no tuition</li>
                          <li className="text-gray-300">• Sliding scale for higher incomes</li>
                          <li className="text-gray-300">• Home equity not considered</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Coverage Includes</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• Tuition and mandatory fees</li>
                          <li className="text-gray-300">• Room and board</li>
                          <li className="text-gray-300">• Books and supplies</li>
                          <li className="text-gray-300">• Personal expenses</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      MIT's generous financial aid makes world-leading STEM education accessible to talented students worldwide. Our expert consultants can help you navigate the highly competitive application process.
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

export default MITScholarship;
