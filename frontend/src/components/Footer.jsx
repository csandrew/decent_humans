import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { href: 'https://www.instagram.com/csandrew_ke', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://twitter.com/cs_andrew', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://www.facebook.com/csandrew.ke', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://www.youtube.com/channel/UC9Xo8s5n1Z5j3k2l4m5n6o7', icon: FaYoutube, label: 'YouTube' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm">
        <p>© 2024 Decent Humans. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;