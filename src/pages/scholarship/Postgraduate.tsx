
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarship/ScholarshipCard';
import ScholarshipFilters from '@/components/scholarship/ScholarshipFilters';
import ScholarshipHero from '@/components/scholarship/ScholarshipHero';
import { BookOpen } from 'lucide-react';
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
      description: "Merit-based funding for outstanding postgraduate students pursuing advanced degrees in various fields",
      amount: "$20,000 - $50,000",
      country: "USA",
      university: "MIT",
      deadline: "January 15, 2025",
      requirements: ["Bachelor's degree with honors", "High GPA (3.7+)", "Research experience", "Strong recommendation letters"],
      coverage: "Partial to full tuition coverage + research stipend"
    },
    {
      title: "Chevening Scholarships",
      description: "UK government's prestigious global scholarship programme for future leaders",
      amount: "Full funding",
      country: "UK",
      university: "Various UK Universities",
      deadline: "November 7, 2024",
      requirements: ["Leadership potential", "2+ years work experience", "English proficiency", "Return to home country"],
      coverage: "Full tuition + living expenses + travel + visa costs"
    },
    {
      title: "Erasmus Mundus Joint Master Degrees",
      description: "European Union funded international study programmes with mobility across Europe",
      amount: "€1,400/month + tuition",
      country: "Europe",
      university: "Multiple European Universities",
      deadline: "Various deadlines",
      requirements: ["Bachelor's degree", "Language requirements", "Academic excellence", "EU mobility"],
      coverage: "Monthly allowance + tuition coverage + travel grants"
    },
    {
      title: "Canada Graduate Scholarships",
      description: "Support for high-calibre students in graduate studies and research",
      amount: "$17,500/year",
      country: "Canada",
      university: "Canadian Universities",
      deadline: "December 1, 2024",
      requirements: ["Canadian citizenship/PR", "Academic excellence", "Research potential", "Supervisor support"],
      coverage: "Annual stipend for 1 year + research allowance"
    },
    {
      title: "Australia Awards Scholarships",
      description: "Long-term development scholarships for priority countries in the Indo-Pacific",
      amount: "Full funding",
      country: "Australia",
      university: "Australian Universities",
      deadline: "April 30, 2025",
      requirements: ["Country eligibility", "Work experience", "Leadership skills", "Development focus"],
      coverage: "Full tuition + living allowance + travel + health insurance"
    },
    {
      title: "DAAD Scholarships for Graduate Students",
      description: "German academic exchange service scholarships for international students",
      amount: "€1,200/month",
      country: "Germany",
      university: "German Universities",
      deadline: "October 31, 2024",
      requirements: ["Bachelor's degree", "German language proficiency", "Academic merit", "Research proposal"],
      coverage: "Monthly stipend + tuition waiver + health insurance"
    },
    {
      title: "Swedish Institute Scholarships",
      description: "Scholarships for global professionals and future leaders",
      amount: "SEK 9,000/month",
      country: "Sweden",
      university: "Swedish Universities",
      deadline: "February 10, 2025",
      requirements: ["Leadership experience", "Academic excellence", "Career goals", "Professional network"],
      coverage: "Monthly allowance + tuition fees + insurance"
    },
    {
      title: "New Zealand Development Scholarships",
      description: "Contribute to development of Pacific and developing countries",
      amount: "Full funding",
      country: "New Zealand",
      university: "New Zealand Universities",
      deadline: "March 31, 2025",
      requirements: ["Country eligibility", "Development focus", "English proficiency", "Return commitment"],
      coverage: "Full tuition + living costs + travel + establishment allowance"
    },
    {
      title: "Netherlands Fellowship Programmes",
      description: "Fellowships for professionals from developing countries",
      amount: "€2,000/month",
      country: "Netherlands",
      university: "Dutch Universities",
      deadline: "February 1, 2025",
      requirements: ["Professional experience", "Development relevance", "English proficiency", "Employer support"],
      coverage: "Monthly allowance + tuition + travel + visa costs"
    },
    {
      title: "Swiss Government Excellence Scholarships",
      description: "Research and doctoral scholarships for foreign students",
      amount: "CHF 1,920/month",
      country: "Switzerland",
      university: "Swiss Universities",
      deadline: "December 15, 2024",
      requirements: ["Academic excellence", "Research proposal", "Language skills", "Supervisor agreement"],
      coverage: "Monthly stipend + tuition waiver + health insurance"
    },
    {
      title: "Irish Government Scholarships",
      description: "Government of Ireland International Education Scholarships",
      amount: "€10,000",
      country: "Ireland",
      university: "Irish Universities",
      deadline: "March 15, 2025",
      requirements: ["International student status", "Academic merit", "Research proposal", "English proficiency"],
      coverage: "Tuition contribution + living allowance"
    },
    {
      title: "Belgian Development Cooperation Scholarships",
      description: "Master's and training programmes in Belgium",
      amount: "€1,150/month",
      country: "Belgium",
      university: "Belgian Universities",
      deadline: "February 28, 2025",
      requirements: ["Developing country citizen", "Work experience", "Language proficiency", "Return commitment"],
      coverage: "Monthly allowance + tuition + travel + insurance"
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
        title="Postgraduate Scholarships"
        subtitle="Advance your career with funding for master's programs"
        description="Discover world-class funding opportunities for postgraduate studies that will propel your career to new heights and open doors to global opportunities."
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default Postgraduate;
