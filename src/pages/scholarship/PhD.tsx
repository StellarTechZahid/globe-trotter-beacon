
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarship/ScholarshipCard';
import ScholarshipFilters from '@/components/scholarship/ScholarshipFilters';
import ScholarshipHero from '@/components/scholarship/ScholarshipHero';
import { BookOpen } from 'lucide-react';
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
      description: "Complete funding including tuition, stipend, and comprehensive research expenses for doctoral candidates",
      amount: "$25,000-40,000/year",
      country: "USA",
      university: "Stanford University",
      deadline: "December 15, 2024",
      requirements: ["Master's degree", "Research proposal", "Supervisor agreement", "Publications preferred"],
      coverage: "Full tuition + stipend + research allowance + conference funding"
    },
    {
      title: "Gates Cambridge Scholarships",
      description: "Prestigious full-cost scholarships for outstanding applicants from outside the UK",
      amount: "Full funding",
      country: "UK",
      university: "University of Cambridge",
      deadline: "December 5, 2024",
      requirements: ["Academic excellence", "Leadership potential", "Commitment to service", "Research proposal"],
      coverage: "Full tuition + living allowance + travel + dependents allowance"
    },
    {
      title: "Vanier Canada Graduate Scholarships",
      description: "Attract and retain world-class doctoral students and establish Canada as a global centre of excellence",
      amount: "$50,000/year",
      country: "Canada",
      university: "Canadian Universities",
      deadline: "November 1, 2024",
      requirements: ["PhD program admission", "Research excellence", "Leadership skills", "Academic achievements"],
      coverage: "Annual stipend for 3 years + research support"
    },
    {
      title: "Australian Government Research Training Program",
      description: "Support for domestic and international research students undertaking higher degrees",
      amount: "$28,000/year",
      country: "Australia",
      university: "Australian Universities",
      deadline: "October 31, 2024",
      requirements: ["Research proposal", "Academic merit", "Supervisor support", "English proficiency"],
      coverage: "Stipend + tuition fees + health cover + thesis allowance"
    },
    {
      title: "DAAD Doctoral Scholarships",
      description: "German academic exchange service doctoral funding for international researchers",
      amount: "€1,400/month",
      country: "Germany",
      university: "German Universities",
      deadline: "November 15, 2024",
      requirements: ["Master's degree", "Research proposal", "German language", "Supervisor contact"],
      coverage: "Monthly stipend + travel + insurance + family allowance"
    },
    {
      title: "Swiss National Science Foundation",
      description: "Doc.CH scholarships for doctoral students in Switzerland",
      amount: "CHF 47,000/year",
      country: "Switzerland",
      university: "Swiss Universities",
      deadline: "April 1, 2025",
      requirements: ["Research excellence", "Innovative project", "Supervisor support", "PhD admission"],
      coverage: "Annual salary + research costs + conference travel"
    },
    {
      title: "Marie Skłodowska-Curie Actions",
      description: "European Union doctoral training networks for international mobility",
      amount: "€4,000/month",
      country: "Europe",
      university: "European Universities",
      deadline: "Various deadlines",
      requirements: ["Research proposal", "Mobility requirement", "English proficiency", "Network participation"],
      coverage: "Monthly allowance + training + travel + family allowance"
    },
    {
      title: "President's PhD Scholarships",
      description: "Imperial College London's most prestigious award for doctoral students",
      amount: "£20,000/year",
      country: "UK",
      university: "Imperial College London",
      deadline: "January 8, 2025",
      requirements: ["Outstanding academic record", "Research potential", "Innovation capacity", "Leadership skills"],
      coverage: "Tuition fees + living allowance + research support"
    },
    {
      title: "Japan Society for the Promotion of Science",
      description: "JSPS fellowships for international researchers in Japan",
      amount: "¥362,000/month",
      country: "Japan",
      university: "Japanese Universities",
      deadline: "June 1, 2025",
      requirements: ["PhD program admission", "Research plan", "Language skills", "Cultural adaptability"],
      coverage: "Monthly stipend + research allowance + travel + settlement support"
    },
    {
      title: "Singapore International Graduate Award",
      description: "Joint initiative by A*STAR, NTU, NUS, and SUTD for PhD students",
      amount: "S$2,000/month",
      country: "Singapore",
      university: "Singapore Universities",
      deadline: "December 1, 2024",
      requirements: ["Good honors degree", "Research interest", "English proficiency", "Supervisor agreement"],
      coverage: "Monthly stipend + tuition + travel + conference allowance"
    },
    {
      title: "Chinese Government Scholarships",
      description: "Full scholarships for international students pursuing PhD in China",
      amount: "Full funding",
      country: "China",
      university: "Top Chinese Universities",
      deadline: "January 31, 2025",
      requirements: ["Master's degree", "Research proposal", "Language proficiency", "Health certificate"],
      coverage: "Full tuition + living allowance + accommodation + medical insurance"
    },
    {
      title: "Korea Government Scholarship Program",
      description: "KGSP for international students to pursue PhD degrees in Korea",
      amount: "KRW 900,000/month",
      country: "South Korea",
      university: "Korean Universities",
      deadline: "February 28, 2025",
      requirements: ["Academic excellence", "Research potential", "Korean language", "Cultural interest"],
      coverage: "Monthly stipend + tuition + language training + settlement allowance"
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
        subtitle="Fund your doctoral research and academic career"
        description="Explore comprehensive funding opportunities for PhD studies and research programs at world-renowned institutions. Shape the future through groundbreaking research."
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

export default PhD;
