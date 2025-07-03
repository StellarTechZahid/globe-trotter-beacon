
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://ukdzoapwfritldskfzxo.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZHpvYXB3ZnJpdGxkc2tmenhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Mzc5OTcsImV4cCI6MjA2NzExMzk5N30.KMj-InYkxE9cHVpZgJpZvP9OB_YF2RkMQumlks-P2sQ`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message Sent Successfully!', {
          description: 'Thank you for contacting us. We will get back to you within 24 hours.',
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong!', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What services does Abroad Academics provide?",
      answer: "We provide comprehensive study abroad services including career counseling, university selection, application assistance, visa guidance, scholarship consulting, test preparation, and post-arrival support."
    },
    {
      question: "How much does your consultation cost?",
      answer: "We offer a free initial consultation to all students. Our detailed counseling packages are competitively priced and vary based on the services required. Contact us for personalized pricing."
    },
    {
      question: "Which countries do you help students apply to?",
      answer: "We help students apply to universities in the UK, USA, Canada, Australia, Germany, New Zealand, Italy, Malaysia, UAE, and many other countries worldwide."
    },
    {
      question: "What is your visa success rate?",
      answer: "We maintain a 95% visa success rate, which is among the highest in the industry. Our experienced team ensures proper documentation and preparation for visa applications."
    },
    {
      question: "Do you help with scholarship applications?",
      answer: "Yes, we provide comprehensive scholarship assistance including identifying opportunities, application support, and essay writing guidance for both merit-based and need-based scholarships."
    },
    {
      question: "How long does the application process take?",
      answer: "The timeline varies by country and university, but typically ranges from 3-8 months. We recommend starting the process at least 12 months before your intended start date."
    },
    {
      question: "Do you provide post-arrival support?",
      answer: "Yes, we offer comprehensive post-arrival support including airport pickup assistance, accommodation guidance, bank account setup, and orientation programs."
    },
    {
      question: "Can you help with English language test preparation?",
      answer: "Absolutely! We provide preparation courses and guidance for IELTS, TOEFL, PTE, and other English proficiency tests required for international admissions."
    }
  ];

  const offices = [
    {
      city: "Main Office - Global City",
      address: "123 Education Street, Global City, GC 12345",
      phone: "+1 (234) 567-890",
      email: "info@abroadacademics.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM"
    },
    {
      city: "Regional Office - Metro City",
      address: "456 Academic Avenue, Metro City, MC 67890",
      phone: "+1 (234) 567-891",
      email: "metro@abroadacademics.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our expert team for personalized guidance</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-orange-500">Get In Touch</h2>
              
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                  <h3 className="text-xl font-bold text-white mb-4">{office.city}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                      <p className="text-gray-300">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <p className="text-gray-300">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <p className="text-gray-300">{office.email}</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-orange-500 mt-1" />
                      <p className="text-gray-300">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Contact Options */}
              <div className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">WhatsApp Support</span>
                    <span className="text-orange-500">+1 (234) 567-890</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Emergency Hotline</span>
                    <span className="text-orange-500">+1 (234) 567-999</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Email Support</span>
                    <span className="text-orange-500">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-semibold">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" 
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" 
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold">Message *</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:border-orange-500 focus:outline-none" 
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>

              {/* Success Message */}
              <div className="mt-6 p-4 bg-black rounded-lg border border-orange-500">
                <p className="text-orange-500 font-semibold text-sm mb-2">✓ Connected to Supabase</p>
                <p className="text-gray-300 text-xs">
                  Your form submissions are now automatically saved and email notifications are sent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black rounded-lg border border-orange-500 mb-4">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Visit Our Office</h2>
            <p className="text-xl text-gray-300">Find us at our convenient locations</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-white text-lg">Interactive Map</p>
                  <p className="text-gray-300">Embed your Google Maps location here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Get personalized guidance from our expert counselors and take the first step towards your dream education abroad
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Consultation Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
