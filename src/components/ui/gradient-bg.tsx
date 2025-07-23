
import React from 'react';

interface GradientBgProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const GradientBg: React.FC<GradientBgProps> = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const gradients = {
    primary: 'bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-transparent',
    secondary: 'bg-gradient-to-tr from-gray-900 via-gray-800 to-black',
    accent: 'bg-gradient-to-r from-orange-500 to-orange-600'
  };

  return (
    <div className={`${gradients[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default GradientBg;
