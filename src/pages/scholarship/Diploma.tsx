
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarship/ScholarshipCard';
import ScholarshipFilters from '@/components/scholarship/ScholarshipFilters';
import ScholarshipHero from '@/components/scholarship/ScholarshipHero';
import { BookOpen } from 'lucide-react';
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
      description: "Funding for career-focused diploma programs in various professional fields",
      amount: "$2,000 - $15,000",
      country: "Canada",
      university: "Seneca College",
      deadline: "March 1, 2025",
      requirements: ["High school completion", "English proficiency", "Career goals alignment", "Work experience"],
      coverage: "Partial tuition coverage + career counseling"
    },
    {
      title: "Technical Skills Scholarships",
      description: "Support for technical and vocational diploma programs in high-demand industries",
      amount: "$3,000 - $20,000",
      country: "Germany",
      university: "Technical Universities",
      deadline: "May 15, 2025",
      requirements: ["Technical aptitude", "Relevant experience", "Industry demand", "Language proficiency"],
      coverage: "Tuition + living allowance + equipment"
    },
    {
      title: "International Student Awards",
      description: "Dedicated funding for international diploma students pursuing career-oriented programs",
      amount: "$1,500 - $12,000",
      country: "Australia",
      university: "TAFE Institutes",
      deadline: "February 28, 2025",
      requirements: ["International status", "Academic merit", "Financial need", "Career focus"],
      coverage: "Partial tuition + living support + job placement assistance"
    },
    {
      title: "Industry Partnership Grants",
      description: "Employer-sponsored diploma programs with guaranteed job placement opportunities",
      amount: "Full tuition + employment",
      country: "Singapore",
      university: "Polytechnics",
      deadline: "June 30, 2025",
      requirements: ["Industry commitment", "Skills assessment", "Employment agreement", "Performance standards"],
      coverage: "Full program cost + guaranteed employment + career development"
    },
    {
      title: "Healthcare Diploma Scholarships",
      description: "Specialized funding for healthcare and nursing diploma programs",
      amount: "$5,000 - $25,000",
      country: "UK",
      university: "Health Institutions",
      deadline: "January 31, 2025",
      requirements: ["Healthcare interest", "Academic merit", "English proficiency", "Clinical aptitude"],
      coverage: "Tuition support + clinical training + certification fees"
    },
    {
      title: "Technology Innovation Scholarships",
      description: "IT and digital skills diploma program funding for emerging technologies",
      amount: "$4,000 - $18,000",
      country: "Ireland",
      university: "IT Institutes",
      deadline: "April 15, 2025",
      requirements: ["Technology aptitude", "Innovation potential", "Project portfolio", "Industry relevance"],
      coverage: "Program fees + equipment + internship placement"
    },
    {
      title: "Business Administration Scholarships",
      description: "Support for business and management diploma programs with entrepreneurship focus",
      amount: "$2,500 - $16,000",
      country: "New Zealand",
      university: "Polytechnic Institutes",
      deadline: "March 31, 2025",
      requirements: ["Business interest", "Leadership potential", "Academic performance", "Entrepreneurial spirit"],
      coverage: "Tuition fees + study materials + mentorship program"
    },
    {
      title: "Creative Arts Scholarships",
      description: "Funding for creative and design diploma programs in arts and media",
      amount: "$3,000 - $14,000",
      country: "Canada",
      university: "Art Colleges",
      deadline: "February 15, 2025",
      requirements: ["Creative portfolio", "Artistic talent", "Program relevance", "Industry connections"],
      coverage: "Tuition + art supplies + exhibition opportunities"
    },
    {
      title: "Engineering Technology Scholarships",
      description: "Support for engineering and technology diploma programs with practical focus",
      amount: "$4,500 - $22,000",
      country: "Germany",
      university: "Technical Institutes",
      deadline: "May 31, 2025",
      requirements: ["Technical background", "Mathematical skills", "German language", "Industry interest"],
      coverage: "Full program cost + internship support + certification"
    },
    {
      title: "Hospitality Management Scholarships",
      description: "Funding for hospitality and tourism diploma programs with industry placement",
      amount: "$3,500 - $17,000",
      country: "Switzerland",
      university: "Hotel Management Schools",
      deadline: "December 31, 2024",
      requirements: ["Service orientation", "Language skills", "Cultural awareness", "Industry experience"],
      coverage: "Tuition + accommodation + industry placement"
    },
    {
      title: "Agriculture Technology Scholarships",
      description: "Support for agricultural and environmental technology diploma programs",
      amount: "$2,800 - $13,000",
      country: "Netherlands",
      university: "Agricultural Colleges",
      deadline: "March 15, 2025",
      requirements: ["Agricultural interest", "Environmental awareness", "Technical skills", "Sustainability focus"],
      coverage: "Program fees + field work + research opportunities"
    },
    {
      title: "Maritime Studies Scholarships",
      description: "Funding for maritime and shipping industry diploma programs",
      amount: "$4,200 - $19,000",
      country: "Norway",
      university: "Maritime Academies",
      deadline: "January 15, 2025",
      requirements: ["Maritime interest", "Physical fitness", "Safety training", "Navigation skills"],
      coverage: "Full tuition + sea training + certification fees"
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
      
      <ScholarshipHero 
        title="Diploma Scholarships"
        subtitle="Fast-track your career with practical education funding"
        description="Discover specialized funding for diploma programs that provide hands-on skills and direct pathways to professional careers across various industries."
        icon={BookOpen}
      />

      <ScholarshipFilters 
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
        countries={countries}
        totalResults={filteredScholarships.length}
        currentResults={currentScholarships.length}
      />

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentScholarships.map((scholarship, index) => (
              <ScholarshipCard 
                key={index} 
                scholarship={scholarship} 
                onApply={scrollToConsultation}
              />
            ))}
          </div>

          {filteredScholarships.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg">No scholarships found for the selected country.</div>
              <button 
                onClick={() => setSelectedCountry('all')}
                className="mt-4 text-orange-500 hover:text-orange-400 transition-colors"
              >
                Show all scholarships
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination>
                <PaginationContent className="bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-500/20">
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-orange-500/20 hover:text-orange-400'} text-white border-orange-500/30 transition-all`}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        onClick={() => handlePageChange(i + 1)}
                        isActive={currentPage === i + 1}
                        className={`cursor-pointer transition-all ${currentPage === i + 1 ? 'bg-orange-500 text-black border-orange-500' : 'text-white hover:bg-orange-500/20 hover:text-orange-400 border-orange-500/30'}`}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-orange-500/20 hover:text-orange-400'} text-white border-orange-500/30 transition-all`}
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
