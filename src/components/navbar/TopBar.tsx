
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-orange-500" />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-orange-500" />
            <span>info@abroadacademics.com</span>
          </div>
        </div>
        <div className="hidden md:block">
          <span>📍 Free Consultation, No Fees! Fully Funded Scholarships Available</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
