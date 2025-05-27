
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Scholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarshipTypes = [
    {
      icon: Award,
      title: "Fully Funded Scholarships",
      description: "Complete financial coverage including tuition, living expenses, and travel costs",
      amount: "Up to $200,000",
      link: "/scholarship/fully-funded"
    },
    {
      icon: DollarSign,
      title: "Partially Funded Scholarships",
      description: "Partial financial assistance covering tuition or living expenses",
      amount: "Up to $100,000",
      link: "/scholarship/partially-funded"
    },
    {
      icon: Globe,
      title: "European Scholarships",
      description: "Exclusive opportunities in European universities and institutions",
      amount: "Up to €150,000",
      link: "/scholarship/european-countries"
    },
    {
      icon: Users,
      title: "Regional Scholarships",
      description: "Targeted funding for Central Asian and North American institutions",
      amount: "Varies",
      link: "/scholarship/central-asian-countries"
    }
  ];

  const stats = [
    { number: "960+", label: "Scholarships Awarded", description: "Total scholarships secured for our students" },
    { number: "$50M+", label: "Funding Secured", description: "Total scholarship amount awarded" },
    { number: "95%", label: "Success Rate", description: "Students who receive funding with our help" },
    { number: "180+", label: "Partner Universities", description: "Institutions offering exclusive scholarships" }
  ];

  const benefits = [
    "Personalized scholarship matching",
    "Application essay review and optimization",
    "Interview preparation and coaching",
    "Document verification and formatting",
    "Deadline management and tracking",
    "Post-award guidance and support"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Scholarships</h1>
            <p className="text-xl mb-8">Unlock funding opportunities for your international education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              Book Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Scholarship Opportunities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore various scholarship options tailored to your academic goals and financial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipTypes.map((scholarship, index) => {
              const IconComponent = scholarship.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-8 border border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{scholarship.title}</h3>
                      <p className="text-gray-300 mb-4">{scholarship.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-500 font-bold text-lg">{scholarship.amount}</span>
                        <Link to={scholarship.link}>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                            Learn More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">How We Help You Secure Scholarships</h2>
              <p className="text-xl text-gray-300">
                Our comprehensive approach maximizes your chances of receiving funding
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Scholarship Process</h2>
            <p className="text-xl text-gray-300">Step-by-step guidance to scholarship success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Assessment", desc: "Evaluate your profile and identify suitable scholarships" },
              { step: "2", title: "Preparation", desc: "Prepare strong applications with compelling essays" },
              { step: "3", title: "Application", desc: "Submit applications before deadlines with proper documentation" },
              { step: "4", title: "Success", desc: "Celebrate your scholarship award and plan your studies" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Apply for Scholarships?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Let our experts help you find and secure the perfect scholarship for your education abroad
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

export default Scholarship;
