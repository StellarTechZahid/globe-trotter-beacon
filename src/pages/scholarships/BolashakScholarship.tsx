
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BolashakScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Bolashak International Scholarship | Kazakhstan Government Program</title>
        <meta name="description" content="Complete guide to Kazakhstan's Bolashak International Scholarship. Learn about eligibility, benefits, and application process for studying abroad." />
        <meta name="keywords" content="Bolashak scholarship, Kazakhstan scholarship, international education, government scholarship, study abroad funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/bolashak-scholarship" />
        <meta property="og:title" content="Bolashak International Scholarship | Complete Guide" />
        <meta property="og:description" content="Complete guide to Kazakhstan's prestigious Bolashak International Scholarship program." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/bolashak-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop"
          alt="Bolashak International Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/central-asian-countries" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Central Asian Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇰🇿</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Kazakhstan
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Bolashak International Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Kazakhstan's flagship international education program
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">Full Coverage</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Applications: February - March</span>
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
                <p className="text-orange-400">Bachelor's to PhD</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Countries</h3>
                <p className="text-orange-400">40+ Countries</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Awards</h3>
                <p className="text-orange-400">3,000+ Annually</p>
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
                      <li>Complete funding for international education</li>
                      <li>Study at world's top universities in 40+ countries</li>
                      <li>Priority fields aligned with Kazakhstan's development goals</li>
                      <li>Guaranteed employment upon return to Kazakhstan</li>
                      <li>Comprehensive pre-departure preparation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Bolashak Program</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Bolashak International Scholarship is Kazakhstan's flagship program for sending the country's most talented students to study at the world's leading universities. Launched in 1993, the program has sent over 12,000 Kazakhstani students abroad to acquire world-class education and return to contribute to the country's development.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      "Bolashak" means "future" in Kazakh, reflecting the program's vision of preparing future leaders for Kazakhstan. The scholarship covers studies in priority fields that are crucial for the country's economic and social development, including engineering, medicine, natural sciences, agriculture, and education.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Included Benefits</h3>
                        <ul className="space-y-2">
                          {[
                            "Full tuition fees",
                            "Monthly living allowance",
                            "Round-trip airfare",
                            "Health insurance",
                            "Academic materials allowance",
                            "Language preparation courses"
                          ].map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Coverage by Level</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Bachelor's:</span>
                            <span className="text-white font-semibold">$80,000 - $120,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Master's:</span>
                            <span className="text-white font-semibold">$60,000 - $100,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">PhD:</span>
                            <span className="text-white font-semibold">$120,000 - $200,000</span>
                          </div>
                          <div className="border-t border-gray-600 pt-2">
                            <div className="flex justify-between">
                              <span className="text-orange-500 font-bold">Medical Studies:</span>
                              <span className="text-orange-500 font-bold">$200,000 - $350,000</span>
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
                        <h3 className="text-xl font-bold text-orange-500 mb-3">General Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Kazakhstani citizenship</li>
                          <li>• Age limits: Bachelor's (17-29), Master's (22-35), PhD (25-40)</li>
                          <li>• Strong academic performance (GPA 3.7+ preferred)</li>
                          <li>• Commitment to work in Kazakhstan for specified period</li>
                          <li>• No outstanding obligations to the state</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Priority Fields of Study</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-300">
                            <li>• Engineering & Technology</li>
                            <li>• Medicine & Healthcare</li>
                            <li>• Natural Sciences</li>
                            <li>• Agriculture & Veterinary</li>
                            <li>• Education</li>
                          </ul>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Architecture & Construction</li>
                            <li>• Transport & Logistics</li>
                            <li>• Information Technology</li>
                            <li>• Environmental Sciences</li>
                            <li>• Social Sciences</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Work Obligations</h3>
                        <div className="space-y-2 text-gray-300">
                          <p className="mb-3">Upon completion, scholars must work in Kazakhstan for:</p>
                          <ul className="space-y-1">
                            <li>• Bachelor's degree: 3 years</li>
                            <li>• Master's degree: 3 years</li>
                            <li>• PhD/Medical degree: 5 years</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Required Documents</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Online application form</li>
                          <li>• Academic transcripts (notarized)</li>
                          <li>• Diploma/degree certificates</li>
                          <li>• Language proficiency certificates</li>
                          <li>• Medical certificate</li>
                          <li>• Motivation letter</li>
                          <li>• Study plan</li>
                          <li>• University admission letters (conditional acceptable)</li>
                          <li>• Two recommendation letters</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Selection Process</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Application Period:</span>
                            <span className="text-white font-semibold">February - March</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Document Review:</span>
                            <span className="text-white font-semibold">April - May</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Interviews:</span>
                            <span className="text-white font-semibold">June</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Final Results:</span>
                            <span className="text-orange-500 font-semibold">July</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Departure:</span>
                            <span className="text-white font-semibold">August - September</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Destination Countries & Universities</h2>
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                      <p className="text-gray-300 mb-4">
                        Bolashak scholars can study in over 40 countries at approved universities, including:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-orange-500 font-semibold mb-3">Popular Destinations:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• United States (Harvard, MIT, Stanford)</li>
                            <li>• United Kingdom (Oxford, Cambridge, Imperial)</li>
                            <li>• Canada (Toronto, UBC, McGill)</li>
                            <li>• Australia (Melbourne, Sydney, ANU)</li>
                            <li>• Germany (Technical Universities)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-orange-500 font-semibold mb-3">Emerging Destinations:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Singapore (NUS, NTU)</li>
                            <li>• South Korea (KAIST, Seoul National)</li>
                            <li>• Japan (University of Tokyo, Kyoto)</li>
                            <li>• Netherlands (TU Delft, Wageningen)</li>
                            <li>• Switzerland (ETH Zurich, EPFL)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Need Application Support?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Bolashak scholarship is highly competitive with thousands of applicants competing for limited spots. Our team has extensive experience helping Kazakhstani students secure this prestigious scholarship.
                    </p>
                    <Button 
                      onClick={scrollToConsultation}
                      className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                    >
                      Get Expert Bolashak Application Guidance
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

export default BolashakScholarship;
