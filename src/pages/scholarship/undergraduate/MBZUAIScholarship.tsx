import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users, Brain, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const MBZUAIScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>MBZUAI Scholarship 2025 - Muhammad bin Zayed University of AI Abu Dhabi</title>
        <meta name="description" content="Complete guide to MBZUAI scholarship at Muhammad bin Zayed University of Artificial Intelligence in Abu Dhabi, UAE. Full funding for AI and machine learning studies." />
        <meta name="keywords" content="MBZUAI scholarship, UAE AI scholarship, artificial intelligence university, Abu Dhabi scholarship, machine learning scholarship, computer science UAE" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/mbzuai-scholarship" />
        <meta property="og:title" content="MBZUAI Scholarship 2025 - Full AI Education Funding" />
        <meta property="og:description" content="Discover the MBZUAI scholarship program offering full funding for artificial intelligence and machine learning education in Abu Dhabi." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/mbzuai-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop"
          alt="MBZUAI Scholarship - AI University"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇦🇪</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                UAE - Abu Dhabi
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              MBZUAI Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              World's first AI-focused university offering full scholarships for future AI leaders
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
              <div className="text-2xl font-bold text-orange-500">100%</div>
              <div className="text-gray-400 text-sm">Full Funding</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">AI Focus</div>
              <div className="text-gray-400 text-sm">Specialized Programs</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Global</div>
              <div className="text-gray-400 text-sm">Research Hub</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Cpu className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Latest</div>
              <div className="text-gray-400 text-sm">Technology</div>
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
                <span className="font-semibold">AI Education Specialist</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated: Dec 19, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>14 min read</span>
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
                <h3 className="text-orange-500 font-bold text-lg mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>100% tuition coverage for all degree programs</li>
                  <li>Monthly living stipend and accommodation support</li>
                  <li>State-of-the-art AI research facilities and equipment</li>
                  <li>Comprehensive health insurance and visa support</li>
                  <li>Access to cutting-edge AI labs and supercomputing resources</li>
                  <li>Industry partnerships and internship opportunities</li>
                  <li>MacBook Pro provided to all students</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About MBZUAI and the Scholarship Program</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Mohamed bin Zayed University of Artificial Intelligence (MBZUAI) is the world's first graduate-level, research-based artificial intelligence university. Located in Abu Dhabi, UAE, MBZUAI was established in 2019 with the vision of advancing AI education, research, and innovation on a global scale.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  MBZUAI offers fully-funded scholarship programs across all its degree levels, including undergraduate, master's, and doctoral programs. The university's mission is to nurture the next generation of AI leaders and researchers who will shape the future of artificial intelligence and its applications across various industries.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The scholarship program reflects the UAE's commitment to becoming a global leader in AI and technology innovation. Students benefit from world-class faculty, state-of-the-art facilities, and extensive industry partnerships with leading technology companies and research institutions worldwide.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Academic Programs Available</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Undergraduate Programs</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Computer Science (AI)</h4>
                    <p className="text-gray-300 text-sm">Comprehensive CS program with AI specialization, covering machine learning, deep learning, and neural networks</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Artificial Intelligence</h4>
                    <p className="text-gray-300 text-sm">Dedicated AI program focusing on advanced algorithms, robotics, and intelligent systems</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Graduate Programs</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Master's in Machine Learning</h4>
                    <p className="text-gray-300 text-sm">Advanced ML techniques, statistical learning, and practical applications</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Master's in Computer Vision</h4>
                    <p className="text-gray-300 text-sm">Image processing, pattern recognition, and visual AI systems</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Master's in Natural Language Processing</h4>
                    <p className="text-gray-300 text-sm">Language understanding, text processing, and conversational AI</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Master's in Robotics</h4>
                    <p className="text-gray-300 text-sm">Autonomous systems, human-robot interaction, and intelligent robotics</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>For undergraduate: Strong high school performance in mathematics and sciences</li>
                  <li>For graduate: Bachelor's degree in computer science, engineering, mathematics, or related field</li>
                  <li>Minimum GPA of 3.0/4.0 or equivalent</li>
                  <li>Strong background in mathematics, statistics, and programming</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>IELTS 6.0+ (with no band below 5.5) or TOEFL iBT 70+</li>
                  <li>Strong English communication skills for academic success</li>
                  <li>Exemptions available for applicants from English-speaking countries</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Technical Prerequisites</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Programming experience in Python, Java, C++, or similar languages</li>
                  <li>Understanding of fundamental mathematics: calculus, linear algebra, statistics</li>
                  <li>Basic knowledge of algorithms and data structures</li>
                  <li>Interest in AI, machine learning, and emerging technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits and Coverage</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Coverage</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Full Tuition:</strong> 100% coverage of all academic fees</li>
                  <li><strong>Monthly Stipend:</strong> AED 5,000 for living expenses</li>
                  <li><strong>Accommodation:</strong> On-campus housing or housing allowance</li>
                  <li><strong>Health Insurance:</strong> Comprehensive medical coverage</li>
                  <li><strong>Visa Support:</strong> Full assistance with UAE student visa</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Benefits</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>MacBook Pro provided to all students</li>
                  <li>Access to high-performance computing clusters</li>
                  <li>Research funding for projects and conferences</li>
                  <li>Industry mentorship and internship programs</li>
                  <li>Professional development workshops and seminars</li>
                  <li>Global research collaboration opportunities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Early Admission:</strong> October 1 - December 15, 2024</li>
                  <li><strong>Regular Admission:</strong> January 1 - March 31, 2025</li>
                  <li><strong>Late Admission:</strong> April 1 - May 31, 2025</li>
                  <li><strong>Results Notification:</strong> 4-6 weeks after application</li>
                  <li><strong>Program Start:</strong> August/September 2025</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>Completed online application form</li>
                  <li>Academic transcripts and certificates (translated and attested)</li>
                  <li>English proficiency test scores</li>
                  <li>Statement of purpose and research interests</li>
                  <li>Letters of recommendation (2-3)</li>
                  <li>CV/Resume highlighting technical skills</li>
                  <li>Portfolio of programming projects (if available)</li>
                  <li>Passport copy and passport-size photographs</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Process</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Initial application screening and eligibility verification</li>
                  <li>Academic record evaluation and GPA assessment</li>
                  <li>Technical skills assessment and coding evaluation</li>
                  <li>Video interview with admission committee</li>
                  <li>Research interest alignment review</li>
                  <li>Final selection and scholarship award notification</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Research Opportunities and Faculty</h2>
                <p className="text-lg leading-relaxed mb-6">
                  MBZUAI boasts world-renowned faculty members from leading institutions such as MIT, Stanford, Carnegie Mellon, and Oxford. Students have access to cutting-edge research in areas including computer vision, natural language processing, machine learning, robotics, and AI ethics.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The university maintains active research partnerships with organizations like Microsoft, IBM, SoftBank, and the UAE government, providing students with real-world research opportunities and potential career pathways in both academia and industry.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Career Prospects and Alumni Network</h2>
                <p className="text-lg leading-relaxed mb-6">
                  MBZUAI graduates are highly sought after by leading technology companies, research institutions, and startups worldwide. The university's strong industry connections facilitate internships and job placements at companies like Google, Facebook, Microsoft, and emerging AI startups in the UAE and globally.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The growing alumni network includes AI researchers, data scientists, machine learning engineers, and technology entrepreneurs who continue to contribute to the advancement of AI across various sectors including healthcare, finance, transportation, and smart cities.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Join the AI Revolution?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  MBZUAI offers a unique opportunity to be at the forefront of artificial intelligence education and research. With full funding, world-class faculty, and access to cutting-edge technology, this scholarship can launch your career in the most exciting field of the 21st century.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">MBZUAI scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI university</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">UAE education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">artificial intelligence</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">machine learning</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">computer science</span>
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
                title: "King Abdulaziz University Scholarship",
                description: "Saudi Arabia government scholarships for international students",
                country: "🇸🇦 Saudi Arabia",
                amount: "SAR 3,000/month",
                link: "/scholarship/undergraduate/study-in-saudi-arabia-scholarship"
              },
              {
                title: "Singapore AI Scholarships",
                description: "Government scholarships for AI and technology studies",
                country: "🇸🇬 Singapore",
                amount: "S$3,000/month",
                link: "/scholarship/undergraduate/singapore-international-scholarships"
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

export default MBZUAIScholarship;