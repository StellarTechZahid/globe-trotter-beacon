import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickNavigation from '@/components/QuickNavigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  MapPin, 
  Users, 
  Clock, 
  DollarSign, 
  Heart,
  Star,
  Calendar,
  Building2,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Home,
  Shield,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CanadaPage = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const quickLinks = [
    { name: "Universities", id: "universities" },
    { name: "Costs", id: "costs" },
    { name: "Work Opportunities", id: "work" },
    { name: "Living", id: "living" },
    { name: "Visa Process", id: "visa" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Study in Canada - Top Universities, Scholarships & Student Visa Guide 2025</title>
        <meta name="description" content="Complete guide to studying in Canada: top universities, scholarships, student visa requirements, costs, and career opportunities for international students in 2025." />
        <meta name="keywords" content="study in Canada, Canadian universities, student visa Canada, scholarships Canada, international students Canada, education Canada" />
        <link rel="canonical" href="https://abroadacademics.vercel.app/countries/canada" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Study in Canada</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Experience world-class education, multicultural communities, and exceptional career opportunities in the Great White North.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold text-lg px-8 py-4"
              onClick={scrollToConsultation}
            >
              Start Your Canadian Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Your Pathway Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Your Pathway to Canada</h2>
          <p className="text-gray-300 text-lg mb-12">From application to graduation and beyond</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Your Program", desc: "Select from 500+ programs at top Canadian universities" },
              { step: "2", title: "Apply & Get Accepted", desc: "Expert guidance through application and admission process" },
              { step: "3", title: "Secure Your Visa", desc: "Student visa assistance with 95% success rate" },
              { step: "4", title: "Build Your Career", desc: "Post-graduation work permit and PR pathways" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-500 opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Canada Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Study in Canada?</h2>
            <p className="text-gray-300 text-lg">Discover what makes Canada the perfect destination for international students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "World-Class Education",
                description: "Home to globally ranked universities and innovative research programs"
              },
              {
                icon: Heart,
                title: "Welcoming Communities",
                description: "Multicultural society with strong support for international students"
              },
              {
                icon: DollarSign,
                title: "Affordable Excellence",
                description: "High-quality education at competitive costs compared to other top destinations"
              },
              {
                icon: Briefcase,
                title: "Career Opportunities",
                description: "Post-graduation work permits and pathways to permanent residency"
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description: "One of the world's safest countries with excellent healthcare"
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description: "Canadian degrees are recognized and respected worldwide"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <QuickNavigation links={quickLinks} />

      {/* Universities Section */}
      <section className="py-20" id="universities">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top Canadian Universities for International Students</h2>
            <p className="text-gray-300">Explore Canada's most prestigious universities with our expert guidance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Major universities content would go here */}
            <Card className="bg-black border-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">University of Toronto</h3>
                <p className="text-gray-300 mb-4">Canada's top-ranked university with world-class research facilities</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Toronto, Ontario</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    <span>QS Ranking: #21 Globally</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanadaPage;