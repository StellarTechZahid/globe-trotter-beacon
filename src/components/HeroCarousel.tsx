
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop",
      title: "Study in the UK",
      subtitle: "Transform Your Future with World-Class Education",
      description: "Join thousands of students achieving their dreams at top British universities",
      cta: "Explore UK Programs",
      countryLink: "/countries/uk"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop",
      title: "Study in Canada",
      subtitle: "Experience Excellence in Canadian Education",
      description: "Discover prestigious universities and excellent post-study opportunities",
      cta: "Explore Canada Programs",
      countryLink: "/countries/canada"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=1080&fit=crop",
      title: "Study in the USA",
      subtitle: "Quality Education in Land of Opportunities",
      description: "Experience world-class education with unlimited career possibilities",
      cta: "Explore USA Programs",
      countryLink: "/countries/usa"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
      title: "Study in Australia",
      subtitle: "World-Class Education Down Under",
      description: "Discover innovative programs in a multicultural environment",
      cta: "Explore Australia Programs",
      countryLink: "/countries/australia"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1920&h=1080&fit=crop",
      title: "Study in Malaysia",
      subtitle: "Gateway to Quality Asian Education",
      description: "Affordable excellence in the heart of Southeast Asia",
      cta: "Explore Malaysia Programs",
      countryLink: "/countries/malaysia"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
      title: "Study in UAE",
      subtitle: "Modern Education Hub of the Middle East",
      description: "Experience cutting-edge education in a global city",
      cta: "Explore UAE Programs",
      countryLink: "/countries/uae"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=1080&fit=crop",
      title: "Study in Germany",
      subtitle: "Excellence in Engineering and Innovation",
      description: "World-renowned education with minimal tuition fees",
      cta: "Explore Germany Programs",
      countryLink: "/countries/germany"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&h=1080&fit=crop",
      title: "Study in Italy",
      subtitle: "Rich Heritage Meets Academic Excellence",
      description: "Immerse yourself in culture while pursuing world-class education",
      cta: "Explore Italy Programs",
      countryLink: "/countries/italy"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1507865797090-4bb76b6c3b10?w=1920&h=1080&fit=crop",
      title: "Study in New Zealand",
      subtitle: "Innovation Meets Natural Beauty",
      description: "Experience progressive education in stunning landscapes",
      cta: "Explore New Zealand Programs",
      countryLink: "/countries/new-zealand"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-orange-400 animate-fade-in delay-200">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-400">
                  {slide.description}
                </p>
                <div className="space-x-4 animate-fade-in delay-600">
                  <Link to={slide.countryLink}>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    onClick={scrollToConsultation}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
