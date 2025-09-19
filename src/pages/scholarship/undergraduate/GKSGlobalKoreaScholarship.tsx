import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Bookmark, Award, Globe, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const GKSGlobalKoreaScholarship = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>GKS Global Korea Scholarship 2025 - Complete Guide & Application</title>
        <meta name="description" content="Comprehensive guide to GKS Global Korea Scholarship for international undergraduate students. Learn about eligibility, benefits, application process and requirements for studying in South Korea." />
        <meta name="keywords" content="GKS scholarship, Global Korea Scholarship, South Korea education, Korean government scholarship, study in Korea, international scholarship, undergraduate scholarship Korea" />
        <link rel="canonical" href="https://yourdomain.com/scholarship/undergraduate/gks-global-korea-scholarship" />
        <meta property="og:title" content="GKS Global Korea Scholarship 2025 - Complete Application Guide" />
        <meta property="og:description" content="Everything you need to know about the GKS Global Korea Scholarship for international students including eligibility, benefits, and application process." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/scholarship/undergraduate/gks-global-korea-scholarship" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop"
          alt="GKS Global Korea Scholarship"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Undergraduate Scholarships
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🇰🇷</span>
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                South Korea
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              GKS Global Korea Scholarship 2025
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Korean Government's premier scholarship program for outstanding international undergraduate students
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
              <div className="text-2xl font-bold text-orange-500">₩900K</div>
              <div className="text-gray-400 text-sm">Monthly Stipend</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">Full</div>
              <div className="text-gray-400 text-sm">Tuition Coverage</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">5 Years</div>
              <div className="text-gray-400 text-sm">Program Duration</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-500">2,000+</div>
              <div className="text-gray-400 text-sm">Annual Recipients</div>
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
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>5.2k views</span>
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
                  <li>Full tuition coverage for undergraduate programs</li>
                  <li>Monthly living allowance of ₩900,000</li>
                  <li>One year Korean language training program</li>
                  <li>Round-trip airfare and settlement allowance</li>
                  <li>Comprehensive medical insurance coverage</li>
                  <li>Research allowance and thesis printing support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">About GKS Global Korea Scholarship</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The Global Korea Scholarship (GKS), formerly known as the Korean Government Scholarship Program (KGSP), is South Korea's flagship scholarship program designed to attract outstanding international students to Korean universities. Established in 1967, this prestigious program has supported over 7,000 international students from around the world.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The scholarship aims to promote international educational exchanges with Korea and contribute to mutual friendship and understanding between Korea and participating countries. Recipients not only receive comprehensive financial support but also gain access to Korea's world-class education system and vibrant cultural experiences.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Requirements</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>High school diploma or equivalent qualification</li>
                  <li>GPA of 80% or above (or equivalent)</li>
                  <li>Age limit: Under 25 years old as of September 1, 2025</li>
                  <li>Must not hold Korean citizenship</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Language Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>TOPIK (Test of Proficiency in Korean) Level 3 or above preferred</li>
                  <li>IELTS 5.5+ or TOEFL iBT 70+ for English-taught programs</li>
                  <li>One-year Korean language training provided if needed</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Health Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Medical certificate confirming physical and mental health</li>
                  <li>No infectious diseases</li>
                  <li>Ability to pursue academic activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Benefits</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Support</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Tuition:</strong> Full coverage for the entire program duration</li>
                  <li><strong>Monthly Allowance:</strong> ₩900,000 for living expenses</li>
                  <li><strong>Airfare:</strong> Round-trip tickets to Korea</li>
                  <li><strong>Settlement Allowance:</strong> ₩200,000 upon arrival</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Additional Benefits</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Korean language training for one year (if required)</li>
                  <li>Medical insurance coverage</li>
                  <li>Research allowance: ₩210,000 per semester</li>
                  <li>Thesis printing allowance: ₩500,000</li>
                  <li>Access to campus facilities and dormitories</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Application Process</h2>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Application Timeline</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li><strong>Application Period:</strong> September - November 2024</li>
                  <li><strong>Document Submission:</strong> By November 30, 2024</li>
                  <li><strong>Selection Results:</strong> March 2025</li>
                  <li><strong>Program Start:</strong> March or September 2025</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  <li>GKS application form (online submission)</li>
                  <li>Personal statement and study plan</li>
                  <li>High school diploma and transcripts (apostilled)</li>
                  <li>Korean or English proficiency test scores</li>
                  <li>Recommendation letters (2)</li>
                  <li>Medical certificate</li>
                  <li>Passport copy and photographs</li>
                </ul>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">Selection Process</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                  <li>Document screening by NIIED</li>
                  <li>Interview (online or in-person)</li>
                  <li>University selection and admission</li>
                  <li>Final scholarship award notification</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Top Universities Participating</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Seoul National University</h4>
                    <p className="text-gray-300 text-sm">Korea's premier national university, consistently ranked #1 in Korea</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">KAIST</h4>
                    <p className="text-gray-300 text-sm">Leading science and technology institution with cutting-edge research</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Yonsei University</h4>
                    <p className="text-gray-300 text-sm">Private research university known for international programs</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">Korea University</h4>
                    <p className="text-gray-300 text-sm">Prestigious private university with strong alumni network</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Tips for a Successful Application</h2>
                <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300">
                  <li><strong>Start Early:</strong> Begin preparing documents at least 6 months before the deadline</li>
                  <li><strong>Learn Korean:</strong> Basic Korean knowledge demonstrates commitment and cultural interest</li>
                  <li><strong>Strong Personal Statement:</strong> Clearly articulate your academic goals and motivation for studying in Korea</li>
                  <li><strong>Research Universities:</strong> Choose universities that align with your academic interests</li>
                  <li><strong>Cultural Awareness:</strong> Show understanding and appreciation of Korean culture</li>
                  <li><strong>Academic Excellence:</strong> Maintain strong grades and participate in extracurricular activities</li>
                </ul>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Apply?</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The GKS Global Korea Scholarship offers an exceptional opportunity to experience world-class education in one of Asia's most dynamic countries. With comprehensive financial support and access to top-tier universities, this scholarship can transform your academic and professional future.
                </p>
                <Button 
                  onClick={scrollToConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto"
                >
                  Get Expert Application Guidance
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">GKS scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Korea education</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Korean government scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">study in Korea</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">undergraduate scholarship</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Seoul National University</span>
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
                title: "Japanese MEXT Scholarships",
                description: "Government scholarships for international undergraduate students in Japan",
                country: "🇯🇵 Japan",
                amount: "¥117,000/month",
                link: "/scholarship/undergraduate/japanese-mext-scholarships"
              },
              {
                title: "Chinese Government Scholarship",
                description: "CSC scholarships for international students in China",
                country: "🇨🇳 China",
                amount: "Full funding",
                link: "/scholarship/undergraduate/chinese-government-scholarship"
              },
              {
                title: "Singapore International Scholarships",
                description: "Government scholarships for studying in Singapore",
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

export default GKSGlobalKoreaScholarship;