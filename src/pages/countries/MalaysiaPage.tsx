
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, GraduationCap, Users, Award, Globe } from 'lucide-react';

const MalaysiaPage = () => {
  const quickLinks = [
    { name: "University of Malaya", id: "university-1" },
    { name: "Universiti Putra Malaysia", id: "university-2" },
    { name: "Universiti Kebangsaan Malaysia", id: "university-3" },
    { name: "Taylor's University", id: "university-4" },
    { name: "Monash University Malaysia", id: "university-5" },
    { name: "UCSI University", id: "university-6" }
  ];

  const advantages = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable Excellence",
      description: "High-quality education at fraction of Western costs with excellent value for money for Pakistani students."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Strategic Location",
      description: "Gateway to Asia-Pacific with multicultural environment and easy access to international opportunities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "English-Medium Education",
      description: "World-class programs taught in English with diverse international student community from across the globe."
    }
  ];

  const universities = [
    {
      id: "university-1",
      name: "University of Malaya",
      ranking: "#65 QS World University Rankings 2024",
      location: "Kuala Lumpur, Malaysia",
      specialties: "Engineering, Medicine, Business, Computer Science",
      tuition: "MYR 15,000-25,000/year (USD 3,200-5,300)",
      description: "Malaysia's premier university offering world-class education with strong international partnerships and research excellence."
    },
    {
      id: "university-2",
      name: "Universiti Putra Malaysia",
      ranking: "#158 QS World University Rankings 2024",
      location: "Serdang, Selangor",
      specialties: "Agriculture, Engineering, Medicine, Veterinary",
      tuition: "MYR 12,000-20,000/year (USD 2,500-4,200)",
      description: "Leading research university with excellent programs in agriculture, engineering, and sciences for international students."
    },
    {
      id: "university-3",
      name: "Universiti Kebangsaan Malaysia",
      ranking: "#159 QS World University Rankings 2024",
      location: "Bangi, Selangor",
      specialties: "Medicine, Engineering, Social Sciences, Law",
      tuition: "MYR 13,000-22,000/year (USD 2,800-4,700)",
      description: "National university with strong emphasis on research and innovation, offering comprehensive programs for Pakistani students."
    },
    {
      id: "university-4",
      name: "Taylor's University",
      ranking: "#284 QS World University Rankings 2024",
      location: "Subang Jaya, Selangor",
      specialties: "Business, Hospitality, Engineering, Medicine",
      tuition: "MYR 25,000-45,000/year (USD 5,300-9,500)",
      description: "Premier private university with excellent industry connections and pathway programs to international universities."
    },
    {
      id: "university-5",
      name: "Monash University Malaysia",
      ranking: "Australian Monash University Campus",
      location: "Bandar Sunway, Selangor",
      specialties: "Engineering, Business, Medicine, IT",
      tuition: "MYR 30,000-50,000/year (USD 6,400-10,600)",
      description: "Australian university campus in Malaysia offering same degree quality at reduced costs for international students."
    },
    {
      id: "university-6",
      name: "UCSI University",
      ranking: "#284 QS World University Rankings 2024",
      location: "Kuala Lumpur, Malaysia",
      specialties: "Music, Business, Engineering, Medicine",
      tuition: "MYR 20,000-35,000/year (USD 4,200-7,400)",
      description: "Leading private university with strong industry partnerships and excellent career prospects for graduates."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Study in Malaysia</h1>
            <p className="text-xl">Affordable world-class education in the heart of Southeast Asia</p>
          </div>
        </div>
      </section>

      {/* Why Choose Malaysia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Malaysia for Your Studies?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Malaysia offers affordable quality education in English medium with multicultural environment and 
              excellent opportunities for Pakistani students seeking Asia-Pacific education experience.
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
            <h2 className="text-4xl font-bold text-white mb-6">Top Universities in Malaysia</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore Malaysia's leading universities offering affordable quality education with excellent 
              opportunities for Pakistani students and international students in Southeast Asia.
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

export default MalaysiaPage;
