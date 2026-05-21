import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { site } from '../data/site';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-accent shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="text-2xl font-bold tracking-tight text-primary">
          {site.title}
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-secondary hover:bg-background focus:outline-none md:hidden"
        >
          {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>

        <nav className="hidden gap-6 text-sm font-semibold md:flex">
          {site.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'text-secondary hover:text-white transition-colors'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="absolute right-4 top-16 md:hidden">
          <div className="w-48 rounded-lg bg-white shadow-medium border border-gray-100">
            <nav className="flex flex-col space-y-2 p-4">
              {site.nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-accent' : 'text-secondary hover:text-primary transition-colors'
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