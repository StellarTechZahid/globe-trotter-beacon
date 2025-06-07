
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, Calendar, Clock, FileText, Users, Globe, Star, Award, BookOpen, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const UniversityApplicationTipsForInternationalStudents2024 = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const applicationTips = [
    {
      category: "Research & Planning",
      tips: [
        "Start research 18-24 months before intended enrollment",
        "Use official university websites and rankings",
        "Consider location, culture, and climate preferences",
        "Research visa requirements and processing times",
        "Understand tuition costs and living expenses"
      ]
    },
    {
      category: "Academic Preparation", 
      tips: [
        "Maintain strong GPA throughout your studies",
        "Take standardized tests (SAT, ACT, GRE, GMAT) early",
        "Complete prerequisite courses for your chosen field",
        "Obtain official transcripts and degree certificates",
        "Get credential evaluations when required"
      ]
    },
    {
      category: "Application Strategy",
      tips: [
        "Apply to 6-12 universities with varying selectivity",
        "Check application deadlines and requirements carefully",
        "Submit applications well before deadlines",
        "Pay attention to program-specific requirements",
        "Keep track of all applications and deadlines"
      ]
    },
    {
      category: "Personal Statement",
      tips: [
        "Tell your unique story authentically",
        "Connect experiences to career goals",
        "Show research about the specific program",
        "Demonstrate cultural awareness and adaptability",
        "Have native speakers review your essays"
      ]
    }
  ];

  const commonMistakes = [
    {
      title: "Late Applications",
      description: "Submitting applications close to deadlines reduces chances of acceptance and financial aid",
      solution: "Create a timeline and submit at least 2 weeks early"
    },
    {
      title: "Generic Essays",
      description: "Using the same personal statement for all universities",
      solution: "Customize essays for each program and university"
    },
    {
      title: "Weak Letters of Recommendation",
      description: "Getting recommendations from people who don't know you well",
      solution: "Build relationships with professors and supervisors early"
    },
    {
      title: "Ignoring Financial Planning",
      description: "Not researching costs and financial aid options thoroughly",
      solution: "Create detailed budget including hidden costs"
    },
    {
      title: "Poor Document Preparation",
      description: "Submitting documents with errors or in wrong formats",
      solution: "Proofread everything and follow format guidelines exactly"
    },
    {
      title: "Limited University Research",
      description: "Not researching university culture, programs, and opportunities",
      solution: "Attend virtual sessions and connect with current students"
    }
  ];

  const timeline = [
    {
      period: "18-24 Months Before",
      tasks: ["Research universities and programs", "Start building academic profile", "Begin test preparation"]
    },
    {
      period: "12-18 Months Before", 
      tasks: ["Take standardized tests", "Build relationships with recommenders", "Research financial aid"]
    },
    {
      period: "6-12 Months Before",
      tasks: ["Complete applications", "Request transcripts", "Write personal statements"]
    },
    {
      period: "3-6 Months Before",
      tasks: ["Submit applications", "Apply for scholarships", "Prepare for interviews"]
    },
    {
      period: "1-3 Months Before",
      tasks: ["Complete visa applications", "Arrange housing", "Plan departure"]
    }
  ];

  const documentChecklist = [
    "Official academic transcripts",
    "Degree certificates",
    "Standardized test scores",
    "Letters of recommendation",
    "Personal statement/essays",
    "Resume/CV",
    "Financial documents",
    "Passport and photos",
    "English proficiency scores",
    "Portfolio (if required)"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>University Application Tips for International Students 2024 | Complete Guide</title>
        <meta name="description" content="Essential university application tips for international students 2024. Step-by-step guide to successful applications, avoiding common mistakes, and securing admission." />
        <meta name="keywords" content="university application tips 2024, international student applications, study abroad applications, university admission guide, application strategy international students" />
        <link rel="canonical" href="https://yourdomain.com/articles/university-application-tips-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">University Application Tips for International Students 2024</h1>
            <p className="text-xl mb-6">Your Complete Guide to Successful University Applications</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Application Support
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Mastering University Applications</h2>
            <p className="text-lg text-gray-300 mb-8">
              Applying to universities as an international student requires careful planning, strategic thinking, 
              and attention to detail. With increasing competition and complex requirements, success depends on 
              understanding the application process, avoiding common pitfalls, and presenting yourself effectively. 
              This comprehensive guide provides proven strategies and insider tips to maximize your chances of 
              acceptance at your dream university.
            </p>
          </div>
        </div>
      </section>

      {/* Application Tips by Category */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Essential Application Tips</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {applicationTips.map((category, index) => (
              <Card key={index} className="bg-black border-blue-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                  <div className="space-y-3">
                    {category.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="bg-gray-900 border-red-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-500 mb-3">{mistake.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{mistake.description}</p>
                  <div className="bg-black p-3 rounded border border-green-500">
                    <p className="text-green-400 text-sm font-semibold">Solution:</p>
                    <p className="text-gray-300 text-sm">{mistake.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Application Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {timeline.map((period, index) => (
                <Card key={index} className="bg-black border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-bold text-white">{period.period}</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {period.tasks.map((task, idx) => (
                        <div key={idx} className="bg-gray-900 p-3 rounded">
                          <p className="text-gray-300 text-sm">{task}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Essential Documents Checklist</h2>
            <Card className="bg-gray-900 border-blue-500">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {documentChecklist.map((document, index) => (
                    <div key={index} className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-300">{document}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-8">Expert Application Tips</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black border-blue-500">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Be Strategic</h3>
                  <p className="text-gray-300 text-sm">Apply to reach, match, and safety schools to maximize your options</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-blue-500">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Show Fit</h3>
                  <p className="text-gray-300 text-sm">Demonstrate how you align with the university's values and culture</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-blue-500">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Stand Out</h3>
                  <p className="text-gray-300 text-sm">Highlight unique experiences and perspectives you bring</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Submit Winning Applications?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance to maximize your chances of university acceptance
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Application Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversityApplicationTipsForInternationalStudents2024;
