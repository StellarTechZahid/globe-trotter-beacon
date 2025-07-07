import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Calendar, DollarSign, CheckCircle, ArrowRight, BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Undergraduate = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Merit-Based Undergraduate Scholarships",
      description: "Academic excellence scholarships for high-achieving students",
      amount: "$5,000 - $25,000",
      countries: ["USA", "UK", "Canada", "Australia"],
      requirements: ["High GPA (3.5+)", "SAT/ACT scores", "Leadership experience"]
    },
    {
      title: "International Student Scholarships",
      description: "Dedicated funding for international undergraduate students",
      amount: "$10,000 - $40,000",
      countries: ["USA", "UK", "Germany", "Netherlands"],
      requirements: ["International status", "English proficiency", "Academic merit"]
    },
    {
      title: "Need-Based Financial Aid",
      description: "Financial assistance based on family income and circumstances",
      amount: "Up to full tuition",
      countries: ["USA", "Canada", "UK"],
      requirements: ["Financial need demonstration", "FAFSA application", "Academic standing"]
    },
    {
      title: "Subject-Specific Scholarships",
      description: "Scholarships for specific fields of study",
      amount: "$3,000 - $20,000",
      countries: ["Multiple countries"],
      requirements: ["Declared major", "Academic performance", "Career goals"]
    }
  ];

  const eligibilityTips = [
    "Maintain a strong GPA throughout high school",
    "Participate in extracurricular activities and leadership roles",
    "Complete standardized tests (SAT, ACT, IELTS, TOEFL)",
    "Write compelling personal statements and essays",
    "Obtain strong letters of recommendation",
    "Apply early to increase chances of funding"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Undergraduate Scholarships</h1>
            <p className="text-xl">Start your higher education journey with financial support</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Undergraduate Scholarship Opportunities</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover funding opportunities for your bachelor's degree programs worldwide. From merit-based 
                scholarships to need-based financial aid, we help you find the right funding for your undergraduate education.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <GraduationCap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Academic Excellence</h3>
                <p className="text-gray-300">Merit-based scholarships for top-performing students</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <DollarSign className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Financial Support</h3>
                <p className="text-gray-300">Need-based aid to make education affordable</p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Global Opportunities</h3>
                <p className="text-gray-300">Study abroad with international scholarships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Available Scholarship Types</h2>
            
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

      {/* Eligibility Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Eligibility Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {eligibilityTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-900 p-4 rounded-lg border border-orange-500">
                  <BookOpen className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Apply for Undergraduate Scholarships?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Get personalized guidance on finding and applying for undergraduate scholarships
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <Users className="mr-2 h-5 w-5" />
            Get Scholarship Guidance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Undergraduate;