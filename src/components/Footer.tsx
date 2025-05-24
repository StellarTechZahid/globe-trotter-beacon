
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest updates on study abroad opportunities, scholarships, and application deadlines
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1 h-12 bg-white text-slate-800"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 h-12 px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <span className="text-2xl font-bold">StudyGlobal</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Your trusted partner for international education. We've been helping students achieve their dreams of studying abroad for over a decade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Services', 'Destinations', 'Success Stories', 'Blog', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h4 className="text-xl font-bold mb-6">Study Destinations</h4>
              <ul className="space-y-3">
                {['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'New Zealand'].map((destination) => (
                  <li key={destination}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-slate-300">123 Education Street</p>
                    <p className="text-slate-300">Global City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <p className="text-slate-300">hello@studyglobal.com</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-400 mb-2">Office Hours:</p>
                <p className="text-slate-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-300">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 StudyGlobal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
