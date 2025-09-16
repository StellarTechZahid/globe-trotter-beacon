import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Calendar, CheckCircle, ArrowRight, MessageCircle, Star, TrendingUp, Users, BookOpen, GraduationCap, Clock, FileText, Target, Lightbulb, AlertCircle } from 'lucide-react';

const ScholarshipDetail = () => {
  const { slug } = useParams();
  
  // Mock scholarship data - in real app this would come from API/database
  const scholarship = {
    title: "Merit-Based Undergraduate Scholarships",
    description: "Academic excellence scholarships for high-achieving students starting their university journey. This comprehensive program recognizes outstanding academic achievement and provides substantial financial support for undergraduate studies.",
    amount: "$5,000 - $25,000",
    country: "USA",
    university: "Harvard University",
    deadline: "March 15, 2025",
    requirements: [
      "High GPA (3.5+)",
      "SAT/ACT scores",
      "Leadership experience",
      "Community service",
      "Personal statement",
      "Letters of recommendation",
      "Financial need demonstration",
      "Extracurricular activities"
    ],
    coverage: "Partial tuition coverage + book allowance + research opportunities",
    eligibility: [
      "International students welcome",
      "Undergraduate level only",
      "First-time university applicants",
      "English proficiency required",
      "Age limit: 25 years maximum"
    ],
    applicationProcess: [
      "Complete online application form",
      "Submit required documents",
      "Take standardized tests (SAT/ACT)",
      "Write personal statement",
      "Obtain recommendation letters",
      "Attend interview (if selected)",
      "Wait for final decision"
    ],
    benefits: [
      "Tuition fee reduction or waiver",
      "Monthly living allowance",
      "Book and study materials allowance",
      "Research project opportunities",
      "Mentorship program access",
      "Career guidance and support",
      "International student community",
      "Alumni network access"
    ],
    tips: [
      "Start your application early - at least 6 months before deadline",
      "Maintain excellent academic records throughout your studies",
      "Demonstrate leadership through extracurricular activities",
      "Write a compelling personal statement that tells your unique story",
      "Get strong recommendation letters from teachers who know you well",
      "Prepare thoroughly for standardized tests",
      "Show genuine interest in your chosen field of study",
      "Demonstrate financial need clearly and honestly"
    ]
  };

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const getCountryImage = (country: string) => {
    const countryImages: { [key: string]: string } = {
      'USA': 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop',
      'UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop',
      'Canada': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop',
      'Australia': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    };
    return countryImages[country] || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{scholarship.title} | Scholarship Details | Abroad Academics</title>
        <meta name="description" content={`Complete details about ${scholarship.title} - ${scholarship.description}`} />
        <link rel="canonical" href={`https://yourdomain.com/scholarship-details/${slug}`} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${getCountryImage(scholarship.country)})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{scholarship.title}</h1>
            <p className="text-xl mb-6 opacity-90">{scholarship.description}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                {scholarship.country}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                {scholarship.amount}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {scholarship.deadline}
              </div>
            </div>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 text-lg font-semibold"
            >
              <Award className="mr-2 h-5 w-5" />
              Apply for This Scholarship
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900 border-b border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Full</div>
              <div className="text-gray-400 text-sm">Coverage Available</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-gray-400 text-sm">Recipients Annually</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">85%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">3-6</div>
              <div className="text-gray-400 text-sm">Months Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Scholarship Overview */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
                    <Award className="h-8 w-8 mr-3" />
                    Scholarship Overview
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">University:</span>
                          <span className="text-white font-semibold">{scholarship.university}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Country:</span>
                          <span className="text-white font-semibold">{scholarship.country}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Amount:</span>
                          <span className="text-orange-500 font-bold">{scholarship.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Deadline:</span>
                          <span className="text-red-400 font-semibold">{scholarship.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Coverage Details</h3>
                      <p className="text-gray-300 leading-relaxed">{scholarship.coverage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility Criteria */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
                    <Target className="h-8 w-8 mr-3" />
                    Eligibility Criteria
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">General Requirements</h3>
                      <ul className="space-y-3">
                        {scholarship.eligibility.map((criteria, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Academic Requirements</h3>
                      <ul className="space-y-3">
                        {scholarship.requirements.slice(0, 5).map((req, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
                    <FileText className="h-8 w-8 mr-3" />
                    Application Process
                  </h2>
                  <div className="space-y-4">
                    {scholarship.applicationProcess.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-black/50 rounded-lg border border-orange-500/20">
                        <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-300 text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
                    <Star className="h-8 w-8 mr-3" />
                    Scholarship Benefits
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {scholarship.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Tips */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
                    <Lightbulb className="h-8 w-8 mr-3" />
                    Expert Application Tips
                  </h2>
                  <div className="space-y-4">
                    {scholarship.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/5 rounded-lg border border-orange-500/20">
                        <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Quick Apply */}
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-black">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="mb-6 opacity-90">Get expert guidance for your scholarship application</p>
                  <Button 
                    onClick={scrollToConsultation}
                    className="bg-black hover:bg-gray-800 text-white w-full font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Free Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center">
                    <Calendar className="h-6 w-6 mr-2" />
                    Important Dates
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Application Opens:</span>
                      <span className="text-white">January 1, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Application Deadline:</span>
                      <span className="text-red-400 font-semibold">{scholarship.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Results Announced:</span>
                      <span className="text-white">May 1, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Links */}
              <Card className="bg-gray-900 border-orange-500/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Related Resources</h3>
                  <div className="space-y-3">
                    <Link to="/scholarship/undergraduate" className="block text-gray-300 hover:text-orange-500 transition-colors">
                      → More Undergraduate Scholarships
                    </Link>
                    <Link to="/countries/usa" className="block text-gray-300 hover:text-orange-500 transition-colors">
                      → Study in USA Guide
                    </Link>
                    <Link to="/articles" className="block text-gray-300 hover:text-orange-500 transition-colors">
                      → Scholarship Application Tips
                    </Link>
                    <Link to="/consultation" className="block text-gray-300 hover:text-orange-500 transition-colors">
                      → Free Expert Consultation
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Scholarship Journey Today</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Don't miss out on this amazing opportunity. Get expert guidance to maximize your chances.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/scholarship/undergraduate">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
              >
                Browse More Scholarships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipDetail;