
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SwissGovernmentExcellenceScholarships2024 = () => {
  const scholarshipBenefits = [
    {
      title: "Monthly Stipend",
      description: "CHF 1,920 per month for PhD students, CHF 1,820 for postdoctoral researchers",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Tuition Fee Exemption",
      description: "Full waiver of university tuition fees at Swiss institutions",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Health Insurance",
      description: "Compulsory health and accident insurance coverage included",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Housing Support",
      description: "Assistance in finding accommodation through university services",
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  const eligibleCountries = [
    "Argentina", "Armenia", "Australia", "Austria", "Belgium", "Brazil", "Bulgaria", "Canada", 
    "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark", "Ecuador", "Egypt",
    "Finland", "France", "Georgia", "Germany", "Ghana", "Greece", "Hungary", "Iceland", "India",
    "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Republic of Korea", "Lebanon", "Liechtenstein", "Luxembourg", "Malaysia", "Mexico",
    "Mongolia", "Montenegro", "Morocco", "Netherlands", "New Zealand", "North Macedonia",
    "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Romania", "Russia",
    "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "Spain", "Sweden",
    "Thailand", "Tunisia", "Turkey", "Ukraine", "United Kingdom", "United States", "Uruguay"
  ];

  const researchAreas = [
    {
      category: "Natural Sciences",
      fields: ["Physics", "Chemistry", "Mathematics", "Biology", "Earth Sciences"]
    },
    {
      category: "Engineering & Technology", 
      fields: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Materials Science"]
    },
    {
      category: "Medical Sciences",
      fields: ["Medicine", "Biomedical Sciences", "Public Health", "Pharmaceutical Sciences"]
    },
    {
      category: "Humanities & Social Sciences",
      fields: ["Economics", "Political Science", "History", "Literature", "Philosophy"]
    }
  ];

  const applicationRequirements = [
    "Master's degree (for PhD) or PhD (for postdoctoral) with excellent academic record",
    "Written confirmation of acceptance from a Swiss academic supervisor",
    "Detailed research proposal (3-5 pages)",
    "Curriculum vitae and academic transcripts",
    "Two letters of recommendation from university professors",
    "Language certificate (English/German/French/Italian as required)",
    "Statement of purpose explaining research goals and career plans"
  ];

  const applicationTimeline = [
    {
      phase: "Application Submission",
      deadline: "September 15 - November 15, 2024",
      description: "Submit complete application through online portal"
    },
    {
      phase: "Initial Review",
      deadline: "December 2024 - February 2025", 
      description: "Applications reviewed by Swiss universities and research institutions"
    },
    {
      phase: "Final Selection",
      deadline: "March - April 2025",
      description: "Final scholarship decisions announced to applicants"
    },
    {
      phase: "Program Commencement", 
      deadline: "September 2025",
      description: "Scholarship period begins for successful candidates"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Swiss Government Excellence Scholarships 2024 | Federal Commission for Scholarships</title>
        <meta name="description" content="Apply for Swiss Government Excellence Scholarships 2024. CHF 1,920/month for PhD research in Switzerland's top universities. Fully funded by Federal Commission for Scholarships." />
        <meta name="keywords" content="Swiss Government Excellence Scholarships 2024, Switzerland PhD funding, FCS scholarships, Swiss research scholarships, study in Switzerland, European scholarships" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/swiss-government-excellence-scholarships-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Swiss Government Excellence Scholarships 2024</h1>
            <p className="text-xl mb-6">Federal Commission for Scholarships for Foreign Students</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Swiss Scholarship Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">About Swiss Government Excellence Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              The Swiss Government Excellence Scholarships are granted by the Federal Commission for Scholarships for 
              Foreign Students (FCS) to promote international exchange and research cooperation between Switzerland and 
              over 180 other countries. These prestigious scholarships support doctoral and postdoctoral research at 
              Switzerland's world-renowned universities and research institutions.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">10 Universities</h3>
                <p className="text-gray-400 text-sm">Swiss academic institutions</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">180+ Countries</h3>
                <p className="text-gray-400 text-sm">Eligible for application</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">CHF 1,920</h3>
                <p className="text-gray-400 text-sm">Monthly stipend</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">1-3 Years</h3>
                <p className="text-gray-400 text-sm">Scholarship duration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Scholarship Benefits & Coverage</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipBenefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
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

      {/* Research Areas */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Research Areas & Academic Fields</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{area.category}</h3>
                  <div className="space-y-2">
                    {area.fields.map((field, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-gray-300">{field}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Countries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Eligible Countries 2024</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
                {eligibleCountries.map((country, index) => (
                  <div key={index} className="bg-black p-3 rounded text-center">
                    <span className="text-white text-sm">{country}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-center">
                <strong>Note:</strong> Citizens of these countries are eligible to apply. Swiss and EU citizens have separate application procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Application Requirements 2024</h2>
            <Card className="bg-black border-red-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {applicationRequirements.map((requirement, index) => (
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

      {/* Application Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Application Timeline 2024-2025</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {applicationTimeline.map((timeline, index) => (
                <Card key={index} className="bg-gray-900 border-red-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{timeline.phase}</h3>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {timeline.deadline}
                      </span>
                    </div>
                    <p className="text-gray-300">{timeline.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Swiss Government Excellence Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure your research opportunity in Switzerland's prestigious academic institutions
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Swiss Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SwissGovernmentExcellenceScholarships2024;
