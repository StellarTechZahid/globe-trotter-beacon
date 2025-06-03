
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2, Bookmark, Star, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FullbrightScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Fulbright Scholarship Program | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to the prestigious Fulbright Scholarship Program. Learn about eligibility, benefits, application process, and success strategies." />
        <meta name="keywords" content="Fulbright scholarship, USA education, international exchange, government scholarship, study abroad funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/fulbright-scholarship" />
        <meta property="og:title" content="Fulbright Scholarship Program | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to the prestigious Fulbright Scholarship Program for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/fulbright-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
          alt="Fulbright Scholarship Program"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/fully-funded" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Fully Funded Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇺🇸</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                United States
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Fulbright Scholarship Program
            </h1>
            <p className="text-xl mb-6 opacity-90">
              The world's most prestigious international educational exchange program
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Full Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Deadline: October 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Program Type</h3>
                <p className="text-orange-400">Fully Funded</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Level</h3>
                <p className="text-orange-400">Graduate & PhD</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
                <p className="text-orange-400">1-2 Years</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Awards</h3>
                <p className="text-orange-400">4,000+ Annually</p>
              </CardContent>
            </Card>
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
                      <li>Complete funding for tuition, living expenses, and travel</li>
                      <li>Access to top US universities and research institutions</li>
                      <li>Cultural exchange and professional networking opportunities</li>
                      <li>Alumni network spanning 160 countries</li>
                      <li>Optional practical training opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About the Fulbright Program</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      Established in 1946, the Fulbright Program is the flagship international educational exchange program sponsored by the U.S. government. Named after Senator J. William Fulbright, the program aims to foster mutual understanding between the United States and other countries through educational and cultural exchange.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      The Fulbright Program operates in over 160 countries worldwide and has provided funding for more than 390,000 participants since its inception. It is widely recognized as one of the most prestigious scholarship programs globally, with 61 Fulbright alumni having won Nobel Prizes.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Included Benefits</h3>
                        <ul className="space-y-2">
                          {[
                            "Full tuition and fees",
                            "Monthly living stipend ($1,200-$2,500)",
                            "Round-trip airfare",
                            "Health insurance coverage",
                            "Book and research allowance",
                            "Settling-in allowance"
                          ].map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Total Value</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Tuition (per year):</span>
                            <span className="text-white font-semibold">$30,000 - $60,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Living expenses:</span>
                            <span className="text-white font-semibold">$15,000 - $30,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Travel & Insurance:</span>
                            <span className="text-white font-semibold">$5,000 - $8,000</span>
                          </div>
                          <div className="border-t border-gray-600 pt-2">
                            <div className="flex justify-between">
                              <span className="text-orange-500 font-bold">Total Package:</span>
                              <span className="text-orange-500 font-bold text-xl">$50,000 - $100,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Academic Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Bachelor's degree or equivalent by application deadline</li>
                          <li>• Strong academic record (minimum 3.5 GPA preferred)</li>
                          <li>• Demonstrated leadership and community involvement</li>
                          <li>• Clear academic and career objectives</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">English Proficiency</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• TOEFL iBT: Minimum 80 (100+ recommended)</li>
                          <li>• IELTS: Minimum 6.5 (7.0+ recommended)</li>
                          <li>• Native English speakers exempted</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Other Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Citizenship of participating country</li>
                          <li>• Commitment to return home for 2 years after completion</li>
                          <li>• No previous US graduate study exceeding one year</li>
                          <li>• Medical clearance and background check</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Application Process & Timeline</h2>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                          <h3 className="text-xl font-bold text-orange-500 mb-4">Required Documents</h3>
                          <ul className="space-y-2 text-gray-300 text-sm">
                            <li>• Completed online application</li>
                            <li>• Statement of Purpose (2 pages)</li>
                            <li>• Personal Statement (1 page)</li>
                            <li>• Three recommendation letters</li>
                            <li>• Official transcripts</li>
                            <li>• English proficiency scores</li>
                            <li>• CV/Resume</li>
                            <li>• Country preference form</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                          <h3 className="text-xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Application Opens:</span>
                              <span className="text-white font-semibold">April 1</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Application Deadline:</span>
                              <span className="text-orange-500 font-semibold">October 15</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Interview Period:</span>
                              <span className="text-white font-semibold">Dec - Feb</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Results Announced:</span>
                              <span className="text-white font-semibold">March - May</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Program Starts:</span>
                              <span className="text-white font-semibold">August - September</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Fulbright Scholarship is highly competitive with an acceptance rate of 15-20%. Let our experts help you craft a winning application that stands out among thousands of applicants.
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

export default FullbrightScholarship;
