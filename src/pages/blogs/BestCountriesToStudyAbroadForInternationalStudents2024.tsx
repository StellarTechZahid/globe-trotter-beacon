
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, MapPin, Star, TrendingUp, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BestCountriesToStudyAbroadForInternationalStudents2024 = () => {
  const topCountries = [
    {
      rank: 1,
      country: "United States",
      flag: "🇺🇸",
      avgCost: "$35,000-70,000",
      topUniversities: ["Harvard", "MIT", "Stanford", "Princeton"],
      strengths: ["Research Excellence", "Innovation", "Diverse Programs", "Global Recognition"],
      workPermit: "3 years STEM OPT",
      language: "English",
      popularFields: ["Technology", "Business", "Medicine", "Engineering"]
    },
    {
      rank: 2,
      country: "United Kingdom", 
      flag: "🇬🇧",
      avgCost: "$25,000-50,000",
      topUniversities: ["Oxford", "Cambridge", "Imperial", "UCL"],
      strengths: ["Academic Tradition", "Quality Education", "Cultural Diversity", "Research Focus"],
      workPermit: "2 years Graduate Route",
      language: "English",
      popularFields: ["Finance", "Law", "Arts", "Sciences"]
    },
    {
      rank: 3,
      country: "Canada",
      flag: "🇨🇦", 
      avgCost: "$20,000-40,000",
      topUniversities: ["Toronto", "UBC", "McGill", "Waterloo"],
      strengths: ["Immigration Friendly", "High Quality", "Safe Environment", "Affordable"],
      workPermit: "3 years PGWP",
      language: "English/French",
      popularFields: ["Engineering", "Computer Science", "Healthcare", "Natural Resources"]
    },
    {
      rank: 4,
      country: "Australia",
      flag: "🇦🇺",
      avgCost: "$25,000-45,000", 
      topUniversities: ["Melbourne", "ANU", "Sydney", "UNSW"],
      strengths: ["High Standards", "Research Quality", "Lifestyle", "Climate"],
      workPermit: "2-4 years PSW",
      language: "English",
      popularFields: ["Mining", "Agriculture", "Tourism", "Healthcare"]
    },
    {
      rank: 5,
      country: "Germany",
      flag: "🇩🇪",
      avgCost: "$1,000-3,000",
      topUniversities: ["TU Munich", "Heidelberg", "RWTH Aachen", "KIT"],
      strengths: ["Low Cost", "Engineering Excellence", "Industry Connections", "Central Location"],
      workPermit: "18 months job search",
      language: "German/English",
      popularFields: ["Engineering", "Automotive", "Manufacturing", "Technology"]
    },
    {
      rank: 6,
      country: "Netherlands",
      flag: "🇳🇱",
      avgCost: "$10,000-20,000",
      topUniversities: ["Delft", "Amsterdam", "Utrecht", "Leiden"],
      strengths: ["English Programs", "International Environment", "Innovation", "Quality"],
      workPermit: "1 year orientation permit",
      language: "Dutch/English", 
      popularFields: ["Technology", "Business", "Agriculture", "Arts"]
    }
  ];

  const selectionFactors = [
    {
      factor: "Cost of Education",
      description: "Consider tuition fees, living expenses, and available financial aid",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      factor: "Quality of Education",
      description: "University rankings, research opportunities, and academic reputation",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      factor: "Post-Study Opportunities",
      description: "Work permits, career prospects, and immigration pathways",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      factor: "Language Requirements",
      description: "Language of instruction and proficiency test requirements",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Best Countries to Study Abroad for International Students 2024 | Complete Rankings Guide</title>
        <meta name="description" content="Discover the best countries to study abroad in 2024. Complete guide with university rankings, costs, work permits, and career opportunities for international students worldwide." />
        <meta name="keywords" content="best countries study abroad 2024, top study destinations, international student guide, study overseas, university rankings by country, student visa countries, study abroad costs" />
        <link rel="canonical" href="https://yourdomain.com/blogs/best-countries-to-study-abroad-for-international-students-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Countries to Study Abroad for International Students 2024</h1>
            <p className="text-xl mb-6">Your comprehensive guide to choosing the perfect study destination</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Study Abroad Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500 mb-6">Why Study Abroad in 2024?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Studying abroad has become more accessible and rewarding than ever before. With over 6 million international 
              students worldwide, the global education landscape offers unprecedented opportunities for academic growth, 
              cultural exchange, and career advancement. The right destination can transform your educational journey 
              and open doors to global career opportunities.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">195+ Countries</h3>
                <p className="text-gray-400 text-sm">Study destinations worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">6M+ Students</h3>
                <p className="text-gray-400 text-sm">International student mobility</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">40,000+ Universities</h3>
                <p className="text-gray-400 text-sm">Global higher education institutions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">$2T+ Investment</h3>
                <p className="text-gray-400 text-sm">Global education spending</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Countries Ranking */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Top 6 Study Abroad Destinations 2024</h2>
          <div className="space-y-8">
            {topCountries.map((country, index) => (
              <Card key={index} className="bg-gray-900 border-green-500 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">#{country.rank}</span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-3xl">{country.flag}</span>
                              <h3 className="text-2xl font-bold text-white">{country.country}</h3>
                            </div>
                            <div className="flex items-center mt-2">
                              <MapPin className="h-4 w-4 mr-2 text-green-500" />
                              <span className="text-gray-300">Language: {country.language}</span>
                            </div>
                          </div>
                        </div>
                        <span className="bg-orange-500 px-3 py-1 rounded-full text-black text-sm font-semibold">
                          {country.avgCost}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Top Universities:</h4>
                          <div className="space-y-1">
                            {country.topUniversities.map((uni, idx) => (
                              <div key={idx} className="text-gray-300 text-sm">• {uni}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Popular Fields:</h4>
                          <div className="space-y-1">
                            {country.popularFields.map((field, idx) => (
                              <div key={idx} className="text-gray-300 text-sm">• {field}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Strengths:</h4>
                        <div className="flex flex-wrap gap-2">
                          {country.strengths.map((strength, idx) => (
                            <span key={idx} className="bg-green-500 bg-opacity-20 text-green-400 px-3 py-1 rounded-full text-sm">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                      <div className="bg-black p-4 rounded-lg border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Post-Study Work Rights</h4>
                        <p className="text-green-400 font-semibold">{country.workPermit}</p>
                      </div>
                      <div className="bg-black p-4 rounded-lg border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Why Choose {country.country}?</h4>
                        <p className="text-gray-300 text-sm">
                          {country.rank <= 3 ? (
                            "Top-tier global recognition with excellent post-study opportunities and world-class universities."
                          ) : (
                            "High-quality education with unique advantages in cost, innovation, and specialized programs."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Factors */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Key Factors to Consider When Choosing Your Study Destination</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {selectionFactors.map((factor, index) => (
              <Card key={index} className="bg-black border-green-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 p-3 rounded-full text-white">
                      {factor.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{factor.factor}</h3>
                      <p className="text-gray-300">{factor.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Quick Comparison: Top Study Destinations 2024</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead className="bg-green-500">
                <tr>
                  <th className="px-6 py-4 text-left text-black font-semibold">Country</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Average Cost</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Work Permit</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Language</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Top Strength</th>
                </tr>
              </thead>
              <tbody>
                {topCountries.slice(0, 4).map((country, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-black" : "bg-gray-800"}>
                    <td className="px-6 py-4 text-white font-medium">
                      <div className="flex items-center space-x-2">
                        <span>{country.flag}</span>
                        <span>{country.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-orange-400">{country.avgCost}</td>
                    <td className="px-6 py-4 text-green-400">{country.workPermit}</td>
                    <td className="px-6 py-4 text-gray-300">{country.language}</td>
                    <td className="px-6 py-4 text-gray-300">{country.strengths[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">Essential Tips for Study Abroad Success 2024</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Start planning 12-18 months before intended start date",
                "Research visa requirements and processing times early",
                "Apply for scholarships and financial aid opportunities",
                "Prepare for language proficiency tests (IELTS/TOEFL)",
                "Consider cost of living alongside tuition fees",
                "Look into post-study work permit opportunities",
                "Connect with alumni and current students",
                "Plan for cultural adaptation and support systems"
              ].map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-white">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Choose Your Study Abroad Destination?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get personalized guidance to select the perfect country and university for your international education journey
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Study Abroad Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestCountriesToStudyAbroadForInternationalStudents2024;
