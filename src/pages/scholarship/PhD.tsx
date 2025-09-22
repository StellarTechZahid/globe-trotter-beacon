
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

  const handleScholarshipClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    window.location.href = `/scholarship/phd/${slug}`;
  };

  const scholarships = [
    {
      title: "Gates Cambridge Scholarships",
      description: "Full-cost scholarships for outstanding applicants from outside the UK to pursue graduate studies at the University of Cambridge",
      amount: "£40,000 - £60,000",
      country: "UK",
      university: "University of Cambridge",
      deadline: "October 11, 2024 (US Citizens), December 5, 2024 (Other Countries)",
      requirements: ["Outstanding intellectual ability", "Leadership potential", "Commitment to improving lives of others", "Good fit for Cambridge"],
      coverage: "Full tuition + living stipend + development funding + family allowance"
    },
    {
      title: "Rhodes Scholarships",
      description: "World's oldest international scholarship programme, enabling outstanding young people from around the world to study at the University of Oxford",
      amount: "£17,310 - £19,340",
      country: "UK",
      university: "University of Oxford",
      deadline: "Various (July-October 2024 by constituency)",
      requirements: ["Academic excellence", "Energy to use talents to the full", "Truth, courage, devotion to duty", "Sympathy, kindness, unselfishness"],
      coverage: "University + college fees + living stipend + travel costs + visa fees"
    },
    {
      title: "Fulbright Foreign Student Program",
      description: "Flagship international educational exchange program sponsored by the U.S. government for graduate study, research, and teaching in the United States",
      amount: "$25,000 - $45,000",
      country: "USA",
      university: "Various US Universities",
      deadline: "May - October 2024 (varies by country)",
      requirements: ["Bachelor's degree", "English proficiency", "Leadership potential", "Return to home country commitment"],
      coverage: "Tuition + living stipend + airfare + health insurance"
    },
    {
      title: "Australian Government Research Training Program (RTP)",
      description: "Competitive merit-based scholarships providing fee offset and living allowance for domestic and international Higher Degree by Research students",
      amount: "AUD $31,000 - $35,000",
      country: "Australia",
      university: "All Australian Universities",
      deadline: "Various (typically May-August)",
      requirements: ["First-class honours or equivalent", "Research proposal", "Academic transcripts", "References"],
      coverage: "Tuition fees + living allowance + thesis allowance + overseas student health cover"
    },
    {
      title: "Vanier Canada Graduate Scholarships",
      description: "Canada's most prestigious doctoral scholarships, attracting and retaining world-class doctoral students and establishing Canada as a global center of excellence",
      amount: "CAD $50,000 annually for 3 years",
      country: "Canada",
      university: "Eligible Canadian Universities",
      deadline: "November 2, 2024",
      requirements: ["Nominated by Canadian institution", "Academic excellence", "Research potential", "Leadership"],
      coverage: "Annual stipend of $50,000 for three years"
    },
    {
      title: "DAAD Research Grants for Doctoral Candidates",
      description: "Funding for highly qualified foreign graduates to pursue doctoral studies at German universities and research institutions",
      amount: "€1,400 monthly + benefits",
      country: "Germany",
      university: "German Universities and Research Institutes",
      deadline: "Various deadlines throughout the year",
      requirements: ["Master's degree", "Research project", "Academic excellence", "German or English proficiency"],
      coverage: "Monthly stipend + travel allowance + health insurance + family allowance"
    },
    {
      title: "Swiss Government Excellence Scholarships",
      description: "Scholarships for foreign scholars and artists for research or studies at Swiss public funded universities and research institutes",
      amount: "CHF 1,920 monthly",
      country: "Switzerland",
      university: "Swiss Universities and Federal Institutes of Technology",
      deadline: "Various (September-December 2024)",
      requirements: ["Master's degree", "Research project", "Academic merit", "Language proficiency"],
      coverage: "Monthly allowance + tuition fee exemption + health insurance + housing allowance"
    },
    {
      title: "Japan MEXT Scholarships (Research Students)",
      description: "Japanese government scholarships for international students to pursue graduate studies and research at Japanese universities",
      amount: "¥143,000 - ¥145,000 monthly",
      country: "Japan",
      university: "Japanese National, Public and Private Universities",
      deadline: "May - June 2024 (Embassy track), December - January (University track)",
      requirements: ["Bachelor's/Master's degree", "Research plan", "Language proficiency", "Age limits apply"],
      coverage: "Monthly allowance + tuition exemption + airfare + preparatory education"
    },
    {
      title: "Erasmus Mundus Joint Doctoral Programmes",
      description: "High-quality joint, integrated doctoral programmes offered by consortiums of higher education institutions from different European countries",
      amount: "€1,400 - €1,800 monthly",
      country: "Europe",
      university: "European University Consortiums",
      deadline: "Various (typically January-March 2025)",
      requirements: ["Master's degree", "Mobility requirement", "English proficiency", "Research excellence"],
      coverage: "Monthly living allowance + travel costs + participation costs + visa fees"
    },
    {
      title: "Chinese Government Scholarship (CGS)",
      description: "Bilateral or multilateral scholarship programs established by the Chinese government with other governments, institutions, universities or international organizations",
      amount: "¥3,500 - ¥4,200 monthly",
      country: "China",
      university: "Designated Chinese Universities",
      deadline: "January - April 2024 (varies by program)",
      requirements: ["Master's degree", "Research plan", "Health certificate", "Age under 40"],
      coverage: "Tuition exemption + accommodation + living allowance + medical insurance"
    },
    {
      title: "Singapore International Graduate Award (SINGA)",
      description: "Joint scholarship by A*STAR Graduate Academy, Nanyang Technological University, National University of Singapore and Singapore University of Technology and Design",
      amount: "SGD $24,000 - $30,000 annually",
      country: "Singapore",
      university: "NTU, NUS, SUTD",
      deadline: "January 31, 2025",
      requirements: ["Bachelor's degree with honors", "TOEFL/IELTS scores", "Research interests", "Commitment to 3-year program"],
      coverage: "Monthly stipend + tuition fees + conference allowance + thesis allowance"
    },
    {
      title: "Netherlands Fellowship Programmes (NFP)",
      description: "Demand-driven fellowship programme that promotes capacity building and human resources development in 51 countries",
      amount: "€1,200 - €2,000 monthly",
      country: "Netherlands",
      university: "Dutch Universities and Institutes",
      deadline: "February 1, 2025 (Round 1), May 1, 2025 (Round 2)",
      requirements: ["Master's degree", "2+ years work experience", "Return commitment", "English proficiency"],
      coverage: "Monthly allowance + tuition fees + international travel + visa costs"
    },
    {
      title: "Swedish Institute Study Scholarships (SISS)",
      description: "Scholarships for highly qualified students from developing countries to pursue full-time master's studies in Sweden",
      amount: "SEK 10,000 monthly",
      country: "Sweden",
      university: "Swedish Universities",
      deadline: "February 1, 2025",
      requirements: ["Bachelor's degree", "Leadership experience", "Work experience", "English proficiency"],
      coverage: "Living allowance + travel grant + insurance + some course materials"
    },
    {
      title: "Commonwealth PhD Scholarships",
      description: "Scholarships for citizens of developing Commonwealth countries to pursue doctoral studies in the UK",
      amount: "£15,000 - £18,000",
      country: "UK",
      university: "UK Universities",
      deadline: "December 15, 2024",
      requirements: ["First-class or upper second-class honours degree", "Commonwealth citizenship", "Research proposal", "Return commitment"],
      coverage: "University tuition fees + thesis grant + monthly stipend + airfare + arrival allowance"
    },
    {
      title: "Irish Research Council Postgraduate Scholarships",
      description: "Funding for excellent research conducted by postgraduate students in any discipline in Ireland",
      amount: "€18,000 annually",
      country: "Ireland",
      university: "Irish Higher Education Institutions",
      deadline: "February 2025",
      requirements: ["Bachelor's/Master's degree", "Research proposal", "Institutional support", "Academic excellence"],
      coverage: "Annual stipend + fees contribution + research expenses"
    },
    {
      title: "Austrian Marshall Plan Scholarships",
      description: "Scholarships for young Austrian and American students to conduct part of their studies or research in the respective other country",
      amount: "€1,050 monthly",
      country: "Austria",
      university: "Austrian Universities",
      deadline: "January 31, 2025",
      requirements: ["Enrolled in graduate program", "US citizenship/permanent residence", "Academic excellence", "Project proposal"],
      coverage: "Monthly allowance + travel costs + insurance"
    },
    {
      title: "Denmark Government Scholarships",
      description: "Government scholarships under the Cultural Agreements with various countries for studies at Danish institutions of higher education",
      amount: "DKK 7,000 monthly",
      country: "Denmark",
      university: "Danish Universities",
      deadline: "March 15, 2025",
      requirements: ["Bachelor's degree", "Academic merit", "Cultural agreement country citizenship", "Language proficiency"],
      coverage: "Monthly allowance + tuition fee waiver + travel support"
    },
    {
      title: "Belgium Development Cooperation Scholarships",
      description: "Scholarships for students from developing countries to pursue doctoral studies in Belgium",
      amount: "€1,100 - €1,300 monthly",
      country: "Belgium",
      university: "Belgian Universities",
      deadline: "February 28, 2025",
      requirements: ["Master's degree", "Professional experience", "Development project relevance", "Return commitment"],
      coverage: "Monthly allowance + accommodation + international travel + insurance"
    },
    {
      title: "New Zealand Development Scholarships (NZDS)",
      description: "Scholarships for people from developing countries, particularly in the Pacific and Latin America, to study in New Zealand",
      amount: "NZD $25,000 - $30,000",
      country: "New Zealand",
      university: "New Zealand Universities",
      deadline: "April 30, 2025",
      requirements: ["Bachelor's degree", "Work experience", "Leadership potential", "English proficiency"],
      coverage: "Tuition fees + living allowance + travel costs + insurance + establishment allowance"
    },
    {
      title: "Taiwan ICDF Scholarships",
      description: "Scholarships for international students from diplomatic allies and developing countries to pursue higher education in Taiwan",
      amount: "NT$40,000 monthly",
      country: "Taiwan",
      university: "Taiwanese Universities",
      deadline: "March 31, 2025",
      requirements: ["Bachelor's/Master's degree", "Academic excellence", "Diplomatic ally/developing country citizen", "Health certificate"],
      coverage: "Tuition + monthly allowance + airfare + insurance"
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
                onApply={() => handleScholarshipClick(scholarship.title)}
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
