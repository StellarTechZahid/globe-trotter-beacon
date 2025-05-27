
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "India",
      university: "Harvard University",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Study Global made my dream of studying at Harvard a reality. Their expert guidance throughout the application process was invaluable."
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      university: "University of Oxford",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The visa assistance and scholarship guidance I received was exceptional. I'm now pursuing my PhD at Oxford thanks to Study Global."
    },
    {
      name: "Maria Rodriguez",
      country: "Mexico",
      university: "University of Toronto",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From university selection to pre-departure support, Study Global was with me every step of the way. Highly recommended!"
    },
    {
      name: "Liu Wei",
      country: "China",
      university: "MIT",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Their personalized approach and deep knowledge of different education systems helped me secure admission at MIT with a scholarship."
    },
    {
      name: "Sarah Johnson",
      country: "Australia",
      university: "Cambridge University",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The team's dedication and expertise in scholarship applications helped me secure full funding for my Master's at Cambridge."
    },
    {
      name: "Ravi Patel",
      country: "India",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Study Global's comprehensive support from application to settlement made my transition to Stanford seamless and stress-free."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-2 border-orange-500 shadow-2xl bg-gray-900">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-orange-500"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-xl text-gray-200 italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-300 mb-1">
                      From {testimonial.country}
                    </p>
                    <p className="text-orange-500 font-semibold">
                      Now studying at {testimonial.university}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-black p-3 rounded-full transition-all duration-200 shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-black p-3 rounded-full transition-all duration-200 shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
