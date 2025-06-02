
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, GraduationCap, Globe, Award, MapPin } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const EuropeanCountries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const scholarshipsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const allScholarships = [
    {
      id: 1,
      title: "Erasmus+ Scholarship Program",
      amount: "€24,000-36,000",
      coverage: "Full Coverage + Living Allowance",
      country: "European Union",
      deadline: "February 1, 2024",
      eligibility: "All International Students",
      description: "Comprehensive funding for studying in European universities with exchange opportunities across 33 countries.",
      university: "Multiple EU Universities",
      level: "All Levels",
      duration: "1-2 years",
      flag: "🇪🇺"
    },
    {
      id: 2,
      title: "DAAD Scholarship - Germany",
      amount: "€850-1,200/month",
      coverage: "Living Expenses + Tuition",
      country: "Germany",
      deadline: "October 31, 2024",
      eligibility: "Graduate Students, Research",
      description: "German Academic Exchange Service scholarship for international students pursuing graduate studies and research.",
      university: "German Universities",
      level: "Graduate & PhD",
      duration: "1-4 years",
      flag: "🇩🇪"
    }
    // Add more European scholarships...
  ];

  // Generate more scholarships for European countries
  const europeanCountries = [
    { name: "Germany", flag: "🇩🇪", programs: ["DAAD", "Deutschlandstipendium", "Heinrich Böll"] },
    { name: "France", flag: "🇫🇷", programs: ["Eiffel Excellence", "Campus France", "Charpak"] },
    { name: "Netherlands", flag: "🇳🇱", programs: ["Holland Scholarship", "Orange Tulip", "University Scholarships"] },
    { name: "Sweden", flag: "🇸🇪", programs: ["Swedish Institute", "University Scholarships", "Visby Programme"] },
    { name: "Norway", flag: "🇳🇴", programs: ["Quota Scheme", "Norwegian Government", "University Scholarships"] },
    { name: "Switzerland", flag: "🇨🇭", programs: ["Swiss Government", "University Scholarships", "ETH Zurich"] },
    { name: "Austria", flag: "🇦🇹", programs: ["OeAD Scholarships", "University Scholarships", "Ernst Mach"] },
    { name: "Italy", flag: "🇮🇹", programs: ["Government Scholarships", "University Scholarships", "Invest Your Talent"] }
  ];

  for (let i = 3; i <= 60; i++) {
    const country = europeanCountries[i % europeanCountries.length];
    const program = country.programs[i % country.programs.length];
    
    allScholarships.push({
      id: i,
      title: `${program} Scholarship - ${country.name}`,
      amount: `€${8000 + (i * 200)}-${15000 + (i * 300)}`,
      coverage: i % 3 === 0 ? "Full Coverage" : "Partial Coverage",
      country: country.name,
      deadline: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2024`,
      eligibility: "International Students, Academic Excellence",
      description: `Prestigious scholarship opportunity for international students to study in ${country.name} with comprehensive support.`,
      university: `${country.name} Universities`,
      level: ["Undergraduate", "Graduate", "PhD", "All Levels"][i % 4],
      duration: `${1 + (i % 3)} years`,
      flag: country.flag
    });
  }

  const totalPages = Math.ceil(allScholarships.length / scholarshipsPerPage);
  const startIndex = (currentPage - 1) * scholarshipsPerPage;
  const currentScholarships = allScholarships.slice(startIndex, startIndex + scholarshipsPerPage);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">European Scholarships</h1>
            <p className="text-xl mb-6">Discover funding opportunities across European universities</p>
            <p className="text-lg opacity-90">From Erasmus+ to national scholarships - Study in Europe with financial support</p>
          </div>
        </div>
      </section>

      {/* Country Highlights */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Featured European Countries</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {europeanCountries.slice(0, 8).map((country, index) => (
              <Card key={index} className="bg-black border-blue-500 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{country.flag}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{country.name}</h3>
                  <p className="text-gray-400 text-sm">{country.programs.length} Programs Available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-500">European Scholarship Opportunities</h2>
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

export default EuropeanCountries;
