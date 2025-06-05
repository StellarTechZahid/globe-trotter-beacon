
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FullyFundedScholarshipsForInternationalStudents2024 = () => {
  const scholarships = [
    {
      name: "Gates Cambridge Scholarship",
      provider: "University of Cambridge",
      country: "United Kingdom",
      value: "$180,000 - $200,000",
      deadline: "December 1, 2024",
      coverage: ["Full tuition fees", "Living allowance", "Travel costs", "Family allowance", "Research funding"],
      eligibility: ["Outstanding academic record", "Leadership potential", "Commitment to improving lives"],
      link: "/scholarships/gates-cambridge-scholarship"
    },
    {
      name: "Rhodes Scholarship",
      provider: "Oxford University",
      country: "United Kingdom", 
      value: "$250,000",
      deadline: "October 1, 2024",
      coverage: ["Full tuition", "Living stipend", "Travel allowance", "Health insurance"],
      eligibility: ["Academic excellence", "Leadership", "Service to others", "Character"],
      link: "/scholarships/rhodes-scholarship"
    },
    {
      name: "Fulbright Foreign Student Program",
      provider: "US Government",
      country: "United States",
      value: "$120,000 - $150,000",
      deadline: "October 15, 2024",
      coverage: ["Tuition", "Living allowance", "Health insurance", "Travel costs"],
      eligibility: ["Academic merit", "Leadership potential", "Home country engagement"],
      link: "/scholarships/fulbright-scholarship"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Fully Funded Scholarships for International Students 2024 | Complete Guide</title>
        <meta name="description" content="Discover fully funded scholarships for international students in 2024. Complete list of prestigious scholarships covering 100% tuition, living expenses, and more for study abroad." />
        <meta name="keywords" content="fully funded scholarships, international students 2024, free education abroad, Gates Cambridge, Rhodes scholarship, Fulbright scholarship, study abroad funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/fully-funded-scholarships-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fully Funded Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">Complete financial coverage for your international education dreams</p>
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

      {/* Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-500 mb-6">What Are Fully Funded Scholarships?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Fully funded scholarships provide complete financial support for international students, covering 100% of tuition fees, 
              living expenses, accommodation, health insurance, travel costs, and often additional research or project funding. 
              These prestigious awards eliminate all financial barriers to world-class education.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">100% Coverage</h3>
                <p className="text-gray-400 text-sm">All expenses covered</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Prestigious Awards</h3>
                <p className="text-gray-400 text-sm">World-renowned programs</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Global Opportunities</h3>
                <p className="text-gray-400 text-sm">Study worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Network Building</h3>
                <p className="text-gray-400 text-sm">Alumni connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top Fully Funded Scholarships 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-gray-900 border-purple-500 hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{scholarship.name}</h3>
                    <div className="bg-purple-500 px-3 py-1 rounded-full text-white text-sm font-semibold">
                      {scholarship.value}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                      {scholarship.country}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                      {scholarship.deadline}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{scholarship.provider}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Coverage Includes:</h4>
                    <ul className="space-y-1">
                      {scholarship.coverage.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {scholarship.eligibility.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={scholarship.link}>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
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

      {/* Application Tips */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center">How to Win Fully Funded Scholarships</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Application Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Start applications 12-18 months in advance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Build strong academic and research profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Demonstrate leadership and community service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Craft compelling personal statements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Success Factors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Maintain excellent academic record (GPA 3.5+)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Secure strong recommendation letters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Meet English proficiency requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Show clear career goals and impact potential</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Fully Funded Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your chances of securing prestigious funding
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Application Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullyFundedScholarshipsForInternationalStudents2024;
