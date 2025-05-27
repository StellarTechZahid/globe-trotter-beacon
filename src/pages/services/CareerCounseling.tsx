
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, TrendingUp, CheckCircle, Star, ArrowRight, MessageCircle, Compass, Lightbulb, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareerCounseling = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const features = [
    {
      icon: Compass,
      title: "Career Path Discovery",
      description: "Identify your ideal career path through comprehensive assessments and one-on-one guidance"
    },
    {
      icon: Target,
      title: "Goal Setting & Planning",
      description: "Create actionable career goals with clear timelines and milestones"
    },
    {
      icon: Lightbulb,
      title: "Skills Assessment",
      description: "Evaluate your current skills and identify areas for development"
    },
    {
      icon: Map,
      title: "Industry Insights",
      description: "Get insider knowledge about global job markets and industry trends"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your interests, skills, values, and career aspirations"
    },
    {
      step: "2",
      title: "Career Exploration",
      description: "Explore various career options and understand market demands globally"
    },
    {
      step: "3",
      title: "Action Planning",
      description: "Develop a strategic plan with education and skill development pathways"
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Regular follow-ups and guidance adjustments as you progress"
    }
  ];

  const benefits = [
    "Personalized career roadmap tailored to your goals",
    "Access to global job market insights",
    "Professional development planning",
    "Industry-specific guidance",
    "Networking strategies and opportunities",
    "Resume and LinkedIn profile optimization",
    "Interview preparation and coaching",
    "Salary negotiation guidance"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Career Counseling</h1>
            <p className="text-xl mb-8">Discover your ideal career path with expert guidance</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* Why Career Counseling Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">Why Career Counseling is Essential</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              In today's rapidly evolving global job market, having a clear career direction is more important than ever. 
              Our expert career counselors help you navigate the complexities of career planning, ensuring you make 
              informed decisions that align with your passions, skills, and market opportunities. Whether you're a 
              student planning your future or a professional seeking a career change, we provide the guidance you need to succeed.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Future-Ready Careers</h3>
                <p className="text-gray-300">Prepare for emerging industries and future job markets</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Opportunities</h3>
                <p className="text-gray-300">Access international career opportunities and networks</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Personalized Guidance</h3>
                <p className="text-gray-300">Tailored advice based on your unique profile and goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Career Counseling Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and expertise to help you build a successful career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-black rounded-lg p-6 border border-orange-500 text-center hover:border-orange-400 transition-all duration-300">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Counseling Process</h2>
            <p className="text-xl text-gray-300">Step-by-step approach to career success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
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
                Comprehensive support for your career development journey
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Start your application today and explore the possibilities ahead
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Consultation Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerCounseling;
