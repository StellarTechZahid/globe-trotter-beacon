
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, GraduationCap, Users, Globe, Clock, DollarSign, BookOpen, Award, MessageCircle, ArrowRight, CheckCircle, Star } from 'lucide-react';

const NewZealandPage = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const quickNavItems = [
    { id: 'why-study', label: 'Why Study in New Zealand' },
    { id: 'universities', label: 'Top Universities' },
    { id: 'programs', label: 'Popular Programs' },
    { id: 'costs', label: 'Cost of Living' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'visa', label: 'Student Visa' }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const universities = [
    {
      name: "University of Auckland",
      ranking: "#1 in New Zealand, Top 100 Global",
      programs: ["Engineering", "Business", "Medicine", "Computer Science"],
      tuition: "NZ$30,000-45,000/year",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      highlights: ["Top research university", "Beautiful campus", "Strong industry connections"]
    },
    {
      name: "University of Otago",
      ranking: "#2 in New Zealand",
      programs: ["Medicine", "Dentistry", "Business", "Sciences"],
      tuition: "NZ$28,000-42,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
      highlights: ["Oldest university", "Medical excellence", "Research-intensive"]
    },
    {
      name: "Victoria University of Wellington",
      ranking: "#3 in New Zealand",
      programs: ["Law", "Public Policy", "Creative Arts", "Engineering"],
      tuition: "NZ$27,000-40,000/year",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
      highlights: ["Capital city location", "Strong law school", "Government connections"]
    },
    {
      name: "University of Canterbury",
      ranking: "#4 in New Zealand",
      programs: ["Engineering", "Business", "Sciences", "Fine Arts"],
      tuition: "NZ$26,000-38,000/year",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      highlights: ["Engineering excellence", "Modern facilities", "Research focus"]
    },
    {
      name: "Massey University",
      ranking: "Top 5 in New Zealand",
      programs: ["Agriculture", "Veterinary Science", "Business", "Design"],
      tuition: "NZ$25,000-35,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
      highlights: ["Agricultural leadership", "Distance learning", "Innovation hub"]
    },
    {
      name: "Lincoln University",
      ranking: "Specialized Excellence",
      programs: ["Agriculture", "Environmental Science", "Business"],
      tuition: "NZ$24,000-32,000/year",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
      highlights: ["Agriculture focus", "Small class sizes", "Research excellence"]
    }
  ];

  const whyStudyReasons = [
    {
      icon: GraduationCap,
      title: "World-Class Education System",
      description: "New Zealand's education system is ranked among the top 10 globally, offering internationally recognized qualifications and innovative teaching methods."
    },
    {
      icon: Globe,
      title: "English-Speaking Environment",
      description: "Study in a native English-speaking country with friendly locals and a welcoming multicultural environment perfect for international students."
    },
    {
      icon: Users,
      title: "Safe and Peaceful Country",
      description: "New Zealand consistently ranks as one of the world's safest countries, providing a secure environment for students to focus on their studies."
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Access cutting-edge research facilities and work with world-renowned academics in a country known for innovation and academic excellence."
    },
    {
      icon: MapPin,
      title: "Stunning Natural Beauty",
      description: "Study surrounded by breathtaking landscapes, from mountains and fjords to beaches and forests, offering an unparalleled quality of life."
    },
    {
      icon: Award,
      title: "Post-Study Work Opportunities",
      description: "Graduate with up to 3 years of post-study work rights, with clear pathways to permanent residency for skilled graduates."
    }
  ];

  const popularPrograms = [
    "Engineering and Technology",
    "Business and Management", 
    "Computer Science and IT",
    "Agriculture and Environmental Sciences",
    "Medicine and Health Sciences",
    "Tourism and Hospitality",
    "Creative Arts and Design",
    "Education and Teaching"
  ];

  const livingCosts = [
    { category: "Accommodation", cost: "NZ$150-350/week" },
    { category: "Food & Groceries", cost: "NZ$80-120/week" },
    { category: "Transportation", cost: "NZ$20-40/week" },
    { category: "Entertainment", cost: "NZ$50-100/week" },
    { category: "Books & Supplies", cost: "NZ$500-800/year" },
    { category: "Health Insurance", cost: "NZ$600-800/year" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Study in New Zealand</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Experience world-class education in one of the world's most beautiful and peaceful countries
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection('universities')}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                Explore Universities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-900 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {quickNavItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section id="why-study" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-500 mb-6">Why Study in New Zealand?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New Zealand offers an exceptional combination of academic excellence, natural beauty, and quality of life that makes it an ideal destination for international students seeking world-class education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyStudyReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="bg-black border-green-500 hover:border-green-400 transition-colors h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-300 flex-grow">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Top Universities in New Zealand</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New Zealand's universities consistently rank among the world's best, offering innovative programs and research opportunities in a stunning natural environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {universities.map((university, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={university.image}
                    alt={university.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">{university.ranking}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {university.name}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-green-500 font-semibold mb-2">Popular Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program, idx) => (
                        <span key={idx} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-green-500 font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {university.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-orange-500 font-semibold">Annual Tuition:</span>
                      <div className="text-white font-bold">{university.tuition}</div>
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToConsultation}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section id="programs" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-500 mb-6">Popular Study Programs</h2>
            <p className="text-xl text-gray-300">Most sought-after programs by international students in New Zealand</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPrograms.map((program, index) => (
              <Card key={index} className="bg-black border-green-500 hover:border-green-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">{program}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section id="costs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Cost of Living in New Zealand</h2>
            <p className="text-xl text-gray-300">Estimated monthly expenses for international students</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {livingCosts.map((cost, index) => (
              <Card key={index} className="bg-gray-900 border-orange-500">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{cost.category}</h3>
                  <p className="text-2xl font-bold text-orange-500">{cost.cost}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Total estimated living costs: <span className="text-orange-500 font-bold">NZ$18,000-25,000 per year</span>
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3"
            >
              Get Detailed Cost Breakdown
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your New Zealand Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of international students who have chosen New Zealand for their education. Get expert guidance from Abroad Academics, founded in 2023.
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewZealandPage;
