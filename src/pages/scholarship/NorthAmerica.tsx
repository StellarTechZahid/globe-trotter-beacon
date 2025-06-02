
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, GraduationCap, Award, MapPin, Star } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const NorthAmerica = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const scholarshipsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const allScholarships = [
    {
      id: 1,
      title: "Fulbright Foreign Student Program - USA",
      amount: "$50,000-70,000",
      coverage: "Full Coverage + Living Expenses",
      country: "United States",
      deadline: "October 15, 2024",
      eligibility: "Graduate Students, Exceptional Merit",
      description: "The most prestigious scholarship for international students to study in the United States with full funding and cultural exchange opportunities.",
      university: "Top US Universities",
      level: "Graduate & PhD",
      duration: "1-2 years",
      flag: "🇺🇸",
      prestige: "Most Prestigious"
    },
    {
      id: 2,
      title: "Vanier Canada Graduate Scholarships",
      amount: "CAD $50,000",
      coverage: "Full Coverage for PhD",
      country: "Canada",
      deadline: "November 1, 2024",
      eligibility: "PhD Students, Research Excellence",
      description: "Canada's most prestigious scholarship for international PhD students demonstrating exceptional research potential.",
      university: "Canadian Universities",
      level: "PhD",
      duration: "3 years",
      flag: "🇨🇦",
      prestige: "Highly Prestigious"
    }
  ];

  // Generate more North American scholarships
  const northAmericanPrograms = [
    { country: "United States", flag: "🇺🇸", programs: ["Fulbright", "Gates Millennium", "Knight-Hennessy", "Stanford", "Harvard", "MIT", "Yale"] },
    { country: "Canada", flag: "🇨🇦", programs: ["Vanier CGS", "Banting Fellowships", "Trudeau Foundation", "University of Toronto", "McGill", "UBC"] }
  ];

  for (let i = 3; i <= 60; i++) {
    const countryData = northAmericanPrograms[i % 2];
    const program = countryData.programs[i % countryData.programs.length];
    
    allScholarships.push({
      id: i,
      title: `${program} Scholarship - ${countryData.country}`,
      amount: countryData.country === "United States" ? `$${20000 + (i * 500)}-${40000 + (i * 800)}` : `CAD $${15000 + (i * 400)}-${35000 + (i * 600)}`,
      coverage: i % 3 === 0 ? "Full Coverage" : i % 2 === 0 ? "Tuition + Living" : "Partial Coverage",
      country: countryData.country,
      deadline: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2024`,
      eligibility: "International Students, Academic Excellence",
      description: `Prestigious scholarship opportunity for international students to study in ${countryData.country} with comprehensive support and world-class education.`,
      university: `${countryData.country} Universities`,
      level: ["Undergraduate", "Graduate", "PhD", "All Levels"][i % 4],
      duration: `${1 + (i % 4)} years`,
      flag: countryData.flag,
      prestige: i % 5 === 0 ? "Most Prestigious" : i % 3 === 0 ? "Highly Prestigious" : "Prestigious"
    });
  }

  const totalPages = Math.ceil(allScholarships.length / scholarshipsPerPage);
  const startIndex = (currentPage - 1) * scholarshipsPerPage;
  const currentScholarships = allScholarships.slice(startIndex, startIndex + scholarshipsPerPage);

  const getPrestigeColor = (prestige) => {
    switch (prestige) {
      case "Most Prestigious": return "bg-yellow-500 text-black";
      case "Highly Prestigious": return "bg-orange-500 text-black";
      default: return "bg-blue-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">North American Scholarships</h1>
            <p className="text-xl mb-6">Prestigious funding opportunities in USA and Canada</p>
            <p className="text-lg opacity-90">From Fulbright to Vanier - Access world-class education with top scholarships</p>
          </div>
        </div>
      </section>

      {/* Country Stats */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black border-blue-500">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🇺🇸</div>
                <h3 className="text-2xl font-bold text-white mb-2">United States</h3>
                <p className="text-blue-400 font-semibold mb-4">40+ Scholarship Programs</p>
                <p className="text-gray-300">Home to world's top universities with billions in scholarship funding annually</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-red-500">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🇨🇦</div>
                <h3 className="text-2xl font-bold text-white mb-2">Canada</h3>
                <p className="text-red-400 font-semibold mb-4">20+ Scholarship Programs</p>
                <p className="text-gray-300">Excellent post-graduation opportunities with pathways to permanent residency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-500">North American Scholarship Opportunities</h2>
            <p className="text-gray-300">Showing {startIndex + 1}-{Math.min(startIndex + scholarshipsPerPage, allScholarships.length)} of {allScholarships.length} scholarships</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{scholarship.flag}</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {scholarship.country}
                      </span>
                    </div>
                    <span className="text-blue-400 font-bold text-lg">{scholarship.amount}</span>
                  </div>

                  {scholarship.prestige && (
                    <div className="mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPrestigeColor(scholarship.prestige)} flex items-center w-fit`}>
                        <Star className="h-3 w-3 mr-1" />
                        {scholarship.prestige}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {scholarship.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>{scholarship.level} • {scholarship.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{scholarship.coverage}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Deadline: {scholarship.deadline}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{scholarship.university}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToConsultation}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'text-blue-500 hover:text-blue-400'}
                  />
                </PaginationItem>
                {[...Array(Math.min(10, totalPages))].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                      isActive={currentPage === i + 1}
                      className={currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-blue-500 hover:text-blue-400'}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'text-blue-500 hover:text-blue-400'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NorthAmerica;
