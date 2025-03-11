
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
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Properti', href: '#properti' },
    { name: 'Hubungi Kami', href: '#kontak' },
  ];

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
        <a href="#" className="flex items-center gap-2">
          <span className="text-primary font-serif font-bold text-2xl">AlAsri</span>
          <span className="text-natural-800 font-serif italic">Hunian</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-natural-800 hover:text-primary relative font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#kontak" 
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-natural-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container px-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-natural-100 pb-3">
                <a 
                  href={link.href}
                  className="text-natural-800 hover:text-primary text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a 
                href="#kontak" 
                className="bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-primary/90 transition-colors block text-center"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
