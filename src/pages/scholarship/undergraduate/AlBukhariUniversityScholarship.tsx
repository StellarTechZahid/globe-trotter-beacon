import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, Star, DollarSign, Home, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const AlbukharyInternationalUniversityScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Albukhary International University Scholarship Malaysia 2025 - Fully Funded Guide for International Students</title>
        <meta name="description" content="Comprehensive guide to the fully funded Albukhary International University (AIU) scholarship in Malaysia for 2025. Learn about eligibility, benefits, application process, programs, and more for undergraduate studies." />
        <meta name="keywords" content="Albukhary International University scholarship, AIU scholarship Malaysia, fully funded scholarship Malaysia, undergraduate scholarship international students, Malaysia university scholarship 2025, low-income student scholarship, AIU programs, study in Malaysia for free" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/albukhary-international-university-scholarship" />
        <meta property="og:title" content="Albukhary International University Scholarship Malaysia 2025 - Fully Funded" />
        <meta property="og:description" content="Discover fully funded opportunities at Albukhary International University (AIU) in Malaysia, including tuition, accommodation, meals, and monthly allowance for eligible international students." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/albukhary-international-university-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop"
          alt="Albukhary International University Campus Malaysia"
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
              Albukhary International University Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Fully funded undergraduate scholarship for underprivileged international students in Malaysia focusing on balanced education and social impact.
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
              <div className="text-gray-400 text-sm">Tuition Coverage</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Home className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Accommodation</div>
              <div className="text-gray-400 text-sm">On-Campus Housing</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Meals</div>
              <div className="text-gray-400 text-sm">Daily Provided</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Monthly Allowance</div>
              <div className="text-gray-400 text-sm">For Living Expenses</div>
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
                <span>3.5k views</span>
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
                  <li>100% tuition fee coverage for the entire program</li>
                  <li>Free on-campus accommodation in fully residential facilities</li>
                  <li>Daily meals provided by the university</li>
                  <li>Monthly allowance for personal and living expenses</li>
                  <li>Health insurance and medical coverage</li>
                  <li>Access to state-of-the-art facilities and resources</li>
                  <li>Character building and leadership development programs</li>
                  <li>Career counseling, internship opportunities, and job placement support</li>
                  <li>Multicultural environment with students from over 40 countries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About Albukhary International University (AIU)</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Albukhary International University (AIU) is a private, non-profit institution located in Alor Setar, Kedah, Malaysia. Founded in 2010 by Malaysian philanthropist Tan Sri Syed Mokhtar Albukhary through the Albukhary Foundation, AIU aims to provide quality higher education to talented but underprivileged students from around the world, particularly from developing countries.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The university operates on a fully residential campus, fostering a conducive environment for learning, personal growth, and cultural exchange. AIU integrates academic excellence with values-based education, emphasizing social responsibility, ethical leadership, and community service. With students from over 40 countries, AIU promotes a diverse, inclusive community that reflects global perspectives.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  AIU's scholarship program is central to its mission, offering fully funded opportunities to students who demonstrate academic potential, good character, and financial need. The program not only covers educational costs but also supports holistic development through various extracurricular activities and social business initiatives.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Available Undergraduate Programs</h2>
                <p className="text-lg leading-relaxed mb-6">
                  AIU offers a range of undergraduate programs across various schools, designed to equip students with practical skills and knowledge for global challenges. All programs integrate elements of social business and ethical practices.
                </p>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">School of Business and Social Sciences</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Bachelor of Business Administration (Honours)</li>
                    <li>Bachelor of Business Administration with Computer Science (Honours)</li>
                    <li>Bachelor of Business Administration (Honours) (Marketing)</li>
                    <li>Bachelor of Business Administration (Honours) (Human Resource Management)</li>
                    <li>Bachelor of Economics (Honours)</li>
                    <li>Bachelor of Social Development (Honours)</li>
                    <li>Bachelor of Finance (Islamic Finance) (Honours)</li>
                    <li>Bachelor of Politics and International Relations (Honours)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">School of Education and Human Sciences</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Bachelor of Elementary Education (Honours)</li>
                    <li>Bachelor in Early Childhood Education (Honours)</li>
                    <li>Bachelor of Media and Communication (Honours)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">School of Computing and Informatics</h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Bachelor in Computer Science (Honours)</li>
                    <li>Bachelor in Data Science (Honours)</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Foundation programs are also available for students who need preparatory studies: Foundation in Computing and Foundation in Arts. Undergraduate programs typically last 3-4 years, depending on the field.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements for AIU Scholarship 2025</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">General and Personal Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Age between 18-22 years old at the time of application</li>
                  <li>Single marital status</li>
                  <li>No family members previously sponsored by Albukhary Foundation</li>
                  <li>Commitment to AIU's values of social responsibility and ethical conduct</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Household income below USD 300 per month for international applicants</li>
                  <li>For Malaysian applicants: Below MYR 2,400 (Sabah/Sarawak), MYR 5,300 (W.P. Kuala Lumpur/Putrajaya/Labuan), or MYR 2,900 (other states)</li>
                  <li>Proof of financial need through documentation</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>High school diploma or equivalent with minimum CGPA of 2.5/4.0 or equivalent (e.g., 5 credits in O-Levels including English and Math)</li>
                  <li>Strong academic performance in relevant subjects</li>
                  <li>English proficiency: Minimum IELTS 5.0, TOEFL 500 (paper-based), or equivalent</li>
                  <li>Foundation program entry for those not meeting direct undergraduate requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits and Comprehensive Support</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Coverage</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Full Tuition:</strong> 100% coverage for the entire duration of study</li>
                  <li><strong>Accommodation:</strong> Free on-campus housing in modern residential facilities</li>
                  <li><strong>Meals:</strong> Daily meals provided through university dining services</li>
                  <li><strong>Monthly Allowance:</strong> Stipend for personal expenses, books, and incidentals</li>
                  <li><strong>Health Insurance:</strong> Comprehensive medical coverage</li>
                  <li><strong>Other Support:</strong> Uniforms, basic necessities, and travel assistance if needed</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic and Development Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Academic mentoring and tutoring services</li>
                  <li>Leadership and soft skills training workshops</li>
                  <li>Social business and entrepreneurship programs</li>
                  <li>Career guidance, internships, and networking opportunities</li>
                  <li>Community service and volunteer projects</li>
                  <li>Counseling and personal development support</li>
                  <li>Access to library, labs, sports facilities, and extracurricular activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process for 2025 Intake</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>International Applicants:</strong> Deadline July 31, 2025 for October 2025 intake (Note: As of September 19, 2025, international applications are closed; check for next intake)</li>
                  <li><strong>Malaysian Applicants:</strong> Deadline September 30, 2025 for October 2025 intake</li>
                  <li><strong>Interview and Selection:</strong> 4-8 weeks after submission</li>
                  <li><strong>Notification:</strong> 1-2 months before semester start</li>
                  <li><strong>Orientation:</strong> October 2025 (specific dates: 6-12 for Foundation, 20-24 for Undergraduate)</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed online application form (via https://apply.aiu.edu.my)</li>
                  <li>High school certificates and transcripts (certified copies)</li>
                  <li>English proficiency test scores (IELTS/TOEFL)</li>
                  <li>Passport copy (for international) or ID (for Malaysian)</li>
                  <li>Recent passport-sized photographs</li>
                  <li>Personal statement (500-1000 words) on background, aspirations, and commitment to social impact</li>
                  <li>Two recommendation letters from teachers or community leaders</li>
                  <li>Proof of household income and financial statements</li>
                  <li>Medical report and health declaration</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Process and Criteria</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Initial screening based on academic and financial eligibility</li>
                  <li>Interview assessment: Socio-economic status (40%), Communication skills (25%), Personality & attitude (20%), Defense of personal statement (15%)</li>
                  <li>Holistic evaluation including leadership potential and community involvement</li>
                  <li>No plagiarism or fraud allowed; applications will be rejected</li>
                  <li>Priority to students from low-income backgrounds in developing countries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Living and Studying in Malaysia at AIU</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Campus Life and Facilities</h3>
                <p className="text-lg leading-relaxed mb-4">
                  AIU's fully residential campus in Alor Setar provides a safe, modern environment with 24/7 security, libraries, computer labs, sports centers, and prayer facilities. The multicultural setting allows students to build global networks while engaging in cultural events and clubs.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cost of Living and Support</h3>
                <p className="text-lg leading-relaxed mb-4">
                  With all major expenses covered, students can focus on studies. Malaysia's affordable living, combined with the scholarship, ensures minimal financial burden. Additional support includes transportation assistance and emergency funds.
                </p>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Cultural and Social Experience</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Malaysia offers a blend of modern and traditional cultures in a Muslim-friendly environment. AIU's location in Kedah provides access to natural beauty, historical sites, and urban centers like Kuala Lumpur (4-hour drive).
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Career Prospects and Alumni Success</h2>
                <p className="text-lg leading-relaxed mb-6">
                  AIU graduates are equipped for careers in business, education, IT, social development, and more. The emphasis on social business prepares them for roles in NGOs, corporations, and entrepreneurship. Alumni have secured positions in international organizations, started social enterprises, and pursued further studies globally.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The university's career center provides internships, job fairs, and alumni networking. With a focus on ethical leadership, AIU graduates are highly regarded for their values-driven approach.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Apply for AIU Scholarship?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The Albukhary International University scholarship offers a transformative opportunity for underprivileged students to achieve academic excellence and make a social impact. With full funding and comprehensive support, this is your chance to study in Malaysia.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Albukhary International University</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AIU scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Fully funded Malaysia scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Undergraduate scholarship 2025</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">International students Malaysia</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Low income scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Study in Malaysia free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Scholarships */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related Fully Funded Scholarships</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Malaysia International Scholarship (MIS)",
                description: "Government-funded scholarship for international students in Malaysia",
                country: "🇲🇾 Malaysia",
                amount: "Full Funding",
                link: "/scholarship/undergraduate/malaysia-international-scholarship"
              },
              {
                title: "Turkish Scholarships",
                description: "Fully funded opportunities in Turkey for undergraduates",
                country: "🇹🇷 Turkey",
                amount: "₺2,500/month +",
                link: "/scholarship/undergraduate/turkish-government-scholarships"
              },
              {
                title: "Indonesia International Student Mobility Awards",
                description: "Scholarships for study in Indonesia universities",
                country: "🇮🇩 Indonesia",
                amount: "Full Coverage",
                link: "/scholarship/undergraduate/iisma-indonesia"
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

export default AlbukharyInternationalUniversityScholarship;
