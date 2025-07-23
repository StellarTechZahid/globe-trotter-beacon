
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, CreditCard, Plane, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const StudyAbroadPreparationChecklist2024 = () => {
  const checklistItems = [
    {
      category: "Academic Preparation",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Research universities and programs",
        "Prepare for standardized tests (IELTS/TOEFL/GRE/GMAT)",
        "Gather academic transcripts and certificates",
        "Write statement of purpose and essays",
        "Secure recommendation letters"
      ],
      timeline: "12-18 months before"
    },
    {
      category: "Financial Planning",
      icon: <CreditCard className="h-6 w-6" />,
      items: [
        "Calculate total costs (tuition + living)",
        "Research scholarship opportunities",
        "Arrange proof of funds",
        "Open international bank account",
        "Understand currency exchange"
      ],
      timeline: "10-12 months before"
    },
    {
      category: "Visa & Documentation",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Apply for student visa",
        "Obtain passport if needed",
        "Get medical checkups and vaccinations",
        "Arrange travel insurance",
        "Prepare emergency contact information"
      ],
      timeline: "6-8 months before"
    },
    {
      category: "Pre-Departure",
      icon: <Plane className="h-6 w-6" />,
      items: [
        "Book flights and accommodation",
        "Pack essentials and important documents",
        "Inform banks about international travel",
        "Research local culture and customs",
        "Connect with other international students"
      ],
      timeline: "2-3 months before"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Study Abroad Preparation Checklist 2024 | Complete Guide for International Students</title>
        <meta name="description" content="Complete study abroad preparation checklist 2024. Essential steps, timelines, and tips for international students planning to study overseas." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Abroad Preparation Checklist 2024</h1>
            <p className="text-xl mb-6">Your complete guide to preparing for international education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 text-lg font-semibold"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Get Preparation Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-indigo-500 mb-12 text-center">Complete Preparation Checklist</h2>
          <div className="space-y-8">
            {checklistItems.map((category, index) => (
              <Card key={index} className="bg-gray-900 border-indigo-500 hover:border-indigo-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-500 p-3 rounded-full text-white">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                    </div>
                    <div className="flex items-center text-indigo-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{category.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3 p-4 bg-black rounded-lg border border-gray-700">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="bg-indigo-900 border-indigo-500">
            <CardContent className="p-8 text-center">
              <AlertCircle className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Important Note</h3>
              <p className="text-indigo-200 text-lg mb-6">
                Timelines may vary by country and university. Start planning early and consult with education experts for personalized guidance.
              </p>
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Personalized Timeline
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyAbroadPreparationChecklist2024;
