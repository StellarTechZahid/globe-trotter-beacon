
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Globe, BookOpen, Plane, Home, Shield } from 'lucide-react';

const FirstTimeInternationalStudents = () => {
  const tips = [
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Research Your Destination",
      description: "Learn about the culture, climate, and customs of your study destination before arrival.",
      details: [
        "Study the local customs and social norms",
        "Learn basic phrases in the local language",
        "Research weather patterns and pack accordingly",
        "Understand the education system structure"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: "Academic Preparation",
      description: "Prepare for different teaching styles and academic expectations.",
      details: [
        "Familiarize yourself with citation styles",
        "Practice critical thinking and analytical writing",
        "Learn about plagiarism policies",
        "Understand grading systems"
      ]
    },
    {
      icon: <Plane className="h-8 w-8 text-orange-500" />,
      title: "Pre-Departure Planning",
      description: "Essential steps to take before leaving your home country.",
      details: [
        "Get required vaccinations and health checkups",
        "Arrange international health insurance",
        "Notify banks about international travel",
        "Make copies of important documents"
      ]
    },
    {
      icon: <Home className="h-8 w-8 text-orange-500" />,
      title: "Accommodation & Living",
      description: "Tips for finding and settling into your new home.",
      details: [
        "Research housing options early",
        "Understand rental agreements and deposits",
        "Learn about local transportation",
        "Find nearby grocery stores and essential services"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Financial Management",
      description: "Manage your finances effectively while studying abroad.",
      details: [
        "Open a local bank account",
        "Understand currency exchange rates",
        "Budget for living expenses",
        "Learn about part-time work regulations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              First-Time International Students Guide
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Essential tips and advice for your successful study abroad journey
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Your Journey Starts Here</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Studying abroad as a first-time international student can be both exciting and overwhelming. 
              Our comprehensive guide will help you navigate every aspect of your journey, from pre-departure 
              preparation to settling into your new academic and cultural environment.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500/30 hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-orange-500 mb-2">
                    {tip.title}
                  </CardTitle>
                  <p className="text-gray-300">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tip.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-500">Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Keep embassy/consulate contact information handy</li>
                    <li>• Save local emergency numbers in your phone</li>
                    <li>• Maintain contact with family and friends back home</li>
                    <li>• Know your university's international student office</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-500">Cultural Adaptation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Join international student groups and clubs</li>
                    <li>• Participate in cultural exchange programs</li>
                    <li>• Be open-minded and respectful of differences</li>
                    <li>• Don't hesitate to ask questions when unsure</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimeInternationalStudents;
