
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CommonwealthScholarshipsForDevelopingCountries2024 = () => {
  const scholarshipTypes = [
    {
      type: "Master's Scholarships",
      description: "For students from low and middle-income Commonwealth countries",
      duration: "One year",
      value: "£25,000-30,000",
      eligibility: "Upper second-class honours degree or equivalent"
    },
    {
      type: "PhD Scholarships", 
      description: "For doctoral research in any subject area",
      duration: "Three years",
      value: "£75,000-90,000",
      eligibility: "Master's degree or equivalent research experience"
    },
    {
      type: "Split-site Scholarships",
      description: "Spend 12 months in UK as part of PhD studies in home country",
      duration: "12 months",
      value: "£20,000-25,000",
      eligibility: "Enrolled in PhD program in home country"
    },
    {
      type: "Shared Scholarships",
      description: "Jointly funded with UK universities",
      duration: "One year",
      value: "£15,000-20,000", 
      eligibility: "Developing country citizen with financial need"
    }
  ];

  const eligibleCountries = [
    "Bangladesh", "Belize", "Botswana", "Cameroon", "Dominica", "Eswatini", "Fiji", "Gambia",
    "Ghana", "Grenada", "Guyana", "India", "Jamaica", "Kenya", "Kiribati", "Lesotho",
    "Malawi", "Malaysia", "Maldives", "Mauritius", "Mozambique", "Namibia", "Nauru",
    "Nigeria", "Pakistan", "Papua New Guinea", "Rwanda", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "Sierra Leone", "Solomon Islands", "South Africa", "Sri Lanka", "Tanzania",
    "Tonga", "Tuvalu", "Uganda", "Vanuatu", "Zambia"
  ];

  const priorityThemes = [
    {
      theme: "Science & Technology for Development",
      description: "Agricultural technology, renewable energy, water management, climate change adaptation",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      theme: "Strengthening Health Systems",
      description: "Public health, medical research, health policy, epidemiology, mental health",
      icon: <Heart className="h-6 w-6" />
    },
    {
      theme: "Promoting Global Prosperity", 
      description: "Economic development, trade, financial systems, entrepreneurship, governance",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      theme: "Strengthening Global Peace",
      description: "Conflict resolution, human rights, international law, security studies",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const applicationDeadlines = [
    {
      scholarship: "Master's Scholarships",
      deadline: "16 December 2024",
      startDate: "September 2025",
      status: "Open"
    },
    {
      scholarship: "PhD Scholarships", 
      deadline: "16 December 2024",
      startDate: "September 2025",
      status: "Open"
    },
    {
      scholarship: "Split-site Scholarships",
      deadline: "16 December 2024",  
      startDate: "April/September 2025",
      status: "Open"
    },
    {
      scholarship: "Shared Scholarships",
      deadline: "Rolling basis",
      startDate: "September 2025",
      status: "Check with universities"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Commonwealth Scholarships for Developing Countries 2024 | UK Government Funding</title>
        <meta name="description" content="Apply for Commonwealth Scholarships 2024 for students from developing countries. Fully funded Masters and PhD opportunities in UK universities. Complete application guide with deadlines and eligibility." />
        <meta name="keywords" content="Commonwealth scholarship 2024, UK scholarship developing countries, Masters PhD UK funding, British Council scholarship, study in UK, international development scholarship, Commonwealth Study Centre" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/commonwealth-scholarships-for-developing-countries-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commonwealth Scholarships for Developing Countries 2024</h1>
            <p className="text-xl mb-6">Supporting talent from Commonwealth developing countries to study in the UK</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Commonwealth Scholarship Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500 mb-6">About Commonwealth Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              Commonwealth Scholarships are funded by the UK Foreign, Commonwealth & Development Office (FCDO). 
              The scholarships are aimed at talented individuals with the potential to make a positive impact 
              on the global stage. Each year, around 800 students are given the opportunity to undertake 
              postgraduate degrees at UK universities.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">800+ Awards</h3>
                <p className="text-gray-400 text-sm">Annual scholarships</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">40+ Countries</h3>
                <p className="text-gray-400 text-sm">Commonwealth eligible</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">30,000+ Alumni</h3>
                <p className="text-gray-400 text-sm">Global network</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Development Focus</h3>
                <p className="text-gray-400 text-sm">Priority themes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Commonwealth Scholarship Types 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipTypes.map((scholarship, index) => (
              <Card key={index} className="bg-gray-900 border-green-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{scholarship.type}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {scholarship.value}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{scholarship.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-green-500 font-semibold">Duration: </span>
                      <span className="text-white">{scholarship.duration}</span>
                    </div>
                    <div>
                      <span className="text-green-500 font-semibold">Eligibility: </span>
                      <span className="text-white text-sm">{scholarship.eligibility}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Themes */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Development Priority Themes 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {priorityThemes.map((theme, index) => (
              <Card key={index} className="bg-black border-green-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 p-3 rounded-full text-white">
                      {theme.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{theme.theme}</h3>
                      <p className="text-gray-300">{theme.description}</p>
                    </div>
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
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Eligible Commonwealth Countries 2024</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eligibleCountries.map((country, index) => (
                  <div key={index} className="bg-black p-3 rounded text-center border border-gray-700 hover:border-green-500 transition-colors">
                    <span className="text-white font-medium">{country}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-6 text-center">
                <strong>Note:</strong> Eligibility varies by scholarship type. Low and middle-income Commonwealth countries are prioritized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Application Deadlines 2024-2025</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {applicationDeadlines.map((deadline, index) => (
                <Card key={index} className="bg-black border-green-500">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-white">{deadline.scholarship}</h3>
                      </div>
                      <div className="text-center">
                        <div className="text-orange-500 font-semibold">Deadline</div>
                        <div className="text-white">{deadline.deadline}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-500 font-semibold">Start Date</div>
                        <div className="text-white">{deadline.startDate}</div>
                      </div>
                      <div className="text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          deadline.status === 'Open' 
                            ? 'bg-green-500 text-black' 
                            : 'bg-orange-500 text-black'
                        }`}>
                          {deadline.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">General Eligibility Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-green-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Essential Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Citizen of eligible Commonwealth country</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Permanent resident in eligible Commonwealth country</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Hold relevant first degree of upper second class honours standard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Unable to afford UK studies without scholarship</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Additional Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">English language proficiency (IELTS 6.5+ overall)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Commitment to return to home country</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Development impact potential</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">Leadership qualities and networking skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Commonwealth Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure funding for your UK studies and contribute to development in your home country
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Commonwealth Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommonwealthScholarshipsForDevelopingCountries2024;
