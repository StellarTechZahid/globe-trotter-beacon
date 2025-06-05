
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, DollarSign, GraduationCap, Users, CheckCircle, ArrowRight, MessageCircle, Calendar, Award, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CompleteGuideToStudyingInCanadaTopUniversitiesAndScholarships2024 = () => {
  const topUniversities = [
    {
      name: "University of Toronto",
      ranking: "#1 in Canada, #25 Globally (QS 2024)",
      location: "Toronto, Ontario",
      tuition: "CAD $58,680 - $65,250",
      programs: ["Medicine", "Engineering", "Business", "Computer Science"],
      acceptance: "43%"
    },
    {
      name: "McGill University", 
      ranking: "#2 in Canada, #30 Globally (QS 2024)",
      location: "Montreal, Quebec",
      tuition: "CAD $45,000 - $55,000",
      programs: ["Medicine", "Law", "Arts", "Science"],
      acceptance: "46%"
    },
    {
      name: "University of British Columbia",
      ranking: "#3 in Canada, #34 Globally (QS 2024)",
      location: "Vancouver, BC",
      tuition: "CAD $52,000 - $60,000", 
      programs: ["Engineering", "Medicine", "Forestry", "Business"],
      acceptance: "52%"
    }
  ];

  const scholarships = [
    {
      name: "Vanier Canada Graduate Scholarships",
      value: "CAD $50,000/year for 3 years",
      eligibility: "PhD students",
      deadline: "November 2024"
    },
    {
      name: "Ontario Graduate Scholarship",
      value: "CAD $15,000/year",
      eligibility: "Graduate students in Ontario",
      deadline: "Multiple deadlines"
    },
    {
      name: "University-specific Merit Scholarships",
      value: "CAD $5,000 - $25,000",
      eligibility: "Outstanding academic performance",
      deadline: "Varies by university"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Complete Guide to Studying in Canada: Top Universities and Scholarships 2024</title>
        <meta name="description" content="Comprehensive guide to studying in Canada 2024. Discover top Canadian universities, scholarship opportunities, admission requirements, and post-graduation work permits for international students." />
        <meta name="keywords" content="study in Canada 2024, Canadian universities, Canada scholarships, international students Canada, University of Toronto, McGill University, UBC, Canada study permit, PGWP" />
        <link rel="canonical" href="https://yourdomain.com/blogs/complete-guide-to-studying-in-canada-top-universities-and-scholarships-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Guide to Studying in Canada 2024</h1>
            <p className="text-xl mb-6">Top Universities, Scholarships, and Everything You Need to Know</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Canada Study Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Study in Canada */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Why Choose Canada for International Education?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">World-Class Education</h3>
                <p className="text-gray-400 text-sm">Top-ranked universities globally recognized</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Post-Graduation Work Permit</h3>
                <p className="text-gray-400 text-sm">Work in Canada after graduation</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Multicultural Environment</h3>
                <p className="text-gray-400 text-sm">Welcoming and diverse society</p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Affordable Education</h3>
                <p className="text-gray-400 text-sm">Lower costs compared to US/UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top Canadian Universities for International Students 2024</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {topUniversities.map((university, index) => (
              <Card key={index} className="bg-gray-900 border-red-500 hover:border-red-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{university.name}</h3>
                  <p className="text-red-500 font-semibold mb-4">{university.ranking}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {university.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <DollarSign className="h-4 w-4 mr-2 text-red-500" />
                      {university.tuition}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-red-500" />
                      Acceptance Rate: {university.acceptance}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Popular Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program, idx) => (
                        <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">Major Scholarships for International Students in Canada</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-black border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{scholarship.name}</h3>
                    <div className="bg-orange-500 px-3 py-1 rounded-full text-black text-sm font-semibold">
                      {scholarship.value}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-300">
                      <Award className="h-4 w-4 mr-2 text-orange-500" />
                      {scholarship.eligibility}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      {scholarship.deadline}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Admission Requirements for Canadian Universities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Academic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Bachelor's degree (for master's) with minimum 3.0 GPA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">High school diploma (for undergraduate) with 80%+ average</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Transcripts and academic records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Letters of recommendation (2-3)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Language & Other Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">IELTS 6.5+ or TOEFL 90+ (varies by program)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Statement of Purpose (SOP)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">GRE/GMAT (for some programs)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <span className="text-gray-300">Portfolio (for creative programs)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration and Work Permits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-8">Post-Graduation Work Permit (PGWP) and Immigration</h2>
            <p className="text-lg text-gray-300 mb-8">
              Canada offers one of the world's most generous post-graduation work permits, allowing international students 
              to work in Canada for up to 3 years after completing their studies. This provides a pathway to permanent residency 
              through various immigration programs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black p-6 rounded-lg border border-red-500">
                <h3 className="text-xl font-bold text-white mb-3">Study Permit</h3>
                <p className="text-gray-300 text-sm">Required for studies longer than 6 months. Process takes 4-12 weeks.</p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-orange-500">
                <h3 className="text-xl font-bold text-white mb-3">PGWP</h3>
                <p className="text-gray-300 text-sm">Work permit valid for length of study program (max 3 years).</p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-bold text-white mb-3">PR Pathway</h3>
                <p className="text-gray-300 text-sm">Express Entry, PNP, and other immigration programs available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Canadian Education Journey?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance for university selection, applications, and scholarship opportunities
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Canada Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompleteGuideToStudyingInCanadaTopUniversitiesAndScholarships2024;
