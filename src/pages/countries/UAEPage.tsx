import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, GraduationCap, Users, MapPin, DollarSign, Clock } from 'lucide-react';

const UAEPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Study in UAE - Top Universities & Programs | Abroad Academics</title>
        <meta name="description" content="Discover world-class education opportunities in UAE. Get expert guidance for studying in Dubai, Abu Dhabi with top universities and scholarships." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Study in UAE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience world-class education in the modern hub of the Middle East. 
              UAE offers cutting-edge programs, multicultural environment, and gateway to global opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Study in UAE?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="h-16 w-16 text-orange-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Global Hub</h3>
                <p className="text-gray-300">Strategic location connecting East and West, offering international exposure and networking opportunities.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-16 w-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">World-Class Education</h3>
                <p className="text-gray-300">Top international universities with state-of-the-art facilities and innovative teaching methods.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Multicultural Environment</h3>
                <p className="text-gray-300">Study alongside students from over 200 nationalities in a truly international setting.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Top Study Destinations in UAE</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-xl border border-orange-500/20">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-orange-500 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Dubai</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The commercial capital offering world-class universities, internship opportunities, 
                  and a vibrant student life in a modern metropolis.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• American University of Dubai</li>
                  <li>• Dubai International Academic City</li>
                  <li>• Zayed University</li>
                  <li>• Murdoch University Dubai</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-xl border border-orange-500/20">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Abu Dhabi</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The capital city home to prestigious institutions offering research opportunities 
                  and strong government connections.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• New York University Abu Dhabi</li>
                  <li>• Paris-Sorbonne University Abu Dhabi</li>
                  <li>• Khalifa University</li>
                  <li>• American University of Sharjah</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Cost of Studying in UAE</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-orange-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Tuition Fees</h3>
                    <p className="text-gray-300">AED 37,500 - AED 70,000 per year</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Living Expenses</h3>
                    <p className="text-gray-300">AED 30,000 - AED 50,000 per year</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Work Opportunities</h3>
                    <p className="text-gray-300">Part-time work permits available for students</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-black border-orange-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Scholarship Opportunities</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• UAE Government Scholarships</li>
                    <li>• University Merit Scholarships</li>
                    <li>• Mohammed bin Rashid Al Maktoum Foundation</li>
                    <li>• Sheikh Hamdan Award for Academic Excellence</li>
                    <li>• Private Foundation Scholarships</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UAEPage;