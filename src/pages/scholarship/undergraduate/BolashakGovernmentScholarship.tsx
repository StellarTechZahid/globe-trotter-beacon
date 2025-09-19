import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users } from 'lucide-react';
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
        <title>Bolashak Government Scholarship Kazakhstan 2025 - Complete Guide</title>
        <meta name="description" content="Complete guide to Bolashak International Scholarship from Kazakhstan government. Learn about eligibility, benefits, and application process for international education." />
        <meta name="keywords" content="Bolashak scholarship, Kazakhstan government scholarship, international education Kazakhstan, study abroad scholarship, Nazarbayev University scholarship" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/bolashak-government-scholarship" />
        <meta property="og:title" content="Bolashak Government Scholarship Kazakhstan 2025" />
        <meta property="og:description" content="Comprehensive guide to the Bolashak International Scholarship program for Kazakhstan citizens seeking international education." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/bolashak-government-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=630&fit=crop"
          alt="Bolashak Government Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
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
              Kazakhstan's premier international scholarship program for future leaders and innovators
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
              <div className="text-2xl font-bold text-orange-500">Full</div>
              <div className="text-gray-400 text-sm">Funding Coverage</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">100+</div>
              <div className="text-gray-400 text-sm">Top Universities</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">30+</div>
              <div className="text-gray-400 text-sm">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">12K+</div>
              <div className="text-gray-400 text-sm">Alumni Network</div>
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
                <span className="font-semibold">Education Specialist</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>3.1k views</span>
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
                <h3 className="text-orange-500 font-bold text-lg mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Full funding for tuition, living expenses, and travel costs</li>
                  <li>Access to top universities in 30+ countries worldwide</li>
                  <li>Comprehensive pre-departure preparation and training</li>
                  <li>Health insurance and visa support</li>
                  <li>Professional development and networking opportunities</li>
                  <li>Obligation to return and contribute to Kazakhstan's development</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About Bolashak International Scholarship</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Bolashak International Scholarship Program is Kazakhstan's flagship initiative for developing human capital through international education. Established in 1993 by the First President of Kazakhstan, Nursultan Nazarbayev, the program has sponsored over 12,000 Kazakhstani citizens to study at the world's leading universities.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  "Bolashak" means "future" in Kazakh, reflecting the program's mission to prepare future leaders who will drive Kazakhstan's economic and social development. The scholarship covers undergraduate, graduate, and doctoral studies, as well as professional development programs and medical residencies.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Recipients are selected through a rigorous competitive process and are expected to return to Kazakhstan upon completion of their studies to contribute their knowledge and skills to the country's development for a minimum period equal to their study duration abroad.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Citizenship and Residency</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Kazakhstan citizenship (must hold valid passport)</li>
                  <li>Permanent residence in Kazakhstan for at least 5 years prior to application</li>
                  <li>No dual citizenship during the application process</li>
                  <li>Age requirements vary by program level</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>For undergraduate: High school diploma with excellent grades (GPA 4.0+)</li>
                  <li>For graduate: Bachelor's degree with strong academic performance</li>
                  <li>Must be admitted to a university from the approved Bolashak list</li>
                  <li>Program must align with Kazakhstan's priority development areas</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language Proficiency</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>IELTS 6.5+ or TOEFL iBT 90+ for English-speaking countries</li>
                  <li>Equivalent proficiency in other languages for non-English countries</li>
                  <li>Must demonstrate proficiency before departure</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Other Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>No previous international degree funding from Kazakhstan government</li>
                  <li>Clean criminal record and good health certificate</li>
                  <li>Commitment to return to Kazakhstan after graduation</li>
                  <li>Pass psychological evaluation and interview</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Coverage</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition Fees:</strong> Full coverage as per university requirements</li>
                  <li><strong>Living Allowance:</strong> Monthly stipend covering accommodation, food, and personal expenses</li>
                  <li><strong>Travel Costs:</strong> Round-trip airfare to study destination</li>
                  <li><strong>Visa and Insurance:</strong> Full coverage of visa fees and health insurance</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Language preparation courses before departure</li>
                  <li>Cultural orientation and pre-departure training</li>
                  <li>Academic support and monitoring during studies</li>
                  <li>Professional development opportunities</li>
                  <li>Alumni network access and career guidance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Priority Fields of Study</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Engineering & Technology</h4>
                    <p className="text-gray-300 text-sm">Mining, petroleum, renewable energy, aerospace, IT</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Medicine & Healthcare</h4>
                    <p className="text-gray-300 text-sm">Clinical medicine, public health, biotechnology, pharmacy</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Natural Sciences</h4>
                    <p className="text-gray-300 text-sm">Chemistry, physics, mathematics, environmental science</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Agriculture & Food</h4>
                    <p className="text-gray-300 text-sm">Agricultural sciences, food technology, veterinary medicine</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Application Period:</strong> November - December 2024</li>
                  <li><strong>Document Review:</strong> January - February 2025</li>
                  <li><strong>Testing & Interviews:</strong> February - March 2025</li>
                  <li><strong>Final Selection:</strong> April 2025</li>
                  <li><strong>Preparation Period:</strong> May - August 2025</li>
                  <li><strong>Departure:</strong> September 2025</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed online application form</li>
                  <li>University admission letter (conditional or unconditional)</li>
                  <li>Academic transcripts and certificates (notarized)</li>
                  <li>Language proficiency test scores</li>
                  <li>Personal statement and study plan</li>
                  <li>Letters of recommendation (2-3)</li>
                  <li>Medical certificate and psychological evaluation</li>
                  <li>Police clearance certificate</li>
                  <li>Passport copies and photographs</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Process</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Initial document screening and eligibility verification</li>
                  <li>Academic performance assessment</li>
                  <li>Written examination (subject-specific)</li>
                  <li>English language proficiency test</li>
                  <li>Panel interview with evaluation committee</li>
                  <li>Psychological assessment and background check</li>
                  <li>Final ranking and scholarship award</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Post-Graduation Obligations</h2>
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg mb-6">
                  <h4 className="text-orange-500 font-semibold mb-3">Work-Back Requirement</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Must return to Kazakhstan within 30 days of graduation</li>
                    <li>Work in Kazakhstan for a period equal to study duration abroad</li>
                    <li>Employment should be in the field of study and benefit Kazakhstan</li>
                    <li>Regular reporting to scholarship administrators required</li>
                    <li>Violation of terms may result in scholarship repayment obligation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Success Stories and Alumni Impact</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Bolashak alumni have made significant contributions to Kazakhstan's development across various sectors. Many have become leaders in government, business, healthcare, education, and technology. The program has produced ministers, CEOs, renowned researchers, and innovative entrepreneurs who continue to drive the country's progress.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Notable achievements include advancements in Kazakhstan's digital transformation, improvements in healthcare delivery, development of sustainable energy projects, and strengthening of international partnerships. The Bolashak Alumni Association actively supports current scholars and promotes knowledge sharing.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Apply?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The Bolashak International Scholarship represents one of the most comprehensive government scholarship programs globally, offering not just financial support but a pathway to becoming a leader in Kazakhstan's future development. If you're a Kazakhstani citizen with dreams of world-class education and a commitment to serving your country, this could be your opportunity.
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
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Kazakhstan education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">international scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">government funding</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">study abroad</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">leadership development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Scholarships */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related Scholarships</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GKS Global Korea Scholarship",
                description: "Korean government scholarship for international undergraduate students",
                country: "🇰🇷 South Korea",
                amount: "₩900,000/month",
                link: "/scholarship/undergraduate/gks-global-korea-scholarship"
              },
              {
                title: "Russian Government Scholarships",
                description: "Federal scholarships for international students in Russia",
                country: "🇷🇺 Russia",
                amount: "Full funding",
                link: "/scholarship/undergraduate/russian-government-scholarships"
              },
              {
                title: "Turkish Government Scholarships",
                description: "Türkiye Scholarships for international students",
                country: "🇹🇷 Turkey",
                amount: "₺2,500/month",
                link: "/scholarship/undergraduate/turkish-government-scholarships"
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