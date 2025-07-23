
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Star, MapPin } from 'lucide-react';

const Countries = () => {
  const countries = [
    { 
      name: 'United Kingdom', 
      slug: 'uk', 
      description: 'Rich academic heritage with globally recognized degrees',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=300&fit=crop',
      universities: '130+',
      students: '2.3M',
      flag: '🇬🇧'
    },
    { 
      name: 'United States', 
      slug: 'usa', 
      description: 'Home to world\'s top universities and cutting-edge research',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&h=300&fit=crop',
      universities: '4000+',
      students: '20M',
      flag: '🇺🇸'
    },
    { 
      name: 'Canada', 
      slug: 'canada', 
      description: 'Quality education with excellent post-study work opportunities',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd938?w=500&h=300&fit=crop',
      universities: '223+',
      students: '1.7M',
      flag: '🇨🇦'
    },
    { 
      name: 'Australia', 
      slug: 'australia', 
      description: 'World-class education in a multicultural environment',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      universities: '147+',
      students: '1.6M',
      flag: '🇦🇺'
    },
    { 
      name: 'Malaysia', 
      slug: 'malaysia', 
      description: 'Affordable quality education in Southeast Asia',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=300&fit=crop',
      universities: '150+',
      students: '1.3M',
      flag: '🇲🇾'
    },
    { 
      name: 'UAE', 
      slug: 'uae', 
      description: 'Modern education hub in the Middle East',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=300&fit=crop',
      universities: '100+',
      students: '800K',
      flag: '🇦🇪'
    },
    { 
      name: 'Germany', 
      slug: 'germany', 
      description: 'Leading in engineering and technology with affordable education',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=300&fit=crop',
      universities: '426+',
      students: '2.9M',
      flag: '🇩🇪'
    },
    { 
      name: 'Italy', 
      slug: 'italy', 
      description: 'Rich cultural heritage with excellent academic programs',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&h=300&fit=crop',
      universities: '200+',
      students: '1.8M',
      flag: '🇮🇹'
    },
    { 
      name: 'New Zealand', 
      slug: 'new-zealand', 
      description: 'Innovative education system with stunning natural beauty',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop',
      universities: '39+',
      students: '600K',
      flag: '🇳🇿'
    }
  ];

  return (
    <div className="min-h-screen bg-black w-full">
      <Helmet>
        <title>Study Destinations | Countries | Abroad Academics</title>
        <meta name="description" content="Explore study destinations worldwide. Find the perfect country for your international education." />
      </Helmet>
      
      <Navbar />
      
      <div className="main-content">
        <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800 full-width-container">
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
            alt="Study Destinations"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 container-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Study Destinations</h1>
              <p className="text-xl mb-6">Discover world-class education opportunities across the globe</p>
              <p className="text-lg opacity-90">Choose from 9 premium study destinations</p>
            </div>
          </div>
        </section>

        <section className="py-20 full-width-container">
          <div className="container-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Popular Study Destinations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each destination offers unique opportunities, quality education, and diverse cultural experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country, index) => (
                <Card key={index} className="bg-gray-900 border-orange-500 hover:border-orange-400 transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={country.image} 
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl">{country.flag}</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{country.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{country.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-orange-500" />
                        <span>{country.universities} Unis</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="h-4 w-4 mr-2 text-orange-500" />
                        <span>{country.students} Students</span>
                      </div>
                    </div>
                    
                    <Link to={`/countries/${country.slug}`} className="block">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold group">
                        Explore {country.name}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
