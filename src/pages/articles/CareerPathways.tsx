
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Target, Users, Globe } from 'lucide-react';

const CareerPathways = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Career Pathways for International Students
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover lucrative career opportunities after your international education
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-orange-500/30 hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-bold text-orange-500">Technology Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Software development, AI, cybersecurity, and data science opportunities in tech hubs worldwide.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-orange-500/30 hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-bold text-orange-500">Business & Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Investment banking, consulting, entrepreneurship, and international business management roles.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-orange-500/30 hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-bold text-orange-500">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Medical practice, research, pharmaceutical industry, and healthcare technology innovations.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-orange-500/30 hover:border-orange-500 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                  <Globe className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-bold text-orange-500">International Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">UN, World Bank, NGOs, diplomatic services, and international development agencies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPathways;
