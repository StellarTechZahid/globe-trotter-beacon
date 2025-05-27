
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { DollarSign, Award, Search, FileText, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ScholarshipConsulting = () => {
  const scholarshipTypes = [
    {
      title: "Merit-Based Scholarships",
      description: "Academic excellence and achievements",
      icon: <Award className="h-8 w-8" />,
      amount: "Up to 100%",
      eligibility: "High GPA, Test Scores, Achievements"
    },
    {
      title: "Need-Based Scholarships",
      description: "Financial assistance based on need",
      icon: <DollarSign className="h-8 w-8" />,
      amount: "Varies",
      eligibility: "Financial Need Documentation"
    },
    {
      title: "Research Scholarships",
      description: "For research and PhD programs",
      icon: <Search className="h-8 w-8" />,
      amount: "Full Funding",
      eligibility: "Research Proposal, Publications"
    },
    {
      title: "Country-Specific Scholarships",
      description: "Government and institutional funding",
      icon: <Globe className="h-8 w-8" />,
      amount: "Varies",
      eligibility: "Country Requirements"
    }
  ];

  const services = [
    "Scholarship database access with 5000+ opportunities",
    "Personalized scholarship matching based on your profile",
    "Application essay writing and review",
    "Financial documentation guidance",
    "Interview preparation for scholarship panels",
    "Deadline tracking and application management"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Scholarship Consulting</h1>
            <p className="text-xl">Unlock funding opportunities for your international education</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Maximize Your Scholarship Potential</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Don't let financial constraints hold you back from your dreams. Our scholarship consulting 
              services help you identify, apply for, and secure funding opportunities that match your 
              profile and aspirations. We've helped students secure over $50 million in scholarships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {scholarshipTypes.map((scholarship, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {scholarship.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{scholarship.title}</h3>
                  <p className="text-gray-300 mb-4">{scholarship.description}</p>
                  <div className="space-y-2">
                    <div className="text-orange-500 font-bold">Funding: {scholarship.amount}</div>
                    <div className="text-gray-400 text-sm">{scholarship.eligibility}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Our Scholarship Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <TrendingUp className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h4 className="text-2xl font-bold text-white mb-6">Success Metrics</h4>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">$50M+</div>
                  <div className="text-gray-300">Total Scholarships Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">2000+</div>
                  <div className="text-gray-300">Students Funded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ScholarshipConsulting;
