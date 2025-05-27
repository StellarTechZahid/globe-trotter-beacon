
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Video, Clock, Users, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VirtualConsulting = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const features = [
    {
      icon: Video,
      title: "HD Video Consultation",
      description: "Crystal clear video calls with our expert counselors from anywhere in the world"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, available 24/7 across different time zones"
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Certified education consultants with 10+ years of international education experience"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with us from anywhere - no geographical barriers to quality education guidance"
    }
  ];

  const benefits = [
    "One-on-one personalized guidance",
    "Document review and feedback",
    "University shortlisting assistance",
    "Application strategy planning",
    "Scholarship opportunity identification",
    "Visa guidance and preparation",
    "Pre-departure briefing",
    "Post-arrival support"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      country: "India",
      university: "University of Toronto",
      text: "The virtual consultation was amazing! I got admission to my dream university without leaving my home.",
      rating: 5
    },
    {
      name: "Maria Santos",
      country: "Philippines",
      university: "University of Melbourne",
      text: "Professional service with personalized attention. Highly recommend their virtual consulting.",
      rating: 5
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Virtual Consulting</h1>
            <p className="text-xl mb-8">Expert guidance from the comfort of your home</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              Book Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Why Choose Virtual Consulting?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get world-class education consulting from anywhere in the world with our advanced virtual platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center hover:border-orange-400 transition-all duration-300">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">What You Get</h2>
              <p className="text-xl text-gray-300">
                Comprehensive support for your study abroad journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">How It Works</h2>
            <p className="text-xl text-gray-300">Simple steps to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Book Your Session</h3>
              <p className="text-gray-300">Schedule a convenient time for your virtual consultation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Connect Online</h3>
              <p className="text-gray-300">Join the video call with our expert counselor</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Get Guidance</h3>
              <p className="text-gray-300">Receive personalized advice and action plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300">What our virtual consulting clients say</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black rounded-lg p-6 border border-orange-500">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">From {testimonial.country}</p>
                  <p className="text-orange-500 text-sm">Now at {testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Book your free virtual consultation today and take the first step towards your dream education
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            Book Free Consultation Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualConsulting;
