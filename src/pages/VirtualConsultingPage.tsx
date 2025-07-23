
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Clock, Users, Globe, CheckCircle, ArrowRight, MessageCircle, Calendar, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const VirtualConsultingPage = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "HD Video Consultations",
      description: "Crystal clear video calls with our expert counselors from anywhere in the world"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, available across multiple time zones"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Counselors",
      description: "Certified education consultants with years of international experience"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Connect with students worldwide and access international education expertise"
    }
  ];

  const benefits = [
    "Personalized study abroad guidance",
    "University and program selection",
    "Application assistance",
    "Visa guidance and support",
    "Scholarship consultation",
    "Pre-departure orientation",
    "Career counseling",
    "Document verification"
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Virtual Consulting Services | Online Education Counseling | Abroad Academics</title>
        <meta name="description" content="Get expert education consulting online. Virtual consultations for study abroad, university selection, visa guidance, and more. Book your session today." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Virtual Consulting Services</h1>
            <p className="text-xl mb-6">Expert education guidance from the comfort of your home</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              <Video className="mr-2 h-5 w-5" />
              Book Virtual Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">Why Choose Virtual Consulting?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all">
                    <div className="text-blue-500">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-6">What You Get in Virtual Consultations</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={scrollToConsultation}
                className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Session
              </Button>
            </div>
            
            <div className="relative">
              <Card className="bg-gray-800 border-blue-500">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Monitor className="h-16 w-16 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                    <p className="text-gray-300 mb-6">
                      Join thousands of students who have achieved their study abroad dreams through our virtual consulting services.
                    </p>
                    <div className="bg-blue-500 bg-opacity-20 rounded-lg p-4">
                      <p className="text-blue-400 font-semibold">Available 24/7 across all time zones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Virtual Consultation Today</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Connect with our expert counselors and take the first step towards your international education journey
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Virtual Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualConsultingPage;
