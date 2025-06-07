
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, MapPin, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TopUniversitiesInUSAForInternationalStudents2024 = () => {
  const topUniversities = [
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts",
      ranking: "#1 in National Universities",
      acceptance: "3.4%",
      tuition: "$57,261",
      strengths: ["Medicine", "Law", "Business", "Engineering"],
      intlStudents: "25%"
    },
    {
      name: "Stanford University", 
      location: "Stanford, California",
      ranking: "#3 in National Universities",
      acceptance: "3.9%",
      tuition: "$58,416",
      strengths: ["Computer Science", "Engineering", "Business", "Medicine"],
      intlStudents: "23%"
    },
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, Massachusetts", 
      ranking: "#2 in National Universities",
      acceptance: "4.1%",
      tuition: "$57,986",
      strengths: ["Engineering", "Computer Science", "Physics", "Mathematics"],
      intlStudents: "33%"
    }
  ];

  const applicationTips = [
    {
      title: "Academic Excellence",
      description: "Maintain a high GPA (3.7+) and excel in standardized tests (SAT/ACT)",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Standardized Tests",
      description: "Achieve competitive SAT (1500+) or ACT (33+) scores for top universities",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Financial Planning",
      description: "Prepare for costs of $70,000-$80,000 annually including living expenses",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Application Strategy",
      description: "Apply early decision/action and craft compelling personal essays",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Top Universities in USA for International Students 2024 | Complete Rankings Guide</title>
        <meta name="description" content="Discover the best universities in USA for international students 2024. Complete guide with rankings, admission requirements, costs, and application tips for studying in America." />
        <meta name="keywords" content="top universities USA 2024, best colleges America international students, study in USA, Harvard Stanford MIT, US university rankings, international student admissions USA" />
        <link rel="canonical" href="https://yourdomain.com/blogs/top-universities-in-usa-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Universities in USA for International Students 2024</h1>
            <p className="text-xl mb-6">Your complete guide to America's most prestigious institutions</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get USA Admission Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Why Study in the USA?</h2>
            <p className="text-lg text-gray-300 mb-8">
              The United States hosts over 1 million international students annually, offering world-class education, 
              cutting-edge research opportunities, and diverse campus cultures. With 5,300+ colleges and universities, 
              the USA provides unmatched flexibility in academic programs and post-graduation opportunities including 
              Optional Practical Training (OPT) for international students.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">1M+ International Students</h3>
                <p className="text-gray-400 text-sm">Diverse global community</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Top Global Rankings</h3>
                <p className="text-gray-400 text-sm">World's best universities</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">OPT Opportunities</h3>
                <p className="text-gray-400 text-sm">Work experience programs</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Innovation Hub</h3>
                <p className="text-gray-400 text-sm">Technology & research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top US Universities for International Students 2024</h2>
          <div className="space-y-8">
            {topUniversities.map((university, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{university.name}</h3>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-white text-sm font-semibold">
                          {university.ranking}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                          {university.location}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="h-4 w-4 mr-2 text-blue-500" />
                          {university.intlStudents} International Students
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Top Programs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {university.strengths.map((strength, idx) => (
                            <span key={idx} className="bg-orange-500 bg-opacity-20 text-orange-400 px-3 py-1 rounded-full text-sm">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-black p-4 rounded-lg border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Key Stats</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Acceptance Rate:</span>
                            <span className="text-white">{university.acceptance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Annual Tuition:</span>
                            <span className="text-white">{university.tuition}</span>
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

      {/* Application Tips */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Application Success Tips 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {applicationTips.map((tip, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-3 rounded-full text-white">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                      <p className="text-gray-300">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply to Top US Universities?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your chances of admission to America's best universities
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your USA Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopUniversitiesInUSAForInternationalStudents2024;
