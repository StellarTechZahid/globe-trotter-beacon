import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, Palmtree } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const UniversitasSebelasMareScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Universitas Sebelas Maret Scholarship Indonesia 2025 - Complete Guide</title>
        <meta name="description" content="Complete guide to Universitas Sebelas Maret (UNS) scholarship program in Indonesia for international students. Learn about KNB scholarship opportunities." />
        <meta name="keywords" content="UNS scholarship, Universitas Sebelas Maret, Indonesia scholarship, KNB scholarship, study in Indonesia, Solo university, Surakarta education" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/universitas-sebelas-maret-scholarship" />
        <meta property="og:title" content="Universitas Sebelas Maret Scholarship Indonesia 2025" />
        <meta property="og:description" content="Discover scholarship opportunities at UNS Indonesia with full funding for international undergraduate students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/universitas-sebelas-maret-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=630&fit=crop"
          alt="Universitas Sebelas Maret Indonesia"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇮🇩</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Indonesia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Universitas Sebelas Maret Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Leading Indonesian university offering comprehensive scholarships for international students
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
              <div className="text-2xl font-bold text-orange-500">IDR 2.5M</div>
              <div className="text-gray-400 text-sm">Monthly Allowance</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Palmtree className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Cultural</div>
              <div className="text-gray-400 text-sm">Immersion</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Free</div>
              <div className="text-gray-400 text-sm">Tuition & Housing</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">ASEAN+</div>
              <div className="text-gray-400 text-sm">Regional Hub</div>
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
                <span className="font-semibold">Southeast Asia Education Expert</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>11 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>2.9k views</span>
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
                  <li>Full tuition waiver for entire program duration</li>
                  <li>Monthly living allowance of IDR 2,500,000</li>
                  <li>Free accommodation in university dormitories</li>
                  <li>Comprehensive Indonesian language training</li>
                  <li>Cultural immersion and exchange programs</li>
                  <li>Health insurance and medical coverage</li>
                  <li>Access to research facilities and libraries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About Universitas Sebelas Maret (UNS)</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Universitas Sebelas Maret (UNS), located in Surakarta (Solo), Central Java, is one of Indonesia's premier public universities. Established in 1976, UNS has grown to become a leading institution in Southeast Asia, known for its academic excellence, research innovation, and cultural heritage preservation.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The university is strategically located in Solo, a city renowned as the cultural heart of Java, offering students a unique blend of modern education and traditional Indonesian culture. UNS is committed to internationalization and regularly hosts students from across the ASEAN region and beyond through various scholarship programs.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  UNS participates in the Indonesian government's KNB (Kemitraan Negara Berkembang) scholarship program and offers institutional scholarships for outstanding international students, making it an attractive destination for those seeking quality education in Southeast Asia.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Available Academic Programs</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Engineering</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Civil Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>Electrical Engineering</li>
                    <li>Chemical Engineering</li>
                    <li>Industrial Engineering</li>
                    <li>Architecture</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Economics and Business</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Management</li>
                    <li>Accounting</li>
                    <li>Economics</li>
                    <li>International Business</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Agriculture</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Agronomy</li>
                    <li>Animal Science</li>
                    <li>Agricultural Technology</li>
                    <li>Forestry</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Cultural Sciences</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Indonesian Literature</li>
                    <li>English Literature</li>
                    <li>History</li>
                    <li>Javanese Culture</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Qualifications</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>High school diploma or equivalent (Grade 12 completion)</li>
                  <li>Minimum GPA of 3.0/4.0 or equivalent</li>
                  <li>Strong academic performance in relevant subjects</li>
                  <li>Age limit: typically under 25 years for undergraduate programs</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>TOEFL iBT 61+ or IELTS 5.5+ for English programs</li>
                  <li>Basic Indonesian language proficiency (or willingness to learn)</li>
                  <li>Participation in mandatory Indonesian language course</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Health and Character Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Medical certificate confirming good health</li>
                  <li>Clean criminal background check</li>
                  <li>Commitment to Indonesian laws and university regulations</li>
                  <li>Cultural sensitivity and adaptability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits and Coverage</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition Waiver:</strong> Complete exemption from academic fees</li>
                  <li><strong>Monthly Allowance:</strong> IDR 2,500,000 for living expenses</li>
                  <li><strong>Accommodation:</strong> Free dormitory housing or housing allowance</li>
                  <li><strong>Health Insurance:</strong> Comprehensive medical coverage</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic and Cultural Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>One year Indonesian language intensive course</li>
                  <li>Cultural orientation and integration programs</li>
                  <li>Academic mentoring and support services</li>
                  <li>Access to university facilities and resources</li>
                  <li>Participation in cultural festivals and events</li>
                  <li>Field trips and cultural excursions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>February-April:</strong> Application period for KNB scholarship</li>
                  <li><strong>May-June:</strong> Document verification and evaluation</li>
                  <li><strong>July:</strong> Selection results announcement</li>
                  <li><strong>August:</strong> Visa processing and departure preparation</li>
                  <li><strong>September:</strong> Arrival and orientation in Indonesia</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed application form and passport copies</li>
                  <li>High school certificate and transcripts (legalized)</li>
                  <li>English proficiency test scores</li>
                  <li>Health certificate and medical examination</li>
                  <li>Recommendation letters from teachers/employers</li>
                  <li>Statement of purpose and study plan</li>
                  <li>Financial guarantee or sponsorship letter</li>
                  <li>Passport-size photographs</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Process</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Online application submission and document review</li>
                  <li>Academic record evaluation and eligibility verification</li>
                  <li>Interview with university representatives (online/in-person)</li>
                  <li>Language proficiency assessment</li>
                  <li>Final selection committee evaluation</li>
                  <li>Scholarship award notification and acceptance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Living in Solo, Indonesia</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cultural Heritage</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Solo (Surakarta) is renowned as the cultural heart of Java, home to traditional Javanese arts, batik craftsmanship, and royal palaces. Students can immerse themselves in Indonesian culture while pursuing their studies, experiencing traditional music, dance, and cuisine.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cost of Living</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Solo offers an affordable cost of living compared to Jakarta or other major Indonesian cities. The monthly allowance provided by the scholarship is sufficient to cover living expenses, allowing students to focus on their studies and cultural exploration.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Student Life</h3>
                <p className="text-lg leading-relaxed mb-6">
                  UNS provides a vibrant student life with various organizations, sports clubs, and cultural activities. International students can participate in Indonesian language clubs, traditional arts workshops, and community service programs while building lifelong friendships.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Career Opportunities</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Graduates from UNS benefit from Indonesia's growing economy and increasing international business connections. The country's strategic location in Southeast Asia provides access to ASEAN markets and global opportunities in various sectors including technology, manufacturing, agriculture, and services.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Many international graduates choose to work in Indonesia's expanding industries or return to their home countries with valuable cross-cultural experience and Indonesian language skills, which are increasingly valued in international business and development organizations.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Experience Indonesia?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The Universitas Sebelas Maret scholarship offers an exceptional opportunity to experience Indonesian culture while receiving quality education in a supportive environment. With comprehensive financial support and cultural immersion, this program can broaden your global perspective and career opportunities.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">UNS scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Indonesia education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">KNB scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Southeast Asia</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">cultural exchange</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Surakarta Solo</span>
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
                title: "Al Bukhari University Scholarship",
                description: "Malaysian Islamic university scholarship for international students",
                country: "🇲🇾 Malaysia",
                amount: "RM 1,500/month",
                link: "/scholarship/undergraduate/al-bukhari-university-scholarship"
              },
              {
                title: "Brunei Government Scholarships",
                description: "Sultan Hassanal Bolkiah scholarship program",
                country: "🇧🇳 Brunei",
                amount: "Full funding",
                link: "/scholarship/undergraduate/brunei-government-scholarships"
              },
              {
                title: "Thai Government Scholarships",
                description: "Royal Thai Government scholarship program",
                country: "🇹🇭 Thailand",
                amount: "THB 15,000/month",
                link: "/scholarship/undergraduate/thai-government-scholarships"
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

export default UniversitasSebelasMareScholarship;