
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, DollarSign, GraduationCap, Globe, Award } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const PartiallyFunded = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const scholarshipsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const allScholarships = [
    {
      id: 1,
      title: "Merit-Based Excellence Scholarship - University of Toronto",
      amount: "CAD $15,000",
      coverage: "50% Tuition Coverage",
      country: "Canada",
      deadline: "March 15, 2024",
      eligibility: "GPA 3.7+, International Students",
      description: "Partial funding for outstanding international students pursuing undergraduate and graduate programs at University of Toronto.",
      university: "University of Toronto",
      level: "Undergraduate & Graduate",
      duration: "Up to 4 years"
    },
    {
      id: 2,
      title: "International Student Scholarship - University of Melbourne",
      amount: "AUD $20,000",
      coverage: "40% Tuition Coverage",
      country: "Australia",
      deadline: "April 30, 2024",
      eligibility: "Academic Excellence, Leadership",
      description: "Partial scholarship for international students demonstrating academic excellence and leadership potential.",
      university: "University of Melbourne",
      level: "All Levels",
      duration: "Program Duration"
    }
    // Add more scholarships...
  ];

  // Generate more scholarships to reach 60 total
  for (let i = 3; i <= 60; i++) {
    allScholarships.push({
      id: i,
      title: `International Merit Scholarship ${i}`,
      amount: `$${10000 + (i * 500)}`,
      coverage: `${30 + (i % 50)}% Tuition Coverage`,
      country: ["USA", "UK", "Canada", "Australia", "Germany"][i % 5],
      deadline: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2024`,
      eligibility: "Academic Excellence, International Students",
      description: `Partial funding opportunity for international students pursuing higher education with demonstrated academic merit.`,
      university: `University ${i}`,
      level: ["Undergraduate", "Graduate", "PhD"][i % 3],
      duration: `${1 + (i % 4)} years`
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Partially Funded Scholarships</h1>
            <p className="text-xl mb-6">Discover partial funding opportunities to reduce your education costs</p>
            <p className="text-lg opacity-90">Merit-based scholarships covering 30-80% of tuition fees</p>
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-500">Available Scholarships</h2>
            <p className="text-gray-300">Showing {startIndex + 1}-{Math.min(startIndex + scholarshipsPerPage, allScholarships.length)} of {allScholarships.length} scholarships</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {scholarship.country}
                    </span>
                    <span className="text-blue-400 font-bold text-lg">{scholarship.amount}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {scholarship.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>{scholarship.university}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{scholarship.coverage}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Deadline: {scholarship.deadline}</span>
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

export default PartiallyFunded;
