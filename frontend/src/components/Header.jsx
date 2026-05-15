/*import { Link, NavLink } from 'react-router-dom';
import { site } from '../data/site';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-brown/10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-2xl font-bold tracking-tight text-deep-brown">
          {site.title}
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-brown">
          {site.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-gold'
                  : 'text-brown hover:text-gold transition-colors'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>


  );
}

export default Header;*/


import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { site } from '../data/site';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-brown/10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-deep-brown sm:text-2xl">
          {site.title}
        </Link>

        {/* Hamburger button - ONLY on mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-brown hover:bg-brown/10 focus:outline-none md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden gap-4 text-sm font-semibold text-brown md:flex">
          {site.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-gold' : 'text-brown hover:text-gold transition-colors'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown menu - positioned under the hamburger button */}
      {isMenuOpen && (
        <div className="absolute right-4 top-14 md:hidden">
          <div className="w-40 rounded-md border border-brown/10 bg-brown/10 shadow-lg">
            <nav className="flex flex-col space-y-3 p-4">
              {site.nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-gold' : 'text-brown hover:text-gold transition-colors'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


