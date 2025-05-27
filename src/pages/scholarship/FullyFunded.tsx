
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, CheckCircle, Star, MessageCircle, ArrowRight, Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FullyFunded = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      name: "Gates Cambridge Scholarship",
      country: "United Kingdom",
      amount: "$200,000+",
      duration: "2-4 years",
      coverage: ["Full tuition fees", "Monthly stipend", "Travel costs", "Health insurance", "Research funding"],
      eligibility: ["Outstanding academic merit", "Leadership potential", "Commitment to improving lives"],
      deadline: "December 2024"
    },
    {
      name: "Fulbright Foreign Student Program",
      country: "United States",
      amount: "$150,000+",
      duration: "1-2 years",
      coverage: ["Full tuition", "Living allowance", "Health insurance", "Travel expenses", "Research support"],
      eligibility: ["Academic excellence", "Leadership qualities", "Cultural ambassador potential"],
      deadline: "October 2024"
    },
    {
      name: "Chevening Scholarships",
      country: "United Kingdom",
      amount: "$120,000+",
      duration: "1 year",
      coverage: ["University tuition", "Monthly stipend", "Travel costs", "Visa application"],
      eligibility: ["Leadership potential", "Academic excellence", "Work experience"],
      deadline: "November 2024"
    },
    {
      name: "DAAD Scholarships",
      country: "Germany",
      amount: "$100,000+",
      duration: "1-3 years",
      coverage: ["Monthly allowance", "Travel allowance", "Health insurance", "Study allowance"],
      eligibility: ["Academic merit", "Motivation", "German language skills (optional)"],
      deadline: "Various deadlines"
    },
    {
      name: "Australia Awards Scholarships",
      country: "Australia",
      amount: "$180,000+",
      duration: "2-4 years",
      coverage: ["Full tuition", "Living allowance", "Health cover", "Return travel"],
      eligibility: ["Academic merit", "Leadership qualities", "Development impact"],
      deadline: "May 2024"
    },
    {
      name: "Vanier Canada Graduate Scholarships",
      country: "Canada",
      amount: "$150,000",
      duration: "3 years",
      coverage: ["Annual stipend", "Research support", "Travel allowance"],
      eligibility: ["Doctoral studies", "Academic excellence", "Research potential"],
      deadline: "November 2024"
    }
  ];

  const applicationTips = [
    {
      title: "Start Early",
      description: "Begin your application process 12-18 months in advance to ensure thorough preparation."
    },
    {
      title: "Craft Compelling Essays",
      description: "Write personal statements that showcase your unique story, achievements, and future goals."
    },
    {
      title: "Secure Strong References",
      description: "Obtain recommendation letters from professors or employers who know your work well."
    },
    {
      title: "Demonstrate Impact",
      description: "Show how you've made a difference in your community and how the scholarship will help you do more."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Fully Funded Scholarships</h1>
            <p className="text-xl mb-8">Complete financial support for your international education journey</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">What's Included in Fully Funded Scholarships</h2>
            <p className="text-xl text-gray-300">Comprehensive financial support covering all aspects of your education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "100% Tuition Coverage", desc: "Complete coverage of university tuition fees" },
              { icon: Globe, title: "Living Allowance", desc: "Monthly stipend for accommodation and daily expenses" },
              { icon: Award, title: "Additional Benefits", desc: "Health insurance, travel costs, and research funding" },
              { icon: Star, title: "Career Support", desc: "Networking opportunities and career development programs" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Available Fully Funded Scholarships</h2>
            <p className="text-xl text-gray-300">Prestigious opportunities from leading institutions worldwide</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-black rounded-lg p-8 border border-orange-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{scholarship.name}</h3>
                    <p className="text-orange-500 font-semibold">{scholarship.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">{scholarship.amount}</div>
                    <div className="text-gray-400 text-sm">{scholarship.duration}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Coverage Includes:</h4>
                    <ul className="space-y-2">
                      {scholarship.coverage.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {scholarship.eligibility.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Deadline: {scholarship.deadline}</span>
                  <Button 
                    onClick={scrollToConsultation}
                    className="bg-orange-500 hover:bg-orange-600 text-black"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Application Success Tips</h2>
            <p className="text-xl text-gray-300">Expert advice to maximize your chances of success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {applicationTips.map((tip, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Get expert guidance to secure fully funded scholarships for your dream education
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Consultation Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullyFunded;
