
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star, FileText, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CanadaGraduateScholarships2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const canadaScholarships = [
    {
      name: "Vanier Canada Graduate Scholarships",
      value: "CAD $50,000/year",
      duration: "3 years",
      eligibility: ["PhD studies", "Academic excellence", "Leadership potential"],
      deadline: "November 2, 2024"
    },
    {
      name: "Canada Graduate Scholarships-Master's",
      value: "CAD $17,500",
      duration: "1 year",
      eligibility: ["Master's studies", "Canadian citizen/PR", "Academic merit"],
      deadline: "December 1, 2024"
    },
    {
      name: "NSERC Postgraduate Scholarships",
      value: "CAD $21,000-35,000/year",
      duration: "2-3 years",
      eligibility: ["STEM fields", "Research excellence", "Innovation potential"],
      deadline: "October 15, 2024"
    },
    {
      name: "Trudeau Foundation Scholarships",
      value: "CAD $60,000/year",
      duration: "3 years",
      eligibility: ["Social sciences", "Leadership", "Community engagement"],
      deadline: "November 30, 2024"
    }
  ];

  const benefits = [
    "Substantial financial support",
    "Research funding",
    "Professional development opportunities",
    "Networking with scholars",
    "Conference attendance support",
    "Mentorship programs",
    "Recognition and prestige",
    "Career advancement"
  ];

  const researchAreas = [
    "Natural Sciences and Engineering",
    "Health and Medical Research",
    "Social Sciences and Humanities",
    "Environmental Studies",
    "Technology and Innovation",
    "Public Policy and Governance",
    "Indigenous Studies",
    "Sustainable Development"
  ];

  const applicationTips = [
    {
      title: "Research Excellence",
      description: "Demonstrate outstanding research potential and academic achievements",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Clear Research Proposal",
      description: "Present a well-defined, innovative research project with clear objectives",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Strong References",
      description: "Secure compelling letters from recognized academics in your field",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Leadership Evidence",
      description: "Showcase leadership experience and potential for future impact",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Canada Graduate Scholarships 2024 | Vanier CGS & NSERC Funding</title>
        <meta name="description" content="Complete guide to Canada Graduate Scholarships 2024 including Vanier CGS, NSERC, and Trudeau Foundation scholarships for PhD and Master's students." />
        <meta name="keywords" content="Canada graduate scholarships 2024, Vanier CGS, NSERC scholarships, Trudeau Foundation, Canadian research funding, PhD scholarships Canada" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/canada-graduate-scholarships-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Canada Graduate Scholarships 2024</h1>
            <p className="text-xl mb-6">Premium Research Funding for Graduate Students</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Apply for Canadian Scholarships
            </Button>
          </div>
        </div>
      </section>

      {/* About Canadian Scholarships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">About Canada Graduate Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              Canada offers world-class graduate scholarships through various prestigious programs including 
              the Vanier Canada Graduate Scholarships, Canada Graduate Scholarships, NSERC funding, and 
              the Trudeau Foundation Scholarships. These programs support outstanding graduate students 
              conducting research in Canadian universities, fostering innovation, excellence, and leadership 
              in research across diverse academic disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Programs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Major Canadian Graduate Scholarships 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {canadaScholarships.map((scholarship, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{scholarship.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-red-500 font-semibold">Value: </span>
                      <span className="text-green-500 font-bold">{scholarship.value}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-semibold">Duration: </span>
                      <span className="text-white">{scholarship.duration}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-semibold">Deadline: </span>
                      <span className="text-orange-500 font-bold">{scholarship.deadline}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <div className="space-y-1">
                      {scholarship.eligibility.map((req, idx) => (
                        <div key={idx} className="text-gray-300 text-sm flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToConsultation}
                    className="bg-red-500 hover:bg-red-600 text-white w-full"
                  >
                    Apply for This Scholarship
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Supported Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
                <CardContent className="p-6 text-center">
                  <h3 className="text-white font-semibold">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Scholarship Benefits</h2>
            <Card className="bg-black border-red-500">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Application Success Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationTips.map((tip, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                  <p className="text-gray-300">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Canadian Graduate Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert support for your scholarship applications and research in Canada
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Canadian Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanadaGraduateScholarships2024;
