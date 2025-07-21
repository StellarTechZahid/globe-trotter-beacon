import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarship/ScholarshipCard';
import ScholarshipFilters from '@/components/scholarship/ScholarshipFilters';
import ScholarshipHero from '@/components/scholarship/ScholarshipHero';
import { Microscope } from 'lucide-react';
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

export default PhD;
