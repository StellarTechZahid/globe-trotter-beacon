
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DAADScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>DAAD Scholarship Germany | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to DAAD Scholarships in Germany. Learn about eligibility, benefits, application process, and study opportunities." />
        <meta name="keywords" content="DAAD scholarship, Germany education, German universities, international scholarship, study in Germany" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/daad-scholarship" />
        <meta property="og:title" content="DAAD Scholarship Germany | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to DAAD Scholarships for international students in Germany." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/daad-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop"
          alt="DAAD Scholarship Germany"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/european-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to European Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇩🇪</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Germany
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              DAAD Scholarship Germany
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Germany's largest funding organization for international academic exchange
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Full/Partial Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Multiple Deadlines</span>
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
                      <li>Over 100,000 scholarships awarded annually</li>
                      <li>Study at top German universities and research institutions</li>
                      <li>Monthly stipend and additional benefits</li>
                      <li>Language course support and cultural integration</li>
                      <li>Post-graduation networking and career opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About DAAD</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The German Academic Exchange Service (DAAD) is the world's largest funding organization for the international exchange of students and researchers. Founded in 1925, DAAD has supported over 2.8 million scholars at home and abroad.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      DAAD promotes international academic relations and cooperation by offering mobility programs primarily for students and faculty, but also for administrators and others in the higher education realm.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Scholarship Programs</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Graduate Programs</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• Study Scholarships for Graduates</li>
                          <li className="text-gray-300">• Research Grants for Doctoral Candidates</li>
                          <li className="text-gray-300">• Bi-nationally Supervised Doctoral Degrees</li>
                          <li className="text-gray-300">• Research Stays for University Academics</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Financial Support</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Graduate stipend:</span>
                            <span className="text-white font-semibold">€861/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">PhD stipend:</span>
                            <span className="text-white font-semibold">€1,200/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Health insurance:</span>
                            <span className="text-white font-semibold">Included</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Travel allowance:</span>
                            <span className="text-white font-semibold">Provided</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      DAAD offers numerous scholarship opportunities with different deadlines throughout the year. Let our experts help you identify the right program and prepare a strong application.
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

export default DAADScholarship;
