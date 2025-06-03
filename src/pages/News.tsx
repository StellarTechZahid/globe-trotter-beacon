import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  const allNews = [
    {
      id: 1,
      title: "Canada Announces New Immigration Targets for International Students 2024",
      excerpt: "Canada plans to welcome 485,000 new permanent residents in 2024, with significant opportunities for international students and graduates.",
      content: "The Canadian government has announced ambitious immigration targets for 2024, with a strong focus on retaining international students who have graduated from Canadian institutions...",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=350&fit=crop",
      author: "Immigration News Team",
      date: "January 16, 2024",
      category: "Immigration",
      urgent: true,
      source: "Government of Canada",
      slug: "/news/canada-immigration-targets"
    },
    {
      id: 2,
      title: "UK Post-Study Work Visa Extended: New Opportunities for International Graduates",
      excerpt: "The UK government extends post-study work rights for international graduates, providing more pathways to permanent residency.",
      content: "In a significant policy update, the UK has announced extensions to post-study work visas, allowing international graduates more time to secure employment and transition to permanent residency...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
      author: "UK Education Bureau",
      date: "January 14, 2024",
      category: "Policy Update",
      urgent: true,
      source: "UK Home Office",
      slug: "/news/uk-post-study-visa"
    },
    {
      id: 3,
      title: "Australia Launches New Scholarship Program Worth $50 Million",
      excerpt: "The Australian government unveils a comprehensive scholarship program targeting students from developing countries.",
      content: "Australia has launched its largest scholarship initiative to date, offering comprehensive financial support to outstanding students from developing nations...",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=350&fit=crop",
      author: "Australian Education International",
      date: "January 12, 2024",
      category: "Scholarships",
      urgent: false,
      source: "Department of Education Australia",
      slug: "/news/australia-scholarship-program"
    },
    {
      id: 4,
      title: "Germany Simplifies Student Visa Process for International Applicants",
      excerpt: "New streamlined visa application process reduces processing time from 3 months to 6 weeks for international students.",
      content: "Germany has introduced significant reforms to its student visa application process, making it easier and faster for international students to secure study permits...",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=350&fit=crop",
      author: "German Academic Exchange Service",
      date: "January 10, 2024",
      category: "Visa Updates",
      urgent: false,
      source: "DAAD Germany",
      slug: "/news/germany-visa-simplification"
    },
    {
      id: 5,
      title: "US Universities Report Record International Student Enrollment",
      excerpt: "American universities see 15% increase in international student applications, with STEM programs leading the surge.",
      content: "According to the latest data from the Institute of International Education, US universities have recorded unprecedented levels of international student interest...",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=350&fit=crop",
      author: "Institute of International Education",
      date: "January 8, 2024",
      category: "Education Statistics",
      urgent: false,
      source: "IIE Reports",
      slug: "/news/us-student-enrollment"
    },
    {
      id: 6,
      title: "New Zealand Opens Borders: Student Visa Processing Resumes",
      excerpt: "New Zealand fully reopens to international students with enhanced support services and streamlined application processes.",
      content: "Following pandemic restrictions, New Zealand has fully reopened its borders to international students, implementing new support measures and improved application processes...",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=350&fit=crop",
      author: "Education New Zealand",
      date: "January 5, 2024",
      category: "Border Updates",
      urgent: false,
      source: "New Zealand Immigration",
      slug: "/news/new-zealand-borders-open"
    },
    {
      id: 7,
      title: "European Union Launches Erasmus+ Expansion for Non-EU Students",
      excerpt: "The EU announces significant expansion of Erasmus+ program to include more opportunities for students from outside Europe.",
      content: "The European Union has announced a major expansion of its flagship Erasmus+ program, creating new pathways for students from non-EU countries...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=350&fit=crop",
      author: "European Commission",
      date: "January 3, 2024",
      category: "EU Programs",
      urgent: false,
      source: "European Commission",
      slug: "/news/erasmus-expansion"
    },
    {
      id: 8,
      title: "Digital Transformation in International Education: AI and Virtual Learning",
      excerpt: "Universities worldwide adopt AI-powered tools and virtual reality to enhance international student experience.",
      content: "The international education sector is experiencing a digital revolution, with institutions implementing artificial intelligence and virtual reality technologies...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop",
      author: "Education Technology Review",
      date: "December 30, 2023",
      category: "Technology",
      urgent: false,
      source: "EdTech Global",
      slug: "/news/digital-transformation"
    }
  ];

  const totalPages = Math.ceil(allNews.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const currentNews = allNews.slice(startIndex, startIndex + newsPerPage);
  const urgentNews = allNews.filter(news => news.urgent);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Latest Education News | International Study Updates & Policies</title>
        <meta name="description" content="Stay updated with the latest international education news, immigration policy changes, visa updates, and scholarship announcements for international students." />
        <meta name="keywords" content="education news, international student news, visa updates, immigration policy, study abroad news, scholarship announcements" />
        <link rel="canonical" href="https://yourdomain.com/news" />
        <meta property="og:title" content="Latest Education News | International Study Updates & Policies" />
        <meta property="og:description" content="Stay updated with the latest international education news, immigration policy changes, visa updates, and scholarship announcements for international students." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/news" />
        <meta property="og:image" content="https://yourdomain.com/images/news-og-image.jpg" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Latest Education News</h1>
            <p className="text-xl mb-6">Stay updated with the latest developments in international education</p>
            <p className="text-lg opacity-90">Immigration updates, policy changes, and breaking news from around the world</p>
          </div>
        </div>
      </section>

      {/* Breaking News */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center flex items-center justify-center">
            <TrendingUp className="mr-3 h-8 w-8" />
            Breaking News & Urgent Updates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {urgentNews.map((news) => (
              <Card key={news.id} className="bg-black border-red-500 hover:border-red-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    URGENT
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {news.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{news.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {news.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">Source: {news.source}</div>
                  <Link to={news.slug}>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                      Read Full Update
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">All News Articles</h2>
            <p className="text-gray-300">Showing {startIndex + 1}-{Math.min(startIndex + newsPerPage, allNews.length)} of {allNews.length} articles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentNews.map((news) => (
              <Card key={news.id} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </div>
                  {news.urgent && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      URGENT
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{news.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {news.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">Source: {news.source}</div>
                  <Link to={news.slug}>
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

export default News;
