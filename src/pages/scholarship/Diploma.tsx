import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Calendar, DollarSign, CheckCircle, ArrowRight, BookOpen, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Diploma = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Professional Development Scholarships",
      description: "Funding for career-focused diploma programs",
      amount: "$2,000 - $15,000",
      countries: ["Canada", "Australia", "New Zealand", "UK"],
      requirements: ["High school completion", "English proficiency", "Career goals alignment"]
    },
    {
      title: "Technical Skills Scholarships",
      description: "Support for technical and vocational diploma programs",
      amount: "$3,000 - $20,000",
      countries: ["Germany", "Canada", "Australia", "Singapore"],
      requirements: ["Technical aptitude", "Relevant experience", "Industry demand"]
    },
    {
      title: "International Student Awards",
      description: "Dedicated funding for international diploma students",
      amount: "$1,500 - $12,000",
      countries: ["Canada", "Australia", "UK", "Ireland"],
      requirements: ["International status", "Academic merit", "Financial need demonstration"]
    },
    {
      title: "Industry Partnership Grants",
      description: "Employer-sponsored diploma programs with job guarantees",
      amount: "Full tuition + employment",
      countries: ["Multiple countries"],
      requirements: ["Industry commitment", "Skills assessment", "Employment agreement"]
    }
  ];

  const popularPrograms = [
    "Business Administration",
    "Information Technology",
    "Healthcare and Nursing",
    "Engineering Technology",
    "Hospitality Management",
    "Digital Marketing",
    "Project Management",
    "Early Childhood Education",
    "Graphic Design",
    "Culinary Arts"
  ];

  const benefits = [
    {
      title: "Shorter Duration",
      description: "Complete your studies in 1-2 years",
      icon: Clock
    },
    {
      title: "Practical Focus",
      description: "Hands-on learning and industry skills",
      icon: BookOpen
    },
    {
      title: "Career Ready",
      description: "Direct pathway to employment",
      icon: Award
    },
    {
      title: "Cost Effective",
      description: "Lower tuition costs and living expenses",
      icon: DollarSign
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Diploma Scholarships</h1>
            <p className="text-xl">Fast-track your career with practical education funding</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Diploma Program Funding</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get skilled and job-ready with diploma scholarships. These practical programs offer 
                focused education in 1-2 years, preparing you for immediate career opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                  <benefit.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Available Funding Options</h2>
            
            <div className="grid gap-8">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-black rounded-lg p-8 border border-orange-500">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-orange-500 mb-3">{scholarship.title}</h3>
                      <p className="text-gray-300 mb-4">{scholarship.description}</p>
                      <div className="space-y-2">
                        <p className="text-white"><strong>Amount:</strong> {scholarship.amount}</p>
                        <p className="text-white"><strong>Countries:</strong> {scholarship.countries.join(", ")}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-500 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {scholarship.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Popular Diploma Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {popularPrograms.map((program, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg border border-orange-500">
                  <Award className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <p className="text-gray-300 font-medium">{program}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Why Choose Diploma Programs?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Career Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Quick entry into the workforce</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Industry-relevant skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Pathway to further education</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Financial Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Lower total education costs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Faster return on investment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Work while studying options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Diploma Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Get guidance on diploma programs and scholarship opportunities
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Explore Diploma Options
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diploma;