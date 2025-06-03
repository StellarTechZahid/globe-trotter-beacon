
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Eye, Share2, ArrowLeft, Lightbulb, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirstTimeInternationalStudents = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
          alt="Essential Tips for First-Time International Students"
          className="w-full h-full object-cover absolute inset-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/tips" className="inline-flex items-center text-green-300 hover:text-green-200 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tips
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              10 Essential Tips for First-Time International Students
            </h1>
            <div className="flex items-center flex-wrap gap-y-2 space-x-6 text-green-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Student Success Team
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                January 15, 2024
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                5 min read
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                4.9 (2.1k reviews)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gray-900 border-orange-500">
            <CardContent className="p-8">
              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
                <div className="flex items-center">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                    Beginner
                  </span>
                  <span className="ml-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Student Life
                  </span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Table of Contents */}
              <Card className="bg-black border-orange-500 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">In This Guide</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#pre-departure" className="hover:text-orange-500">1. Pre-Departure Preparation</a></li>
                    <li><a href="#first-week" className="hover:text-orange-500">2. Navigating Your First Week</a></li>
                    <li><a href="#cultural-adaptation" className="hover:text-orange-500">3. Cultural Adaptation Strategies</a></li>
                    <li><a href="#academic-success" className="hover:text-orange-500">4. Academic Success Tips</a></li>
                    <li><a href="#managing-finances" className="hover:text-orange-500">5. Managing Finances Wisely</a></li>
                    <li><a href="#health-wellbeing" className="hover:text-orange-500">6. Health and Wellbeing</a></li>
                    <li><a href="#building-network" className="hover:text-orange-500">7. Building Your Network</a></li>
                    <li><a href="#language-skills" className="hover:text-orange-500">8. Improving Language Skills</a></li>
                    <li><a href="#local-exploration" className="hover:text-orange-500">9. Exploring Your New Environment</a></li>
                    <li><a href="#homesickness" className="hover:text-orange-500">10. Dealing with Homesickness</a></li>
                  </ul>
                </CardContent>
              </Card>

              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <p className="text-lg leading-relaxed">
                    Starting your journey as an international student can be both exciting and overwhelming. You're about to 
                    embark on an adventure that will transform your perspectives, enhance your education, and create lifelong 
                    memories. To help you navigate this transition smoothly, we've compiled these essential tips based on the 
                    experiences of thousands of successful international students.
                  </p>

                  <section id="pre-departure" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                      <span className="flex items-center">
                        <Lightbulb className="h-8 w-8 mr-3 text-green-400" />
                        1. Pre-Departure Preparation
                      </span>
                    </h2>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">Document Checklist</h3>
                    <p className="mb-4">
                      Before you leave your home country, create a comprehensive document checklist. This should include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Passport with valid student visa</li>
                      <li>University acceptance letter and enrollment documents</li>
                      <li>Accommodation confirmation</li>
                      <li>Health insurance documentation</li>
                      <li>Travel insurance policy</li>
                      <li>Medical records and vaccination certificates</li>
                      <li>Copies of financial documents showing proof of funds</li>
                      <li>International driver's license (if applicable)</li>
                    </ul>
                    <p className="mb-4">
                      <strong className="text-orange-400">Pro Tip:</strong> Keep digital copies of all documents in cloud storage 
                      and email them to yourself. Also carry physical copies separate from the originals.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">Research Your Destination</h3>
                    <p className="mb-4">
                      Thoroughly research your destination country and city. Familiarize yourself with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Local customs, etiquette, and cultural norms</li>
                      <li>Climate and appropriate clothing</li>
                      <li>Public transportation systems</li>
                      <li>Common phrases in the local language</li>
                      <li>Location of your country's embassy or consulate</li>
                      <li>Local emergency numbers and procedures</li>
                    </ul>
                  </section>
                  
                  <section id="first-week" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                      <span className="flex items-center">
                        <Lightbulb className="h-8 w-8 mr-3 text-green-400" />
                        2. Navigating Your First Week
                      </span>
                    </h2>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">Attend Orientation Events</h3>
                    <p className="mb-4">
                      University orientation programs are designed to help you adjust to your new environment. Make sure to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Participate in campus tours to familiarize yourself with key locations</li>
                      <li>Attend international student welcome sessions</li>
                      <li>Learn about academic expectations and resources</li>
                      <li>Meet with your academic advisor</li>
                      <li>Join clubs and social events to start building connections</li>
                    </ul>
                    <p className="mb-4">
                      <strong className="text-orange-400">Pro Tip:</strong> Even if you're shy, push yourself to attend social 
                      events during orientation week. This is when everyone is looking to make new friends, making it easier to 
                      form connections.
                    </p>

                    <h3 className="text-2xl font-semibold text-white mb-4">Set Up Essentials</h3>
                    <p className="mb-4">
                      During your first week, prioritize setting up these essentials:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Local phone number/SIM card</li>
                      <li>Bank account</li>
                      <li>Student ID card</li>
                      <li>Transportation card/pass</li>
                      <li>Internet access in your accommodation</li>
                      <li>Register with local authorities (if required)</li>
                    </ul>
                  </section>

                  {/* More sections would continue */}
                  
                  <section id="cultural-adaptation" className="mt-12">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                      <span className="flex items-center">
                        <Lightbulb className="h-8 w-8 mr-3 text-green-400" />
                        3. Cultural Adaptation Strategies
                      </span>
                    </h2>
                    
                    <p className="mb-4">
                      Cultural adaptation is a natural process that all international students experience. Remember that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Culture shock is normal and temporary</li>
                      <li>Observe local customs and social norms</li>
                      <li>Ask questions when you're unsure about cultural practices</li>
                      <li>Be open to new perspectives and experiences</li>
                      <li>Connect with both local students and fellow international students</li>
                    </ul>
                    <p className="mb-4">
                      <strong className="text-orange-400">Pro Tip:</strong> Find a "cultural mentor" – a local student or friend 
                      who can help you navigate unwritten social rules and explain cultural contexts.
                    </p>
                  </section>

                  {/* Additional sections would be added here */}
                  
                  <section className="mt-12 border-t border-gray-700 pt-8">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Conclusion</h3>
                    <p className="mb-6">
                      Your international study journey is a unique opportunity for personal and academic growth. By implementing 
                      these tips, you'll be better prepared to overcome challenges and make the most of your experience abroad. 
                      Remember that adaptation takes time, so be patient with yourself and embrace the learning process.
                    </p>
                    <div className="bg-gray-800 p-6 rounded-lg border border-orange-500 mb-8">
                      <h4 className="text-xl font-bold text-white mb-3">Student Success Story</h4>
                      <p className="italic text-gray-300">
                        "As a first-time international student from India studying in Canada, I felt overwhelmed during my first month. 
                        Using these adaptation strategies, especially connecting with the local student association and finding a cultural 
                        mentor, made a tremendous difference. Three years later, I'm thriving academically and have built an amazing 
                        international network of friends."
                      </p>
                      <p className="text-right mt-2 text-orange-400">- Priya S., University of Toronto</p>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-8 py-3 w-full md:w-auto">
                        Get Personalized Study Abroad Guidance
                      </Button>
                    </Link>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Tips */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">More Tips You'll Find Useful</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scholarship Application Secrets: How to Stand Out",
                excerpt: "Proven strategies and insider tips to make your scholarship applications irresistible to selection committees.",
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=350&fit=crop",
                author: "Scholarship Expert",
                date: "January 12, 2024",
                difficulty: "Intermediate",
                link: "/tips/scholarship-application-secrets"
              },
              {
                title: "Budget-Friendly Study Abroad: Save Money Without Compromising Quality",
                excerpt: "Smart strategies to minimize costs while maximizing your international education experience.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=350&fit=crop",
                author: "Financial Advisor",
                date: "January 10, 2024",
                difficulty: "Beginner",
                link: "/tips/budget-friendly-study-abroad"
              },
              {
                title: "Cultural Adaptation: Thriving in Your New Country",
                excerpt: "Essential strategies for adapting to a new culture and making the most of your international experience.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=350&fit=crop",
                author: "Cultural Advisor",
                date: "January 3, 2024",
                difficulty: "Beginner",
                link: "/tips/cultural-adaptation"
              }
            ].map((tip, index) => (
              <Card key={index} className="bg-black border-orange-500 hover:border-orange-400 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {tip.difficulty}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{tip.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {tip.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {tip.date}
                    </div>
                  </div>
                  <Link to={tip.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      Read Full Tip
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimeInternationalStudents;
