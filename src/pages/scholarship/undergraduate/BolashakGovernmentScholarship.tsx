import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, Star, DollarSign, Plane, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const BolashakGovernmentScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Bolashak Government Scholarship Kazakhstan 2025 - Fully Funded Guide for Kazakh Citizens</title>
        <meta name="description" content="Comprehensive guide to the Bolashak International Scholarship 2025 in Kazakhstan. Discover eligibility, benefits, application process, priority programs, and opportunities to study at top global universities." />
        <meta name="keywords" content="Bolashak scholarship 2025, Kazakhstan government scholarship, fully funded study abroad, Kazakh citizens scholarship, master's PhD abroad, Bolashak eligibility, international education Kazakhstan" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/graduate/bolashak-government-scholarship" />
        <meta property="og:title" content="Bolashak Government Scholarship Kazakhstan 2025 - Fully Funded" />
        <meta property="og:description" content="Explore the prestigious Bolashak Scholarship for Kazakh citizens, offering full funding for master's, PhD, and internships at leading universities worldwide." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/graduate/bolashak-government-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop"
          alt="Global University Campus for Bolashak Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/graduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Graduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇰🇿</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Kazakhstan
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Bolashak Government Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Fully funded opportunity for Kazakh citizens to pursue advanced degrees and internships at top universities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-900 border-t border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Fully Funded</div>
              <div className="text-gray-400 text-sm">Tuition & Expenses</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Worldwide</div>
              <div className="text-gray-400 text-sm">Top Universities</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Monthly Stipend</div>
              <div className="text-gray-400 text-sm">Living Support</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Plane className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Travel Coverage</div>
              <div className="text-gray-400 text-sm">Round-Trip</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-gray-300">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-orange-500" />
                <span className="font-semibold">Scholarship Expert</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: September 19, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>4.8k views</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 space-y-8">
              
              <div className="bg-orange-500 bg-opacity-10 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-orange-500 font-bold text-lg mb-2">Key Scholarship Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>100% tuition fee coverage at top global universities</li>
                  <li>Monthly stipend for living expenses (varies by country)</li>
                  <li>Accommodation costs or housing allowance</li>
                  <li>Round-trip airfare and travel expenses</li>
                  <li>Comprehensive medical insurance</li>
                  <li>Book and academic materials allowance</li>
                  <li>Visa application and related fees</li>
                  <li>Language course funding if required</li>
                  <li>Career development and networking opportunities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About the Bolashak International Scholarship</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Bolashak International Scholarship, established by Presidential Decree on November 5, 1993, is Kazakhstan's premier government-funded program designed to develop highly qualified specialists for the nation's priority economic sectors. Administered by the JSC "Center for International Programs" under the Ministry of Science and Higher Education, the scholarship enables Kazakh citizens to pursue advanced education and professional development at leading universities and companies worldwide.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Over its 30+ years, the program has supported over 12,000 scholars in studying at more than 200 top universities across 33 countries. The initiative focuses on fostering ethical leadership, innovation, and social responsibility, aligning with Kazakhstan's development goals. Scholars are expected to return and contribute to the country's progress, with a mandatory work obligation in Kazakhstan post-graduation.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The program emphasizes priority areas such as engineering, IT, medicine, education, and public administration, ensuring graduates bring cutting-edge knowledge back home. Bolashak alumni often occupy key positions in government, business, and academia, driving national advancement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Available Programs and Priority Specialties</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Bolashak Scholarship supports a wide range of graduate-level programs and professional internships at approved international institutions. Programs are selected based on Kazakhstan's economic priorities, with a focus on fields that support innovation and development.
                </p>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Programs</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Master's Degrees (1-2 years)</li>
                    <li>PhD/Doctoral Degrees (3-5 years)</li>
                    <li>Residency in Medical Fields</li>
                    <li>Postdoctoral Research</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Priority Specialties</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Engineering and Technology (e.g., Petroleum, Civil, Mechanical)</li>
                    <li>Information Technology and Digital Sciences</li>
                    <li>Medicine and Healthcare (including Residency)</li>
                    <li>Education and Pedagogy</li>
                    <li>Public Administration and Policy</li>
                    <li>Economics and Finance</li>
                    <li>Natural Sciences (e.g., Geology, Environmental Science)</li>
                    <li>Agriculture and Biotechnology</li>
                    <li>Law and International Relations</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Internships and Professional Development</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Scientific-Production Internships (6-12 months)</li>
                    <li>Professional Training for Engineering, Medical, and Teaching Staff</li>
                    <li>Research Internships at Leading Institutions</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  All programs must be at universities from the approved list, which includes top-ranked institutions like Harvard, Oxford, MIT, and others in countries such as the USA, UK, Germany, Australia, and Canada.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements for Bolashak Scholarship 2025</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">General Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Citizenship of the Republic of Kazakhstan</li>
                  <li>Unconditional admission offer from an approved foreign university (excluding financial conditions)</li>
                  <li>Commitment to return to Kazakhstan and work for at least 5 years post-study</li>
                  <li>Good health and no outstanding legal issues</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>For Master's/Residency: Bachelor's degree with GPA ≥ 3.0/4.0</li>
                  <li>For PhD: Master's degree with GPA ≥ 3.3/4.0</li>
                  <li>Relevant work experience (1-3 years for some categories)</li>
                  <li>Strong academic record and research potential for doctoral programs</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Kazakh language proficiency: KAZTEST or Qazaq Resmi Test ≥ B1 level</li>
                  <li>Foreign language proficiency (depending on program country):</li>
                  <li>- English: IELTS ≥ 6.5 or TOEFL iBT ≥ 79</li>
                  <li>- Other languages: Equivalent certificates (e.g., DELF for French)</li>
                  <li>Language preparatory courses available if needed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits and Support</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Coverage</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition Fees:</strong> Full coverage for the program duration</li>
                  <li><strong>Monthly Stipend:</strong> Varies by host country (e.g., $2,000-3,000 USD equivalent)</li>
                  <li><strong>Accommodation:</strong> Housing allowance or direct payment</li>
                  <li><strong>Travel:</strong> Round-trip airfare and relocation costs</li>
                  <li><strong>Insurance:</strong> Comprehensive health and medical coverage</li>
                  <li><strong>Books & Materials:</strong> Annual allowance for study resources</li>
                  <li><strong>Visa & Fees:</strong> Coverage for application and related expenses</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Pre-departure orientation and cultural adaptation training</li>
                  <li>Ongoing monitoring and support from the Center for International Programs</li>
                  <li>Networking events with Bolashak alumni</li>
                  <li>Career guidance for post-study employment in Kazakhstan</li>
                  <li>Family support allowances for married scholars (limited)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process for 2025 Intake</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Competitions:</strong> Held 3 times per year (typically March, June, October)</li>
                  <li><strong>2025 Deadlines:</strong> Check official website for exact dates; applications ongoing</li>
                  <li><strong>Selection Period:</strong> 4-8 weeks after submission</li>
                  <li><strong>Notification:</strong> 1-2 months before program start</li>
                  <li><strong>Start Dates:</strong> Align with host university semesters (e.g., September 2025)</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed online application form (via bolashak.gov.kz portal)</li>
                  <li>Passport or ID copy</li>
                  <li>Academic transcripts and diplomas (certified)</li>
                  <li>Language proficiency certificates (KAZTEST, IELTS/TOEFL, etc.)</li>
                  <li>Unconditional admission letter from approved university</li>
                  <li>Personal statement/motivation letter</li>
                  <li>Recommendation letters (2-3 from academics/employers)</li>
                  <li>Medical certificate</li>
                  <li>Work experience proof (if required)</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Criteria</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Academic excellence and GPA</li>
                  <li>Relevance of program to Kazakhstan's priority sectors</li>
                  <li>Language proficiency and state language knowledge</li>
                  <li>Interview performance and motivation</li>
                  <li>Work experience and leadership potential</li>
                  <li>Overall fit with national development goals</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Studying Abroad with Bolashak</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Host Countries and Universities</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Scholars study in 33 countries at over 200 top universities, including the USA (Harvard, MIT), UK (Oxford, Cambridge), Germany (TU Munich), Australia (University of Sydney), and more. The approved list ensures high-quality education.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Living Experience</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Living abroad offers exposure to diverse cultures, advanced research facilities, and global networks. The stipend covers living costs in host cities, allowing focus on studies and professional growth.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Support During Studies</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The program provides ongoing support, including academic monitoring, emergency assistance, and community events to help scholars adapt and succeed.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Career Prospects and Alumni Impact</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Bolashak graduates are highly sought after in Kazakhstan, often securing leadership roles in government, industry, and academia. The mandatory 5-year work obligation ensures knowledge transfer to the national economy.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Alumni network provides mentorship, job opportunities, and collaboration platforms. Many graduates contribute to innovation in priority sectors, enhancing Kazakhstan's global competitiveness.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Apply for Bolashak Scholarship?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The Bolashak Scholarship offers Kazakh citizens a life-changing opportunity to gain world-class education and contribute to national development. Check the official website for the latest updates and start your application today.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Bolashak scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Kazakhstan government scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Study abroad fully funded</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Master's PhD Kazakhstan</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">International scholarship 2025</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Kazakh citizens education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Scholarships */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related Government Scholarships</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fulbright Scholarship USA",
                description: "Fully funded opportunities for graduate study in the United States",
                country: "🇺🇸 USA",
                amount: "Full Funding",
                link: "/scholarship/graduate/fulbright-scholarship"
              },
              {
                title: "Chevening Scholarship UK",
                description: "UK government scholarship for master's degrees",
                country: "🇬🇧 UK",
                amount: "Full Coverage",
                link: "/scholarship/graduate/chevening-scholarship"
              },
              {
                title: "DAAD Scholarship Germany",
                description: "German academic exchange service scholarships",
                country: "🇩🇪 Germany",
                amount: "€1,200/month +",
                link: "/scholarship/graduate/daad-scholarship"
              }
            ].map((scholarship, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">{scholarship.country}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {scholarship.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{scholarship.description}</p>
                  <div className="text-orange-500 font-semibold mb-4">{scholarship.amount}</div>
                  <Link to={scholarship.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BolashakGovernmentScholarship;
