
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TopBar from './navbar/TopBar';
import MobileNavigation from './navbar/MobileNavigation';
import { navItems } from './navbar/NavbarData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#consultation-form';
    }
  };

  return (
    <>
      <TopBar />

      {/* Main Navbar */}
      <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <span className="text-black font-bold text-xl">AA</span>
              </div>
              <span className="text-2xl font-bold text-white">Abroad Academics</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-white hover:text-orange-500 transition-colors duration-200 font-medium flex items-center px-3 py-2 whitespace-nowrap"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 ml-4"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <MobileNavigation
              navItems={navItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setIsMenuOpen={setIsMenuOpen}
              scrollToConsultation={scrollToConsultation}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
