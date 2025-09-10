
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <footer className="bg-black text-white border-t border-orange-500">

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                  <span className="text-black font-bold text-xl">AA</span>
                </div>
                <span className="text-2xl font-bold">Abroad Academics</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for international education. We've been helping students achieve their dreams of studying abroad for over a decade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-500">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Our Services</Link></li>
                <li><Link to="/countries" className="text-gray-300 hover:text-orange-500 transition-colors">Destinations</Link></li>
                <li><Link to="/success-stories" className="text-gray-300 hover:text-orange-500 transition-colors">Success Stories</Link></li>
                <li><Link to="/blogs-news" className="text-gray-300 hover:text-orange-500 transition-colors">Blog & News</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-500">Study Destinations</h4>
              <ul className="space-y-3">
                <li><Link to="/countries/uk" className="text-gray-300 hover:text-orange-500 transition-colors">United Kingdom</Link></li>
                <li><Link to="/countries/usa" className="text-gray-300 hover:text-orange-500 transition-colors">United States</Link></li>
                <li><Link to="/countries/canada" className="text-gray-300 hover:text-orange-500 transition-colors">Canada</Link></li>
                <li><Link to="/countries/australia" className="text-gray-300 hover:text-orange-500 transition-colors">Australia</Link></li>
                <li><Link to="/countries/germany" className="text-gray-300 hover:text-orange-500 transition-colors">Germany</Link></li>
                <li><Link to="/countries/new-zealand" className="text-gray-300 hover:text-orange-500 transition-colors">New Zealand</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-500">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <p className="text-gray-300">123 Education Street</p>
                    <p className="text-gray-300">Global City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <p className="text-gray-300">+1 (234) 567-890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <p className="text-gray-300">info@abroadacademics.com</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">Office Hours:</p>
                <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Abroad Academics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
