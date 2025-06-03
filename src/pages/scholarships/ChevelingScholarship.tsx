
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChevelingScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Chevening Scholarship UK | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to the prestigious Chevening Scholarship for studying in the UK. Learn about eligibility, benefits, and application strategies." />
        <meta name="keywords" content="Chevening scholarship, UK education, British government scholarship, study in UK, international students" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/chevening-scholarship" />
        <meta property="og:title" content="Chevening Scholarship UK | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to the prestigious Chevening Scholarship for international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/chevening-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop"
          alt="Chevening Scholarship UK"
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
              Chevening Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              The UK government's global scholarship programme for future leaders
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">£40,000 - £60,000</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Deadline: November 7, 2024</span>
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
                <p className="text-orange-400">Master's Degree</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
                <p className="text-orange-400">1 Year</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Awards</h3>
                <p className="text-orange-400">1,500+ Annually</p>
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
                      <li>Full funding for tuition fees and living costs</li>
                      <li>Access to the world's top-ranked UK universities</li>
                      <li>Exclusive networking events and professional development</li>
                      <li>Global alumni network of 50,000+ leaders</li>
                      <li>Leadership development programme</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Chevening Scholarships</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      Chevening Scholarships are the UK government's global scholarship programme, funded by the Foreign, Commonwealth and Development Office (FCDO) and partner organisations. These scholarships are awarded to outstanding emerging leaders to pursue a one-year master's degree in the UK.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      Since 1983, Chevening has developed global leaders for over 40 years. There are more than 50,000 Chevening Alumni worldwide who comprise an influential and highly regarded global network. Chevening Scholars come from over 160 countries and territories worldwide, studying at any of the UK's leading universities.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Included Benefits</h3>
                        <ul className="space-y-2">
                          {[
                            "University tuition fees",
                            "Monthly stipend (£1,347)",
                            "Economy class return airfare",
                            "Additional grants for thesis",
                            "Arrival allowance",
                            "Departure allowance"
                          ].map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Total Package Value</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Tuition fees:</span>
                            <span className="text-white font-semibold">£15,000 - £35,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Living allowance:</span>
                            <span className="text-white font-semibold">£16,164</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Travel & allowances:</span>
                            <span className="text-white font-semibold">£3,000 - £5,000</span>
                          </div>
                          <div className="border-t border-gray-600 pt-2">
                            <div className="flex justify-between">
                              <span className="text-orange-500 font-bold">Total Value:</span>
                              <span className="text-orange-500 font-bold text-xl">£35,000 - £55,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Eligibility Criteria</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Essential Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Citizen of a Chevening-eligible country or territory</li>
                          <li>• Return to your country of citizenship for a minimum of two years after scholarship ends</li>
                          <li>• Have completed all components of an undergraduate degree</li>
                          <li>• Have at least two years of work experience</li>
                          <li>• Apply to three different eligible UK university courses</li>
                          <li>• Meet the English language requirement</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Work Experience</h3>
                        <p className="text-gray-300 mb-3">
                          You must have at least 2,800 hours of work experience (equivalent to 2 years full-time). This can include:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Full-time employment</li>
                          <li>• Part-time employment</li>
                          <li>• Voluntary work</li>
                          <li>• Internships</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">English Language Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• IELTS Academic: Overall 6.5 (with 6.0 in all components)</li>
                          <li>• TOEFL iBT: Overall 79</li>
                          <li>• Pearson PTE Academic: Overall 58</li>
                          <li>• Or degree taught in English</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Application Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Online application through Chevening portal</li>
                          <li>• Leadership and influence essay (500 words)</li>
                          <li>• Networking essay (500 words)</li>
                          <li>• Study in the UK essay (500 words)</li>
                          <li>• Career plan essay (500 words)</li>
                          <li>• Two reference letters</li>
                          <li>• University degree certificates and transcripts</li>
                          <li>• English language certificate</li>
                          <li>• Passport copy</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Selection Timeline</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Application Opens:</span>
                            <span className="text-white font-semibold">August</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Application Deadline:</span>
                            <span className="text-orange-500 font-semibold">November 7</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Shortlisting:</span>
                            <span className="text-white font-semibold">January</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Interviews:</span>
                            <span className="text-white font-semibold">February - April</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Final Results:</span>
                            <span className="text-white font-semibold">June</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Need Expert Guidance?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      Chevening is highly competitive with over 60,000 applications for 1,500 scholarships annually. Our experts have helped hundreds of students secure this prestigious scholarship.
                    </p>
                    <Button 
                      onClick={scrollToConsultation}
                      className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                    >
                      Get Professional Application Support
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

export default ChevelingScholarship;
