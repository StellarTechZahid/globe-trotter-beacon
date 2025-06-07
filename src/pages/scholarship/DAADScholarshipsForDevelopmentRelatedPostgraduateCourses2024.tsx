
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, MapPin, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DAADScholarshipsForDevelopmentRelatedPostgraduateCourses2024 = () => {
  const eligibleCourses = [
    {
      name: "Development Cooperation",
      university: "Various German Universities",
      duration: "12-24 months",
      focus: "International development, project management"
    },
    {
      name: "Environmental Engineering",
      university: "TU Berlin, RWTH Aachen",
      duration: "18-24 months", 
      focus: "Sustainable development, climate change"
    },
    {
      name: "Public Health",
      university: "University of Heidelberg",
      duration: "12-18 months",
      focus: "Global health, health systems"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>DAAD Scholarships for Development-Related Postgraduate Courses 2024 | Complete Application Guide</title>
        <meta name="description" content="Comprehensive guide to DAAD scholarships for development-related postgraduate courses in Germany 2024. Learn about eligibility, application process, and funding details for international students." />
        <meta name="keywords" content="DAAD scholarship 2024, Germany development courses, postgraduate scholarships Germany, international development studies, DAAD funding, study in Germany, development cooperation courses" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/daad-scholarships-for-development-related-postgraduate-courses-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DAAD Scholarships for Development-Related Postgraduate Courses 2024</h1>
            <p className="text-xl mb-6">Empowering professionals from developing countries through German education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get DAAD Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">About DAAD Development Scholarships</h2>
            <p className="text-lg text-gray-300 mb-8">
              The German Academic Exchange Service (DAAD) offers scholarships for development-related postgraduate courses 
              to qualified professionals from developing countries. These scholarships aim to strengthen human capacity in 
              developing countries by providing access to high-quality German education in fields relevant to sustainable development.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">€861-1,200/month</h3>
                <p className="text-gray-400 text-sm">Monthly allowance</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Development Focus</h3>
                <p className="text-gray-400 text-sm">Career-relevant courses</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Developing Countries</h3>
                <p className="text-gray-400 text-sm">Eligible applicants</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">12-24 Months</h3>
                <p className="text-gray-400 text-sm">Course duration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">DAAD Scholarship Benefits 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-red-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Financial Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Monthly scholarship: €861 (Master's) or €1,200 (PhD)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Travel allowance for journey to and from Germany</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Health insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Study and research allowance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Additional Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">German language course (if required)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Introductory seminar for new scholars</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Access to DAAD alumni network</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Family allowance (for married scholars)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligible Courses */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Development-Related Courses 2024</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {eligibleCourses.map((course, index) => (
              <Card key={index} className="bg-black border-red-500 hover:border-red-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{course.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {course.university}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-red-500" />
                      {course.duration}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{course.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">DAAD Application Process 2024</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Eligibility Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Bachelor's degree (at least 4 years)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Minimum 2 years relevant work experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Citizenship of developing country</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">English/German language proficiency</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Application Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">DAAD application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Academic transcripts and certificates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">CV and motivation letter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Letters of recommendation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply for DAAD Development Scholarships?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to secure your DAAD scholarship for development studies in Germany
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your DAAD Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DAADScholarshipsForDevelopmentRelatedPostgraduateCourses2024;
