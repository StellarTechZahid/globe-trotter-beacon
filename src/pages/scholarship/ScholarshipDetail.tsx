import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Calendar, CheckCircle, ArrowRight, MessageCircle, Star, TrendingUp, Users, BookOpen, GraduationCap, Clock, FileText, Target, Lightbulb, AlertCircle, User, Eye, Share2, Bookmark, ArrowLeft } from 'lucide-react';

const ScholarshipDetail = () => {
  const { slug } = useParams();
  
  // Mock scholarship data - in real app this would come from API/database
  const scholarship = {
    title: "Merit-Based Undergraduate Scholarships",
    description: "Academic excellence scholarships for high-achieving students starting their university journey. This comprehensive program recognizes outstanding academic achievement and provides substantial financial support for undergraduate studies.",
    amount: "$5,000 - $25,000",
    country: "USA",
    university: "Harvard University",
    deadline: "March 15, 2025",
    requirements: [
      "High GPA (3.5+)",
      "SAT/ACT scores",
      "Leadership experience",
      "Community service",
      "Personal statement",
      "Letters of recommendation",
      "Financial need demonstration",
      "Extracurricular activities"
    ],
    coverage: "Partial tuition coverage + book allowance + research opportunities",
    eligibility: [
      "International students welcome",
      "Undergraduate level only",
      "First-time university applicants",
      "English proficiency required",
      "Age limit: 25 years maximum"
    ],
    applicationProcess: [
      "Complete online application form",
      "Submit required documents",
      "Take standardized tests (SAT/ACT)",
      "Write personal statement",
      "Obtain recommendation letters",
      "Attend interview (if selected)",
      "Wait for final decision"
    ],
    benefits: [
      "Tuition fee reduction or waiver",
      "Monthly living allowance",
      "Book and study materials allowance",
      "Research project opportunities",
      "Mentorship program access",
      "Career guidance and support",
      "International student community",
      "Alumni network access"
    ],
    tips: [
      "Start your application early - at least 6 months before deadline",
      "Maintain excellent academic records throughout your studies",
      "Demonstrate leadership through extracurricular activities",
      "Write a compelling personal statement that tells your unique story",
      "Get strong recommendation letters from teachers who know you well",
      "Prepare thoroughly for standardized tests",
      "Show genuine interest in your chosen field of study",
      "Demonstrate financial need clearly and honestly"
    ]
  };

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const getCountryImage = (country: string) => {
    const countryImages: { [key: string]: string } = {
      'USA': 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop',
      'UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop',
      'Canada': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop',
      'Australia': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    };
    return countryImages[country] || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{scholarship.title} | Scholarship Details | Abroad Academics</title>
        <meta name="description" content={`Complete details about ${scholarship.title} - ${scholarship.description}`} />
        <link rel="canonical" href={`https://yourdomain.com/scholarship-details/${slug}`} />
        <meta property="og:title" content={`${scholarship.title} | Scholarship Details`} />
        <meta property="og:description" content={scholarship.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/scholarship-details/${slug}`} />
        <meta property="og:image" content={getCountryImage(scholarship.country)} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img 
          src={getCountryImage(scholarship.country)}
          alt={`${scholarship.title} - Study in ${scholarship.country}`}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link to="/scholarship/undergraduate" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Scholarships
            </Link>
            <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              {scholarship.university} • {scholarship.country}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {scholarship.title}
            </h1>
            <p className="text-xl mb-6 opacity-90">
              {scholarship.description}
            </p>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-gray-900 border-t border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-gray-300">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-orange-500" />
                <span className="font-semibold">Scholarship Advisory Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>Updated December 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-orange-500" />
                <span>1.2k views</span>
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
                <h3 className="text-orange-500 font-bold text-lg mb-2">Key Scholarship Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Award Amount: {scholarship.amount} with additional benefits</li>
                  <li>Application Deadline: {scholarship.deadline}</li>
                  <li>Coverage: {scholarship.coverage}</li>
                  <li>Open to international students pursuing undergraduate studies</li>
                  <li>Competitive selection process with merit-based evaluation</li>
                  <li>Post-study work opportunities available</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Scholarship Overview</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The {scholarship.title} at {scholarship.university} represents one of the most prestigious opportunities for international students seeking quality education in {scholarship.country}. This comprehensive scholarship program has been designed to support exceptional students who demonstrate academic excellence, leadership potential, and a commitment to making a positive impact in their chosen field of study.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Established with the mission of fostering global talent and promoting international education, this scholarship provides substantial financial support ranging from {scholarship.amount}, making world-class education accessible to deserving students worldwide. The program not only covers educational expenses but also offers unique opportunities for personal and professional development through mentorship programs, research opportunities, and access to an extensive alumni network.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Recipients of this scholarship join a diverse community of scholars from around the globe, creating lifelong connections and collaborative opportunities that extend far beyond their academic years. The comprehensive support system ensures that students can focus on their studies while building the skills and networks necessary for future success in their chosen careers.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">1. Eligibility Criteria</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the eligibility requirements is crucial for a successful application. This scholarship is designed for exceptional students who meet specific academic and personal criteria.
                </p>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">General Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  {scholarship.eligibility.map((criteria, index) => (
                    <li key={index}><strong>✓</strong> {criteria}</li>
                  ))}
                </ul>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  {scholarship.requirements.map((req, index) => (
                    <li key={index}><strong>✓</strong> {req}</li>
                  ))}
                </ul>
                <p className="text-lg leading-relaxed mb-6">
                  Meeting these requirements is essential for consideration. We recommend starting your preparation early to ensure all criteria are met before the application deadline.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">2. Application Process</h2>
                <p className="text-lg leading-relaxed mb-6">
                  The application process is designed to be comprehensive yet straightforward. Follow these step-by-step instructions to submit a complete and competitive application.
                </p>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Step-by-Step Application Guide</h3>
                <div className="space-y-4 mb-6">
                  {scholarship.applicationProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg border border-orange-500/20">
                      <div className="bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 text-lg">{step}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Each step is critical to your application success. We recommend starting the process at least 6 months before the deadline to ensure adequate preparation time for all requirements.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">3. Scholarship Benefits & Coverage</h2>
                <p className="text-lg leading-relaxed mb-6">
                  This scholarship provides comprehensive support designed to remove financial barriers and enhance your academic experience. Recipients receive more than just financial aid - they gain access to a complete support ecosystem.
                </p>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Financial Benefits</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The scholarship covers {scholarship.amount} and includes additional financial benefits:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {scholarship.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Beyond financial support, scholarship recipients become part of an exclusive community with access to leadership development programs, industry networking events, and career placement assistance.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">4. Expert Application Tips</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Our scholarship advisory team has compiled these proven strategies based on successful applications from previous years. Following these recommendations significantly increases your chances of success.
                </p>
                
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Proven Success Strategies</h3>
                <div className="space-y-4 mb-6">
                  {scholarship.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/5 rounded-lg border border-orange-500/20">
                      <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{tip}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Remember that scholarship selection is highly competitive. Standing out requires not just meeting the minimum requirements, but demonstrating exceptional potential and alignment with the scholarship's values and objectives.
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ready to Begin Your Application?</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The {scholarship.title} at {scholarship.university} represents a life-changing opportunity for dedicated students who aspire to excellence in their chosen field. This scholarship not only provides substantial financial support ranging from {scholarship.amount} but also opens doors to a network of global leaders, researchers, and innovators who will shape the future.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Don't let this opportunity pass by. Start your application process today and take the first step toward achieving your academic and career aspirations. Our expert consultation team is here to guide you through every aspect of the application process, from document preparation to interview coaching.
                </p>
                <div className="text-center">
                  <Button 
                    onClick={scrollToConsultation}
                    className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 text-lg font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Free Expert Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{scholarship.university.toLowerCase().replace(' ', '-')}</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{scholarship.country.toLowerCase()}-scholarships</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">undergraduate-scholarships</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">international-students</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">merit-scholarships</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">study-abroad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related Scholarships</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Australia Awards Scholarships for International Students 2024",
                excerpt: "Fully funded scholarships covering tuition, living expenses, and travel costs for outstanding international students.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=350&fit=crop",
                university: "Various Universities",
                country: "Australia",
                link: "/scholarship-details/australia-awards-scholarship-2024"
              },
              {
                title: "Canada Graduate Scholarships Program 2024",
                excerpt: "Merit-based scholarships for master's and doctoral students in Canadian universities.",
                image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=350&fit=crop",
                university: "Canadian Universities",
                country: "Canada",
                link: "/scholarship-details/canada-graduate-scholarships-2024"
              },
              {
                title: "DAAD Scholarships for Development-Related Courses 2024",
                excerpt: "German academic exchange scholarships for students from developing countries.",
                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=350&fit=crop",
                university: "German Universities",
                country: "Germany",
                link: "/scholarship-details/daad-scholarships-development-2024"
              }
            ].map((scholarship, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={scholarship.image}
                    alt={scholarship.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {scholarship.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{scholarship.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {scholarship.country}
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      {scholarship.university}
                    </div>
                  </div>
                  <Link to={scholarship.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      View Details
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

export default ScholarshipDetail;