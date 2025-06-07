
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErasmusMundusJointMasterDegreeScholarships2024 = () => {
  const programBenefits = [
    {
      title: "Full Scholarship Coverage",
      description: "€1,400 per month living allowance, travel costs, and full tuition coverage",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Study in Multiple Countries",
      description: "Experience education in 2-4 different European countries during your degree",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Joint Degree Recognition",
      description: "Receive a joint/double/multiple degree from participating universities",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Cultural Immersion",
      description: "Experience diverse cultures, languages, and academic traditions",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const popularPrograms = [
    {
      name: "European Master in Renewable Energy",
      universities: "University of Oldenburg (Germany), Université Paris-Saclay (France)",
      duration: "24 months",
      field: "Renewable Energy & Sustainability"
    },
    {
      name: "Erasmus Mundus Joint Master Degree in Urban Studies",
      universities: "Brussels (Belgium), Madrid (Spain), Vienna (Austria), Copenhagen (Denmark)",
      duration: "24 months", 
      field: "Urban Planning & Development"
    },
    {
      name: "European Master in Digital Communication Leadership",
      universities: "Salzburg (Austria), Leipzig (Germany), Tilburg (Netherlands)",
      duration: "24 months",
      field: "Digital Communication & Media"
    },
    {
      name: "Joint European Master in Environmental Studies",
      universities: "Aegean (Greece), Aveiro (Portugal), Palacký (Czech Republic)",
      duration: "24 months",
      field: "Environmental Science & Policy"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Choose Your Program",
      description: "Select from 100+ available Erasmus Mundus joint master programs",
      deadline: "October - January 2024"
    },
    {
      step: "2",
      title: "Prepare Documents",
      description: "Academic transcripts, motivation letter, references, language certificates",
      deadline: "November - February 2024"
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Apply directly through consortium websites (varies by program)",
      deadline: "January - March 2024"
    },
    {
      step: "4",
      title: "Selection Results",
      description: "Scholarship results announced by program consortiums",
      deadline: "April - June 2024"
    }
  ];

  const eligibilityRequirements = [
    "Bachelor's degree or equivalent (minimum 3 years)",
    "Strong academic record (minimum GPA equivalent to European standards)",
    "English proficiency (IELTS 6.5+ or TOEFL 90+, varies by program)",
    "Relevant academic background for chosen program",
    "Two academic references minimum",
    "Motivation letter explaining program choice and career goals",
    "CV/Resume highlighting academic and professional achievements"
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Erasmus Mundus Joint Master Degree Scholarships 2024 | EU Funded Education</title>
        <meta name="description" content="Apply for Erasmus Mundus Joint Master Degree Scholarships 2024. Fully funded European education program offering €1,400/month stipend, tuition coverage, and study in multiple EU countries." />
        <meta name="keywords" content="Erasmus Mundus 2024, EU scholarships, joint master degree, European Union funding, study in Europe, international scholarships, fully funded masters Europe" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/erasmus-mundus-joint-master-degree-scholarships-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Erasmus Mundus Joint Master Degree Scholarships 2024</h1>
            <p className="text-xl mb-6">EU's Prestigious International Education Program</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Erasmus Mundus Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">About Erasmus Mundus Joint Master Degrees</h2>
            <p className="text-lg text-gray-300 mb-8">
              Erasmus Mundus Joint Master Degrees (EMJMD) are prestigious, integrated study programmes of 60, 90 or 120 ECTS 
              credits delivered by an international consortium of higher education institutions. Students study in at least two 
              different countries and receive a joint, double, or multiple degree. The programme is fully funded by the European 
              Union and attracts the world's most talented students and academics.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">170+ Programs</h3>
                <p className="text-gray-400 text-sm">Joint master degrees available</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">All EU Countries</h3>
                <p className="text-gray-400 text-sm">Plus partner countries</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">4,000+ Scholarships</h3>
                <p className="text-gray-400 text-sm">Annual funding available</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">€4,200/month</h3>
                <p className="text-gray-400 text-sm">Maximum monthly allowance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Erasmus Mundus Scholarship Benefits 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {programBenefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-3 rounded-full text-white">
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

          <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-blue-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Financial Package Details</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">€1,400</div>
                <p className="text-gray-300">Monthly living allowance</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">€4,000</div>
                <p className="text-gray-300">Travel and installation costs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                <p className="text-gray-300">Tuition fees covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Popular Erasmus Mundus Programs 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {popularPrograms.map((program, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{program.name}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {program.duration}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-blue-500 font-semibold">Field: </span>
                      <span className="text-white">{program.field}</span>
                    </div>
                    <div>
                      <span className="text-blue-500 font-semibold">Universities: </span>
                      <span className="text-gray-300">{program.universities}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
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

      {/* Application Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Application Timeline 2024-2025</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationProcess.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="bg-black p-6 rounded-lg border border-blue-500 flex-1">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Erasmus Mundus Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure your place in Europe's most prestigious international education program
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Erasmus Mundus Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ErasmusMundusJointMasterDegreeScholarships2024;
