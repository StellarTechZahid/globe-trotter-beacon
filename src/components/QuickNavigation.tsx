
import React from 'react';
import { Button } from '@/components/ui/button';

interface University {
  name: string;
  id: string;
}

interface QuickNavigationProps {
  universities: University[];
}

const QuickNavigation: React.FC<QuickNavigationProps> = ({ universities }) => {
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
          <h3 className="text-3xl font-bold text-orange-500 mb-4">Quick Navigation</h3>
          <p className="text-gray-300">Jump directly to your preferred universities</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {universities.map((university, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-orange-500 text-white hover:bg-orange-500 hover:text-black transition-colors p-3 h-auto text-center"
              onClick={() => scrollToUniversity(university.id)}
            >
              {university.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNavigation;
