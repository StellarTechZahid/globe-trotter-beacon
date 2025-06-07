
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChevelingScholarshipsForMastersAndPhDStudents2024 = () => {
  const eligibleCountries = [
    "Bangladesh", "Pakistan", "India", "Nigeria", "Kenya", "Ghana", "South Africa", "Egypt",
    "Indonesia", "Malaysia", "Thailand", "Philippines", "Vietnam", "Brazil", "Mexico",
    "Colombia", "Chile", "Argentina", "Turkey", "Jordan", "Lebanon", "Morocco", "Tunisia"
  ];

  const benefits = [
    {
      title: "Full Tuition Coverage",
      description: "Complete university tuition fees covered by the UK government",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Monthly Living Allowance",
      description: "£1,347 per month for living expenses outside London, £1,652 in London",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Travel Costs",
      description: "Return airfare to the UK and visa application fees",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Thesis Grant",
      description: "Up to £500 for thesis preparation and research materials",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Verify you meet citizenship, education, and work experience requirements",
      deadline: "October 2024"
    },
    {
      step: "2", 
      title: "Prepare Documents",
      description: "Gather academic transcripts, references, and required essays",
      deadline: "November 2024"
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Complete online application through Chevening portal",
      deadline: "November 7, 2024"
    },
    {
      step: "4",
      title: "Selection Process",
      description: "Shortlisted candidates invited for interviews",
      deadline: "February-April 2025"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Chevening Scholarships for Masters and PhD Students 2024 | UK Government Funding</title>
        <meta name="description" content="Apply for Chevening Scholarships 2024 - UK government's prestigious international awards program. Fully funded Masters and PhD scholarships for outstanding students from Chevening-eligible countries." />
        <meta name="keywords" content="Chevening scholarship 2024, UK government scholarship, masters scholarship UK, PhD funding UK, international student scholarship, British Council scholarship, study in UK, Commonwealth scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/chevening-scholarships-for-masters-and-phd-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chevening Scholarships for Masters and PhD Students 2024</h1>
            <p className="text-xl mb-6">UK Government's Global Scholarship Programme for Future Leaders</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Chevening Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">About Chevening Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              Chevening Scholarships are the UK government's global scholarship programme, funded by the Foreign, 
              Commonwealth & Development Office (FCDO) and partner organisations. The programme makes awards to 
              outstanding scholars with leadership potential from around the world to study in the UK. Since 1983, 
              Chevening has developed global networks of thousands of alumni and friends of the UK.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">1,500+ Awards</h3>
                <p className="text-gray-400 text-sm">Annually worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">160+ Countries</h3>
                <p className="text-gray-400 text-sm">Eligible applicants</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">50,000+ Alumni</h3>
                <p className="text-gray-400 text-sm">Global network</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Masters & PhD</h3>
                <p className="text-gray-400 text-sm">All subjects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Chevening Scholarship Benefits 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Total Scholarship Value</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">£35,000 - £45,000</div>
              <p className="text-gray-300">Per academic year (depending on course and location)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Eligibility Requirements 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-black border-blue-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Essential Criteria</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Citizen of Chevening-eligible country or territory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Hold an undergraduate degree equivalent to UK upper second-class honours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Minimum 2 years work experience (2,800 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">English language requirement (IELTS 6.5+ overall)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Three course choices from eligible UK universities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black border-orange-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Leadership Qualities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Demonstrated leadership and influencing skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Strong networking and relationship-building abilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Clear post-study career plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Commitment to returning home country for minimum 2 years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Vision for contributing to positive change</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligible Countries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Chevening-Eligible Countries & Territories 2024</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eligibleCountries.map((country, index) => (
                  <div key={index} className="bg-black p-3 rounded text-center">
                    <span className="text-white font-medium">{country}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-center">
                <strong>Note:</strong> This is a partial list. Check the official Chevening website for the complete list of eligible countries and territories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Chevening Application Timeline 2024-2025</h2>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Chevening Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your chances of securing this prestigious UK government scholarship
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Chevening Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChevelingScholarshipsForMastersAndPhDStudents2024;
