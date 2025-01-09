import React from 'react';

interface FooterLink {
  text: string;
  href: string;
}

const Footer: React.FC = () => {
  const topLinks: FooterLink[] = [
    { text: 'Blog', href: '#' },
    { text: 'Help Centre', href: '#' },
    { text: 'Community', href: '#' },
    { text: 'Terms', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Affiliates', href: '#' },
    { text: 'Testimonials', href: '#' },
    { text: 'Press', href: '#' },
    { text: 'Jobs', href: '#' },
  ];

  const bottomLinks: FooterLink[] = [
    { text: 'Landlords', href: '#' },
    { text: 'Tenants', href: '#' },
    { text: 'Search Houses for Rent', href: '#' },
    { text: 'Properties in London', href: '#' },
    { text: 'Properties in the UK', href: '#' },
  ];

  return (
    <footer className="flex flex-col justify-center items-center px-20 py-12 mt-20 w-full bg-stone-50 max-md:px-5 max-md:mt-10">
      <div className="flex flex-col items-start max-w-full w-[1200px]">
        <div className="text-lg text-black">© 2012 - 2025 OpenRent Ltd.</div>

        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-2.5 w-full">
          <nav className="flex flex-wrap gap-6 my-auto text-md" style={{ color: '#498EC9' }}>
            {topLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-blue-700 transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook-square text-4xl" style={{ color: '#498EC9' }}></i>
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter-square text-4xl" style={{ color: '#498EC9' }}></i>
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram text-4xl" style={{ color: '#498EC9' }}></i>
            </a>
          </div>
        </div>

        <address className="mt-10 text-lg text-zinc-500 not-italic">
          Ask Question - OpenRent Ltd, 20 Wenlock Road, London, N1 7GU
        </address>

        <nav className="flex flex-wrap gap-6 mt-3 text-md" style={{ color: '#498EC9' }}>
          {bottomLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-700 transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
