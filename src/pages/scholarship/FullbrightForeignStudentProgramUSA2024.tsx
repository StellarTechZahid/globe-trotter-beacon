
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FullbrightForeignStudentProgramUSA2024 = () => {
  const topUniversities = [
    "Harvard University", "Stanford University", "MIT", "Princeton University", "Yale University",
    "Columbia University", "University of Pennsylvania", "Cornell University", "Brown University",
    "Dartmouth College", "University of Chicago", "Northwestern University", "Johns Hopkins University"
  ];

  const programBenefits = [
    {
      title: "Full Tuition Coverage",
      description: "Complete university tuition and mandatory fees covered",
      amount: "Up to $70,000/year"
    },
    {
      title: "Living Allowance",
      description: "Monthly stipend for housing, meals, and personal expenses",
      amount: "$2,000-3,500/month"
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage throughout program",
      amount: "Fully covered"
    },
    {
      title: "Travel Support",
      description: "Round-trip international travel and visa processing",
      amount: "$2,000-5,000"
    }
  ];

  const eligibilityByRegion = [
    {
      region: "South Asia",
      countries: ["Bangladesh", "Pakistan", "India", "Sri Lanka", "Nepal"],
      specialFields: ["STEM", "Public Health", "Education", "Agriculture"]
    },
    {
      region: "Southeast Asia",
      countries: ["Indonesia", "Malaysia", "Thailand", "Philippines", "Vietnam"],
      specialFields: ["Technology", "Environmental Science", "Business", "Arts"]
    },
    {
      region: "Middle East & North Africa",
      countries: ["Egypt", "Jordan", "Morocco", "Tunisia", "Lebanon"],
      specialFields: ["Engineering", "Medicine", "Social Sciences", "Journalism"]
    },
    {
      region: "Sub-Saharan Africa",
      countries: ["Nigeria", "Kenya", "Ghana", "South Africa", "Tanzania"],
      specialFields: ["Development Studies", "Public Policy", "Health Sciences", "Agriculture"]
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Country Program Application",
      description: "Apply through your home country's Fulbright commission or embassy",
      period: "March - October 2024"
    },
    {
      step: "2",
      title: "Initial Screening",
      description: "Local review by Fulbright commission",
      period: "October - December 2024"
    },
    {
      step: "3",
      title: "Final Selection",
      description: "Review by Fulbright Foreign Scholarship Board in USA",
      period: "January - March 2025"
    },
    {
      step: "4",
      title: "University Placement",
      description: "Matching with US universities and visa processing",
      period: "April - August 2025"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Fulbright Foreign Student Program USA 2024 | Complete Application Guide</title>
        <meta name="description" content="Apply for Fulbright Foreign Student Program 2024-2025. Fully funded graduate study opportunities in USA for international students. Complete guide with deadlines, eligibility, and application process." />
        <meta name="keywords" content="Fulbright scholarship 2024, USA graduate study, international student scholarship, fully funded Masters PhD USA, American scholarship program, study in America, Fulbright foreign student" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/fulbright-foreign-student-program-usa-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fulbright Foreign Student Program USA 2024</h1>
            <p className="text-xl mb-6">America's Premier International Educational Exchange Program</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Fulbright Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">About Fulbright Foreign Student Program</h2>
            <p className="text-lg text-gray-300 mb-8">
              The Fulbright Foreign Student Program enables graduate students, young professionals, and artists 
              from abroad to study and conduct research in the United States. Established in 1946, it is one of 
              the most prestigious international educational exchange programs, providing approximately 4,000 
              foreign students each year the opportunity to study in the United States.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">4,000+ Awards</h3>
                <p className="text-gray-400 text-sm">Annual scholarships</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">160+ Countries</h3>
                <p className="text-gray-400 text-sm">Worldwide participation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">400,000+ Alumni</h3>
                <p className="text-gray-400 text-sm">Global network</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">60 Nobel Laureates</h3>
                <p className="text-gray-400 text-sm">Among alumni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Fulbright Scholarship Benefits 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {programBenefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {benefit.amount}
                    </span>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-orange-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Total Scholarship Value</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">$50,000 - $80,000</div>
              <p className="text-gray-300">Per academic year (varies by university and location)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility by Region */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Eligibility by Region 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {eligibilityByRegion.map((region, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{region.region}</h3>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Eligible Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, idx) => (
                        <span key={idx} className="bg-blue-500 bg-opacity-20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Priority Fields:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.specialFields.map((field, idx) => (
                        <span key={idx} className="bg-orange-500 bg-opacity-20 text-orange-400 px-3 py-1 rounded-full text-sm">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top US Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top US Universities for Fulbright Scholars</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topUniversities.map((university, index) => (
                  <div key={index} className="bg-black p-4 rounded border border-gray-700 hover:border-orange-500 transition-colors">
                    <span className="text-white font-medium">{university}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-center">
                Fulbright scholars can study at any accredited US university that accepts their application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Fulbright Application Process 2024-2025</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="bg-black p-6 rounded-lg border border-blue-500 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {item.period}
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

      {/* General Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">General Eligibility Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Academic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Bachelor's degree or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Strong academic record (3.0+ GPA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">English proficiency (TOEFL/IELTS)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">GRE/GMAT scores (if required)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Personal Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Citizenship of eligible country</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Leadership potential</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Commitment to home country</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">No previous Fulbright award</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Fulbright USA?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your chances of securing this prestigious scholarship to study in America
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Fulbright Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullbrightForeignStudentProgramUSA2024;
