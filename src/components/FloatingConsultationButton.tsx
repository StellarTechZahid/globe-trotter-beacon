
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
  const [isHovered, setIsHovered] = useState(false);

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
            
            <div className="grid gap-6">
              <Card 
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/50 cursor-pointer hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 group transform hover:scale-105"
                onClick={() => handleViewChange('ai-chat')}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-orange-500/30">
                    <Bot className="h-10 w-10 text-orange-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">🤖 AI Study Assistant</h4>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    Get instant, intelligent answers about studying abroad, scholarships, universities, and visa processes. Available 24/7!
                  </p>
                  <div className="flex items-center justify-center text-orange-500 text-base font-bold bg-orange-500/10 px-4 py-2 rounded-full group-hover:bg-orange-500/20 transition-all">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Start Chatting Now
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/50 cursor-pointer hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 group transform hover:scale-105"
                onClick={() => handleViewChange('consultation')}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full transform -translate-x-6 -translate-y-6"></div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-orange-500/30">
                    <Users className="h-10 w-10 text-orange-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">👨‍🎓 Expert Consultation</h4>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    Get personalized, professional guidance from our expert education counselors. Book your free session today!
                  </p>
                  <div className="flex items-center justify-center text-orange-500 text-base font-bold bg-orange-500/10 px-4 py-2 rounded-full group-hover:bg-orange-500/20 transition-all">
                    <Phone className="h-5 w-5 mr-2" />
                    Book Free Session
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
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group">
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setActiveView('options');
        }}>
          <DialogTrigger asChild>
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button
                className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-black font-bold rounded-full w-16 h-16 md:w-20 md:h-20 shadow-2xl shadow-orange-500/40 transition-all duration-500 transform hover:scale-110 relative overflow-hidden border-2 md:border-4 border-orange-400/30 hover:border-orange-300/50"
                size="lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <MessageCircle className="h-7 w-7 md:h-8 md:w-8 group-hover:scale-125 transition-all duration-300 relative z-10 drop-shadow-lg" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-ping"></div>
              <div className="absolute inset-1 rounded-full border-2 border-orange-400/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </DialogTrigger>

          <DialogContent className="bg-gradient-to-br from-black via-gray-900 to-black border-2 border-orange-500/50 max-w-[95vw] md:max-w-5xl max-h-[90vh] overflow-y-auto backdrop-blur-xl shadow-2xl shadow-orange-500/20 rounded-xl md:rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 rounded-xl md:rounded-2xl"></div>
            <DialogHeader className="relative z-10">
              <DialogTitle className="text-orange-500 text-xl md:text-3xl font-bold text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {activeView === 'ai-chat' && '🤖 AI Study Assistant'}
                {activeView === 'consultation' && '📞 Free Expert Consultation'}
                {activeView === 'options' && '🎓 Get Help & Support'}
              </DialogTitle>
            </DialogHeader>
            
            {renderContent()}
          </DialogContent>
        </Dialog>
      </div>

      {/* Enhanced tooltip - Hidden on mobile, shown on desktop */}
      <div className={`hidden md:block fixed bottom-24 md:bottom-28 right-4 md:right-6 z-40 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} pointer-events-none`}>
        <div className="bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-lg text-white px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl shadow-2xl border border-orange-500/30 transform max-w-[200px] md:max-w-none">
          <div className="text-sm md:text-base font-bold text-orange-500 mb-1">🚀 Need Help?</div>
          <div className="text-xs md:text-sm text-gray-300 mb-2">Choose your support:</div>
          <div className="flex flex-col space-y-1 text-xs">
            <div className="flex items-center space-x-2 text-orange-400">
              <span>🤖</span>
              <span>AI Assistant</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-400">
              <span>👨‍🎓</span>
              <span>Expert Call</span>
            </div>
          </div>
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-6 md:right-8 w-4 h-4 bg-black/95 border-r border-b border-orange-500/30 transform rotate-45"></div>
        </div>
      </div>
    </>
  );
};

export default FloatingConsultationButton;
