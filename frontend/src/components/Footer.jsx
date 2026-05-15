function Footer() {
  const socialLinks = [
    
    {
      href: 'https://www.instagram.com/csandrew_ke',
      iconClass: 'fab fa-instagram',
      label: 'Instagram',
    },
    {
      href: 'https://twitter.com/cs_andrew',
      iconClass: 'fab fa-twitter',
      label: 'Twitter',
    },
    {
      href: 'https://www.facebook.com/csandrew.ke',
      iconClass: 'fab fa-facebook-f',
      label: 'Facebook',
    },
    {
      href: 'https://www.youtube.com/channel/UC9Xo8s5n1Z5j3k2l4m5n6o7',
      iconClass: 'fab fa-youtube',
      label: 'YouTube',
    }
  ];

  return (
    <footer className="bg-deep-brown text-cream">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm">
        <p>© 2024 Decent Humans. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-cream px-3 py-2 rounded-sm border border-green-100 hover:text-gold transition-colors"
              aria-label={item.label}
            >
              <i className={item.iconClass} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
