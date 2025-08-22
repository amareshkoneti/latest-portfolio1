import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold transition-all duration-300 hover:text-primary hover:-translate-y-1 inline-block"
        >
          Amaresh's Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="relative font-medium hover:text-primary transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <button
            className="text-foreground focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
