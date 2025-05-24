
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: "Complete Guide to Studying in the USA",
      excerpt: "Everything you need to know about universities, visa process, and living in America.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Study Guides"
    },
    {
      title: "Scholarship Opportunities for International Students",
      excerpt: "Discover the best scholarships available and how to increase your chances of success.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop",
      author: "Michael Chen",
      date: "December 12, 2024",
      category: "Scholarships"
    },
    {
      title: "Top Universities in Canada for 2025",
      excerpt: "Explore the best Canadian universities offering world-class education and research opportunities.",
      image: "https://images.unsplash.com/photo-1464822759844-d150baef493e?w=400&h=250&fit=crop",
      author: "Emma Wilson",
      date: "December 10, 2024",
      category: "University Rankings"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Latest <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and opportunities in international education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {blog.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
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
                </div>
                <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white group-hover:bg-blue-600 group-hover:hover:bg-blue-700 transition-all duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
