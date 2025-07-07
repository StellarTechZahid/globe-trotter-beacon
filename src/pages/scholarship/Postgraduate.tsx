import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Calendar, DollarSign, CheckCircle, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Postgraduate = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Master's Excellence Scholarships",
      description: "Merit-based funding for outstanding master's degree candidates",
      amount: "$10,000 - $50,000",
      countries: ["UK", "USA", "Canada", "Australia", "Germany"],
      requirements: ["Bachelor's degree with honors", "Research proposal", "Academic references"]
    },
    {
      title: "Research-Based Scholarships",
      description: "Funding for research-intensive master's programs",
      amount: "$15,000 - $60,000",
      countries: ["UK", "Germany", "Netherlands", "Sweden"],
      requirements: ["Research experience", "Publication record", "Supervisor agreement"]
    },
    {
      title: "Professional Development Scholarships",
      description: "Support for career-focused master's programs",
      amount: "$8,000 - $35,000",
      countries: ["USA", "Canada", "Australia", "Singapore"],
      requirements: ["Work experience", "Career goals alignment", "Professional references"]
    },
    {
      title: "International Graduate Fellowships",
      description: "Comprehensive support for international postgraduate students",
      amount: "Full tuition + stipend",
      countries: ["USA", "UK", "Canada", "Australia"],
      requirements: ["International status", "Academic excellence", "Leadership potential"]
    }
  ];

  const applicationSteps = [
    "Research programs and funding opportunities early",
    "Prepare strong academic transcripts and test scores",
    "Develop a compelling research proposal or statement of purpose",
    "Secure strong academic and professional references",
    "Meet application deadlines (typically 6-12 months in advance)",
    "Prepare for interviews if required"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Postgraduate Scholarships</h1>
            <p className="text-xl">Advanced your career with master's degree funding</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Master's Degree Scholarships</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Advance your career with postgraduate scholarships for master's programs. Whether you're pursuing 
                research-based or professional master's degrees, find funding opportunities that match your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Merit Awards</h3>
                <p className="text-gray-300">Excellence-based scholarships for top performers</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <BookOpen className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Research Funding</h3>
                <p className="text-gray-300">Support for research-intensive programs</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Professional Growth</h3>
                <p className="text-gray-300">Career-focused program support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Available Funding Options</h2>
            
            <div className="grid gap-8">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-black rounded-lg p-8 border border-orange-500">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-orange-500 mb-3">{scholarship.title}</h3>
                      <p className="text-gray-300 mb-4">{scholarship.description}</p>
                      <div className="space-y-2">
                        <p className="text-white"><strong>Amount:</strong> {scholarship.amount}</p>
                        <p className="text-white"><strong>Countries:</strong> {scholarship.countries.join(", ")}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-500 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {scholarship.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Application Process</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-900 p-4 rounded-lg border border-orange-500">
                  <div className="bg-orange-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Pursue Your Master's Degree?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Get expert guidance on postgraduate scholarships and application strategies
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Start Your Application Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Postgraduate;