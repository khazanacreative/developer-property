
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Helper function to determine if we should use hash or regular link
  const getNavLink = (hash, path) => {
    if (window.location.pathname === '/') {
      return hash;
    }
    return path;
  };

  return (
    <footer className="bg-natural-800 text-white relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-white font-serif font-bold text-2xl">AlAsri</span>
              <span className="text-primary font-serif italic">Hunian</span>
            </Link>
            <p className="text-natural-300 mb-6 max-w-md">
              PT AlAsri Hunian adalah pengembang properti terkemuka di Indonesia yang berfokus pada 
              pembangunan hunian berkualitas dengan konsep modern dan ramah lingkungan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-natural-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-natural-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-natural-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-natural-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigasi Cepat</h4>
            <ul className="space-y-3">
              <li>
                <Link to={getNavLink('#beranda', '/')} className="text-natural-300 hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to={getNavLink('#tentang', '/about')} className="text-natural-300 hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to={getNavLink('#proyek', '/projects')} className="text-natural-300 hover:text-primary transition-colors">
                  Proyek
                </Link>
              </li>
              <li>
                <Link to={getNavLink('#properti', '/properties')} className="text-natural-300 hover:text-primary transition-colors">
                  Properti
                </Link>
              </li>
              <li>
                <Link to={getNavLink('#kontak', '/contact')} className="text-natural-300 hover:text-primary transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <ul className="space-y-3">
              <li className="text-natural-300">
                Jl. Asri Sejahtera No. 123, <br />
                Jakarta Selatan, 12870
              </li>
              <li>
                <a href="tel:+62218765432" className="text-natural-300 hover:text-primary transition-colors">+62 21 8765 4321</a>
              </li>
              <li>
                <a href="mailto:info@alasrihunian.com" className="text-natural-300 hover:text-primary transition-colors">info@alasrihunian.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-natural-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-natural-400 text-sm">
            &copy; {new Date().getFullYear()} PT AlAsri Hunian. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-natural-400 text-sm hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-natural-400 text-sm hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
