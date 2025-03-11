import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/', hash: '#beranda' },
    { name: 'Tentang Kami', href: '/about', hash: '#tentang' },
    { name: 'Proyek', href: '/projects', hash: '#proyek' },
    { name: 'Properti', href: '/properties', hash: '#properti' },
    { name: 'Hubungi Kami', href: '/contact', hash: '#kontak', isButton: true },
  ];

  const getLinkHref = (link) => {
    if (window.location.pathname === '/' && link.hash && link.href === '/') {
      return link.hash;
    }
    return link.href;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-primary font-serif font-bold text-2xl">AlAsri</span>
          <span className="text-natural-800 font-serif italic">Hunian</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.filter(link => !link.isButton).map((link) => (
              <li key={link.name}>
                <Link 
                  to={getLinkHref(link)}
                  className="text-natural-800 hover:text-primary relative font-medium text-sm transition-colors"
                  onClick={() => {
                    if (link.hash && window.location.pathname === '/') {
                      const element = document.querySelector(link.hash);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/contact" 
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="md:hidden text-natural-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container px-8">
          <ul className="flex flex-col gap-6">
            {navLinks.filter(link => !link.isButton).map((link) => (
              <li key={link.name} className="border-b border-natural-100 pb-3">
                <Link 
                  to={getLinkHref(link)}
                  className="text-natural-800 hover:text-primary text-lg font-medium"
                  onClick={() => {
                    setIsOpen(false);
                    if (link.hash && window.location.pathname === '/') {
                      setTimeout(() => {
                        const element = document.querySelector(link.hash);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link 
                to="/contact" 
                className="bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-primary/90 transition-colors block text-center"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
