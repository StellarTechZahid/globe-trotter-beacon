
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, GraduationCap, Award, MapPin, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const NorthAmerica = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const scholarshipsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const northAmericanCountries = [
    { name: "United States", flag: "🇺🇸", programs: ["Fulbright", "Gates Millennium", "Knight-Hennessy", "Stanford", "Harvard", "MIT", "Yale"] },
    { name: "Canada", flag: "🇨🇦", programs: ["Vanier CGS", "Banting Fellowships", "Trudeau Foundation", "University of Toronto", "McGill", "UBC"] }
  ];

  // Define scholarship paths for redirection
  const scholarshipPaths = {
    "Fulbright": "/scholarships/fulbright-scholarship",
    "Vanier CGS": "/scholarships/vanier-cgs"
    // More scholarships can be added here as they're created
  };

  const allScholarships = [];

  // Generate scholarships for North American countries - increased to 96 for 8 pages
  for (let i = 1; i <= 96; i++) {
    const countryData = northAmericanCountries[i % 2];
    const program = countryData.programs[i % countryData.programs.length];
    
    allScholarships.push({
      id: i,
      title: `${program} Scholarship - ${countryData.name}`,
      amount: countryData.name === "United States" ? `$${20000 + (i * 500)}-${40000 + (i * 800)}` : `CAD $${15000 + (i * 400)}-${35000 + (i * 600)}`,
      coverage: i % 3 === 0 ? "Full Coverage" : i % 2 === 0 ? "Tuition + Living" : "Partial Coverage",
      country: countryData.name,
      deadline: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2024`,
      eligibility: "International Students, Academic Excellence",
      description: `Prestigious scholarship opportunity for international students to study in ${countryData.name} with comprehensive support and world-class education.`,
      university: `${countryData.name} Universities`,
      level: ["Undergraduate", "Graduate", "PhD", "All Levels"][i % 4],
      duration: `${1 + (i % 4)} years`,
      flag: countryData.flag,
      prestige: i % 5 === 0 ? "Most Prestigious" : i % 3 === 0 ? "Highly Prestigious" : "Prestigious",
      program: program // Add program name for path lookup
    });
  }

  // Filter scholarships by country
  const filteredScholarships = selectedCountry === 'all' 
    ? allScholarships 
    : allScholarships.filter(scholarship => scholarship.country === selectedCountry);

  const totalPages = Math.ceil(filteredScholarships.length / scholarshipsPerPage);
  const startIndex = (currentPage - 1) * scholarshipsPerPage;
  const currentScholarships = filteredScholarships.slice(startIndex, startIndex + scholarshipsPerPage);

  // Reset to page 1 when filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry]);

  const getPrestigeColor = (prestige) => {
    switch (prestige) {
      case "Most Prestigious": return "bg-yellow-500 text-black";
      case "Highly Prestigious": return "bg-orange-500 text-black";
      default: return "bg-orange-500 text-black";
    }
  };

  // Function to get the scholarship path or default to consultation form
  const getScholarshipPath = (program) => {
    return scholarshipPaths[program] || "/#consultation-form";
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
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
          <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">North American Countries</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black border-orange-500">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🇺🇸</div>
                <h3 className="text-2xl font-bold text-white mb-2">United States</h3>
                <p className="text-orange-400 font-semibold mb-4">40+ Scholarship Programs</p>
                <p className="text-gray-300">Home to world's top universities with billions in scholarship funding annually</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-orange-500">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🇨🇦</div>
                <h3 className="text-2xl font-bold text-white mb-2">Canada</h3>
                <p className="text-orange-400 font-semibold mb-4">20+ Scholarship Programs</p>
                <p className="text-gray-300">Excellent post-graduation opportunities with pathways to permanent residency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-orange-500">North American Scholarship Opportunities</h2>
            
            {/* Country Filter */}
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-orange-500" />
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-48 bg-gray-900 border-orange-500 text-white">
                  <SelectValue placeholder="Filter by Country" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-orange-500">
                  <SelectItem value="all" className="text-white hover:bg-gray-800">All Countries</SelectItem>
                  {northAmericanCountries.map((country) => (
                    <SelectItem key={country.name} value={country.name} className="text-white hover:bg-gray-800">
                      {country.flag} {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="text-gray-300 mb-8">Showing {startIndex + 1}-{Math.min(startIndex + scholarshipsPerPage, filteredScholarships.length)} of {filteredScholarships.length} scholarships</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{scholarship.flag}</span>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {scholarship.country}
                      </span>
                    </div>
                    <span className="text-orange-400 font-bold text-lg">{scholarship.amount}</span>
                  </div>

                  {scholarship.prestige && (
                    <div className="mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPrestigeColor(scholarship.prestige)} flex items-center w-fit`}>
                        <Star className="h-3 w-3 mr-1" />
                        {scholarship.prestige}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
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
                  
                  <Link 
                    to={getScholarshipPath(scholarship.program)} 
                    className="w-full block"
                  >
                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'text-orange-500 hover:text-orange-400'}
                    />
                  </PaginationItem>
                  {[...Array(Math.min(8, totalPages))].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i + 1);
                        }}
                        isActive={currentPage === i + 1}
                        className={currentPage === i + 1 ? 'bg-orange-500 text-black' : 'text-orange-500 hover:text-orange-400'}
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
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'text-orange-500 hover:text-orange-400'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NorthAmerica;
