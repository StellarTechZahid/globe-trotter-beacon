
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, DollarSign, CheckCircle, ArrowRight, BookOpen, Clock, Award, Globe, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Diploma = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Professional Development Scholarships",
      description: "Funding for career-focused diploma programs",
      amount: "$2,000 - $15,000",
      country: "Canada",
      university: "Seneca College",
      deadline: "March 1, 2025",
      requirements: ["High school completion", "English proficiency", "Career goals alignment"],
      coverage: "Partial tuition coverage"
    },
    {
      title: "Technical Skills Scholarships",
      description: "Support for technical and vocational diploma programs",
      amount: "$3,000 - $20,000",
      country: "Germany",
      university: "Technical Universities",
      deadline: "May 15, 2025",
      requirements: ["Technical aptitude", "Relevant experience", "Industry demand"],
      coverage: "Tuition + living allowance"
    },
    {
      title: "International Student Awards",
      description: "Dedicated funding for international diploma students",
      amount: "$1,500 - $12,000",
      country: "Australia",
      university: "TAFE Institutes",
      deadline: "February 28, 2025",
      requirements: ["International status", "Academic merit", "Financial need"],
      coverage: "Partial tuition + living support"
    },
    {
      title: "Industry Partnership Grants",
      description: "Employer-sponsored diploma programs with job guarantees",
      amount: "Full tuition + employment",
      country: "Singapore",
      university: "Polytechnics",
      deadline: "June 30, 2025",
      requirements: ["Industry commitment", "Skills assessment", "Employment agreement"],
      coverage: "Full program cost + guaranteed employment"
    },
    {
      title: "Healthcare Diploma Scholarships",
      description: "Specialized funding for healthcare and nursing programs",
      amount: "$5,000 - $25,000",
      country: "UK",
      university: "Health Institutions",
      deadline: "January 31, 2025",
      requirements: ["Healthcare interest", "Academic merit", "English proficiency"],
      coverage: "Tuition support + clinical training"
    },
    {
      title: "Technology Innovation Scholarships",
      description: "IT and digital skills diploma program funding",
      amount: "$4,000 - $18,000",
      country: "Ireland",
      university: "IT Institutes",
      deadline: "April 15, 2025",
      requirements: ["Technology aptitude", "Innovation potential", "Project portfolio"],
      coverage: "Program fees + equipment"
    },
    {
      title: "Business Administration Scholarships",
      description: "Support for business and management diploma programs",
      amount: "$2,500 - $16,000",
      country: "New Zealand",
      university: "Polytechnic Institutes",
      deadline: "March 31, 2025",
      requirements: ["Business interest", "Leadership potential", "Academic performance"],
      coverage: "Tuition fees + study materials"
    },
    {
      title: "Creative Arts Scholarships",
      description: "Funding for creative and design diploma programs",
      amount: "$3,000 - $14,000",
      country: "Canada",
      university: "Art Colleges",
      deadline: "February 15, 2025",
      requirements: ["Creative portfolio", "Artistic talent", "Program relevance"],
      coverage: "Tuition + art supplies"
    },
    {
      title: "Engineering Technology Scholarships",
      description: "Support for engineering and technology diploma programs",
      amount: "$4,500 - $22,000",
      country: "Germany",
      university: "Technical Institutes",
      deadline: "May 31, 2025",
      requirements: ["Technical background", "Mathematical skills", "German language"],
      coverage: "Full program cost + internship support"
    }
  ];

  const countries = ['all', ...new Set(scholarships.map(s => s.country))];

  const filteredScholarships = useMemo(() => {
    return scholarships.filter(scholarship => 
      selectedCountry === 'all' || scholarship.country === selectedCountry
    );
  }, [selectedCountry]);

  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentScholarships = filteredScholarships.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Diploma Scholarships</h1>
            <p className="text-xl">Fast-track your career with practical education funding</p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-orange-500" />
              <span className="text-white font-medium">Filter by Country:</span>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[200px] bg-black border-orange-500 text-white">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="bg-black border-orange-500">
                  <SelectItem value="all" className="text-white">All Countries</SelectItem>
                  {countries.filter(c => c !== 'all').map(country => (
                    <SelectItem key={country} value={country} className="text-white">
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-white">
              Showing {currentScholarships.length} of {filteredScholarships.length} scholarships
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {currentScholarships.map((scholarship, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-orange-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{scholarship.title}</h3>
                    <p className="text-gray-300 mb-2">{scholarship.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-orange-500" />
                      <span className="text-white font-medium">{scholarship.country}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{scholarship.university}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">{scholarship.amount}</div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {scholarship.deadline}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="bg-black rounded-lg p-4 mb-4">
                    <p className="text-white font-medium mb-2">Coverage:</p>
                    <p className="text-gray-300">{scholarship.coverage}</p>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-orange-500 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {scholarship.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black w-full"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-orange-500 hover:text-black'} text-white border-orange-500`}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        onClick={() => handlePageChange(i + 1)}
                        isActive={currentPage === i + 1}
                        className={`cursor-pointer ${currentPage === i + 1 ? 'bg-orange-500 text-black' : 'text-white hover:bg-orange-500 hover:text-black'} border-orange-500`}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-orange-500 hover:text-black'} text-white border-orange-500`}
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

export default Diploma;
