
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FullyFundedScholarshipsForInternationalStudents2024 = () => {
  const featuredScholarships = [
    {
      name: "Gates Cambridge Scholarships",
      provider: "University of Cambridge",
      country: "United Kingdom",
      value: "Full funding + £18,000 stipend",
      deadline: "October 6, 2024",
      coverage: ["Full tuition fees", "Living allowance", "Airfare", "Visa costs", "Health insurance"],
      eligibility: ["Outstanding intellectual ability", "Leadership potential", "Commitment to improving others' lives"],
      link: "/scholarship/gates-cambridge-scholarships-for-international-students-2024"
    },
    {
      name: "Chevening Scholarships",
      provider: "UK Government",
      country: "United Kingdom",
      value: "Full funding + living costs",
      deadline: "November 2, 2024",
      coverage: ["University tuition fees", "Monthly stipend", "Travel costs", "Arrival allowance", "Thesis grant"],
      eligibility: ["Bachelor's degree", "2+ years work experience", "Leadership potential"],
      link: "/scholarship/chevening-scholarships-for-masters-and-phd-students-2024"
    },
    {
      name: "Fulbright Foreign Student Program",
      provider: "US Government",
      country: "United States",
      value: "Full funding up to $50,000",
      deadline: "Various by country",
      coverage: ["Tuition and fees", "Living stipend", "Health insurance", "Travel costs", "Books allowance"],
      eligibility: ["Academic merit", "Leadership qualities", "US study plan"],
      link: "/scholarship/fulbright-foreign-student-program-usa-2024"
    },
    {
      name: "Commonwealth Scholarships",
      provider: "Commonwealth Scholarship Commission",
      country: "United Kingdom",
      value: "Full funding + allowances",
      deadline: "December 15, 2024",
      coverage: ["Approved tuition fees", "Living allowance", "Return airfare", "Thesis costs"],
      eligibility: ["Commonwealth citizen", "Academic excellence", "Development impact potential"],
      link: "/scholarship/commonwealth-scholarships-for-developing-countries-2024"
    },
    {
      name: "Erasmus Mundus Joint Master Degrees",
      provider: "European Union",
      country: "Multiple EU Countries",
      value: "€1,400/month + costs",
      deadline: "January - March 2024",
      coverage: ["Full tuition coverage", "Monthly allowance", "Travel costs", "Installation costs"],
      eligibility: ["Bachelor's degree", "Language proficiency", "Academic excellence"],
      link: "/scholarship/erasmus-mundus-joint-master-degree-scholarships-2024"
    },
    {
      name: "Swiss Government Excellence Scholarships",
      provider: "Federal Commission for Scholarships",
      country: "Switzerland",
      value: "CHF 1,920/month",
      deadline: "September - November 2024",
      coverage: ["Monthly stipend", "Tuition fee waiver", "Health insurance", "Housing support"],
      eligibility: ["Master's/PhD degree", "Research supervisor confirmation", "Academic excellence"],
      link: "/scholarship/swiss-government-excellence-scholarships-2024"
    },
    {
      name: "Japan MEXT Scholarship",
      provider: "Japanese Government",
      country: "Japan",
      value: "¥143,000 - ¥145,000/month",
      deadline: "May - June 2024",
      coverage: ["Monthly allowance", "Tuition exemption", "Airfare", "No tuition fees"],
      eligibility: ["Academic excellence", "Health requirements", "Age limits"],
      link: "/scholarship/japan-mext-scholarship-for-international-students-2024"
    },
    {
      name: "Netherlands Scholarship Programme",
      provider: "Dutch Government",
      country: "Netherlands",
      value: "€5,000 - €25,000",
      deadline: "February 1 - May 1, 2024",
      coverage: ["Tuition contribution", "Living costs support", "Visa assistance", "Integration support"],
      eligibility: ["Non-EU/EEA nationality", "Academic merit", "Admitted to Dutch institution"],
      link: "/scholarship/netherlands-scholarship-programme-2024"
    }
  ];

  const scholarshipTypes = [
    {
      title: "Government Scholarships",
      description: "Prestigious funding from national governments worldwide",
      count: "500+ opportunities",
      examples: ["Fulbright", "Chevening", "DAAD", "Australia Awards"]
    },
    {
      title: "University Scholarships",
      description: "Direct funding from top universities globally",
      count: "1000+ programs",
      examples: ["Gates Cambridge", "Rhodes", "Knight-Hennessy", "Clarendon"]
    },
    {
      title: "International Organization Scholarships",
      description: "Funding from global organizations and foundations",
      count: "200+ programs", 
      examples: ["World Bank", "UN", "WHO", "Commonwealth"]
    },
    {
      title: "Corporate Scholarships",
      description: "Private sector funding for education and research",
      count: "300+ opportunities",
      examples: ["Google", "Microsoft", "Mastercard", "Adobe"]
    }
  ];

  const applicationTips = [
    {
      title: "Start Early",
      description: "Begin your application process 12-18 months before your intended start date",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Strong Personal Statement",
      description: "Craft compelling essays that showcase your unique story and aspirations",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Academic Excellence",
      description: "Maintain high GPA and secure strong letters of recommendation",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Leadership Experience",
      description: "Demonstrate leadership through community service and extracurricular activities",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const eligibilityRequirements = [
    "Outstanding academic record (typically 3.5+ GPA or equivalent)",
    "Bachelor's degree for master's programs, Master's for PhD programs", 
    "English proficiency test scores (IELTS 7.0+, TOEFL 100+)",
    "Strong letters of recommendation from academic or professional references",
    "Compelling personal statement and research proposal",
    "Demonstrated leadership experience and community involvement",
    "Clear career goals aligned with scholarship objectives",
    "Citizenship or residence requirements (varies by scholarship)"
  ];

  const benefits = [
    {
      category: "Financial Coverage",
      items: ["100% tuition fee coverage", "Monthly living allowance", "Health insurance", "Travel expenses", "Research funding"]
    },
    {
      category: "Academic Support", 
      items: ["Mentorship programs", "Research supervision", "Conference funding", "Library access", "Academic networks"]
    },
    {
      category: "Career Development",
      items: ["Internship opportunities", "Alumni networks", "Career counseling", "Professional development", "Industry connections"]
    },
    {
      category: "Personal Growth",
      items: ["Cultural immersion", "Language learning", "Global perspective", "Leadership skills", "Independence"]
    }
  ];

  const stats = [
    { number: "15,000+", label: "Annual Scholarships", description: "Available globally each year" },
    { number: "$2.5B+", label: "Total Funding", description: "Distributed annually" },
    { number: "95%", label: "Employment Rate", description: "Of scholarship recipients post-graduation" },
    { number: "180+", label: "Countries", description: "Offering scholarship opportunities" }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Fully Funded Scholarships for International Students 2024 | Complete Guide</title>
        <meta name="description" content="Discover 15,000+ fully funded scholarships for international students in 2024. Complete guide to Gates Cambridge, Fulbright, Chevening, and more prestigious funding opportunities." />
        <meta name="keywords" content="fully funded scholarships 2024, international student scholarships, Gates Cambridge, Fulbright scholarship, Chevening scholarship, free education abroad, study abroad funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/fully-funded-scholarships-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fully Funded Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">Complete Financial Coverage for Your Dream Education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Scholarship Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What are Fully Funded Scholarships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-500 mb-6">What are Fully Funded Scholarships?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Fully funded scholarships provide complete financial coverage for international students, including tuition fees, 
              living expenses, health insurance, travel costs, and research funding. These prestigious awards eliminate financial 
              barriers to world-class education, allowing students to focus entirely on their academic and research pursuits 
              without financial stress.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Top Fully Funded Scholarships 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredScholarships.map((scholarship, index) => (
              <Card key={index} className="bg-black border-purple-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{scholarship.name}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {scholarship.deadline}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-purple-500 font-semibold">Provider: </span>
                      <span className="text-white">{scholarship.provider}</span>
                    </div>
                    <div>
                      <span className="text-purple-500 font-semibold">Country: </span>
                      <span className="text-white">{scholarship.country}</span>
                    </div>
                    <div>
                      <span className="text-purple-500 font-semibold">Value: </span>
                      <span className="text-green-500 font-bold">{scholarship.value}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Coverage:</h4>
                    <div className="space-y-1">
                      {scholarship.coverage.map((item, idx) => (
                        <div key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </div>
                      ))}
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

                  <Link to={scholarship.link}>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
                      View Details & Apply
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Types of Fully Funded Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarshipTypes.map((type, index) => (
              <Card key={index} className="bg-gray-900 border-purple-500">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="bg-purple-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {type.count}
                  </div>
                  <div className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="text-orange-500 text-sm">{example}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Scholarship Benefits & Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-black border-purple-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.category}</h3>
                  <div className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
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
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">General Eligibility Requirements</h2>
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

      {/* Application Tips */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Application Success Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationTips.map((tip, index) => (
              <Card key={index} className="bg-black border-purple-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Fully Funded Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure prestigious funding for your international education dreams
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Scholarship Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullyFundedScholarshipsForInternationalStudents2024;
