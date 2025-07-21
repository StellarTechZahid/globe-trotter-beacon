
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarship/ScholarshipCard';
import ScholarshipFilters from '@/components/scholarship/ScholarshipFilters';
import ScholarshipHero from '@/components/scholarship/ScholarshipHero';
import { Microscope, Users, Award, Globe, TrendingUp, BookOpen } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const PhD = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Global Research Grants",
      description: "Funding for PhD candidates pursuing research in any field, worldwide",
      amount: "$30,000 - $70,000",
      country: "Europe",
      university: "Various Universities",
      deadline: "December 15, 2024",
      requirements: ["Research proposal", "Academic transcripts", "Letters of recommendation", "Statement of purpose"],
      coverage: "Full tuition + living stipend + research expenses"
    },
    {
      title: "STEM Doctoral Fellowships",
      description: "Dedicated funding for PhD students in science, technology, engineering, and mathematics",
      amount: "$35,000 - $75,000",
      country: "USA",
      university: "Top Research Universities",
      deadline: "January 31, 2025",
      requirements: ["STEM background", "Research experience", "GRE scores", "Faculty endorsement"],
      coverage: "Tuition + health insurance + conference travel"
    },
    {
      title: "Social Sciences PhD Awards",
      description: "Support for doctoral research in social sciences, humanities, and related fields",
      amount: "$25,000 - $65,000",
      country: "UK",
      university: "Leading UK Universities",
      deadline: "February 28, 2025",
      requirements: ["Social science background", "Research interests", "Writing sample", "References"],
      coverage: "Tuition fees + research grant + living costs"
    },
    {
      title: "International PhD Scholarships",
      description: "Funding for international students pursuing doctoral studies in various disciplines",
      amount: "$20,000 - $60,000",
      country: "Australia",
      university: "Group of Eight Universities",
      deadline: "March 31, 2025",
      requirements: ["International student status", "Academic excellence", "Research potential", "English proficiency"],
      coverage: "Partial tuition + living allowance + visa support"
    },
    {
      title: "Innovation and Technology PhD Grants",
      description: "Funding for PhD research focused on innovation, technology, and entrepreneurship",
      amount: "$40,000 - $80,000",
      country: "Canada",
      university: "Top Canadian Universities",
      deadline: "April 15, 2025",
      requirements: ["Innovation focus", "Technical skills", "Project proposal", "Industry experience"],
      coverage: "Full funding + mentorship + commercialization support"
    },
    {
      title: "Environmental Science PhD Fellowships",
      description: "Support for doctoral research in environmental science, sustainability, and conservation",
      amount: "$30,000 - $70,000",
      country: "Germany",
      university: "Technical Universities",
      deadline: "May 31, 2025",
      requirements: ["Environmental science background", "Research interests", "Fieldwork experience", "German language"],
      coverage: "Tuition + research stipend + travel grants"
    },
    {
      title: "Medical Research PhD Scholarships",
      description: "Funding for PhD candidates conducting medical research in various healthcare fields",
      amount: "$35,000 - $75,000",
      country: "Sweden",
      university: "Medical Universities",
      deadline: "June 30, 2025",
      requirements: ["Medical background", "Research experience", "Clinical skills", "Ethical standards"],
      coverage: "Full tuition + research funding + conference attendance"
    },
    {
      title: "Engineering PhD Awards",
      description: "Support for doctoral research in engineering disciplines, including civil, mechanical, and electrical",
      amount: "$25,000 - $65,000",
      country: "Netherlands",
      university: "Technological Universities",
      deadline: "July 31, 2025",
      requirements: ["Engineering background", "Technical skills", "Research proposal", "Industry connections"],
      coverage: "Tuition fees + research grant + living costs"
    },
    {
      title: "Business and Management PhD Grants",
      description: "Funding for PhD research in business administration, management, and economics",
      amount: "$40,000 - $80,000",
      country: "Singapore",
      university: "Business Schools",
      deadline: "August 15, 2025",
      requirements: ["Business background", "Analytical skills", "Research interests", "GMAT scores"],
      coverage: "Full funding + mentorship + networking opportunities"
    },
    {
      title: "Arts and Humanities PhD Scholarships",
      description: "Support for doctoral research in arts, humanities, and cultural studies",
      amount: "$30,000 - $70,000",
      country: "Italy",
      university: "Art and Humanities Universities",
      deadline: "September 30, 2025",
      requirements: ["Arts/Humanities background", "Research interests", "Writing sample", "Language proficiency"],
      coverage: "Tuition + research stipend + travel grants"
    },
    {
      title: "Education PhD Fellowships",
      description: "Funding for PhD candidates pursuing research in education, pedagogy, and learning sciences",
      amount: "$35,000 - $75,000",
      country: "Finland",
      university: "Education Universities",
      deadline: "October 31, 2025",
      requirements: ["Education background", "Teaching experience", "Research proposal", "Educational philosophy"],
      coverage: "Full tuition + research funding + conference attendance"
    },
    {
      title: "Law and Legal Studies PhD Awards",
      description: "Support for doctoral research in law, legal studies, and human rights",
      amount: "$25,000 - $65,000",
      country: "Switzerland",
      university: "Law Schools",
      deadline: "November 30, 2025",
      requirements: ["Law background", "Legal research skills", "Writing sample", "Ethical standards"],
      coverage: "Tuition fees + research grant + living costs"
    },
    {
      title: "Psychology PhD Scholarships",
      description: "Funding for doctoral research in psychology and behavioral sciences",
      amount: "$30,000 - $70,000",
      country: "Norway",
      university: "Psychology Departments",
      deadline: "December 31, 2025",
      requirements: ["Psychology background", "Research experience", "Statistical skills", "Ethical training"],
      coverage: "Full tuition + research stipend + conference travel"
    },
    {
      title: "Computer Science PhD Awards",
      description: "Support for doctoral research in computer science and artificial intelligence",
      amount: "$45,000 - $85,000",
      country: "Ireland",
      university: "Technology Universities",
      deadline: "January 15, 2026",
      requirements: ["CS background", "Programming skills", "Research proposal", "Technical portfolio"],
      coverage: "Full funding + equipment + industry partnerships"
    },
    {
      title: "Economics PhD Fellowships",
      description: "Funding for PhD candidates in economics and econometrics",
      amount: "$35,000 - $75,000",
      country: "Belgium",
      university: "Economics Departments",
      deadline: "February 15, 2026",
      requirements: ["Economics background", "Mathematical skills", "Research interests", "GRE scores"],
      coverage: "Tuition + research grant + data access"
    },
    {
      title: "Mathematics PhD Scholarships",
      description: "Support for doctoral research in pure and applied mathematics",
      amount: "$30,000 - $70,000",
      country: "New Zealand",
      university: "Mathematics Departments",
      deadline: "March 15, 2026",
      requirements: ["Mathematics background", "Analytical skills", "Research proposal", "Academic excellence"],
      coverage: "Full tuition + living stipend + conference support"
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
        title="PhD Scholarships"
        subtitle="Fund your doctoral research and academic excellence"
        description="Access prestigious funding opportunities for PhD programs worldwide. Support your research ambitions and contribute to cutting-edge discoveries in your field."
        icon={Microscope}
      />

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900 border-b border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">200+</div>
              <div className="text-gray-400 text-sm">PhD Programs</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">20+</div>
              <div className="text-gray-400 text-sm">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">$3B+</div>
              <div className="text-gray-400 text-sm">Research Funding</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">98%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <ScholarshipFilters 
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
        countries={countries}
        totalResults={filteredScholarships.length}
        currentResults={currentScholarships.length}
      />

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                  {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 8) {
                      pageNum = i + 1;
                    } else {
                      if (currentPage <= 4) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 3) {
                        pageNum = totalPages - 7 + i;
                      } else {
                        pageNum = currentPage - 3 + i;
                      }
                    }
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          onClick={() => handlePageChange(pageNum)}
                          isActive={currentPage === pageNum}
                          className={`cursor-pointer transition-all ${currentPage === pageNum ? 'bg-orange-500 text-black border-orange-500' : 'text-white hover:bg-orange-500/20 hover:text-orange-400 border-orange-500/30'}`}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
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

export default PhD;
