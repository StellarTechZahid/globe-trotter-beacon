
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Briefcase, FileText, Users, TrendingUp, Search, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const JobSearchGuidance = () => {
  const services = [
    {
      title: "Resume & CV Building",
      description: "Professional resume crafting for international markets",
      icon: <FileText className="h-8 w-8" />,
      features: ["ATS-Optimized Resume", "Cover Letter Writing", "LinkedIn Profile", "Portfolio Development"]
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive interview coaching and practice",
      icon: <Users className="h-8 w-8" />,
      features: ["Mock Interviews", "Technical Prep", "Behavioral Questions", "Salary Negotiation"]
    },
    {
      title: "Job Search Strategy",
      description: "Strategic approach to finding the right opportunities",
      icon: <Target className="h-8 w-8" />,
      features: ["Market Research", "Company Analysis", "Application Strategy", "Timeline Planning"]
    },
    {
      title: "Networking Support",
      description: "Building professional networks in your field",
      icon: <Globe className="h-8 w-8" />,
      features: ["Industry Events", "Professional Meetups", "Alumni Connections", "Mentorship Programs"]
    }
  ];

  const jobMarkets = [
    {
      country: "United States",
      opportunities: "Technology, Finance, Healthcare",
      workVisa: "OPT, H1-B",
      avgSalary: "$70,000-$120,000"
    },
    {
      country: "Canada",
      opportunities: "Engineering, IT, Healthcare",
      workVisa: "PGWP, Express Entry",
      avgSalary: "CAD 60,000-100,000"
    },
    {
      country: "United Kingdom",
      opportunities: "Finance, Consulting, Tech",
      workVisa: "Graduate Route",
      avgSalary: "£35,000-£55,000"
    },
    {
      country: "Australia",
      opportunities: "Mining, Healthcare, Education",
      workVisa: "Graduate Work Stream",
      avgSalary: "AUD 70,000-110,000"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Job Search Guidance</h1>
            <p className="text-xl">Expert career support to launch your international career</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Launch Your Global Career</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Transitioning from student to professional in a new country can be challenging. Our comprehensive 
              job search guidance equips you with the tools, strategies, and confidence needed to secure your 
              dream job. From resume optimization to interview mastery, we'll help you stand out in the 
              competitive job market.
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
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Global Job Market Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {jobMarkets.map((market, index) => (
                <div key={index} className="bg-black rounded-lg p-6 border border-orange-500">
                  <h4 className="text-xl font-bold text-white mb-4">{market.country}</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-orange-500 font-semibold">Top Opportunities: </span>
                      <span className="text-gray-300">{market.opportunities}</span>
                    </div>
                    <div>
                      <span className="text-orange-500 font-semibold">Work Visa: </span>
                      <span className="text-gray-300">{market.workVisa}</span>
                    </div>
                    <div>
                      <span className="text-orange-500 font-semibold">Average Salary: </span>
                      <span className="text-gray-300">{market.avgSalary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">Our Success Process</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Career Assessment", icon: <Search className="h-6 w-6" /> },
                { step: "2", title: "Skill Development", icon: <TrendingUp className="h-6 w-6" /> },
                { step: "3", title: "Application Strategy", icon: <Target className="h-6 w-6" /> },
                { step: "4", title: "Interview Mastery", icon: <Users className="h-6 w-6" /> },
                { step: "5", title: "Job Placement", icon: <Award className="h-6 w-6" /> }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-black font-bold text-lg">{step.step}</div>
                  </div>
                  <div className="mb-2">{step.icon}</div>
                  <h4 className="text-white font-bold">{step.title}</h4>
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

export default JobSearchGuidance;
