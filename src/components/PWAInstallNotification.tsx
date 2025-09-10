import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PWAInstallNotificationProps {
  deferredPrompt: any;
  onInstall: () => void;
  onDismiss: () => void;
}

const PWAInstallNotification: React.FC<PWAInstallNotificationProps> = ({
  deferredPrompt,
  onInstall,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if notification should be shown
    const isToastDismissed = localStorage.getItem('pwaToastDismissed');
    const isAppInstalled = localStorage.getItem('pwaInstalled');
    
    if (!isToastDismissed && !isAppInstalled && !sessionStorage.getItem('pwaNotificationShown')) {
      sessionStorage.setItem('pwaNotificationShown', 'true');
      setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
      
      // Auto hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
        onDismiss();
      }, 8000);
    }
  }, [onDismiss]);

  const handleInstall = () => {
    setIsVisible(false);
    onInstall();
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] animate-slide-in-top">
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 border-0 shadow-2xl max-w-md mx-4">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Install Abroad Academics</h3>
                <p className="text-white/90 text-sm">Get instant access to study abroad guidance!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleInstall}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold flex-1"
            >
              <Smartphone className="mr-2 h-4 w-4" />
              Install Now
            </Button>
            <Button
              onClick={handleDismiss}
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PWAInstallNotification;