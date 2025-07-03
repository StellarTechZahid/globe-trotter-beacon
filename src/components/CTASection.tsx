import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInstallClick = () => {
    const event = (window as any).deferredPrompt; // Access deferredPrompt from global scope
    if (event) {
      (event as any)?.prompt();
      (event as any)?.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User installed the PWA');
        }
        (window as any).deferredPrompt = null;
      });
    } else {
      alert('Open your browser menu and select "Add to Home Screen" to install our app!');
    }
  };

  const benefits = [
    "Free 30-minute consultation call",
    "Personalized study abroad roadmap", 
    "University and program recommendations",
    "Scholarship opportunities assessment"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards your dream education abroad with a personalized consultation from our expert counselors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start text-black">
                <CheckCircle className="h-6 w-6 mr-3 text-black flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Free Consultation Call
            </Button>
            <div className="flex items-center text-black font-medium">
              <Clock className="h-5 w-5 mr-2" />
              Available 24/7
            </div>
          </div>

          <p className="text-black/70 text-sm mb-8">
            No commitment required • Speak with certified education consultants • Get instant answers
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-black mb-4">Download Our App!</h3>
            <p className="text-black/80 mb-4">
              Install the Abroad Academics app for instant access to study abroad resources. 
              Click below or tap "Add to Home Screen" in your browser menu!
            </p>
            <Button 
              onClick={handleInstallClick}
              className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-3"
            >
              Install Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;