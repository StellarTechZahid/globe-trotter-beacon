
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen, Clock, Star, FileText, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const USAMeritScholarships2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const usaScholarships = [
    {
      name: "National Merit Scholarship",
      value: "$2,500-$10,000/year",
      duration: "4 years",
      eligibility: ["PSAT/NMSQT scores", "Academic achievement", "US citizenship"],
      deadline: "October 15, 2024"
    },
    {
      name: "Benjamin A. Gilman Scholarship",
      value: "$5,000-$8,000",
      duration: "1 semester/year",
      eligibility: ["Pell Grant recipient", "Study abroad", "Underrepresented areas"],
      deadline: "March 5, 2024"
    },
    {
      name: "Critical Language Scholarship",
      value: "Full funding",
      duration: "2-12 months",
      eligibility: ["Language study", "US citizen/national", "Academic performance"],
      deadline: "November 15, 2024"
    },
    {
      name: "Barry Goldwater Scholarship",
      value: "$7,500/year",
      duration: "2 years",
      eligibility: ["STEM majors", "Research experience", "Graduate school intent"],
      deadline: "January 31, 2025"
    }
  ];

  const privateScholarships = [
    {
      name: "Gates Millennium Scholars",
      provider: "Gates Foundation",
      value: "Full funding",
      focus: "Minority students, leadership"
    },
    {
      name: "Coca-Cola Scholars",
      provider: "Coca-Cola Foundation",
      value: "$20,000",
      focus: "Leadership, academic excellence"
    },
    {
      name: "Davidson Fellows",
      provider: "Davidson Institute",
      value: "$50,000",
      focus: "Exceptional achievement"
    },
    {
      name: "Horatio Alger Scholarship",
      provider: "Horatio Alger Association",
      value: "$25,000",
      focus: "Overcoming adversity"
    }
  ];

  const benefits = [
    "Tuition and fees coverage",
    "Living expenses support",
    "Books and supplies allowance",
    "Research opportunities",
    "Internship programs",
    "Mentorship networks",
    "Career development",
    "Alumni connections"
  ];

  const applicationStrategies = [
    {
      title: "Early Preparation",
      description: "Start preparing applications 12-18 months in advance",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Strong Essays",
      description: "Craft compelling personal statements and essays",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Leadership Evidence",
      description: "Demonstrate leadership through activities and service",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Academic Excellence",
      description: "Maintain high GPA and standardized test scores",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>USA Merit Scholarships 2024 | Complete Guide to American Scholarships</title>
        <meta name="description" content="Comprehensive guide to USA merit scholarships 2024 including National Merit, Gilman, Gates Millennium, and other prestigious American scholarships." />
        <meta name="keywords" content="USA merit scholarships 2024, American scholarships, National Merit scholarship, Gilman scholarship, Gates Millennium scholars, study in USA funding" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/usa-merit-scholarships-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">USA Merit Scholarships 2024</h1>
            <p className="text-xl mb-6">Excellence-Based Funding for American Education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Apply for USA Scholarships
            </Button>
          </div>
        </div>
      </section>

      {/* About USA Merit Scholarships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">About USA Merit Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              The United States offers numerous merit-based scholarships recognizing academic excellence, 
              leadership potential, and special talents. These scholarships range from federal programs 
              like the National Merit Scholarship to private foundation awards like Gates Millennium Scholars. 
              With over $6 billion in scholarship funding available annually, merit scholarships provide 
              crucial support for outstanding students pursuing higher education in America.
            </p>
          </div>
        </div>
      </section>

      {/* Major USA Scholarships */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Major USA Merit Scholarships 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {usaScholarships.map((scholarship, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{scholarship.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-500 font-semibold">Value: </span>
                      <span className="text-green-500 font-bold">{scholarship.value}</span>
                    </div>
                    <div>
                      <span className="text-blue-500 font-semibold">Duration: </span>
                      <span className="text-white">{scholarship.duration}</span>
                    </div>
                    <div>
                      <span className="text-blue-500 font-semibold">Deadline: </span>
                      <span className="text-orange-500 font-bold">{scholarship.deadline}</span>
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

                  <Button 
                    onClick={scrollToConsultation}
                    className="bg-blue-500 hover:bg-blue-600 text-white w-full"
                  >
                    Apply for This Scholarship
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Foundation Scholarships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Private Foundation Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privateScholarships.map((scholarship, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{scholarship.name}</h3>
                  <p className="text-blue-400 text-sm mb-2">{scholarship.provider}</p>
                  <p className="text-green-500 font-bold mb-2">{scholarship.value}</p>
                  <p className="text-gray-300 text-sm">{scholarship.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Scholarship Benefits</h2>
            <Card className="bg-black border-blue-500">
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

      {/* Application Strategies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Application Success Strategies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationStrategies.map((strategy, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for USA Merit Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance for your scholarship applications and study in the USA
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your American Dream
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default USAMeritScholarships2024;
