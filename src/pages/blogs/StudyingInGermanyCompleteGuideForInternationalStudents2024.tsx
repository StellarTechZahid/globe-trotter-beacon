
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, MapPin, GraduationCap, BookOpen, Clock, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const StudyingInGermanyCompleteGuideForInternationalStudents2024 = () => {
  const whyGermanyReasons = [
    {
      title: "Tuition-Free Education",
      description: "Most public universities charge no tuition fees, even for international students",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "World-Class Universities",
      description: "Home to 46 universities ranked in QS World University Rankings 2024",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Strong Economy",
      description: "Europe's largest economy with excellent job prospects after graduation",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Research Excellence",
      description: "Leading country in research and innovation with cutting-edge facilities",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  const topUniversities = [
    {
      name: "Technical University of Munich (TUM)",
      ranking: "#37 QS World Ranking 2024",
      location: "Munich, Bavaria",
      strengths: ["Engineering", "Technology", "Natural Sciences", "Medicine"],
      tuition: "€150/semester"
    },
    {
      name: "Ludwig-Maximilians-Universität München",
      ranking: "#54 QS World Ranking 2024", 
      location: "Munich, Bavaria",
      strengths: ["Medicine", "Law", "Humanities", "Natural Sciences"],
      tuition: "€150/semester"
    },
    {
      name: "Heidelberg University",
      ranking: "#87 QS World Ranking 2024",
      location: "Heidelberg, Baden-Württemberg",
      strengths: ["Medicine", "Natural Sciences", "Law", "Theology"],
      tuition: "€150/semester"
    },
    {
      name: "KIT Karlsruhe Institute of Technology",
      ranking: "#119 QS World Ranking 2024",
      location: "Karlsruhe, Baden-Württemberg", 
      strengths: ["Engineering", "Natural Sciences", "Computer Science"],
      tuition: "€150/semester"
    }
  ];

  const livingCosts = [
    {
      category: "Accommodation",
      cost: "€300-700/month",
      description: "Student dormitory to private apartment"
    },
    {
      category: "Food & Groceries",
      cost: "€200-300/month",
      description: "Cooking at home and occasional dining out"
    },
    {
      category: "Transportation",
      cost: "€80-100/month",
      description: "Student discounts on public transport"
    },
    {
      category: "Health Insurance",
      cost: "€110/month",
      description: "Mandatory for all international students"
    },
    {
      category: "Miscellaneous",
      cost: "€100-200/month",
      description: "Books, clothing, entertainment, phone"
    }
  ];

  const visaRequirements = [
    "Valid passport with at least 6 months validity",
    "Letter of acceptance from German university",
    "Proof of financial resources (€11,208 per year blocked account)",
    "Health insurance coverage valid in Germany", 
    "Academic qualifications and transcripts",
    "Language proficiency certificate (German or English)",
    "Biometric photos and completed application forms"
  ];

  const scholarshipOpportunities = [
    {
      name: "DAAD Scholarships",
      value: "€850-1,200/month",
      eligibility: "Academic excellence, various programs available"
    },
    {
      name: "Deutschlandstipendium",
      value: "€300/month",
      eligibility: "High academic achievement and social engagement"
    },
    {
      name: "Heinrich Böll Foundation",
      value: "€850/month + €300 book allowance",
      eligibility: "Academic excellence and social commitment"
    },
    {
      name: "Konrad-Adenauer-Stiftung",
      value: "€850/month",
      eligibility: "Outstanding academic performance and leadership"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Studying in Germany: Complete Guide for International Students 2024</title>
        <meta name="description" content="Complete guide to studying in Germany 2024. Discover tuition-free education, top universities, living costs, visa requirements, and scholarship opportunities for international students." />
        <meta name="keywords" content="study in Germany 2024, German universities, international students Germany, Germany student visa, DAAD scholarships, tuition free education Germany, study abroad Germany" />
        <link rel="canonical" href="https://yourdomain.com/blogs/studying-in-germany-complete-guide-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Studying in Germany: Complete Guide for International Students 2024</h1>
            <p className="text-xl mb-6">Your pathway to tuition-free world-class education</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Germany Study Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Study in Germany */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-8">Why Choose Germany for Higher Education?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Germany has become one of the world's most popular study destinations, attracting over 350,000 international 
              students annually. With its combination of academic excellence, research opportunities, cultural richness, 
              and virtually free education, Germany offers an unparalleled opportunity for international students.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyGermanyReasons.map((reason, index) => (
                <Card key={index} className="bg-black border-red-500">
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {reason.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top German Universities for International Students 2024</h2>
          <div className="space-y-8">
            {topUniversities.map((university, index) => (
              <Card key={index} className="bg-gray-900 border-red-500 hover:border-red-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{university.name}</h3>
                        <span className="bg-red-500 px-3 py-1 rounded-full text-white text-sm font-semibold">
                          {university.ranking}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-300 mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-red-500" />
                        {university.location}
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Top Programs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {university.strengths.map((strength, idx) => (
                            <span key={idx} className="bg-orange-500 bg-opacity-20 text-orange-400 px-3 py-1 rounded-full text-sm">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">Tuition Fees</h4>
                      <div className="text-2xl font-bold text-green-500">{university.tuition}</div>
                      <p className="text-gray-400 text-sm">For international students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Cost of Living in Germany 2024</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {livingCosts.map((cost, index) => (
                <Card key={index} className="bg-black border-red-500">
                  <CardContent className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{cost.category}</h3>
                    <div className="text-2xl font-bold text-orange-500 mb-2">{cost.cost}</div>
                    <p className="text-gray-300 text-sm">{cost.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-6 text-center">
              <h3 className="text-white font-bold text-xl mb-2">Total Monthly Budget</h3>
              <div className="text-3xl font-bold text-red-500">€790 - €1,300</div>
              <p className="text-gray-300">Depending on lifestyle and location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Student Visa Requirements</h2>
            <Card className="bg-gray-900 border-orange-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {visaRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Opportunities */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Scholarship Opportunities in Germany</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipOpportunities.map((scholarship, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{scholarship.name}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {scholarship.value}
                    </span>
                  </div>
                  <p className="text-gray-300">{scholarship.eligibility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Application Process for German Universities</h2>
            <div className="space-y-6">
              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">Research & Choose Programs</h3>
                  </div>
                  <p className="text-gray-300 ml-12">Research universities and programs that match your interests and qualifications. Check specific admission requirements.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">Prepare Required Documents</h3>
                  </div>
                  <p className="text-gray-300 ml-12">Gather academic transcripts, language certificates, motivation letters, and other required documents.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">Submit Applications</h3>
                  </div>
                  <p className="text-gray-300 ml-12">Apply through uni-assist or directly to universities. Deadlines typically: July 15 (winter semester), January 15 (summer semester).</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">4</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">Apply for Student Visa</h3>
                  </div>
                  <p className="text-gray-300 ml-12">Once accepted, apply for student visa at German embassy/consulate in your home country.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your German Education Journey?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance for university applications, visa processes, and scholarship opportunities in Germany
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Germany Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyingInGermanyCompleteGuideForInternationalStudents2024;
