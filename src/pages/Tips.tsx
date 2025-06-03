import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Lightbulb, Star, BookOpen } from 'lucide-react';
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

const Tips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tipsPerPage = 6;

  const allTips = [
    {
      id: 1,
      title: "10 Essential Tips for First-Time International Students",
      excerpt: "Comprehensive guide covering everything from cultural adaptation to academic success for students studying abroad for the first time.",
      content: "Starting your journey as an international student can be overwhelming, but with the right preparation and mindset, it becomes an incredible adventure...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
      author: "Student Success Team",
      date: "January 15, 2024",
      category: "Student Life",
      difficulty: "Beginner",
      readTime: "5 min read",
      rating: 4.9,
      helpful: "2.1k people found this helpful",
      slug: "/tips/first-time-international-students"
    },
    {
      id: 2,
      title: "Scholarship Application Secrets: How to Stand Out",
      excerpt: "Proven strategies and insider tips to make your scholarship applications irresistible to selection committees.",
      content: "Securing scholarships requires more than good grades. Learn the secrets that scholarship winners use to craft compelling applications...",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=350&fit=crop",
      author: "Scholarship Expert",
      date: "January 12, 2024",
      category: "Scholarships",
      difficulty: "Intermediate",
      readTime: "8 min read",
      rating: 4.8,
      helpful: "1.8k people found this helpful",
      slug: "/tips/scholarship-application-secrets"
    },
    {
      id: 3,
      title: "Budget-Friendly Study Abroad: Save Money Without Compromising Quality",
      excerpt: "Smart strategies to minimize costs while maximizing your international education experience.",
      content: "Studying abroad doesn't have to break the bank. Discover practical ways to manage expenses while getting the most out of your education...",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=350&fit=crop",
      author: "Financial Advisor",
      date: "January 10, 2024",
      category: "Finance",
      difficulty: "Beginner",
      readTime: "6 min read",
      rating: 4.7,
      helpful: "1.5k people found this helpful",
      slug: "/tips/budget-friendly-study-abroad"
    },
    {
      id: 4,
      title: "IELTS Speaking Test: 7 Proven Strategies for Band 7+",
      excerpt: "Master the IELTS speaking test with expert strategies that have helped thousands of students achieve their target scores.",
      content: "The IELTS speaking test can be nerve-wracking, but with the right preparation and strategies, you can confidently achieve your target band score...",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=350&fit=crop",
      author: "IELTS Instructor",
      date: "January 8, 2024",
      category: "Test Prep",
      difficulty: "Intermediate",
      readTime: "7 min read",
      rating: 4.9,
      helpful: "2.3k people found this helpful",
      slug: "/tips/ielts-speaking-strategies"
    },
    {
      id: 5,
      title: "University Application Essays: How to Tell Your Story",
      excerpt: "Craft compelling personal statements and essays that showcase your unique personality and achievements.",
      content: "Your application essay is your chance to stand out from thousands of other applicants. Learn how to tell your story in a way that captivates admissions officers...",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=350&fit=crop",
      author: "Admissions Counselor",
      date: "January 5, 2024",
      category: "Applications",
      difficulty: "Advanced",
      readTime: "9 min read",
      rating: 4.8,
      helpful: "1.9k people found this helpful",
      slug: "/tips/university-application-essays"
    },
    {
      id: 6,
      title: "Cultural Adaptation: Thriving in Your New Country",
      excerpt: "Essential strategies for adapting to a new culture and making the most of your international experience.",
      content: "Cultural adaptation is a crucial part of studying abroad. Learn practical strategies to navigate cultural differences and build meaningful connections...",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=350&fit=crop",
      author: "Cultural Advisor",
      date: "January 3, 2024",
      category: "Cultural Adaptation",
      difficulty: "Beginner",
      readTime: "6 min read",
      rating: 4.6,
      helpful: "1.4k people found this helpful",
      slug: "/tips/cultural-adaptation"
    },
    {
      id: 7,
      title: "Part-Time Work for International Students: Legal Guidelines",
      excerpt: "Understanding work rights and finding legal employment opportunities while studying abroad.",
      content: "Working while studying can provide valuable experience and financial support. Learn about legal requirements and opportunities in different countries...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=350&fit=crop",
      author: "Immigration Advisor",
      date: "December 30, 2023",
      category: "Work Rights",
      difficulty: "Intermediate",
      readTime: "8 min read",
      rating: 4.7,
      helpful: "1.6k people found this helpful",
      slug: "/tips/part-time-work-legal"
    },
    {
      id: 8,
      title: "Time Management for International Students: Study Smart, Not Hard",
      excerpt: "Effective time management strategies to balance academics, social life, and personal well-being.",
      content: "Balancing academic responsibilities with social activities and personal care is crucial for success. Master these time management techniques...",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=350&fit=crop",
      author: "Academic Success Coach",
      date: "December 28, 2023",
      category: "Study Skills",
      difficulty: "Beginner",
      readTime: "5 min read",
      rating: 4.5,
      helpful: "1.2k people found this helpful",
      slug: "/tips/time-management-tips"
    }
  ];

  const totalPages = Math.ceil(allTips.length / tipsPerPage);
  const startIndex = (currentPage - 1) * tipsPerPage;
  const currentTips = allTips.slice(startIndex, startIndex + tipsPerPage);
  const topRatedTips = allTips.filter(tip => tip.rating >= 4.8);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Study Abroad Tips | Expert Advice for International Students</title>
        <meta name="description" content="Get practical study abroad tips from experts, including scholarship application strategies, cultural adaptation advice, and academic success techniques for international students." />
        <meta name="keywords" content="study abroad tips, international student advice, scholarship application tips, cultural adaptation, student life advice, IELTS preparation" />
        <link rel="canonical" href="https://yourdomain.com/tips" />
        <meta property="og:title" content="Study Abroad Tips | Expert Advice for International Students" />
        <meta property="og:description" content="Get practical study abroad tips from experts, including scholarship application strategies, cultural adaptation advice, and academic success techniques for international students." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tips" />
        <meta property="og:image" content="https://yourdomain.com/images/tips-og-image.jpg" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Study Abroad Tips</h1>
            <p className="text-xl mb-6">Expert advice and practical tips for your international education journey</p>
            <p className="text-lg opacity-90">From application strategies to cultural adaptation - your success guide</p>
          </div>
        </div>
      </section>

      {/* Top Rated Tips */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-500 mb-8 text-center flex items-center justify-center">
            <Star className="mr-3 h-8 w-8" />
            Top Rated Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {topRatedTips.map((tip) => (
              <Card key={tip.id} className="bg-black border-green-500 hover:border-green-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {tip.rating}
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {tip.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      tip.difficulty === 'Beginner' ? 'bg-green-200 text-green-800' :
                      tip.difficulty === 'Intermediate' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {tip.difficulty}
                    </span>
                    <span className="text-sm text-gray-400">{tip.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{tip.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {tip.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {tip.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">{tip.helpful}</div>
                  <Link to={tip.slug}>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                      Read Full Tip
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500 flex items-center">
              <Lightbulb className="mr-3 h-8 w-8" />
              All Study Tips
            </h2>
            <p className="text-gray-300">Showing {startIndex + 1}-{Math.min(startIndex + tipsPerPage, allTips.length)} of {allTips.length} tips</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentTips.map((tip) => (
              <Card key={tip.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {tip.category}
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {tip.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      tip.difficulty === 'Beginner' ? 'bg-green-200 text-green-800' :
                      tip.difficulty === 'Intermediate' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {tip.difficulty}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {tip.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{tip.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {tip.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {tip.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">{tip.helpful}</div>
                  <Link to={tip.slug}>
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

export default Tips;
