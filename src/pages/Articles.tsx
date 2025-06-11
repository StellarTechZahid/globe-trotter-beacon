import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock, Eye, FileText } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const allArticles = [
    {
      id: 1,
      title: "The Complete Guide to Choosing Your Study Abroad Destination",
      excerpt: "An in-depth analysis of factors to consider when selecting the perfect country and university for your international education.",
      content: "Choosing where to study abroad is one of the most important decisions you'll make. This comprehensive guide covers all the essential factors...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
      author: "Dr. Sarah Mitchell",
      date: "January 16, 2024",
      category: "Comprehensive Guides",
      readTime: "15 min read",
      views: "5.2k",
      featured: true,
      keywords: ["study abroad", "university selection", "international education"],
      slug: "/articles/choosing-study-destination"
    },
    {
      id: 2,
      title: "Understanding Student Visa Requirements: A Country-by-Country Analysis",
      excerpt: "Detailed breakdown of student visa requirements, application processes, and success strategies for major study destinations.",
      content: "Navigating student visa requirements can be complex. This article provides detailed insights into visa processes across different countries...",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=350&fit=crop",
      author: "Immigration Expert Team",
      date: "January 14, 2024",
      category: "Immigration & Visas",
      readTime: "12 min read",
      views: "4.1k",
      featured: true,
      keywords: ["student visa", "immigration", "visa requirements"],
      slug: "/articles/visa-requirements-analysis"
    },
    {
      id: 3,
      title: "The Economics of International Education: Cost Analysis and ROI",
      excerpt: "Comprehensive analysis of education costs worldwide and the return on investment for different study destinations and programs.",
      content: "Understanding the financial implications of studying abroad is crucial for making informed decisions. This detailed analysis covers costs and benefits...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop",
      author: "Financial Education Analyst",
      date: "January 12, 2024",
      category: "Financial Planning",
      readTime: "18 min read",
      views: "3.8k",
      featured: false,
      keywords: ["education costs", "financial planning", "ROI"],
      slug: "/articles/economics-of-education"
    },
    {
      id: 4,
      title: "Global University Rankings Decoded: What They Really Mean",
      excerpt: "An analytical look at university ranking systems worldwide and how to interpret them for your academic and career goals.",
      content: "University rankings can be confusing and sometimes misleading. This article breaks down different ranking systems and their methodologies...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
      author: "Academic Research Team",
      date: "January 10, 2024",
      category: "University Rankings",
      readTime: "14 min read",
      views: "2.9k",
      featured: false,
      keywords: ["university rankings", "QS rankings", "academic reputation"],
      slug: "/articles/university-rankings-decoded"
    },
    {
      id: 5,
      title: "Cultural Intelligence: Succeeding in Multicultural Academic Environments",
      excerpt: "Essential strategies for developing cultural intelligence and thriving in diverse international academic settings.",
      content: "Cultural intelligence is a crucial skill for international students. Learn how to navigate cultural differences and build meaningful relationships...",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=350&fit=crop",
      author: "Dr. Cultural Studies Expert",
      date: "January 8, 2024",
      category: "Cultural Adaptation",
      readTime: "11 min read",
      views: "2.3k",
      featured: false,
      keywords: ["cultural intelligence", "international students", "multicultural"],
      slug: "/articles/cultural-intelligence"
    },
    {
      id: 6,
      title: "Career Pathways for International Graduates: Industry Insights",
      excerpt: "Comprehensive overview of career opportunities and pathways available to international graduates across various industries.",
      content: "International graduates have unique advantages in the global job market. This article explores career pathways and industry-specific opportunities...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=350&fit=crop",
      author: "Career Development Specialist",
      date: "January 5, 2024",
      category: "Career Development",
      readTime: "13 min read",
      views: "3.5k",
      featured: false,
      keywords: ["career development", "international graduates", "job market"],
      slug: "/articles/career-pathways-graduates"
    },
    {
      id: 7,
      title: "Research Opportunities for International Students: A Global Perspective",
      excerpt: "Exploring research opportunities, funding options, and collaboration possibilities for international students across disciplines.",
      content: "Research opportunities can significantly enhance your academic experience and career prospects. This guide covers research programs worldwide...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=350&fit=crop",
      author: "Research Coordinator",
      date: "January 3, 2024",
      category: "Research & Academia",
      readTime: "16 min read",
      views: "2.1k",
      featured: false,
      keywords: ["research opportunities", "academic research", "funding"],
      slug: "/articles/research-opportunities"
    },
    {
      id: 8,
      title: "Technology in Education: How Digital Tools Transform International Learning",
      excerpt: "Analysis of how technology is revolutionizing international education and creating new opportunities for global collaboration.",
      content: "Technology is transforming how we learn and collaborate across borders. Explore the latest innovations in international education...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop",
      author: "EdTech Specialist",
      date: "December 30, 2023",
      category: "Educational Technology",
      readTime: "10 min read",
      views: "1.8k",
      featured: false,
      keywords: ["educational technology", "digital learning", "online education"],
       slug: "/articles/technology-in-education"
    },
    {
      id: 9,
      title: "How to Write a Strong SOP for Foreign Universities",
      excerpt: "A complete guide to crafting a compelling Statement of Purpose (SOP) that enhances your chances of admission to top international universities.",
      content: "Your Statement of Purpose (SOP) is a key element in your study abroad application. It reflects your goals, personality, and motivation to pursue higher studies. In this article, we break down what makes a strong SOP, its structure, and tips to help you write one that stands out.\n\nFrom a captivating introduction to well-articulated academic background and clear career goals, each section of your SOP should reflect clarity, purpose, and authenticity. Tailor your SOP to the course and university, highlighting how their offerings align with your aspirations.\n\nAdmissions committees look for passion, commitment, and relevance in your SOP. Avoid generic content—make your story personal, yet professional. Edit and proofread thoroughly before submission.",
      image: "https://images.unsplash.com/photo-1581093588401-9f7c3ca6a63c?w=600&h=350&fit=crop",
      author: "Admissions Coach",
      date: "June 11, 2025",
      category: "Study Abroad Guide",
      readTime: "8 min read",
      views: "1.2k",
      featured: false,
      keywords: ["statement of purpose", "SOP writing", "study abroad application"],
      slug: "/articles/how-to-write-a-strong-sop"
    }
  ];

  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = allArticles.slice(startIndex, startIndex + articlesPerPage);
  const featuredArticles = allArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>In-Depth Articles | Comprehensive International Education Analysis</title>
        <meta name="description" content="Access in-depth articles with expert analysis on international education topics, including university rankings, visa requirements, ROI, and strategic academic planning." />
        <meta name="keywords" content="international education articles, university rankings analysis, student visa guide, education costs analysis, academic planning, study abroad research" />
        <link rel="canonical" href="https://yourdomain.com/articles" />
        <meta property="og:title" content="In-Depth Articles | Comprehensive International Education Analysis" />
        <meta property="og:description" content="Access in-depth articles with expert analysis on international education topics, including university rankings, visa requirements, ROI, and strategic academic planning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/articles" />
        <meta property="og:image" content="https://yourdomain.com/images/articles-og-image.jpg" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">In-Depth Articles</h1>
            <p className="text-xl mb-6">Comprehensive analysis and expert insights on international education</p>
            <p className="text-lg opacity-90">Research-backed articles covering every aspect of studying abroad</p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center flex items-center justify-center">
            <FileText className="mr-3 h-8 w-8" />
            Featured In-Depth Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="bg-black border-blue-500 hover:border-blue-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.keywords.map((keyword, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link to={article.slug}>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">All Articles</h2>
            <p className="text-gray-300">Showing {startIndex + 1}-{Math.min(startIndex + articlesPerPage, allArticles.length)} of {allArticles.length} articles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentArticles.map((article) => (
              <Card key={article.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                  {article.featured && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.keywords.slice(0, 2).map((keyword, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link to={article.slug}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'text-orange-500 hover:text-orange-400'}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                      isActive={currentPage === i + 1}
                      className={currentPage === i + 1 ? 'bg-orange-500 text-black' : 'text-orange-500 hover:text-orange-400'}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'text-orange-500 hover:text-orange-400'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
