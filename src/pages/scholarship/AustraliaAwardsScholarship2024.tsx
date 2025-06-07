
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star, FileText, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AustraliaAwardsScholarship2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const australiaAwardsPrograms = [
    {
      name: "Australia Awards Scholarships",
      value: "Full funding + AUD 3,000/month",
      duration: "2-4 years",
      eligibility: ["Bachelor's degree", "Leadership potential", "Development focus"],
      deadline: "April 30, 2024"
    },
    {
      name: "Australia Awards Pacific Scholarships",
      value: "Full funding + allowances",
      duration: "1-4 years",
      eligibility: ["Pacific Island nationality", "Academic merit", "Return commitment"],
      deadline: "February 28, 2024"
    },
    {
      name: "Australia Awards Short Courses",
      value: "Full funding",
      duration: "2 weeks - 12 months",
      eligibility: ["Professional experience", "Leadership role", "Development impact"],
      deadline: "Various dates"
    },
    {
      name: "Australia Awards Alumni Grants",
      value: "AUD 15,000-50,000",
      duration: "12 months",
      eligibility: ["Alumni status", "Project proposal", "Community impact"],
      deadline: "June 30, 2024"
    }
  ];

  const benefits = [
    "Full tuition fees coverage",
    "Return air travel",
    "Establishment allowance",
    "Living allowance (AUD 3,000+/month)",
    "Overseas Student Health Cover",
    "Pre-course English training",
    "Introductory Academic Program",
    "Thesis/project support"
  ];

  const eligibleCountries = [
    "Indonesia", "Philippines", "Vietnam", "Thailand", "Myanmar", "Cambodia", "Laos",
    "Bangladesh", "Pakistan", "Sri Lanka", "Nepal", "Bhutan", "Maldives",
    "Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu", "Tonga", "Samoa"
  ];

  const applicationRequirements = [
    "Completed application form",
    "Academic transcripts and certificates",
    "English language proficiency test results",
    "Two referee reports",
    "Medical examination results",
    "Police clearance certificate",
    "Valid passport",
    "Statement of purpose"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Australia Awards Scholarships 2024 | Full Funding for International Students</title>
        <meta name="description" content="Complete guide to Australia Awards Scholarships 2024. Full funding for master's and PhD studies in Australia with living allowance and benefits." />
        <meta name="keywords" content="Australia Awards 2024, Australian government scholarships, study in Australia funding, international student scholarships Australia" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/australia-awards-scholarship-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia Awards Scholarships 2024</h1>
            <p className="text-xl mb-6">Prestigious Australian Government Scholarships</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Apply for Australia Awards
            </Button>
          </div>
        </div>
      </section>

      {/* About Australia Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500 mb-6">About Australia Awards</h2>
            <p className="text-lg text-gray-300 mb-8">
              Australia Awards are prestigious international scholarships and fellowships funded by the 
              Australian Government. The program aims to contribute to the development needs of Australia's 
              partner countries in line with bilateral and regional agreements. Since 1963, more than 140,000 
              people have studied in Australia through Australian Government scholarships, building lasting 
              educational, cultural and political links with Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Australia Awards Programs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Australia Awards Programs 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {australiaAwardsPrograms.map((program, index) => (
              <Card key={index} className="bg-black border-green-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{program.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-green-500 font-semibold">Value: </span>
                      <span className="text-yellow-500 font-bold">{program.value}</span>
                    </div>
                    <div>
                      <span className="text-green-500 font-semibold">Duration: </span>
                      <span className="text-white">{program.duration}</span>
                    </div>
                    <div>
                      <span className="text-green-500 font-semibold">Deadline: </span>
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
                    className="bg-green-500 hover:bg-green-600 text-white w-full"
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
            <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">Australia Awards Benefits</h2>
            <Card className="bg-gray-900 border-green-500">
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

      {/* Eligible Countries */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">Eligible Countries</h2>
          <Card className="bg-black border-green-500">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eligibleCountries.map((country, index) => (
                  <div key={index} className="bg-gray-900 p-3 rounded border border-green-500">
                    <span className="text-white">{country}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">Application Requirements</h2>
            <Card className="bg-gray-900 border-green-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {applicationRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Australia Awards?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance for your Australia Awards application and study in Australia
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AustraliaAwardsScholarship2024;
