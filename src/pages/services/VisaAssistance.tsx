
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { FileCheck, Clock, Shield, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisaAssistance = () => {
  const visaTypes = [
    {
      country: "USA",
      visaType: "F-1 Student Visa",
      processingTime: "3-8 weeks",
      successRate: "98%",
      requirements: ["Form I-20", "SEVIS Fee", "Financial Documents", "Interview Preparation"]
    },
    {
      country: "UK",
      visaType: "Tier 4 Student Visa",
      processingTime: "3-6 weeks",
      successRate: "96%",
      requirements: ["CAS Letter", "Financial Proof", "English Proficiency", "TB Test"]
    },
    {
      country: "Canada",
      visaType: "Study Permit",
      processingTime: "4-12 weeks",
      successRate: "97%",
      requirements: ["Letter of Acceptance", "Financial Support", "Medical Exam", "Biometrics"]
    },
    {
      country: "Australia",
      visaType: "Student Visa (500)",
      processingTime: "4-8 weeks",
      successRate: "95%",
      requirements: ["CoE", "GTE Statement", "Financial Capacity", "Health Insurance"]
    }
  ];

  const services = [
    {
      title: "Document Preparation",
      description: "Complete assistance with visa documentation",
      icon: <FileCheck className="h-8 w-8" />
    },
    {
      title: "Interview Coaching",
      description: "Mock interviews and preparation sessions",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Application Tracking",
      description: "Real-time status updates and follow-up",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Visa Compliance",
      description: "Ongoing support for visa regulations",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Visa Assistance</h1>
            <p className="text-xl">Expert guidance for seamless visa approvals</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Your Visa Success Partners</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Visa applications can be complex and stressful. Our experienced visa consultants provide 
              comprehensive support throughout the entire process, ensuring your application is complete, 
              accurate, and submitted on time. We maintain a 96%+ success rate across all destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Visa Types We Handle</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {visaTypes.map((visa, index) => (
                <Card key={index} className="bg-gray-900 border-orange-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{visa.country}</h4>
                        <p className="text-orange-500">{visa.visaType}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{visa.successRate}</div>
                        <div className="text-gray-400 text-sm">Success Rate</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-gray-300 mb-2">Processing Time: <span className="text-white">{visa.processingTime}</span></div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-2">Key Requirements:</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-orange-500 rounded-lg p-8 text-black">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Important Notice</h3>
            </div>
            <p className="text-lg">
              Visa regulations change frequently. Our team stays updated with the latest requirements 
              and policies to ensure your application meets all current standards. Start your visa 
              process early to avoid any last-minute complications.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default VisaAssistance;
