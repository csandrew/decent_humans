import { Link, NavLink } from 'react-router-dom';
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

export default Header;
