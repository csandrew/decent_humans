import { useState } from 'react';
import { FaBars, FaTimes, FaDonate, FaHeart } from 'react-icons/fa';
import { site } from '../data/site';

function Header({ scrollToSection, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
  };

  // Handle Donate button click - scroll to Get Involved section
  const handleDonateClick = () => {
    setIsMenuOpen(false);
    if (scrollToSection) {
      scrollToSection('get-involved');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-soft py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-tight text-primary cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          {site.title}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors ${
                activeSection === item.id 
                  ? 'border-b-2 border-accent pb-1 text-accent' 
                  : 'text-secondary hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Donate Button - Desktop */}
        <button
          onClick={handleDonateClick}
          className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent/80 hover:shadow-medium md:inline-flex"
        >
          <FaDonate size={16} />
          Make a Donation
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-secondary hover:bg-background focus:outline-none md:hidden"
        >
          {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col space-y-3 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-semibold transition-colors py-2 ${
                  activeSection === item.id 
                    ? 'text-accent' 
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Donate Button - Mobile */}
            <button
              onClick={handleDonateClick}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-white transition-all hover:bg-accent/80"
            >
              <FaDonate size={16} />
              Make a Donation
             
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;