
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Globe, Users, BookOpen, ArrowRight, MessageCircle, Calendar, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const GlobalEducationTrends2024 = () => {
  const trends = [
    {
      title: "AI Integration in Higher Education",
      description: "Universities worldwide are incorporating artificial intelligence into curriculum and research",
      impact: "High",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Hybrid Learning Models Becoming Standard",
      description: "Post-pandemic education combines online and in-person learning experiences",
      impact: "High",
      category: "Teaching Methods",
      readTime: "4 min read"
    },
    {
      title: "Increased Focus on Mental Health Support",
      description: "Universities expanding mental health services for international students",
      impact: "Medium",
      category: "Student Welfare",
      readTime: "6 min read"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Global Education Trends 2024 | Latest News in International Education</title>
        <meta name="description" content="Stay updated with the latest global education trends 2024. Discover how technology, teaching methods, and student support are evolving worldwide." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Education Trends 2024</h1>
            <p className="text-xl mb-6">Latest developments shaping the future of international education</p>
            <div className="flex items-center justify-center text-purple-200 mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              Published: December 2024
            </div>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Education Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Key Education Trends This Year</h2>
          <div className="space-y-8">
            {trends.map((trend, index) => (
              <Card key={index} className="bg-gray-900 border-purple-500 hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex-1">{trend.title}</h3>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        trend.impact === 'High' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'
                      }`}>
                        {trend.impact} Impact
                      </span>
                      <span className="bg-purple-500 px-3 py-1 rounded-full text-black text-sm font-semibold">
                        {trend.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{trend.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Eye className="h-4 w-4 mr-2" />
                      {trend.readTime}
                    </div>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                      Read Full Article
                    </Button>
                  </div>
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

export default GlobalEducationTrends2024;
