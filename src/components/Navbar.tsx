
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

      {/* Main Navbar - Full Width */}
      <nav className="navbar-container bg-black shadow-lg sticky top-0 z-50 border-b border-orange-500">
        <div className="container-full">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                <span className="text-black font-bold text-xl">AA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  Abroad Academics
                </span>
                <span className="text-xs text-orange-400 font-medium tracking-wider">
                  STUDY ABROAD CONSULTANTS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Optimized for all screen sizes */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                to="/student-portal"
                className="text-white hover:text-orange-500 transition-colors duration-200 font-medium px-1.5 lg:px-2 xl:px-3 py-2 whitespace-nowrap text-xs lg:text-sm xl:text-base border border-orange-500 rounded-lg"
              >
                Student Portal
              </Link>
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-white hover:text-orange-500 transition-colors duration-200 font-medium flex items-center px-1.5 lg:px-2 xl:px-3 py-2 whitespace-nowrap text-xs lg:text-sm xl:text-base"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2 max-h-80 overflow-y-auto">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-sm"
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
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-2 lg:px-3 xl:px-4 py-2 ml-2 lg:ml-4 text-xs lg:text-sm xl:text-base whitespace-nowrap"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Link 
                to="/student-portal"
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-2 py-1 text-xs rounded"
              >
                Portal
              </Link>
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-2 py-1 text-xs"
              >
                Call
              </Button>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-500 transition-colors p-1"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
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
