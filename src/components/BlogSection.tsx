
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Eye, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogs = [
    {
      title: "Top Universities in USA for International Students 2024",
      excerpt: "Discover the best American universities offering world-class education and excellent opportunities for international students.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      author: "Dr. Sarah Johnson",
      date: "December 20, 2024",
      category: "University Rankings",
      readTime: "8 min read",
      views: "2.5k",
      slug: "top-universities-in-usa-for-international-students-2024"
    },
    {
      title: "Complete Guide to Study in Canada 2024",
      excerpt: "Everything you need to know about studying in Canada - from applications to post-graduation work permits.",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      author: "Michael Chen",
      date: "December 18, 2024",
      category: "Study Guides",
      readTime: "12 min read",
      views: "3.2k",
      slug: "study-in-canada-complete-2024"
    },
    {
      title: "Best Scholarships for International Students 2024",
      excerpt: "Comprehensive list of fully-funded scholarships available for international students worldwide.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      author: "Emma Wilson",
      date: "December 15, 2024",
      category: "Scholarships",
      readTime: "10 min read",
      views: "4.1k",
      slug: "best-scholarships-for-international-students-2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
            Latest <span className="text-white">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and opportunities in international education
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-gray-900 border border-gray-800 hover:border-orange-500/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {blog.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center bg-black bg-opacity-50 rounded-full px-2 py-1">
                    <Eye className="h-3 w-3 mr-1" />
                    {blog.views}
                  </div>
                  <div className="flex items-center bg-black bg-opacity-50 rounded-full px-2 py-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-orange-500" />
                      <span className="text-gray-400">{blog.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                    <span className="text-gray-400">{blog.date}</span>
                  </div>
                </div>
                <Link to={`/blogs/${blog.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blogs">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
              <TrendingUp className="mr-2 h-5 w-5" />
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
