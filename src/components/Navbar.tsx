
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
      <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-orange-500 min-h-[64px]">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-16 gap-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 min-w-0">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1.5 sm:p-2 rounded-lg">
                <span className="text-black font-bold text-sm sm:text-lg lg:text-xl">AA</span>
              </div>
              <span className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-white truncate max-w-[120px] sm:max-w-none">
                Abroad Academics
              </span>
            </Link>

            {/* Ultra Wide Desktop Navigation (1600px+) */}
            <div className="hidden 2xl:flex items-center space-x-1 overflow-hidden">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-white hover:text-orange-500 transition-colors duration-200 font-medium flex items-center px-2 py-2 whitespace-nowrap text-sm xl:text-base"
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
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-3 py-2 ml-2 text-sm whitespace-nowrap"
              >
                Free Consultation
              </Button>
            </div>

            {/* Wide Desktop Navigation (1280px-1600px) */}
            <div className="hidden xl:flex 2xl:hidden items-center space-x-1 overflow-hidden">
              <Link to="/" className="text-white hover:text-orange-500 px-2 py-1 text-sm font-medium whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-white hover:text-orange-500 px-2 py-1 text-sm font-medium whitespace-nowrap">About</Link>
              
              <div className="relative group">
                <Link to="/services" className="text-white hover:text-orange-500 flex items-center px-2 py-1 text-sm font-medium whitespace-nowrap">
                  Services <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-48 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2 max-h-64 overflow-y-auto">
                    {navItems.find(item => item.name === 'Services')?.dropdown?.slice(0, 8).map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-3 py-1.5 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-xs"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link to="/countries" className="text-white hover:text-orange-500 flex items-center px-2 py-1 text-sm font-medium whitespace-nowrap">
                  Countries <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-40 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {navItems.find(item => item.name === 'Countries')?.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-3 py-1.5 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-xs"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link to="/scholarship" className="text-white hover:text-orange-500 flex items-center px-2 py-1 text-sm font-medium whitespace-nowrap">
                  Scholarship <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-40 bg-black border border-orange-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {navItems.find(item => item.name === 'Scholarship')?.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-3 py-1.5 text-white hover:text-orange-500 hover:bg-gray-900 transition-colors text-xs"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="text-white hover:text-orange-500 px-2 py-1 text-sm font-medium whitespace-nowrap">Contact</Link>
              
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-2 py-1 ml-1 text-xs whitespace-nowrap"
              >
                Free Call
              </Button>
            </div>

            {/* Desktop Navigation (1024px-1280px) */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1 overflow-hidden">
              <Link to="/" className="text-white hover:text-orange-500 px-1.5 py-1 text-sm whitespace-nowrap">Home</Link>
              <Link to="/services" className="text-white hover:text-orange-500 px-1.5 py-1 text-sm whitespace-nowrap">Services</Link>
              <Link to="/countries" className="text-white hover:text-orange-500 px-1.5 py-1 text-sm whitespace-nowrap">Countries</Link>
              <Link to="/scholarship" className="text-white hover:text-orange-500 px-1.5 py-1 text-sm whitespace-nowrap">Scholarship</Link>
              <Link to="/contact" className="text-white hover:text-orange-500 px-1.5 py-1 text-sm whitespace-nowrap">Contact</Link>
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-2 py-1 ml-1 text-xs whitespace-nowrap"
              >
                Free Call
              </Button>
            </div>

            {/* Tablet Navigation (768px-1024px) */}
            <div className="hidden md:flex lg:hidden items-center space-x-1 overflow-hidden">
              <Link to="/" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Home</Link>
              <Link to="/services" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Services</Link>
              <Link to="/countries" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Countries</Link>
              <Link to="/scholarship" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Scholarships</Link>
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-1.5 py-1 ml-1 text-xs whitespace-nowrap"
              >
                Free Call
              </Button>
            </div>

            {/* Small Tablet Navigation (640px-768px) */}
            <div className="hidden sm:flex md:hidden items-center space-x-1 overflow-hidden">
              <Link to="/" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Home</Link>
              <Link to="/services" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Services</Link>
              <Link to="/scholarship" className="text-white hover:text-orange-500 px-1 py-1 text-xs whitespace-nowrap">Scholarships</Link>
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-1.5 py-1 ml-1 text-xs whitespace-nowrap"
              >
                Call
              </Button>
            </div>

            {/* Mobile Menu Button (< 640px) */}
            <div className="sm:hidden flex items-center space-x-1">
              <Button 
                onClick={scrollToConsultation}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-1.5 py-1 text-xs whitespace-nowrap"
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
