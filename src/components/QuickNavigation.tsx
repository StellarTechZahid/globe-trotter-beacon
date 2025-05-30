
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickLink {
  name: string;
  id: string;
}

interface QuickNavigationProps {
  links: QuickLink[];
}

const QuickNavigation: React.FC<QuickNavigationProps> = ({ links }) => {
  const scrollToUniversity = (universityId: string) => {
    const element = document.getElementById(universityId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-orange-500 mb-4">Quick Navigation to Partner Universities</h3>
          <p className="text-gray-300">Jump directly to your preferred partner universities that recruit international students with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-orange-500 text-white hover:bg-orange-500 hover:text-black transition-colors p-3 h-auto text-center text-sm"
              onClick={() => scrollToUniversity(link.id)}
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNavigation;
