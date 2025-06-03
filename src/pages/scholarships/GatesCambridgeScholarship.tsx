
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GatesCambridgeScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Gates Cambridge Scholarship | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to the prestigious Gates Cambridge Scholarship. Learn about eligibility, benefits, application process, and success strategies." />
        <meta name="keywords" content="Gates Cambridge scholarship, UK education, Cambridge University, international scholarship, postgraduate funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/gates-cambridge-scholarship" />
        <meta property="og:title" content="Gates Cambridge Scholarship | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to the prestigious Gates Cambridge Scholarship for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/gates-cambridge-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop"
          alt="Gates Cambridge Scholarship"
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
              Gates Cambridge Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Premier scholarship for outstanding applicants from outside the UK to pursue graduate study at Cambridge
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Full Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Deadline: December 1, 2024</span>
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
                <p className="text-orange-400">1-4 Years</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Awards</h3>
                <p className="text-orange-400">80+ Annually</p>
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
                      <li>Complete funding for full course fees and living allowance</li>
                      <li>Study at world-renowned University of Cambridge</li>
                      <li>Leadership development and networking opportunities</li>
                      <li>Global Gates Cambridge community of scholars</li>
                      <li>Additional funding for academic development and family allowances</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Gates Cambridge</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210 million from the Bill and Melinda Gates Foundation to the University of Cambridge. The aim was to build a global network of future leaders committed to improving the lives of others.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      Each year, the programme offers around 80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a full-time postgraduate degree in any subject available at the University of Cambridge.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Standard Award</h3>
                        <ul className="space-y-2">
                          {[
                            "University Composition Fee",
                            "College fees",
                            "Annual stipend (£18,744)",
                            "One return airfare",
                            "Inbound visa costs",
                            "Family allowance (if applicable)"
                          ].map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Additional Support</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Academic development:</span>
                            <span className="text-white font-semibold">£2,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Thesis expenses:</span>
                            <span className="text-white font-semibold">£500</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Family allowance:</span>
                            <span className="text-white font-semibold">£2,681</span>
                          </div>
                          <div className="border-t border-gray-600 pt-2">
                            <div className="flex justify-between">
                              <span className="text-orange-500 font-bold">Total Value:</span>
                              <span className="text-orange-500 font-bold text-xl">£40,000+/year</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Eligibility & Selection</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Selection Criteria</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-white mb-2">Academic Excellence</h4>
                            <p className="text-gray-300 text-sm">Outstanding intellectual ability and academic achievement</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Leadership Potential</h4>
                            <p className="text-gray-300 text-sm">Capacity for leadership and commitment to improving others' lives</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Commitment to Others</h4>
                            <p className="text-gray-300 text-sm">Desire to use knowledge to contribute to society</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Fit with Cambridge</h4>
                            <p className="text-gray-300 text-sm">Good fit between applicant's qualifications and course</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Gates Cambridge Scholarship is one of the most competitive scholarships globally. Let our experts guide you through the application process to maximize your chances of success.
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

export default GatesCambridgeScholarship;
