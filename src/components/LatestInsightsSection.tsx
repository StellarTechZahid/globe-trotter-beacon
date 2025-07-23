
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen, TrendingUp, Eye, Clock, Globe, Award, Users } from 'lucide-react';

const LatestInsightsSection = () => {
  const insights = [
    {
      type: "Blog",
      title: "Complete Guide to Study in Canada 2024",
      description: "Everything you need to know about studying in Canada - universities, costs, visa process, and post-graduation opportunities.",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      date: "Dec 18, 2024",
      readTime: "12 min read",
      views: "3.2k",
      category: "Study Guide",
      slug: "study-in-canada-complete-2024",
      icon: <Globe className="h-5 w-5" />
    },
    {
      type: "Article",
      title: "Best Scholarships for International Students 2024",
      description: "Comprehensive guide to fully-funded scholarships available worldwide for international students seeking quality education.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      date: "Dec 15, 2024", 
      readTime: "10 min read",
      views: "4.1k",
      category: "Scholarships",
      slug: "best-scholarships-for-international-students-2024",
      icon: <Award className="h-5 w-5" />
    },
    {
      type: "Tips",
      title: "Study Abroad Preparation Checklist 2024",
      description: "Complete preparation guide with timelines and essential steps for international students planning to study overseas.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      views: "2.8k",
      category: "Preparation",
      slug: "study-abroad-preparation-checklist-2024",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Latest Insights
            </span>
            <span className="text-white"> & Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert insights, comprehensive guides, and inspiring success stories 
            from the world of international education
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {insight.icon}
                    <span>{insight.type}</span>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                      <Eye className="h-3 w-3 mr-1" />
                      {insight.views}
                    </div>
                    <div className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {insight.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      {insight.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
                    {insight.description}
                  </p>
                  
                  <Link to={`/${insight.type.toLowerCase()}s/${insight.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blogs-news">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 group">
              <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore All Content
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
