
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const VanierCGS = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Vanier Canada Graduate Scholarships | Complete Guide</title>
        <meta name="description" content="Comprehensive guide to the prestigious Vanier Canada Graduate Scholarships. Learn about eligibility, benefits, and application process for PhD studies in Canada." />
        <meta name="keywords" content="Vanier CGS, Canada graduate scholarships, PhD funding Canada, Canadian research scholarships" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/vanier-cgs" />
        <meta property="og:title" content="Vanier Canada Graduate Scholarships | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to the prestigious Vanier Canada Graduate Scholarships for PhD students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/vanier-cgs" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517191297489-a5d9925b2db0?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1517191297489-a5d9925b2db0?w=1200&h=600&fit=crop"
          alt="Vanier Canada Graduate Scholarships"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/north-america" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to North America Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇨🇦</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Canada
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Vanier Canada Graduate Scholarships
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Canada's most prestigious doctoral scholarship program
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span className="font-semibold">CAD $50,000/year</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Deadline: November 1, 2024</span>
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
                <h3 className="text-lg font-semibold text-white mb-2">Total Value</h3>
                <p className="text-orange-400">CAD $150,000</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Level</h3>
                <p className="text-orange-400">PhD Program</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
                <p className="text-orange-400">3 Years</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Awards</h3>
                <p className="text-orange-400">167 Annually</p>
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
                      <li>CAD $50,000 per year for three years</li>
                      <li>Open to Canadian and international students</li>
                      <li>Focus on academic excellence, research potential, and leadership</li>
                      <li>Access to Canada's top research universities</li>
                      <li>Pathway to permanent residency opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Vanier CGS</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Vanier Canada Graduate Scholarships (Vanier CGS) program was created to attract and retain world-class doctoral students and to establish Canada as a global centre of excellence in research and higher learning. Named in honour of Major-General Georges P. Vanier, Canada's first francophone Governor General, these scholarships demonstrate Canada's commitment to excellence in scholarship.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      The program is administered by the three federal research granting agencies: the Canadian Institutes of Health Research (CIHR), the Natural Sciences and Engineering Research Council (NSERC), and the Social Sciences and Humanities Research Council (SSHRC).
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Scholarship Value & Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Financial Benefits</h3>
                        <ul className="space-y-2">
                          {[
                            "CAD $50,000 per year",
                            "Three-year duration",
                            "Non-renewable (one-time award)",
                            "Tax-free in Canada",
                            "No teaching obligations"
                          ].map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Additional Benefits</h3>
                        <ul className="space-y-2">
                          {[
                            "Prestigious recognition",
                            "Enhanced career prospects",
                            "Research networking opportunities",
                            "Conference funding eligibility",
                            "Alumni network access"
                          ].map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Academic Requirements</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Be pursuing first doctoral degree</li>
                          <li>• Enrolled full-time in eligible doctoral program</li>
                          <li>• At participating Canadian institution</li>
                          <li>• Completed no more than 20 months of doctoral studies</li>
                          <li>• Achieved first-class average in each of last two years</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Nomination Process</h3>
                        <p className="text-gray-300 mb-3">
                          Students cannot apply directly. They must be nominated by the university where they intend to pursue their studies.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Maximum 3 nominations per university per agency</li>
                          <li>• Universities have internal selection processes</li>
                          <li>• Early contact with potential supervisors recommended</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Selection Criteria</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Academic Excellence:</span>
                            <span className="text-orange-500 font-semibold">25%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Research Potential:</span>
                            <span className="text-orange-500 font-semibold">50%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Leadership:</span>
                            <span className="text-orange-500 font-semibold">25%</span>
                          </div>
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
                          <li>• Completed application form</li>
                          <li>• Research proposal (2 pages)</li>
                          <li>• Leadership experience statement (2 pages)</li>
                          <li>• Three reference letters</li>
                          <li>• Official transcripts</li>
                          <li>• Curriculum vitae</li>
                          <li>• Personal leadership statement</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">University Internal Deadline:</span>
                            <span className="text-white font-semibold">September - October</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">University Nomination:</span>
                            <span className="text-orange-500 font-semibold">November 1</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Review Process:</span>
                            <span className="text-white font-semibold">November - March</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Results Announced:</span>
                            <span className="text-white font-semibold">April</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Program Starts:</span>
                            <span className="text-white font-semibold">September</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Participating Universities</h2>
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                      <p className="text-gray-300 mb-4">
                        Over 50 Canadian universities participate in the Vanier CGS program, including:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-300">
                          <li>• University of Toronto</li>
                          <li>• University of British Columbia</li>
                          <li>• McGill University</li>
                          <li>• University of Alberta</li>
                          <li>• McMaster University</li>
                        </ul>
                        <ul className="space-y-2 text-gray-300">
                          <li>• University of Waterloo</li>
                          <li>• Queen's University</li>
                          <li>• University of Calgary</li>
                          <li>• Western University</li>
                          <li>• University of Ottawa</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Vanier CGS is extremely competitive with a success rate of approximately 3%. Start your application process early and get expert guidance to maximize your chances.
                    </p>
                    <Button 
                      onClick={scrollToConsultation}
                      className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                    >
                      Get Expert Application Support
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

export default VanierCGS;
