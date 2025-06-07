
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star, FileText, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DAADScholarshipsGermany2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const daaadPrograms = [
    {
      name: "DAAD Graduate School Scholarships",
      value: "€1,200/month + benefits",
      duration: "2-4 years",
      eligibility: ["Master's degree", "Excellent academic record", "Research proposal"],
      deadline: "October 31, 2024"
    },
    {
      name: "DAAD Research Grants",
      value: "€1,200-2,000/month",
      duration: "1-10 months", 
      eligibility: ["University degree", "Research project", "German language skills"],
      deadline: "November 15, 2024"
    },
    {
      name: "DAAD Study Scholarships",
      value: "€934/month + benefits",
      duration: "10-24 months",
      eligibility: ["Bachelor's degree", "Academic excellence", "German proficiency"],
      deadline: "December 1, 2024"
    },
    {
      name: "DAAD Artist Scholarships",
      value: "€1,200/month",
      duration: "1-24 months",
      eligibility: ["Artistic qualifications", "Portfolio", "Project proposal"],
      deadline: "January 31, 2025"
    }
  ];

  const benefits = [
    "Monthly scholarship payment",
    "Health insurance",
    "Travel allowance",
    "Study and research allowance",
    "Language course support",
    "Family allowance (if applicable)",
    "Tuition fee support",
    "Integration support"
  ];

  const eligibilityRequirements = [
    "Bachelor's or Master's degree from recognized university",
    "Strong academic performance (minimum 2.5 German grade or equivalent)",
    "German or English language proficiency",
    "Clear study/research plan",
    "Motivation letter and CV",
    "Letters of recommendation",
    "Age limit: typically under 32 for graduates, under 35 for PhD",
    "Not having lived in Germany for more than 15 months"
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Verify you meet all requirements for your chosen program",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Prepare Documents",
      description: "Gather all required documents including transcripts and recommendations",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Submit Online Application",
      description: "Complete application through DAAD portal before deadline",
      icon: <Globe className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Selection Process",
      description: "Wait for review and possible interview invitation",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>DAAD Scholarships Germany 2024 | Complete Guide for International Students</title>
        <meta name="description" content="Comprehensive guide to DAAD scholarships for studying in Germany 2024. Graduate, research, and study grants with full funding details and application process." />
        <meta name="keywords" content="DAAD scholarship Germany 2024, German government scholarships, study in Germany funding, international student scholarships Germany, DAAD grants" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/daad-scholarships-germany-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DAAD Scholarships Germany 2024</h1>
            <p className="text-xl mb-6">Excellence in German Higher Education and Research</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get DAAD Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* About DAAD */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">About DAAD Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              The German Academic Exchange Service (DAAD) is the world's largest funding organization for 
              international academic exchange. Since 1925, DAAD has supported over 2 million scholars worldwide, 
              offering comprehensive funding for studies and research in Germany. DAAD scholarships cover various 
              academic levels from undergraduate to postdoctoral research, promoting academic excellence and 
              international cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* DAAD Programs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">DAAD Scholarship Programs 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {daaadPrograms.map((program, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{program.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-red-500 font-semibold">Value: </span>
                      <span className="text-green-500 font-bold">{program.value}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-semibold">Duration: </span>
                      <span className="text-white">{program.duration}</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-semibold">Deadline: </span>
                      <span className="text-orange-500 font-bold">{program.deadline}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <div className="space-y-1">
                      {program.eligibility.map((req, idx) => (
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
                    Apply for This Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">DAAD Scholarship Benefits</h2>
            <Card className="bg-gray-900 border-red-500">
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

      {/* Eligibility Requirements */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Eligibility Requirements</h2>
            <Card className="bg-black border-red-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="bg-red-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for DAAD Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance for your DAAD scholarship application and study in Germany
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your DAAD Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DAADScholarshipsGermany2024;
