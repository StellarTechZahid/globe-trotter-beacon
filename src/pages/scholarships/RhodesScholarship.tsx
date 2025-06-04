
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Award, GraduationCap, Globe, DollarSign, CheckCircle, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const RhodesScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Rhodes Scholarship Oxford | Complete Guide & Application Process</title>
        <meta name="description" content="Comprehensive guide to Rhodes Scholarship at Oxford University. Learn about eligibility, benefits, application process, and requirements." />
        <meta name="keywords" content="Rhodes scholarship, Oxford University, UK education, international scholarship, study at Oxford" />
        <link rel="canonical" href="https://yourdomain.com/scholarships/rhodes-scholarship" />
        <meta property="og:title" content="Rhodes Scholarship Oxford | Complete Guide" />
        <meta property="og:description" content="Comprehensive guide to Rhodes Scholarship for international students at Oxford University." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarships/rhodes-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
          alt="Rhodes Scholarship Oxford"
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
                Oxford University
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Rhodes Scholarship
            </h1>
            <p className="text-xl mb-6 opacity-90">
              The world's oldest international scholarship programme
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
                      <li>Full funding for 2-3 years at Oxford University</li>
                      <li>Established in 1903 by Cecil Rhodes</li>
                      <li>Annual stipend of £18,180 plus college fees</li>
                      <li>Access to exclusive Rhodes House community</li>
                      <li>Global network of over 8,000 Rhodes Scholars</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">About Rhodes Scholarship</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      The Rhodes Scholarship is the oldest international scholarship programme, enabling outstanding young people from around the world to study at the University of Oxford. Established in 1903 by the will of Cecil Rhodes, it has become one of the most prestigious academic awards globally.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      Rhodes Scholars are chosen not only for their outstanding scholarly achievements, but for their character, commitment to others and to the common good, and for their potential for leadership in whatever domains their careers may lead.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Eligibility Criteria</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• Outstanding academic achievement</li>
                          <li className="text-gray-300">• First-class honours degree or equivalent</li>
                          <li className="text-gray-300">• Strong academic references</li>
                          <li className="text-gray-300">• Clear academic purpose for Oxford study</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Personal Qualities</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300">• Age 19-25 (varies by constituency)</li>
                          <li className="text-gray-300">• Leadership potential</li>
                          <li className="text-gray-300">• Commitment to service</li>
                          <li className="text-gray-300">• Moral character and integrity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Financial Benefits</h2>
                    <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">£18,180</div>
                          <div className="text-gray-300">Annual Stipend</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">100%</div>
                          <div className="text-gray-300">University Fees</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500 mb-2">Full</div>
                          <div className="text-gray-300">College Fees</div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />One economy return airfare</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Health insurance coverage</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Access to Rhodes House facilities</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-orange-500" />Professional development opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                        <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Research and Prepare</h4>
                          <p className="text-gray-300">Review eligibility criteria for your constituency and prepare required documents including academic transcripts, references, and personal statement.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                        <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Submit Application</h4>
                          <p className="text-gray-300">Complete the online application form with all required documents, academic records, and references by the October deadline.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                        <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Interview Process</h4>
                          <p className="text-gray-300">Shortlisted candidates will be invited for interviews with the selection committee in their respective constituencies.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      The Rhodes Scholarship represents the pinnacle of academic achievement and leadership potential. Our expert consultants can help you craft a compelling application that showcases your unique qualities and academic excellence.
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

export default RhodesScholarship;
