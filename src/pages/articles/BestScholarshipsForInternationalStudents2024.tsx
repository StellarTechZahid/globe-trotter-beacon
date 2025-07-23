
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BestScholarshipsForInternationalStudents2024 = () => {
  const scholarships = [
    {
      name: "Fulbright Foreign Student Program",
      country: "USA",
      amount: "Full tuition + stipend",
      level: "Graduate",
      deadline: "October 2024",
      coverage: "Full funding",
      description: "Prestigious scholarship for graduate study in the United States"
    },
    {
      name: "Chevening Scholarships",
      country: "UK",
      amount: "£30,000+",
      level: "Masters",
      deadline: "November 2024",
      coverage: "Full funding",
      description: "UK government scholarship for one-year master's degrees"
    },
    {
      name: "Australia Awards",
      country: "Australia",
      amount: "Full funding",
      level: "Undergraduate/Graduate",
      deadline: "April 2024",
      coverage: "Full funding + living costs",
      description: "Australian government scholarships for developing countries"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Best Scholarships for International Students 2024 | Complete Guide</title>
        <meta name="description" content="Discover the best scholarships for international students in 2024. Full funding opportunities, application tips, and deadlines for studying abroad." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Scholarships for International Students 2024</h1>
            <p className="text-xl mb-6">Your guide to fully-funded education opportunities worldwide</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
            >
              <Award className="mr-2 h-5 w-5" />
              Get Scholarship Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Scholarships List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Top International Scholarships 2024</h2>
          <div className="space-y-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-gray-900 border-green-500 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{scholarship.name}</h3>
                        <span className="bg-green-500 px-3 py-1 rounded-full text-black text-sm font-semibold">
                          {scholarship.coverage}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{scholarship.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-300">
                          <Globe className="h-4 w-4 mr-2 text-green-500" />
                          {scholarship.country}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Star className="h-4 w-4 mr-2 text-green-500" />
                          {scholarship.level}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-black p-4 rounded-lg border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Details</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Amount:</span>
                            <span className="text-white">{scholarship.amount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Deadline:</span>
                            <span className="text-white">{scholarship.deadline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your scholarship chances
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
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

export default BestScholarshipsForInternationalStudents2024;
