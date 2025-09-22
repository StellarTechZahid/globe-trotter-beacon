import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, GraduationCap, DollarSign, Calendar, MapPin, Users, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';

const GatesCambridgeScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Gates Cambridge Scholarships | Full PhD Funding at Cambridge University</title>
        <meta name="description" content="Apply for Gates Cambridge Scholarships - £40,000-£60,000 full funding for PhD studies at University of Cambridge. Deadline October 11, 2024." />
        <meta name="keywords" content="Gates Cambridge Scholarship, Cambridge PhD, Gates Foundation, Cambridge University, PhD funding, international scholarships" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-orange-900/20">
        <div className="container mx-auto px-4">
          <Link to="/scholarship/phd" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to PhD Scholarships
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Gates Cambridge Scholarships</h1>
                <p className="text-xl text-gray-300">University of Cambridge | Full-Cost PhD Scholarships</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Fully Funded</Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">PhD Level</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">International</Badge>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Prestigious</Badge>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The Gates Cambridge Scholarships are among the world's most prestigious PhD scholarships, founded by the Bill and Melinda Gates Foundation. 
              These scholarships provide full-cost funding for outstanding applicants from outside the UK to pursue graduate studies at the University of Cambridge.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black border-b border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500 mb-1">£40K-£60K</div>
              <div className="text-gray-400 text-sm">Annual Value</div>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500 mb-1">Oct 11</div>
              <div className="text-gray-400 text-sm">Application Deadline</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500 mb-1">UK</div>
              <div className="text-gray-400 text-sm">Study Location</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500 mb-1">80+</div>
              <div className="text-gray-400 text-sm">Annual Awards</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* About */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  About Gates Cambridge Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  The Gates Cambridge Scholarships were established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation 
                  to the University of Cambridge. The aim was to build a global network of future leaders committed to improving the lives of others.
                </p>
                <p>
                  The programme seeks to identify individuals with exceptional intellectual ability, leadership potential, and a commitment to improving 
                  the lives of others. Scholars become part of a vibrant community at Cambridge and join a global network of Gates Cambridge alumni.
                </p>
                <p>
                  Since 2001, over 2,000 Gates Cambridge Scholars from more than 100 countries have studied at Cambridge. The Scholars have gone on to 
                  careers in academia, business, government, and the non-profit sector around the world.
                </p>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">Eligibility Requirements</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Citizens of countries outside the UK (including EU countries)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Applying to pursue a full-time residential course of study (PhD, MSc, MLitt, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Outstanding intellectual ability and academic record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Demonstrated leadership potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Commitment to improving the lives of others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>A good fit between the applicant's qualifications and the course</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">Scholarship Benefits</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Financial Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Full university and college fees
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Living allowance (£20,000+ annually)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        One economy single airfare
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Visa costs and health surcharge
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Additional Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Family allowance (if applicable)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Fieldwork/thesis allowance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Hardship funding (if needed)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Global alumni network access
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">Application Process</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Required Documents</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm">
                      <li>• Cambridge University application</li>
                      <li>• Academic transcripts</li>
                      <li>• Three academic references</li>
                      <li>• Gates Cambridge application form</li>
                      <li>• Personal statement</li>
                      <li>• Research proposal (PhD applicants)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Application Deadlines</h4>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <ul className="space-y-2 text-sm">
                        <li><strong>US Citizens:</strong> October 11, 2024</li>
                        <li><strong>All Other Countries:</strong> December 5, 2024</li>
                        <li><strong>Interviews:</strong> January-March 2025</li>
                        <li><strong>Results:</strong> April 2025</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selection Criteria */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">Selection Criteria</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Academic Excellence</h4>
                    <p className="text-sm mb-3">Outstanding intellectual ability, demonstrated through academic achievements and potential for scholarly impact.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Leadership Capacity</h4>
                    <p className="text-sm mb-3">Evidence of leadership potential through extracurricular activities, work experience, or community involvement.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Commitment to Others</h4>
                    <p className="text-sm mb-3">Demonstrated commitment to improving the lives of others through volunteer work, activism, or career goals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">Course Fit</h4>
                    <p className="text-sm mb-3">Strong match between the applicant's background, goals, and the chosen Cambridge course.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Apply Now */}
            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Apply?</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get expert guidance for your Gates Cambridge Scholarship application
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold"
                >
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>

            {/* University Info */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">University of Cambridge</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm space-y-3">
                <div>
                  <strong className="text-orange-400">Location:</strong> Cambridge, England
                </div>
                <div>
                  <strong className="text-orange-400">Founded:</strong> 1209
                </div>
                <div>
                  <strong className="text-orange-400">World Ranking:</strong> #2 (QS 2024)
                </div>
                <div>
                  <strong className="text-orange-400">Notable Alumni:</strong> Stephen Hawking, Charles Darwin, Newton
                </div>
                <div>
                  <strong className="text-orange-400">Research Excellence:</strong> 121 Nobel Prize affiliations
                </div>
              </CardContent>
            </Card>

            {/* Application Tips */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">Application Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Start application 6-8 months early</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Demonstrate clear social impact goals</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Show leadership through concrete examples</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Connect your background to Cambridge strengths</span>
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-orange-500">Useful Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://www.gatescambridge.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Official Gates Cambridge Website
                </a>
                <a 
                  href="https://www.postgraduate.study.cam.ac.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Cambridge Graduate Admissions
                </a>
                <a 
                  href="https://www.cam.ac.uk/research" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Cambridge Research
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GatesCambridgeScholarship;