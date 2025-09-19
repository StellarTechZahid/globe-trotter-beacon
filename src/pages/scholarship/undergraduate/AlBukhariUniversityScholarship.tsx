import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const AlBukhariUniversityScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Al Bukhari University Scholarship Malaysia 2025 - Complete Guide</title>
        <meta name="description" content="Complete guide to Al Bukhari International University scholarship in Malaysia for international students. Learn about Islamic education opportunities and funding." />
        <meta name="keywords" content="Al Bukhari University scholarship, Malaysia Islamic scholarship, Islamic university Malaysia, international scholarship Malaysia, Alor Setar university" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/al-bukhari-university-scholarship" />
        <meta property="og:title" content="Al Bukhari University Scholarship Malaysia 2025" />
        <meta property="og:description" content="Discover scholarship opportunities at Al Bukhari International University Malaysia with support for international Islamic education." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/al-bukhari-university-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1564769662461-4bacc4ecceba?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1564769662461-4bacc4ecceba?w=1200&h=630&fit=crop"
          alt="Al Bukhari University Malaysia"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇲🇾</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                Malaysia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Al Bukhari University Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Premier Islamic university scholarship for international students in Malaysia
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
              <div className="text-2xl font-bold text-orange-500">RM 1.5K</div>
              <div className="text-gray-400 text-sm">Monthly Allowance</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Islamic</div>
              <div className="text-gray-400 text-sm">Education Focus</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Reduced</div>
              <div className="text-gray-400 text-sm">Tuition Fees</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Multi</div>
              <div className="text-gray-400 text-sm">Cultural</div>
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
                <span className="font-semibold">Islamic Education Specialist</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>2.2k views</span>
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
                  <li>Significant tuition fee reduction for eligible students</li>
                  <li>Monthly allowance of RM 1,500 for living expenses</li>
                  <li>Accommodation assistance and housing support</li>
                  <li>Comprehensive Islamic studies curriculum</li>
                  <li>Multicultural learning environment</li>
                  <li>Character development and spiritual guidance</li>
                  <li>Career counseling and job placement support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About Al Bukhari International University</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Al Bukhari International University (UniABU) is a private Islamic university located in Alor Setar, Kedah, Malaysia. Established with the vision of producing holistic Muslim graduates who are academically excellent and spiritually grounded, the university combines modern education with Islamic values and principles.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Named after the renowned Islamic scholar Imam Al-Bukhari, the university is committed to providing quality education that integrates academic knowledge with Islamic teachings. The institution serves students from various countries, creating a diverse and multicultural learning environment that reflects the universal nature of Islamic education.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  UniABU offers scholarship opportunities to outstanding international students, particularly those who demonstrate academic excellence, good character, and commitment to Islamic values. The scholarship program aims to make Islamic higher education accessible to deserving students regardless of their financial background.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Available Academic Programs</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Islamic Studies</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Islamic Jurisprudence (Fiqh)</li>
                    <li>Quranic Studies and Tafsir</li>
                    <li>Hadith Studies</li>
                    <li>Islamic Theology (Aqidah)</li>
                    <li>Islamic History and Civilization</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Arabic Language and Literature</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Arabic Language and Literature</li>
                    <li>Arabic Translation Studies</li>
                    <li>Comparative Literature</li>
                    <li>Linguistics and Applied Arabic</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Business and Management</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Islamic Banking and Finance</li>
                    <li>Business Administration</li>
                    <li>Entrepreneurship</li>
                    <li>Islamic Economics</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Faculty of Education</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Islamic Education</li>
                    <li>Teaching Arabic as Second Language</li>
                    <li>Educational Psychology</li>
                    <li>Curriculum and Instruction</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>High school diploma or equivalent qualification</li>
                  <li>Strong academic performance with minimum 80% aggregate</li>
                  <li>Proficiency in Arabic or willingness to learn (for Arabic programs)</li>
                  <li>Basic understanding of Islamic principles and teachings</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Character and Religious Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Muslim faith and commitment to Islamic values</li>
                  <li>Good moral character and ethical conduct</li>
                  <li>Recommendation letters from Islamic scholars or community leaders</li>
                  <li>Commitment to university's Islamic code of conduct</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>English proficiency: IELTS 5.0+ or TOEFL equivalent</li>
                  <li>Arabic proficiency for Arabic-taught programs</li>
                  <li>Bahasa Malaysia basic knowledge helpful</li>
                  <li>Language support courses available</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits and Support</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Assistance</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition Reduction:</strong> 30-70% reduction in tuition fees</li>
                  <li><strong>Monthly Allowance:</strong> RM 1,500 for living expenses</li>
                  <li><strong>Accommodation Support:</strong> Priority hostel placement or housing allowance</li>
                  <li><strong>Book Allowance:</strong> Annual allocation for academic materials</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic and Personal Development</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Academic mentoring and tutorial support</li>
                  <li>Islamic character development programs</li>
                  <li>Leadership training and skills development</li>
                  <li>Career guidance and job placement assistance</li>
                  <li>Community service and volunteer opportunities</li>
                  <li>Spiritual guidance and counseling services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>January-May:</strong> Application period for September intake</li>
                  <li><strong>June-August:</strong> Application period for January intake</li>
                  <li><strong>Selection Period:</strong> 4-6 weeks after application deadline</li>
                  <li><strong>Results:</strong> Notification 2 months before semester start</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed scholarship application form</li>
                  <li>High school certificates and transcripts (certified)</li>
                  <li>English proficiency test scores</li>
                  <li>Recommendation letters from Islamic scholars/teachers</li>
                  <li>Personal statement expressing Islamic commitment</li>
                  <li>Medical certificate and health clearance</li>
                  <li>Passport copies and photographs</li>
                  <li>Financial statement or sponsorship letter</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Criteria</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Academic excellence and scholastic achievements</li>
                  <li>Islamic knowledge and commitment to faith</li>
                  <li>Character assessment and moral standing</li>
                  <li>Leadership potential and community involvement</li>
                  <li>Interview performance and communication skills</li>
                  <li>Financial need and merit combination</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Living in Malaysia</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Islamic Environment</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Malaysia provides an ideal environment for Islamic education with its Muslim-majority population and Islamic-friendly policies. Students can practice their faith freely while accessing modern amenities and multicultural experiences.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cost of Living</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Malaysia offers an affordable cost of living compared to other countries in the region. The scholarship allowance is designed to cover basic living expenses, allowing students to focus on their studies and spiritual development.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cultural Experience</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Students at UniABU experience a blend of Malay, Islamic, and international cultures. The university's location in Kedah provides access to Malaysia's rich Islamic heritage while being close to natural attractions and historical sites.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Career Prospects</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Graduates from Al Bukhari International University are well-prepared for careers in Islamic education, religious leadership, Islamic banking and finance, and various fields that require strong ethical foundations. The university's emphasis on character development produces graduates who are valued in both religious and secular sectors.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Many graduates pursue further studies at prestigious Islamic universities worldwide or take up positions as Islamic scholars, teachers, and leaders in their home countries. The network of alumni provides ongoing support and career opportunities globally.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Pursue Islamic Education?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Al Bukhari International University offers a unique opportunity to combine academic excellence with spiritual growth in a supportive Islamic environment. With scholarship support and comprehensive programs, this could be your pathway to becoming a knowledgeable and spiritually grounded Muslim professional.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Al Bukhari University</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Islamic education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Malaysia scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Muslim students</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">religious studies</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">character development</span>
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
                title: "Study in Saudi Arabia Scholarship",
                description: "Ministry of Education Saudi Arabia scholarships",
                country: "🇸🇦 Saudi Arabia",
                amount: "SAR 3,000/month",
                link: "/scholarship/undergraduate/study-in-saudi-arabia-scholarship"
              },
              {
                title: "Universitas Sebelas Maret Scholarship",
                description: "Indonesian government scholarship for international students",
                country: "🇮🇩 Indonesia",
                amount: "IDR 2,500,000/month",
                link: "/scholarship/undergraduate/universitas-sebelas-maret-scholarship"
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

export default AlBukhariUniversityScholarship;