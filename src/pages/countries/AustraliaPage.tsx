
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, GraduationCap, Users, Award } from 'lucide-react';

const AustraliaPage = () => {
  const quickLinks = [
    { name: "University of Melbourne", id: "university-1" },
    { name: "Australian National University", id: "university-2" },
    { name: "University of Sydney", id: "university-3" },
    { name: "University of Queensland", id: "university-4" },
    { name: "Monash University", id: "university-5" },
    { name: "University of Western Australia", id: "university-6" }
  ];

  const advantages = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "World-Class Education System",
      description: "Home to 7 of the world's top 100 universities with globally recognized degrees and cutting-edge research facilities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multicultural Environment",
      description: "Welcoming international community with students from over 140 countries, making it easy to adapt and thrive."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Work While Studying",
      description: "Student visa allows up to 48 hours of work per fortnight during studies and unlimited hours during breaks."
    }
  ];

  const universities = [
    {
      id: "university-1",
      name: "University of Melbourne",
      ranking: "#14 QS World University Rankings 2024",
      location: "Melbourne, Victoria",
      specialties: "Medicine, Law, Business, Engineering",
      tuition: "AUD $45,000 - $50,000/year",
      description: "Australia's leading university with world-class research and teaching excellence."
    },
    {
      id: "university-2", 
      name: "Australian National University",
      ranking: "#34 QS World University Rankings 2024",
      location: "Canberra, ACT",
      specialties: "Politics, International Relations, Research",
      tuition: "AUD $43,000 - $48,000/year",
      description: "Australia's national university with strong government and research connections."
    },
    {
      id: "university-3",
      name: "University of Sydney",
      ranking: "#19 QS World University Rankings 2024", 
      location: "Sydney, New South Wales",
      specialties: "Medicine, Business, Arts, Architecture",
      tuition: "AUD $44,000 - $52,000/year",
      description: "Historic university with beautiful campus and excellent graduate employment rates."
    },
    {
      id: "university-4",
      name: "University of Queensland",
      ranking: "#43 QS World University Rankings 2024",
      location: "Brisbane, Queensland", 
      specialties: "Mining Engineering, Sports Science, Veterinary",
      tuition: "AUD $40,000 - $46,000/year",
      description: "Leading research university with strong industry partnerships."
    },
    {
      id: "university-5",
      name: "Monash University",
      ranking: "#42 QS World University Rankings 2024",
      location: "Melbourne, Victoria",
      specialties: "Pharmacy, Medicine, Engineering, Business",
      tuition: "AUD $41,000 - $47,000/year", 
      description: "Innovative university with global campuses and industry connections."
    },
    {
      id: "university-6",
      name: "University of Western Australia",
      ranking: "#72 QS World University Rankings 2024",
      location: "Perth, Western Australia",
      specialties: "Mining, Agriculture, Medicine, Marine Science",
      tuition: "AUD $38,000 - $44,000/year",
      description: "Research-intensive university with strong industry ties in mining and resources."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Study in Australia</h1>
            <p className="text-xl">Discover world-class education in the land down under</p>
          </div>
        </div>
      </section>

      {/* Why Choose Australia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Australia for Your Studies?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Australia offers world-class education, multicultural environment, and excellent post-study work opportunities 
              for international students from Pakistan, India, and around the world.
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
            <h2 className="text-4xl font-bold text-white mb-6">Top Universities in Australia</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore Australia's leading universities offering world-class education and research opportunities 
              for Pakistani and international students.
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

export default AustraliaPage;
