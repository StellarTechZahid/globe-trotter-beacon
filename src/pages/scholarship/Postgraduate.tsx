
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, DollarSign, CheckCircle, ArrowRight, BookOpen, Globe, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Postgraduate = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Master's Excellence Scholarships",
      description: "Merit-based funding for outstanding postgraduate students",
      amount: "$20,000 - $50,000",
      country: "USA",
      university: "MIT",
      deadline: "January 15, 2025",
      requirements: ["Bachelor's degree", "High GPA (3.7+)", "Research experience"],
      coverage: "Partial to full tuition coverage"
    },
    {
      title: "Chevening Scholarships",
      description: "UK government's global scholarship programme",
      amount: "Full funding",
      country: "UK",
      university: "Various UK Universities",
      deadline: "November 7, 2024",
      requirements: ["Leadership potential", "Work experience", "English proficiency"],
      coverage: "Full tuition + living expenses + travel"
    },
    {
      title: "Erasmus Mundus Joint Master Degrees",
      description: "European Union funded international study programmes",
      amount: "€1,400/month + tuition",
      country: "Europe",
      university: "Multiple European Universities",
      deadline: "Various deadlines",
      requirements: ["Bachelor's degree", "Language requirements", "Academic excellence"],
      coverage: "Monthly allowance + tuition coverage"
    },
    {
      title: "Canada Graduate Scholarships",
      description: "Support for high-calibre students in graduate studies",
      amount: "$17,500/year",
      country: "Canada",
      university: "Canadian Universities",
      deadline: "December 1, 2024",
      requirements: ["Canadian citizenship/PR", "Academic excellence", "Research potential"],
      coverage: "Annual stipend for 1 year"
    },
    {
      title: "Australia Awards Scholarships",
      description: "Long-term development scholarships for priority countries",
      amount: "Full funding",
      country: "Australia",
      university: "Australian Universities",
      deadline: "April 30, 2025",
      requirements: ["Country eligibility", "Work experience", "Leadership skills"],
      coverage: "Full tuition + living allowance + travel"
    },
    {
      title: "DAAD Scholarships for Graduate Students",
      description: "German academic exchange service scholarships",
      amount: "€1,200/month",
      country: "Germany",
      university: "German Universities",
      deadline: "October 31, 2024",
      requirements: ["Bachelor's degree", "German language", "Academic merit"],
      coverage: "Monthly stipend + tuition waiver"
    },
    {
      title: "Swedish Institute Scholarships",
      description: "Scholarships for global professionals",
      amount: "SEK 9,000/month",
      country: "Sweden",
      university: "Swedish Universities",
      deadline: "February 10, 2025",
      requirements: ["Leadership experience", "Academic excellence", "Career goals"],
      coverage: "Monthly allowance + tuition fees"
    },
    {
      title: "New Zealand Development Scholarships",
      description: "Contribute to development of Pacific and developing countries",
      amount: "Full funding",
      country: "New Zealand",
      university: "New Zealand Universities",
      deadline: "March 31, 2025",
      requirements: ["Country eligibility", "Development focus", "English proficiency"],
      coverage: "Full tuition + living costs + travel"
    },
    {
      title: "Netherlands Fellowship Programmes",
      description: "Fellowships for professionals from developing countries",
      amount: "€2,000/month",
      country: "Netherlands",
      university: "Dutch Universities",
      deadline: "February 1, 2025",
      requirements: ["Professional experience", "Development relevance", "English proficiency"],
      coverage: "Monthly allowance + tuition + travel"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Postgraduate Scholarships</h1>
            <p className="text-xl">Advanced your career with master's degree funding</p>
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

export default Postgraduate;
