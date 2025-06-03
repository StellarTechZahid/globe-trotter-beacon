
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Eye, Share2, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityRankingsDecoded = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
          alt="University Rankings Decoded"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/articles" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Global University Rankings Decoded: What They Really Mean
            </h1>
            <div className="flex items-center flex-wrap gap-y-2 space-x-6 text-blue-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Academic Research Team
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                January 10, 2024
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                14 min read
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                2.9k views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">University Rankings</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">QS Rankings</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">THE Rankings</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Academic Reputation</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Table of Contents */}
              <Card className="bg-black border-orange-500 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Table of Contents</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#introduction" className="hover:text-orange-500">1. Introduction to University Rankings</a></li>
                    <li><a href="#major-rankings" className="hover:text-orange-500">2. Major Ranking Systems Compared</a></li>
                    <li><a href="#methodology" className="hover:text-orange-500">3. Methodologies and Criteria</a></li>
                    <li><a href="#limitations" className="hover:text-orange-500">4. Limitations and Criticisms</a></li>
                    <li><a href="#how-to-use" className="hover:text-orange-500">5. How to Use Rankings Effectively</a></li>
                    <li><a href="#beyond-rankings" className="hover:text-orange-500">6. Beyond Rankings: Other Factors to Consider</a></li>
                    <li><a href="#regional-context" className="hover:text-orange-500">7. Regional and National Context</a></li>
                    <li><a href="#conclusion" className="hover:text-orange-500">8. Conclusion and Recommendations</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Article Body */}
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <p className="text-lg leading-relaxed">
                    University rankings have become increasingly influential in shaping student decisions, institutional strategies, 
                    and even national education policies. However, these rankings can be confusing, sometimes misleading, and are often 
                    misinterpreted. This comprehensive analysis decodes global university ranking systems, examining what they measure, 
                    how they differ, and what they actually tell us about educational quality and student experience.
                  </p>

                  <section id="introduction" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Introduction to University Rankings</h2>
                    
                    <p className="mb-4">
                      University rankings emerged in the early 1980s but gained significant global influence in the 2000s with the 
                      advent of international rankings. Today, these systems have evolved into complex evaluation mechanisms that 
                      attempt to quantify the quality and performance of educational institutions worldwide. While they serve an 
                      important purpose in providing comparative information, they also raise questions about what constitutes 
                      educational excellence and how it can be measured.
                    </p>
                    <p className="mb-4">
                      The rise of rankings coincides with the increasing globalization of higher education, growing student mobility, 
                      and heightened competition among universities for talent, resources, and prestige. As a result, rankings have 
                      become powerful instruments that influence various stakeholders, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Prospective students and their families making enrollment decisions</li>
                      <li>University administrators developing strategic plans</li>
                      <li>Faculty members choosing where to work or collaborate</li>
                      <li>Employers screening graduates for recruitment</li>
                      <li>Governments allocating resources and setting education policies</li>
                      <li>Research funding agencies determining grant allocations</li>
                    </ul>
                  </section>
                  
                  <section id="major-rankings" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Major Ranking Systems Compared</h2>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">QS World University Rankings</h3>
                    <p className="mb-4">
                      Established in 2004, the QS (Quacquarelli Symonds) World University Rankings initially collaborated with Times 
                      Higher Education before becoming an independent ranking system. The QS ranking places significant weight on 
                      academic reputation (40%) based on a global survey of academics. It also considers employer reputation (10%), 
                      faculty-to-student ratio (20%), citations per faculty (20%), and international faculty and student ratios (5% each).
                    </p>
                    <p className="mb-4">
                      <strong className="text-orange-400">Distinctive Features:</strong> QS rankings emphasize reputation surveys 
                      heavily, giving substantial weight to how universities are perceived by academics and employers worldwide. This 
                      approach tends to favor well-established, prestigious institutions with strong brand recognition.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">Times Higher Education (THE) World University Rankings</h3>
                    <p className="mb-4">
                      THE rankings evaluate universities across five areas: teaching (30%), research (30%), citations (30%), 
                      international outlook (7.5%), and industry income (2.5%). Unlike QS, THE places equal emphasis on teaching, 
                      research, and citations, aiming for a more balanced assessment of university performance.
                    </p>
                    <p className="mb-4">
                      <strong className="text-orange-400">Distinctive Features:</strong> THE rankings incorporate a broader range of 
                      metrics, including income and research productivity indicators, and use a more complex methodology to evaluate 
                      teaching quality, including student-to-staff ratios, doctorate-to-bachelor's ratios, and institutional income.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">Academic Ranking of World Universities (ARWU)</h3>
                    <p className="mb-4">
                      Also known as the Shanghai Ranking, ARWU focuses heavily on research output and quality. It evaluates universities 
                      based on alumni and staff winning Nobel Prizes and Fields Medals (30%), highly cited researchers (20%), research 
                      output in top journals (20%), papers indexed in major citation indices (20%), and per capita academic performance (10%).
                    </p>
                    <p className="mb-4">
                      <strong className="text-orange-400">Distinctive Features:</strong> ARWU is notably research-centric and relies 
                      entirely on objective indicators rather than reputation surveys. This methodology tends to favor universities 
                      with strong natural sciences and mathematics programs, particularly those with Nobel laureates and Fields Medal winners.
                    </p>

                    {/* More content would be included here */}
                  </section>
                  
                  <section id="methodology" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Methodologies and Criteria</h2>
                    <p className="mb-4">
                      Ranking systems use various methodologies to evaluate universities, with significant differences in the data 
                      sources, indicators, and weightings they employ. Understanding these methodological approaches is crucial for 
                      interpreting what rankings actually measure.
                    </p>
                    
                    {/* More content would go here */}
                  </section>
                  
                  {/* Additional sections would continue */}
                  
                  <section id="conclusion" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Conclusion and Recommendations</h2>
                    <p>
                      University rankings provide valuable comparative information but should be used as just one of many tools in 
                      the university selection process. Students should consider their personal academic interests, career goals, 
                      learning preferences, and financial circumstances alongside ranking data. The most successful university choice 
                      will come from balancing quantitative metrics with qualitative factors that align with individual needs and aspirations.
                    </p>
                    <p className="mt-4">
                      Remember that the "best" university in absolute terms may not be the best university for every student. By 
                      understanding what rankings measure—and what they don't—prospective students can make more informed decisions 
                      about their educational futures.
                    </p>
                  </section>

                  <section className="mt-12 border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Need Expert Guidance on University Selection?</h3>
                    <p className="mb-6">
                      Our education consultants can help you interpret university rankings in context and find the institution that best 
                      matches your academic profile, career goals, and personal preferences. Book a consultation today to discuss your options.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3">
                        Schedule a Consultation
                      </Button>
                    </Link>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Economics of International Education: Cost Analysis and ROI",
                excerpt: "Comprehensive analysis of education costs worldwide and the return on investment for different study destinations and programs.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop",
                author: "Financial Education Analyst",
                date: "January 12, 2024",
                link: "/articles/economics-of-education"
              },
              {
                title: "Cultural Intelligence: Succeeding in Multicultural Academic Environments",
                excerpt: "Essential strategies for developing cultural intelligence and thriving in diverse international academic settings.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=350&fit=crop",
                author: "Dr. Cultural Studies Expert",
                date: "January 8, 2024",
                link: "/articles/cultural-intelligence"
              },
              {
                title: "Research Opportunities for International Students: A Global Perspective",
                excerpt: "Exploring research opportunities, funding options, and collaboration possibilities for international students across disciplines.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=350&fit=crop",
                author: "Research Coordinator",
                date: "January 3, 2024",
                link: "/articles/research-opportunities"
              }
            ].map((article, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <Link to={article.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Read Article
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

export default UniversityRankingsDecoded;
