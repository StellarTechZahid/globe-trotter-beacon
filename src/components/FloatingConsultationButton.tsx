
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Phone, Clock, Bot, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import ConsultationForm from './ConsultationForm';
import AIChatbot from './AIChatbot';

const FloatingConsultationButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeView, setActiveView] = useState<'options' | 'ai-chat' | 'consultation'>('options');

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
      setIsDialogOpen(false);
    } else {
      window.location.href = '/#consultation-form';
    }
  };

  const handleViewChange = (view: 'options' | 'ai-chat' | 'consultation') => {
    setActiveView(view);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'ai-chat':
        return <AIChatbot onClose={() => handleViewChange('options')} />;
      
      case 'consultation':
        return (
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
        );
      
      default:
        return (
          <div className="py-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">How can we help you?</h3>
              <p className="text-white">Choose your preferred way to get assistance</p>
            </div>
            
            <div className="grid gap-4">
              <Card 
                className="bg-gray-900 border-orange-500 cursor-pointer hover:border-orange-400 transition-all duration-300 group"
                onClick={() => handleViewChange('ai-chat')}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                    <Bot className="h-8 w-8 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Chat with AI Assistant</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Get instant answers about studying abroad, scholarships, and universities
                  </p>
                  <div className="flex items-center justify-center text-orange-500 text-sm font-medium">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat Now
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-gray-900 border-orange-500 cursor-pointer hover:border-orange-400 transition-all duration-300 group"
                onClick={() => handleViewChange('consultation')}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all">
                    <Users className="h-8 w-8 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Book Free Consultation</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Get personalized guidance from our expert education counselors
                  </p>
                  <div className="flex items-center justify-center text-orange-500 text-sm font-medium">
                    <Phone className="h-4 w-4 mr-2" />
                    Register Now
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setActiveView('options');
        }}>
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
                {activeView === 'ai-chat' && 'AI Assistant'}
                {activeView === 'consultation' && 'Register for Free Consultation'}
                {activeView === 'options' && 'Get Help & Support'}
              </DialogTitle>
            </DialogHeader>
            
            {renderContent()}
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick action tooltip */}
      <div className="fixed bottom-24 right-6 z-40 pointer-events-none">
        <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-orange-500/20 animate-pulse">
          <div className="text-sm font-medium text-orange-500">Get Help</div>
          <div className="text-xs text-gray-300">AI Chat • Free Consultation</div>
        </div>
      </div>
    </>
  );
};

export default FloatingConsultationButton;
