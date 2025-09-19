import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const StudyInSaudiArabiaScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Study in Saudi Arabia Scholarship 2025 - Ministry of Education</title>
        <meta name="description" content="Complete guide to Saudi Arabia Ministry of Education scholarships for international students. Learn about King Abdulaziz University scholarships and funding opportunities." />
        <meta name="keywords" content="Saudi Arabia scholarship, Ministry of Education Saudi Arabia, King Abdulaziz University scholarship, study in Saudi Arabia, Islamic scholarship, Middle East education" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/study-in-saudi-arabia-scholarship" />
        <meta property="og:title" content="Study in Saudi Arabia Scholarship 2025 - Full Guide" />
        <meta property="og:description" content="Discover comprehensive scholarship opportunities in Saudi Arabia through the Ministry of Education for international undergraduate students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/study-in-saudi-arabia-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop"
          alt="Study in Saudi Arabia Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇸🇦</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Saudi Arabia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Study in Saudi Arabia Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Ministry of Education scholarships for international students in the Kingdom
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
              <div className="text-2xl font-bold text-orange-500">SAR 3K</div>
              <div className="text-gray-400 text-sm">Monthly Stipend</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Islamic</div>
              <div className="text-gray-400 text-sm">Studies Focus</div>
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
              <div className="text-2xl font-bold text-orange-500">100+</div>
              <div className="text-gray-400 text-sm">Countries Eligible</div>
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
                <span className="font-semibold">Middle East Education Expert</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>13 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>4.1k views</span>
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
                  <li>Full tuition waiver for all approved programs</li>
                  <li>Monthly living allowance of SAR 3,000</li>
                  <li>Free accommodation in university dormitories</li>
                  <li>Comprehensive healthcare coverage</li>
                  <li>Arabic and Islamic studies support</li>
                  <li>Cultural orientation and integration programs</li>
                  <li>Round-trip airfare coverage</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About Saudi Arabia Ministry of Education Scholarships</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Kingdom of Saudi Arabia, through its Ministry of Education, offers comprehensive scholarship programs for international students as part of its vision to become a global hub for education and culture. These scholarships reflect Saudi Arabia's commitment to promoting cultural exchange and Islamic education worldwide.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The scholarship program is designed to attract talented international students to study at Saudi Arabia's leading universities, including King Abdulaziz University, King Saud University, and the Islamic University of Medina. The program particularly emphasizes Islamic studies, Arabic language, and Middle Eastern culture.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  As part of Saudi Arabia's Vision 2030, the country is investing heavily in education and research, making it an increasingly attractive destination for international students seeking quality education with strong financial support.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">General Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Non-Saudi nationality (preference for Muslim applicants)</li>
                  <li>High school diploma or equivalent with excellent grades</li>
                  <li>Age between 18-25 years for undergraduate programs</li>
                  <li>Good health and character references</li>
                  <li>No previous university degree in the same field</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Minimum GPA of 80% or equivalent in high school</li>
                  <li>Strong performance in relevant subjects</li>
                  <li>Passing grade in university entrance examinations</li>
                  <li>Basic knowledge of Arabic language (preferred)</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cultural and Religious Considerations</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Respect for Islamic values and Saudi cultural norms</li>
                  <li>Commitment to abide by university and national regulations</li>
                  <li>Interest in Islamic studies and Arabic culture</li>
                  <li>Understanding of conservative social environment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Coverage and Benefits</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition Fees:</strong> Complete waiver for all academic programs</li>
                  <li><strong>Monthly Allowance:</strong> SAR 3,000 for living expenses</li>
                  <li><strong>Housing:</strong> Free accommodation in university dormitories</li>
                  <li><strong>Healthcare:</strong> Full medical insurance and healthcare services</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Benefits</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Round-trip airfare at the beginning and end of studies</li>
                  <li>Free Arabic language courses for non-Arabic speakers</li>
                  <li>Islamic studies orientation and support</li>
                  <li>Cultural integration programs and activities</li>
                  <li>Access to university libraries and research facilities</li>
                  <li>Student visa and residence permit assistance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Available Programs and Universities</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">King Abdulaziz University</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <p className="text-gray-300 text-sm mb-2">Leading research university in Jeddah with comprehensive programs</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Engineering, Medicine, Sciences, Business</li>
                    <li>Strong international programs</li>
                    <li>Modern facilities and research centers</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Islamic University of Medina</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <p className="text-gray-300 text-sm mb-2">Specialized in Islamic studies and Arabic language</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Islamic Law (Sharia), Quran & Sunnah studies</li>
                    <li>Arabic Language and Literature</li>
                    <li>Islamic History and Culture</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">King Saud University</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                  <p className="text-gray-300 text-sm mb-2">Flagship university in Riyadh with diverse academic offerings</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Medicine, Engineering, Science, Humanities</li>
                    <li>Research-focused programs</li>
                    <li>Strong alumni network</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>December-February:</strong> Application period opens</li>
                  <li><strong>March-April:</strong> Document review and evaluation</li>
                  <li><strong>May-June:</strong> Interviews and final selection</li>
                  <li><strong>July:</strong> Scholarship award notifications</li>
                  <li><strong>August-September:</strong> Visa processing and arrival</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed application form (online submission)</li>
                  <li>High school diploma and transcripts (certified)</li>
                  <li>Birth certificate and passport copies</li>
                  <li>Medical certificate and health clearance</li>
                  <li>Character reference letters</li>
                  <li>Personal statement and motivation letter</li>
                  <li>Passport-size photographs</li>
                  <li>Proof of Islamic faith (if applicable)</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Channels</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Direct application through university websites</li>
                  <li>Saudi Arabian embassies and consulates</li>
                  <li>Ministry of Education scholarship portal</li>
                  <li>Authorized education agents and representatives</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Living in Saudi Arabia</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cultural Environment</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Saudi Arabia offers a unique cultural experience rooted in Islamic traditions and Arab heritage. The country has undergone significant modernization while maintaining its cultural identity. Students will experience traditional hospitality, rich history, and modern amenities.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Climate and Lifestyle</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The Kingdom features a desert climate with modern cities offering world-class amenities. Students can explore historical sites, modern shopping centers, and cultural attractions while benefiting from the country's strategic location between Asia, Africa, and Europe.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language and Communication</h3>
                <p className="text-lg leading-relaxed mb-6">
                  While Arabic is the primary language, English is widely used in universities and business settings. The scholarship program includes Arabic language support to help international students integrate more effectively into the academic and social environment.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Career Opportunities</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Graduates from Saudi universities benefit from the Kingdom's growing economy and Vision 2030 initiatives. The country is investing heavily in technology, renewable energy, tourism, and healthcare sectors, creating numerous opportunities for skilled professionals.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The strategic location of Saudi Arabia also provides access to opportunities across the Middle East and beyond. Many graduates pursue careers in international organizations, multinational companies, or return to their home countries with valuable skills and cultural understanding.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Study in Saudi Arabia?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The Saudi Arabia Ministry of Education scholarship program offers a unique opportunity to experience Islamic culture while receiving quality education with comprehensive financial support. Whether you're interested in Islamic studies, engineering, medicine, or other fields, Saudi universities provide modern facilities and traditional wisdom.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Saudi Arabia scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Islamic studies</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Middle East education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">King Abdulaziz University</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Arabic language</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">cultural exchange</span>
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
                title: "UAE Excellence Scholarships",
                description: "Mohammed bin Rashid Al Maktoum Foundation scholarships",
                country: "🇦🇪 UAE",
                amount: "AED 50,000/year",
                link: "/scholarship/undergraduate/uae-excellence-scholarships"
              },
              {
                title: "Turkish Government Scholarships",
                description: "Türkiye Scholarships for international students",
                country: "🇹🇷 Turkey",
                amount: "₺2,500/month",
                link: "/scholarship/undergraduate/turkish-government-scholarships"
              },
              {
                title: "Egyptian Government Scholarships",
                description: "Al-Azhar and Cairo University scholarships",
                country: "🇪🇬 Egypt",
                amount: "Full funding",
                link: "/scholarship/undergraduate/egyptian-government-scholarships"
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

export default StudyInSaudiArabiaScholarship;