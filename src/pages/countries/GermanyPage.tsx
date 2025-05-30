
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, GraduationCap, Users, Award } from 'lucide-react';

const GermanyPage = () => {
  const quickLinks = [
    { name: "Technical University of Munich", id: "university-1" },
    { name: "University of Heidelberg", id: "university-2" },
    { name: "Humboldt University Berlin", id: "university-3" },
    { name: "University of Freiburg", id: "university-4" },
    { name: "RWTH Aachen University", id: "university-5" },
    { name: "University of Göttingen", id: "university-6" }
  ];

  const advantages = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Low-Cost Quality Education",
      description: "Public universities charge minimal tuition fees, making world-class education affordable for Pakistani students."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Engineering & Technology Excellence",
      description: "Home to world's best engineering and technology programs with strong industry connections."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Post-Study Work Opportunities",
      description: "18-month job search visa and excellent career prospects in Europe's largest economy."
    }
  ];

  const universities = [
    {
      id: "university-1",
      name: "Technical University of Munich",
      ranking: "#37 QS World University Rankings 2024",
      location: "Munich, Bavaria",
      specialties: "Engineering, Technology, Computer Science",
      tuition: "€150/semester + Living costs",
      description: "Top technical university in Germany with excellent industry partnerships and research facilities."
    },
    {
      id: "university-2",
      name: "University of Heidelberg", 
      ranking: "#87 QS World University Rankings 2024",
      location: "Heidelberg, Baden-Württemberg",
      specialties: "Medicine, Natural Sciences, Humanities",
      tuition: "€150/semester + Living costs",
      description: "Germany's oldest university with outstanding research reputation and medical programs."
    },
    {
      id: "university-3",
      name: "Humboldt University Berlin",
      ranking: "#120 QS World University Rankings 2024",
      location: "Berlin, Germany",
      specialties: "Social Sciences, Humanities, Natural Sciences",
      tuition: "€300/semester + Living costs", 
      description: "Historic university in Germany's capital with strong research and cultural opportunities."
    },
    {
      id: "university-4",
      name: "University of Freiburg",
      ranking: "#192 QS World University Rankings 2024",
      location: "Freiburg, Baden-Württemberg",
      specialties: "Medicine, Natural Sciences, Environmental Studies",
      tuition: "€150/semester + Living costs",
      description: "Leading research university with beautiful campus and strong international programs."
    },
    {
      id: "university-5", 
      name: "RWTH Aachen University",
      ranking: "#106 QS World University Rankings 2024",
      location: "Aachen, North Rhine-Westphalia",
      specialties: "Engineering, Technology, Materials Science",
      tuition: "€150/semester + Living costs",
      description: "Germany's largest technical university with excellent engineering programs and industry ties."
    },
    {
      id: "university-6",
      name: "University of Göttingen",
      ranking: "#214 QS World University Rankings 2024", 
      location: "Göttingen, Lower Saxony",
      specialties: "Physics, Mathematics, Agricultural Sciences",
      tuition: "€150/semester + Living costs",
      description: "Traditional university with strong research heritage and Nobel Prize winners."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Study in Germany</h1>
            <p className="text-xl">Excellence in engineering and affordable world-class education</p>
          </div>
        </div>
      </section>

      {/* Why Choose Germany */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Germany for Your Studies?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Germany offers affordable, high-quality education with strong engineering and technology programs, 
              making it an ideal destination for Pakistani and international students seeking European education.
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
            <h2 className="text-4xl font-bold text-white mb-6">Top Universities in Germany</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover Germany's leading universities offering world-class education at affordable costs 
              for Pakistani students and international students worldwide.
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

export default GermanyPage;
