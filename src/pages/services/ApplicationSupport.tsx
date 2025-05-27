
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { FileText, CheckCircle, Users, Calendar, Award, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ApplicationSupport = () => {
  const services = [
    {
      title: "Document Review",
      description: "Comprehensive review of all application documents",
      icon: <FileText className="h-8 w-8" />,
      features: ["SOP Writing & Review", "CV/Resume Enhancement", "Letter of Recommendation", "Academic Transcripts"]
    },
    {
      title: "Application Strategy",
      description: "Strategic planning for maximum admission success",
      icon: <CheckCircle className="h-8 w-8" />,
      features: ["University Selection", "Program Matching", "Timeline Planning", "Backup Options"]
    },
    {
      title: "Submission Support",
      description: "End-to-end application submission assistance",
      icon: <Users className="h-8 w-8" />,
      features: ["Portal Management", "Document Upload", "Fee Payment", "Status Tracking"]
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive interview coaching and practice",
      icon: <Award className="h-8 w-8" />,
      features: ["Mock Interviews", "Question Bank", "Confidence Building", "Communication Skills"]
    }
  ];

  const process = [
    { step: "1", title: "Initial Assessment", description: "Evaluate your profile and goals" },
    { step: "2", title: "Strategy Development", description: "Create personalized application strategy" },
    { step: "3", title: "Document Preparation", description: "Craft compelling application materials" },
    { step: "4", title: "Application Submission", description: "Submit applications to selected universities" },
    { step: "5", title: "Follow-up", description: "Track progress and handle communications" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Application Support</h1>
            <p className="text-xl">Complete assistance for your university application journey</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Your Application Success Partner</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Navigating university applications can be overwhelming. Our comprehensive application support 
              ensures every aspect of your application is polished, compelling, and submitted on time. 
              From document preparation to interview coaching, we're with you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Our Application Process</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    {step.step}
                  </div>
                  <h4 className="text-white font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ApplicationSupport;
