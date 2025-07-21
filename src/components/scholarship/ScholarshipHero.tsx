
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface ScholarshipHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const ScholarshipHero: React.FC<ScholarshipHeroProps> = ({ title, subtitle, description, icon: Icon }) => {
  return (
    <section className="relative h-[500px] bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-600/20 rounded-full blur-xl animate-pulse delay-700" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full border-2 border-white/20">
              <Icon className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-orange-100 font-medium">
            {subtitle}
          </p>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-200">1000+</div>
              <div className="text-sm text-white/80">Scholarships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-200">50+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-200">$2M+</div>
              <div className="text-sm text-white/80">Funding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipHero;
