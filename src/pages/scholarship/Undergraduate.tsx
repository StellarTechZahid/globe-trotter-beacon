
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScholarshipCard from '@/components/scholarship/ScholarshipCard';
import ScholarshipFilters from '@/components/scholarship/ScholarshipFilters';
import ScholarshipHero from '@/components/scholarship/ScholarshipHero';
import { GraduationCap, BookOpen, Users, Award, Globe, TrendingUp } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Undergraduate = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const scholarships = [
    {
      title: "Merit-Based Undergraduate Scholarships",
      description: "Academic excellence scholarships for high-achieving students starting their university journey",
      amount: "$5,000 - $25,000",
      country: "USA",
      university: "Harvard University",
      deadline: "March 15, 2025",
      requirements: ["High GPA (3.5+)", "SAT/ACT scores", "Leadership experience", "Community service"],
      coverage: "Partial tuition coverage + book allowance"
    },
    {
      title: "International Student Excellence Award",
      description: "Dedicated funding for international undergraduate students with exceptional academic records",
      amount: "$10,000 - $40,000",
      country: "UK",
      university: "Oxford University",
      deadline: "January 31, 2025",
      requirements: ["International status", "English proficiency", "Academic merit", "Personal statement"],
      coverage: "Tuition + living allowance + accommodation"
    },
    {
      title: "Chancellor's Undergraduate Scholarship",
      description: "Prestigious scholarship for outstanding academic performance and leadership potential",
      amount: "$15,000 - $50,000",
      country: "Canada",
      university: "University of Toronto",
      deadline: "February 28, 2025",
      requirements: ["Top 5% of class", "Community involvement", "Research experience", "Recommendation letters"],
      coverage: "Full tuition coverage + research opportunities"
    },
    {
      title: "Australia Awards Undergraduate Program",
      description: "Government-funded scholarships for developing countries to study in Australia",
      amount: "Full funding",
      country: "Australia",
      university: "Australian National University",
      deadline: "April 30, 2025",
      requirements: ["Citizenship requirements", "Academic excellence", "Leadership potential", "English proficiency"],
      coverage: "Full tuition + living expenses + travel + health insurance"
    },
    {
      title: "DAAD Undergraduate Scholarships",
      description: "German government scholarships for international students pursuing undergraduate degrees",
      amount: "€850/month + tuition",
      country: "Germany",
      university: "Technical University of Munich",
      deadline: "March 31, 2025",
      requirements: ["German language proficiency", "Academic merit", "Study plan", "Cultural interest"],
      coverage: "Monthly stipend + tuition waiver + cultural programs"
    },
    {
      title: "Swiss Excellence Scholarships",
      description: "Swiss government scholarships for foreign undergraduate students",
      amount: "CHF 1,920/month",
      country: "Switzerland",
      university: "ETH Zurich",
      deadline: "December 15, 2024",
      requirements: ["Academic excellence", "Research proposal", "Language skills", "Innovation potential"],
      coverage: "Monthly allowance + tuition waiver + research support"
    },
    {
      title: "Vanier Canada Graduate Scholarships",
      description: "Prestigious scholarships for international students in Canada",
      amount: "$50,000/year",
      country: "Canada",
      university: "McGill University",
      deadline: "November 1, 2024",
      requirements: ["Academic excellence", "Research potential", "Leadership skills", "Innovation"],
      coverage: "Annual stipend for 3 years + research funding"
    },
    {
      title: "Rhodes Scholarships",
      description: "Historic scholarship program for outstanding students to study at Oxford",
      amount: "Full funding",
      country: "UK",
      university: "Oxford University",
      deadline: "October 7, 2024",
      requirements: ["Academic excellence", "Leadership qualities", "Service to others", "Physical vigor"],
      coverage: "Full Oxford fees + living expenses + travel + personal allowance"
    },
    {
      title: "Fulbright Foreign Student Program",
      description: "US government's flagship educational exchange program for international students",
      amount: "$20,000 - $40,000",
      country: "USA",
      university: "Various US Universities",
      deadline: "May 15, 2025",
      requirements: ["Academic merit", "Leadership potential", "English proficiency", "Cultural exchange"],
      coverage: "Tuition + living allowance + travel + cultural programs"
    },
    {
      title: "Swedish Institute Scholarships",
      description: "Scholarships for international students to study in Sweden",
      amount: "SEK 9,000/month",
      country: "Sweden",
      university: "KTH Royal Institute of Technology",
      deadline: "February 10, 2025",
      requirements: ["Academic excellence", "Leadership experience", "Career goals", "Swedish interest"],
      coverage: "Monthly allowance + tuition fees + cultural immersion"
    },
    {
      title: "New Zealand International Scholarships",
      description: "Government scholarships for international undergraduate students",
      amount: "Full funding",
      country: "New Zealand",
      university: "University of Auckland",
      deadline: "March 31, 2025",
      requirements: ["Academic merit", "English proficiency", "Country eligibility", "Study commitment"],
      coverage: "Full tuition + living costs + travel + settlement allowance"
    },
    {
      title: "Netherlands Orange Knowledge Programme",
      description: "Scholarships for students from developing countries",
      amount: "€2,000/month",
      country: "Netherlands",
      university: "University of Amsterdam",
      deadline: "February 1, 2025",
      requirements: ["Country eligibility", "Academic excellence", "Professional relevance", "English proficiency"],
      coverage: "Monthly allowance + tuition + travel + visa support"
    },
    {
      title: "Irish Government Scholarships",
      description: "Government of Ireland International Education Scholarships",
      amount: "€10,000",
      country: "Ireland",
      university: "Trinity College Dublin",
      deadline: "March 15, 2025",
      requirements: ["International student status", "Academic merit", "Research proposal", "English proficiency"],
      coverage: "Tuition contribution + living allowance"
    },
    {
      title: "Belgian Development Scholarships",
      description: "Master's and training programmes in Belgium",
      amount: "€1,150/month",
      country: "Belgium",
      university: "KU Leuven",
      deadline: "February 28, 2025",
      requirements: ["Developing country citizen", "Work experience", "Language proficiency", "Return commitment"],
      coverage: "Monthly allowance + tuition + travel + insurance"
    },
    {
      title: "Finnish Government Scholarships",
      description: "Scholarships for international degree students",
      amount: "€1,500/month",
      country: "Finland",
      university: "University of Helsinki",
      deadline: "January 31, 2025",
      requirements: ["Academic excellence", "Study plan", "Finnish interest", "Language skills"],
      coverage: "Monthly stipend + tuition waiver + health insurance"
    },
    {
      title: "Singapore International Scholarships",
      description: "Government scholarships for international students",
      amount: "S$3,000/month",
      country: "Singapore",
      university: "National University of Singapore",
      deadline: "March 31, 2025",
      requirements: ["Academic merit", "Leadership potential", "Community service", "English proficiency"],
      coverage: "Monthly allowance + tuition + accommodation + travel"
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
        title="Undergraduate Scholarships"
        subtitle="Launch your academic journey with funding for bachelor's programs"
        description="Explore comprehensive funding opportunities for undergraduate studies abroad, designed to make your dream education accessible and affordable."
        icon={GraduationCap}
      />

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900 border-b border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-gray-400 text-sm">Programs Available</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">25+</div>
              <div className="text-gray-400 text-sm">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">$2B+</div>
              <div className="text-gray-400 text-sm">Total Funding</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">95%</div>
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

export default Undergraduate;
