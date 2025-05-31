
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, BookOpen, Eye } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const allBlogs = [
    {
      id: 1,
      title: "Complete Guide to Studying in Canada: Top Universities and Scholarships 2024",
      excerpt: "Discover why Canada is the #1 destination for international students with world-class universities, affordable education, and post-graduation work opportunities.",
      content: "Canada has emerged as the leading destination for international students worldwide, and for good reason. With its welcoming immigration policies, high-quality education system, and multicultural environment, Canada offers unparalleled opportunities for academic and personal growth...",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=350&fit=crop",
      author: "Sarah Johnson",
      date: "January 15, 2024",
      category: "Study Guides",
      readTime: "8 min read",
      views: "2.3k",
      tags: ["Canada", "Universities", "Scholarships", "International Students"],
      featured: true
    },
    {
      id: 2,
      title: "Why Study in Australia: Best Universities and Student Life Guide",
      excerpt: "Explore Australia's top-ranked universities, vibrant student life, and excellent career prospects for international students in 2024.",
      content: "Australia continues to attract hundreds of thousands of international students each year with its world-renowned education system, stunning landscapes, and laid-back lifestyle...",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=350&fit=crop",
      author: "Michael Chen",
      date: "January 12, 2024",
      category: "Study Destinations",
      readTime: "6 min read",
      views: "1.8k",
      tags: ["Australia", "Universities", "Student Life", "Education"],
      featured: true
    },
    {
      id: 3,
      title: "Top 10 Scholarship Opportunities for International Students in 2024",
      excerpt: "Comprehensive list of fully-funded and partial scholarships available for international students across top study destinations.",
      content: "Securing funding for international education can be challenging, but numerous scholarship opportunities are available for deserving students. From government-funded programs to university-specific grants...",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=350&fit=crop",
      author: "Emma Wilson",
      date: "January 10, 2024",
      category: "Scholarships",
      readTime: "10 min read",
      views: "3.1k",
      tags: ["Scholarships", "Funding", "Financial Aid", "Education"],
      featured: false
    },
    {
      id: 4,
      title: "UK Universities Guide: Russell Group vs Modern Universities",
      excerpt: "Compare Russell Group universities with modern UK institutions to make the best choice for your academic career and future prospects.",
      content: "The UK higher education landscape offers diverse options, from prestigious Russell Group universities to innovative modern institutions. Understanding the differences can help you make an informed decision...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
      author: "James Thompson",
      date: "January 8, 2024",
      category: "UK Education",
      readTime: "7 min read",
      views: "1.5k",
      tags: ["UK", "Universities", "Russell Group", "Higher Education"],
      featured: false
    },
    {
      id: 5,
      title: "USA Student Visa Guide: F-1 Application Process and Requirements",
      excerpt: "Step-by-step guide to obtaining an F-1 student visa for studying in the United States, including documentation and interview tips.",
      content: "The F-1 student visa is your gateway to studying in the United States. This comprehensive guide covers everything from application requirements to interview preparation...",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=350&fit=crop",
      author: "David Rodriguez",
      date: "January 5, 2024",
      category: "Visa Guide",
      readTime: "9 min read",
      views: "2.7k",
      tags: ["USA", "Student Visa", "F-1 Visa", "Immigration"],
      featured: false
    },
    {
      id: 6,
      title: "German Universities: Free Education and Career Opportunities",
      excerpt: "Discover how Germany offers world-class education with minimal tuition fees and excellent career prospects for international graduates.",
      content: "Germany stands out as a premier destination for international students seeking quality education without the burden of high tuition fees. With its strong economy and innovation-driven industries...",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=350&fit=crop",
      author: "Anna Mueller",
      date: "January 3, 2024",
      category: "European Education",
      readTime: "6 min read",
      views: "1.9k",
      tags: ["Germany", "Free Education", "Europe", "STEM"],
      featured: false
    },
    {
      id: 7,
      title: "Study Abroad Preparation: Essential Checklist for International Students",
      excerpt: "Complete preparation checklist covering everything from university applications to accommodation and travel arrangements.",
      content: "Preparing to study abroad involves numerous steps and considerations. This comprehensive checklist ensures you don't miss any crucial preparations for your international education journey...",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=350&fit=crop",
      author: "Lisa Park",
      date: "December 28, 2023",
      category: "Preparation Guide",
      readTime: "8 min read",
      views: "2.2k",
      tags: ["Study Abroad", "Preparation", "Checklist", "International Students"],
      featured: false
    },
    {
      id: 8,
      title: "IELTS vs TOEFL: Which English Test Should You Choose?",
      excerpt: "Comprehensive comparison of IELTS and TOEFL exams to help you choose the right English proficiency test for your study abroad goals.",
      content: "Choosing between IELTS and TOEFL can significantly impact your study abroad applications. Both tests assess English proficiency but have different formats, scoring systems, and acceptance rates...",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=350&fit=crop",
      author: "Robert Kim",
      date: "December 25, 2023",
      category: "Test Preparation",
      readTime: "7 min read",
      views: "1.7k",
      tags: ["IELTS", "TOEFL", "English Test", "Test Preparation"],
      featured: false
    }
  ];

  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = allBlogs.slice(startIndex, startIndex + blogsPerPage);
  const featuredBlogs = allBlogs.filter(blog => blog.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Educational Blogs</h1>
            <p className="text-xl mb-6">Expert insights and comprehensive guides for your study abroad journey</p>
            <p className="text-lg opacity-90">From university selection to visa applications - everything you need to succeed</p>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <Card key={blog.id} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {blog.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {blog.views}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Blogs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">All Blog Articles</h2>
            <p className="text-gray-300">Showing {startIndex + 1}-{Math.min(startIndex + blogsPerPage, allBlogs.length)} of {allBlogs.length} articles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentBlogs.map((blog) => (
              <Card key={blog.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {blog.views}
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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

export default Blogs;
