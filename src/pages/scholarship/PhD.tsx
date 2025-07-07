import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Calendar, DollarSign, CheckCircle, ArrowRight, BookOpen, Search, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhD = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Fully Funded PhD Fellowships",
      description: "Complete funding including tuition, stipend, and research expenses",
      amount: "Full funding + $20,000-40,000 stipend",
      countries: ["USA", "UK", "Canada", "Australia", "Germany"],
      requirements: ["Master's degree", "Research proposal", "Supervisor agreement", "Publications preferred"]
    },
    {
      title: "Research Council Scholarships",
      description: "Government-funded doctoral research programs",
      amount: "Full tuition + living allowance",
      countries: ["UK", "Canada", "Australia", "New Zealand"],
      requirements: ["Academic excellence", "Research experience", "Citizenship/residency requirements"]
    },
    {
      title: "University-specific PhD Grants",
      description: "Institutional funding for doctoral students",
      amount: "$15,000 - $45,000 per year",
      countries: ["USA", "UK", "Germany", "Netherlands", "Sweden"],
      requirements: ["Admission to PhD program", "Research potential", "Academic merit"]
    },
    {
      title: "Industry-sponsored Doctorates",
      description: "PhD funding from industry partners and corporations",
      amount: "Full funding + industry placement",
      countries: ["Multiple countries"],
      requirements: ["Relevant field alignment", "Industry partnership", "Commercial potential"]
    }
  ];

  const researchAreas = [
    "Engineering and Technology",
    "Life Sciences and Medicine",
    "Physical Sciences",
    "Social Sciences and Humanities",
    "Computer Science and AI",
    "Environmental Sciences",
    "Business and Economics",
    "Education and Psychology"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">PhD Scholarships</h1>
            <p className="text-xl">Fund your doctoral research and academic career</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Doctoral Research Funding</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Pursue your PhD with comprehensive funding opportunities. From fully funded fellowships to 
                research assistantships, find the financial support you need for your doctoral journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <Search className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Research Excellence</h3>
                <p className="text-gray-300">Funding for cutting-edge research projects</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Academic Merit</h3>
                <p className="text-gray-300">Recognition of academic achievements and potential</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Mentorship</h3>
                <p className="text-gray-300">Guidance from leading researchers and academics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">PhD Funding Opportunities</h2>
            
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

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Popular Research Areas</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg border border-orange-500">
                  <BookOpen className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <p className="text-gray-300 font-medium">{area}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">PhD Application Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-white font-semibold">Research Phase (12-18 months before)</p>
                    <p className="text-gray-300">Identify research interests, potential supervisors, and funding opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="text-white font-semibold">Preparation Phase (6-12 months before)</p>
                    <p className="text-gray-300">Develop research proposal, contact supervisors, prepare application materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="text-white font-semibold">Application Phase (6-12 months before)</p>
                    <p className="text-gray-300">Submit applications, apply for scholarships, prepare for interviews</p>
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
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your PhD Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Get expert guidance on PhD applications and funding opportunities
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Begin Your Research Career
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhD;