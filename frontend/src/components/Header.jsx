// frontend/src/components/Header.jsx
import { useState } from 'react';
import { FaBars, FaTimes, FaDonate, FaHeart } from 'react-icons/fa';
import { site } from '../data/site';

function Header({ scrollToSection, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = site.navItems;

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="cursor-pointer text-xl font-bold tracking-tight text-primary sm:text-2xl" onClick={() => handleNavClick('home')}>
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
                  ? 'text-accent border-b-2 border-accent pb-1' 
                  : 'text-secondary hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Donate Button - Desktop */}
        <a
          href="https://wa.me/254700000000?text=I'd%20like%20to%20donate%20to%20Decent%20Humans"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent/80 hover:shadow-medium md:inline-flex"
        >
          <FaDonate size={16} />
          Donate
          <FaHeart size={14} className="text-red-400" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-secondary transition-colors hover:bg-background focus:outline-none md:hidden"
        >
          {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-lg px-3 py-2 text-left font-semibold transition-colors ${
                  activeSection === item.id 
                    ? 'text-accent' 
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Donate Button - Mobile */}
            <a
              href="https://wa.me/254700000000?text=I'd%20like%20to%20donate%20to%20Decent%20Humans"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/80"
            >
              <FaDonate size={16} />
              Donate Now
              <FaHeart size={14} className="text-red-400" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;