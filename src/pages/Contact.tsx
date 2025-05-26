
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our expert team</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-orange-500">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@studyglobal.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">123 Education Street<br />Global City, GC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
