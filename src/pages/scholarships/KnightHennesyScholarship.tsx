
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const KnightHennesyScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Knight-Hennessy Scholarship Stanford | Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to Knight-Hennessy Scholarship at Stanford University. Learn about eligibility, benefits, and application process." />
        <meta name="keywords" content="Knight-Hennessy scholarship, Stanford University, graduate school, international scholarship, USA education" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/knight-hennessy-scholarship" />
        <meta property="og:title" content="Knight-Hennessy Scholarship Stanford | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to Knight-Hennessy Scholarship for international students at Stanford." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/knight-hennessy-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop"
          alt="Knight-Hennessy Scholarship Stanford"
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
                Stanford University
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Knight-Hennessy Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Stanford's flagship fellowship program for graduate study
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
                      <li>Full funding for up to 3 years at Stanford University</li>
                      <li>Covers tuition, living stipend, and academic expenses</li>
                      <li>Leadership development program included</li>
                      <li>Access to exclusive Knight-Hennessy community</li>
                      <li>Up to 100 scholars selected annually</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Knight-Hennessy Scholarship</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Knight-Hennessy Scholars program develops a community of future global leaders to address complex challenges through collaboration and innovation. Established with a $750 million founding gift, it is Stanford's largest philanthropic investment in graduate education.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      The program seeks to attract and prepare a new generation of leaders with different perspectives, experiences, and areas of expertise who can work together to solve complex global problems. Scholars pursue graduate degrees across Stanford's seven schools.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Benefits</h2>
                    <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">100%</div>
                          <div className="text-gray-300">Tuition Coverage</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">$50,000+</div>
                          <div className="text-gray-300">Annual Stipend</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">3 Years</div>
                          <div className="text-gray-300">Maximum Duration</div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Full tuition and associated fees</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Living and academic expenses stipend</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Leadership development programming</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Global immersion experiences</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Knight-Hennessy Scholarship is one of the most competitive graduate fellowships worldwide. Our expert team can help you craft an outstanding application that showcases your leadership potential and academic excellence.
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

export default KnightHennesyScholarship;
