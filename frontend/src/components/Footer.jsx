import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const socialLinks = [
    { href: 'https://www.instagram.com/csandrew_ke', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://twitter.com/cs_andrew', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://www.facebook.com/csandrew.ke', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://www.youtube.com/channel/UC9Xo8s5n1Z5j3k2l4m5n6o7', icon: FaYoutube, label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Get Involved', path: '/involve' }
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Child Protection Policy', path: '/child-protection' }
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'info@decenthumans.org', href: 'mailto:info@decenthumans.org' },
    { icon: FaPhone, text: '+254 724 436800', href: 'tel:+254724436800' },
    { icon: FaMapMarkerAlt, text: 'View Park Towers, 17TH Floor, Monrovia Street, Nairobi, Kenya', href: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Decent Humans</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Raising spiritually grounded and mentally healthy children through faith-based mentorship and holistic development programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <a 
                      href={item.href}
                      className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors"
                    >
                      <Icon className="mt-0.5 shrink-0" size={16} />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-3">
              Subscribe to receive updates about our programs and events.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-3 py-2 rounded-md text-primary bg-white/90 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button className="bg-accent hover:bg-accent/80 text-white px-3 py-2 rounded-md transition-colors text-sm font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Copyright */}
          <p className="text-white/60">
            © {new Date().getFullYear()} Decent Humans. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white/60 hover:text-accent transition-colors text-xs"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/60 hover:text-accent hover:bg-white/10 transition-colors p-2 rounded-full"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6 text-white/40 text-xs">
          Made with <FaHeart className="inline text-accent" size={10} /> in Nairobi, Kenya
        </div>
      </div>
    </footer>
  );
}

export default Footer;