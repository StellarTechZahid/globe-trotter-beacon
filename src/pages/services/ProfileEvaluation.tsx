
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, Star, ArrowRight, MessageCircle, BarChart, Trophy, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileEvaluation = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const features = [
    {
      icon: BarChart,
      title: "Academic Assessment",
      description: "Comprehensive evaluation of your academic background and achievements"
    },
    {
      icon: Trophy,
      title: "Strength Analysis",
      description: "Identify your unique strengths and competitive advantages"
    },
    {
      icon: Target,
      title: "Gap Identification",
      description: "Pinpoint areas for improvement to strengthen your profile"
    },
    {
      icon: Users,
      title: "University Matching",
      description: "Find universities that best match your profile and goals"
    }
  ];

  const evaluationAreas = [
    {
      title: "Academic Performance",
      items: ["GPA/CGPA Analysis", "Course Relevance", "Academic Progression", "Grade Trends"]
    },
    {
      title: "Test Scores",
      items: ["IELTS/TOEFL Scores", "GRE/GMAT Results", "Subject-specific Tests", "Score Improvement Potential"]
    },
    {
      title: "Work Experience",
      items: ["Professional Background", "Industry Relevance", "Leadership Roles", "Career Growth"]
    },
    {
      title: "Extracurricular Activities",
      items: ["Volunteer Work", "Sports & Hobbies", "Leadership Positions", "Community Involvement"]
    }
  ];

  const benefits = [
    "Honest assessment of admission chances",
    "Personalized improvement recommendations",
    "University shortlisting based on profile strength",
    "Scholarship opportunity identification",
    "Application strategy development",
    "Timeline planning for profile enhancement",
    "Competitive positioning analysis",
    "Alternative pathway suggestions"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Profile Evaluation</h1>
            <p className="text-xl mb-8">Get honest assessment of your academic profile and admission chances</p>
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

      {/* Why Profile Evaluation Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">Why Profile Evaluation is Crucial</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Understanding your academic profile strength is the first step toward successful university admissions. 
              Our comprehensive profile evaluation helps you understand where you stand, what universities you can 
              realistically target, and what improvements you need to make to enhance your chances of admission to 
              top-tier institutions. Don't leave your future to chance - get a professional assessment today.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Evaluation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analysis of every aspect of your academic and professional profile
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

      {/* Evaluation Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">What We Evaluate</h2>
            <p className="text-xl text-gray-300">Comprehensive assessment across all profile dimensions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {evaluationAreas.map((area, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Benefits of Profile Evaluation</h2>
              <p className="text-xl text-gray-300">
                What you gain from our comprehensive assessment
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

      {/* Sample Evaluation Report */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Sample Evaluation Report</h2>
              <p className="text-xl text-gray-300">See what you'll receive in your detailed assessment</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">Overall Score</div>
                  <div className="text-xl text-white">8.2/10</div>
                  <div className="text-gray-400">Strong Profile</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">Target Universities</div>
                  <div className="text-xl text-white">15-20</div>
                  <div className="text-gray-400">Recommended</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">Scholarship Potential</div>
                  <div className="text-xl text-white">High</div>
                  <div className="text-gray-400">Multiple Opportunities</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Academic Performance</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-orange-500">8.5/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white">Test Scores</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-orange-500">7.0/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white">Work Experience</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full w-full"></div>
                    </div>
                    <span className="text-orange-500">9.0/10</span>
                  </div>
                </div>
              </div>
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

export default ProfileEvaluation;
