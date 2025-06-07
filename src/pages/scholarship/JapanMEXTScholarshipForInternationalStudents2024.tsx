
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const JapanMEXTScholarshipForInternationalStudents2024 = () => {
  const scholarshipTypes = [
    {
      type: "Undergraduate Students",
      duration: "5 years (including 1 year preparatory education)",
      monthlyAllowance: "¥117,000",
      requirements: "High school graduates under 25 years old"
    },
    {
      type: "Research Students (Graduate)",
      duration: "2 years (Master's) or 3 years (Doctoral)",
      monthlyAllowance: "¥143,000 - ¥145,000",
      requirements: "Bachelor's degree for Master's, Master's for Doctoral"
    },
    {
      type: "Teacher Training Students",
      duration: "1.5 years",
      monthlyAllowance: "¥143,000",
      requirements: "University graduates working as teachers"
    },
    {
      type: "Japanese Studies Students",
      duration: "1 year",
      monthlyAllowance: "¥117,000",
      requirements: "University students majoring in Japanese studies"
    }
  ];

  const benefits = [
    {
      title: "Monthly Stipend",
      description: "¥117,000 - ¥145,000 per month depending on academic level",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Tuition Fee Exemption",
      description: "Full waiver of entrance examination fees, admission fees, and tuition fees",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Round-trip Airfare",
      description: "Transportation to and from Japan provided by Japanese government",
      icon: <Plane className="h-6 w-6" />
    },
    {
      title: "Japanese Language Support",
      description: "Preparatory Japanese language education for non-Japanese speakers",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  const eligibilityRequirements = [
    "Nationality of a country that has diplomatic relations with Japan",
    "Must not hold Japanese nationality",
    "Born on or after April 2, 1999 (for undergraduate applicants)",
    "Must not have studied in Japan before under MEXT scholarship",
    "Completed 12 years of formal education (for undergraduate)",
    "Strong academic performance and health condition",
    "Willingness to learn Japanese language and culture"
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Primary Screening",
      description: "Submit application through Japanese Embassy/Consulate in your country",
      deadline: "May - July 2024"
    },
    {
      step: "2",
      title: "Written Examination",
      description: "Take subject-specific written examinations and Japanese language test",
      deadline: "June - August 2024"
    },
    {
      step: "3",
      title: "Interview",
      description: "Participate in interview conducted by Japanese diplomatic mission",
      deadline: "July - September 2024"
    },
    {
      step: "4",
      title: "Final Selection",
      description: "Notification of provisional selection results",
      deadline: "October - November 2024"
    },
    {
      step: "5",
      title: "University Placement",
      description: "Assignment to Japanese university and final confirmation",
      deadline: "February - March 2025"
    }
  ];

  const topUniversities = [
    "University of Tokyo", "Kyoto University", "Osaka University", "Tohoku University",
    "Nagoya University", "Kyushu University", "Hokkaido University", "Tokyo Institute of Technology",
    "Waseda University", "Keio University", "Hitotsubashi University", "Tokyo Medical and Dental University"
  ];

  const researchFields = [
    "Engineering & Technology", "Natural Sciences", "Medicine & Health Sciences",
    "Social Sciences", "Humanities", "Agriculture", "Education", "Arts & Culture"
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Japan MEXT Scholarship for International Students 2024 | Ministry of Education Funding</title>
        <meta name="description" content="Apply for Japan MEXT Scholarship 2024. Fully funded by Japanese government with ¥143,000/month stipend, free tuition, and airfare. Study at top Japanese universities." />
        <meta name="keywords" content="MEXT scholarship 2024, Japan government scholarship, study in Japan, Japanese education funding, Monbukagakusho scholarship, international students Japan" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/japan-mext-scholarship-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Japan MEXT Scholarship for International Students 2024</h1>
            <p className="text-xl mb-6">Ministry of Education, Culture, Sports, Science and Technology</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get MEXT Scholarship Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">About MEXT Scholarship Program</h2>
            <p className="text-lg text-gray-300 mb-8">
              The MEXT (Monbukagakusho) Scholarship is the Japanese government's flagship scholarship program for 
              international students. Established to promote international understanding and academic exchange, 
              this prestigious scholarship covers all major expenses and provides an exceptional opportunity to 
              experience Japan's advanced education system and rich cultural heritage.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">12,000+ Recipients</h3>
                <p className="text-gray-400 text-sm">Annual scholarship awards</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">160+ Countries</h3>
                <p className="text-gray-400 text-sm">Eligible countries worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">800+ Universities</h3>
                <p className="text-gray-400 text-sm">Japanese institutions</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">1-5 Years</h3>
                <p className="text-gray-400 text-sm">Study duration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">MEXT Scholarship Categories 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipTypes.map((type, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{type.type}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {type.monthlyAllowance}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-red-500 font-semibold">Duration: </span>
                      <span className="text-white">{type.duration}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-semibold">Requirements: </span>
                      <span className="text-gray-300">{type.requirements}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Comprehensive Scholarship Benefits</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500 p-3 rounded-full text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Eligibility Requirements 2024</h2>
            <Card className="bg-gray-900 border-orange-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Application Process Timeline 2024</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationProcess.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="bg-black p-6 rounded-lg border border-red-500 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {item.deadline}
                      </span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universities and Fields */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-8">Top Japanese Universities</h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <div className="grid md:grid-cols-2 gap-3">
                  {topUniversities.map((university, index) => (
                    <div key={index} className="bg-black p-3 rounded text-center">
                      <span className="text-white text-sm">{university}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-8">Research Fields Available</h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <div className="space-y-3">
                  {researchFields.map((field, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-white">{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for MEXT Scholarship?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure your place in Japan's prestigious education system
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Japan Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JapanMEXTScholarshipForInternationalStudents2024;
