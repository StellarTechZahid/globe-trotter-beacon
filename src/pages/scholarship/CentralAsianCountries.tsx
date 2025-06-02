
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, GraduationCap, Award, MapPin, Filter } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CentralAsianCountries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const scholarshipsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const centralAsianCountries = [
    { name: "Kazakhstan", flag: "🇰🇿", programs: ["Bolashak Scholarship", "Al-Farabi University", "Government Scholarships"] },
    { name: "Uzbekistan", flag: "🇺🇿", programs: ["Government Scholarships", "University Scholarships", "Development Programs"] },
    { name: "Kyrgyzstan", flag: "🇰🇬", programs: ["Government Scholarships", "University Programs", "Regional Scholarships"] },
    { name: "Tajikistan", flag: "🇹🇯", programs: ["Government Scholarships", "Educational Grants", "Development Aid"] },
    { name: "Turkmenistan", flag: "🇹🇲", programs: ["Government Programs", "University Scholarships", "Cultural Exchange"] },
    { name: "Azerbaijan", flag: "🇦🇿", programs: ["Government Scholarships", "University Programs", "Oil Fund Scholarships"] },
    { name: "Armenia", flag: "🇦🇲", programs: ["Government Scholarships", "University Programs", "Diaspora Scholarships"] },
    { name: "Georgia", flag: "🇬🇪", programs: ["Government Scholarships", "University Programs", "EU Association Programs"] }
  ];

  const allScholarships = [];

  // Generate scholarships for Central Asian countries
  for (let i = 1; i <= 60; i++) {
    const country = centralAsianCountries[i % centralAsianCountries.length];
    const program = country.programs[i % country.programs.length];
    
    allScholarships.push({
      id: i,
      title: `${program} - ${country.name}`,
      amount: `$${3000 + (i * 150)}-${8000 + (i * 200)}`,
      coverage: i % 3 === 0 ? "Full Coverage" : "Partial Coverage",
      country: country.name,
      deadline: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2024`,
      eligibility: "International Students, Regional Focus",
      description: `Scholarship opportunity for international students to study in ${country.name} with focus on regional development and cultural exchange.`,
      university: `${country.name} Universities`,
      level: ["Undergraduate", "Graduate", "PhD", "All Levels"][i % 4],
      duration: `${1 + (i % 3)} years`,
      flag: country.flag
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

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Central Asian Scholarships</h1>
            <p className="text-xl mb-6">Explore educational opportunities in Central Asia and Caucasus region</p>
            <p className="text-lg opacity-90">Regional scholarships promoting cultural exchange and development</p>
          </div>
        </div>
      </section>

      {/* Country Highlights */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">Central Asian & Caucasus Countries</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {centralAsianCountries.slice(0, 8).map((country, index) => (
              <Card key={index} className="bg-black border-green-500 hover:border-green-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{country.flag}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{country.name}</h3>
                  <p className="text-green-400 text-sm">{country.programs.length} Programs Available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-green-500">Central Asian Scholarship Opportunities</h2>
            
            {/* Country Filter */}
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-green-500" />
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-48 bg-gray-900 border-green-500 text-white">
                  <SelectValue placeholder="Filter by Country" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-green-500">
                  <SelectItem value="all" className="text-white hover:bg-gray-800">All Countries</SelectItem>
                  {centralAsianCountries.map((country) => (
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
              <Card key={scholarship.id} className="bg-gray-900 border-green-500 hover:border-green-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{scholarship.flag}</span>
                      <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {scholarship.country}
                      </span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">{scholarship.amount}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
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
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'text-green-500 hover:text-green-400'}
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
                        className={currentPage === i + 1 ? 'bg-green-500 text-black' : 'text-green-500 hover:text-green-400'}
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
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'text-green-500 hover:text-green-400'}
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

export default CentralAsianCountries;
