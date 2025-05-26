
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const LatestInsightsSection = () => {
  const insights = [
    {
      type: "Blog",
      title: "Why Study in Canada?",
      description: "Discover the top reasons why Canada is a top choice for international students, including affordable education and welcoming culture.",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      slug: "why-study-in-canada"
    },
    {
      type: "Tips",
      title: "Top 10 Tips for International Students",
      description: "Essential advice to help you succeed in your study abroad journey, from preparation to settling in.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      date: "Dec 12, 2024", 
      readTime: "7 min read",
      slug: "top-10-tips-international-students"
    },
    {
      type: "News",
      title: "Scholarship Opportunities in 2025",
      description: "Explore the latest scholarship options available for students planning to study abroad this year.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      date: "Dec 10, 2024",
      readTime: "6 min read", 
      slug: "scholarship-opportunities-2025"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            Latest Insights & Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and success stories in the world of international education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-orange-500 hover:border-orange-400 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {insight.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {insight.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {insight.date}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {insight.readTime}
                  </div>
                </div>
                
                <Link to={`/blogs/${insight.slug}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Read More →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blogs-news">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-3">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
