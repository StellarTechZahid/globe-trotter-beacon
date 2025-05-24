
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Users, Award, BookOpen, Globe, Phone, Mail, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import DestinationCards from '@/components/DestinationCards';
import ServicesSection from '@/components/ServicesSection';
import UniversityCarousel from '@/components/UniversityCarousel';
import ImpactCounter from '@/components/ImpactCounter';
import BlogSection from '@/components/BlogSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Explore Top Study <span className="text-blue-600">Destinations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover world-class education opportunities across the globe's most prestigious academic destinations
            </p>
          </div>
          <DestinationCards />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Transforming Dreams into <span className="text-blue-600">Reality</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                For over a decade, StudyGlobal has been the trusted partner for students seeking world-class education abroad. 
                Our expert team provides personalized guidance, comprehensive support, and proven strategies to help you succeed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">Expert Counseling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">Visa Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">Scholarship Guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">Post-Arrival Support</span>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                  alt="Students studying" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                <p className="text-blue-100">
                  Join thousands of successful students who have achieved their dreams of international education with our guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Partner Universities */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Partner <span className="text-blue-600">Universities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We've partnered with prestigious institutions worldwide to provide you with the best educational opportunities
            </p>
          </div>
          <UniversityCarousel />
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak for our commitment to student success
            </p>
          </div>
          <ImpactCounter />
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Consultation Form */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Get Your Free <span className="text-orange-500">Consultation</span>
              </h2>
              <p className="text-xl text-slate-600">
                Take the first step towards your international education journey
              </p>
            </div>
            
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <form className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <Input placeholder="Enter your full name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <Input placeholder="Enter your phone number" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Country</label>
                    <Input placeholder="Select destination" className="h-12" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your study goals..." className="h-32" />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
