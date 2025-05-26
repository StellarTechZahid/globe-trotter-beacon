
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Your trusted partner for international education</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Who We Are</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We partner with globally recognized institutions to ensure our students have access to the best opportunities for success. Our team provides visa assistance and pre-departure support to ensure a smooth transition abroad.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join us to explore tailored education plans that fit your career goals and aspirations. With over a decade of experience in international education consulting, we have successfully guided thousands of students to achieve their dreams of studying abroad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Experienced counselors dedicated to your success</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Personalized Approach</h3>
                <p className="text-gray-300">Tailored solutions for every student's unique needs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Success</h3>
                <p className="text-gray-300">98% success rate in student placements</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-gray-300">Partner universities in 25+ countries</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower students worldwide by providing comprehensive guidance and support throughout their international education journey. We believe that quality education should be accessible to all, and we strive to break down barriers that prevent students from achieving their academic and career goals abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
