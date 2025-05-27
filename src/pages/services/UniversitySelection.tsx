
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Search, CheckCircle, Star, Globe, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UniversitySelection = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const features = [
    {
      icon: Search,
      title: "Comprehensive University Database",
      description: "Access to 10,000+ universities worldwide with detailed program information"
    },
    {
      icon: Globe,
      title: "Global Rankings Analysis",
      description: "Expert analysis of QS, THE, and other major university ranking systems"
    },
    {
      icon: Award,
      title: "Program-Specific Matching",
      description: "Find universities that excel in your specific field of study"
    },
    {
      icon: Users,
      title: "Personalized Recommendations",
      description: "Tailored university suggestions based on your profile and preferences"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Profile Assessment",
      description: "Comprehensive evaluation of your academic background, test scores, and career goals"
    },
    {
      step: "2", 
      title: "University Research",
      description: "In-depth research of universities matching your criteria across multiple countries"
    },
    {
      step: "3",
      title: "Shortlisting",
      description: "Creation of a balanced list with reach, target, and safety universities"
    },
    {
      step: "4",
      title: "Final Selection",
      description: "Detailed comparison and final selection with backup options"
    }
  ];

  const benefits = [
    "Save 100+ hours of research time",
    "Avoid costly application mistakes",
    "Maximize scholarship opportunities",
    "Get insider knowledge about universities",
    "Access to university admission statistics",
    "Personalized university visit planning"
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      from: "Delhi, India",
      university: "Stanford University",
      program: "MS Computer Science",
      result: "Accepted with $50,000 scholarship"
    },
    {
      name: "Ahmed Hassan",
      from: "Cairo, Egypt", 
      university: "University of Oxford",
      program: "PhD Engineering",
      result: "Full funding secured"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">University Selection</h1>
            <p className="text-xl mb-8">Find the perfect university for your academic journey</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
            >
              Book Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* Why University Selection Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">Why University Selection is Critical</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Choosing the right university is one of the most important decisions of your academic career. 
              It impacts your education quality, career prospects, networking opportunities, and overall life experience. 
              Our expert guidance ensures you make an informed decision that aligns with your goals and maximizes your potential for success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Career Impact</h3>
                <p className="text-gray-300">Right university choice can increase your starting salary by 40-60%</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Network Building</h3>
                <p className="text-gray-300">Access to alumni networks that span across global industries</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Research Opportunities</h3>
                <p className="text-gray-300">Better research facilities and funding opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our University Selection Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and expertise to help you find your perfect academic match
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
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Selection Process</h2>
            <p className="text-xl text-gray-300">Systematic approach to finding your ideal university</p>
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
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Benefits of Our Service</h2>
              <p className="text-xl text-gray-300">
                What you gain by working with our university selection experts
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

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300">Students who found their perfect university match</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
                <p className="text-gray-400 text-sm mb-2">From {story.from}</p>
                <p className="text-orange-500 font-semibold mb-2">{story.university}</p>
                <p className="text-gray-300 mb-2">{story.program}</p>
                <p className="text-green-400 font-semibold">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Find Your Perfect University?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Let our experts help you discover universities that align with your academic goals and career aspirations
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            Book Free Consultation Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversitySelection;
