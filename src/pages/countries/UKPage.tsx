
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UKPage = () => {
  const quickLinks = [
    { name: "University of Oxford", id: "university-1" },
    { name: "University of Cambridge", id: "university-2" },
    { name: "Imperial College London", id: "university-3" },
    { name: "UCL (University College London)", id: "university-4" },
    { name: "King's College London", id: "university-5" },
    { name: "University of Edinburgh", id: "university-6" },
    { name: "University of Manchester", id: "university-7" },
    { name: "London School of Economics", id: "university-8" }
  ];

  const advantages = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "World-Class Universities",
      description: "Home to Oxford, Cambridge, and Imperial College - consistently ranked among the world's top institutions with centuries of academic excellence."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Rich Cultural Heritage",
      description: "Experience diverse multicultural environment with rich history, arts, and global perspectives in the heart of Europe."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Excellent Career Prospects",
      description: "Access to Graduate Route visa, strong industry connections, and global career opportunities with UK qualifications."
    }
  ];

  const universities = [
    {
      id: "university-1",
      name: "University of Oxford",
      ranking: "#2 QS World University Rankings 2024",
      location: "Oxford, England",
      specialties: "Law, Medicine, PPE, Engineering, Sciences",
      tuition: "£28,000-£39,000/year (USD 35,000-49,000)",
      description: "World's oldest English-speaking university offering prestigious programs with tutorial system and exceptional research opportunities."
    },
    {
      id: "university-2", 
      name: "University of Cambridge",
      ranking: "#3 QS World University Rankings 2024",
      location: "Cambridge, England",
      specialties: "Natural Sciences, Engineering, Medicine, Mathematics",
      tuition: "£24,000-£37,000/year (USD 30,000-46,000)",
      description: "Leading global university with 800-year history, producing Nobel laureates and world leaders across all disciplines."
    },
    {
      id: "university-3",
      name: "Imperial College London", 
      ranking: "#6 QS World University Rankings 2024",
      location: "London, England",
      specialties: "Engineering, Medicine, Business, Natural Sciences",
      tuition: "£32,000-£46,000/year (USD 40,000-58,000)",
      description: "Premier STEM university in London with cutting-edge research and strong industry partnerships for international students."
    },
    {
      id: "university-4",
      name: "UCL (University College London)",
      ranking: "#9 QS World University Rankings 2024", 
      location: "London, England",
      specialties: "Architecture, Medicine, Law, Engineering, Arts",
      tuition: "£24,000-£34,000/year (USD 30,000-43,000)",
      description: "Leading multidisciplinary university in central London offering diverse programs with excellent research opportunities."
    },
    {
      id: "university-5",
      name: "King's College London",
      ranking: "#40 QS World University Rankings 2024",
      location: "London, England", 
      specialties: "Medicine, Law, International Relations, Business",
      tuition: "£20,000-£32,000/year (USD 25,000-40,000)",
      description: "Historic London university with strong reputation in health, law, and humanities with vibrant student community."
    },
    {
      id: "university-6",
      name: "University of Edinburgh",
      ranking: "#22 QS World University Rankings 2024",
      location: "Edinburgh, Scotland",
      specialties: "Medicine, Engineering, Business, Social Sciences",
      tuition: "£22,000-£32,000/year (USD 28,000-40,000)", 
      description: "Scotland's premier university combining academic excellence with beautiful historic setting and vibrant student life."
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in the UK
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Discover world-class education and unparalleled opportunities in the United Kingdom with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023. Start your UK education journey today!
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg animate-fade-in delay-400"
            >
              Get Free Consultation →
            </Button>
          </div>
        </div>
      </section>

      {/* Your Pathway Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to UK Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The United Kingdom is a global leader in higher education, offering a rich blend of academic excellence, 
              cultural diversity, and cutting-edge research opportunities. At Abroad Academics - Pakistan's leading 
              study abroad consultants established in 2023, we guide Pakistani and international students through every 
              step of studying in the UK, from selecting the right university to securing visas and scholarships. 
              With our expert overseas education consultancy services, you can unlock a world of possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose UK Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose the UK for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why the UK remains the top choice for Pakistani students seeking world-class education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <h2 className="text-4xl font-bold text-white mb-6">Top UK Universities for International Students</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore the UK's leading universities offering world-class education with excellent 
              opportunities for Pakistani and international students with Abroad Academics guidance.
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

      {/* Why Study in the UK - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in the UK</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              UK degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a UK education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as University of Cambridge, University of Oxford, & Imperial College. 
                  Almost 3 ranked universities are based in UK.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in UK has always been center point attraction international students. Various 
                  registered bodies independent learning UK universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students The diversity is reflected in every aspect of the UK culture has ranked as top 
                  multicultural and secure country for international students. The diversity is reflected in every aspect of the UK 
                  culture, food, literature, arts, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No language barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country. In UK, English is 
                  the official language and all the courses are being taught in English, making it easier for students from every 
                  part of the globe to study in the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Tuition Fees */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in UK for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in UK. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program UK varies from 
                £20,000 GBP - £35,000 GBP. The average tuition fees of postgraduate programs in UK varies from £15,000 GBP - £30,000 
                GBP. There are various options of distance learning programs where online study programs are majorly 
                available in UK.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in UK (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per UK visa, an international student, you are allowed work 20 hours/week. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in UK for international student is 10-15 GBP/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in UK for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per the UKVI, average living cost for an international student in UK depends on the city you are living in, the 
                living cost in London is different as compared to outside London.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• £1334 GBP per month for courses in London (9 month)</li>
                <li>• £1023 GBP per month for courses outside London (9 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application in UKVI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default UKPage;
