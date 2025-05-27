
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { BookOpen, Target, TrendingUp, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestPreparation = () => {
  const tests = [
    {
      name: "IELTS",
      description: "International English Language Testing System",
      icon: <BookOpen className="h-8 w-8" />,
      features: ["Speaking Practice", "Writing Enhancement", "Reading Strategies", "Listening Skills"]
    },
    {
      name: "TOEFL",
      description: "Test of English as a Foreign Language",
      icon: <Target className="h-8 w-8" />,
      features: ["Academic English", "Note-taking Skills", "Time Management", "Computer-based Practice"]
    },
    {
      name: "GRE",
      description: "Graduate Record Examinations",
      icon: <TrendingUp className="h-8 w-8" />,
      features: ["Quantitative Reasoning", "Verbal Reasoning", "Analytical Writing", "Practice Tests"]
    },
    {
      name: "GMAT",
      description: "Graduate Management Admission Test",
      icon: <Award className="h-8 w-8" />,
      features: ["Problem Solving", "Data Sufficiency", "Critical Reasoning", "Sentence Correction"]
    }
  ];

  const benefits = [
    "Expert instructors with proven track records",
    "Personalized study plans based on your goals",
    "Comprehensive mock tests and practice materials",
    "Flexible scheduling to fit your timeline",
    "Score improvement guarantee",
    "Small batch sizes for individual attention"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Test Preparation</h1>
            <p className="text-xl">Master your standardized tests with expert guidance and proven strategies</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Achieve Your Target Score</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our comprehensive test preparation programs are designed to help you excel in standardized tests 
              required for international admissions. With personalized coaching, extensive practice materials, 
              and proven strategies, we ensure you achieve your target score.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {tests.map((test, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {test.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{test.name}</h3>
                  <p className="text-gray-300 mb-4">{test.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {test.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Why Choose Our Test Prep?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="bg-orange-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h4 className="text-2xl font-bold text-white mb-6">Success Statistics</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Score Improvement</span>
                  <span className="text-orange-500 font-bold text-xl">25+ Points</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Students Achieving Target Score</span>
                  <span className="text-orange-500 font-bold text-xl">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Preparation Time</span>
                  <span className="text-orange-500 font-bold text-xl">8-12 Weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default TestPreparation;
