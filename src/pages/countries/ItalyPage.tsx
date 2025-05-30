
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, GraduationCap, Users, Award, Heart } from 'lucide-react';

const ItalyPage = () => {
  const quickLinks = [
    { name: "University of Bologna", id: "university-1" },
    { name: "Sapienza University of Rome", id: "university-2" },
    { name: "University of Milan", id: "university-3" },
    { name: "Bocconi University", id: "university-4" },
    { name: "University of Padova", id: "university-5" },
    { name: "University of Florence", id: "university-6" }
  ];

  const advantages = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable Quality Education",
      description: "Study at top European universities with low tuition fees and excellent scholarship opportunities for Pakistani and international students."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Rich Cultural Heritage",
      description: "Experience Renaissance art, history, and culture while pursuing world-class education in Italy's historic cities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gateway to Europe",
      description: "Access to European job market and excellent post-study work opportunities across the European Union."
    }
  ];

  const universities = [
    {
      id: "university-1",
      name: "University of Bologna",
      ranking: "#154 QS World University Rankings 2024",
      location: "Bologna, Emilia-Romagna",
      specialties: "Engineering, Medicine, Business, Humanities",
      tuition: "€2,000-€4,000/year + Living costs",
      description: "Europe's oldest university (founded 1088) offering world-class education with strong international programs for Pakistani students."
    },
    {
      id: "university-2",
      name: "Sapienza University of Rome",
      ranking: "#134 QS World University Rankings 2024",
      location: "Rome, Lazio",
      specialties: "Architecture, Engineering, Classics, Medicine",
      tuition: "€2,800-€4,500/year + Living costs",
      description: "One of Europe's largest universities with excellent research facilities and scholarship programs for international students."
    },
    {
      id: "university-3",
      name: "University of Milan",
      ranking: "#316 QS World University Rankings 2024",
      location: "Milan, Lombardy",
      specialties: "Medicine, Veterinary, Agriculture, Humanities",
      tuition: "€3,000-€4,200/year + Living costs",
      description: "Leading Italian university in Milan's financial district with strong industry connections and international partnerships."
    },
    {
      id: "university-4",
      name: "Bocconi University",
      ranking: "Top 10 Business Schools in Europe",
      location: "Milan, Lombardy",
      specialties: "Business, Economics, Finance, Management",
      tuition: "€14,000-€16,000/year + Living costs",
      description: "Premier business university in Italy with excellent career prospects and strong alumni network worldwide."
    },
    {
      id: "university-5",
      name: "University of Padova",
      ranking: "#250 QS World University Rankings 2024",
      location: "Padua, Veneto",
      specialties: "Medicine, Engineering, Psychology, Sciences",
      tuition: "€2,500-€4,000/year + Living costs",
      description: "Historic university with cutting-edge research and excellent programs for Pakistani and international students."
    },
    {
      id: "university-6",
      name: "University of Florence",
      ranking: "#401-450 QS World University Rankings 2024",
      location: "Florence, Tuscany",
      specialties: "Architecture, Arts, Engineering, Agriculture",
      tuition: "€2,200-€3,800/year + Living costs",
      description: "Renaissance city university offering unique cultural experience with top-quality European education programs."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Study in Italy</h1>
            <p className="text-xl">Experience Renaissance education with affordable tuition and rich cultural heritage</p>
          </div>
        </div>
      </section>

      {/* Why Choose Italy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Italy for Your Studies?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Italy offers affordable quality education in historic universities, rich cultural experiences, and excellent 
              scholarship opportunities for Pakistani students and international students seeking European education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <QuickNavigation links={quickLinks} />

      {/* Top Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Top Universities in Italy</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover Italy's leading universities offering affordable European education with excellent 
              scholarship opportunities for Pakistani students and international students worldwide.
            </p>
          </div>

          <div className="grid gap-8">
            {universities.map((university, index) => (
              <Card key={index} id={university.id} className="bg-gray-900 border-orange-500">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-orange-500 mb-2">{university.name}</h3>
                      <p className="text-green-400 mb-2">{university.ranking}</p>
                      <div className="flex items-center text-gray-300 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {university.location}
                      </div>
                      <p className="text-gray-300 mb-4">{university.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">
                          <strong>Specialties:</strong> {university.specialties}
                        </p>
                        <p className="text-sm text-gray-400">
                          <strong>Annual Tuition:</strong> {university.tuition}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-500 text-black p-4 rounded-lg">
                        <Award className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-semibold">Apply Now</p>
                        <p className="text-xs">Free Consultation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ItalyPage;
