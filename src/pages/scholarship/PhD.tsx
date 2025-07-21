
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Users, DollarSign, CheckCircle, ArrowRight, BookOpen, Search, Award, Globe, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const PhD = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Fully Funded PhD Fellowships",
      description: "Complete funding including tuition, stipend, and research expenses",
      amount: "$25,000-40,000/year",
      country: "USA",
      university: "Stanford University",
      deadline: "December 15, 2024",
      requirements: ["Master's degree", "Research proposal", "Supervisor agreement"],
      coverage: "Full tuition + stipend + research allowance"
    },
    {
      title: "Gates Cambridge Scholarships",
      description: "Prestigious full-cost scholarships for outstanding applicants",
      amount: "Full funding",
      country: "UK",
      university: "University of Cambridge",
      deadline: "December 5, 2024",
      requirements: ["Academic excellence", "Leadership potential", "Commitment to service"],
      coverage: "Full tuition + living allowance + travel"
    },
    {
      title: "Vanier Canada Graduate Scholarships",
      description: "Attract and retain world-class doctoral students",
      amount: "$50,000/year",
      country: "Canada",
      university: "Canadian Universities",
      deadline: "November 1, 2024",
      requirements: ["PhD program admission", "Research excellence", "Leadership skills"],
      coverage: "Annual stipend for 3 years"
    },
    {
      title: "Australian Government Research Training Program",
      description: "Support for domestic and international research students",
      amount: "$28,000/year",
      country: "Australia",
      university: "Australian Universities",
      deadline: "October 31, 2024",
      requirements: ["Research proposal", "Academic merit", "Supervisor support"],
      coverage: "Stipend + tuition fees + health cover"
    },
    {
      title: "DAAD Doctoral Scholarships",
      description: "German academic exchange service doctoral funding",
      amount: "€1,400/month",
      country: "Germany",
      university: "German Universities",
      deadline: "November 15, 2024",
      requirements: ["Master's degree", "Research proposal", "German language"],
      coverage: "Monthly stipend + travel + insurance"
    },
    {
      title: "Swiss National Science Foundation",
      description: "Doc.CH scholarships for doctoral students",
      amount: "CHF 47,000/year",
      country: "Switzerland",
      university: "Swiss Universities",
      deadline: "April 1, 2025",
      requirements: ["Research excellence", "Innovative project", "Supervisor support"],
      coverage: "Annual salary + research costs"
    },
    {
      title: "Marie Skłodowska-Curie Actions",
      description: "European Union doctoral training networks",
      amount: "€4,000/month",
      country: "Europe",
      university: "European Universities",
      deadline: "Various deadlines",
      requirements: ["Research proposal", "Mobility requirement", "English proficiency"],
      coverage: "Monthly allowance + training + travel"
    },
    {
      title: "President's PhD Scholarships",
      description: "Imperial College London's most prestigious award",
      amount: "£20,000/year",
      country: "UK",
      university: "Imperial College London",
      deadline: "January 8, 2025",
      requirements: ["Outstanding academic record", "Research potential", "Innovation"],
      coverage: "Tuition fees + living allowance"
    },
    {
      title: "Japan Society for the Promotion of Science",
      description: "JSPS fellowships for international researchers",
      amount: "¥362,000/month",
      country: "Japan",
      university: "Japanese Universities",
      deadline: "June 1, 2025",
      requirements: ["PhD program admission", "Research plan", "Language skills"],
      coverage: "Monthly stipend + research allowance"
    },
    {
      title: "Singapore International Graduate Award",
      description: "Joint initiative by A*STAR, NTU, NUS, and SUTD",
      amount: "S$2,000/month",
      country: "Singapore",
      university: "Singapore Universities",
      deadline: "December 1, 2024",
      requirements: ["Good honors degree", "Research interest", "English proficiency"],
      coverage: "Monthly stipend + tuition + travel"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">PhD Scholarships</h1>
            <p className="text-xl">Fund your doctoral research and academic career</p>
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

export default PhD;
