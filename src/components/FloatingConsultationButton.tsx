
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Phone, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ConsultationForm from './ConsultationForm';

const FloatingConsultationButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the home page, navigate to it
      window.location.href = '/#consultation-form';
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold rounded-full w-16 h-16 shadow-2xl shadow-orange-500/30 transition-all duration-300 transform hover:scale-110 group"
              size="lg"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-black border-2 border-orange-500 max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-orange-500 text-2xl font-bold text-center">
                Register for Free Consultation
              </DialogTitle>
            </DialogHeader>
            
            <div className="py-4">
              <div className="text-center mb-6">
                <div className="bg-orange-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-10 w-10 text-orange-500" />
                </div>
                <p className="text-white text-lg mb-4">
                  Get personalized guidance from our expert counselors
                </p>
                <div className="flex items-center justify-center text-orange-500 font-medium">
                  <Clock className="h-5 w-5 mr-2" />
                  Available 24/7
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6">
                <ConsultationForm onSuccess={() => setIsDialogOpen(false)} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick action tooltip */}
      <div className="fixed bottom-24 right-6 z-40 pointer-events-none">
        <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-orange-500/20 animate-pulse">
          <div className="text-sm font-medium text-orange-500">Free Consultation</div>
          <div className="text-xs text-gray-300">Click to get started!</div>
        </div>
      </div>
    </>
  );
};

export default FloatingConsultationButton;
